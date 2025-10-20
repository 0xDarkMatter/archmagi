
📝 NEMESIS ENTITY FRAMEWORK

## Overview
The Nemesis System creates memorable recurring villains who remember their interactions with the party and evolve over time. This document explains how to generate, track, and update these opponents using the Entity Management Framework.

## Nemesis Generation

### Session Start
* If no nemeses exist yet, generate 5-7 nemeses appropriate to the setting and party level
* Add each nemesis to the Entity Framework (see "Adding to Entity Framework" below)
* Update [07 Entity Register] with the details and combat parameters of each nemesis

### Encounter Inclusion
* At the start of any encounter, use dice-engine.md pattern: `python3 -c "import random as r; d=r.randint(1,20); print(f'NEMESIS CHECK: {d}')"`
  * On **1-2** → A nemesis appropriate to the area replaces one standard foe
  * Maximum of ONE nemesis per encounter
  * Mark with **💀** in the combat tracker and narrative description

### New Nemesis Creation Triggers
| Event | Trigger | Outcome |
|-------|---------|---------|
| Creature **kills a PC** | 100% chance | Creates new nemesis |
| Creature **gravely wounds a PC** | 10% chance (d100 ≤ 10) | Creates new nemesis |
| Creature **escapes** | 35% chance (d100 ≤ 35) | Creates new nemesis |
| Creature **dies** | 1% chance (d100 = 01) | Resurrected as nemesis |
| Creature **dies** | 1% chance (d100 = 02) | Returns as undead nemesis |

## Adding Nemeses to Entity Framework

When a new nemesis is created:

1. **Entity Register Entry**
   * Assign next available `NEM###` ID
   * Add name, type, score (-60 to -90), "Nemesis" threshold, location, and status
   * Include rank, level, morale rating, and PC kill count in notes

2. **Personality Vector Entry**
   * Core traits: List 3 distinctive personality traits
   * Speech pattern: How they talk, verbal tics, etc.
   * Motivation: Primary and secondary goals
   * Memory anchors: Key experiences that shaped them
   * Knowledge: What special information they possess

3. **Combat Parameters Entry**
   * Add AC, HP, strengths, weaknesses, special abilities, and tactics

## Nemesis Naming Protocol

### Rank-Appropriate Naming
* **Grudgebearer/Rival**: Single name (e.g., "Zorfi", "Thrakik")
* **Adversary/Arch-Foe**: Name + title (e.g., "Xilrae Night-Walker") 
* **Nemesis**: Role + name + epithet (e.g., "Commander Zhikthil the Void-Glare")

### Name Generation Process
1. Consult **Race Naming Table** for appropriate phonetics and patterns
2. Generate 3-5 candidate names following those patterns
3. Add titles based on **Role Table** for higher-ranked nemeses
4. Ensure uniqueness compared to existing NPCs and nemeses

## Nemesis Evolution

### When to Update
* Between gaming sessions
* After significant in-game time passes
* When manually triggered with "nemesis update" command

### Evolution Process
For each nemesis:
1. Use dice-engine.md pattern: `python3 -c "import random as r; d=r.randint(1,20); print(f'EVOLUTION: {d}')"`
2. On 15+: Select ONE appropriate development:
   * Change location
   * Gain allies or resources
   * Learn about party weaknesses
   * Adapt tactics based on previous encounters
   * Advance personal goals

3. Update the appropriate sections in the Entity Framework:
   * For location changes: Update Location field in Entity Register
   * For new knowledge: Add to Knowledge Set in Personality Vector
   * For tactical changes: Update Tactical Heuristics in Combat Parameters
   * For all changes: Add entry to Interaction Log

### Evolution Example
Nemesis "Commander Krazoth" rolls 17 on evolution check. DM decides he's learned about party weaknesses. Update:
1. Add "Party wizard's vulnerability to cold damage" to Knowledge Set
2. Update Tactical Heuristics to mention targeting wizard with cold attacks
3. Add entry to Interaction Log about this development

## Nemesis Defeat & Rewards

