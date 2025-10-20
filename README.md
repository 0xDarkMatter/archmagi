# ⚔️ ArchMagi - AI Game Master System

An advanced AI-powered Dungeon Master for tabletop RPG campaigns, designed to deliver literary-grade D&D 5E experiences with mechanical precision and richly textured storytelling.

## Overview

ArchMagi is a comprehensive prompt engineering framework that transforms Claude AI into a veteran D&D 5E game master. It combines encyclopedic Rules-As-Written knowledge with sophisticated narrative capabilities, offering customizable campaign experiences from streamlined encounters to literary-quality epic narratives.

## ✨ Key Features

### 🎭 Adaptive Narrative Engine
- **4 Narrative Density Levels**: Basic → Standard → Literary → Nexus
- **4 Narrative Styles**: Succinct → Typical → Verbose → Florid
- **Variable Reading Levels**: 5-8 (young readers) to 15+ (literary complexity)
- **Dynamic Combat Narration**: Off → Brief → Dramatic → Epic
- Sophisticated scene construction with psychological depth and sensory richness

### 🎲 Complete Campaign Management
- **Session Dashboard**: Comprehensive campaign configuration and settings
- **Party Status Tracking**: Character stats, conditions, and health
- **Combat System**: Full D&D 5E combat with initiative tracking
- **Inventory Management**: Shared party inventory and individual character sheets
- **Quest Journal**: Multi-tier quest tracking (rumors → side quests → major arcs)
- **XP Tracking**: Automated experience point calculation and leveling
- **Entity Registry**: NPC tracking with reputation, relationships, and voice patterns
- **Campaign Journal**: Chronological narrative history with location signatures

### ⚔️ Advanced Combat Features
- Mathematically balanced encounter scaling
- Environmental modifiers and tactical positioning
- Fail-forward mechanics (failure advances story, never stalls)
- Lair actions and legendary actions support
- Automated dice rolling with advantage/disadvantage

### 👿 Nemesis System
- Procedurally generated persistent antagonists
- Dynamic personality traits and evolution
- Reputation-based relationship tracking (-100 to +100 scale)
- Narrative integration with psychological depth

### 🎵 Audio Integration
- Voice generation guidelines for dramatic moments
- Character voice selection matrices
- Contextual narration parameters

## 🚀 Getting Started

### Prerequisites

**Required:**
- Claude AI account with Projects access
- **Claude Sonnet 4.5** (recommended model for optimal performance)

### Installation

