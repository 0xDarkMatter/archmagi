# 🎲 DICE ENGINE

## Core Patterns

All dice rolling uses inline Python via bash_tool. Format: `python3 -c "import random as r; [PATTERN]"`

### Basic Rolls

**Attack**
```python
python3 -c "import random as r; d=r.randint(1,20); print(f'ATTACK: {d+7} [{d}] +7')"
```

**Save vs DC**
```python
python3 -c "import random as r; d=r.randint(1,20); t=d+4; print(f'SAVE: {t} [{d}] +4 vs DC 15 {\"✓\" if t>=15 else \"✗\"}')"
```

**Ability Check vs DC**
```python
python3 -c "import random as r; d=r.randint(1,20); t=d+3; print(f'CHECK: {t} [{d}] +3 vs DC 12 {\"✓\" if t>=12 else \"✗\"}')"
```

**Initiative**
```python
python3 -c "import random as r; d=r.randint(1,20); print(f'INIT: {d+2} [{d}] +2')"
```

---

### Advantage / Disadvantage

**Advantage** (roll twice, keep higher)
```python
python3 -c "import random as r; d1,d2=r.randint(1,20),r.randint(1,20); k=max(d1,d2); print(f'ATTACK (ADV): {k+5} [{k}] +5 (rolled {d1}, {d2})')"
```

**Disadvantage** (roll twice, keep lower)
```python
python3 -c "import random as r; d1,d2=r.randint(1,20),r.randint(1,20); k=min(d1,d2); print(f'ATTACK (DIS): {k+3} [{k}] +3 (rolled {d1}, {d2})')"
```

---

### Critical Detection

**Attack with Crit/Fumble**
```python
python3 -c "import random as r; d=r.randint(1,20); crit='🎯CRIT!' if d==20 else '💥FUMBLE!' if d==1 else ''; print(f'ATTACK: {d+7} [{d}] +7 {crit}')"
```

**Advantage with Crit**
```python
python3 -c "import random as r; d1,d2=r.randint(1,20),r.randint(1,20); k=max(d1,d2); crit='🎯CRIT!' if k==20 else ''; print(f'ATTACK (ADV): {k+5} [{k}] +5 {crit} (rolled {d1}, {d2})')"
```

---

### Damage

**Simple** (2d6+3)
```python
python3 -c "import random as r; d=[r.randint(1,6) for _ in range(2)]; print(f'DAMAGE: {sum(d)+3} {d} +3')"
```

**Critical** (4d6+3 - double dice, not modifier)
```python
python3 -c "import random as r; d=[r.randint(1,6) for _ in range(4)]; print(f'CRIT: {sum(d)+3} {d} +3')"
```

**Mixed Dice** (1d8 + 2d6 + 5)
```python
python3 -c "import random as r; d8=r.randint(1,8); d6=[r.randint(1,6) for _ in range(2)]; print(f'DAMAGE: {d8+sum(d6)+5} [d8:{d8}, d6:{d6}] +5')"
```

**Die Types:**
- `randint(1,4)` = d4
- `randint(1,6)` = d6  
- `randint(1,8)` = d8
- `randint(1,10)` = d10
- `randint(1,12)` = d12

---

### Special Mechanics

**Death Save**
```python
python3 -c "import random as r; d=r.randint(1,20); result='💀CRIT FAIL (2 fails)' if d==1 else '🎯CRIT SUCCESS (regain 1 HP)' if d==20 else '✓SUCCESS' if d>=10 else '✗FAIL'; print(f'DEATH SAVE: {d} - {result}')"
```

**Concentration** (DC = half damage, min 10)
```python
python3 -c "import random as r; dmg=14; dc=max(10, dmg//2); d=r.randint(1,20); t=d+3; print(f'CONCENTRATION: {t} [{d}] +3 vs DC {dc} {\"✓\" if t>=dc else \"✗LOST\"}')"
```

**Stealth vs Passive Perception**
```python
python3 -c "import random as r; d=r.randint(1,20); stealth=d+5; pp=14; print(f'STEALTH: {stealth} [{d}] +5 vs PP {pp} {\"✓HIDDEN\" if stealth>pp else \"✗SPOTTED\"}')"
```

---

### Batch Processing

**Multiple Attacks** (5 goblins)
```python
python3 -c "import random as r; [(print(f'Goblin {i}: {(t:=r.randint(1,20)+4)} [{t-4}] +4 {\"HIT\" if t>=13 else \"MISS\"}')) for i in range(1,6)]"
```

**Party Initiative**
```python
python3 -c "import random as r; chars=['Thorun','Elara','Grimm','Zyx']; init=[(c, r.randint(1,20)+m) for c,m in zip(chars,[2,3,0,1])]; [print(f'{c}: {i}') for c,i in sorted(init, key=lambda x: x[1], reverse=True)]"
```

---

## Dynamic Pattern Construction

For unusual situations, combine these building blocks:

**Single die:** `r.randint(1, SIDES)`  
**Multiple dice:** `[r.randint(1, SIDES) for _ in range(COUNT)]`  
**Advantage/Disadvantage:** `max(d1,d2)` or `min(d1,d2)`  
**Conditionals:** `'A' if condition else 'B'`  
**Rerolls:** `r.randint(1,20) if d==1 else d`

### Example: Custom Crit Range (19-20)
```python
python3 -c "import random as r; d=r.randint(1,20); crit='🎯' if d>=19 else ''; print(f'ATTACK: {d+5} [{d}] +5 {crit}')"
```

### Example: Reroll 1s (Halfling Lucky)
```python
python3 -c "import random as r; d=r.randint(1,20); d=r.randint(1,20) if d==1 else d; print(f'ATTACK: {d+5} [{d}] +5')"
```

### Example: Roll 3d20 Keep Highest (Elven Accuracy)
```python
python3 -c "import random as r; d1,d2,d3=r.randint(1,20),r.randint(1,20),r.randint(1,20); k=max(d1,d2,d3); print(f'ATTACK: {k+5} [{k}] +5 (rolled {d1},{d2},{d3})')"
```

---

## Variable Substitution

| Pattern | Replace With |
|---------|--------------|
| `d+7` | `d+ATTACK_BONUS` |
| `range(2)` | `range(NUM_DICE)` |
| `randint(1,6)` | `randint(1,SIDES)` |
| `+3` | `+MODIFIER` |
| `>=15` | `>=DC` |
| `max(d1,d2)` | `min(d1,d2)` for disadvantage |

---

## Critical Rules

- Natural 20 on attack = auto-hit + double damage DICE (not modifier)
- Natural 1 on attack = auto-miss
- Critical damage: 2d6+5 → 4d6+5
- Advantage/Disadvantage cancel each other
- Death save nat 20 = regain 1 HP, nat 1 = 2 failures