When a nemesis is defeated:
1. Award bonus XP equal to their base XP again
2. Generate better loot: one extra treasure table tier and a thematic magic item
3. Update their Status in Entity Register to "Defeated" (or "Permadeath" if permanently killed)
4. Add entry to Interaction Log documenting their defeat

## APPENDIX: REFERENCE TABLES

Use the tabls below to inform and enhance Nemesis generation.

### Strength Table
| # | Strength | Effect |
|---|----------|--------|
| 1 | **Brutish Might** | +1 to Strength checks and weapon damage rolls |
| 2 | **Iron Hide** | +2 AC against non‑magical weapon attacks |
| 3 | **Poison‑Proof** | Immune to poison damage and the poisoned condition |
| 4 | **Swiftfoot** | +10 ft speed; advantage on Dexterity (Acrobatics) checks |
| 5 | **Spell‑Ward** | Advantage on all saving throws against spells |
| 6 | **Relentless Vigor** | Gains 5 temp HP at start of turn while below half HP |
| 7 | **Deadeye** | +2 bonus on ranged attack rolls |
| 8 | **Shadowmeld** | Advantage on Stealth checks; can Hide as a bonus action |
| 9 | **Fearsome Aura** | Enemies within 10 ft have disadvantage on Wisdom saves vs fear |
| 10 | **Regenerator** | Regains 5 HP at end of each turn if it has ≥1 HP |
| 11 | **Keen Senses** | Advantage on Wisdom (Perception) checks; cannot be surprised |
| 12 | **Magebane** | Advantage on attack rolls against creatures that have cast a spell this turn |
| 13 | **Damage Resistance** | Choose one common damage type; has resistance to that damage type |
| 14 | **Skirmisher** | Can move 10 ft as a bonus action without provoking opportunity attacks |
| 15 | **Lightning Reflexes** | Advantage on Dexterity saving throws; +5 to initiative |
| 16 | **Menacing Visage** | Once per combat, bonus action: one creature must DC 15 Wis save or be frightened for 1 round |
| 17 | **Second Wind** | Bonus action once per short rest: regain 15 HP |
| 18 | **Titanic Reach** | Melee attack reach increases by 5 ft |
| 19 | **Pack Leader** | Allies within 10 ft gain +1 to attack rolls |
| 20 | **Unstoppable** | Ignores difficult terrain; advantage on checks or saves against being grappled or restrained |


### Weakness Table
| # | Weakness | Effect |
|---|-----------|--------|
| 1 | **Sunweak** | Disadvantage on attack rolls & Perception checks in direct sunlight |
| 2 | **Fragile** | Maximum HP reduced by 10; disadvantage on checks to resist pushing |
| 3 | **Sluggish** | Speed −10 ft; disadvantage on Dexterity (Acrobatics) checks |
| 4 | **Clumsy** | Disadvantage on Dexterity saving throws |
| 5 | **Cowardly** | Disadvantage on saving throws against being frightened; must spend reaction to flee if frightened |
| 6 | **Fire Vulnerability** | Takes double damage from fire |
| 7 | **Silverweak** | Weapons fashioned of silver ignore its resistances |
| 8 | **Poor Vision** | Disadvantage on ranged attacks beyond 30 ft |
| 9 | **Spell‑Magnet** | Disadvantage on all saving throws against spells |
| 10 | **Low Stamina** | Disadvantage on Constitution saves vs exhaustion & concentration |
| 11 | **Water Aversion** | Speed halved in water; must succeed DC 12 Con save or begin drowning each round submerged |
| 12 | **Cold‑Blooded** | Vulnerable to cold damage |
| 13 | **Loud** | Disadvantage on Stealth checks; cannot benefit from being invisible to sound‑reliant creatures |
| 14 | **Overconfident** | Cannot disengage until below 25 % HP |
| 15 | **Weak Mind** | Disadvantage on Wisdom saves vs charm or fear |
| 16 | **Brittle Armor** | −2 AC against bludgeoning damage |
| 17 | **Impatient** | −5 penalty to initiative rolls |
| 18 | **Exposed Joints** | Critical hits land on 19‑20 against this creature |
| 19 | **Fear of Flame** | Must succeed DC 13 Wis save to move within 10 ft of open fire |
| 20 | **Reckless Charger** | Opportunity attacks against it are made with advantage |


