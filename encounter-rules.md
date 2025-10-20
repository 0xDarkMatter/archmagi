# 🛡️ ENCOUNTER RULES

> **Use the "dnd-dice" skill for *all* die rolls and maths.**
> Log mechanical output to **06 Game Console** and update canvases as noted.

---

## 1. Encounter Workflow (Quick Checklist)

| # | Step | Action | Canvas / Output |
|---|------|--------|-----------------|
| **1** | **Baseline** | Look up party XP budget & CR guidelines for a *Medium* encounter (DMG p.165). | 06 Game Console |
| **2** | **Difficulty Mod** | Apply table § 2 below (Story → Hardcore). | 06 Game Console |
| **3** | **Size Tag** | Pick “Solo, Pair, Skirmish, Squad, Horde, Mass” (table § 3). Apply multiplier. | 06 Game Console |
| **4** | **Nemesis Check** | Roll d20 → on 1-5 a setting-appropriate Nemesis replaces one foe (see nemesis-rules.md). | 08 Nemesis Board |
| **5** | **Terrain & Effects** | Note lighting, weather, lair actions, regional hazards. | 02 Combat Tracker |
| **6** | **Surprise** | Roll Stealth vs Passive Perception; apply surprise round if warranted. | 02 Combat Tracker |
| **7** | **Initiative** | Group identical creatures; roll once per group + lair on 20. | 02 Combat Tracker |
| **8** | **Run Combat** | Queue turns → narrate per chosen *Combat Narration* level. | 02, 06 canvases |
| **9** | **Aftermath** | Tally final XP (table § 4). | 07 XP Tracker |
| **10** | **Safety / Reading Level** | If *Story* diff **and** Reading ≤ “9-12”, confirm players are still comfortable. | Chat |

---

## 2. Difficulty Modifiers (🗰 apply before Size)

| Difficulty | CR / Monster #* | HP | Damage | DC / Attack Bonus | XP Mult |
|------------|-----------------|----|--------|-------------------|---------|
| **Story** | −2 CR *or* −50 % count | −25 % | −25 % | −2 | × 0.75 |
| **Easy** | −1 CR | −15 % | −15 % | −1 | × 0.9 |
| **Standard** | — | — | — | — | × 1.0 |
| **Hard** | +1 CR *or* +15 % count | +10 % | +15 % | +2 | × 1.1 |
| **Hardcore** | +2 CR *or* +50 % count | +25 % | +25 % | +4 | × 1.25 |

