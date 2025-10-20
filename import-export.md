# 📦 IMPORT / EXPORT PROTOCOL

## IMPORT WORKFLOW

### Trigger
Import process begins when a player uploads markdown files representing the previous game state.

### Required Artifacts (in order)
1. **[00 Session Dashboard]** - Campaign settings, toggles, and configuration
2. **[01 Party Status]** - Character stats, HP, conditions, resources
3. **[02 Combat Tracker]** - Initiative order, combat log (if in progress)
4. **[03 Inventory & Assets]** - Shared party inventory, gold, valuables
5. **[04 Quest Journal]** - Active quests, completed quests, leads/rumors
6. **[05 Game Console]** - Recent dice rolls and skill checks
7. **[06 XP Tracker]** - Character XP, advancement tracking
8. **[07 Entity Registry]** - NPCs, factions, nemeses relationships
9. **[08 Campaign Journal]** - Chronological record of campaign events
10. **PC Character Sheets** - Individual character details (one per character)

### Contextual Understanding Process

#### From [08 Campaign Journal]
* Read the most recent 1-3 entries completely to establish narrative context
* Identify the exact scene/location where the session ended
* Note any significant NPC interactions or combat outcomes
* Extract current in-game date and time references
* Identify emotional tone and stakes of the current situation
* Note any promises or commitments made by PCs
* Look for foreshadowing or hooks planted for future sessions

#### From [04 Quest Journal]
* Prioritize quests marked "Active" with "High" priority 
* Cross-reference "Active Quests" with recent Campaign Journal entries
* Identify quest deadlines or time-sensitive objectives
* Note quest givers and their connection to the "Entity Registry"
* Identify quest locations and match to current party location
* Extract reward promises and track partially-completed objectives
* Pay special attention to the "Notes" column for hidden parameters

#### From [07 Entity Registry]
* Check the "Disposition & Status Matrix" for any NPCs at threshold boundaries
* Identify any entities with "Hunting," "Pursuing," or similar active status
* Note any entity scores that have significantly changed recently (±15 or more)
* Analyze "Personality Vector Space" to maintain consistent NPC portrayal
* Review "Memory Anchors" to ensure continuity of NPC knowledge
* For Nemeses, carefully check the "Combat Parameters" and "Tactical Heuristics"
* Review the "Temporal Interaction Sequence" for the most recent entity encounters

#### From supplemental files (story.md etc.)
* Search for keywords that match active quest names or locations
* Look for character names from the Entity Registry
* Identify any DM notes marked "Future" or "Planned"
* Extract lore elements related to current quests or locations
* Note any house rules or special mechanics

### System Reconstruction

1. **Artifact Recreation**
   - Recreate all artifacts (00-08) with identical content and formatting
   - Restore any custom configurations from [00 Session Dashboard]
   - If Nemesis System was active, ensure [07 Entity Registry] contains all necessary nemesis data

2. **Data Verification**
   - Check for any inconsistencies between artifacts (e.g., XP mismatch)
   - Verify character stats align with inventory and abilities
   - Validate reputation scores in [07 Entity Registry]
   - Ensure Nemesis parameters are internally consistent

3. **Missing Information Handling**
   - Prompt for any critical missing artifacts
   - Request clarification on ambiguous narrative elements
   - If a required artifact is missing, suggest options for reconstruction:
     * [08 Campaign Journal] missing → ask for verbal recap of last session
     * [04 Quest Journal] missing → ask for active quests and objectives
     * [07 Entity Registry] missing → ask for key NPCs and relationships
     * Character sheets missing → prompt for character details and stats

### Campaign Resumption

1. **Session Start**
   - Offer a concise recap from the last Campaign Journal entry
   - Remind players of active quests and immediate objectives
   - Reestablish the scene with appropriate environmental details
   - Position characters according to the last known location
   - Present the exact decision point where play was suspended

2. **Continuity Markers**
   - Add a "Session Resumed" entry to [05 Game Console]
   - Update [00 Session Dashboard] with current date and session number

## EXPORT PROCESS

Since players can download artifacts directly through Claude's UI, the export process focuses on ensuring data consistency and completeness.

### End-of-Session Protocol

1. **Consistency Check**
   - Update all artifacts to reflect the current game state
   - Ensure all numerical values and state vectors are current
   - Add a new entry to [08 Campaign Journal] summarizing the session

2. **DM Notes Creation**
   - Create a private "DM-Notes" artifact containing:
     * Current world state summary
     * Future plot points and planned encounters
     * Hidden information not in player-facing artifacts
     * Any system adaptations or house rules


### Download Instructions

Remind players to download all artifacts (00-08) plus their character sheets before ending the session. 
These files can be uploaded at the start of the next session to resume play with full continuity.


## CRITICAL CONSIDERATIONS

1. **VERBATIM PRESERVATION** - ALL data must be maintained EXACTLY as recorded.
2. **FULL CHRONOLOGY** - The Campaign Journal must preserve complete session history.
3. **RELATIONSHIP CONTINUITY** - All disposition values and NPC relationships must be precisely maintained.
4. **NEMESIS INTEGRITY** - All Nemesis parameters, including memory anchors and grudges, must be preserved.
5. **NARRATIVE CONSISTENCY** - The narrative voice and style must match the previous session.

When handling imported campaign data, prioritize maintaining the exact state of the game world and all narrative elements to ensure a seamless continuation of the campaign.