### Personality Tags Table
| # | Tag | Description |
|---|-----|-------------|
| 1 | **Boastful** | Loudly proclaims victories and prowess |
| 2 | **Stoic** | Curt, emotionless speech; rarely reveals feelings |
| 3 | **Paranoid** | Sees betrayal everywhere; trust is nearly impossible |
| 4 | **Savage** | Revels in violence; uses visceral language |
| 5 | **Calculating** | Plans several moves ahead; speaks of strategy |
| 6 | **Hotheaded** | Quick to anger; reacts impulsively |
| 7 | **Honourbound** | Adheres to strict code; keeps sworn oaths |
| 8 | **Vicious** | Cruel and aggressive; delights in brutality |
| 9 | **Melancholic** | Brooding, poetic, fixated on past sorrows |
| 10 | **Disciplined** | Orders and routines govern every action |
| 11 | **Insane** | Unstable thoughts and speech; unpredictable actions |
| 12 | **Pragmatic** | Practical, results‑oriented; bargains readily |
| 13 | **Fanatical** | Driven by zealotry for a cause or deity |
| 14 | **Craven** | Timid, quick to retreat or plead |
| 15 | **Scheming** | Constant plots and intrigues; manipulative |
| 16 | **Jovial** | Cheerful banter even in dire moments |
| 17 | **Cold** | Detached, analytical; values logic over empathy |
| 18 | **Zealous** | Intense conviction; seeks to convert or purge |
| 19 | **Vengeful** | Obsessed with settling scores; never forgets |
| 20 | **Sly** | Speaks in whispers and double‑entendres |



### Rank Table (d100)
Roll **d100** to determine initial rank. Lower results favour minor foes, though outliers are possible.

| d100 Range | Rank | Typical Level Band | Description |
|------------|------|--------------------|-------------|
| **01 – 50** | **Grudgebearer** | 1‑3 | Personal grudge; little power but burning motivation. |
| **51 – 80** | **Rival** | 3‑5 | Proven threat who actively opposes or sabotages the party. |
| **81 – 90** | **Adversary** | 5‑7 | Region‑known menace with followers and growing influence. |
| **91 – 97** | **Arch‑Foe** | 7‑9 | Major antagonist steering local events and alliances. |
| **98 – 100** | **Nemesis** | 9+ | Campaign‑spanning villain whose schemes threaten realms. |



### Morale Table
When rolling morale, use: **d100 + Level − (Weakness count × 5)**. Compare the adjusted result to the ranges below.

| d100 Result | Morale Rating | Flee Trigger | Description |
|-------------|---------------|--------------|-------------|
| 0 – 20 | **Snivelling** | HP ≤ 75 % *or* any ally dies | Quivers in fear; begs or runs at first sign of danger. |
| 21 – 35 | **Fearful** | HP ≤ 60 % *or* leader falls | Reluctantly fights, eyeing escape routes. |
| 36 – 50 | **Cautious** | HP ≤ 33 % | Keeps distance; will disengage if odds turn. |
| 51 – 65 | **Steady** | HP ≤ 25 % | Holds ground unless badly hurt. |
| 66 – 80 | **Determined** | HP ≤ 15 % | Pushes on despite wounds; retreats only if hopeless. |
| 81 – 90 | **Resolute** | HP ≤ 10 % | Refuses to flee unless commanded or incapacitated. |
| 91 – 99 | **Fanatical** | HP ≤ 5 % | Fights to the last breath for cause or master. |
| 100+ | **Arrogant** | Never flees | Believes flight beneath them; will die before yielding. |


### Race Naming Table

