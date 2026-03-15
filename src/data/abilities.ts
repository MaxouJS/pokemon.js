// All abilities from Gen 1–5 (224 abilities)
import type { Ability } from '../types';

export const ABILITIES: Ability[] = [
  {
    "id": 1,
    "name": "stench",
    "effect": "This Pokémon's damaging moves have a 10% chance to make the target flinch with each hit if they do not already cause flinching as a secondary effect.\n\nThis ability does not stack with a held item.\n\nOverworld: The wild encounter rate is halved while this Pokémon is first in the party.",
    "short_effect": "Has a 10% chance of making target Pokémon flinch with each hit.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 2,
    "name": "drizzle",
    "effect": "The weather changes to rain when this Pokémon enters battle and does not end unless replaced by another weather condition.\n\nIf multiple Pokémon with this ability, drought, sand stream, or snow warning are sent out at the same time, the abilities will activate in order of Speed, respecting trick room.  Each ability's weather will cancel the previous weather, and only the weather summoned by the slowest of the Pokémon will stay.",
    "short_effect": "Summons rain that lasts indefinitely upon entering battle.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 3,
    "name": "speed-boost",
    "effect": "This Pokémon's Speed rises one stage after each turn.",
    "short_effect": "Raises Speed one stage after each turn.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 4,
    "name": "battle-armor",
    "effect": "Moves cannot score critical hits against this Pokémon.\n\nThis ability functions identically to shell armor.",
    "short_effect": "Protects against critical hits.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 5,
    "name": "sturdy",
    "effect": "When this Pokémon is at full HP, any hit that would knock it out will instead leave it with 1 HP.  Regardless of its current HP, it is also immune to the one-hit KO moves: fissure, guillotine, horn drill, and sheer cold.\n\nIf this Pokémon is holding a focus sash, this ability takes precedence and the item will not be consumed.",
    "short_effect": "Prevents being KOed from full HP, leaving 1 HP instead.  Protects against the one-hit KO moves regardless of HP.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 6,
    "name": "damp",
    "effect": "While this Pokémon is in battle, self destruct and explosion will fail and aftermath will not take effect.",
    "short_effect": "Prevents self destruct, explosion, and aftermath from working while the Pokémon is in battle.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 7,
    "name": "limber",
    "effect": "This Pokémon cannot be paralyzed.\n\nIf a Pokémon is paralyzed and acquires this ability, its paralysis is healed; this includes when regaining a lost ability upon leaving battle.",
    "short_effect": "Prevents paralysis.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 8,
    "name": "sand-veil",
    "effect": "During a sandstorm, this Pokémon has 1.25× its evasion, and it does not take sandstorm damage regardless of type.\n\nThe evasion bonus does not count as a stat modifier.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is halved in a sandstorm.",
    "short_effect": "Increases evasion to 1.25× during a sandstorm.  Protects against sandstorm damage.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 9,
    "name": "static",
    "effect": "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being paralyzed.\n\nPokémon that are immune to electric-type moves can still be paralyzed by this ability.\n\nOverworld: If the lead Pokémon has this ability, there is a 50% chance that encounters will be with an electric Pokémon, if applicable.",
    "short_effect": "Has a 30% chance of paralyzing attacking Pokémon on contact.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 10,
    "name": "volt-absorb",
    "effect": "Whenever an electric-type move hits this Pokémon, it heals for 1/4 of its maximum HP, negating any other effect on it.\n\nThis ability will not take effect if this Pokémon is ground-type and thus immune to Electric moves.  Electric moves will ignore this Pokémon's substitute.\n\nThis effect includes non-damaging moves, i.e. thunder wave.",
    "short_effect": "Absorbs electric moves, healing for 1/4 max HP.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 11,
    "name": "water-absorb",
    "effect": "Whenever a water-type move hits this Pokémon, it heals for 1/4 of its maximum HP, negating any other effect on it.\n\nWater moves will ignore this Pokémon's substitute.",
    "short_effect": "Absorbs water moves, healing for 1/4 max HP.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 12,
    "name": "oblivious",
    "effect": "This Pokémon cannot be infatuated and is immune to captivate.\n\nIf a Pokémon is infatuated and acquires this ability, its infatuation is cleared.",
    "short_effect": "Prevents infatuation and protects against captivate.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 13,
    "name": "cloud-nine",
    "effect": "While this Pokémon is in battle, weather can still be in play, but will not have any of its effects.\n\nThis ability functions identically to air lock.",
    "short_effect": "Negates all effects of weather, but does not prevent the weather itself.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 14,
    "name": "compound-eyes",
    "effect": "This Pokémon's moves have 1.3× their accuracy.\n\nThis ability has no effect on the one-hit KO moves (fissure, guillotine, horn drill, and sheer cold).\n\nOverworld: If the first Pokémon in the party has this ability, the chance of a wild Pokémon holding a particular item is raised from 50%, 5%, or 1% to 60%, 20%, or 5%, respectively.",
    "short_effect": "Increases moves' accuracy to 1.3×.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 15,
    "name": "insomnia",
    "effect": "This Pokémon cannot be asleep.\n\nThis causes rest to fail altogether.  If a Pokémon is asleep and acquires this ability, it will immediately wake up; this includes when regaining a lost ability upon leaving battle.\n\nThis ability functions identically to vital spirit in battle.",
    "short_effect": "Prevents sleep.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 16,
    "name": "color-change",
    "effect": "Whenever this Pokémon takes damage from a move, the Pokémon's type changes to match the move.\n\nIf the Pokémon has two types, both are overridden.  The Pokémon must directly take damage; for example, moves blocked by a substitute will not trigger this ability, nor will moves that deal damage indirectly, such as spikes.\n\nThis ability takes effect on only the last hit of a multiple-hit attack.\n\nIn Pokémon Colosseum and XD: Gale of Darkness, this ability does not take effect on Shadow-type moves.",
    "short_effect": "Changes type to match when hit by a damaging move.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 17,
    "name": "immunity",
    "effect": "This Pokémon cannot be poisoned.  This includes bad poison.\n\nIf a Pokémon is poisoned and acquires this ability, its poison is healed; this includes when regaining a lost ability upon leaving battle.",
    "short_effect": "Prevents poison.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 18,
    "name": "flash-fire",
    "effect": "This Pokémon is immune to fire-type moves.  Once this Pokémon has been hit by a Fire move, its own Fire moves will inflict 1.5× as much damage until it leaves battle.\n\nThis ability has no effect while the Pokémon is frozen.  The Fire damage bonus is retained even if the Pokémon is frozen and thawed or the ability is lost or disabled.  Fire moves will ignore this Pokémon's substitute.  This ability takes effect even on non-damaging moves, i.e. will o wisp.",
    "short_effect": "Protects against fire moves.  Once one has been blocked, the Pokémon's own Fire moves inflict 1.5× damage until it leaves battle.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 19,
    "name": "shield-dust",
    "effect": "This Pokémon is immune to the extra effects of moves used against it.\n\nAn extra effect is a move's chance, listed as an \"effect chance\", to inflict a status ailment, cause a stat change, or make the target flinch in addition to the move's main effect.  For example, thunder shock's paralysis is an extra effect, but thunder wave's is not, nor are knock off's item removal and air cutter's increased critical hit rate.",
    "short_effect": "Protects against incoming moves' extra effects.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 20,
    "name": "own-tempo",
    "effect": "This Pokémon cannot be confused.\n\nIf a Pokémon is confused and acquires this ability, its confusion will immediately be healed.",
    "short_effect": "Prevents confusion.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 21,
    "name": "suction-cups",
    "effect": "This Pokémon cannot be forced out of battle by moves such as whirlwind.\n\ndragon tail and circle throw still inflict damage against this Pokémon.\n\nOverworld: If the lead Pokémon has this ability, the success rate while fishing is increased.",
    "short_effect": "Prevents being forced out of battle by other Pokémon's moves.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 22,
    "name": "intimidate",
    "effect": "When this Pokémon enters battle, the opponent's Attack is lowered by one stage.  In a double battle, both opponents are affected.\n\nThis ability also takes effect when acquired during a battle, but will not take effect again if lost and reobtained without leaving battle.\n\nThis ability has no effect on an opponent that has a substitute.\n\nOverworld: If the first Pokémon in the party has this ability, any random encounter with a Pokémon five or more levels lower than it has a 50% chance of being skipped.",
    "short_effect": "Lowers opponents' Attack one stage upon entering battle.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 23,
    "name": "shadow-tag",
    "effect": "While this Pokémon is in battle, opposing Pokémon cannot flee or switch out.\n\nOther Pokémon with this ability are unaffected.  Pokémon with run away can still flee.  Pokémon can still switch out with the use of a move or item.",
    "short_effect": "Prevents opponents from fleeing or switching out.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 24,
    "name": "rough-skin",
    "effect": "Whenever a move makes contact with this Pokémon, the move's user takes 1/8 of its maximum HP in damage.\n\nThis ability functions identically to iron barbs.",
    "short_effect": "Damages attacking Pokémon for 1/8 their max HP on contact.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 25,
    "name": "wonder-guard",
    "effect": "This Pokémon is immune to damaging moves that are not super effective against it.\n\nMoves that inflict fixed damage, such as night shade or seismic toss, are considered super effective if their types are.  Damage not directly dealt by moves, such as damage from weather, a status ailment, or spikes, is not prevented.\n\nThis ability cannot be copied with role play or traded away with skill swap, but it can be copied with trace, disabled with gastro acid, or changed with worry seed.  This Pokémon can still use Role Play itself to lose this ability, but not Skill Swap.\n\nIf this Pokémon has a substitute, this ability will block moves as usual and any moves not blocked will react to the Substitute as usual.",
    "short_effect": "Protects against damaging moves that are not super effective.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 26,
    "name": "levitate",
    "effect": "This Pokémon is immune to ground-type moves, spikes, toxic spikes, and arena trap.\n\nThis ability is disabled during gravity or ingrain, or while holding an iron ball.  This ability is not disabled during roost.",
    "short_effect": "Evades ground moves.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 27,
    "name": "effect-spore",
    "effect": "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being paralyzed, poisoned, or put to sleep, chosen at random.\n\nNothing is done to compensate if the move's user is immune to one of these ailments; there is simply a lower chance that the move's user will be affected.",
    "short_effect": "Has a 30% chance of inflcting either paralysis, poison, or sleep on attacking Pokémon on contact.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 28,
    "name": "synchronize",
    "effect": "Whenever this Pokémon is burned, paralyzed, or poisoned, the Pokémon who gave this Pokémon that ailment is also given the ailment.\n\nThis ability passes back bad poison when this Pokémon is badly poisoned.  This ability cannot pass on a status ailment that the Pokémon did not directly receive from another Pokémon, such as the poison from toxic spikes or the burn from a flame orb.\n\nOverworld: If the lead Pokémon has this ability, wild Pokémon have a 50% chance of having the lead Pokémon's nature, and a 50% chance of being given a random nature as usual, including the lead Pokémon's nature.  This does not work on Pokémon received outside of battle or roaming legendaries.",
    "short_effect": "Copies burns, paralysis, and poison received onto the Pokémon that inflicted them.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 29,
    "name": "clear-body",
    "effect": "This Pokémon cannot have its stats lowered by other Pokémon.\n\nThis ability does not prevent any stat losses other than stat modifiers, such as the Speed cut from paralysis.  This Pokémon can still be passed negative stat modifiers through guard swap, heart swap, or power swap.\n\nThis ability functions identically to white smoke in battle.",
    "short_effect": "Prevents stats from being lowered by other Pokémon.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 30,
    "name": "natural-cure",
    "effect": "This Pokémon is cured of any major status ailment when it is switched out for another Pokémon.\n\nIf this ability is acquired during battle, the Pokémon is cured upon leaving battle before losing the temporary ability.",
    "short_effect": "Cures any major status ailment upon switching out.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 31,
    "name": "lightning-rod",
    "effect": "All other Pokémon's single-target electric-type moves are redirected to this Pokémon if it is an eligible target.  Other Pokémon's Electric moves raise this Pokémon's Special Attack one stage, negating any other effect on it, and cannot miss it.\n\nIf the move's intended target also has this ability, the move is not redirected.  When multiple Pokémon with this ability are possible targets for redirection, the move is redirected to the one with the highest Speed stat, or, in the case of a tie, to a random tied Pokémon.  follow me takes precedence over this ability.\n\nIf the Pokémon is a ground-type and thus immune to Electric moves, its immunity prevents the Special Attack boost.",
    "short_effect": "Redirects single-target electric moves to this Pokémon where possible.  Absorbs Electric moves, raising Special Attack one stage.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 32,
    "name": "serene-grace",
    "effect": "This Pokémon's moves have twice their usual effect chance.\n\nAn effect chance is a move's chance to inflict a status ailment, cause a stat change, or make the target flinch in addition to the move's main effect.  For example, flamethrower's chance of burning the target is doubled, but protect's chance of success and air cutter's increased critical hit rate are unaffected.\n\nsecret power is unaffected.",
    "short_effect": "Doubles the chance of moves' extra effects occurring.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 33,
    "name": "swift-swim",
    "effect": "This Pokémon's Speed is doubled during rain.\n\nThis bonus does not count as a stat modifier.",
    "short_effect": "Doubles Speed during rain.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 34,
    "name": "chlorophyll",
    "effect": "This Pokémon's Speed is doubled during strong sunlight.\n\nThis bonus does not count as a stat modifier.",
    "short_effect": "Doubles Speed during strong sunlight.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 35,
    "name": "illuminate",
    "effect": "Overworld: If the lead Pokémon has this ability, the wild encounter rate is doubled.\n\nThis ability has no effect in battle.",
    "short_effect": "Doubles the wild encounter rate.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 36,
    "name": "trace",
    "effect": "When this Pokémon enters battle, it copies a random opponent's ability.\n\nThis ability cannot copy flower gift, forecast, illusion, imposter, multitype, trace, wonder guard, or zen mode.",
    "short_effect": "Copies an opponent's ability upon entering battle.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 37,
    "name": "huge-power",
    "effect": "This Pokémon's Attack is doubled while in battle.\n\nThis bonus does not count as a stat modifier.\n\nThis ability functions identically to pure power.",
    "short_effect": "Doubles Attack in battle.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 38,
    "name": "poison-point",
    "effect": "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being poisoned.",
    "short_effect": "Has a 30% chance of poisoning attacking Pokémon on contact.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 39,
    "name": "inner-focus",
    "effect": "This Pokémon cannot flinch.",
    "short_effect": "Prevents flinching.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 40,
    "name": "magma-armor",
    "effect": "This Pokémon cannot be frozen.\n\nIf a Pokémon is frozen and acquires this ability, it will immediately thaw out; this includes when regaining a lost ability upon leaving battle.\n\nOverworld: If any Pokémon in the party has this ability, each egg in the party has its hatch counter decreased by 2 (rather than 1) each step cycle, making eggs hatch roughly twice as quickly.  This effect does not stack if multiple Pokémon have this ability or flame body.",
    "short_effect": "Prevents freezing.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 41,
    "name": "water-veil",
    "effect": "This Pokémon cannot be burned.\n\nIf a Pokémon is burned and acquires this ability, its burn is healed; this includes when regaining a lost ability upon leaving battle.",
    "short_effect": "Prevents burns.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 42,
    "name": "magnet-pull",
    "effect": "While this Pokémon is in battle, opposing steel-type Pokémon cannot flee or switch out.\n\nPokémon with run away can still flee.  Pokémon can still switch out with the use of a move or item.\n\nOverworld: If the lead Pokémon has this ability, Steel-type Pokémon have a higher encounter rate.",
    "short_effect": "Prevents steel opponents from fleeing or switching out.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 43,
    "name": "soundproof",
    "effect": "This Pokémon is immune to moves flagged as being sound-based.\n\nheal bell is unaffected.  uproar still prevents this Pokémon from sleeping.  This Pokémon can still receive a Perish Song counter through baton pass, and will retain a Perish Song counter if it acquires this ability after Perish Song is used.\n\nhowl, roar of time, sonic boom, and yawn are not flagged as sound-based.",
    "short_effect": "Protects against sound-based moves.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 44,
    "name": "rain-dish",
    "effect": "This Pokémon heals for 1/16 of its maximum HP after each turn during rain.",
    "short_effect": "Heals for 1/16 max HP after each turn during rain.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 45,
    "name": "sand-stream",
    "effect": "The weather changes to a sandstorm when this Pokémon enters battle and does not end unless cancelled by another weather condition.\n\nIf multiple Pokémon with this ability, drizzle, drought, or snow warning are sent out at the same time, the abilities will activate in order of Speed, respecting trick room.  Each ability's weather will cancel the previous weather, and only the weather summoned by the slowest of the Pokémon will stay.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is halved in a sandstorm.",
    "short_effect": "Summons a sandstorm that lasts indefinitely upon entering battle.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 46,
    "name": "pressure",
    "effect": "Moves targetting this Pokémon use one extra PP.\n\nThis ability stacks if multiple targets have it.  This ability still affects moves that fail or miss.  This ability does not affect ally moves that target either the entire field or just its side, nor this Pokémon's self-targetted moves; it does, however, affect single-targetted ally moves aimed at this Pokémon, ally moves that target all other Pokémon, and opponents' moves that target the entire field.  If this ability raises a move's PP cost above its remaining PP, it will use all remaining PP.\n\nWhen this Pokémon enters battle, all participating trainers are notified that it has this ability.\n\nOverworld: If the lead Pokémon has this ability, higher-levelled Pokémon have their encounter rate increased.",
    "short_effect": "Increases the PP cost of moves targetting the Pokémon by one.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 47,
    "name": "thick-fat",
    "effect": "This Pokémon takes half as much damage from fire- and ice-type moves.",
    "short_effect": "Halves damage from fire and ice moves.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 48,
    "name": "early-bird",
    "effect": "This Pokémon's remaining sleep turn count falls by 2 rather than 1.\n\nIf this Pokémon's sleep counter is at 1, it will fall to 0 and then the Pokémon will wake up.",
    "short_effect": "Makes sleep pass twice as quickly.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 49,
    "name": "flame-body",
    "effect": "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being burned.\n\nOverworld: If any Pokémon in the party has this ability, each egg in the party has its hatch counter decreased by 2 (rather than 1) each step cycle, making eggs hatch roughly twice as quickly.  This effect does not stack if multiple Pokémon have this ability or magma armor.",
    "short_effect": "Has a 30% chance of burning attacking Pokémon on contact.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 50,
    "name": "run-away",
    "effect": "This Pokémon is always successful fleeing from wild battles, even if trapped by a move or ability.",
    "short_effect": "Ensures success fleeing from wild battles.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 51,
    "name": "keen-eye",
    "effect": "This Pokémon cannot have its accuracy lowered.\n\nThis ability does not prevent any accuracy losses other than stat modifiers, such as the accuracy cut from fog; nor does it prevent other Pokémon's evasion from making this Pokémon's moves less accurate.  This Pokémon can still be passed negative accuracy modifiers through heart swap.\n\nOverworld: If the first Pokémon in the party has this ability, any random encounter with a Pokémon five or more levels lower than it has a 50% chance of being skipped.",
    "short_effect": "Prevents accuracy from being lowered.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 52,
    "name": "hyper-cutter",
    "effect": "This Pokémon's Attack cannot be lowered by other Pokémon.\n\nThis ability does not prevent any Attack losses other than stat modifiers, such as the Attack cut from a burn.  This Pokémon can still be passed negative Attack modifiers through heart swap or power swap.",
    "short_effect": "Prevents Attack from being lowered by other Pokémon.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 53,
    "name": "pickup",
    "effect": "At the end of each turn, if another Pokémon consumed or Flung a held item that turn, this Pokémon picks up the item if it is not already holding one.  After each battle, this Pokémon has a 10% chance of picking up an item if it is not already holding one.\n\nThe air balloon and eject button cannot be picked up.\n\nThe items that may be found vary by game, and, since Pokémon Emerald, by the Pokémon's level.  This ability is checked after the battle ends, at which point any temporary ability changes have worn off.",
    "short_effect": "Picks up other Pokémon's used and Flung held items.  May also pick up an item after battle.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 54,
    "name": "truant",
    "effect": "Every second turn on which this Pokémon should attempt to use a move, it will instead do nothing (\"loaf around\").\n\nLoafing around interrupts moves that take multiple turns the same way paralysis, flinching, etc do.  Most such moves, for example bide or rollout, are simply cut off upon loafing around.  Attacks with a recharge turn, such as hyper beam, do not have to recharge; attacks with a preparation turn, such as fly, do not end up being used.  Moves that are forced over multiple turns and keep going through failure, such as outrage, uproar, or any move forced by encore, keep going as usual.\n\nIf this Pokémon is confused, its confusion is not checked when loafing around; the Pokémon cannot hurt itself, and its confusion does not end or come closer to ending.\n\nIf this Pokémon attempts to move but fails, e.g. because of paralysis or gravity, it still counts as having moved and will loaf around the next turn.  If it does not attempt to move, e.g. because it is asleep or frozen, whatever it would have done will be postponed until its next attempt; that is, it will either loaf around or move as usual, depending on what it last did.\n\nThis ability cannot be changed with worry seed, but it can be disabled with gastro acid, changed with role play, or traded away with skill swap.",
    "short_effect": "Skips every second turn.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 55,
    "name": "hustle",
    "effect": "This Pokémon's physical moves do 1.5× as much regular damage, but have 0.8× their usual accuracy.\n\nSpecial moves are unaffected.  Moves that do set damage, such as seismic toss, have their accuracy affected, but not their damage.\n\nOverworld: If the lead Pokémon has this ability, higher-levelled Pokémon have their encounter rate increased.",
    "short_effect": "Strengthens physical moves to inflict 1.5× damage, but decreases their accuracy to 0.8×.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 56,
    "name": "cute-charm",
    "effect": "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being infatuated.\n\nOverworld: If the first Pokémon in the party has this ability, any wild Pokémon whose species can be either gender has a 2/3 chance of being set to the opposite gender, and a 1/3 chance of having a random gender as usual.",
    "short_effect": "Has a 30% chance of infatuating attacking Pokémon on contact.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 57,
    "name": "plus",
    "effect": "This Pokémon has 1.5× its Special Attack if any friendly Pokémon has plus or minus.\n\nThis bonus does not count as a stat modifier.  If either ability is disabled by gastro acid, both lose their effect.",
    "short_effect": "Increases Special Attack to 1.5× when a friendly Pokémon has plus or minus.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 58,
    "name": "minus",
    "effect": "This Pokémon has 1.5× its Special Attack if any friendly Pokémon has plus or minus.\n\nThis bonus does not count as a stat modifier.  If either ability is disabled by gastro acid, both lose their effect.",
    "short_effect": "Increases Special Attack to 1.5× when a friendly Pokémon has plus or minus.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 59,
    "name": "forecast",
    "effect": "During rain, strong sunlight, or hail, this Pokémon's type changes to water, fire, or ice, respectively, and its form changes to match.\n\nThis ability has no effect for any Pokémon other than castform.\n\nIf the weather ends or becomes anything that does not trigger this ability, or a Pokémon with air lock or cloud nine enters battle, this Pokémon's type and form revert to their default.  If this ability is lost or disabled, this Pokémon cannot change its current type and form until it regains its ability.",
    "short_effect": "Changes castform's type and form to match the weather.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 60,
    "name": "sticky-hold",
    "effect": "This Pokémon's hold item cannot be removed by other Pokémon.\n\nDamaging moves that would remove this Pokémon's item can still inflict damage against this Pokémon, e.g. knock off or pluck.  This Pokémon can still use moves that involve the loss of its own item, e.g. fling or trick.\n\nOverworld: If the lead Pokémon has this ability, the encounter rate while fishing is increased.",
    "short_effect": "Prevents a held item from being removed by other Pokémon.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 61,
    "name": "shed-skin",
    "effect": "After each turn, this Pokémon has a 33% of being cured of any major status ailment.",
    "short_effect": "Has a 33% chance of curing any major status ailment after each turn.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 62,
    "name": "guts",
    "effect": "Whenever this Pokémon is asleep, burned, paralyzed, or poisoned, it has 1.5× its Attack.  This Pokémon is not affected by the usual Attack cut from a burn.\n\nThis bonus does not count as a stat modifier.",
    "short_effect": "Increases Attack to 1.5× with a major status ailment.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 63,
    "name": "marvel-scale",
    "effect": "Whenever this Pokémon has a major status ailment, it has 1.5× its Defense.\n\nThis bonus does not count as a stat modifier.",
    "short_effect": "Increases Defense to 1.5× with a major status ailment.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 64,
    "name": "liquid-ooze",
    "effect": "Whenever a Pokémon would heal after hitting this Pokémon with a leeching move like absorb, it instead loses as many HP as it would usually gain.\n\ndream eater is unaffected.",
    "short_effect": "Damages opponents using leeching moves for as much as they would heal.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 65,
    "name": "overgrow",
    "effect": "When this Pokémon has 1/3 or less of its HP remaining, its grass-type moves inflict 1.5× as much regular damage.",
    "short_effect": "Strengthens grass moves to inflict 1.5× damage at 1/3 max HP or less.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 66,
    "name": "blaze",
    "effect": "When this Pokémon has 1/3 or less of its HP remaining, its fire-type moves inflict 1.5× as much regular damage.",
    "short_effect": "Strengthens fire moves to inflict 1.5× damage at 1/3 max HP or less.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 67,
    "name": "torrent",
    "effect": "When this Pokémon has 1/3 or less of its HP remaining, its water-type moves inflict 1.5× as much regular damage.",
    "short_effect": "Strengthens water moves to inflict 1.5× damage at 1/3 max HP or less.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 68,
    "name": "swarm",
    "effect": "When this Pokémon has 1/3 or less of its HP remaining, its bug-type moves inflict 1.5× as much regular damage.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is increased.",
    "short_effect": "Strengthens bug moves to inflict 1.5× damage at 1/3 max HP or less.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 69,
    "name": "rock-head",
    "effect": "This Pokémon does not receive recoil damage from its recoil moves.\n\nstruggle's recoil is unaffected.  This ability does not prevent crash damage from missing with jump kick or high jump kick.",
    "short_effect": "Protects against recoil damage.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 70,
    "name": "drought",
    "effect": "The weather changes to strong sunlight when this Pokémon enters battle and does not end unless cancelled by another weather condition.\n\nIf multiple Pokémon with this ability, drizzle, sand stream, or snow warning are sent out at the same time, the abilities will activate in order of Speed, respecting trick room.  Each ability's weather will cancel the previous weather, and only the weather summoned by the slowest of the Pokémon will stay.",
    "short_effect": "Summons strong sunlight that lasts indefinitely upon entering battle.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 71,
    "name": "arena-trap",
    "effect": "While this Pokémon is in battle, opposing Pokémon cannot flee or switch out.  flying-type Pokémon and Pokémon in the air, e.g. due to levitate or magnet rise, are unaffected.\n\nPokémon with run away can still flee.  Pokémon can still switch out with the use of a move or item.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is doubled.",
    "short_effect": "Prevents opponents from fleeing or switching out.  Eluded by flying-types and Pokémon in the air.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 72,
    "name": "vital-spirit",
    "effect": "This Pokémon cannot be asleep.\n\nThis causes rest to fail altogether.  If a Pokémon is asleep and acquires this ability, it will immediately wake up; this includes when regaining a lost ability upon leaving battle.\n\nThis ability functions identically to insomnia in battle.\n\nOverworld: If the lead Pokémon has this ability, higher-levelled Pokémon have their encounter rate increased.",
    "short_effect": "Prevents sleep.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 73,
    "name": "white-smoke",
    "effect": "This Pokémon cannot have its stats lowered by other Pokémon.\n\nThis ability does not prevent any stat losses other than stat modifiers, such as the Speed cut from paralysis; nor self-inflicted stat drops, such as the Special Attack drop from overheat; nor opponent-triggered stat boosts, such as the Attack boost from swagger.  This Pokémon can still be passed negative stat modifiers through guard swap, heart swap, or power swap.\n\nThis ability functions identically to clear body in battle.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is halved.",
    "short_effect": "Prevents stats from being lowered by other Pokémon.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 74,
    "name": "pure-power",
    "effect": "This Pokémon's Attack is doubled in battle.\n\nThis bonus does not count as a stat modifier.\n\nThis ability functions identically to huge power.",
    "short_effect": "Doubles Attack in battle.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 75,
    "name": "shell-armor",
    "effect": "Moves cannot score critical hits against this Pokémon.\n\nThis ability functions identically to battle armor.",
    "short_effect": "Protects against critical hits.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 76,
    "name": "air-lock",
    "effect": "While this Pokémon is in battle, weather can still be in play, but will not have any of its effects.\n\nThis ability functions identically to cloud nine.",
    "short_effect": "Negates all effects of weather, but does not prevent the weather itself.",
    "generation": "generation-iii",
    "is_main_series": true
  },
  {
    "id": 77,
    "name": "tangled-feet",
    "effect": "When this Pokémon is confused, it has twice its evasion.",
    "short_effect": "Doubles evasion when confused.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 78,
    "name": "motor-drive",
    "effect": "Whenever an electric-type move hits this Pokémon, its Speed rises one stage, negating any other effect on it.\n\nThis ability will not take effect if this Pokémon is immune to Electric moves.  Electric moves will ignore this Pokémon's substitute.\n\nThis effect includes non-damaging moves, i.e. thunder wave.",
    "short_effect": "Absorbs electric moves, raising Speed one stage.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 79,
    "name": "rivalry",
    "effect": "This Pokémon inflicts 1.25× as much regular damage against Pokémon of the same gender and 0.75× as much regular damage against Pokémon of the opposite gender.\n\nIf either Pokémon is genderless, damage is unaffected.",
    "short_effect": "Increases damage inflicted to 1.25× against Pokémon of the same gender, but decreases damage to 0.75× against the opposite gender.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 80,
    "name": "steadfast",
    "effect": "Whenever this Pokémon flinches, its Speed rises one stage.",
    "short_effect": "Raises Speed one stage upon flinching.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 81,
    "name": "snow-cloak",
    "effect": "During hail, this Pokémon has 1.25× its evasion, and it does not take hail damage regardless of type.\n\nThe evasion bonus does not count as a stat modifier.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is halved in snow.",
    "short_effect": "Increases evasion to 1.25× during hail.  Protects against hail damage.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 82,
    "name": "gluttony",
    "effect": "This Pokémon eats any held Berry triggered by low HP when it falls below 50% of its HP, regardless of the Berry's usual threshold.",
    "short_effect": "Makes the Pokémon eat any held Berry triggered by low HP below 1/2 its max HP.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 83,
    "name": "anger-point",
    "effect": "Whenever this Pokémon receives a critical hit, its Attack rises to the maximum of 6 stages.\n\nThis ability will still take effect if the critical hit is received by a substitute.",
    "short_effect": "Raises Attack to the maximum of six stages upon receiving a critical hit.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 84,
    "name": "unburden",
    "effect": "When this Pokémon uses or loses its held item, its Speed is doubled.  If it gains another item or leaves battle, this bonus is lost.\n\nThis includes when the Pokémon drops its item because of knock off.  This bonus does not count as a stat modifier.  There is no notification when this ability takes effect.",
    "short_effect": "Doubles Speed upon using or losing a held item.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 85,
    "name": "heatproof",
    "effect": "This Pokémon takes half as much damage from fire-type moves and burns.",
    "short_effect": "Halves damage from fire moves and burns.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 86,
    "name": "simple",
    "effect": "Each stage of this Pokémon's stat modifiers acts as two stages.  These doubled stages are still limited to a minimum of -6 and a maximum of 6.\n\nThis Pokémon can still accumulate less than -3 or more than 3 stages of stat modifiers, even though the extra ones have no effect after doubling.",
    "short_effect": "Doubles the Pokémon's stat modifiers.  These doubled modifiers are still capped at -6 or 6 stages.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 87,
    "name": "dry-skin",
    "effect": "This Pokémon takes 1/8 of its maximum HP in damage after each turn during strong sunlight, but it heals for 1/8 of its HP each turn during rain.  This Pokémon takes 1.25× as much damage from fire-type moves, but whenever a water move hits it, it heals for 1/4 its maximum HP instead.",
    "short_effect": "Causes 1/8 max HP in damage each turn during strong sunlight, but heals for 1/8 max HP during rain.  Increases damage from fire moves to 1.25×, but absorbs water moves, healing for 1/4 max HP.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 88,
    "name": "download",
    "effect": "When this Pokémon enters battle, its Attack or Special Attack, whichever corresponds to its opponents' weaker total defensive stat, rises one stage.  In the event of a tie, Special Attack is raised.\n\nThis ability also takes effect when acquired during a battle.",
    "short_effect": "Raises the attack stat corresponding to the opponents' weaker defense one stage upon entering battle.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 89,
    "name": "iron-fist",
    "effect": "Moves flagged as being punch-based have 1.2× their base power for this Pokémon.\n\nsucker punch is not flagged as punch-based; its original, Japanese name only means \"surprise attack\".",
    "short_effect": "Strengthens punch-based moves to 1.2× their power.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 90,
    "name": "poison-heal",
    "effect": "If this Pokémon is poisoned, it will heal for 1/8 of its maximum HP after each turn rather than taking damage.  This includes bad poison.",
    "short_effect": "Heals for 1/8 max HP after each turn when poisoned in place of damage.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 91,
    "name": "adaptability",
    "effect": "This Pokémon inflicts twice as much damage with moves whose types match its own, rather than the usual same-type attack bonus of 1.5×.",
    "short_effect": "Increases the same-type attack bonus from 1.5× to 2×.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 92,
    "name": "skill-link",
    "effect": "This Pokémon always hits five times with two-to-five-hit moves, such as icicle spear.  It also bypasses the accuracy checks on triple kick's second and third hits.",
    "short_effect": "Extends two-to-five-hit moves and triple kick to their full length every time.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 93,
    "name": "hydration",
    "effect": "This Pokémon is cured of any major status ailment after each turn during rain.",
    "short_effect": "Cures any major status ailment after each turn during rain.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 94,
    "name": "solar-power",
    "effect": "During strong sunlight, this Pokémon has 1.5× its Special Attack but takes 1/8 of its maximum HP in damage after each turn.",
    "short_effect": "Increases Special Attack to 1.5× but costs 1/8 max HP after each turn during strong sunlight.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 95,
    "name": "quick-feet",
    "effect": "Whenever this Pokémon has a major status ailment, it has 1.5× its Speed.  This Pokémon is not affected by the usual Speed cut from paralysis.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is halved.",
    "short_effect": "Increases Speed to 1.5× with a major status ailment.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 96,
    "name": "normalize",
    "effect": "This Pokémon's moves all act as if they were normal-type.\n\nMoves that inflict typeless damage do so as usual.  Moves of variable type, such as hidden power, are affected.  They otherwise work as usual, however; weather ball, for example, is always forced to be Normal, but it still has doubled power and looks different during weather.\n\nAs thunder wave is prevented by immunities, unlike most non-damaging moves, it does not affect ghost-type Pokémon under the effect of this ability.",
    "short_effect": "Makes the Pokémon's moves all act normal-type.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 97,
    "name": "sniper",
    "effect": "This Pokémon inflicts triple damage with critical hits, rather than the usual double damage.",
    "short_effect": "Strengthens critical hits to inflict 3× damage rather than 2×.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 98,
    "name": "magic-guard",
    "effect": "This Pokémon is immune to damage not directly caused by a move.\n\nFor example, this Pokémon takes no damage from from weather, recoil, status ailments, or spikes, but it still suffers from the Attack cut when burned, and a life orb will still power up this Pokémon's moves without damaging it.  Anything that directly depends on such damage will also not happen; for example, leech seed will neither hurt this Pokémon nor heal the opponent, and Pokémon with a jaboca berry or rowap berry will not consume the berry when hit by this Pokémon.\n\nThe following are unaffected: struggle, pain split (whether used by or against this Pokémon), belly drum, substitute, curse, moves that knock the user out, and damage from confusion.\n\nThis Pokémon will neither lose nor regain HP if it drains HP from a Pokémon with liquid ooze.\n\nIf this Pokémon is badly poisoned, the poison counter is still increased each turn; if the Pokémon loses this ability, it will begin taking as much damage as it would be if it had been taking increasing damage each turn.",
    "short_effect": "Protects against damage not directly caused by a move.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 99,
    "name": "no-guard",
    "effect": "Moves used by or against this Pokémon never miss.\n\nOne-hit KO moves are unaffected.  Moves affected by this ability can hit Pokémon during the preparation turn of moves like dig or fly.\n\nOverworld: If the lead Pokémon has this ability, the wild encounter rate is doubled.",
    "short_effect": "Ensures all moves used by and against the Pokémon hit.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 100,
    "name": "stall",
    "effect": "This Pokémon moves last within its priority bracket.\n\nMultiple Pokémon with this ability move in order of Speed amongst themselves.\n\nThe full incense and lagging tail take precedence over this ability; that is, Pokémon with these items move after Pokémon with this ability.  Pokémon with both this ability and one of these items are delayed as much as if they had only the item.\n\nThis ability works as usual during trick room: Pokémon with this ability will move in reverse order of Speed after Pokémon without it.",
    "short_effect": "Makes the Pokémon move last within its move's priority bracket.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 101,
    "name": "technician",
    "effect": "This Pokémon's moves have 1.5× their power if their base power is 60 or less.\n\nThis includes moves of variable power, such as hidden power and magnitude, when their power is 60 or less.  helping hand's power boost is taken into account for any move, as is defense curl's power boost for rollout.",
    "short_effect": "Strengthens moves of 60 base power or less to 1.5× their power.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 102,
    "name": "leaf-guard",
    "effect": "This Pokémon cannot be given a major status ailment during strong sunlight.\n\nThis ability does not heal prior status ailments.  rest will fail altogether with this ability in effect.  yawn will immediately fail if used on this Pokémon during strong sunlight, and an already-used Yawn will fail if the weather turns to strong sunlight in the meantime.",
    "short_effect": "Protects against major status ailments during strong sunlight.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 103,
    "name": "klutz",
    "effect": "In battle, this Pokémon cannot use its held item, nor will the item have any passive effect on the battle, positive or negative.  This Pokémon also cannot use fling.\n\nThe Speed cut from the iron ball and the effort items (the macho brace, power weight, power bracer, power belt, power lens, power band, and power anklet) is unaffected.  Items that do not directly affect the battle, such as the exp share, the amulet coin, or the soothe bell, work as usual.  All held items work as usual out of battle.\n\nOther moves that use the held item, such as natural gift and switcheroo, work as usual.",
    "short_effect": "Prevents the Pokémon from using its held item in battle.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 104,
    "name": "mold-breaker",
    "effect": "This Pokémon's moves completely ignore abilities that could hinder or prevent their effect on the target.\n\nFor example, this Pokémon's moves ignore abilities that would fully negate them, such as water absorb; abilities that would prevent any of their effects, such as clear body, shell armor, or sticky hold; and abilities that grant any general protective benefit, such as simple, snow cloak, or thick fat.  If an ability could either hinder or help this Pokémon's moves, e.g. dry skin or unaware, the ability is ignored either way.\n\nAbilities that do not fit this description, even if they could hinder moves in some other way, are not affected.  For example, cursed body only affects potential future uses of the move, while liquid ooze and shadow tag can only hinder a move's effect on the user.  This ablity cannot ignore type or form changes granted by abilities, for example color change or forecast; nor effects that were caused by abilities but are no longer tied to an ability, such as the rain from drizzle.  This ability cannot ignore multitype at all.\n\nAn ability ignored by this ability is only nullified while the move is being used.  For example, this Pokémon's moves can paralyze a Pokémon with limber, but Limber will activate and heal the paralysis immediately thereafter, and this Pokémon's spikes are not affected by this ability after they have been placed.\n\nWhen this Pokémon enters battle, all participating trainers are notified that it has this ability.\n\nThis ability functions identically to teravolt and turboblaze.",
    "short_effect": "Bypasses targets' abilities if they could hinder or prevent a move.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 105,
    "name": "super-luck",
    "effect": "This Pokémon's moves have critical hit rates one stage higher than normal.",
    "short_effect": "Raises moves' critical hit rates one stage.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 106,
    "name": "aftermath",
    "effect": "When this Pokémon is knocked out by a move that makes contact, the move's user takes 1/4 its maximum HP in damage.",
    "short_effect": "Damages the attacker for 1/4 its max HP when knocked out by a contact move.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 107,
    "name": "anticipation",
    "effect": "When this Pokémon enters battle, if one of its opponents has a move that is super effective against it, self destruct, explosion, or a one-hit knockout move, all participating trainers are notified.\n\nThe move itself is not revealed; only that there is such a move.  Moves that inflict typeless damage, such as future sight, and moves of variable type, such as hidden power, count as their listed types.  counter, metal burst, mirror coat, and one-hit KO moves to which this Pokémon is immune do not trigger this ability.",
    "short_effect": "Notifies all trainers upon entering battle if an opponent has a super-effective move, self destruct, explosion, or a one-hit KO move.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 108,
    "name": "forewarn",
    "effect": "When this Pokémon enters battle, it reveals the move with the highest base power known by any opposing Pokémon to all participating trainers.\n\nIn the event of a tie, one is chosen at random.\n\nMoves without a listed base power are assigned one as follows:\n\nPower | Moves\n----: | -----\n  160 | One-hit KO moves: fissure, guillotine, horn drill, and sheer cold\n  120 | Counter moves: counter, metal burst, and mirror coat\n   80 | Variable power or set damage: crush grip, dragon rage, electro ball, endeavor, final gambit, flail, frustration, grass knot, gyro ball, heat crash, heavy slam, hidden power, low kick, natural gift, night shade, psywave, return, reversal, seismic toss, sonic boom, trump card, and wring out\n    0 | Any such move not listed\n",
    "short_effect": "Reveals the opponents' strongest move upon entering battle.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 109,
    "name": "unaware",
    "effect": "This Pokémon ignores other Pokémon's stat modifiers for the purposes of damage and accuracy calculation.\n\nEffectively, this affects modifiers of every stat except Speed.\n\nThe power of punishment and stored power is calculated as usual.  When this Pokémon hurts itself in confusion, its stat modifiers affect damage as usual.",
    "short_effect": "Ignores other Pokémon's stat modifiers for damage and accuracy calculation.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 110,
    "name": "tinted-lens",
    "effect": "This Pokémon deals twice as much damage with moves that are not very effective against the target.",
    "short_effect": "Doubles damage inflicted with not-very-effective moves.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 111,
    "name": "filter",
    "effect": "This Pokémon takes 0.75× as much damage from moves that are super effective against it.\n\nThis ability functions identically to solid rock.",
    "short_effect": "Decreases damage taken from super-effective moves by 1/4.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 112,
    "name": "slow-start",
    "effect": "This Pokémon's Attack and Speed are halved for five turns upon entering battle.\n\nThis ability also takes effect when acquired during battle.  If this Pokémon loses its ability before the five turns are up, its Attack and Speed return to normal; if it then regains this ability without leaving battle, its Attack and Speed are halved again, but the counter keeps counting from where it was.",
    "short_effect": "Halves Attack and Speed for five turns upon entering battle.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 113,
    "name": "scrappy",
    "effect": "This Pokémon ignores ghost-type Pokémon's immunity to normal- and fighting-type moves.\n\nGhost Pokémon's other types affect damage as usual.",
    "short_effect": "Lets the Pokémon's normal and fighting moves hit ghost Pokémon.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 114,
    "name": "storm-drain",
    "effect": "All other Pokémon's single-target water-type moves are redirected to this Pokémon, if it is an eligible target.  Other Pokémon's Water moves raise this Pokémon's Special Attack one stage, negating any other effect on it, and cannot miss it.\n\nIf the move's intended target also has this ability, the move is not redirected.  When multiple Pokémon with this ability are possible targets for redirection, the move is redirected to the one with the highest Speed stat, or, in the case of a tie, to a random tied Pokémon.  follow me takes precedence over this ability.",
    "short_effect": "Redirects single-target water moves to this Pokémon where possible.  Absorbs Water moves, raising Special Attack one stage.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 115,
    "name": "ice-body",
    "effect": "This Pokémon heals for 1/16 of its maximum HP after each turn during hail, and it does not take hail damage regardless of type.",
    "short_effect": "Heals for 1/16 max HP after each turn during hail.  Protects against hail damage.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 116,
    "name": "solid-rock",
    "effect": "This Pokémon takes 0.75× as much damage from moves that are super effective against it.\n\nThis ability functions identically to filter.",
    "short_effect": "Decreases damage taken from super-effective moves by 1/4.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 117,
    "name": "snow-warning",
    "effect": "The weather changes to hail when this Pokémon enters battle and does not end unless cancelled by another weather condition.\n\nIf multiple Pokémon with this ability, drizzle, drought, or sand stream are sent out at the same time, the abilities will activate in order of Speed, respecting trick room.  Each ability's weather will cancel the previous weather, and only the weather summoned by the slowest of the Pokémon will stay.",
    "short_effect": "Summons hail that lasts indefinitely upon entering battle.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 118,
    "name": "honey-gather",
    "effect": "This Pokémon has a chance of picking up honey after each battle.  This chance starts at 5% and rises another 5% after every tenth level: 5% from level 1–10, 10% from 11–20, and so on, up to 50% from 91–100.\n\nThis ability is checked after the battle ends, at which point any temporary ability changes have worn off.",
    "short_effect": "The Pokémon may pick up honey after battle.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 119,
    "name": "frisk",
    "effect": "When this Pokémon enters battle, it reveals an opposing Pokémon's held item to all participating trainers.\n\nIn a double battle, if one opponent has an item, this Pokémon will Frisk that Pokémon; if both have an item, it will Frisk one at random.",
    "short_effect": "Reveals an opponent's held item upon entering battle.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 120,
    "name": "reckless",
    "effect": "This Pokémon's recoil moves and crash moves have 1.2× their base power.\n\nstruggle is unaffected.\n\nThe \"crash moves\" are the moves that damage the user upon missing: jump kick and high jump kick.",
    "short_effect": "Strengthens recoil moves to 1.2× their power.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 121,
    "name": "multitype",
    "effect": "If this Pokémon is holding an elemental Plate, its type and form change to match the Plate.\n\nThis Pokémon's held item, whether or not it is a Plate, cannot be taken by covet or thief, nor removed by knock off, nor traded by switcheroo or trick.  Covet, Thief, and Knock Off still inflict damage against this Pokémon.  Unlike with sticky hold, this Pokémon cannot use fling, Switcheroo, or Trick to lose its item itself, nor gain an item through Switcheroo or Trick if it does not have one.\n\nThis ability has no effect for any Pokémon other than arceus.  This ability cannot be traded with skill swap, nor copied with role play or trace, nor disabled with gastro acid, nor changed with worry seed.  This Pokémon cannot use Skill Swap or Role Play to lose its ability itself.  mold breaker cannot ignore this ability.\n\nIf a Pokémon Transforms into an Arceus with this ability, it will Transform into Arceus's default, normal-type form.  If the Transforming Pokémon is holding a Plate, this ability will then activate and change the Pokémon into the corresponding form.",
    "short_effect": "Changes arceus's type and form to match its held Plate.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 122,
    "name": "flower-gift",
    "effect": "Friendly Pokémon have 1.5× their Attack and Special Defense during strong sunlight if any friendly Pokémon has this ability.\n\nUnlike forecast, multitype, and zen mode, this ability is not tied to its Pokémon's form change; cherrim will switch between its forms even if it loses this ability.  As such, this ability also works if obtained by a Pokémon other than Cherrim.",
    "short_effect": "Increases friendly Pokémon's Attack and Special Defense to 1.5× during strong sunlight.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 123,
    "name": "bad-dreams",
    "effect": "Opposing Pokémon take 1/8 of their maximum HP in damage after each turn while they are asleep.",
    "short_effect": "Damages sleeping opponents for 1/8 their max HP after each turn.",
    "generation": "generation-iv",
    "is_main_series": true
  },
  {
    "id": 124,
    "name": "pickpocket",
    "effect": "Whenever a move makes contact with this Pokémon, if it does not have a held item, it steals the attacker's held item.\n\nThis Pokémon cannot steal upon being knocked out.  It can steal if the attacker has a substitute, but cannot steal when its own Substitute is hit.  If a move hits multiple times, only the last hit triggers this ability.  If this Pokémon is wild, it cannot steal from a trained Pokémon.",
    "short_effect": "Steals attacking Pokémon's held items on contact.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 125,
    "name": "sheer-force",
    "effect": "This Pokémon's moves with extra effects have 1.3× their power, but lose their extra effects.\n\nAn effect chance is a move's chance to inflict a status ailment, cause a stat change, or make the target flinch in addition to the move's main effect. For example, thunder shock's paralysis is an extra effect, but thunder wave's is not, nor are knock off's item removal and air cutter's increased critical hit rate.\n\nMoves that lower the user's stats are unaffected.",
    "short_effect": "Strengthens moves with extra effects to 1.3× their power, but prevents their extra effects.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 126,
    "name": "contrary",
    "effect": "Whenever this Pokémon's stats would be raised, they are instead lowered by the same amount, and vice versa.",
    "short_effect": "Inverts stat changes.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 127,
    "name": "unnerve",
    "effect": "Opposing Pokémon cannot eat held Berries while this Pokémon is in battle.\n\nAffected Pokémon can still use bug bite or pluck to eat a target's Berry.",
    "short_effect": "Prevents opposing Pokémon from eating held Berries.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 128,
    "name": "defiant",
    "effect": "When any of this Pokémon's stats are lowered, its Attack rises by two stages.\n\nIf multiple stats are lowered at once, this ability takes effect with each stat lowered.",
    "short_effect": "Raises Attack two stages upon having any stat lowered.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 129,
    "name": "defeatist",
    "effect": "This Pokémon's Attack and Special Attack are halved when it has half its HP or less.",
    "short_effect": "Halves Attack and Special Attack at 50% max HP or less.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 130,
    "name": "cursed-body",
    "effect": "Moves that hit this Pokémon have a 30% chance of being Disabled afterward.",
    "short_effect": "Has a 30% chance of Disabling any move that hits the Pokémon.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 131,
    "name": "healer",
    "effect": "Friendly Pokémon next to this Pokémon in double and triple battles each have a 30% chance of being cured of any major status ailment after each turn.",
    "short_effect": "Has a 30% chance of curing each adjacent ally of any major status ailment after each turn.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 132,
    "name": "friend-guard",
    "effect": "All friendly Pokémon take 0.75× as much direct damage from moves while this Pokémon is in battle.\n\nThis effect stacks if multiple allied Pokémon have it.",
    "short_effect": "Decreases all direct damage taken by friendly Pokémon to 0.75×.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 133,
    "name": "weak-armor",
    "effect": "Whenever a physical move hits this Pokémon, its Speed rises one stage and its Defense falls one stage.\n\nThis ability triggers on every hit of a multiple-hit move.",
    "short_effect": "Raises Speed and lowers Defense by one stage each upon being hit by a physical move.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 134,
    "name": "heavy-metal",
    "effect": "This Pokémon has double the usual weight for its species.",
    "short_effect": "Doubles the Pokémon's weight.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 135,
    "name": "light-metal",
    "effect": "This Pokémon has half the usual weight for its species.",
    "short_effect": "Halves the Pokémon's weight.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 136,
    "name": "multiscale",
    "effect": "This Pokémon takes half as much damage when it is hit having full HP.",
    "short_effect": "Halves damage taken from full HP.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 137,
    "name": "toxic-boost",
    "effect": "This Pokémon has 1.5× its Attack when poisoned.",
    "short_effect": "Increases Attack to 1.5× when poisoned.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 138,
    "name": "flare-boost",
    "effect": "This Pokémon has 1.5× its Special Attack when burned.",
    "short_effect": "Increases Special Attack to 1.5× when burned.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 139,
    "name": "harvest",
    "effect": "After each turn, if the last item this Pokémon consumed was a Berry and it is not currently holding an item, it has a 50% chance of regaining that Berry, or a 100% chance during strong sunlight.",
    "short_effect": "Has a 50% chance of restoring a used Berry after each turn if the Pokémon has held no items in the meantime.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 140,
    "name": "telepathy",
    "effect": "This Pokémon does not take damage from friendly Pokémon's moves, including single-target moves aimed at it.",
    "short_effect": "Protects against friendly Pokémon's damaging moves.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 141,
    "name": "moody",
    "effect": "After each turn, one of this Pokémon's stats at random rises two stages, and another falls one stage.\n\nIf a stat is already at 6 or -6 stages, it will not be chosen to be increased or decreased, respectively.",
    "short_effect": "Raises a random stat two stages and lowers another one stage after each turn.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 142,
    "name": "overcoat",
    "effect": "This Pokémon does not take damage from weather.",
    "short_effect": "Protects against damage from weather.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 143,
    "name": "poison-touch",
    "effect": "This Pokémon's contact moves have a 30% chance of poisoning the target with each hit.\n\nThis counts as an extra effect for the purposes of shield dust.  This ability takes effect before mummy.",
    "short_effect": "Has a 30% chance of poisoning target Pokémon upon contact.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 144,
    "name": "regenerator",
    "effect": "This Pokémon regains 1/3 of its maximum HP when it is switched out for another Pokémon under any circumstances other than having fainted.\n\nThis ability does not take effect when a battle ends.",
    "short_effect": "Heals for 1/3 max HP upon switching out.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 145,
    "name": "big-pecks",
    "effect": "This Pokémon's Defense cannot be lowered by other Pokémon.\n\nThis Pokémon can still be passed negative Defense modifiers through heart swap or guard swap.",
    "short_effect": "Protects against Defense drops.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 146,
    "name": "sand-rush",
    "effect": "This Pokémon's Speed is doubled during a sandstorm, and it does not take sandstorm damage, regardless of type.",
    "short_effect": "Doubles Speed during a sandstorm.  Protects against sandstorm damage.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 147,
    "name": "wonder-skin",
    "effect": "Non-damaging moves have exactly 50% base accuracy against this Pokémon.",
    "short_effect": "Lowers incoming non-damaging moves' base accuracy to exactly 50%.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 148,
    "name": "analytic",
    "effect": "This Pokémon's moves have 1.3× their power when it moves last in a turn.\n\nfuture sight and doom desire are unaffected.",
    "short_effect": "Strengthens moves to 1.3× their power when moving last.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 149,
    "name": "illusion",
    "effect": "This Pokémon, upon being sent out, appears to have the species, nickname, and Poké Ball of the last Pokémon in the party that is able to battle.  This illusion breaks upon being hit by a damaging move.\n\nOther damage, e.g. from weather or spikes, does not break the illusion, nor does damage done to a substitute.\n\nIf the party order becomes temporarily shuffled around as Pokémon are switched out in battle, this ability chooses the last Pokémon according to that shuffled order.",
    "short_effect": "Takes the appearance of the last conscious party Pokémon upon being sent out until hit by a damaging move.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 150,
    "name": "imposter",
    "effect": "This Pokémon transforms into a random opponent upon entering battle.  This effect is identical to the move transform.",
    "short_effect": "Transforms upon entering battle.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 151,
    "name": "infiltrator",
    "effect": "This Pokémon's moves ignore light screen, reflect, and safeguard.",
    "short_effect": "Bypasses light screen, reflect, and safeguard.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 152,
    "name": "mummy",
    "effect": "Whenever a contact move hits this Pokémon, the attacking Pokémon's ability changes to Mummy.\n\nmultitype is unaffected.  If a Pokémon with moxie knocks this Pokémon out, the former's ability will change without taking effect.",
    "short_effect": "Changes attacking Pokémon's abilities to Mummy on contact.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 153,
    "name": "moxie",
    "effect": "This Pokémon's Attack rises one stage upon knocking out another Pokémon, even a friendly Pokémon.\n\nThis ability does not take effect when the Pokémon indirectly causes another Pokémon to faint, e.g. through poison or spikes.\n\nIf this Pokémon knocks out a Pokémon with mummy, the former's ability will change without taking effect.",
    "short_effect": "Raises Attack one stage upon KOing a Pokémon.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 154,
    "name": "justified",
    "effect": "Whenever a dark-type move hits this Pokémon, its Attack rises one stage.\n\nThe move is not negated in any way.",
    "short_effect": "Raises Attack one stage upon taking damage from a dark move.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 155,
    "name": "rattled",
    "effect": "This Pokémon's Speed rises one stage with each hit from a damaging dark-, ghost-, or bug-type move.",
    "short_effect": "Raises Speed one stage upon being hit by a dark, ghost, or bug move.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 156,
    "name": "magic-bounce",
    "effect": "When this Pokémon is targeted by a move flagged as being reflectable, the move is redirected to its user.\n\nAll reflectable moves are non-damaging, and most non-damaging moves that target other Pokémon are reflectable.\n\nA move reflected by this ability or magic coat cannot be reflected back.",
    "short_effect": "Reflects most non-damaging moves back at their user.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 157,
    "name": "sap-sipper",
    "effect": "Whenever a grass-type move hits this Pokémon, its Attack rises one stage, negating any other effect on it.",
    "short_effect": "Absorbs grass moves, raising Attack one stage.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 158,
    "name": "prankster",
    "effect": "This Pokémon's non-damaging moves have their priority increased by one stage.",
    "short_effect": "Raises non-damaging moves' priority by one stage.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 159,
    "name": "sand-force",
    "effect": "During a sandstorm, this Pokémon's rock-, ground-, and steel-type moves have 1.3× their base power.  This Pokémon does not take sandstorm damage, regardless of type.",
    "short_effect": "Strengthens rock, ground, and steel moves to 1.3× their power during a sandstorm.  Protects against sandstorm damage.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 160,
    "name": "iron-barbs",
    "effect": "Whenever a move makes contact with this Pokémon, the move's user takes 1/8 of its maximum HP in damage.\n\nThis ability functions identically to rough skin.",
    "short_effect": "Damages attacking Pokémon for 1/8 their max HP on contact.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 161,
    "name": "zen-mode",
    "effect": "This Pokémon switches between Standard Mode and Zen Mode after each turn depending on its HP.  Below 50% of its maximum HP, it switches to Zen Mode, and at 50% or above, it switches to Standard Mode.\n\nThis Pokémon returns to Standard Mode upon leaving battle or losing this ability.  This ability has no effect if this Pokémon is not a darmanitan.",
    "short_effect": "Changes darmanitan's form after each turn depending on its HP: Zen Mode below 50% max HP, and Standard Mode otherwise.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 162,
    "name": "victory-star",
    "effect": "All friendly Pokémon's moves, including this Pokémon's own moves, have 1.1× their usual accuracy while this Pokémon is in battle.",
    "short_effect": "Increases moves' accuracy to 1.1× for friendly Pokémon.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 163,
    "name": "turboblaze",
    "effect": "This Pokémon's moves completely ignore abilities that could hinder or prevent their effect on the target.\n\nFor example, this Pokémon's moves ignore abilities that would fully negate them, such as water absorb; abilities that would prevent any of their effects, such as clear body, shell armor, or sticky hold; and abilities that grant any general protective benefit, such as simple, snow cloak, or thick fat.  If an ability could either hinder or help this Pokémon's moves, e.g. dry skin or unaware, the ability is ignored either way.\n\nAbilities that do not fit this description, even if they could hinder moves in some other way, are not affected.  For example, cursed body only affects potential future uses of the move, while liquid ooze and shadow tag can only hinder a move's effect on the user.  This ablity cannot ignore type or form changes granted by abilities, for example color change or forecast; nor effects that were caused by abilities but are no longer tied to an ability, such as the rain from drizzle.  This ability cannot ignore multitype at all.\n\nAn ability ignored by this ability is only nullified while the move is being used.  For example, this Pokémon's moves can paralyze a Pokémon with limber, but Limber will activate and heal the paralysis immediately thereafter, and this Pokémon's spikes are not affected by this ability after they have been placed.\n\nWhen this Pokémon enters battle, all participating trainers are notified that it has this ability.\n\nThis ability functions identically to mold breaker and teravolt.",
    "short_effect": "Bypasses targets' abilities if they could hinder or prevent moves.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 164,
    "name": "teravolt",
    "effect": "This Pokémon's moves completely ignore abilities that could hinder or prevent their effect on the target.\n\nFor example, this Pokémon's moves ignore abilities that would fully negate them, such as water absorb; abilities that would prevent any of their effects, such as clear body, shell armor, or sticky hold; and abilities that grant any general protective benefit, such as simple, snow cloak, or thick fat.  If an ability could either hinder or help this Pokémon's moves, e.g. dry skin or unaware, the ability is ignored either way.\n\nAbilities that do not fit this description, even if they could hinder moves in some other way, are not affected.  For example, cursed body only affects potential future uses of the move, while liquid ooze and shadow tag can only hinder a move's effect on the user.  This ablity cannot ignore type or form changes granted by abilities, for example color change or forecast; nor effects that were caused by abilities but are no longer tied to an ability, such as the rain from drizzle.  This ability cannot ignore multitype at all.\n\nAn ability ignored by this ability is only nullified while the move is being used.  For example, this Pokémon's moves can paralyze a Pokémon with limber, but Limber will activate and heal the paralysis immediately thereafter, and this Pokémon's spikes are not affected by this ability after they have been placed.\n\nWhen this Pokémon enters battle, all participating trainers are notified that it has this ability.\n\nThis ability functions identically to mold breaker and turboblaze.",
    "short_effect": "Bypasses targets' abilities if they could hinder or prevent moves.",
    "generation": "generation-v",
    "is_main_series": true
  },
  {
    "id": 10001,
    "name": "mountaineer",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10002,
    "name": "wave-rider",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10003,
    "name": "skater",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10004,
    "name": "thrust",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10005,
    "name": "perception",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10006,
    "name": "parry",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10007,
    "name": "instinct",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10008,
    "name": "dodge",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10009,
    "name": "jagged-edge",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10010,
    "name": "frostbite",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10011,
    "name": "tenacity",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10012,
    "name": "pride",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10013,
    "name": "deep-sleep",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10014,
    "name": "power-nap",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10015,
    "name": "spirit",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10016,
    "name": "warm-blanket",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10017,
    "name": "gulp",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10018,
    "name": "herbivore",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10019,
    "name": "sandpit",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10020,
    "name": "hot-blooded",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10021,
    "name": "medic",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10022,
    "name": "life-force",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10023,
    "name": "lunchbox",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10024,
    "name": "nurse",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10025,
    "name": "melee",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10026,
    "name": "sponge",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10027,
    "name": "bodyguard",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10028,
    "name": "hero",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10029,
    "name": "last-bastion",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10030,
    "name": "stealth",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10031,
    "name": "vanguard",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10032,
    "name": "nomad",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10033,
    "name": "sequence",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10034,
    "name": "grass-cloak",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10035,
    "name": "celebrate",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10036,
    "name": "lullaby",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10037,
    "name": "calming",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10038,
    "name": "daze",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10039,
    "name": "frighten",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10040,
    "name": "interference",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10041,
    "name": "mood-maker",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10042,
    "name": "confidence",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10043,
    "name": "fortune",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10044,
    "name": "bonanza",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10045,
    "name": "explode",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10046,
    "name": "omnipotent",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10047,
    "name": "share",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10048,
    "name": "black-hole",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10049,
    "name": "shadow-dash",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10050,
    "name": "sprint",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10051,
    "name": "disgust",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10052,
    "name": "high-rise",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10053,
    "name": "climber",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10054,
    "name": "flame-boost",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10055,
    "name": "aqua-boost",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10056,
    "name": "run-up",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10057,
    "name": "conqueror",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10058,
    "name": "shackle",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10059,
    "name": "decoy",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  },
  {
    "id": 10060,
    "name": "shield",
    "effect": "",
    "short_effect": "",
    "generation": "generation-v",
    "is_main_series": false
  }
];