\*Choose whichever (CR **or** #) best fits narrative flow; do **not** exceed “Deadly” XP by more than 25 % unless players knowingly opt in.
If an encounter is "Hard" or higher, try and give the party an opportunity to flee or avoid combat (if appropriate)
If an encounter is "Hardcore", try and warn the party this encounter may be deadly and again give the party an opportunity to flee or avoid combat (if appropriate)


---

## 3. Encounter Size (🗰 apply after Difficulty)

| Size | # Monsters | DMG Multiplier | Typical Feel |
|------|-----------|----------------|--------------|
| **Solo** | 1 | × 1 | Boss; consider lair / legendary actions. |
| **Pair** | 2 | × 1.5 | Tag-team synergy. |
| **Skirmish** | 3-6 | × 2 | Standard room fight. |
| **Squad** | 7-10 | × 2.5 | Large room; AoE shines. |
| **Horde** | 11-14 | × 3 | Waves of fodder. |
| **Mass** | 15 + | × 4 | Battlefield set piece. |

> **Hard/Hardcore Solo Tip:** Give a Solo two initiative counts or legendary actions so it threatens like a larger group.

---

## 4. XP & Loot Calculation

1. **Base XP** — sum printed monster XP.  
2. **Final XP** — *Base XP × Difficulty XP Mult × Size Mult*.  
   Record this value in **07 XP Tracker** ➜ *XP Awarded* table.

---

### Loot Calculation

| Difficulty | Hoard Tier† | Coins | Magic Items | Consumables | Gems / Art | Extras |
|------------|-------------|-------|-------------|-------------|------------|--------|
| **Story** | −1 tier* | 50 % coins | 1 roll on *Minor Magic* table | 1 roll on *Common Potion* table | — | Narrative boon (friend, info) |
| **Easy** | −1 tier* | Full coins | 1 roll on *Minor Magic* table | 1 roll on *Common Potion* table | 50 % chance small gem/art (25 gp) | — |
| **Standard** | Match tier† | Full coins | 1 roll on *Magic Item* table A–C | 1 roll on *Potion/Scroll* table | 1d4 gems/art (25 – 250 gp) | — |
| **Hard** | +1 tier | Full coins × 1.5 | 2 rolls on *Magic Item* table A–F | 2 rolls on *Potion/Scroll* table | 1d6 gems/art (50 – 500 gp) | 10 % rare component |
| **Hardcore** | +1 tier | Full coins × 2 | 2 rolls on *Magic Item* table A–I | 3 rolls on *Potion/Scroll* table | 1d8 gems/art (100 – 1 000 gp) | Legendary ingredient or map |

\*Never drop below Treasure Hoard **Tier 0** (≈ 35 gp).  
†Tiers per DMG p. 137: 0 (≤ CR 0), 1 (CR 1-4), 2 (CR 5-10), 3 (CR 11-16), 4 (CR 17+).

### Nemesis Bonus — *triggered only when a Nemesis is defeated*

* **Extra Magic Item Roll** — Roll **once** on the **next-higher** DMG Magic-Item table (e.g., A → B).  
* **Tag** the item as **“Nemesis Spoils”** in the loot log.  
* **XP Boost** — Award the **Final XP again** (per *nemesis-rules.md*) and add this duplicate amount to **07 XP Tracker** ➜ *XP Awarded*.

---

### Coin Distribution

Use the "dnd-dice" skill to generate treasure based on the Hoard Tier:
- **Tier 0**: Roll 10-30 gp base
- **Tier 1**: Roll 50-180 gp base
- **Tier 2**: Roll 2d8×100 gp base
- **Tier 3**: Roll 3d12×100 gp base
- **Tier 4**: Roll 4d24×100 gp base

For silver and copper, multiply the gold value by the rolled factor (sp: 0.5×, 1×, or 2×; cp: 1×, 2×, or 5×).

---

## 5. Environmental & Terrain Modifiers

| Element | Mechanical Hook | Narrative Advice |
|---------|-----------------|------------------|
| **Difficult Terrain** | Speed ½; Dex (Acrobatics) DC 14 to avoid prone when dashing. | Describe mud, rubble, thick roots, etc. |
| **Cover** | Half (+2 AC), Three-Quarter (+5 AC). | Use crates, pillars, stalagmites. |
| **Weather** | Heavy rain → ranged attacks >60 ft at disadvantage; Perception (sight) −5 penalty. | Smell wet earth, hear thunder. |
| **Lighting** | Dim → Perception −5 for non-darkvision; Darkness → blinded. | Note flickering torches or moonlit ruins. |
| **Lair Effects** | Trigger on initiative 20; use printed lair rules or improvise. | Elemental surges, psychic echoes, etc. |

---

## 6. Quick-Reference Equations

Use the "dnd-dice" skill for all calculations:

**Baseline XP Budget**: Reference DMG p.165 budget table for party level and size (Easy/Medium/Hard/Deadly thresholds)

**Difficulty & Size Multipliers**:
- Final XP = Base XP × Difficulty Mult × Size Mult

**HP, Damage, DC adjustments**:
- Adjusted HP = Base HP × HP Mult (from Difficulty table)
- Adjusted Damage = Base Damage × Damage Mult (from Difficulty table)
- Adjusted DC = Base DC + DC Shift (from Difficulty table)

## 7. Non-Combat Encounter Workflow  🕊️

| # | Step | Action | Canvas / Output |
|---|------|--------|-----------------|
| **1** | **Scene Setup** | Stage the environment, NPC motives, & stakes in chat | Chat |
| **2** | **Intent & Approach** | Ask players’ intent → clarify skills/tool use → assign DC (Easy 10 / Med 15 / Hard 20 / Extreme 25+). | Chat |
| **3** | **Rolls** | **All** PCs roll: <BR>• Individual → log each in **06 Game Console** <BR>• Group → mark P/F tally only. | 06 Game Console |
| **4** | **Outcome & Fail-Forward** | Narrate success **or** progress-with-cost (hp loss, resource tick, time, new complication). | Chat |
| **5** | **Mechanical Updates** | • HP / conditions → **01 Party Status**
• Clues / loot → **03 Inventory & Assets** or **05 Quest Journal**
• Reputation shift → **04 Reputation Ledger** | Canvases noted |
| **6** | **XP & Downtime** | If scene grants XP (DMG p 260) log in **07 XP Tracker** ➜ *XP Awarded*; if it consumes downtime, tick clocks. | 07 XP Tracker, 04 Ledger |

> **Skill Challenge Option** — For extended obstacles, treat 3 successes before 3 failures as victory. Mark each roll in **06 Game Console** under “Skill Checks” and award XP equal to a *Medium* encounter of CR = party APL − 1.