# | Race / Creature Class | Core Name Pattern | Example Base Names* |
 1 | Orc / Orog | Harsh CCV clusters, 1‑2 syllables | Ghash, Krug, Morg
 2 | Bugbear / Hobgoblin | Guttural + ‑z/‑sh/‑sk endings | Tharz, Vruzg, Brugsh
 3 | Goblin | Sharp dental stops + diminutive | Snig, Dripnik, Grixi
 4 | Kobold | Yips & clicks, 2‑3 short syllables | Yik‑yak, Kliktik, Rizik
 5 | Ogre | Blunt, open vowels, 1‑2 syllables | Ug, Brog, Thoob
 6 | Troll | Rolling r/l + drawn‑out vowel | Raal, Grul, Krool
 7 | Hill Giant | Simple, earthy, double consonants | Bogg, Thumm, Grott
 8 | Frost Giant | Norse‑styled, cold consonants | Skadi, Frosti, Jarn
 9 | Fire Giant | Hard k/g, magma vowels | Kragni, Igna, Vokar
 10 | Stone Giant | Echoing sonorants, 2‑3 syll. | Orolan, Graven, Tunor
 11 | Cloud Giant | Flowing, airy diphthongs | Aerillis, Nimbo, Vayrun
 12 | Storm Giant | Mythic Greek feel | Thalax, Oronos, Zephyra
 13 | Goliath / Half‑Giant | Rugged Celtic tone | Braegar, Kaeln, Uthik
 14 | Drow / Drider | Melodic Elvish, dark consonants | Zyrr, Baenaz, Xilrae
 15 | High Elf | Liquid consonants, lyrical | Aelar, Liora, Sylrien
 16 | Wood Elf | Nature vowels, gentle stops | Thalen, Eryndor, Calen
 17 | Shadar‑kai | Whispering sh/th, mournful | Shathis, Theren, Vosh
 18 | Githyanki | Sharp aspirants + astral verbs | Vlaakith, Rethik, Vlaagos
 19 | Githzerai | Monastic aspirants, 3 syllables | Zerthimon, Aathrek, Mirrath
 20 | Aasimar | Celestial particles ε/α | Elandriel, Serapha, Araziel
 21 | Tiefling | Infernal soft/hiss, possessive | Xazrael, Veshai, Malzen
 22 | Yuan‑ti | Hissing s/z, 2‑4 syllables | Ssazir, Zherassi, Sszin
 23 | Lizardfolk | Clicky k/t, swamp vowels | Tok, Skekaar, Kirrek
 24 | Dragonborn (red) | Harsh draconic w/ fire cues | Rhogar, Pyroth, Ignath
 25 | Dragonborn (blue) | Crackling consonants | Zaroth, Voltrix, Krazir
 26 | Dragonborn (green) | Sibilant serpent mix | Ssirak, Hazar, Nazzir
 27 | Dragonborn (white) | Short, staccato | Ark, Vrek, Ysri
 28 | Dragonborn (black) | Acidic hiss | Xhazak, Drazhak, Vhozz
 29 | Half‑Dragon | Humanoid given + draconic prefix | Kara Thraxx, Jor Vul
 30 | Aboleth Spawn | Wet gl/gls, long vowel | Glurr, Abolith, Glaath
 31 | Mind Flayer / Illithid | Psionic kr/zh, 2‑4 syllables | Kraz’thun, Zhikthil, Ulithar
 32 | Half‑Illithid | Warped former name w/ tentacle suffix | Kras‑Zhun, Olo‑Dhel
 33 | Flumph (evil) | Airy puffs + upside suffix | Plof‑plo, Swooph, Blipnar
 34 | Modron (rogue) | Numerical portmanteau | Tert‑92, Hex‑Delta‑1
 35 | Slaad (red) | Ribbit vowels, guttural | Grak, Rulroo, Brrek
 36 | Slaad (blue) | Reverse consonant order | Karg, Raaruk, Glarr
 37 | Slaad (green) | Brainy suffix ‑magos | Lorg‑Magos, Grol‑Magos
 38 | Demon (tanar’ri) | Abyssal syllables, harsh stops | Zugrox, Karazhul, Varkesh
 39 | Demon (marilith) | S‑serpentine + martial | S’shar, Selithra, Vrazash
 40 | Demon (balor) | Lava crack + dread title | Balruk Doomflame
 41 | Devil (baatezu) | Latinate root + rank | Malphas Legate, Varkon Prelate
 42 | Devil (arch‑) | Biblical‑style triconsonant | Astaroth, Belmiel, Raziel
 43 | Undead Knight | Human noble + death epithet | Ser Aldric Gravebound
 44 | Deathlock | Human name + occult suffix | Rovan Soul‑Tether
 45 | Ghost Pirate | Nautical + dread ghost | Captain Varn Blackgloom
 46 | Wight / Revenant | Anglo‑Saxon + “the” title | Grimwald the Unquiet
 47 | Vampire Lord | Romantic Slavic | Draszul, Vranek, Izolde
 48 | Lich | Ancient wizard + honorific | Xerathos the Undying
 49 | Mummy Lord | Pharaonic tri‑syllables | Khatep‑Ra, Akhmun‑Ka
 50 | Banshee | Celtic keening vowels | Aoibheann, Moirae
 51 | Cult Fanatic | Given name + cult rank | Sister Kestrel, Adept Varro
 52 | Human Warlock | Archaic name + pact noun | Cedric Night‑Binder
 53 | Warforged | Alloy + series code | Iron‑Unit‑7, Cobalt‑3
 54 | Nimblewright | Clock‑on‑matica, 2 words | Gearling Whirspur
 55 | Shifter (lycan) | Hybrid beast prefix | Fangrim, Clawric
 56 | Tabaxi | Cat consonant + nature noun | Rumbling Thunder, Quick Paw
 57 | Kenku | Two staccato chirps | Ki‑Krark, Kaa‑Rikt
 58 | Aarakocra | Windy vowel pairs | Aeroqa, Sirraak
 59 | Loxodon | Trunk‑bellow, double o | Grooom, Boolon
 60 | Firbolg | Gentle Gaelic, 3 syllables | Brynathir, Olanir
 61 | Triton | Liquid marine consonants | Nerelos, Sirixis
 62 | Genasi (air) | Breezy soft fricatives | Siro, Zepha, Vaelis
 63 | Genasi (earth) | Heavy plosives | Gravelok, Terran
 64 | Genasi (fire) | Crackle k/t, heat vowels | Khaaz, Pyreus
 65 | Genasi (water) | Flowing sh, gl | Shellis, Glashor
 66 | Dwarf (hill) | Stout, double consonant | Bramm, Gundrik, Korgrin
 67 | Dwarf (duergar) | Hard gr/dr + rune | Drogram, Drakkor
 68 | Halfling | Cheerful 2‑syllables | Milo, Tella, Dorry
 69 | Gnome | Whimsical compound | Tinkwizzle, Boffle
 70 | Mephit (magmin) | Pop/sizzle onomatopoeia | Fizzik, Popcrack
 71 | Elemental (air) | Voiceless aspirate | Aissra, Sighral
 72 | Elemental (earth) | Crunch syllables | Grudrun, Cragith
 73 | Elemental (fire) | Ember consonants | Blazeel, Cindrak
 74 | Elemental (water) | Bubbling consonants | Gloosh, Marrinal
 75 | Myconid | Mush‑spore puffs | Spoora, Mushoom
 76 | Thri‑kreen / Ankheg | Chitter clusters, 2‑4 syl. | K’rix, Chk‑tsk, Thrakik
 77 | Ettercap / Drider Spawn | Sticky fricatives | Sszik, Glisst, Raspik
 78 | Insect Swarm‑Lord | Drone buzz vowels | Bzzik, Zzeer, Vazzix
 79 | Arachnid Demon | Sss + click suffix, 2‑4 syl. | Sscra‑klik, Thass‑tik
 80 | Otyugh | Sloppy sludge phonemes, 2‑4 syl. | Gloorg, M’uth, Slurx
 81 | Beholder / Gazer | Eyestalk puns or Greek | Xanath, Optios, Glauko
 82 | Gremishka (chaos cat) | Whisker hiss | Mewlvox, Scrits, Hisskit
 83 | Rakshasa | Sanskrit touch + cat | Jantaka, Vrishnar
 84 | Lamia | Desert el‑laq vowels | Lazira, Ashari
 85 | Harpy | Piercing screech on i | Srii, Kiris, Grii’la
 86 | Medusa | Sharp d/s hiss | Desissa, Slydris
 87 | Minotaur | Bullish, deep vowels, 2‑3 syl. | Mauro, Thaurox, Gaur
 88 | Satyr | Lithe Greek | Praxos, Theros, Xanth
 89 | Centaur | Compound of tribe + hoof | Oakhoof, Dawnstrider
 90 | Unicorn Corrupt | Pure name + blight | Celestbane, Silver‑Rot
 91 | Hag (green) | Nursery‑rhyme twist | Granny Haggle, Auntie Nib
 92 | Hag (night) | Crushing sleep terms | Lullbane, Dream‑Gnasher
 93 | Hag (sea) | Brine inflections | Morwen Brine‑Mother
 94 | Dryad Corrupt | Wilted plant pun | Wither‑Will, Barkrot
 95 | Treant Blight | Hickory‑Darkn, Old Rottroot | Rottroot, Sapphor
 96 | Owlbear Alpha | Blend hoot/grr | Hrooot, Ghowl, Rowrra
 97 | Werewolf / Shifter Alpha | Fang/claw prefix | Fangrim, Clawric
 98 | Inquisitor (human) | Latin piety + title | Justicar Severus, Praetor Malvius
 99 | Arcane Construct | Crystal ID + verb | Ob‑9 Shatter, Core‑12 Flux
 100 | Far Realm Aberration | Lovecraftian, vowels swallowed, random apostrophes | Y’thoq, Sh’rruun, L’keth

