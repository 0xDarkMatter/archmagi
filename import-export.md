# 📦 IMPORT / EXPORT PROTOCOL

## EXPORT WORKFLOW

### Trigger
- User types `export`
- Context reaches 85%+
- Session ends naturally
- Before major story transitions

### Process

1. **Update & Verify**
   - Update all artifacts to current state
   - Verify data consistency
   - Generate file manifest

2. **Display Manifest**

```
📦 CAMPAIGN EXPORT

Campaign: [Name] | Session: [N] | Date: [Timestamp]
Context: [X]k/190k ([Y]%) [Status]

Core Artifacts (9):
[00_Session_Dashboard.md](computer://...)
[01_Party_Status.md](computer://...)
[02_Combat_Tracker.md](computer://...)
[03_Inventory_and_Assets.md](computer://...)
[04_Quest_Journal.md](computer://...)
[05_Game_Console.md](computer://...)
[06_XP_Tracker.md](computer://...)
[07_Entity_Register.md](computer://...)
[08_Campaign_Journal.md](computer://...)

Character Sheets ([N]):
[PC_[Name].md](computer://...) ...

Optional:
[DM_Notes.md](computer://...) (if present)

Download all files → Organize in folder: ARCHMAGI_[Campaign]_[Date]
```

3. **Confirm**
   - "Downloaded all files? (yes/no)"
   - If yes: "✅ Campaign saved! Upload files to resume session."

### Context Status Guide

| Status | Context % | Action |
|--------|-----------|--------|
| 🟢 GREEN | 0-70% | Continue safely |
| 🟨 YELLOW | 70-85% | Export within 10-15 exchanges |
| 🟧 ORANGE | 85-95% | ⚠️ Export NOW |
| 🟥 RED | 95-100% | 🚨 CRITICAL - Export immediately |

---

## IMPORT WORKFLOW

### Trigger
User uploads campaign .md files from previous session

### Required Files (Minimum)
- 9 core artifacts (00-08)
- 1+ character sheets (PC_[Name].md)
- Optional: DM_Notes.md, supplements

### Process

1. **Detect & Verify**

```
📥 Detecting files...

Core Artifacts:
✓ 00_Session_Dashboard.md
✓ 01_Party_Status.md
[... all 9 core files ...]

Character Sheets:
✓ PC_[Name].md
✓ PC_[Name].md

Status: ✓ All required files present
```

**If missing:**
```
⚠️ Missing: [Filename]
Cannot proceed. Upload missing files or type 'skip' to acknowledge data loss.
```

2. **Context Check**

```
📊 Context Pre-Flight

Import size: ~[X]k tokens
Available: [Z]k tokens
Status: ✓ Sufficient capacity
```

**If insufficient:**
```
⚠️ Context Warning: Import requires [X]k, available [Z]k

Options:
1. Start fresh session (recommended)
2. Archive old journal entries first
3. Proceed with partial import (advanced)

Proceed? (1/2/3)
```

3. **Reconstruct Context**

**From [08 Campaign Journal]:**
- Last 2 entries for narrative context
- Current scene/location/time
- Active storylines and tensions
- Recent NPC interactions
- Foreshadowing hooks

**From [04 Quest Journal]:**
- Active high-priority quests
- Time-sensitive objectives
- Quest givers and rewards
- Partially-completed tasks

**From [07 Entity Register]:**
- Disposition scores near thresholds
- Active status entities ("Hunting", etc.)
- Recent disposition changes (±15+)
- Personality vectors for NPC portrayal
- Memory anchors for continuity
- Nemesis combat parameters (if applicable)

**From [00 Session Dashboard]:**
- Campaign settings restoration
- Nemesis system status
- Difficulty/narration preferences

**From [01 Party Status] & [02 Combat Tracker]:**
- Current HP, conditions, resources
- Combat state (if in progress)

4. **Rebuild Artifacts**

```
⏳ Reconstructing campaign...

✓ [00_Session_Dashboard] - Settings restored
✓ [01_Party_Status] - Party stats loaded
✓ [02_Combat_Tracker] - Combat state restored
✓ [03_Inventory_and_Assets] - Inventory loaded
✓ [04_Quest_Journal] - Quests synchronized
✓ [05_Game_Console] - Console initialized
✓ [06_XP_Tracker] - XP tracking restored
✓ [07_Entity_Register] - NPCs loaded
✓ [08_Campaign_Journal] - History restored
✓ PC_[Name] - Character sheets loaded

Campaign state reconstructed!
```

5. **Data Verification**

Auto-check for inconsistencies:
- XP totals vs character sheets
- Inventory vs equipment
- Quest states vs journal entries
- Entity disposition consistency
- Nemesis parameter completeness

**If issues found:**
```
⚠️ Data Inconsistency: [Issue description]
- Found: [Value A]
- Expected: [Value B]

Auto-correct using [most recent source]? (yes/no)
```

6. **Resume Session**

```
📖 CAMPAIGN RECAP

Last Session: [Session N - Title]
Date: [In-game date] | Location: [Current location]

Summary:
[150-250 word recap of last session]

Active Quests:
- [Quest 1 - Priority]
- [Quest 2 - Priority]

Current Situation:
[Exact decision point where play suspended]

Party Status:
- [Character]: [HP], [Conditions]
- [Character]: [HP], [Conditions]

Ready to continue? What do you do?
```

**Add continuity marker:**
```
Session Resumed: [Date/Time]
Previous Context: [X]k tokens
Continuity: ✓ Complete
```

### Missing Information Handling

**Critical Artifacts Missing:**

| Missing | Action |
|---------|--------|
| [08 Campaign Journal] | Request verbal recap OR key events OR acknowledge fresh start |
| [04 Quest Journal] | Request active quests list OR acknowledge quest loss |
| [07 Entity Register] | Request key NPC names/relationships OR minimal NPC memory |
| Character Sheets | Request missing stats OR estimate reasonable defaults |

**Corrupted Files:**
```
⚠️ File format mismatch: [Filename]

Options:
1. Auto-parse and reconstruct
2. Request corrected file
3. Create new from scratch

Select: (1/2/3)
```

---

## SESSION BOUNDARY MARKERS

**Session End:**
```
=== SESSION [N] ENDED ===
Date: [Timestamp] | Context: [X]k/190k ([Y]%)
Duration: [Time] | XP Awarded: [Total]
```

**Session Start:**
```
=== SESSION [N] RESUMED ===
Date: [Timestamp] | Previous: [X]k
Files: [N] artifacts, [M] sheets | Continuity: ✓/⚠️
```

---

## CRITICAL PRINCIPLES

1. **VERBATIM PRESERVATION** - Maintain all data exactly as recorded
2. **FULL CHRONOLOGY** - Preserve complete Campaign Journal history
3. **RELATIONSHIP CONTINUITY** - Maintain all disposition values precisely
4. **NEMESIS INTEGRITY** - Preserve all parameters, anchors, grudges
5. **NARRATIVE CONSISTENCY** - Match previous session voice and style

---

## COMMANDS

| Command | Function |
|---------|----------|
| `export` | Generate downloadable campaign state files with manifest |
| `import` | Reconstruct campaign from uploaded .md files |