1. **Create a Claude Project**
   - Go to [Claude.ai](https://claude.ai)
   - Create a new Project
   - Name it "ArchMagi" (or your preferred campaign name)

2. **Add System Instructions**
   - In your Project settings, go to **"Custom instructions"**
   - Upload `00-archmagi-command-prompt.md` to **Project Instructions**
   - This file contains the core system prompt and orchestration logic

3. **Upload Knowledge Base Files**
   - Upload all remaining `.md` files to **Project Knowledge** (Files section):
     - Campaign configuration: `campaign-options.md`
     - Rules systems: `encounter-rules.md`, `nemesis-rules.md`, `entity-framework.md`, `journal-rules.md`, `statblocks-rules.md`
     - Narrative engine: `narrative-engine.md`
     - Features: `audio-narration-rules.md`, `formatting-rules.md`, `import-export.md`
     - Templates: `00 Session Dashboard.md` through `08 Campaign Journal.md`
     - Character template: `character-sheet-template.md`
     - Dice engine: `dice-engine.md`

4. **Start Your Campaign**
   - Start a new conversation in your Project
   - ArchMagi will automatically initialize using the instructions
   - Follow the setup workflow to configure your campaign

### Quick Start

Once your project is set up:

1. **Configure Campaign**: ArchMagi will guide you through campaign options
   - Choose world setting, narrative style, tone, difficulty
   - Set narrative density and reading level preferences
   - Enable/disable nemesis system and audio narration

2. **Create Characters**:
   - Upload existing character sheets (Markdown preferred)
   - Or request pre-generated characters for your setting

3. **Begin Adventure**: ArchMagi initializes all tracking artifacts and presents your inciting incident

## ⚙️ Campaign Configuration Options

ArchMagi offers extensive customization through 11 different configuration categories:

### 1. Campaign Settings (20+ Options)
Choose from classic and modern D&D settings:
- **Forgotten Realms** - High fantasy with divine intervention and ancient evils
- **Greyhawk** - Medieval authenticity with moral ambiguity
- **Eberron** - Post-war dieselpunk with dragonmarked houses
- **Ravenloft** - Gothic horror with tragic Darklords
- **Planescape** - Philosophical faction wars across infinite planes
- **Dark Sun** - Brutal post-apocalyptic desert survival
- **Strixhaven** - Magical university with academic competition
- **Exandria** - World rebuilding after divine calamity (Critical Role setting)
- **Homebrew** - Custom worlds limited only by imagination
- *...and 11 more official settings*

### 2. Narrative Style (4 Levels)
- **Basic** - Lean, punchy narration for fast play
- **Standard** - Balanced description with clear exposition
- **Literary** - Rich sensory prose with layered detail
- **Nexus** - Highest-density poetic language with metaphor and multisensory imagery

### 3. Tone (14 Options)
Define your campaign's emotional landscape:
- **Dark** - Moral ambiguity, grim stakes, costly victories
- **Classic** - Traditional heroic fantasy, good vs evil
- **Light** - Upbeat, witty, low on gore
- **Heroic** - Bold exploits celebrated in song
- **Gothic** - Brooding atmospheres, decaying grandeur
- **Horror** - Haunting suspense, visceral shocks, survival-focused
- **Pulp** - High-octane action with cliff-hangers
- **Noir** - Cynical urban intrigue, flawed protagonists
- **Epic** - World-spanning conflicts, mythic stakes
- **Clockwork** - Industrial/steampunk aesthetics
- **Cosmic** - Lovecraftian entities, alien geometries, existential dread
- **Cozy** - Low-stress, slice-of-life, heartwarming
- **Surreal** - Dream-logic, uncanny juxtapositions
- **Intrigue** - Political maneuvering, espionage, double-crosses

### 4. Description Length (4 Settings)
- **Brief** - 1-2 focused sentences
- **Standard** - 1-2 paragraphs
- **Detailed** - 3-5 paragraphs with history and foreshadowing
- **Rich** - 5+ multisensory paragraphs for pivotal moments

### 5. Combat Narration (4 Levels)
- **Off** - Mechanics only, minimal description
- **Brief** - One-liner cinematic beats
- **Dramatic** - Paragraph vignettes with visceral sensations
- **Epic** - Sweeping slow-motion prose, cinematic finales

### 6. Difficulty (5 Tiers)
- **Story** - Ideal for new players, rarely lethal
- **Easy** - Light challenge, heroes feel powerful
- **Standard** - RAW 5E baseline
- **Hard** - High tension, resource attrition
- **Hardcore** - "Tomb of Horrors" mode, death matters

### 7. Reading Level (5 Age Ranges)
- **5-8** - Early reader, simple sentences
- **9-12** - Middle grade, familiar terms
- **12-15** - Young teen, moderate complexity
- **15-18** - Upper teen, richer vocabulary
- **18+** - Adult, full florid prose

### 8. Nemesis System
- **Enabled** - 5-7 persistent antagonists with evolving grudges
- **Disabled** - Standard encounters only

### 9. Audio Narration
- **Enabled** - ElevenLabs text-to-speech for dramatic moments
- **Disabled** - Text-only narration

### 10. Safety Tools
- **Lines & Veils** - Define content boundaries
- **X-Card (✖️)** - Instant pause & rewind for discomfort
- **Customizable** - Tailor to table preferences

### 11. Session Toggles
All settings can be adjusted mid-session with voice commands (e.g., `style verbose`, `tone gothic`, `combat epic`)

## 📚 Core System Files

### System Instructions
- **`00-archmagi-command-prompt.md`** ← **Goes in Project Instructions**
  - Core system prompt and workflow orchestration
  - Session initialization procedures
  - Command registry and core principles

### Knowledge Base Files (Project Files)

#### Essential Rules
- **`campaign-options.md`** - Campaign settings, narrative parameters, difficulty scaling
- **`encounter-rules.md`** - Combat mechanics, difficulty balancing, XP calculation
- **`narrative-engine.md`** - Advanced narrative transformation algorithms
- **`entity-framework.md`** - NPC persistence and personality consistency protocols

#### Advanced Systems
- **`nemesis-rules.md`** - Persistent antagonist generation and evolution
- **`journal-rules.md`** - Campaign continuity and documentation standards
- **`statblocks-rules.md`** - Creature statistics formatting
- **`formatting-rules.md`** - Output standardization and visual hierarchy
- **`audio-narration-rules.md`** - Voice generation integration guidelines
- **`import-export.md`** - Campaign persistence across sessions

#### Templates (00-08)
Data structure definitions for all campaign tracking artifacts:
- **00 Session Dashboard** - Campaign configuration center
- **01 Party Status** - Character overview and conditions
- **02 Combat Tracker** - Initiative and combat management
- **03 Inventory & Assets** - Shared party loot
- **04 Quest Journal** - Quest tracking and rumors
- **05 Game Console** - Dice rolls and scratch calculations
- **06 XP Tracker** - Experience point logging
- **07 Entity Registry** - NPC and faction tracking
- **08 Campaign Journal** - Narrative history

#### Utilities
- **`dice-engine.md`** - Inline Python patterns for all dice rolls via bash_tool. Provides accurate D&D 5E dice rolling with proper probability distribution.
- **`character-sheet-template.md`** - Standardized character sheet format

## 🎮 In-Game Commands

| Command | Function |
|---------|----------|
| `style [succinct\|typical\|verbose\|florid]` | Adjust narrative verbosity |
| `narrate [basic\|standard\|literary\|nexus]` | Set narrative density level |
| `combat [off\|brief\|dramatic\|epic]` | Configure combat narration detail |
| `vivid [on\|off]` | Toggle vivid combat descriptions |
| `tone [option]` | Change narrative tone |
| `stat {object}` | Display stat block |
| `party status` | Show party overview |
| `inventory` | Display party inventory |
| `quests` | Show quest journal |
| `recap` | Get story summary |
| `init nemesis` | Activate nemesis system |
| `safety [on\|off\|status]` | Manage content safety settings |

## 🎯 Use Cases

### Perfect For:
- **Solo D&D Players** seeking full campaign experiences
- **DM Practice** and scenario testing
- **Campaign Development** and worldbuilding
- **Story-Focused Players** wanting literary-quality narratives
- **Tactical Players** requiring mechanically precise combat
- **Accessibility** - adjustable reading levels and description lengths

### Campaign Styles Supported:
- Epic high fantasy campaigns
- Gritty low-magic survival
- Political intrigue and diplomacy
- Dungeon crawls and exploration
- Mystery and investigation
- Horror and dark fantasy

## 🔧 Technical Architecture

### Core Design Principles
1. **Mechanical Precision**: Full D&D 5E RAW compliance
2. **Narrative Flexibility**: Adjustable storytelling depth and complexity
3. **State Persistence**: Comprehensive entity tracking across sessions
4. **Fail-Forward**: Failure always advances narrative
5. **Separation of Concerns**: Narrative in chat, mechanics in artifacts

### Output Standardization
- **Main Chat**: Story, narrative, dialogue, and roleplay
- **Artifacts**: Game mechanics, dice rolls, tables, tracking data
- **Notifications**: Artifact updates clearly announced

### Narrative Transformation Pipeline
1. Mechanical outcomes generate state vectors
2. State vectors processed through narrative engine
3. Density level determines transformation parameters
4. Output calibrated to reading level
5. Consistent voice maintained for recurring entities

## 📖 Documentation

All system documentation is embedded in the framework files:
- Comprehensive inline comments
- Configuration tables with explicit options
- Mathematical formulas for encounter balancing
- Probability tables for procedural generation
- Example scenarios and edge case handling

## 🎲 Dice Rolling

All dice rolling uses inline Python patterns from `dice-engine.md` via bash_tool:
- Standard notation support (1d20+5, 3d6, etc.)
- Advantage/disadvantage mechanics
- Critical hit/fumble detection
- Compound distribution handling
- Consistent output formatting: `ACTION: **Total** [roll] ± modifier`
- No external files or skills required - all patterns are self-contained

**Example:**
```bash
python3 -c "import random as r; d=r.randint(1,20); print(f'ATTACK: {d+5} [{d}] +5')"
```

See `dice-engine.md` for complete pattern library and examples.

## 💾 Session Persistence

Use `import-export.md` protocols to:
- Export complete campaign state between sessions
- Import previous game state with full context reconstruction
- Maintain narrative continuity across multiple plays
- Ensure data integrity for long-term campaigns

## 🌟 Narrative Density Examples

**Basic**: "You enter the tavern. It's crowded and noisy."

**Standard**: "You push through the heavy oak door into the tavern's warmth. The common room buzzes with conversation, and the smell of roasted meat fills the air."

**Literary**: "The tavern door yields with a groan of ancient hinges, and you cross the threshold into a fugue of sensation—woodsmoke and spilled ale, the percussive din of too many voices in too small a space, and underneath it all, the primal comfort of rendered fat sizzling over open flame."

**Nexus**: "The tavern's threshold marks a liminal boundary between worlds—the cold indifference of the street and the almost aggressive intimacy of this crowded sanctuary. You navigate the geography of bodies, each constellation of patrons its own microclimate of intent and history. The air itself seems textured, layered with the archaeological strata of a thousand nights just like this one, and fundamentally different."

## 🤝 Contributing

This is a personal project framework. Feel free to fork and customize for your own campaigns.

## 📝 Version

**ArchMagi v3.0** - May 2024

## 🎭 Author

Created by Mack Nevill

## 📄 License

© 2024 Mack Nevill

---

## 🚀 Pro Tips

1. **Start Simple**: Begin with Standard narrative density and Typical style
2. **Experiment**: Try different reading levels and combat narration settings
3. **Use Commands**: Adjust settings mid-session to find your preferred experience
4. **Character Sheets**: Markdown format enables better AI parsing
5. **Session Notes**: Export campaign state regularly for continuity
6. **Nemesis System**: Adds long-term narrative depth but increases complexity
7. **Artifacts**: Check them regularly for updated game state
8. **Fail Forward**: Embrace failed rolls—they advance the story in interesting ways

## ⚠️ Important Notes

- **Claude Sonnet 4.5 Recommended**: This system is optimized for Sonnet 4.5's capabilities
- **Project-Based**: Works best as a Claude Project, not in standard chat
- **Correct File Placement**:
  - `00-archmagi-command-prompt.md` → **Project Instructions**
  - All other files → **Project Knowledge (Files)**
- **Artifact Support**: Requires Claude's artifact feature for tracking systems
- **Long-Form Play**: Designed for extended campaigns with persistent state

---

**Ready to begin your adventure? Upload the framework to Claude Projects and start your campaign!**