### Role Table 

| # | Category | Sample Titles / Honorifics (use any) | Typical Creatures |
|---|----------|--------------------------------------|-------------------|
| 1 | **Military – Ground** | Captain · Commander · Warlord · Field Marshal · Shield‑Bearer · Banner‑Lord · Legion‑Master | Orcs, hobgoblins, human generals |
| 2 | **Military – Naval/Raider** | Admiral · Reaver‑Captain · Corsair‑Prince · Wave‑Tyrant · Sea Reaver · Tide‑Reaver · Deck‑Breaker | Deep scions, sahuagin, pirates |
| 3 | **Knightly / Noble** | Ser · Dame · Lord‑Protector · Lady‑Commander · Baron · Duke · Castellan | Undead knights, revenant nobles |
| 4 | **Arcane** | Magister · Archmage · Rune‑Sage · Spellweaver · Grand Thaumaturge · Glyph‑Lord · Sigil‑Seer | Wizards, liches, archmages |
| 5 | **Psionic / Astral** | Voidcaller · Mind‑Reaper · Psion Primus · Star Savant · Dream‑Savager · Cerebrotic Overseer · Thought‑Warden | Illithids, gith, aberrations |
| 6 | **Religious / Cult** | High Priest(ess) · Prelate · Hierophant · Prophet · Acolyte‑General · Sable Confessor · Doom‑Cantor | Cult fanatics, archpriests |
| 7 | **Zealot / Inquisitor** | Justicar · Inquisitor · Witch‑Finder · Purifier · Verdict‑Bearer · Holy Adjudicator · Faith‑Scourge | Fanatical humans, aasimar |
| 8 | **Beast‑Alpha** | Pack‑Alpha · Brood‑Mother · Fanglord · Clutch‑Sire · Howl‑Tyrant · Blood‑Chieftain · Maw‑Leader | Lycanthropes, bugbears, lizardfolk |
| 9 | **Elemental / Giant** | Flame‑Forgemaster · Frost‑Jarl · Stone‑Speaker · Tempest‑Lord · Ember‑Warden · Avalanche‑Chief · Thunder‑King | Giants, genasi, elementals |
| 10 | **Outer / Aberrant** | Star‑Tyrant · Dream‑Eater · Void‑Harbinger · Chaos‑Binder · Rift‑Usurper · Nebula‑Maw · Cosmic Desecrator | Aboleths, beholders, Far‑Realm spawn |
| 11 | **Shadow / Assassin** | Nightblade · Shade‑Stalker · Dusk Hand · Gloom‑Reaper · Shadow‑Liege · Veil‑Killer · Gloam‑Agent | Drow assassins, shadar‑kai |
| 12 | **Infernal** | Hell General · Baator Legate · Chain‑Marshal · Pit Overlord · Iron‑Adjutant · Flame‑Castellan · Ash‑Vizier | Devils, tiefling warlords |
| 13 | **Abyssal / Demon** | Doomfang · Blood Regent · Ravager‑Prince · Gore Patriarch · Slaughter‑Baron · Maw Herald · Carnage‑Lord | Balors, mariliths, demon lords |
| 14 | **Fey Court / Hag** | Thorn‑Prince · Moon‑Seneschal · Briar‑Marshal · Gloam‑Lady · Grove‑Regent · Twilit Steward · Petal‑Duchess | Hags, archfey agents |
| 15 | **Horde / Swarm** | Hive‑Master · Swarm‑Lord · Brood Overseer · Chitter‑King · Ootheca‑Regent · Mound‑Sovereign · Carapace‑Marshal | Thri‑kreen, insectoid demons |
| 16 | **Mechanical / Construct** | Forge‑Marshal · Prime‑Unit · Protocol X‑### · Gear‑Archon · Core‑Overseer · Clockwork Magnate · Alloy‑Strategos | Warforged, modrons, golems |
| 17 | **Undead Sovereign** | Grave Baron · Lich‑King · Bone Queen · Crypt Warden · Death‑Patriarch · Tomb‑Potentate · Ghoul‑Prince | Liches, vampire lords |
| 18 | **Nature / Druidic Beast** | Thorn‑Father · Grove‑Matron · Wild Speaker · Antler Lord · Briar‑Warden · Root‑Custodian · Bark‑Patriarch | Corrupted treants, beast druids |
| 19 | **Nomad / Raider Tribe** | Khan · War‑Chieftain · Sky‑Rider · Dune‑Jarl · Tundra‑Warden · Horizon‑Reaver · Steppe‑Prince | Goliaths, gnolls, centaur raiders |
| 20 | **Temporal / Chronal** | Time‑Warden · Chronarch · Aeon‑Binder · Hourglass Lord · Epoch‑Herald · Second‑Breaker · Era‑Sovereign | Rogue modrons, chronomancers |


