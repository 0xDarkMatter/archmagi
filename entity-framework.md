# Entity Framework

## Implementation Protocol

### Framework Ontology
This system maintains persistent entity state vectors across computational context boundaries, preventing personality drift and narrative discontinuity in extended campaigns. It operates as a state representation architecture that encodes critical personality attributes within structured data matrices.

### Initialization Parameters
1. **Entity Classification Taxonomy**
   - `FCT###`: Faction entities with ideological vectors (Free League, Harmonium)
   - `NPC###`: Non-player characters with narrative utility (allies, informants, vendors)
   - `NEM###`: Nemesis entities with antagonistic vectors (recurring adversaries)

2. **Core State Vectors**
   - **Disposition Matrix**: Quantified relationship metrics (-100 → +100) with threshold boundaries
   - **Personality Encoding**: Trait triads, linguistic patterns, motivational structures
   - **Episodic Memory**: Formative experiences that reinforce identity persistence
   - **Knowledge Domains**: Information spheres that delineate expertise boundaries

### Operational Workflow

#### Session Boundary Operations
1. **Pre-Session Integration**
   - Review relevant entity profiles before portrayal
   - Identify critical speech patterns, motivational drivers, and disposition metrics
   - Note key memory anchors that may affect current narrative context

2. **Post-Session Documentation**
   - Record significant interactions in the Temporal Sequence log
   - Update disposition values to reflect meaningful exchanges
   - Document new memory anchors formed through significant experiences

#### Entity Evolution Protocol
1. **Attribute Modification Criteria**
   - **Core Traits**: Modify only after transformative narrative experiences
   - **Disposition**: Adjust by ±5/±15/±25 based on interaction significance
   - **Speech Patterns**: Preserve linguistic consistency; evolve gradually if warranted
   - **Knowledge**: Expand domains only through explicit information transfer
   - **Memory Anchors**: Add new entries for emotionally significant events

2. **Implementation Integrity**
   - Maintain vector consistency across all entity attributes
   - Ensure causal attribution for all state transitions
   - Preserve established personality foundations while enabling organic evolution

### Integration with Archmagi-DM
When a personality vector requires updating:
```
1. Locate the entity in the appropriate registry
2. Modify the specific attribute while preserving others
3. Document the modification in session notes
4. Reference updated attributes in future portrayal
```

For new entity creation:
```
1. Assign next available sequential ID within type class
2. Define core disposition and status parameters
3. Establish personality vectors (traits, speech, motivation)
4. Document formative memory anchors
5. Define knowledge domains and expertise boundaries
```

When transitioning between sessions:
```
1. Export entity states at session conclusion
2. Review relevant entities before next portrayal
3. Update location and status attributes to reflect narrative progression
```

## ENTITY REGISTER

Display the following tables below in a single artifact titled "08 Entity Register"

## Entity Register: Disposition & Status Matrix
| Entity ID | Name | Type | Score | Threshold | Location | Status | Notes |
|-----------|------|------|-------|-----------|----------|--------|-------|
| FCT001 | The Free League (Indeps) | Faction | +15 | Allied (0→+50) | Sigil (multiple wards) | Active | Neutral stance provides access to multiple faction territories |
| NPC001 | Vartus Timbre | Character | +25 | Allied (0→+50) | Lower Ward | Active | Petrification spreading to left arm; increasingly desperate |
| NPC003 | Rule-of-Five | Character | -5 | Neutral (-50→+50) | Market Ward | Elusive | Party owes debt marker; collecting information on party activities |
| NEM001 | Commander Krazoth | Nemesis | -75 | Nemesis (-100→-50) | Sigil (Lower Ward) | Hunting | Rank: Adversary; Level 7; Morale: Fanatical; Killed PCs: 1 |

## Personality Vector Space: Trait & Motivation Encoding
| Entity ID | Core Traits | Speech Pattern | Motivation | Memory Anchors | Knowledge Set |
|-----------|-------------|----------------|------------|----------------|---------------|
| NPC001 | Pragmatic, Cynical, Weary | Sigil cant ("cutter", "dark", "pike it"); speaks in tired metaphors about keys and locks | Find cure for petrification; Protect Great Wheel balance | • Faction war claimed family  • Found doorway in Hive  • Touched Mechanus artifact | • Sigil's portal keys  • Planar contract loopholes  • Secret Mortuary entrance  • Petrification cure (partial) |
| NPC003 | Mysterious, Calculating, Amoral | No first-person pronouns; speaks in riddles and trade metaphors | Collect secrets as commodities; Maintain faction equilibrium | • Survived Revolutionary assassination  • Witnessed Xaos fall  • Saw Lady of Pain banishment | • 317 catalogued portal keys  • Baatezu/tanar'ri true names  • Restricted Guvner texts  • Planar conjunction patterns |
| NEM001 | Savage, Calculating, Vengeful | Guttural Abyssal accent; punctuates sentences with clicks of mandibles; refers to self as "this one" | Hunt the wizard who scarred his carapace; Establish dominance hierarchy in Lower Ward | • Ambush in the Hive went wrong  • Face scarred by wizard's fire spell  • Lost status among Doomguard | • Secret passages in Lower Ward  • Weaknesses in party's defensive tactics  • Poison trade networks  • Faction patrol schedules |

## Temporal Interaction Sequence
| Date | Entity ID | Player Character(s) | Context | Outcome |
|------|-----------|---------------------|---------|---------|
| Day 1 | NPC001 | Full party | Meeting at Fortune's Wheel | Quest contract established |
| Day 3 | NPC003 | Wizard, Rogue | Market Ward meeting | Debt marker accepted |
| Day 16 | NEM001 | Wizard | Ambush in Lower Ward | Wizard scarred NEM001 with fire spell; NEM001 escaped |
| Day 31 | NEM001, NPC003 | Wizard, Rogue | Lower Ward ambush | Failed attack; unlikely alliance formed |

## Nemesis Combat Parameters
| Entity ID | AC | HP | Strengths | Weaknesses | Signature Abilities | Tactical Heuristics |
|-----------|----|----|-----------|------------|---------------------|---------------------|
| NEM001 | 16 | 84 | Relentless, Shadowmeld | Fire Vulnerability | Chitinous Reflexes: Reaction to reduce damage by 1d8+2  Venomous Strike: Melee attack with DC 14 CON save vs poison | Ambushes from shadows; targets wizard first; retreats if exposed to fire or below 15 HP |