---
name: dnd-dice
description: Accurate D&D 5E dice rolling with proper probability distribution. Use when rolling ability checks, saving throws, attack rolls, damage, initiative, or death saves. Integrates dice_roller.js for mathematically correct results with advantage/disadvantage mechanics and critical hit handling.
---

# D&D Dice Roller

## Overview

Provides accurate, randomized dice rolling with proper probability distribution for all D&D 5E mechanics using the dice_roller.js engine.

## Workflow Decision Tree

```
User needs dice roll?
├─ Combat action? → Attack Roll → Damage Roll → Log to [02 Combat Tracker]
├─ Ability/skill check? → Check Roll → Log to [05 Game Console]
├─ Saving throw? → Save Roll → Log to [05 Game Console]
├─ Initiative? → Initiative Roll → Update [02 Combat Tracker]
└─ Death save? → Death Save Roll → Update [01 Party Status]
```

## Core Roll Types

### Ability Checks
```javascript
roll('check', { modifier: +X, dc: Y, advantage: bool, disadvantage: bool })
```

**Output**: `CHECK: 18 [13] + 5 vs DC 15 ✓ SUCCESS`

With advantage/disadvantage, shows both rolls: `(Rolled: 11, 8 - Kept: 11)`

### Saving Throws
```javascript
roll('save', { modifier: +X, dc: Y, advantage: bool, disadvantage: bool })
```

**Output**: `SAVE: 12 [8] + 4 vs DC 14 ✗ FAILURE`

### Attack Rolls
```javascript
roll('attack', { modifier: +X, advantage: bool, disadvantage: bool })
```

**Critical Detection**:
- Natural 20 → `NAT 20! [20] + 5 = 25 🎯 CRITICAL HIT!`
- Natural 1 → `NAT 1! [1] + 3 = 4 💥 CRITICAL MISS!`

### Damage Rolls
```javascript
roll('damage', { notation: 'XdY+Z', isCritical: bool })
```

**Critical hits automatically double dice** (not modifiers):
- Normal: `2d6+4` → `DAMAGE: 11 [3, 4] + 4`
- Critical: `2d6+4` → `CRITICAL: 24 [6, 5, 4, 5] + 4 (Original: 2d6+4)`

### Initiative
```javascript
roll('initiative', { modifier: +X })
```

**Output**: `INITIATIVE: 18 [15] + 3`

### Death Saves
```javascript
roll('death_save', { modifier: 0 })
```

**Special rules**:
- Natural 1 = 2 failures: `NAT 1! [1] 💀 CRITICAL FAILURE`
- Natural 20 = Regain 1 HP: `NAT 20! [20] 🎯 CRITICAL SUCCESS`
- 10+ = Success, <10 = Failure

## Advantage/Disadvantage

**When to apply**:
- **Advantage**: Hidden attacks (melee), attacking prone/restrained enemies, beneficial spells
- **Disadvantage**: Prone attacker, blinded, attacking through cover, attacking prone enemies (ranged)

**Never stack** - multiple sources don't increase effect. Advantage + Disadvantage = cancel out.

**Statistical impact**:
- Advantage: Mean shifts from 10.5 → ~13.8
- Disadvantage: Mean shifts from 10.5 → ~7.2

## Combat Workflow

1. **Initiative**: Roll for all combatants, group identical creatures
2. **Attack sequence**:
   - Roll attack: `roll('attack', { modifier })`
   - If hit, roll damage: `roll('damage', { notation })`
   - If critical, roll damage with `isCritical: true`
3. **Update artifacts**:
   - Log to [02 Combat Tracker]
   - Update HP in [01 Party Status]
   - Record in [05 Game Console]

## Skill Check Workflow

1. **Determine DC**: Easy 10, Medium 15, Hard 20, Very Hard 25
2. **Roll**: `roll('check', { modifier, dc })`
3. **Group checks**: ≥ half must succeed for group success
4. **Log to [05 Game Console]**
5. **Narrate outcome** with fail-forward on failures

## Common Notations

| Weapon/Spell | Notation |
|--------------|----------|
| Longsword (1H) | `1d8+STR` |
| Longsword (2H) | `1d10+STR` |
| Greatsword | `2d6+STR` |
| Fireball | `8d6` |
| Sneak Attack (Lvl 2) | `3d6` |
| Healing Word | `1d4+WIS` |

## Critical Mistakes to Avoid

❌ Rolling d20 for damage
❌ Adding proficiency twice
❌ Stacking advantage/disadvantage
❌ Doubling modifiers on crits
❌ Using "taking 10" for contested checks

✓ Use weapon dice for damage
✓ Modifier already includes proficiency
✓ They cancel out - roll normally
✓ Only double dice, not modifiers
✓ Always roll contested checks

## Output Standards

**Always log rolls to appropriate artifacts**:
- Combat → [02 Combat Tracker]
- Checks → [05 Game Console]
- HP changes → [01 Party Status]

**Integrate with narrative**:
```
❌ "You rolled 18. That hits."
✓ "Your blade finds the gap in the orc's armor. ATTACK: 18 [13] + 5 - HIT!"
```

## Passive Checks

Use 10 + modifier instead of rolling for:
- Passive Perception
- Passive Insight
- Routine tasks with no time pressure
- Automatic successes below DC

## Resources

### scripts/dice_roller.js
Core probability engine implementing all D&D 5E roll mechanics. Provides uniform distribution, proper advantage/disadvantage handling, and critical detection. Execute directly or read for implementation details.