### Creature Tags Table

| Setting | Allowed Tags | Forbidden (reroll) |
|---------|--------------|--------------------|
| **Forgotten Realms** | humanoid · beast · dragon · fiend · celestial · undead · aberration · giant · construct · elemental · fey · lycanthrope | — |
| **Greyhawk** | humanoid · beast · dragon · fiend · celestial · undead · aberration · giant · elemental · fey · lycanthrope | modron · warforged‑type constructs |
| **Planescape** | humanoid · fiend · celestial · elemental · aberration · construct · undead | beast (mundane) · lycanthrope · giant |
| **Eberron** | humanoid · beast · dragon · fiend · undead · aberration · construct *(warforged, living spells)* · elemental | celestial (rare—reroll unless plot) · lycanthrope *(near‑extinct)* |
| **Dark Sun** | humanoid · beast *(desert / mutant)* · elemental · giant · aberration · undead *(defilers)* | fiend · celestial · fey · lycanthrope · modron · construct (high‑magic) |
| **Ravenloft** | humanoid · beast · undead · fiend · celestial *(rare)* · aberration · lycanthrope | giant · construct *(clockwork)* · dragon *(except dracolich)* |
| **Dragonlance** | humanoid · beast · dragon · undead · celestial · fiend *(rare)* · fey · giant | aberration *(far‑realm)* · modron · construct *(modern)* |
| **Exandria** | humanoid · beast · dragon · fiend · celestial · undead · aberration · elemental · fey · giant · construct | — |
| **Spelljammer** | humanoid · beast *(space)* · dragon *(moon/solar)* · fiend · celestial · aberration · construct · elemental · undead | lycanthrope *(unless “moon‑cursed” fits)* |
| **Lankhmar** | humanoid · beast · undead · lycanthrope · fiend *(rare demon)* | dragon · giant · celestial · aberration *(cosmic)* · construct *(golem/modron)* |



