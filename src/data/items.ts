// All Pokemon items (Gen 1-5, 678 items, sprites via asset manifest)
import type { Item } from '../types';

export const ITEMS: Item[] = [
  {
    "id": 1,
    "name": "master-ball",
    "category": "standard-balls",
    "cost": 0,
    "effect": "Used in battle\n:   Catches a wild Pokémon without fail.\n\n    If used in a trainer battle, nothing happens and the ball is lost.",
    "short_effect": "Catches a wild Pokémon every time.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 2,
    "name": "ultra-ball",
    "category": "standard-balls",
    "cost": 800,
    "effect": "Used in battle\n:   Attempts to catch a wild Pokémon, using a catch rate of 2×.\n\n    If used in a trainer battle, nothing happens and the ball is lost.",
    "short_effect": "Tries to catch a wild Pokémon.  Success rate is 2×.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 3,
    "name": "great-ball",
    "category": "standard-balls",
    "cost": 600,
    "effect": "Used in battle\n:   Attempts to catch a wild Pokémon, using a catch rate of 1.5×.\n\n    If used in a trainer battle, nothing happens and the ball is lost.",
    "short_effect": "Tries to catch a wild Pokémon.  Success rate is 1.5×.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 4,
    "name": "poke-ball",
    "category": "standard-balls",
    "cost": 200,
    "effect": "Used in battle\n:   Attempts to catch a wild Pokémon, using a catch rate of 1×.\n\n    If used in a trainer battle, nothing happens and the ball is lost.",
    "short_effect": "Tries to catch a wild Pokémon.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 5,
    "name": "safari-ball",
    "category": "standard-balls",
    "cost": 0,
    "effect": "Used in battle\n:   Attempts to catch a wild Pokémon, using a catch rate of 1.5×.\n\nThis item can only be used in the great marsh or kanto safari zone.",
    "short_effect": "Tries to catch a wild Pokémon in the Great Marsh or Safari Zone.  Success rate is 1.5×.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 6,
    "name": "net-ball",
    "category": "special-balls",
    "cost": 1000,
    "effect": "Used in battle\n:   Attempts to catch a wild Pokémon.  If the wild Pokémon is water- or bug-type, this ball has a catch rate of 3×.  Otherwise, it has a catch rate of 1×.\n\n    If used in a trainer battle, nothing happens and the ball is lost.",
    "short_effect": "Tries to catch a wild Pokémon.  Success rate is 3× for water and bug Pokémon.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 7,
    "name": "dive-ball",
    "category": "special-balls",
    "cost": 1000,
    "effect": "Used in battle\n:   Attempts to catch a wild Pokémon.  If the wild Pokémon was encountered by surfing or fishing, this ball has a catch rate of 3.5×.  Otherwise, it has a catch rate of 1×.\n\n    If used in a trainer battle, nothing happens and the ball is lost.",
    "short_effect": "Tries to catch a wild Pokémon. Success rate is 3.5× when underwater, fishing, or surfing.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 8,
    "name": "nest-ball",
    "category": "special-balls",
    "cost": 1000,
    "effect": "Used in battle\n:   Attempts to catch a wild Pokémon.  Has a catch rate of given by `(40 - level) / 10`, where `level` is the wild Pokémon’s level, to a maximum of 3.9× for level 1 Pokémon.  If the wild Pokémon’s level is higher than 30, this ball has a catch rate of 1×.\n\n    If used in a trainer battle, nothing happens and the ball is lost.",
    "short_effect": "Tries to catch a wild Pokémon.  Success rate is 3.9× for level 1 Pokémon, and drops steadily to 1× at level 30.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 9,
    "name": "repeat-ball",
    "category": "special-balls",
    "cost": 1000,
    "effect": "Used in battle\n:   Attempts to catch a wild Pokémon.  If the wild Pokémon’s species is marked as caught in the trainer’s Pokédex, this ball has a catch rate of 3×.  Otherwise, it has a catch rate of 1×.\n\n    If used in a trainer battle, nothing happens and the ball is lost.",
    "short_effect": "Tries to catch a wild Pokémon.  Success rate is 3× for previously-caught Pokémon.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 10,
    "name": "timer-ball",
    "category": "special-balls",
    "cost": 1000,
    "effect": "Used in battle\n:   Attempts to catch a wild Pokémon.  Has a catch rate of 1.1× on the first turn of the battle and increases by 0.1× every turn, to a maximum of 4× on turn 30.\n\n    If used in a trainer battle, nothing happens and the ball is lost.",
    "short_effect": "Tries to catch a wild Pokémon. Success rate increases by 0.1× (Gen V: 0.3×) every turn, to a max of 4×.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 11,
    "name": "luxury-ball",
    "category": "special-balls",
    "cost": 3000,
    "effect": "Used in battle\n:   Attempts to catch a wild Pokémon, using a catch rate of 1×.  Whenever the caught Pokémon’s happiness increases, it increases by one extra point.\n\n    If used in a trainer battle, nothing happens and the ball is lost.",
    "short_effect": "Tries to catch a wild Pokémon.  Caught Pokémon start with 200 happiness.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 12,
    "name": "premier-ball",
    "category": "special-balls",
    "cost": 20,
    "effect": "Used in battle\n:   Attempts to catch a wild Pokémon, using a catch rate of 1×.\n\n    If used in a trainer battle, nothing happens and the ball is lost.",
    "short_effect": "Tries to catch a wild Pokémon.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 13,
    "name": "dusk-ball",
    "category": "special-balls",
    "cost": 1000,
    "effect": "Used in battle\n:   Attempts to catch a wild Pokémon.  If it’s currently nighttime or the wild Pokémon was encountered while walking in a cave, this ball has a catch rate of 3.5×.  Otherwise, it has a catch rate of 1×.\n\n    If used in a trainer battle, nothing happens and the ball is lost.",
    "short_effect": "Tries to catch a wild Pokémon.  Success rate is 3.5× at night and in caves.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 14,
    "name": "heal-ball",
    "category": "special-balls",
    "cost": 300,
    "effect": "Used in battle\n:   Attempts to catch a wild Pokémon, using a catch rate of 1×.  The caught Pokémon’s HP is immediately restored, PP for all its moves is restored, and any status ailment is cured.\n\n    If used in a trainer battle, nothing happens and the ball is lost.",
    "short_effect": "Tries to catch a wild Pokémon.  Caught Pokémon are immediately healed.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 15,
    "name": "quick-ball",
    "category": "special-balls",
    "cost": 1000,
    "effect": "Used in battle\n:   Attempts to catch a wild Pokémon, using a catch rate of 4× on the first turn of a battle, but 1× any other time.\n\n    If used in a trainer battle, nothing happens and the ball is lost.",
    "short_effect": "Tries to catch a wild Pokémon. Success rate is 4× (Gen V: 5×), but only on the first turn.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 16,
    "name": "cherish-ball",
    "category": "special-balls",
    "cost": 0,
    "effect": "Used in battle\n:   Attempts to catch a wild Pokémon, using a catch rate of 1×.\n\n    If used in a trainer battle, nothing happens and the ball is lost.",
    "short_effect": "Tries to catch a wild Pokémon.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 17,
    "name": "potion",
    "category": "healing",
    "cost": 200,
    "effect": "Used on a friendly Pokémon\n:   Restores 20 HP.",
    "short_effect": "Restores 20 HP.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 18,
    "name": "antidote",
    "category": "status-cures",
    "cost": 200,
    "effect": "Used on a party Pokémon\n:   Cures poison.",
    "short_effect": "Cures poison.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 19,
    "name": "burn-heal",
    "category": "status-cures",
    "cost": 200,
    "effect": "Used on a party Pokémon\n:   Cures a burn.",
    "short_effect": "Cures a burn.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 20,
    "name": "ice-heal",
    "category": "status-cures",
    "cost": 200,
    "effect": "Used on a party Pokémon\n:   Cures freezing.",
    "short_effect": "Cures freezing.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 21,
    "name": "awakening",
    "category": "status-cures",
    "cost": 200,
    "effect": "Used on a party Pokémon\n:   Cures sleep.",
    "short_effect": "Cures sleep.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 22,
    "name": "paralyze-heal",
    "category": "status-cures",
    "cost": 200,
    "effect": "Used on a party Pokémon\n:   Cures paralysis.",
    "short_effect": "Cures paralysis.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 23,
    "name": "full-restore",
    "category": "healing",
    "cost": 3000,
    "effect": "Used on a party Pokémon\n:   Restores HP to full and cures any status ailment and confusion.",
    "short_effect": "Restores HP to full and cures any status ailment and confusion.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 24,
    "name": "max-potion",
    "category": "healing",
    "cost": 2500,
    "effect": "Used on a party Pokémon\n:   Restores HP to full.",
    "short_effect": "Restores HP to full.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 25,
    "name": "hyper-potion",
    "category": "healing",
    "cost": 1500,
    "effect": "Used on a party Pokémon\n:   Restores 200 HP.",
    "short_effect": "Restores 200 HP.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 26,
    "name": "super-potion",
    "category": "healing",
    "cost": 700,
    "effect": "Used on a party Pokémon\n:   Restores 50 HP.",
    "short_effect": "Restores 50 HP.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 27,
    "name": "full-heal",
    "category": "status-cures",
    "cost": 400,
    "effect": "Used on a party Pokémon\n:   Cures any status ailment and confusion.",
    "short_effect": "Cures any status ailment and confusion.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 28,
    "name": "revive",
    "category": "revival",
    "cost": 2000,
    "effect": "Used on a party Pokémon\n:   Revives the Pokémon and restores half its HP.",
    "short_effect": "Revives with half HP.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable",
      "underground"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 29,
    "name": "max-revive",
    "category": "revival",
    "cost": 4000,
    "effect": "Used on a party Pokémon\n:   Revives the Pokémon and restores its HP to full.",
    "short_effect": "Revives with full HP.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable",
      "underground"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 30,
    "name": "fresh-water",
    "category": "healing",
    "cost": 200,
    "effect": "Used on a party Pokémon\n:   Restores 50 HP.",
    "short_effect": "Restores 50 HP.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 31,
    "name": "soda-pop",
    "category": "healing",
    "cost": 300,
    "effect": "Used on a party Pokémon\n:   Restores 60 HP.",
    "short_effect": "Restores 60 HP.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 32,
    "name": "lemonade",
    "category": "healing",
    "cost": 400,
    "effect": "Used on a party Pokémon\n:   Restores 80 HP.",
    "short_effect": "Restores 80 HP.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 33,
    "name": "moomoo-milk",
    "category": "healing",
    "cost": 600,
    "effect": "Used on a party Pokémon\n:   Restores 100 HP.",
    "short_effect": "Restores 100 HP.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 34,
    "name": "energy-powder",
    "category": "healing",
    "cost": 500,
    "effect": "Used on a party Pokémon\n:   Restores 50 HP.  Decreases happiness by 5/5/10.",
    "short_effect": "Restores 50 HP, but lowers happiness.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 35,
    "name": "energy-root",
    "category": "healing",
    "cost": 1200,
    "effect": "Used on a party Pokémon\n:   Restores 200 HP.  Decreases happiness by 10/10/15.",
    "short_effect": "Restores 200 HP, but lowers happiness.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 36,
    "name": "heal-powder",
    "category": "status-cures",
    "cost": 300,
    "effect": "Used on a party Pokémon\n:   Cures any status ailment.  Decreases happiness by 5/5/10.",
    "short_effect": "Cures any status ailment, but lowers happiness.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 37,
    "name": "revival-herb",
    "category": "revival",
    "cost": 2800,
    "effect": "Used on a party Pokémon\n:   Revives a fainted Pokémon and restores its HP to full.  Decreases happiness by 10/10/15.",
    "short_effect": "Revives with full HP, but lowers happiness.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 38,
    "name": "ether",
    "category": "pp-recovery",
    "cost": 1200,
    "effect": "Used on a party Pokémon\n:   Restores 10 PP for a selected move.",
    "short_effect": "Restores 10 PP for one move.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 39,
    "name": "max-ether",
    "category": "pp-recovery",
    "cost": 2000,
    "effect": "Used on a party Pokémon\n:   Restores PP to full for a selected move.",
    "short_effect": "Restores PP to full for one move.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 40,
    "name": "elixir",
    "category": "pp-recovery",
    "cost": 3000,
    "effect": "Used on a party Pokémon\n:   Restores 10 PP for each move.",
    "short_effect": "Restores 10 PP for each move.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 41,
    "name": "max-elixir",
    "category": "pp-recovery",
    "cost": 4500,
    "effect": "Used on a party Pokémon\n:   Restores PP to full for each move.",
    "short_effect": "Restores PP to full for each move.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 42,
    "name": "lava-cookie",
    "category": "status-cures",
    "cost": 350,
    "effect": "Used on a party Pokémon\n:   Cures any status ailment and confusion.",
    "short_effect": "Cures any status ailment and confusion.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 43,
    "name": "berry-juice",
    "category": "healing",
    "cost": 200,
    "effect": "Used on a party Pokémon\n:   Restores 20 HP.",
    "short_effect": "Restores 20 HP.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 44,
    "name": "sacred-ash",
    "category": "revival",
    "cost": 50000,
    "effect": "Used\n:   Revives all fainted Pokémon in the party and restores their HP to full.",
    "short_effect": "Revives all fainted Pokémon with full HP.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 45,
    "name": "hp-up",
    "category": "vitamins",
    "cost": 10000,
    "effect": "Used on a party Pokémon\n:   Increases HP effort by 10, but won’t increase it beyond 100.  Increases happiness by 5/3/2.",
    "short_effect": "Raises HP effort and happiness.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 46,
    "name": "protein",
    "category": "vitamins",
    "cost": 10000,
    "effect": "Used on a party Pokémon\n:   Increases Attack effort by 10, but won’t increase it beyond 100.  Increases happiness by 5/3/2.",
    "short_effect": "Raises Attack effort and happiness.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 47,
    "name": "iron",
    "category": "vitamins",
    "cost": 10000,
    "effect": "Used on a party Pokémon\n:   Increases Defense effort by 10, but won’t increase it beyond 100.  Increases happiness by 5/3/2.",
    "short_effect": "Raises Defense effort and happiness.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 48,
    "name": "carbos",
    "category": "vitamins",
    "cost": 10000,
    "effect": "Used on a party Pokémon\n:   Increases Speed effort by 10, but won’t increase it beyond 100.  Increases happiness by 5/3/2.",
    "short_effect": "Raises Speed effort and happiness.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 49,
    "name": "calcium",
    "category": "vitamins",
    "cost": 10000,
    "effect": "Used on a party Pokémon\n:   Increases Special Attack effort by 10, but won’t increase it beyond 100.  Increases happiness by 5/3/2.",
    "short_effect": "Raises Special Attack effort and happiness.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 50,
    "name": "rare-candy",
    "category": "vitamins",
    "cost": 10000,
    "effect": "Used on a party Pokémon\n:   Increases level by 1.  Increases happiness by 5/3/2.",
    "short_effect": "Causes a level-up and raises happiness.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 51,
    "name": "pp-up",
    "category": "vitamins",
    "cost": 10000,
    "effect": "Used on a party Pokémon\n:   Increases a selected move’s max PP by 20% its original max PP, to a maximum of 1.6×.  Increases happiness by 5/3/2.",
    "short_effect": "Raises a move’s max PP by 20%.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 52,
    "name": "zinc",
    "category": "vitamins",
    "cost": 10000,
    "effect": "Used on a party Pokémon\n:   Increases Special Defense effort by 10, but won’t increase it beyond 100.  Increases happiness by 5/3/2.",
    "short_effect": "Raises Special Defense and happiness.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 53,
    "name": "pp-max",
    "category": "vitamins",
    "cost": 10000,
    "effect": "Used on a party Pokémon\n:   Increases a selected move’s max PP to 1.6× its original max PP.  Increases happiness by 5/3/2.",
    "short_effect": "Raises a move’s max PP by 60%.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 54,
    "name": "old-gateau",
    "category": "status-cures",
    "cost": 350,
    "effect": "Used on a party Pokémon\n:   Cures any status ailment and confusion.",
    "short_effect": "Cures any status ailment and confusion.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 55,
    "name": "guard-spec",
    "category": "stat-boosts",
    "cost": 1500,
    "effect": "Used on a party Pokémon in battle\n:   Protects the target’s stats from being lowered for the next five turns.  Increases happiness by 1/1/0.",
    "short_effect": "Prevents stat changes in battle for five turns in battle.  Raises happiness.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 56,
    "name": "dire-hit",
    "category": "stat-boosts",
    "cost": 1000,
    "effect": "Used on a party Pokémon in battle\n:   Increases the target’s critical hit chance by one stage until it leaves the field.  Increases happiness by 1/1/0.",
    "short_effect": "Increases the chance of a critical hit in battle.  Raises happiness.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 57,
    "name": "x-attack",
    "category": "stat-boosts",
    "cost": 1000,
    "effect": "Used on a party Pokémon in battle\n:   Raises the target’s Attack by one stage.  Increases happiness by 1/1/0.",
    "short_effect": "Raises Attack by one stage in battle.  Raises happiness.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 58,
    "name": "x-defense",
    "category": "stat-boosts",
    "cost": 2000,
    "effect": "Used on a party Pokémon in battle\n:   Raises the target’s Defense by one stage.  Increases happiness by 1/1/0.",
    "short_effect": "Raises Defense by one stage in battle.  Raises happiness.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 59,
    "name": "x-speed",
    "category": "stat-boosts",
    "cost": 1000,
    "effect": "Used on a party Pokémon in battle\n:   Raises the target’s Speed by one stage.  Increases happiness by 1/1/0.",
    "short_effect": "Raises Speed by one stage in battle.  Raises happiness.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 60,
    "name": "x-accuracy",
    "category": "stat-boosts",
    "cost": 1000,
    "effect": "Used on a party Pokémon in battle\n:   Raises the target’s accuracy by one stage.  Increases happiness by 1/1/0.",
    "short_effect": "Raises accuracy by one stage in battle.  Raises happiness.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 61,
    "name": "x-sp-atk",
    "category": "stat-boosts",
    "cost": 1000,
    "effect": "Used on a party Pokémon in battle\n:   Raises the target’s Special Attack by one stage.  Increases happiness by 1/1/0.",
    "short_effect": "Raises Special Attack by one stage in battle.  Raises happiness.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 62,
    "name": "x-sp-def",
    "category": "stat-boosts",
    "cost": 2000,
    "effect": "Used on a party Pokémon in battle\n:   Raises the target’s Special Defense by one stage.  Increases happiness by 1/1/0.",
    "short_effect": "Raises Special Defense by one stage in battle.  Raises happiness.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 63,
    "name": "poke-doll",
    "category": "spelunking",
    "cost": 300,
    "effect": "Used in battle\n:   Ends a wild battle.  Cannot be used in trainer battles.",
    "short_effect": "Ends a wild battle.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 64,
    "name": "fluffy-tail",
    "category": "spelunking",
    "cost": 100,
    "effect": "Used in battle\n:   Ends a wild battle.  Cannot be used in trainer battles.",
    "short_effect": "Ends a wild battle.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 65,
    "name": "blue-flute",
    "category": "flutes",
    "cost": 20,
    "effect": "Used on a party Pokémon\n:   Cures sleep.",
    "short_effect": "Cures sleep.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 66,
    "name": "yellow-flute",
    "category": "flutes",
    "cost": 20,
    "effect": "Used on a party Pokémon in battle\n:   Cures confusion.",
    "short_effect": "Cures confusion.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 67,
    "name": "red-flute",
    "category": "flutes",
    "cost": 20,
    "effect": "Used on a party Pokémon in battle\n:   Cures attraction.",
    "short_effect": "Cures attraction.",
    "attributes": [
      "countable",
      "consumable",
      "usable-in-battle",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 68,
    "name": "black-flute",
    "category": "spelunking",
    "cost": 20,
    "effect": "Used outside of battle\n:   Decreases the wild Pokémon encounter rate by 50%.",
    "short_effect": "Halves the wild Pokémon encounter rate.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 69,
    "name": "white-flute",
    "category": "spelunking",
    "cost": 20,
    "effect": "Used outside of battle\n:   Doubles the wild Pokémon encounter rate.",
    "short_effect": "Doubles the wild Pokémon encounter rate.",
    "attributes": [
      "countable",
      "consumable",
      "usable-overworld",
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 70,
    "name": "shoal-salt",
    "category": "collectibles",
    "cost": 20,
    "effect": "No effect.",
    "short_effect": "No effect. Gen III: Trade four and four Shoal Shells for a Shell Bell.",
    "attributes": [
      "countable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 71,
    "name": "shoal-shell",
    "category": "collectibles",
    "cost": 20,
    "effect": "No effect.",
    "short_effect": "No effect. Gen III: Trade four and four Shoal Salts for a Shell Bell.",
    "attributes": [
      "countable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 72,
    "name": "red-shard",
    "category": "collectibles",
    "cost": 1000,
    "effect": "No effect.\n\nIn Diamond and Pearl, trade ten for a sunny day TM in the house midway along the southern section of sinnoh route 212.\n\nIn Platinum, trade to move tutors on sinnoh route 212, in snowpoint city, and in the survival area.  Eight shards total are required per tutelage, but the particular combination of colors varies by move.\n\nIn HeartGold and SoulSilver, trade one for a cheri berry, a leppa berry, and a pecha berry with the Juggler near the Pokémon Center in violet city.\n\nIn HeartGold and SoulSilver, trade one for a persim berry, a pomeg berry, and a razz berry with the Juggler near the pal park entrance in fuchsia city.",
    "short_effect": "No effect. Can be traded for items or moves.",
    "attributes": [
      "underground"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 73,
    "name": "blue-shard",
    "category": "collectibles",
    "cost": 1000,
    "effect": "No effect.\n\nIn Diamond and Pearl, trade ten for a rain dance TM in the house midway along the southern section of sinnoh route 212.\n\nIn Platinum, trade to move tutors on sinnoh route 212, in snowpoint city, and in the survival area.  Eight shards total are required per tutelage, but the particular combination of colors varies by move.\n\nIn HeartGold and SoulSilver, trade one for a chesto berry, an oran berry, and a wiki berry with the Juggler near the Pokémon Center in violet city.\n\nIn HeartGold and SoulSilver, trade one for a bluk berry, a cornn berry, and a kelpsy berry with the Juggler near the pal park entrance in fuchsia city.",
    "short_effect": "No effect. Can be traded for items or moves.",
    "attributes": [
      "underground"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 74,
    "name": "yellow-shard",
    "category": "collectibles",
    "cost": 1000,
    "effect": "No effect.\n\nIn Diamond and Pearl, trade ten for a sandstorm TM in the house midway along the southern section of sinnoh route 212.\n\nIn Platinum, trade to move tutors on sinnoh route 212, in snowpoint city, and in the survival area.  Eight shards total are required per tutelage, but the particular combination of colors varies by move.\n\nIn HeartGold and SoulSilver, trade one for an aspear berry, a iapapa berry, and a sitrus berry with the Juggler near the Pokémon Center in violet city.\n\nIn HeartGold and SoulSilver, trade one for a grepa berry, a nomel berry, and a pinap berry with the Juggler near the pal park entrance in fuchsia city.",
    "short_effect": "No effect. Can be traded for items or moves.",
    "attributes": [
      "underground"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 75,
    "name": "green-shard",
    "category": "collectibles",
    "cost": 1000,
    "effect": "No effect.\n\nIn Diamond and Pearl, trade ten for a hail TM in the house midway along the southern section of sinnoh route 212.\n\nIn Platinum, trade to move tutors on sinnoh route 212, in snowpoint city, and in the survival area.  Eight shards total are required per tutelage, but the particular combination of colors varies by move.\n\nIn HeartGold and SoulSilver, trade one for an aguav berry, a lum berry, and a rawst berry with the Juggler near the Pokémon Center in violet city.\n\nIn HeartGold and SoulSilver, trade one for a durin berry, a hondew berry, and a wepear berry with the Juggler near the pal park entrance in fuchsia city.",
    "short_effect": "No effect. Can be traded for items or moves.",
    "attributes": [
      "underground"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 76,
    "name": "super-repel",
    "category": "spelunking",
    "cost": 700,
    "effect": "Used outside of battle\n:   Trainer will skip encounters with wild Pokémon of a lower level than the lead party Pokémon.  This effect wears off after the trainer takes 200 steps.",
    "short_effect": "For 200 steps, prevents wild encounters of level lower than your party’s lead Pokémon.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 77,
    "name": "max-repel",
    "category": "spelunking",
    "cost": 900,
    "effect": "Used outside of battle\n:   Trainer will skip encounters with wild Pokémon of a lower level than the lead party Pokémon.  This effect wears off after the trainer takes 250 steps.",
    "short_effect": "For 250 steps, prevents wild encounters of level lower than your party’s lead Pokémon.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 78,
    "name": "escape-rope",
    "category": "spelunking",
    "cost": 300,
    "effect": "Used outside of battle\n:   Transports the trainer to the last-entered dungeon entrance.  Cannot be used outside, in buildings, or in distortion world, sinnoh hall of origin 1, spear pillar, or turnback cave.",
    "short_effect": "Transports user to the outside entrance of a cave.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 79,
    "name": "repel",
    "category": "spelunking",
    "cost": 400,
    "effect": "Used outside of battle\n:   Trainer will skip encounters with wild Pokémon of a lower level than the lead party Pokémon.  This effect wears off after the trainer takes 100 steps.",
    "short_effect": "For 100 steps, prevents wild encounters of level lower than your party’s lead Pokémon.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 80,
    "name": "sun-stone",
    "category": "evolution",
    "cost": 3000,
    "effect": "Used on a party Pokémon\n:   Evolves a cottonee into whimsicott, a gloom into bellossom, a petilil into lilligant, or a sunkern into sunflora.",
    "short_effect": "Evolves a Cottonee into Whimsicott, a Gloom into Bellossom, a Petilil into Lilligant, or a Sunkern into Sunflora.",
    "attributes": [
      "underground"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 81,
    "name": "moon-stone",
    "category": "evolution",
    "cost": 3000,
    "effect": "Used on a party Pokémon\n:   Evolves a clefairy into clefable, a jigglypuff into wigglytuff, a munna into musharna, a nidorina into nidoqueen, a nidorino into nidoking, or a skitty into delcatty.",
    "short_effect": "Evolves a Clefairy into Clefable, a Jigglypuff into Wigglytuff, a Munna into Musharna, a Nidorina into Nidoqueen, a Nidorino into Nidoking, or a Skitty into Delcatty.",
    "attributes": [
      "underground"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 82,
    "name": "fire-stone",
    "category": "evolution",
    "cost": 3000,
    "effect": "Used on a party Pokémon\n:   Evolves an eevee into flareon, a growlithe into arcanine, a pansear into simisear, or a vulpix into ninetales.",
    "short_effect": "Evolves an Eevee into Flareon, a Growlithe into Arcanine, a Pansear into Simisear, or a Vulpix into Ninetales.",
    "attributes": [
      "underground"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 83,
    "name": "thunder-stone",
    "category": "evolution",
    "cost": 3000,
    "effect": "Used on a party Pokémon\n:   Evolves an eelektrik into eelektross, an eevee into jolteon, or a pikachu into raichu.",
    "short_effect": "Evolves an Eelektrik into Eelektross, an Eevee into Jolteon, or a Pikachu into Raichu.",
    "attributes": [
      "underground"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 84,
    "name": "water-stone",
    "category": "evolution",
    "cost": 3000,
    "effect": "Used on a party Pokémon\n:   Evolves an eevee into vaporeon, a lombre into ludicolo, a panpour into simipour, a poliwhirl into poliwrath, a shellder into cloyster, or a staryu into starmie.",
    "short_effect": "Evolves an Eevee into Vaporeon, a Lombre into Ludicolo, a Panpour into Simipour, a Poliwhirl into Poliwrath, a Shellder into Cloyster, or a Staryu into Starmie.",
    "attributes": [
      "underground"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 85,
    "name": "leaf-stone",
    "category": "evolution",
    "cost": 3000,
    "effect": "Used on a party Pokémon\n:   Evolves an exeggcute into exeggutor, a gloom into vileplume, a nuzleaf into shiftry, a pansage into simisage, or a weepinbell into victreebel.",
    "short_effect": "Evolves an Exeggcute into Exeggutor, a Gloom into Vileplume, a Nuzleaf into Shiftry, a Pansage into Simisage, or a Weepinbell into Victreebel.",
    "attributes": [
      "underground"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 86,
    "name": "tiny-mushroom",
    "category": "loot",
    "cost": 500,
    "effect": "Vendor trash.",
    "short_effect": "Fire Red and Leaf Green: Trade two for prior Level-up moves. Sell for 250 Pokédollars, or to Hungry Maid for 500 Pokédollars.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 87,
    "name": "big-mushroom",
    "category": "loot",
    "cost": 5000,
    "effect": "Vendor trash.",
    "short_effect": "Fire Red and Leaf Green: Trade for prior Level-up moves. Sell for 2500 Pokédollars, or to Hungry Maid for 5000 Pokédollars.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 88,
    "name": "pearl",
    "category": "loot",
    "cost": 2000,
    "effect": "Vendor trash.",
    "short_effect": "Sell for 700 Pokédollars, or to Ore Collector for 1400 Pokédollars.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 89,
    "name": "big-pearl",
    "category": "loot",
    "cost": 8000,
    "effect": "Vendor trash.",
    "short_effect": "Sell for 3750 Pokédollars, or to Ore Collector for 7500 Pokédollars.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 90,
    "name": "stardust",
    "category": "loot",
    "cost": 3000,
    "effect": "Vendor trash.",
    "short_effect": "Sell for 1000 Pokédollars, or to Ore Collector for 2000 Pokédollars.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 91,
    "name": "star-piece",
    "category": "loot",
    "cost": 12000,
    "effect": "Vendor trash.",
    "short_effect": "Platinum: Trade for one of each color Shard. Black and White: Trade for PP Up. Sell for 4900 Pokédollars, or to Ore Collector for 9800 Pokédollars.",
    "attributes": [
      "underground"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 92,
    "name": "nugget",
    "category": "loot",
    "cost": 10000,
    "effect": "Vendor trash.",
    "short_effect": "Sell for 5000 Pokédollars, or to Ore Collector for 10000 Pokédollars.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 93,
    "name": "heart-scale",
    "category": "collectibles",
    "cost": 100,
    "effect": "Trade one to the Move Relearner near the shore in pastoria city or with the Move Deleter in blackthorn city to teach one party Pokémon a prior level-up move.",
    "short_effect": "No effect. Can be traded for prior Level-up moves.",
    "attributes": [
      "underground"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 94,
    "name": "honey",
    "category": "dex-completion",
    "cost": 900,
    "effect": "Used outside of battle\n:   Immediately triggers a wild Pokémon battle, as long as the trainer is somewhere with wild Pokémon—i.e., in tall grass, in a cave, or surfing.\n\nCan be smeared on sweet-smelling trees to attract tree-dwelling Pokémon after six hours.",
    "short_effect": "",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 95,
    "name": "growth-mulch",
    "category": "mulch",
    "cost": 200,
    "effect": "Used on a patch of soil\n:   Plant’s growth stages will each last 25% less time.  Dries soil out more quickly.",
    "short_effect": "Growing time of berries is reduced, but the soil dries out faster.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 96,
    "name": "damp-mulch",
    "category": "mulch",
    "cost": 200,
    "effect": "Used on a patch of soil\n:   Plant’s growth stages will each last 25% more time.  Dries soil out more slowly.",
    "short_effect": "Growing time of berries is increased, but the soil dries out slower.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 97,
    "name": "stable-mulch",
    "category": "mulch",
    "cost": 200,
    "effect": "Used on a patch of soil\n:   Fully-grown plant will last 25% longer before dying and possibly regrowing.",
    "short_effect": "Berries stay on the plant for longer than their usual time.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 98,
    "name": "gooey-mulch",
    "category": "mulch",
    "cost": 200,
    "effect": "Used on a path of soil\n:   Plant will regrow after dying 25% more times.",
    "short_effect": "Berries regrow from dead plants an increased number of times.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 99,
    "name": "root-fossil",
    "category": "dex-completion",
    "cost": 7000,
    "effect": "Give to a scientist in the mining museum in oreburgh city or the Museum of Science in pewter city to receive a lileep.",
    "short_effect": "Can be revived into a Lileep.",
    "attributes": [
      "underground"
    ],
    "fling_power": 100,
    "fling_effect": null
  },
  {
    "id": 100,
    "name": "claw-fossil",
    "category": "dex-completion",
    "cost": 7000,
    "effect": "Give to a scientist in the mining museum in oreburgh city or the Museum of Science in pewter city to receive an anorith.",
    "short_effect": "Can be revived into an Anorith.",
    "attributes": [
      "underground"
    ],
    "fling_power": 100,
    "fling_effect": null
  },
  {
    "id": 101,
    "name": "helix-fossil",
    "category": "dex-completion",
    "cost": 7000,
    "effect": "Give to a scientist in the mining museum in oreburgh city or the Museum of Science in pewter city to receive an omanyte.",
    "short_effect": "Can be revived into an Omanyte.",
    "attributes": [
      "underground"
    ],
    "fling_power": 100,
    "fling_effect": null
  },
  {
    "id": 102,
    "name": "dome-fossil",
    "category": "dex-completion",
    "cost": 7000,
    "effect": "Give to a scientist in the mining museum in oreburgh city or the Museum of Science in pewter city to receive a kabuto.",
    "short_effect": "Can be revived into a Kabuto.",
    "attributes": [
      "underground"
    ],
    "fling_power": 100,
    "fling_effect": null
  },
  {
    "id": 103,
    "name": "old-amber",
    "category": "dex-completion",
    "cost": 10000,
    "effect": "Give to a scientist in the mining museum in oreburgh city or the Museum of Science in pewter city to receive an aerodactyl.",
    "short_effect": "Can be revived into an Aerodactyl.",
    "attributes": [
      "underground"
    ],
    "fling_power": 100,
    "fling_effect": null
  },
  {
    "id": 104,
    "name": "armor-fossil",
    "category": "dex-completion",
    "cost": 7000,
    "effect": "Give to a scientist in the mining museum in oreburgh city or the Museum of Science in pewter city to receive a shieldon.",
    "short_effect": "Can be revived into a Shieldon.",
    "attributes": [
      "underground"
    ],
    "fling_power": 100,
    "fling_effect": null
  },
  {
    "id": 105,
    "name": "skull-fossil",
    "category": "dex-completion",
    "cost": 7000,
    "effect": "Give to a scientist in the mining museum in oreburgh city or the Museum of Science in pewter city to receive a cranidos.",
    "short_effect": "Can be revived into a Cranidos.",
    "attributes": [
      "underground"
    ],
    "fling_power": 100,
    "fling_effect": null
  },
  {
    "id": 106,
    "name": "rare-bone",
    "category": "loot",
    "cost": 5000,
    "effect": "Vendor trash.",
    "short_effect": "Sell for 5000 Pokédollars, or to Bone Man for 10000 Pokédollars.",
    "attributes": [
      "underground"
    ],
    "fling_power": 100,
    "fling_effect": null
  },
  {
    "id": 107,
    "name": "shiny-stone",
    "category": "evolution",
    "cost": 3000,
    "effect": "Used on a party Pokémon\n:   Evolves a minccino into cinccino, a roselia into roserade, or a togetic into togekiss.",
    "short_effect": "Evolves a Minccino into Cinccino, a Roselia into Roserade, or a Togetic into Togekiss.",
    "attributes": [],
    "fling_power": 80,
    "fling_effect": null
  },
  {
    "id": 108,
    "name": "dusk-stone",
    "category": "evolution",
    "cost": 3000,
    "effect": "Used on a party Pokémon\n:   Evolves a lampent into chandelure, a misdreavus into mismagius, or a murkrow into honchkrow.",
    "short_effect": "Evolves a Lampent into Chandelure, a Misdreavus into Mismagius, or a Murkrow into Honchkrow.",
    "attributes": [],
    "fling_power": 80,
    "fling_effect": null
  },
  {
    "id": 109,
    "name": "dawn-stone",
    "category": "evolution",
    "cost": 3000,
    "effect": "Used on a party Pokémon\n:   Evolves a male kirlia into gallade or a female snorunt into froslass.",
    "short_effect": "Evolves a male Kirlia into Gallade or a female Snorunt into Froslass.",
    "attributes": [],
    "fling_power": 80,
    "fling_effect": null
  },
  {
    "id": 110,
    "name": "oval-stone",
    "category": "evolution",
    "cost": 2000,
    "effect": "Held by happiny\n:   Holder evolves into chansey when it levels up during the daytime.",
    "short_effect": "Level-up during Day on a Happiny: Holder evolves into Chansey.",
    "attributes": [
      "underground"
    ],
    "fling_power": 80,
    "fling_effect": null
  },
  {
    "id": 111,
    "name": "odd-keystone",
    "category": "dex-completion",
    "cost": 2100,
    "effect": "Place in the tower on sinnoh route 209.  Check the stone to encounter a spiritomb, as long as the trainer’s Underground status card counts at least 32 greetings.",
    "short_effect": "Use on the tower on Route 209 to encounter Spiritomb if you have at least 32 Underground greetings.",
    "attributes": [
      "underground"
    ],
    "fling_power": 80,
    "fling_effect": null
  },
  {
    "id": 112,
    "name": "adamant-orb",
    "category": "species-specific",
    "cost": 0,
    "effect": "Held by dialga\n:   Holder’s dragon- and steel-type moves have 1.2× their usual power.",
    "short_effect": "Boosts the damage from Dialga’s Dragon-type and Steel-type moves by 20%.",
    "attributes": [
      "holdable"
    ],
    "fling_power": 60,
    "fling_effect": null
  },
  {
    "id": 113,
    "name": "lustrous-orb",
    "category": "species-specific",
    "cost": 0,
    "effect": "Held by palkia\n:   Holder’s dragon- and water-type moves have 1.2× their usual power.",
    "short_effect": "Boosts the damage from Palkia’s Dragon-type and Water-type moves by 20%.",
    "attributes": [
      "holdable"
    ],
    "fling_power": 60,
    "fling_effect": null
  },
  {
    "id": 114,
    "name": "grass-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 115,
    "name": "flame-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 116,
    "name": "bubble-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 117,
    "name": "bloom-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 118,
    "name": "tunnel-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 119,
    "name": "steel-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 120,
    "name": "heart-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 121,
    "name": "snow-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 122,
    "name": "space-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 123,
    "name": "air-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 124,
    "name": "mosaic-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 125,
    "name": "brick-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 126,
    "name": "cheri-berry",
    "category": "medicine",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder is paralyzed, it consumes this item to cure the paralysis.\n\nUsed on a party Pokémon\n:   Cures paralysis.",
    "short_effect": "Held: Consumed when paralyzed to cure paralysis.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": "berry-effect"
  },
  {
    "id": 127,
    "name": "chesto-berry",
    "category": "medicine",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder is asleep, it consumes this item to wake up.\n\nUsed on a party Pokémon\n:   Cures sleep.",
    "short_effect": "Held: Consumed when asleep to cure sleep.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": "berry-effect"
  },
  {
    "id": 128,
    "name": "pecha-berry",
    "category": "medicine",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder is poisoned, it consumes this item to cure the poison.\n\nUsed on a party Pokémon\n:   Cures poison.",
    "short_effect": "Held: Consumed when poisoned to cure poison.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": "berry-effect"
  },
  {
    "id": 129,
    "name": "rawst-berry",
    "category": "medicine",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder is burned, it consumes this item to cure the burn.\n\nUsed on a party Pokémon\n:   Cures a burn.",
    "short_effect": "Held: Consumed when burned to cure a burn.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": "berry-effect"
  },
  {
    "id": 130,
    "name": "aspear-berry",
    "category": "medicine",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder is frozen, it consumes this item to thaw itself.\n\nUsed on a party Pokémon\n:   Cures freezing.",
    "short_effect": "Held: Consumed when frozen to cure frozen.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": "berry-effect"
  },
  {
    "id": 131,
    "name": "leppa-berry",
    "category": "medicine",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder is out of PP for one of its moves, it consumes this item to restore 10 of that move’s PP.\n\nUsed on a party Pokémon\n:   Restores 10 PP for a selected move.",
    "short_effect": "Held: Consumed when a move runs out of PP to restore its PP by 10.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": "berry-effect"
  },
  {
    "id": 132,
    "name": "oran-berry",
    "category": "medicine",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder has 1/2 its max HP remaining or less, it consumes this item to restore 10 HP.\n\nUsed on a party Pokémon\n:   Restores 10 HP.",
    "short_effect": "Held: Consumed at 1/2 max HP to recover 10 HP.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": "berry-effect"
  },
  {
    "id": 133,
    "name": "persim-berry",
    "category": "medicine",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder is confused, it consumes this item to cure the confusion.\n\nUsed on a party Pokémon\n:   Cures confusion.",
    "short_effect": "Held: Consumed when confused to cure confusion.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": "berry-effect"
  },
  {
    "id": 134,
    "name": "lum-berry",
    "category": "medicine",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder is afflicted with a major status ailment, it consumes this item to cure the ailment.\n\nUsed on a party Pokémon\n:   Cures any major status ailment.",
    "short_effect": "Held: Consumed to cure any status condition or confusion.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": "berry-effect"
  },
  {
    "id": 135,
    "name": "sitrus-berry",
    "category": "medicine",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder has 1/2 its max HP remaining or less, it consumes this item to restore 1/4 its max HP.\n\nUsed on a party Pokémon\n:   Restores 1/4 the Pokémon’s max HP.",
    "short_effect": "Held: Consumed at 1/2 max HP to recover 1/4 max HP.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": "berry-effect"
  },
  {
    "id": 136,
    "name": "figy-berry",
    "category": "picky-healing",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder has 1/2 its max HP remaining or less, it consumes this item to restore 1/8 its max HP.  If the holder dislikes spicy flavors (i.e., has a nature that lowers Attack), it will also become confused.",
    "short_effect": "Held: Consumed at 1/2 max HP to restore 1/8 max HP. Confuses Pokémon that dislike spicy flavor.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": "berry-effect"
  },
  {
    "id": 137,
    "name": "wiki-berry",
    "category": "picky-healing",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder has 1/2 its max HP remaining or less, it consumes this item to restore 1/8 its max HP.  If the holder dislikes dry flavors (i.e., has a nature that lowers Special Attack), it will also become confused.",
    "short_effect": "Held: Consumed at 1/2 max HP to restore 1/8 max HP. Confuses Pokémon that dislike dry flavor.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": "berry-effect"
  },
  {
    "id": 138,
    "name": "mago-berry",
    "category": "picky-healing",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder has 1/2 its max HP remaining or less, it consumes this item to restore 1/8 its max HP.  If the holder dislikes sweet flavors (i.e., has a nature that lowers Speed), it will also become confused.",
    "short_effect": "Held: Consumed at 1/2 max HP to restore 1/8 max HP. Confuses Pokémon that dislike sweet flavor.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": "berry-effect"
  },
  {
    "id": 139,
    "name": "aguav-berry",
    "category": "picky-healing",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder has 1/2 its max HP remaining or less, it consumes this item to restore 1/8 its max HP.  If the holder dislikes bitter flavors (i.e., has a nature that lowers Special Defense), it will also become confused.",
    "short_effect": "Held: Consumed at 1/2 max HP to restore 1/8 max HP. Confuses Pokémon that dislike bitter flavor.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": "berry-effect"
  },
  {
    "id": 140,
    "name": "iapapa-berry",
    "category": "picky-healing",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder has 1/2 its max HP remaining or less, it consumes this item to restore 1/8 its max HP.  If the holder dislikes sour flavors (i.e., has a nature that lowers Defense), it will also become confused.",
    "short_effect": "Held: Consumed at 1/2 max HP to restore 1/8 max HP. Confuses Pokémon that dislike sour flavor.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": "berry-effect"
  },
  {
    "id": 141,
    "name": "razz-berry",
    "category": "baking-only",
    "cost": 200,
    "effect": "No effect; only useful for planting and cooking.",
    "short_effect": "Used for creating PokéBlocks and Poffins.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 142,
    "name": "bluk-berry",
    "category": "baking-only",
    "cost": 20,
    "effect": "No effect; only useful for planting and cooking.",
    "short_effect": "Used for creating PokéBlocks and Poffins.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 143,
    "name": "nanab-berry",
    "category": "baking-only",
    "cost": 200,
    "effect": "No effect; only useful for planting and cooking.",
    "short_effect": "Used for creating PokéBlocks and Poffins.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 144,
    "name": "wepear-berry",
    "category": "baking-only",
    "cost": 20,
    "effect": "No effect; only useful for planting and cooking.",
    "short_effect": "Used for creating PokéBlocks and Poffins.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 145,
    "name": "pinap-berry",
    "category": "baking-only",
    "cost": 200,
    "effect": "No effect; only useful for planting and cooking.",
    "short_effect": "Used for creating PokéBlocks and Poffins.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 146,
    "name": "pomeg-berry",
    "category": "effort-drop",
    "cost": 80,
    "effect": "Used on a party Pokémon\n:   Increases happiness by 10/5/2.  Lowers HP effort by 10.",
    "short_effect": "Drops HP Effort Values by 10 and raises happiness.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 147,
    "name": "kelpsy-berry",
    "category": "effort-drop",
    "cost": 80,
    "effect": "Used on a party Pokémon\n:   Increases happiness by 10/5/2.  Lowers Attack effort by 10.",
    "short_effect": "Drops Attack Effort Values by 10 and raises happiness.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 148,
    "name": "qualot-berry",
    "category": "effort-drop",
    "cost": 80,
    "effect": "Used on a party Pokémon\n:   Increases happiness by 10/5/2.  Lowers Defense effort by 10.",
    "short_effect": "Drops Defense Effort Values by 10 and raises happiness.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 149,
    "name": "hondew-berry",
    "category": "effort-drop",
    "cost": 80,
    "effect": "Used on a party Pokémon\n:   Increases happiness by 10/5/2.  Lowers Special Attack effort by 10.",
    "short_effect": "Drops Special Attack Effort Values by 10 and raises happiness.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 150,
    "name": "grepa-berry",
    "category": "effort-drop",
    "cost": 80,
    "effect": "Used on a party Pokémon\n:   Increases happiness by 10/5/2.  Lowers Special Defense effort by 10.",
    "short_effect": "Drops Special Defense Effort Values by 10 and raises happiness.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 151,
    "name": "tamato-berry",
    "category": "effort-drop",
    "cost": 80,
    "effect": "Used on a party Pokémon\n:   Increases happiness by 10/5/2.  Lowers Speed effort by 10.",
    "short_effect": "Drops Speed Effort Values by 10 and raises happiness.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 152,
    "name": "cornn-berry",
    "category": "baking-only",
    "cost": 20,
    "effect": "No effect; only useful for planting and cooking.",
    "short_effect": "Used for creating PokéBlocks and Poffins.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 153,
    "name": "magost-berry",
    "category": "baking-only",
    "cost": 20,
    "effect": "No effect; only useful for planting and cooking.",
    "short_effect": "Used for creating PokéBlocks and Poffins.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 154,
    "name": "rabuta-berry",
    "category": "baking-only",
    "cost": 20,
    "effect": "No effect; only useful for planting and cooking.",
    "short_effect": "Used for creating PokéBlocks and Poffins.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 155,
    "name": "nomel-berry",
    "category": "baking-only",
    "cost": 20,
    "effect": "No effect; only useful for planting and cooking.",
    "short_effect": "Used for creating PokéBlocks and Poffins.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 156,
    "name": "spelon-berry",
    "category": "baking-only",
    "cost": 20,
    "effect": "No effect; only useful for planting and cooking.",
    "short_effect": "Used for creating PokéBlocks and Poffins.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 157,
    "name": "pamtre-berry",
    "category": "baking-only",
    "cost": 20,
    "effect": "No effect; only useful for planting and cooking.",
    "short_effect": "Used for creating PokéBlocks and Poffins.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 158,
    "name": "watmel-berry",
    "category": "baking-only",
    "cost": 20,
    "effect": "No effect; only useful for planting and cooking.",
    "short_effect": "Used for creating PokéBlocks and Poffins.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 159,
    "name": "durin-berry",
    "category": "baking-only",
    "cost": 20,
    "effect": "No effect; only useful for planting and cooking.",
    "short_effect": "Used for creating PokéBlocks and Poffins.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 160,
    "name": "belue-berry",
    "category": "baking-only",
    "cost": 20,
    "effect": "No effect; only useful for planting and cooking.",
    "short_effect": "Used for creating PokéBlocks and Poffins.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 161,
    "name": "occa-berry",
    "category": "type-protection",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder would take super-effective fire-type damage, it consumes this item to halve the amount of damage taken.",
    "short_effect": "Held: Consumed when struck by a super-effective Fire-type attack to halve the damage.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 162,
    "name": "passho-berry",
    "category": "type-protection",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder would take super-effective water-type damage, it consumes this item to halve the amount of damage taken.",
    "short_effect": "Held: Consumed when struck by a super-effective Water-type attack to halve the damage.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 163,
    "name": "wacan-berry",
    "category": "type-protection",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder would take super-effective electric-type damage, it consumes this item to halve the amount of damage taken.",
    "short_effect": "Held: Consumed when struck by a super-effective Electric-type attack to halve the damage.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 164,
    "name": "rindo-berry",
    "category": "type-protection",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder would take super-effective grass-type damage, it consumes this item to halve the amount of damage taken.",
    "short_effect": "Held: Consumed when struck by a super-effective Grass-type attack to halve the damage.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 165,
    "name": "yache-berry",
    "category": "type-protection",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder would take super-effective ice-type damage, it consumes this item to halve the amount of damage taken.",
    "short_effect": "Held: Consumed when struck by a super-effective Ice-type attack to halve the damage.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 166,
    "name": "chople-berry",
    "category": "type-protection",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder would take super-effective fighting-type damage, it consumes this item to halve the amount of damage taken.",
    "short_effect": "Held: Consumed when struck by a super-effective Fighting-type attack to halve the damage.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 167,
    "name": "kebia-berry",
    "category": "type-protection",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder would take super-effective poison-type damage, it consumes this item to halve the amount of damage taken.",
    "short_effect": "Held: Consumed when struck by a super-effective Poison-type attack to halve the damage.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 168,
    "name": "shuca-berry",
    "category": "type-protection",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder would take super-effective ground-type damage, it consumes this item to halve the amount of damage taken.",
    "short_effect": "Held: Consumed when struck by a super-effective Ground-type attack to halve the damage.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 169,
    "name": "coba-berry",
    "category": "type-protection",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder would take super-effective flying-type damage, it consumes this item to halve the amount of damage taken.",
    "short_effect": "Held: Consumed when struck by a super-effective Flying-type attack to halve the damage.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 170,
    "name": "payapa-berry",
    "category": "type-protection",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder would take super-effective psychic-type damage, it consumes this item to halve the amount of damage taken.",
    "short_effect": "Held: Consumed when struck by a super-effective Psychic-type attack to halve the damage.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 171,
    "name": "tanga-berry",
    "category": "type-protection",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder would take super-effective bug-type damage, it consumes this item to halve the amount of damage taken.",
    "short_effect": "Held: Consumed when struck by a super-effective Bug-type attack to halve the damage.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 172,
    "name": "charti-berry",
    "category": "type-protection",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder would take super-effective rock-type damage, it consumes this item to halve the amount of damage taken.",
    "short_effect": "Held: Consumed when struck by a super-effective Rock-type attack to halve the damage.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 173,
    "name": "kasib-berry",
    "category": "type-protection",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder would take super-effective ghost-type damage, it consumes this item to halve the amount of damage taken.",
    "short_effect": "Held: Consumed when struck by a super-effective Ghost-type attack to halve the damage.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 174,
    "name": "haban-berry",
    "category": "type-protection",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder would take super-effective dragon-type damage, it consumes this item to halve the amount of damage taken.",
    "short_effect": "Held: Consumed when struck by a super-effective Dragon-type attack to halve the damage.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 175,
    "name": "colbur-berry",
    "category": "type-protection",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder would take super-effective dark-type damage, it consumes this item to halve the amount of damage taken.",
    "short_effect": "Held: Consumed when struck by a super-effective Dark-type attack to halve the damage.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 176,
    "name": "babiri-berry",
    "category": "type-protection",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder would take super-effective steel-type damage, it consumes this item to halve the amount of damage taken.",
    "short_effect": "Held: Consumed when struck by a super-effective Steel-type attack to halve the damage.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 177,
    "name": "chilan-berry",
    "category": "type-protection",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder would take normal-type damage, it consumes this item to halve the amount of damage taken.",
    "short_effect": "Held: Consumed when struck by a Normal-type attack to halve the damage.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 178,
    "name": "liechi-berry",
    "category": "in-a-pinch",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder has 1/4 its max HP remaining or less, it consumes this item to raise its Attack by one stage.",
    "short_effect": "Held: Consumed at 1/4 max HP to boost Attack.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": "berry-effect"
  },
  {
    "id": 179,
    "name": "ganlon-berry",
    "category": "in-a-pinch",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder has 1/4 its max HP remaining or less, it consumes this item to raise its Defense by one stage.",
    "short_effect": "Held: Consumed at 1/4 max HP to boost Defense.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": "berry-effect"
  },
  {
    "id": 180,
    "name": "salac-berry",
    "category": "in-a-pinch",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder has 1/4 its max HP remaining or less, it consumes this item to raise its Speed by one stage.",
    "short_effect": "Held: Consumed at 1/4 max HP to boost Speed.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": "berry-effect"
  },
  {
    "id": 181,
    "name": "petaya-berry",
    "category": "in-a-pinch",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder has 1/4 its max HP remaining or less, it consumes this item to raise its Special Attack by one stage.",
    "short_effect": "Held: Consumed at 1/4 max HP to boost Special Attack.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": "berry-effect"
  },
  {
    "id": 182,
    "name": "apicot-berry",
    "category": "in-a-pinch",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder has 1/4 its max HP remaining or less, it consumes this item to raise its Special Defense by one stage.",
    "short_effect": "Held: Consumed at 1/4 max HP to boost Special Defense.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": "berry-effect"
  },
  {
    "id": 183,
    "name": "lansat-berry",
    "category": "in-a-pinch",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder has 1/4 its max HP remaining or less, it consumes this item to raise its critical hit chance by one stage.",
    "short_effect": "Held: Consumed at 1/4 max HP to boost critical hit ratio by two stages.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": "berry-effect"
  },
  {
    "id": 184,
    "name": "starf-berry",
    "category": "in-a-pinch",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder has 1/4 its max HP remaining or less, it consumes this item to raise a random stat by two stages.",
    "short_effect": "Held: Consumed at 1/4 max HP to boost a random stat by two stages.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": "berry-effect"
  },
  {
    "id": 185,
    "name": "enigma-berry",
    "category": "other",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder takes super-effective damage, it consumes this item to restore 1/4 its max HP.",
    "short_effect": "Held: Consumed when struck by a super-effective attack to restore 1/4 max HP.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 186,
    "name": "micle-berry",
    "category": "in-a-pinch",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder has 1/4 its max HP remaining or less, it consumes this item, and its next used move has 1.2× its normal accuracy.",
    "short_effect": "Held: Consumed at 1/4 max HP to boost accuracy of next move by 20%. (Gen IV: Perfect accuracy)",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": "berry-effect"
  },
  {
    "id": 187,
    "name": "custap-berry",
    "category": "in-a-pinch",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder has 1/4 its max HP remaining or less, it consumes this item.  On the following turn, the holder will act first among moves with the same priority, regardless of Speed.",
    "short_effect": "Held: Consumed at 1/4 max HP when using a move to go first.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 188,
    "name": "jaboca-berry",
    "category": "other",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder takes physical damage, it consumes this item to damage the attacking Pokémon for 1/8 its max HP.",
    "short_effect": "Held: Consumed to deal 1/8 attacker’s max HP when holder is struck by a physical attack.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 189,
    "name": "rowap-berry",
    "category": "other",
    "cost": 80,
    "effect": "Held in battle\n:   When the holder takes special damage, it consumes this item to damage the attacking Pokémon for 1/8 its max HP.",
    "short_effect": "Held: Consumed to deal 1/8 attacker’s max HP when holder is struck by a special attack.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 190,
    "name": "bright-powder",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held in battle\n:   Moves targeting the holder have 0.9× chance to hit.",
    "short_effect": "Held: Increases the holder’s evasion by 1/9 (11 1/9%).",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 191,
    "name": "white-herb",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held in battle\n:   At the end of each turn, if any of the holder’s stats have a negative stat modifier, the holder consumes this item to remove the modifiers from those stats.",
    "short_effect": "Held: Resets all lowered stats to normal at end of turn. Consumed after use.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": "herb-effect"
  },
  {
    "id": 192,
    "name": "macho-brace",
    "category": "effort-training",
    "cost": 3000,
    "effect": "Held\n:   When the holder would gain effort due to battle, it gains double that effort instead.\n\nHeld in battle\n:   Holder has half its Speed.",
    "short_effect": "Held: Holder gains double effort values from battles, but has halved Speed in battle.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 60,
    "fling_effect": null
  },
  {
    "id": 193,
    "name": "exp-share",
    "category": "training",
    "cost": 0,
    "effect": "Held\n:   Experience is split across two groups: Pokémon who participated in battle, and Pokémon holding this item.  Each Pokémon earns experience as though it had battled alone, divided by the number of Pokémon in its group, then divided by the number of groups. Pokémon holding this item who also participated in battle effectively earn experience twice.\n\n    Fainted Pokémon never earn experience, and empty groups are\nignored; thus, if a single Pokémon is holding this item and the only Pokémon who battled faints from explosion, the holder will gain full experience.",
    "short_effect": "Held: Half the experience from a battle is split between Pokémon holding this item.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 194,
    "name": "quick-claw",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held in battle\n:   Whenever the holder attempts to use a move, it has a 3/16 chance to act first among moves with the same priority.  If multiple Pokémon have this effect at the same time, Speed is the tie-breaker as normal, but the effect of trick room is ignored.",
    "short_effect": "Held: Holder has a 3/16 (18.75%) chance to move first.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 80,
    "fling_effect": null
  },
  {
    "id": 195,
    "name": "soothe-bell",
    "category": "training",
    "cost": 4000,
    "effect": "Held\n:   When the holder would earn happiness for any reason, it earns twice that amount instead.",
    "short_effect": "Held: Doubles the happiness earned by the holder.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 196,
    "name": "mental-herb",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held in battle\n:   When the holder is attracted, it consumes this item to cure the attraction.",
    "short_effect": "Held: Consumed to cure infatuation. Gen V: Also removes Taunt, Encore, Torment, Disable, and Cursed Body.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": "herb-effect"
  },
  {
    "id": 197,
    "name": "choice-band",
    "category": "choice",
    "cost": 4000,
    "effect": "Held in battle\n:   Holder has 1.5× its Attack.  When the holder attempts to use a move, all its other moves are disabled until it leaves battle or loses this item.\n\n    The restriction ends even if this item is swapped for another Choice item\nvia trick or switcheroo.",
    "short_effect": "Held: Increases Attack by 50%, but restricts the holder to only one move.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 198,
    "name": "kings-rock",
    "category": "held-items",
    "cost": 5000,
    "effect": "Held in battle\n:   Holder’s damaging moves have a 10% chance to make their target flinch.  This chance applies independently to each hit of a multi-hit move.\n\n    This item’s chance is rolled independently of any other move effects;\ne.g., a move with a 30% chance to flinch normally will have a 37% total chance to flinch when used with this item, because 3% of the time, both effects activate.\n\nHeld by poliwhirl or slowbro\n:   Holder evolves into politoed or slowking, respectively, when traded.",
    "short_effect": "Held: Damaging moves gain a 10% chance to make their target flinch. Traded on a Poliwhirl: Holder evolves into Politoed. Traded on a Slowpoke: Holder evolves into Slowking.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 30,
    "fling_effect": "flinch"
  },
  {
    "id": 199,
    "name": "silver-powder",
    "category": "type-enhancement",
    "cost": 1000,
    "effect": "Held in battle\n:   Holder’s bug-type moves have 1.2× their power.\n",
    "short_effect": "Held: Bug-Type moves from holder do 20% more damage.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 200,
    "name": "amulet-coin",
    "category": "training",
    "cost": 10000,
    "effect": "Held\n:   If the holder participated in a trainer battle, the trainer earns twice the usual prize money.  This effect applies even if the holder fainted.\n\n    This effect does not stack with any other similar effect.",
    "short_effect": "Held: Doubles the money earned from a battle. Does not stack with Luck Incense.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 201,
    "name": "cleanse-tag",
    "category": "training",
    "cost": 5000,
    "effect": "Held by lead Pokémon: Prevents wild battles with Pokémon that are lower level than the holder.",
    "short_effect": "Prevents wild encounters of level lower than your party’s lead Pokémon.",
    "attributes": [
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 202,
    "name": "soul-dew",
    "category": "species-specific",
    "cost": 0,
    "effect": "Held by Latias or Latios: Increases the holder’s Special Attack and Special Defense by 50%.",
    "short_effect": "Raises Latias and Latios’s Special Attack and Special Defense by 50%.",
    "attributes": [
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 203,
    "name": "deep-sea-tooth",
    "category": "species-specific",
    "cost": 2000,
    "effect": "Held by Clamperl: Doubles the holder’s Special Attack.  Evolves the holder into Huntail when traded.",
    "short_effect": "Doubles Clamperl’s Special Attack. Traded on a Clamperl: Holder evolves into Huntail.",
    "attributes": [
      "holdable"
    ],
    "fling_power": 90,
    "fling_effect": null
  },
  {
    "id": 204,
    "name": "deep-sea-scale",
    "category": "species-specific",
    "cost": 2000,
    "effect": "Held by Clamperl: Doubles the holder’s Special Defense.  Evolves the holder into Gorebyss when traded.",
    "short_effect": "Doubles Clamperl’s Special Defense. Traded on a Clamperl: Holder evolves into Gorebyss.",
    "attributes": [
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 205,
    "name": "smoke-ball",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held: In wild battles, attempts to run away on the holder’s turn will always succeed.",
    "short_effect": "Held: Allows the Holder to escape from any wild battle.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 206,
    "name": "everstone",
    "category": "training",
    "cost": 3000,
    "effect": "Held: Prevents the holder from evolving naturally.  Evolution initiated by the trainer (Stones, etc) will still work.",
    "short_effect": "Held: Prevents level-based evolution from occuring.",
    "attributes": [
      "holdable",
      "holdable-active",
      "underground"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 207,
    "name": "focus-band",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held: If the holder is attacked for regular damage that would faint it, this item has a 10% chance to prevent the holder’s HP from lowering below 1.",
    "short_effect": "Held: Holder has 10% chance to survive attacks or self-inflicted damage at 1 HP.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 208,
    "name": "lucky-egg",
    "category": "training",
    "cost": 10000,
    "effect": "Held: Increases any Exp the holder gains by 50%.",
    "short_effect": "Held: Increases EXP earned in battle by 50%.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 209,
    "name": "scope-lens",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held: Raises the holder’s critical hit counter by 1.",
    "short_effect": "Held: Raises the holder’s critical hit ratio by one stage.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 210,
    "name": "metal-coat",
    "category": "type-enhancement",
    "cost": 2000,
    "effect": "Held: Increases the power of the holder’s Steel moves by 20%.\nHeld by Onix or Scyther: Evolves the holder into Steelix or Scizor when traded, respectively.",
    "short_effect": "Held: Steel-Type moves from holder do 20% more damage.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 211,
    "name": "leftovers",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held: Heals the holder by 1/16 its max HP at the end of each turn.",
    "short_effect": "Held: Restores 1/16 (6.25%) holder’s max HP at the end of each turn.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 212,
    "name": "dragon-scale",
    "category": "evolution",
    "cost": 2000,
    "effect": "Held by Seadra: Evolves the holder into Kingdra when traded.",
    "short_effect": "Traded on a Seadra: Holder evolves into Kingdra.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 213,
    "name": "light-ball",
    "category": "species-specific",
    "cost": 1000,
    "effect": "Held by Pikachu: Doubles the holder’s initial Attack and Special Attack.",
    "short_effect": "Doubles Pikachu’s Attack and Special Attack. Breed on Pikachu or Raichu: Pichu Egg will have Volt Tackle.",
    "attributes": [
      "holdable"
    ],
    "fling_power": 30,
    "fling_effect": "paralyze"
  },
  {
    "id": 214,
    "name": "soft-sand",
    "category": "type-enhancement",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Ground moves by 20%.",
    "short_effect": "Held: Ground-Type moves from holder do 20% more damage.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 215,
    "name": "hard-stone",
    "category": "type-enhancement",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Rock moves by 20%.",
    "short_effect": "Held: Rock-Type moves from holder do 20% more damage.",
    "attributes": [
      "holdable",
      "holdable-active",
      "underground"
    ],
    "fling_power": 100,
    "fling_effect": null
  },
  {
    "id": 216,
    "name": "miracle-seed",
    "category": "type-enhancement",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Grass moves by 20%.",
    "short_effect": "Held: Grass-Type moves from holder do 20% more damage.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 217,
    "name": "black-glasses",
    "category": "type-enhancement",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Dark moves by 20%.",
    "short_effect": "Held: Dark-Type moves from holder do 20% more damage.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 218,
    "name": "black-belt",
    "category": "type-enhancement",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Fighting moves by 20%.",
    "short_effect": "Held: Fighting-Type moves from holder do 20% more damage.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 219,
    "name": "magnet",
    "category": "type-enhancement",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Electric moves by 20%.",
    "short_effect": "Held: Electric-Type moves from holder do 20% more damage.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 220,
    "name": "mystic-water",
    "category": "type-enhancement",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Water moves by 20%.",
    "short_effect": "Held: Water-Type moves from holder do 20% more damage.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 221,
    "name": "sharp-beak",
    "category": "type-enhancement",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Flying moves by 20%.",
    "short_effect": "Held: Flying-Type moves from holder do 20% more damage.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 50,
    "fling_effect": null
  },
  {
    "id": 222,
    "name": "poison-barb",
    "category": "type-enhancement",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Poison moves by 20%.",
    "short_effect": "Held: Poison-Type moves from holder do 20% more damage.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 70,
    "fling_effect": "poison"
  },
  {
    "id": 223,
    "name": "never-melt-ice",
    "category": "type-enhancement",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Ice moves by 20%.",
    "short_effect": "Held: Ice-Type moves from holder do 20% more damage.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 224,
    "name": "spell-tag",
    "category": "type-enhancement",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Ghost moves by 20%.",
    "short_effect": "Held: Ghost-Type moves from holder do 20% more damage.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 225,
    "name": "twisted-spoon",
    "category": "type-enhancement",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Psychic moves by 20%.",
    "short_effect": "Held: Psychic-Type moves from holder do 20% more damage.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 226,
    "name": "charcoal",
    "category": "type-enhancement",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Fire moves by 20%.",
    "short_effect": "Held: Fire-Type moves from holder do 20% more damage.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 227,
    "name": "dragon-fang",
    "category": "type-enhancement",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Dragon moves by 20%.",
    "short_effect": "Held: Dragon-Type moves from holder do 20% more damage.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 70,
    "fling_effect": null
  },
  {
    "id": 228,
    "name": "silk-scarf",
    "category": "type-enhancement",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Normal moves by 20%.",
    "short_effect": "Held: Normal-Type moves from holder do 20% more damage.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 229,
    "name": "up-grade",
    "category": "evolution",
    "cost": 2000,
    "effect": "Held by Porygon: Evolves the holder into Porygon2 when traded.",
    "short_effect": "Traded on a Porygon: Holder evolves into Porygon2.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 230,
    "name": "shell-bell",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held: Heals the holder by 1/8 of any damage it inflicts.",
    "short_effect": "Held: Holder receives 1/8 of the damage it deals when attacking.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 231,
    "name": "sea-incense",
    "category": "type-enhancement",
    "cost": 2000,
    "effect": "Held: Increases the power of the holder’s Water moves by 20%.",
    "short_effect": "Held: Water-Type moves from holder do 20% more damage. Breeding: Marill or Azumarill beget an Azurill Egg.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 232,
    "name": "lax-incense",
    "category": "held-items",
    "cost": 5000,
    "effect": "Held: Increases the holder’s Evasion by 5%.",
    "short_effect": "Held: Holder’s evasion is increased by 5%. Breeding: Wobbuffet begets a Wynaut Egg.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 233,
    "name": "lucky-punch",
    "category": "species-specific",
    "cost": 1000,
    "effect": "Held by Chansey: Raises the holder’s critical hit counter by 2.",
    "short_effect": "Raises Chansey’s critical hit ratio by two stages.",
    "attributes": [
      "holdable"
    ],
    "fling_power": 40,
    "fling_effect": null
  },
  {
    "id": 234,
    "name": "metal-powder",
    "category": "species-specific",
    "cost": 1000,
    "effect": "Held by Ditto: Increases the holder’s initial Defense and Special Defense by 50%.",
    "short_effect": "Raises Ditto’s Defense and Special Defense by 50%. The boost is lost after transforming.",
    "attributes": [
      "holdable"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 235,
    "name": "thick-club",
    "category": "species-specific",
    "cost": 1000,
    "effect": "Held by Cubone or Marowak: Doubles the holder’s Attack.",
    "short_effect": "Doubles Cubone or Marowak’s Attack.",
    "attributes": [
      "holdable"
    ],
    "fling_power": 90,
    "fling_effect": null
  },
  {
    "id": 236,
    "name": "stick",
    "category": "species-specific",
    "cost": 1000,
    "effect": "Held by Farfetch’d: Raises the holder’s critical hit counter by 2.",
    "short_effect": "Raises Farfetch’d’s critical hit ratio by two stages.",
    "attributes": [
      "holdable"
    ],
    "fling_power": 60,
    "fling_effect": null
  },
  {
    "id": 237,
    "name": "red-scarf",
    "category": "scarves",
    "cost": 100,
    "effect": "Held: Increases the holder’s Coolness during a Super Contest’s Visual Competition.",
    "short_effect": "Raises the holder’s Coolness while in a contest.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 238,
    "name": "blue-scarf",
    "category": "scarves",
    "cost": 100,
    "effect": "Held: Increases the holder’s Beauty during a Super Contest’s Visual Competition.",
    "short_effect": "Raises the holder’s Beauty while in a contest.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 239,
    "name": "pink-scarf",
    "category": "scarves",
    "cost": 100,
    "effect": "Held: Increases the holder’s Cuteness during a Super Contest’s Visual Competition.",
    "short_effect": "Raises the holder’s Cuteness while in a contest.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 240,
    "name": "green-scarf",
    "category": "scarves",
    "cost": 100,
    "effect": "Held: Increases the holder’s Smartness during a Super Contest’s Visual Competition.",
    "short_effect": "Raises the holder’s Smartness while in a contest.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 241,
    "name": "yellow-scarf",
    "category": "scarves",
    "cost": 100,
    "effect": "Held: Increases the holder’s Toughness during a Super Contest’s Visual Competition.",
    "short_effect": "Raises the holder’s Toughness while in a contest.",
    "attributes": [
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 242,
    "name": "wide-lens",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held: Increases the accuracy of any move the holder uses by 10% (multiplied; i.e. 70% accuracy is increased to 77%).",
    "short_effect": "Held: Provides a 1/10 (10%) boost in accuracy to the holder.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 243,
    "name": "muscle-band",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held: Increases the power of the holder’s physical moves by 10%.",
    "short_effect": "Held: Boosts the damage of physical moves used by the holder by 10%.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 244,
    "name": "wise-glasses",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held: Increases the power of the holder’s special moves by 10%.",
    "short_effect": "Held: Boosts the damage of special moves used by the holder by 1/10 (10%).",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 245,
    "name": "expert-belt",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held: When the holder hits with a super-effective move, its power is raised by 20%.",
    "short_effect": "Held: Holder’s Super Effective moves do 20% extra damage.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 246,
    "name": "light-clay",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held: The holder’s Reflect and Light Screen will create effects lasting for eight turns rather than five.  As this item affects the move rather than the barrier itself, the effect is not lost if the holder leaves battle or drops this item.",
    "short_effect": "Held: Light Screen and Reflect used by the holder last 8 rounds instead of 5.",
    "attributes": [
      "holdable",
      "holdable-active",
      "underground"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 247,
    "name": "life-orb",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held: Damage from the holder’s moves is increased by 30%.  On each turn the holder uses a damage-inflicting move, it takes 10% its max HP in damage.",
    "short_effect": "Held: Holder’s moves inflict 30% extra damage, but cost 10% max HP.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 248,
    "name": "power-herb",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held: Whenever the holder uses a move that requires a turn to charge first (Bounce, Dig, Dive, Fly, Razor Wind, Skull Bash, Sky Attack, or Solarbeam), this item is consumed and the charge is skipped.  Skull Bash still provides a Defense boost.",
    "short_effect": "Held: Both turns of a two-turn charge move happen at once. Consumed upon use.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 249,
    "name": "toxic-orb",
    "category": "bad-held-items",
    "cost": 4000,
    "effect": "Held: Badly poisons the holder at the end of each turn.",
    "short_effect": "Held: Inflicts Toxic on the holder at the end of the turn. Activates after Poison damage would occur.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 30,
    "fling_effect": "badly-poison"
  },
  {
    "id": 250,
    "name": "flame-orb",
    "category": "bad-held-items",
    "cost": 4000,
    "effect": "Held: Burns the holder at the end of each turn.",
    "short_effect": "Held: Inflicts Burn on the holder at the end of the turn. Activates after Burn damage would occur.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 30,
    "fling_effect": "burn"
  },
  {
    "id": 251,
    "name": "quick-powder",
    "category": "species-specific",
    "cost": 1000,
    "effect": "Held by Ditto: Doubles the holder’s initial Speed.",
    "short_effect": "Doubles Ditto’s Speed when held. The boost is lost after transforming.",
    "attributes": [
      "holdable"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 252,
    "name": "focus-sash",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held: If the holder has full HP and is attacked for regular damage that would faint it, this item is consumed and prevents the holder’s HP from lowering below 1.  This effect works against multi-hit attacks, but does not work against the effects of Doom Desire or Future Sight.",
    "short_effect": "Held: Holder survives any single-hit attack at 1 HP if at max HP, then the item is consumed.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 253,
    "name": "zoom-lens",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held: Raises the holder’s Accuracy by 20% when it goes last.\nIngame description is incorrect.",
    "short_effect": "Held: Provides a 1/5 (20%) boost in accuracy if the holder moves after the target.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 254,
    "name": "metronome",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held: Each time the holder uses the same move consecutively, its power is increased by another 10% of its original, to a maximum of 100%.",
    "short_effect": "Held: Consectutive uses of the same attack have a cumulative damage boost of 10%. Maximum 100% boost.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 255,
    "name": "iron-ball",
    "category": "bad-held-items",
    "cost": 4000,
    "effect": "Held: Decreases the holder’s Speed by 50%.  If the holder is Flying or has Levitate, it takes regular damage from Ground attacks and is suspectible to Spikes and Toxic Spikes.",
    "short_effect": "Held: Holder’s Speed is halved. Negates all Ground-type immunities, and makes Flying-types take neutral damage from Ground-type moves. Arena Trap. Spikes, and Toxic Spikes affect the holder.",
    "attributes": [
      "holdable",
      "holdable-active",
      "underground"
    ],
    "fling_power": 130,
    "fling_effect": null
  },
  {
    "id": 256,
    "name": "lagging-tail",
    "category": "bad-held-items",
    "cost": 4000,
    "effect": "Held: The holder will go last within its move’s priority bracket, regardless of Speed.  If multiple Pokémon within the same priority bracket are subject to this effect, the slower Pokémon will go first.  The holder will move after Pokémon with Stall.  If the holder has Stall, Stall is ignored.  This item ignores Trick Room.",
    "short_effect": "Held: Holder moves last in its priority bracket.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 257,
    "name": "destiny-knot",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held: When the holder becomes Attracted, the Pokémon it is Attracted to becomes Attracted back.",
    "short_effect": "Held: Infatuates opposing Pokémon when holder is inflicted with infatuation.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 258,
    "name": "black-sludge",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held: If the holder is Poison-type, restores 1/16 max HP at the end of each turn.  Otherwise, damages the holder by 1/16 its max HP at the end of each turn.",
    "short_effect": "Held: Poison-type holder recovers 1/16 (6.25%) max HP each turn. Non-Poison-Types take 1/8 (12.5%) max HP damage.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 259,
    "name": "icy-rock",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held: The holder’s Hail will create a hailstorm lasting for eight turns rather than five.  As this item affects the move rather than the weather itself, the effect is not lost if the holder leaves battle or drops this item.",
    "short_effect": "Held: Hail by the holder lasts 8 rounds instead of 5.",
    "attributes": [
      "holdable",
      "holdable-active",
      "underground"
    ],
    "fling_power": 40,
    "fling_effect": null
  },
  {
    "id": 260,
    "name": "smooth-rock",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held: The holder’s Sandstorm will create a sandstorm lasting for eight turns rather than five.  As this item affects the move rather than the weather itself, the effect is not lost if the holder leaves battle or drops this item.",
    "short_effect": "Held: Sandstorm by the holder lasts 8 rounds instead of 5.",
    "attributes": [
      "holdable",
      "holdable-active",
      "underground"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 261,
    "name": "heat-rock",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held: The holder’s Sunny Day will create sunshine lasting for eight turns rather than five.  As this item affects the move rather than the weather itself, the effect is not lost if the holder leaves battle or drops this item.",
    "short_effect": "Held: Sunny Day by the holder lasts 8 rounds instead of 5.",
    "attributes": [
      "holdable",
      "holdable-active",
      "underground"
    ],
    "fling_power": 60,
    "fling_effect": null
  },
  {
    "id": 262,
    "name": "damp-rock",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held: The holder’s Rain Dance will create rain lasting for eight turns rather than five.  As this item affects the move rather than the weather itself, the effect is not lost if the holder leaves battle or drops this item.",
    "short_effect": "Held: Rain Dance by the holder lasts 8 rounds instead of 5.",
    "attributes": [
      "holdable",
      "holdable-active",
      "underground"
    ],
    "fling_power": 60,
    "fling_effect": null
  },
  {
    "id": 263,
    "name": "grip-claw",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held: Increases the duration of the holder’s multiturn (2-5 turn) moves by three turns.",
    "short_effect": "Held: Holder’s multi-turn trapping moves last 5 turns.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 90,
    "fling_effect": null
  },
  {
    "id": 264,
    "name": "choice-scarf",
    "category": "choice",
    "cost": 4000,
    "effect": "Held: Increases the holder’s Speed by 50%, but restricts it to the first move it uses until it leaves battle or loses this item.  If this item is swapped for another Choice item via Trick or Switcheroo, the holder’s restriction is still lifted, but it will again be restricted to the next move it uses.\n(Quirk: If the holder is switched in by U-Turn and it also knows U-Turn, U-Turn becomes its restricted move.)",
    "short_effect": "Held: Increases Speed by 50%, but restricts the holder to only one move.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 265,
    "name": "sticky-barb",
    "category": "bad-held-items",
    "cost": 4000,
    "effect": "Held: Damaged the holder for 1/8 its max HP.  When the holder is struck by a contact move, damages the attacker for 1/8 its max HP; if the attacker is not holding an item, it will take this item.",
    "short_effect": "Held: Holder takes 1/8 (12.5%) its max HP at the end of each turn. When the holder is hit by a contact move, the attacking Pokémon takes 1/8 its max HP in damage and receive the item if not holding one.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 80,
    "fling_effect": null
  },
  {
    "id": 266,
    "name": "power-bracer",
    "category": "effort-training",
    "cost": 3000,
    "effect": "Held: Decreases the holder’s Speed by 50%.  Whenever the holder gains Attack effort from battle, increases that effort by 4; this applies before the PokéRUS doubling effect.",
    "short_effect": "Held: Holder gains 4 Attack effort values, but has halved Speed in battle.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 70,
    "fling_effect": null
  },
  {
    "id": 267,
    "name": "power-belt",
    "category": "effort-training",
    "cost": 3000,
    "effect": "Held: Decreases the holder’s Speed by 50%.  Whenever the holder gains Defense effort from battle, increases that effort by 4; this applies before the PokéRUS doubling effect.",
    "short_effect": "Held: Holder gains 4 Defense effort values, but has halved Speed in battle.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 70,
    "fling_effect": null
  },
  {
    "id": 268,
    "name": "power-lens",
    "category": "effort-training",
    "cost": 3000,
    "effect": "Held: Decreases the holder’s Speed by 50%.  Whenever the holder gains Special Attack effort from battle, increases that effort by 4; this applies before the PokéRUS doubling effect.",
    "short_effect": "Held: Holder gains 4 Special Attack effort values, but has halved Speed in battle.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 70,
    "fling_effect": null
  },
  {
    "id": 269,
    "name": "power-band",
    "category": "effort-training",
    "cost": 3000,
    "effect": "Held: Decreases the holder’s Speed by 50%.  Whenever the holder gains Special Defense effort from battle, increases that effort by 4; this applies before the PokéRUS doubling effect.",
    "short_effect": "Held: Holder gains 4 Special Defense effort values, but has halved Speed in battle.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 70,
    "fling_effect": null
  },
  {
    "id": 270,
    "name": "power-anklet",
    "category": "effort-training",
    "cost": 3000,
    "effect": "Held: Decreases the holder’s Speed by 50%.  Whenever the holder gains Speed effort from battle, increases that effort by 4; this applies before the PokéRUS doubling effect.",
    "short_effect": "Held: Holder gains 4 Speed effort values, but has halved Speed in battle.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 70,
    "fling_effect": null
  },
  {
    "id": 271,
    "name": "power-weight",
    "category": "effort-training",
    "cost": 3000,
    "effect": "Held: Decreases the holder’s Speed by 50%.  Whenever the holder gains HP effort from battle, increases that effort by 4; this applies before the PokéRUS doubling effect.",
    "short_effect": "Held: Holder gains 4 HP effort values, but has halved Speed in battle.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 70,
    "fling_effect": null
  },
  {
    "id": 272,
    "name": "shed-shell",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held: The holder is unaffected by any moves or abilities that would prevent it from actively leaving battle.",
    "short_effect": "Held: Holder can bypass all trapping effects and switch out. Multi-turn moves still cannot be switched out of.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 273,
    "name": "big-root",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held: HP restored from Absorb, Aqua Ring, Drain Punch, Dream Eater, Giga Drain, Ingrain, Leech Life, Leech Seed, and Mega Drain is increased by 30%.  Damage inflicted is not affected.",
    "short_effect": "Held: Increases HP recovered from draining moves, Ingrain, and Aqua Ring by 3/10 (30%).",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 274,
    "name": "choice-specs",
    "category": "choice",
    "cost": 4000,
    "effect": "Held: Increases the holder’s Special Attack by 50%, but restricts it to the first move it uses until it leaves battle or loses this item.  If this item is swapped for another Choice item via Trick or Switcheroo, the holder’s restriction is still lifted, but it will again be restricted to the next move it uses.\n(Quirk: If the holder is switched in by U-Turn and it also knows U-Turn, U-Turn becomes its restricted move.)",
    "short_effect": "Held: Increases Special Attack by 50%, but restricts the holder to only one move.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 275,
    "name": "flame-plate",
    "category": "plates",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Fire moves by 20%.\nHeld by a Multitype Pokémon: Holder’s type becomes Fire.",
    "short_effect": "Held: Fire-Type moves from holder do 20% more damage. Changes Arceus’s and Judgment’s type to Fire.",
    "attributes": [
      "holdable",
      "holdable-active",
      "underground"
    ],
    "fling_power": 90,
    "fling_effect": null
  },
  {
    "id": 276,
    "name": "splash-plate",
    "category": "plates",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Water moves by 20%.\nHeld by a Multitype Pokémon: Holder’s type becomes Water.",
    "short_effect": "Held: Water-Type moves from holder do 20% more damage. Changes Arceus’s and Judgment’s type to Water.",
    "attributes": [
      "holdable",
      "holdable-active",
      "underground"
    ],
    "fling_power": 90,
    "fling_effect": null
  },
  {
    "id": 277,
    "name": "zap-plate",
    "category": "plates",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Electric moves by 20%.\nHeld by a Multitype Pokémon: Holder’s type becomes Electric.",
    "short_effect": "Held: Electric-Type moves from holder do 20% more damage. Changes Arceus’s and Judgment’s type to Electric.",
    "attributes": [
      "holdable",
      "holdable-active",
      "underground"
    ],
    "fling_power": 90,
    "fling_effect": null
  },
  {
    "id": 278,
    "name": "meadow-plate",
    "category": "plates",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Grass moves by 20%.\nHeld by a Multitype Pokémon: Holder’s type becomes Grass.",
    "short_effect": "Held: Grass-Type moves from holder do 20% more damage. Changes Arceus’s and Judgment’s type to Grass.",
    "attributes": [
      "holdable",
      "holdable-active",
      "underground"
    ],
    "fling_power": 90,
    "fling_effect": null
  },
  {
    "id": 279,
    "name": "icicle-plate",
    "category": "plates",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Ice moves by 20%.\nHeld by a Multitype Pokémon: Holder’s type becomes Ice.",
    "short_effect": "Held: Ice-Type moves from holder do 20% more damage. Changes Arceus’s and Judgment’s type to Ice.",
    "attributes": [
      "holdable",
      "holdable-active",
      "underground"
    ],
    "fling_power": 90,
    "fling_effect": null
  },
  {
    "id": 280,
    "name": "fist-plate",
    "category": "plates",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Fighting moves by 20%.\nHeld by a Multitype Pokémon: Holder’s type becomes Fighting.",
    "short_effect": "Held: Fighting-Type moves from holder do 20% more damage. Changes Arceus’s and Judgment’s type to Fighting.",
    "attributes": [
      "holdable",
      "holdable-active",
      "underground"
    ],
    "fling_power": 90,
    "fling_effect": null
  },
  {
    "id": 281,
    "name": "toxic-plate",
    "category": "plates",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Poison moves by 20%.\nHeld by a Multitype Pokémon: Holder’s type becomes Poison.",
    "short_effect": "Held: Poison-Type moves from holder do 20% more damage. Changes Arceus’s and Judgment’s type to Poison.",
    "attributes": [
      "holdable",
      "holdable-active",
      "underground"
    ],
    "fling_power": 90,
    "fling_effect": null
  },
  {
    "id": 282,
    "name": "earth-plate",
    "category": "plates",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Ground moves by 20%.\nHeld by a Multitype Pokémon: Holder’s type becomes Ground.",
    "short_effect": "Held: Ground-Type moves from holder do 20% more damage. Changes Arceus’s and Judgment’s type to Ground.",
    "attributes": [
      "holdable",
      "holdable-active",
      "underground"
    ],
    "fling_power": 90,
    "fling_effect": null
  },
  {
    "id": 283,
    "name": "sky-plate",
    "category": "plates",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Flying moves by 20%.\nHeld by a Multitype Pokémon: Holder’s type becomes Flying.",
    "short_effect": "Held: Flying-Type moves from holder do 20% more damage. Changes Arceus’s and Judgment’s type to Flying.",
    "attributes": [
      "holdable",
      "holdable-active",
      "underground"
    ],
    "fling_power": 90,
    "fling_effect": null
  },
  {
    "id": 284,
    "name": "mind-plate",
    "category": "plates",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Psychic moves by 20%.\nHeld by a Multitype Pokémon: Holder’s type becomes Psychic.",
    "short_effect": "Held: Psychic-Type moves from holder do 20% more damage. Changes Arceus’s and Judgment’s type to Psychic.",
    "attributes": [
      "holdable",
      "holdable-active",
      "underground"
    ],
    "fling_power": 90,
    "fling_effect": null
  },
  {
    "id": 285,
    "name": "insect-plate",
    "category": "plates",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Bug moves by 20%.\nHeld by a Multitype Pokémon: Holder’s type becomes Bug.",
    "short_effect": "Held: Bug-Type moves from holder do 20% more damage. Changes Arceus’s and Judgment’s type to Bug.",
    "attributes": [
      "holdable",
      "holdable-active",
      "underground"
    ],
    "fling_power": 90,
    "fling_effect": null
  },
  {
    "id": 286,
    "name": "stone-plate",
    "category": "plates",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Rock moves by 20%.\nHeld by a Multitype Pokémon: Holder’s type becomes Rock.",
    "short_effect": "Held: Rock-Type moves from holder do 20% more damage. Changes Arceus’s and Judgment’s type to Rock.",
    "attributes": [
      "holdable",
      "holdable-active",
      "underground"
    ],
    "fling_power": 90,
    "fling_effect": null
  },
  {
    "id": 287,
    "name": "spooky-plate",
    "category": "plates",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Ghost moves by 20%.\nHeld by a Multitype Pokémon: Holder’s type becomes Ghost.",
    "short_effect": "Held: Ghost-Type moves from holder do 20% more damage. Changes Arceus’s and Judgment’s type to Ghost.",
    "attributes": [
      "holdable",
      "holdable-active",
      "underground"
    ],
    "fling_power": 90,
    "fling_effect": null
  },
  {
    "id": 288,
    "name": "draco-plate",
    "category": "plates",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Dragon moves by 20%.\nHeld by a Multitype Pokémon: Holder’s type becomes Dragon.",
    "short_effect": "Held: Dragon-Type moves from holder do 20% more damage. Changes Arceus’s and Judgment’s type to Dragon.",
    "attributes": [
      "holdable",
      "holdable-active",
      "underground"
    ],
    "fling_power": 90,
    "fling_effect": null
  },
  {
    "id": 289,
    "name": "dread-plate",
    "category": "plates",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Dark moves by 20%.\nHeld by a Multitype Pokémon: Holder’s type becomes Dark.",
    "short_effect": "Held: Dark-Type moves from holder do 20% more damage. Changes Arceus’s and Judgment’s type to Dark.",
    "attributes": [
      "holdable",
      "holdable-active",
      "underground"
    ],
    "fling_power": 90,
    "fling_effect": null
  },
  {
    "id": 290,
    "name": "iron-plate",
    "category": "plates",
    "cost": 1000,
    "effect": "Held: Increases the power of the holder’s Steel moves by 20%.\nHeld by a Multitype Pokémon: Holder’s type becomes Steel.",
    "short_effect": "Held: Steel-Type moves from holder do 20% more damage. Changes Arceus’s and Judgment’s type to Steel.",
    "attributes": [
      "holdable",
      "holdable-active",
      "underground"
    ],
    "fling_power": 90,
    "fling_effect": null
  },
  {
    "id": 291,
    "name": "odd-incense",
    "category": "type-enhancement",
    "cost": 2000,
    "effect": "Held: Increases the power of the holder’s Psychic moves by 20%.",
    "short_effect": "Held: Psychic-Type moves from holder do 20% more damage. Breeding: Mr. Mime begets a Mime Jr. Egg.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 292,
    "name": "rock-incense",
    "category": "type-enhancement",
    "cost": 2000,
    "effect": "Held: Increases the power of the holder’s Rock moves by 20%.",
    "short_effect": "Held: Rock-Type moves from holder do 20% more damage. Breeding: Sudowoodo begets a Bonsly Egg.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 293,
    "name": "full-incense",
    "category": "bad-held-items",
    "cost": 5000,
    "effect": "Held: The holder will go last within its move’s priority bracket, regardless of Speed.  If multiple Pokémon within the same priority bracket are subject to this effect, the slower Pokémon will go first.  The holder will move after Pokémon with Stall.  If the holder has Stall, Stall is ignored.  This item ignores Trick Room.",
    "short_effect": "Held: Holder moves last in its priority bracket. Breeding: Snorlax begets a Munchlax Egg.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 294,
    "name": "wave-incense",
    "category": "type-enhancement",
    "cost": 2000,
    "effect": "Held: Increases the power of the holder’s Water moves by 20%.",
    "short_effect": "Held: Water-Type moves from holder do 20% more damage. Breeding: Mantine begets a Mantyke Egg.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 295,
    "name": "rose-incense",
    "category": "type-enhancement",
    "cost": 2000,
    "effect": "Held: Increases the power of the holder’s Grass moves by 20%.",
    "short_effect": "Held: Grass-Type moves from holder do 20% more damage. Breeding: Roselia or Roserade beget a Budew Egg.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 296,
    "name": "luck-incense",
    "category": "training",
    "cost": 11000,
    "effect": "Held: Doubles the money the trainer receives after an in-game trainer battle.  This effect cannot apply more than once to the same battle.",
    "short_effect": "Held: Doubles the money earned from a battle. Does not stack with Amulet Coin. Breeding: Chansey and Blissey beget a Happiny Egg.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 297,
    "name": "pure-incense",
    "category": "training",
    "cost": 6000,
    "effect": "Held by lead Pokémon: Prevents wild battles with Pokémon that are lower level than the holder.",
    "short_effect": "Prevents wild encounters of level lower than your party’s lead Pokémon. Breeding: Chimecho begets a Chingling Egg.",
    "attributes": [
      "holdable"
    ],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 298,
    "name": "protector",
    "category": "evolution",
    "cost": 2000,
    "effect": "Held by Rhydon: Evolves the holder into Rhyperior when traded.",
    "short_effect": "Traded on a Rhydon: Holder evolves into Rhyperior.",
    "attributes": [],
    "fling_power": 80,
    "fling_effect": null
  },
  {
    "id": 299,
    "name": "electirizer",
    "category": "evolution",
    "cost": 2000,
    "effect": "Held by Electabuzz: Evolves the holder into Electivire when traded.",
    "short_effect": "Traded on an Electabuzz: Holder evolves into Electivire.",
    "attributes": [],
    "fling_power": 80,
    "fling_effect": null
  },
  {
    "id": 300,
    "name": "magmarizer",
    "category": "evolution",
    "cost": 2000,
    "effect": "Held by Magmar: Evolves the holder into Magmortar when traded.",
    "short_effect": "Traded on a Magmar: Holder evolves into Magmortar.",
    "attributes": [],
    "fling_power": 80,
    "fling_effect": null
  },
  {
    "id": 301,
    "name": "dubious-disc",
    "category": "evolution",
    "cost": 2000,
    "effect": "Held by Porygon2: Evolves the holder into Porygon-Z when traded.",
    "short_effect": "Traded on a Porygon2: Holder evolves into Porygon-Z.",
    "attributes": [],
    "fling_power": 50,
    "fling_effect": null
  },
  {
    "id": 302,
    "name": "reaper-cloth",
    "category": "evolution",
    "cost": 2000,
    "effect": "Held by Dusclops: Evolves the holder into Dusknoir when traded.",
    "short_effect": "Traded on a Dusclops: Holder evolves into Dusknoir.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 303,
    "name": "razor-claw",
    "category": "held-items",
    "cost": 5000,
    "effect": "Held: Raises the holder’s critical hit counter by 1.\nHeld by Sneasel: Evolves the holder into Weavile when it levels up during the night.",
    "short_effect": "Held: Raises the holder’s critical hit ratio by one stage. Held by a Sneasel while levelling up at night: Holder evolves into Weavile.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 80,
    "fling_effect": null
  },
  {
    "id": 304,
    "name": "razor-fang",
    "category": "held-items",
    "cost": 5000,
    "effect": "Held: When the holder attacks with most damaging moves, provides an extra 11.7% (30/256) chance for the target to flinch.\nHeld by Gligar: Evolves the holder into Gliscor when it levels up.",
    "short_effect": "Held: Damaging moves gain a 10% chance to make their target flinch. Held by a Gligar while levelling up: Holder evolves into Gliscor.",
    "attributes": [
      "holdable",
      "holdable-active"
    ],
    "fling_power": 30,
    "fling_effect": "flinch"
  },
  {
    "id": 305,
    "name": "tm01",
    "category": "all-machines",
    "cost": 40000,
    "effect": "Teaches Focus Punch to a compatible Pokémon.",
    "short_effect": "Teaches Hone Claws to a compatible Pokémon. (Gen IV & III: Focus Punch Gen II: DynamicPunch Gen I: Mega Punch)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 306,
    "name": "tm02",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Dragon Claw to a compatible Pokémon.",
    "short_effect": "Teaches Dragon Claw to a compatible Pokémon. (Gen II: Headbutt Gen I: Razor Wind)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 307,
    "name": "tm03",
    "category": "all-machines",
    "cost": 50000,
    "effect": "Teaches Water Pulse to a compatible Pokémon.",
    "short_effect": "Teaches Psyshock to a compatible Pokémon. (Gen IV & III: Water Pulse Gen II: Curse Gen I: Swords Dance)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 308,
    "name": "tm04",
    "category": "all-machines",
    "cost": 50000,
    "effect": "Teaches Calm Mind to a compatible Pokémon.",
    "short_effect": "Teaches Calm Mind to a compatible Pokémon. (Gen II: Rollout Gen I: Whirlwind)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 309,
    "name": "tm05",
    "category": "all-machines",
    "cost": 50000,
    "effect": "Teaches Roar to a compatible Pokémon.",
    "short_effect": "Teaches Roar to a compatible Pokémon. (Gen I: Mega Kick)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 310,
    "name": "tm06",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Toxic to a compatible Pokémon.",
    "short_effect": "Teaches Toxic to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 311,
    "name": "tm07",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Hail to a compatible Pokémon.",
    "short_effect": "Teaches Hail to a compatible Pokémon. (Gen II: Zap Cannon Gen I: Horn Drill)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 312,
    "name": "tm08",
    "category": "all-machines",
    "cost": 50000,
    "effect": "Teaches Bulk Up to a compatible Pokémon.",
    "short_effect": "Teaches Bulk Up to a compatible Pokémon. (Gen II: Rock Smash Gen I: Body Slam)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 313,
    "name": "tm09",
    "category": "all-machines",
    "cost": 50000,
    "effect": "Teaches Bullet Seed to a compatible Pokémon.",
    "short_effect": "Teaches Venoshock to a compatible Pokémon. (Gen IV & III: Bullet Seed Gen II: Psych Up Gen I: Take Down)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 314,
    "name": "tm10",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Hidden Power to a compatible Pokémon.",
    "short_effect": "Teaches Hidden Power to a compatible Pokémon. (Gen I: Double-Edge)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 315,
    "name": "tm11",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Sunny Day to a compatible Pokémon.",
    "short_effect": "Teaches Sunny Day to a compatible Pokémon. (Gen I: BubbleBeam)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 316,
    "name": "tm12",
    "category": "all-machines",
    "cost": 50000,
    "effect": "Teaches Taunt to a compatible Pokémon.",
    "short_effect": "Teaches Taunt to a compatible Pokémon. (Gen II: Sweet Scent Gen I: Water Gun)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 317,
    "name": "tm13",
    "category": "all-machines",
    "cost": 10000,
    "effect": "Teaches Ice Beam to a compatible Pokémon.",
    "short_effect": "Teaches Ice Beam to a compatible Pokémon. (Gen II: Snore)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 318,
    "name": "tm14",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Blizzard to a compatible Pokémon.",
    "short_effect": "Teaches Blizzard to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 319,
    "name": "tm15",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Hyper Beam to a compatible Pokémon.",
    "short_effect": "Teaches Hyper Beam to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 320,
    "name": "tm16",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Light Screen to a compatible Pokémon.",
    "short_effect": "Teaches Light Screen to a compatible Pokémon. (Gen II: Icy Wind Gen I: Pay Day)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 321,
    "name": "tm17",
    "category": "all-machines",
    "cost": 10000,
    "effect": "Teaches Protect to a compatible Pokémon.",
    "short_effect": "Teaches Protect to a compatible Pokémon. (Gen I: Submission)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 322,
    "name": "tm18",
    "category": "all-machines",
    "cost": 10000,
    "effect": "Teaches Rain Dance to a compatible Pokémon.",
    "short_effect": "Teaches Rain Dance to a compatible Pokémon. (Gen I: Counter)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 323,
    "name": "tm19",
    "category": "all-machines",
    "cost": 10000,
    "effect": "Teaches Giga Drain to a compatible Pokémon.",
    "short_effect": "Teaches Telekinesis to a compatible Pokémon. (Gen IV & III & II: Giga Drain Gen I: Seismic Toss)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 324,
    "name": "tm20",
    "category": "all-machines",
    "cost": 100000,
    "effect": "Teaches Safeguard to a compatible Pokémon.",
    "short_effect": "Teaches Safeguard to a compatible Pokémon. (Gen II: Endure Gen I: Rage)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 325,
    "name": "tm21",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Frustration to a compatible Pokémon.",
    "short_effect": "Teaches Frustration to a compatible Pokémon. (Gen I: Mega Drain)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 326,
    "name": "tm22",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches SolarBeam to a compatible Pokémon.",
    "short_effect": "Teaches SolarBeam to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 327,
    "name": "tm23",
    "category": "all-machines",
    "cost": 10000,
    "effect": "Teaches Iron Tail to a compatible Pokémon.",
    "short_effect": "Teaches Smack Down to a compatible Pokémon. (Gen IV & III & II: Iron Tail Gen I: Dragon Rage)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 328,
    "name": "tm24",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Thunderbolt to a compatible Pokémon.",
    "short_effect": "Teaches Thunderbolt to a compatible Pokémon. (Gen II: DragonBreath)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 329,
    "name": "tm25",
    "category": "all-machines",
    "cost": 10000,
    "effect": "Teaches Thunder to a compatible Pokémon.",
    "short_effect": "Teaches Thunder to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 330,
    "name": "tm26",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Earthquake to a compatible Pokémon.",
    "short_effect": "Teaches Earthquake to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 331,
    "name": "tm27",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Return to a compatible Pokémon.",
    "short_effect": "Teaches Return to a compatible Pokémon. (Gen I: Fissure)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 332,
    "name": "tm28",
    "category": "all-machines",
    "cost": 100000,
    "effect": "Teaches Dig to a compatible Pokémon.",
    "short_effect": "Teaches Dig to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 333,
    "name": "tm29",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Psychic to a compatible Pokémon.",
    "short_effect": "Teaches Psychic to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 334,
    "name": "tm30",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Shadow Ball to a compatible Pokémon.",
    "short_effect": "Teaches Shadow Ball to a compatible Pokémon. (Gen I: Teleport)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 335,
    "name": "tm31",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Brick Break to a compatible Pokémon.",
    "short_effect": "Teaches Brick Break to a compatible Pokémon. (Gen II: Mud-Slap Gen I: Mimic)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 336,
    "name": "tm32",
    "category": "all-machines",
    "cost": 10000,
    "effect": "Teaches Double Team to a compatible Pokémon.",
    "short_effect": "Teaches Double Team to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 337,
    "name": "tm33",
    "category": "all-machines",
    "cost": 10000,
    "effect": "Teaches Reflect to a compatible Pokémon.",
    "short_effect": "Teaches Reflect to a compatible Pokémon. (Gen II: Ice Punch)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 338,
    "name": "tm34",
    "category": "all-machines",
    "cost": 10000,
    "effect": "Teaches Shock Wave to a compatible Pokémon.",
    "short_effect": "Teaches Sludge Wave to a compatible Pokémon. (Gen IV & III: Shock Wave Gen II: Swagger Gen I: Bide)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 339,
    "name": "tm35",
    "category": "all-machines",
    "cost": 10000,
    "effect": "Teaches Flamethrower to a compatible Pokémon.",
    "short_effect": "Teaches Flamethrower to a compatible Pokémon. (Gen II: Sleep Talk Gen I: Metronome)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 340,
    "name": "tm36",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Sludge Bomb to a compatible Pokémon.",
    "short_effect": "Teaches Sludge Bomb to a compatible Pokémon. (Gen I: Selfdestruct)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 341,
    "name": "tm37",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Sandstorm to a compatible Pokémon.",
    "short_effect": "Teaches Sandstorm to a compatible Pokémon. (Gen I: Egg Bomb)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 342,
    "name": "tm38",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Fire Blast to a compatible Pokémon.",
    "short_effect": "Teaches Fire Blast to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 343,
    "name": "tm39",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Rock Tomb to a compatible Pokémon.",
    "short_effect": "Teaches Rock Tomb to a compatible Pokémon. (Gen II & I: Swift)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 344,
    "name": "tm40",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Aerial Ace to a compatible Pokémon.",
    "short_effect": "Teaches Aerial Ace to a compatible Pokémon. (Gen II: Defense Curl Gen I: Skull Bash)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 345,
    "name": "tm41",
    "category": "all-machines",
    "cost": 10000,
    "effect": "Teaches Torment to a compatible Pokémon.",
    "short_effect": "Teaches Torment to a compatible Pokémon. (Gen II: ThunderPunch Gen I: Softboiled)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 346,
    "name": "tm42",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Facade to a compatible Pokémon.",
    "short_effect": "Teaches Facade to a compatible Pokémon. (Gen II & I: Dream Eater)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 347,
    "name": "tm43",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Secret Power to a compatible Pokémon.",
    "short_effect": "Teaches Flame Charge to a compatible Pokémon. (Gen IV & III: Secret Power Gen II: Detect Gen I: Sky Attack)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 348,
    "name": "tm44",
    "category": "all-machines",
    "cost": 100000,
    "effect": "Teaches Rest to a compatible Pokémon.",
    "short_effect": "Teaches Rest to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 349,
    "name": "tm45",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Attract to a compatible Pokémon.",
    "short_effect": "Teaches Attract to a compatible Pokémon. (Gen I: Thunder Wave)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 350,
    "name": "tm46",
    "category": "all-machines",
    "cost": 30000,
    "effect": "Teaches Thief to a compatible Pokémon.",
    "short_effect": "Teaches Thief to a compatible Pokémon. (Gen I: Psywave)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 351,
    "name": "tm47",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Steel Wing to a compatible Pokémon.",
    "short_effect": "Teaches Low Sweep to a compatible Pokémon. (Gen IV & III & II: Steel Wing Gen I: Explosion)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 352,
    "name": "tm48",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Skill Swap to a compatible Pokémon.",
    "short_effect": "Teaches Round to a compatible Pokémon. (Gen IV & III: Skill Swap Gen II: Fire Punch Gen I: Rock Slide)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 353,
    "name": "tm49",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Snatch to a compatible Pokémon.",
    "short_effect": "Teaches Echoed Voice to a compatible Pokémon. (Gen IV & III: Snatch Gen II: Fury Cutter Gen I: Tri Attack)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 354,
    "name": "tm50",
    "category": "all-machines",
    "cost": 10000,
    "effect": "Teaches Overheat to a compatible Pokémon.",
    "short_effect": "Teaches Overheat to a compatible Pokémon. (Gen II: Nightmare Gen I: Substitute)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 355,
    "name": "tm51",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Roost to a compatible Pokémon.",
    "short_effect": "Teaches Ally Switch to a compatible Pokémon. (Gen IV: Roost)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 356,
    "name": "tm52",
    "category": "all-machines",
    "cost": 100000,
    "effect": "Teaches Focus Blast to a compatible Pokémon.",
    "short_effect": "Teaches Focus Blast to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 357,
    "name": "tm53",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Energy Ball to a compatible Pokémon.",
    "short_effect": "Teaches Energy Ball to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 358,
    "name": "tm54",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches False Swipe to a compatible Pokémon.",
    "short_effect": "Teaches False Swipe to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 359,
    "name": "tm55",
    "category": "all-machines",
    "cost": 10000,
    "effect": "Teaches Brine to a compatible Pokémon.",
    "short_effect": "Teaches Scald to a compatible Pokémon. (Gen IV: Brine)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 360,
    "name": "tm56",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Fling to a compatible Pokémon.",
    "short_effect": "Teaches Fling to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 361,
    "name": "tm57",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Charge Beam to a compatible Pokémon.",
    "short_effect": "Teaches Charge Beam to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 362,
    "name": "tm58",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Endure to a compatible Pokémon.",
    "short_effect": "Teaches Sky Drop to a compatible Pokémon. (Gen IV: Endure)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 363,
    "name": "tm59",
    "category": "all-machines",
    "cost": 100000,
    "effect": "Teaches Dragon Pulse to a compatible Pokémon.",
    "short_effect": "Teaches Incinerate to a compatible Pokémon. (Gen IV: Dragon Pulse)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 364,
    "name": "tm60",
    "category": "all-machines",
    "cost": 30000,
    "effect": "Teaches Drain Punch to a compatible Pokémon.",
    "short_effect": "Teaches Quash to a compatible Pokémon. (Gen IV: Drain Punch)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 365,
    "name": "tm61",
    "category": "all-machines",
    "cost": 30000,
    "effect": "Teaches Will-O-Wisp to a compatible Pokémon.",
    "short_effect": "Teaches Will-O-Wisp to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 366,
    "name": "tm62",
    "category": "all-machines",
    "cost": 30000,
    "effect": "Teaches Silver Wind to a compatible Pokémon.",
    "short_effect": "Teaches Acrobatics to a compatible Pokémon. (Gen IV: Silver Wind)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 367,
    "name": "tm63",
    "category": "all-machines",
    "cost": 50000,
    "effect": "Teaches Embargo to a compatible Pokémon.",
    "short_effect": "Teaches Embargo to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 368,
    "name": "tm64",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Explosion to a compatible Pokémon.",
    "short_effect": "Teaches Explosion to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 369,
    "name": "tm65",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Shadow Claw to a compatible Pokémon.",
    "short_effect": "Teaches Shadow Claw to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 370,
    "name": "tm66",
    "category": "all-machines",
    "cost": 30000,
    "effect": "Teaches Payback to a compatible Pokémon.",
    "short_effect": "Teaches Payback to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 371,
    "name": "tm67",
    "category": "all-machines",
    "cost": 30000,
    "effect": "Teaches Recycle to a compatible Pokémon.",
    "short_effect": "Teaches Retaliate to a compatible Pokémon. (Gen IV: Recycle)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 372,
    "name": "tm68",
    "category": "all-machines",
    "cost": 30000,
    "effect": "Teaches Giga Impact to a compatible Pokémon.",
    "short_effect": "Teaches Giga Impact to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 373,
    "name": "tm69",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Rock Polish to a compatible Pokémon.",
    "short_effect": "Teaches Rock Polish to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 374,
    "name": "tm70",
    "category": "all-machines",
    "cost": 50000,
    "effect": "Teaches Flash to a compatible Pokémon.",
    "short_effect": "Teaches Flash to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 375,
    "name": "tm71",
    "category": "all-machines",
    "cost": 50000,
    "effect": "Teaches Stone Edge to a compatible Pokémon.",
    "short_effect": "Teaches Stone Edge to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 376,
    "name": "tm72",
    "category": "all-machines",
    "cost": 50000,
    "effect": "Teaches Avalanche to a compatible Pokémon.",
    "short_effect": "Teaches Volt Switch to a compatible Pokémon. (Gen IV: Avalanche)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 377,
    "name": "tm73",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Thunder Wave to a compatible Pokémon.",
    "short_effect": "Teaches Thunder Wave to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 378,
    "name": "tm74",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Gyro Ball to a compatible Pokémon.",
    "short_effect": "Teaches Gyro Ball to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 379,
    "name": "tm75",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Swords Dance to a compatible Pokémon.",
    "short_effect": "Teaches Swords Dance to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 380,
    "name": "tm76",
    "category": "all-machines",
    "cost": 10000,
    "effect": "Teaches Stealth Rock to a compatible Pokémon.",
    "short_effect": "Teaches Struggle Bug to a compatible Pokémon. (Gen IV: Stealth Rock)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 381,
    "name": "tm77",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Psych Up to a compatible Pokémon.",
    "short_effect": "Teaches Psych Up to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 382,
    "name": "tm78",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Captivate to a compatible Pokémon.",
    "short_effect": "Teaches Bulldoze to a compatible Pokémon. (Gen IV: Captivate)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 383,
    "name": "tm79",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Dark Pulse to a compatible Pokémon.",
    "short_effect": "Teaches Frost Breath to a compatible Pokémon. (Gen IV: Dark Pulse)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 384,
    "name": "tm80",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Rock Slide to a compatible Pokémon.",
    "short_effect": "Teaches Rock Slide to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 385,
    "name": "tm81",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches X-Scissor to a compatible Pokémon.",
    "short_effect": "Teaches X-Scissor to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 386,
    "name": "tm82",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Sleep Talk to a compatible Pokémon.",
    "short_effect": "Teaches Dragon Tail to a compatible Pokémon. (Gen IV: Sleep Talk)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 387,
    "name": "tm83",
    "category": "all-machines",
    "cost": 100000,
    "effect": "Teaches Natural Gift to a compatible Pokémon.",
    "short_effect": "Teaches Work Up to a compatible Pokémon. (Gen IV: Natural Gift)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 388,
    "name": "tm84",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Poison Jab to a compatible Pokémon.",
    "short_effect": "Teaches Poison Jab to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 389,
    "name": "tm85",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Dream Eater to a compatible Pokémon.",
    "short_effect": "Teaches Dream Eater to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 390,
    "name": "tm86",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Grass Knot to a compatible Pokémon.",
    "short_effect": "Teaches Grass Knot to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 391,
    "name": "tm87",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches Swagger to a compatible Pokémon.",
    "short_effect": "Teaches Swagger to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 392,
    "name": "tm88",
    "category": "all-machines",
    "cost": 20000,
    "effect": "Teaches Pluck to a compatible Pokémon.",
    "short_effect": "Teaches Pluck to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 393,
    "name": "tm89",
    "category": "all-machines",
    "cost": 20000,
    "effect": "Teaches U-Turn to a compatible Pokémon.",
    "short_effect": "Teaches U-turn to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 394,
    "name": "tm90",
    "category": "all-machines",
    "cost": 20000,
    "effect": "Teaches Substitute to a compatible Pokémon.",
    "short_effect": "Teaches Substitute to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 395,
    "name": "tm91",
    "category": "all-machines",
    "cost": 20000,
    "effect": "Teaches Flash Cannon to a compatible Pokémon.",
    "short_effect": "Teaches Flash Cannon to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 396,
    "name": "tm92",
    "category": "all-machines",
    "cost": 100000,
    "effect": "Teaches Trick Room to a compatible Pokémon.",
    "short_effect": "Teaches Trick Room to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 397,
    "name": "hm01",
    "category": "all-machines",
    "cost": 0,
    "effect": "Teaches Cut to a compatible Pokémon.",
    "short_effect": "Teaches Cut to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 398,
    "name": "hm02",
    "category": "all-machines",
    "cost": 0,
    "effect": "Teaches Fly to a compatible Pokémon.",
    "short_effect": "Teaches Fly to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 399,
    "name": "hm03",
    "category": "all-machines",
    "cost": 0,
    "effect": "Teaches Surf to a compatible Pokémon.",
    "short_effect": "Teaches Surf to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 400,
    "name": "hm04",
    "category": "all-machines",
    "cost": 0,
    "effect": "Teaches Strength to a compatible Pokémon.",
    "short_effect": "Teaches Strength to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 401,
    "name": "hm05",
    "category": "all-machines",
    "cost": 0,
    "effect": "Teaches Defog to a compatible Pokémon.",
    "short_effect": "Teaches Waterfall to a compatible Pokémon. (HS: Whirlpool DPP: Defog Gen III & II & I: Flash)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 402,
    "name": "hm06",
    "category": "all-machines",
    "cost": 0,
    "effect": "Teaches Rock Smash to a compatible Pokémon.",
    "short_effect": "Teaches Dive to a compatible Pokémon. (Gen IV & III: Rock Smash Gen II: Whirlpool)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 403,
    "name": "hm07",
    "category": "all-machines",
    "cost": 0,
    "effect": "Teaches Waterfall to a compatible Pokémon.",
    "short_effect": "Teaches a move to a compatible Pokémon. (Gen IV & III & II: Waterfall)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 404,
    "name": "hm08",
    "category": "all-machines",
    "cost": 0,
    "effect": "Teaches Rock Climb to a compatible Pokémon.",
    "short_effect": "Teaches a move to a compatible Pokémon. (Gen IV: Rock Climb Gen III: Dive)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 405,
    "name": "explorer-kit",
    "category": "gameplay",
    "cost": 0,
    "effect": "Sends the trainer to the Underground.  Only usable outside.",
    "short_effect": "Allows visiting the Underground.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 406,
    "name": "loot-sack",
    "category": "unused",
    "cost": 0,
    "effect": "Unused.",
    "short_effect": "Carries coal mine loot.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 407,
    "name": "rule-book",
    "category": "unused",
    "cost": 0,
    "effect": "Unused.",
    "short_effect": "List of battle types and their rules.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 408,
    "name": "poke-radar",
    "category": "gameplay",
    "cost": 0,
    "effect": "Designates several nearby patches of grass as containing Pokémon, some of which may be special radar-only Pokémon.  Successive uses in a certain way create chains of encounters with the same species; longer chains increase the chance that a shiny Pokémon of that species will appear.",
    "short_effect": "Use to track down rare or shiny Pokémon. 50 steps to recharge.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 409,
    "name": "point-card",
    "category": "gameplay",
    "cost": 0,
    "effect": "Tracks Battle Points.",
    "short_effect": "Keeps count of Battle Points earned.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 410,
    "name": "journal",
    "category": "gameplay",
    "cost": 0,
    "effect": "Records some of the trainer’s activities for the day.",
    "short_effect": "Records prior significant activities the player took.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 411,
    "name": "seal-case",
    "category": "gameplay",
    "cost": 0,
    "effect": "Contains Seals used for decorating Pokéballs.",
    "short_effect": "Stores Seals that can be applied to Poké Ball capsules.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 412,
    "name": "fashion-case",
    "category": "gameplay",
    "cost": 0,
    "effect": "Contains Pokémon Accessories.",
    "short_effect": "Holds Pokémon Accessories for use in Contests.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 413,
    "name": "seal-bag",
    "category": "unused",
    "cost": 0,
    "effect": "Unused.",
    "short_effect": "Holds ten Seals for Poké Balls.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 414,
    "name": "pal-pad",
    "category": "gameplay",
    "cost": 0,
    "effect": "Contains friend codes for up to 32 other players, as well as their sprite, gender, and basic statistics for those that have been seen on WFC.",
    "short_effect": "Use to record Friend Codes and check your own.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 415,
    "name": "works-key",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Opens the front door of the Valley Windworks.  Reusable.",
    "short_effect": "Grants access to Valley Windworks.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 416,
    "name": "old-charm",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Given to Cynthia’s grandmother to get the Surf HM.",
    "short_effect": "Trade to Cynthia’s grandmother in Celestic Town for HM04 (Surf).",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 417,
    "name": "galactic-key",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Grants access to Galactic HQ in Veilstone City.",
    "short_effect": "Grants access to Galactic HQ in Veilstone City.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 418,
    "name": "red-chain",
    "category": "unused",
    "cost": 0,
    "effect": "Unused.",
    "short_effect": "Used to bind Palkia and Dialga.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 419,
    "name": "town-map",
    "category": "gameplay",
    "cost": 0,
    "effect": "Displays a map of the region including the trainer’s position, location names, visited towns, gym locations, and where the trainer has been walking recently.",
    "short_effect": "Use to see the overworld map.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 420,
    "name": "vs-seeker",
    "category": "gameplay",
    "cost": 0,
    "effect": "Reveals trainers who want a rematch, by showing !! over their heads.  Each use drains the battery; requires 100 steps to charge.",
    "short_effect": "Allows rebattling of on-screen trainers. 100 steps to recharge.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 421,
    "name": "coin-case",
    "category": "gameplay",
    "cost": 0,
    "effect": "Contains the Coins used by the Game Corner, to a maximum of 50,000.",
    "short_effect": "Holds coins for the Game Corner.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 422,
    "name": "old-rod",
    "category": "gameplay",
    "cost": 0,
    "effect": "Used to find Pokémon on the Old Rod list for an area, which are generally Magikarp or similar.",
    "short_effect": "Used to catch Pokémon in bodies of water.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 423,
    "name": "good-rod",
    "category": "gameplay",
    "cost": 0,
    "effect": "Used to find Pokémon on the Good Rod list for an area, which are generally mediocre.",
    "short_effect": "Used to catch Pokémon in bodies of water.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 424,
    "name": "super-rod",
    "category": "gameplay",
    "cost": 0,
    "effect": "Used to find Pokémon on the Super Rod list for an area, which are generally the best available there.",
    "short_effect": "Used to catch Pokémon in bodies of water.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 425,
    "name": "sprayduck",
    "category": "gameplay",
    "cost": 0,
    "effect": "Waters Berry plants.",
    "short_effect": "Used to water berries.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 426,
    "name": "poffin-case",
    "category": "gameplay",
    "cost": 0,
    "effect": "Contains up to 100 Poffins.",
    "short_effect": "Holds Poffins.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 427,
    "name": "bicycle",
    "category": "gameplay",
    "cost": 0,
    "effect": "Increases movement speed outside or in caves.  In high gear, allows the trainer to hop over some rocks and ascend muddy slopes.",
    "short_effect": "Use for fast transit.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 428,
    "name": "suite-key",
    "category": "event-items",
    "cost": 0,
    "effect": "Opens the locked building in the lakeside resort.",
    "short_effect": "Opens a locked building in the Lakeside Resort.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 429,
    "name": "oaks-letter",
    "category": "event-items",
    "cost": 0,
    "effect": "Grants access to Flower Paradise and Shaymin.",
    "short_effect": "Allows access to Seabreak path, Flower Paradise, and Shaymin.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 430,
    "name": "lunar-wing",
    "category": "event-items",
    "cost": 0,
    "effect": "Cures the sailor’s son of his nightmares; no reward, only a side effect of seeing Cresselia.",
    "short_effect": "Cures sailor’s son of nightmares in Canalave City.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 431,
    "name": "member-card",
    "category": "event-items",
    "cost": 0,
    "effect": "Provides access to Newmoon Island and Darkrai.",
    "short_effect": "Allows access to Newmoon Island and Darkrai.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 432,
    "name": "azure-flute",
    "category": "event-items",
    "cost": 0,
    "effect": "",
    "short_effect": "Allows entry into the Hall of Origin. Unreleased.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 433,
    "name": "ss-ticket",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Allows passage on a ferry.\n\nThe same item is used for different ferries between different games.",
    "short_effect": "Ticket for a ship. (RSE: S.S. Tidal LF: S.S. Anne HG: S.S. Aqua)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 434,
    "name": "contest-pass",
    "category": "gameplay",
    "cost": 0,
    "effect": "Allows the trainer to enter Contests.",
    "short_effect": "Allows participation in Pokémon Contests.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 435,
    "name": "magma-stone",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Causes Heatran to appear at Reversal Mountain.\n\nUnused prior to Black and White 2.",
    "short_effect": "Magma is sealed inside.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 436,
    "name": "parcel",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Given to the trainer’s rival in Jubilife City.  Contains two Town Maps, one of which is given to the trainer upon delivery.",
    "short_effect": "Given to the trainer’s rival in Jubilife City. Contains Town Maps.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 437,
    "name": "coupon-1",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "One of three coupons needed to receive a Pokétch.",
    "short_effect": "The first of three tickets used to obtain a Pokétch.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 438,
    "name": "coupon-2",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "One of three coupons needed to receive a Pokétch.",
    "short_effect": "The second of three tickets used to obtain a Pokétch.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 439,
    "name": "coupon-3",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "One of three coupons needed to receive a Pokétch.",
    "short_effect": "The last of three tickets used to obtain a Pokétch.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 440,
    "name": "storage-key",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Grants access to the Team Galactic warehouse in Veilstone City.",
    "short_effect": "Grants access to the Team Galactic warehouse in Veilstone City.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 441,
    "name": "secret-potion",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Required to cure the Psyducks blocking Route 210 of their chronic headaches.",
    "short_effect": "Used to heal the Ampharos at the top of Olivine Lighthouse.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 442,
    "name": "griseous-orb",
    "category": "species-specific",
    "cost": 0,
    "effect": "Held by giratina\n:   Holder’s dragon and ghost moves have 1.2× their base power.\n\n    Holder is in Origin Forme.\n\nThis item cannot be held by any Pokémon but Giratina.  When you enter the Union Room or connect to Wi-Fi, this item returns to your bag.",
    "short_effect": "Boosts the damage from Giratina’s Dragon-type and Ghost-type moves by 20%, and transforms it into Origin Forme.",
    "attributes": [],
    "fling_power": 60,
    "fling_effect": null
  },
  {
    "id": 443,
    "name": "vs-recorder",
    "category": "gameplay",
    "cost": 0,
    "effect": "Optionally records wireless, Wi-Fi, and Battle Frontier battles.\n\nTracks Battle Points earned in the Battle Frontier, and stores commemorative prints.",
    "short_effect": "Records wireless, Wi-Fi, or Battle Frontier battles, and stores points.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 444,
    "name": "gracidea",
    "category": "event-items",
    "cost": 0,
    "effect": "Used by trainer on a shaymin\n:   Changes the target Shaymin from Land Forme to Sky Forme.\n\n    This item cannot be used on a frozen Shaymin or at night.  Sky Forme Shaymin will revert to Land Forme overnight, when frozen, and upon entering a link battle.  This item must be used again to change it back.",
    "short_effect": "Changes an unfrozen Shaymin to Sky Forme in the day.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 445,
    "name": "secret-key",
    "category": "event-items",
    "cost": 0,
    "effect": "Used by trainer in the Galactic Eterna Building, on the ground floor, to the left of the TV\n:   Unlocks the secret rotom room, in which there are five appliances which can change Rotom’s form.",
    "short_effect": "Gen IV: The key to Rotom’s appliance room. Gen III: The key to Cinnabar Gym.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 446,
    "name": "apricorn-box",
    "category": "gameplay",
    "cost": 0,
    "effect": "Stores Apricorns.",
    "short_effect": "Holds Apricorns.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 447,
    "name": "berry-pots",
    "category": "gameplay",
    "cost": 0,
    "effect": "Contains four portable pots of soil suitable for growing berries.",
    "short_effect": "Allows portable berry growing.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 448,
    "name": "squirt-bottle",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Required to water berries within the berry pots.\n\nRequired to battle the sudowoodo on johto route 36.\n\nThis item cannot be directly used from the bag.",
    "short_effect": "Use on Sudowoodo blocking the path on Route 36. Also waters berries.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 449,
    "name": "lure-ball",
    "category": "apricorn-balls",
    "cost": 0,
    "effect": "Used by trainer in battle\n:   Attempts to catch a wild Pokémon.  If used in a trainer battle, nothing happens and the ball is lost.\n\n    If the wild Pokémon was encountered by fishing, the wild Pokémon’s catch rate is 3× normal.",
    "short_effect": "3× effectiveness while fishing. Made from Blu Apricorn.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 450,
    "name": "level-ball",
    "category": "apricorn-balls",
    "cost": 0,
    "effect": "Used by trainer in battle\n:   Attempts to catch a wild Pokémon.  If used in a trainer battle, nothing happens and the ball is lost.\n\n    If the trainer’s Pokémon’s level is higher than:\n\n    * four times the wild Pokémon’s, the wild Pokémon’s catch rate is 8× normal.\n    * than twice the wild Pokémon’s, the wild Pokémon’s catch rate is 4× normal.\n    * the wild Pokémon’s, the wild Pokémon’s catch rate is 2× normal.",
    "short_effect": "Success rate based off of fraction target Pokémon is of user’s Pokémon. Made from Red Apricorn.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 451,
    "name": "moon-ball",
    "category": "apricorn-balls",
    "cost": 0,
    "effect": "Used by trainer in battle\n:   Attempts to catch a wild Pokémon.  If used in a trainer battle, nothing happens and the ball is lost.\n\n    If the wild Pokémon is a clefairy, nidoran m, nidoran f, jigglypuff, skitty, or any evolution thereof, the wild Pokémon has 4× its catch rate.",
    "short_effect": "4× effectiveness on familes of Pokémon with a Moon Stone evolution. Made from Ylw Apricorn.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 452,
    "name": "heavy-ball",
    "category": "apricorn-balls",
    "cost": 0,
    "effect": "Used by a trainer in battle\n:   Attempts to catch a wild Pokémon.  If used in a trainer battle, nothing happens and the ball is lost.\n\n    If the wild Pokémon weighs:\n\n    * 409.6 kg (903.0 lb) or more, its catch rate is 40 more than normal.\n    * 307.2 kg (677.3 lb) or more, its catch rate is 30 more than normal.\n    * 204.8 kg (451.5 lb) or more, its catch rate is 20 more than normal.\n    * less than 204.8 kg (451.5 lb), its catch rate is 20 less than normal.",
    "short_effect": "Has flat bonus or penalty to catch rate depending on weight class of target. Made from Blk Apricorn.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 453,
    "name": "fast-ball",
    "category": "apricorn-balls",
    "cost": 0,
    "effect": "Used by a trainer in battle\n:   Attempts to catch a wild Pokémon.  If used in a trainer battle, nothing happens and the ball is lost.\n\n:   If the wild Pokémon’s base speed is 100 or more, its catch rate is 4× normal.",
    "short_effect": "4× effectiveness on Pokémon with 100 or greater base speed. (Gen II: Roaming or Fleeing Pokémon). Made from Wht Apricorn.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 454,
    "name": "friend-ball",
    "category": "apricorn-balls",
    "cost": 0,
    "effect": "Used by a trainer in battle\n:   Attempts to catch a wild Pokémon.  If used in a trainer battle, nothing happens and the ball is lost.\n\n    If caught, the wild Pokémon’s happiness starts at 200.",
    "short_effect": "Caught Pokémon start with 200 happiness. Made from Grn Apricorn.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 455,
    "name": "love-ball",
    "category": "apricorn-balls",
    "cost": 0,
    "effect": "Used by a trainer in battle\n:   Attempts to catch a wild Pokémon.  If used in a trainer battle, nothing happens and the ball is lost.\n\n    If the trainer’s Pokémon and wild Pokémon are of the same species but opposite genders, the wild Pokémon’s catch rate is 8× normal.",
    "short_effect": "8× effectiveness on opposite sex, same species targets of the Active Pokémon. Made from Pnk Apricorn.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 456,
    "name": "park-ball",
    "category": "standard-balls",
    "cost": 0,
    "effect": "Used by a trainer in battle\n:   Catches a wild Pokémon.\n\nThis item can only be used in pal park.",
    "short_effect": "Catches Pokémon in the Pal Park every time.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 457,
    "name": "sport-ball",
    "category": "standard-balls",
    "cost": 300,
    "effect": "Used by a trainer in battle\n:   Attempts to catch a wild Pokémon.\n\n    The wild Pokémon’s catch rate is 1.5× normal.",
    "short_effect": "Tries to catch a Pokémon in the Bug-Catching contest in National Park. (Gen II: Park Ball)",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 458,
    "name": "red-apricorn",
    "category": "apricorn-box",
    "cost": 200,
    "effect": "May be given to Kurt in azalea town to produce a level ball.",
    "short_effect": "Used to make a Level Ball.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 459,
    "name": "blue-apricorn",
    "category": "apricorn-box",
    "cost": 200,
    "effect": "May be given to Kurt in azalea town to produce a lure ball.",
    "short_effect": "Used to make a Lure Ball.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 460,
    "name": "yellow-apricorn",
    "category": "apricorn-box",
    "cost": 200,
    "effect": "May be given to Kurt in azalea town to produce a moon ball.",
    "short_effect": "Used to make a Moon Ball.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 461,
    "name": "green-apricorn",
    "category": "apricorn-box",
    "cost": 200,
    "effect": "May be given to Kurt in azalea town to produce a friend ball.",
    "short_effect": "Used to make a Friend Ball.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 462,
    "name": "pink-apricorn",
    "category": "apricorn-box",
    "cost": 200,
    "effect": "May be given to Kurt in azalea town to produce a love ball.",
    "short_effect": "Used to make a Love Ball.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 463,
    "name": "white-apricorn",
    "category": "apricorn-box",
    "cost": 200,
    "effect": "May be given to Kurt in azalea town to produce a fast ball.",
    "short_effect": "Used to make a Fast Ball.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 464,
    "name": "black-apricorn",
    "category": "apricorn-box",
    "cost": 200,
    "effect": "May be given to Kurt in azalea town to produce a heavy ball.",
    "short_effect": "Used to make a Heavy Ball.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 465,
    "name": "dowsing-machine",
    "category": "gameplay",
    "cost": 0,
    "effect": "Used by trainer outside of battle\n:   Searches for hidden items.",
    "short_effect": "Use to find hidden items on the field. AKA Itemfinder.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 466,
    "name": "rage-candy-bar",
    "category": "gameplay",
    "cost": 350,
    "effect": "May be traded for a tm64 in the vertical Underground Path.",
    "short_effect": "HS: Traded for TM64. Gen II & Gen V: Acts as a Potion.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 467,
    "name": "red-orb",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Causes groudon to appear in the embedded tower.",
    "short_effect": "Summons Groudon to the Embedded Tower.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 468,
    "name": "blue-orb",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Causes kyogre to appear in the embedded tower.",
    "short_effect": "Summons Kyogre to the Embedded Tower.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 469,
    "name": "jade-orb",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Causes rayquaza to appear in the embedded tower.",
    "short_effect": "Summons Rayquaza to the Embedded Tower.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 470,
    "name": "enigma-stone",
    "category": "event-items",
    "cost": 0,
    "effect": "When taken to the pewter city museum, causes latias or latios to attack the trainer.\n\nThe Pokémon to appear will be whicher can’t be encountered roaming in the wild.",
    "short_effect": "S: Summons Latias H: Summons Latios.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 471,
    "name": "unown-report",
    "category": "gameplay",
    "cost": 0,
    "effect": "Lists which unown forms the trainer has caught.",
    "short_effect": "Keeps track of Unown types caught.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 472,
    "name": "blue-card",
    "category": "gameplay",
    "cost": 0,
    "effect": "Allows the trainer to answer the daily question on Buena’s radio show.  Records the points earned for correct answers.",
    "short_effect": "Keeps track of points from Buena’s show.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 473,
    "name": "slowpoke-tail",
    "category": "unused",
    "cost": 0,
    "effect": "Does nothing.",
    "short_effect": "A tasty tail that sells for a high price.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 474,
    "name": "clear-bell",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "May be given to the Kimono Girls to summon ho oh to the top of the bell tower.",
    "short_effect": "HS: Allows Kimono-girls to summon Ho-oh. C: Summons Suicune to the Tin Tower.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 475,
    "name": "card-key",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Used by trainer outside of battle\n:   Opens doors in the goldenrod city Radio Tower.",
    "short_effect": "HS: Opens doors in the Radio Tower. Gen III: Unlocks Silph Co Doors.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 476,
    "name": "basement-key",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Used by trainer outside of battle\n:   Opens the door to the basement tunnel under goldenrod city.",
    "short_effect": "HS: Key to the tunnel under Goldenrod City. Gen III: Key to New Mauville.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 477,
    "name": "red-scale",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "May be traded to Mr. Pokémon for an exp share.",
    "short_effect": "Trade to Mr. Pokémon for an Exp. Share.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 478,
    "name": "lost-item",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "May be traded to the Copycat for a pass.",
    "short_effect": "A Poké Doll lost by the Copycat who lives in Saffron City. Trade for a Pass.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 479,
    "name": "pass",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Allows the trainer to ride the Magnet Train between goldenrod city and saffron city.",
    "short_effect": "Grants access to ride the Magnet Train between Goldenrod City and Saffron City.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 480,
    "name": "machine-part",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Must be replaced in the power plant to power the Magnet Train.",
    "short_effect": "Must be replaced in the Power Plant to power the Magnet Train.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 481,
    "name": "silver-wing",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Causes lugia to appear in the whirl islands.",
    "short_effect": "Summons Lugia to the Whirl Islands.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 482,
    "name": "rainbow-wing",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Causes ho oh to appear at the top of bell tower.",
    "short_effect": "Summons Ho-Oh at the top of the Bell Tower.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 483,
    "name": "mystery-egg",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Must be obtained to trigger the break-in at Professor Elm’s lab, the first rival battle, and access to johto route 31.",
    "short_effect": "Deliver to Professor Elm.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 484,
    "name": "gb-sounds",
    "category": "gameplay",
    "cost": 0,
    "effect": "Used by trainer outside of battle\n:   Changes the background music to the equivalent 8-bit music.",
    "short_effect": "Use to listen to GameBoy era audio.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 485,
    "name": "tidal-bell",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "May be given to the Kimono Girls to summon lugia to the top of the bell tower.",
    "short_effect": "Allows Kimono-girls to summon Lugia.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 486,
    "name": "data-card-01",
    "category": "data-cards",
    "cost": 0,
    "effect": "Records the number of times the trainer has come in first place overall in the Pokéathlon.",
    "short_effect": "Records the number of times the trainer has come in first place overall in the Pokéathlon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 487,
    "name": "data-card-02",
    "category": "data-cards",
    "cost": 0,
    "effect": "Records the number of times the trainer has come in last place overall in the Pokéathlon.",
    "short_effect": "Records the number of times the trainer has come in last place overall in the Pokéathlon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 488,
    "name": "data-card-03",
    "category": "data-cards",
    "cost": 0,
    "effect": "Records the number of times the trainer’s Pokémon have dashed in the Pokéathlon.",
    "short_effect": "Records the number of times the trainer’s Pokémon have dashed in the Pokéathlon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 489,
    "name": "data-card-04",
    "category": "data-cards",
    "cost": 0,
    "effect": "Records the number of times the trainer’s Pokémon have jumped in the Pokéathlon.",
    "short_effect": "Records the number of times the trainer’s Pokémon have jumped in the Pokéathlon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 490,
    "name": "data-card-05",
    "category": "data-cards",
    "cost": 0,
    "effect": "Records the number of times the trainer has come in first in the Pokéathlon Hurdle Dash.",
    "short_effect": "Records the number of times the trainer has come in first in the Pokéathlon Hurdle Dash.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 491,
    "name": "data-card-06",
    "category": "data-cards",
    "cost": 0,
    "effect": "Records the number of times the trainer has come in first in the Pokéathlon Relay Run.",
    "short_effect": "Records the number of times the trainer has come in first in the Pokéathlon Relay Run.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 492,
    "name": "data-card-07",
    "category": "data-cards",
    "cost": 0,
    "effect": "Records the number of times the trainer has come in first in the Pokéathlon Pennant Capture.",
    "short_effect": "Records the number of times the trainer has come in first in the Pokéathlon Pennant Capture.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 493,
    "name": "data-card-08",
    "category": "data-cards",
    "cost": 0,
    "effect": "Records the number of times the trainer has come in first in the Pokéathlon Block Smash.",
    "short_effect": "Records the number of times the trainer has come in first in the Pokéathlon Block Smash.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 494,
    "name": "data-card-09",
    "category": "data-cards",
    "cost": 0,
    "effect": "Records the number of times the trainer has come in first in the Pokéathlon Disc Catch.",
    "short_effect": "Records the number of times the trainer has come in first in the Pokéathlon Disc Catch.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 495,
    "name": "data-card-10",
    "category": "data-cards",
    "cost": 0,
    "effect": "Records the number of times the trainer has come in first in the Pokéathlon Snow Throw.",
    "short_effect": "Records the number of times the trainer has come in first in the Pokéathlon Snow Throw.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 496,
    "name": "data-card-11",
    "category": "data-cards",
    "cost": 0,
    "effect": "Records the number of points the trainer has earned in the Pokéathlon.",
    "short_effect": "Records the number of points the trainer has earned in the Pokéathlon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 497,
    "name": "data-card-12",
    "category": "data-cards",
    "cost": 0,
    "effect": "Records the number of times the trainer’s Pokémon have messed up in the Pokéathlon.",
    "short_effect": "Records the number of times the trainer’s Pokémon have messed up in the Pokéathlon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 498,
    "name": "data-card-13",
    "category": "data-cards",
    "cost": 0,
    "effect": "Records the number of times the trainer’s Pokémon have defeated themselves in the Pokéathlon.",
    "short_effect": "Records the number of times the trainer’s Pokémon have defeated themselves in the Pokéathlon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 499,
    "name": "data-card-14",
    "category": "data-cards",
    "cost": 0,
    "effect": "Records the number of times the trainer’s Pokémon have tackled in the Pokéathlon.",
    "short_effect": "Records the number of times the trainer’s Pokémon have tackled in the Pokéathlon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 500,
    "name": "data-card-15",
    "category": "data-cards",
    "cost": 0,
    "effect": "Records the number of times the trainer’s Pokémon have fallen in the Pokéathlon.",
    "short_effect": "Records the number of times the trainer’s Pokémon have fallen in the Pokéathlon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 501,
    "name": "data-card-16",
    "category": "data-cards",
    "cost": 0,
    "effect": "Records the number of times the trainer has come in first in the Pokéathlon Ring Drop.",
    "short_effect": "Records the number of times the trainer has come in first in the Pokéathlon Ring Drop.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 502,
    "name": "data-card-17",
    "category": "data-cards",
    "cost": 0,
    "effect": "Records the number of times the trainer has come in first in the Pokéathlon Lamp Jump.",
    "short_effect": "Records the number of times the trainer has come in first in the Pokéathlon Lamp Jump.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 503,
    "name": "data-card-18",
    "category": "data-cards",
    "cost": 0,
    "effect": "Records the number of times the trainer has come in first in the Pokéathlon Circle Push.",
    "short_effect": "Records the number of times the trainer has come in first in the Pokéathlon Circle Push.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 504,
    "name": "data-card-19",
    "category": "data-cards",
    "cost": 0,
    "effect": "Records the number of times the trainer has come in first place overall in the Pokéathlon over wirelss.",
    "short_effect": "Records the number of times the trainer has come in first place overall in the Pokéathlon over wirelss.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 505,
    "name": "data-card-20",
    "category": "data-cards",
    "cost": 0,
    "effect": "Records the number of times the trainer has come in last place overall in the Pokéathlon over wireless.",
    "short_effect": "Records the number of times the trainer has come in last place overall in the Pokéathlon over wireless.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 506,
    "name": "data-card-21",
    "category": "data-cards",
    "cost": 0,
    "effect": "Records the number of times the trainer has come in first across all Pokéathlon events.",
    "short_effect": "Records the number of times the trainer has come in first across all Pokéathlon events.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 507,
    "name": "data-card-22",
    "category": "data-cards",
    "cost": 0,
    "effect": "Records the number of times the trainer has come in last across all Pokéathlon events.",
    "short_effect": "Records the number of times the trainer has come in last across all Pokéathlon events.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 508,
    "name": "data-card-23",
    "category": "data-cards",
    "cost": 0,
    "effect": "Records the number of times the trainer has switched Pokémon in the Pokéathlon.",
    "short_effect": "Records the number of times the trainer has switched Pokémon in the Pokéathlon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 509,
    "name": "data-card-24",
    "category": "data-cards",
    "cost": 0,
    "effect": "Records the number of times the trainer has come in first in the Pokéathlon Goal Roll.",
    "short_effect": "Records the number of times the trainer has come in first in the Pokéathlon Goal Roll.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 510,
    "name": "data-card-25",
    "category": "data-cards",
    "cost": 0,
    "effect": "Records the number of times the trainer’s Pokémon received prizes in the Pokéathlon.",
    "short_effect": "Records the number of times the trainer’s Pokémon received prizes in the Pokéathlon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 511,
    "name": "data-card-26",
    "category": "data-cards",
    "cost": 0,
    "effect": "Records the number of times the trainer has instructed Pokémon in the Pokéathlon.",
    "short_effect": "Records the number of times the trainer has instructed Pokémon in the Pokéathlon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 512,
    "name": "data-card-27",
    "category": "data-cards",
    "cost": 0,
    "effect": "Records the total time spent in the Pokéathlon.",
    "short_effect": "Records the total time spent in the Pokéathlon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 513,
    "name": "lock-capsule",
    "category": "unused",
    "cost": 0,
    "effect": "Does nothing.",
    "short_effect": "Contains TM95 (Snarl).",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 514,
    "name": "photo-album",
    "category": "unused",
    "cost": 0,
    "effect": "Does nothing.",
    "short_effect": "Stores photos from your adventure.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 515,
    "name": "orange-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 516,
    "name": "harbor-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 517,
    "name": "glitter-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 518,
    "name": "mech-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 519,
    "name": "wood-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 520,
    "name": "wave-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 521,
    "name": "bead-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 522,
    "name": "shadow-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 523,
    "name": "tropic-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 524,
    "name": "dream-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 525,
    "name": "fab-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 526,
    "name": "retro-mail",
    "category": "all-mail",
    "cost": 0,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 527,
    "name": "mach-bike",
    "category": "gameplay",
    "cost": 0,
    "effect": "Increases movement speed outside or in caves.  Faster than the acro bike.  Allows the trainer to ascend muddy slopes.",
    "short_effect": "Faster than the Acro Bike, and can ride up sandy slopes and across cracked floors.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 528,
    "name": "acro-bike",
    "category": "gameplay",
    "cost": 0,
    "effect": "Increases movement speed outside or in caves.  Slower than the mach bike.  Can perform various tricks, allowing the trainer to reach certain special areas.",
    "short_effect": "More maneuverable than the Mach Bike, and allows hopping along rails.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 529,
    "name": "wailmer-pail",
    "category": "gameplay",
    "cost": 0,
    "effect": "Waters Berry plants.",
    "short_effect": "Used to water berries.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 530,
    "name": "devon-goods",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Contains a machine part to be delivered to Captain Stern.",
    "short_effect": "Contains mechanical parts to be delivered to Captain Stern.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 531,
    "name": "soot-sack",
    "category": "gameplay",
    "cost": 0,
    "effect": "Collects soot when walking through tall grass on hoenn route 113.",
    "short_effect": "Stores volcanic ash from Route 113.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 532,
    "name": "pokeblock-case",
    "category": "gameplay",
    "cost": 0,
    "effect": "Stores Pokéblocks.",
    "short_effect": "Holds Pokéblocks.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 533,
    "name": "letter",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Contains a letter to be delivered to Steven.",
    "short_effect": "A letter to Steven from the Devon Corp president.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 534,
    "name": "eon-ticket",
    "category": "event-items",
    "cost": 0,
    "effect": "Provides access to southern island and either latias or latios, whichever is not available roaming around Hoenn.",
    "short_effect": "Provides access to Southern Island and Latias or Latios.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 535,
    "name": "scanner",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "May be traded to Captain Stern for a deep sea tooth or a deep sea scale.",
    "short_effect": "Trade to Captain Stern for a DeepSeaTooth or DeepSeaScale.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 536,
    "name": "go-goggles",
    "category": "gameplay",
    "cost": 0,
    "effect": "Allows the trainer to enter the desert on hoenn route 111.",
    "short_effect": "Allows passage through windy deserts.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 537,
    "name": "meteorite",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "RSE: May be traded to Professor Cozmo for tm27.\n\nFRLG: A meteorite to be delivered to Lostelle’s father.",
    "short_effect": "FL: Deliver to Lostelle’s father. RSE: Trade to Professor Cozmo for TM27 (Return).",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 538,
    "name": "rm-1-key",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Unlocks room 1 on the abandoned ship.",
    "short_effect": "Unlocks room 1 on the Abandoned Ship.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 539,
    "name": "rm-2-key",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Unlocks room 2 on the abandoned ship.",
    "short_effect": "Unlocks room 2 on the Abandoned Ship.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 540,
    "name": "rm-4-key",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Unlocks room 4 on the abandoned ship.",
    "short_effect": "Unlocks room 4 on the Abandoned Ship.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 541,
    "name": "rm-6-key",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Unlocks room 6 on the abandoned ship.",
    "short_effect": "Unlocks room 6 on the Abandoned Ship.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 542,
    "name": "devon-scope",
    "category": "gameplay",
    "cost": 0,
    "effect": "Reveals invisble kecleon on the overworld.",
    "short_effect": "Allows spotting of invisible Kecleon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 543,
    "name": "oaks-parcel",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "A parcel to be delivered to Professor Oak for a Pokédex.",
    "short_effect": "Trade to Prof. Oak for a Pokédex.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 544,
    "name": "poke-flute",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Wakes up sleeping Pokémon.  Required to wake up sleeping snorlax on the overworld.",
    "short_effect": "Use to awaken sleeping Pokémon, including Snorlax on roads.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 545,
    "name": "bike-voucher",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "May be traded for a bicycle.",
    "short_effect": "Trade in Cerulean bike shop for a Bicycle.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 546,
    "name": "gold-teeth",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "The Safari Zone warden’s teeth, to be returned to him for hm04.",
    "short_effect": "The Safari Zone Warden’s dentures. Trade for HM04 (Strength).",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 547,
    "name": "lift-key",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Operates the elevator in the Celadon Rocket Hideout.",
    "short_effect": "Operates the elevator in Team Rocket’s Celadon Hideout.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 548,
    "name": "silph-scope",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Identifies ghosts in pokemon tower.",
    "short_effect": "Used to identify the true forms of ghosts in Pokémon Tower.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 549,
    "name": "fame-checker",
    "category": "gameplay",
    "cost": 0,
    "effect": "Records information on various famous people.",
    "short_effect": "Records information about NPCs.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 550,
    "name": "tm-case",
    "category": "gameplay",
    "cost": 0,
    "effect": "Stores TMs and HMs.",
    "short_effect": "Holds TMs.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 551,
    "name": "berry-pouch",
    "category": "gameplay",
    "cost": 0,
    "effect": "Stores Berries.",
    "short_effect": "Holds berries.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 552,
    "name": "teachy-tv",
    "category": "gameplay",
    "cost": 0,
    "effect": "Teaches beginning trainers basic information.",
    "short_effect": "Teachers basic trainer advice.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 553,
    "name": "tri-pass",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Provides access to the first three Sevii Islands.",
    "short_effect": "Grants access to the first three Sevii Islands.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 554,
    "name": "rainbow-pass",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Provides access to the Sevii Islands.",
    "short_effect": "Grants access to all of the Sevii Islands.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 555,
    "name": "tea",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Used to bribe the saffron city guards for entry to the city.",
    "short_effect": "Grants access to Saffron City.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 556,
    "name": "mysticticket",
    "category": "event-items",
    "cost": 0,
    "effect": "Provides access to Navel Rock, ho oh, and lugia.",
    "short_effect": "Allows access to Navel Rock and Lugia or Ho-oh.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 557,
    "name": "auroraticket",
    "category": "event-items",
    "cost": 0,
    "effect": "Provides access to Birth Island and deoxys.",
    "short_effect": "Allows access to Birth Island and Deoxys.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 558,
    "name": "powder-jar",
    "category": "gameplay",
    "cost": 0,
    "effect": "Holds Berry Powder from Berry Crushing.",
    "short_effect": "Stores Berry Powder made using a Berry Crusher.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 559,
    "name": "ruby",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Deliver to Celio for use in the Network Machine.",
    "short_effect": "Give to Celio with Sapphire to activate Network Machine and get Rainbow Pass.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 560,
    "name": "sapphire",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Deliver to Celio for use in the Network Machine.",
    "short_effect": "Give to Celio with Ruby to activate Network Machine and get Rainbow Pass.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 561,
    "name": "magma-emblem",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Provides access to the magma hideout in the jagged pass.",
    "short_effect": "Provides access to the Team Magma Hideout in the Jagged Pass.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 562,
    "name": "old-sea-map",
    "category": "event-items",
    "cost": 0,
    "effect": "Provides access to Faraway Island and mew.",
    "short_effect": "Allows access to Faraway Island and Mew. Unreleased outside of Japan.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 563,
    "name": "douse-drive",
    "category": "species-specific",
    "cost": 0,
    "effect": "Held by genesect\n:   Holder’s buster is blue, and its techno blast is water-type.",
    "short_effect": "Grants Genesect a blue, Water-type Techno Blast.",
    "attributes": [],
    "fling_power": 70,
    "fling_effect": null
  },
  {
    "id": 564,
    "name": "shock-drive",
    "category": "species-specific",
    "cost": 0,
    "effect": "Held by genesect\n:   Holder’s buster is yellow, and its techno blast is electric-type.",
    "short_effect": "Grants Genesect a yellow, Electric-type Techno Blast.",
    "attributes": [],
    "fling_power": 70,
    "fling_effect": null
  },
  {
    "id": 565,
    "name": "burn-drive",
    "category": "species-specific",
    "cost": 0,
    "effect": "Held by genesect\n:   Holder’s buster is red, and its techno blast is fire-type.",
    "short_effect": "Grants Genesect a red, Fire-type Techno Blast.",
    "attributes": [],
    "fling_power": 70,
    "fling_effect": null
  },
  {
    "id": 566,
    "name": "chill-drive",
    "category": "species-specific",
    "cost": 0,
    "effect": "Held by genesect\n:   Holder’s buster is white, and its techno blast becomes ice-type.",
    "short_effect": "Grants Genesect a white, Ice-type Techno Blast.",
    "attributes": [],
    "fling_power": 70,
    "fling_effect": null
  },
  {
    "id": 567,
    "name": "sweet-heart",
    "category": "healing",
    "cost": 3000,
    "effect": "Used on a friendly Pokémon\n:   Restores 20 HP.",
    "short_effect": "Restores 20 HP.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 568,
    "name": "greet-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 569,
    "name": "favored-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 570,
    "name": "rsvp-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 571,
    "name": "thanks-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 572,
    "name": "inquiry-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 573,
    "name": "like-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 574,
    "name": "reply-mail",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 575,
    "name": "bridge-mail-s",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 576,
    "name": "bridge-mail-d",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 577,
    "name": "bridge-mail-t",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 578,
    "name": "bridge-mail-v",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 579,
    "name": "bridge-mail-m",
    "category": "all-mail",
    "cost": 50,
    "effect": "Used to send short messages to other players via Pokémon trading.  Trainer may compose a message from a finite list of words when giving this item to a Pokémon.  Once taken and read, a message may be erased and this item can be reused, or the message may be stored in the trainer’s PC.\n\nHeld\n:   Holder cannot be placed in the PC.  Any move attempting to remove this item from the holder will fail.",
    "short_effect": "Lets a Trainer write a message and send it via Pokémon trade.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 580,
    "name": "prism-scale",
    "category": "evolution",
    "cost": 2000,
    "effect": "Held by feebas\n:   Holder evolves into milotic when traded.",
    "short_effect": "Traded on a Feebas: Holder evolves into Milotic.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 581,
    "name": "eviolite",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held by a Pokémon that is not fully evolved\n:   Holder has 1.5× Defense and Special Defense.",
    "short_effect": "Held: Holder has 1.5× Defense and Special Defense, as long as it’s not fully evolved.",
    "attributes": [],
    "fling_power": 40,
    "fling_effect": null
  },
  {
    "id": 582,
    "name": "float-stone",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held\n:   Holder has 0.5× weight.",
    "short_effect": "Held: Holder has 0.5× weight.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 583,
    "name": "rocky-helmet",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held\n:   When the holder is hit by a contact move, the attacking Pokémon takes 1/6 its max HP in damage.",
    "short_effect": "Held: When the holder is hit by a contact move, the attacking Pokémon takes 1/6 its max HP in damage.",
    "attributes": [],
    "fling_power": 60,
    "fling_effect": null
  },
  {
    "id": 584,
    "name": "air-balloon",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held\n:   Holder is immune to ground-type moves, spikes, toxic spikes, and arena trap.\n\n    This effect does not apply during gravity or ingrain.\n\n    When the holder takes damage from a move, this item is consumed.",
    "short_effect": "Held: Grants immunity to Ground-type moves, Spikes, and Toxic Spikes. Consumed when the holder takes damage from a move.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 585,
    "name": "red-card",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held\n:   When the holder takes damage directly from a move and does not faint, it switches out for another random, non-fainted Pokémon in its party.\nThis effect does not activate if another effect prevents the holder from switching out.",
    "short_effect": "Held: When the holder takes damage from a move, the opponent switches out for another random party Pokémon. Consumed after use.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 586,
    "name": "ring-target",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held\n:   When one of the user’s types would render it immune to damage, that type is ignored for damage calculation.",
    "short_effect": "Held: Negates the holder’s type immunities. Ability immunities are not removed.",
    "attributes": [],
    "fling_power": 10,
    "fling_effect": null
  },
  {
    "id": 587,
    "name": "binding-band",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held\n:   Moves used by the holder that trap and damage a target for multiple turns (e.g. bind, fire spin) inflict twice their usual per-turn damage.",
    "short_effect": "Held: Doubles the per-turn damage of multi-turn trapping moves.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 588,
    "name": "absorb-bulb",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held\n:   When the holder takes water-type damage from a move, its Special Attack rises by one stage and this item is consumed.",
    "short_effect": "Held: Raises the holder’s Special Attack by one stage when it takes Water-type damage.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 589,
    "name": "cell-battery",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held\n:   When the holder takes electric-type damage from a move, its Attack rises by one stage and this item is consumed.",
    "short_effect": "Held: Raises the holder’s Attack by one stage when it takes Electric-type damage.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 590,
    "name": "eject-button",
    "category": "held-items",
    "cost": 4000,
    "effect": "Held\n:   When the holder takes damage directly from a move and does not faint, it switches out for another non-fainted Pokémon in its party, as chosen by the Trainer.\nThis effect does not activate if another effect prevents the holder from switching out.",
    "short_effect": "Held: When the holder takes damage from a move, it switches out for a party Pokémon of the Trainer’s choice.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 591,
    "name": "fire-gem",
    "category": "jewels",
    "cost": 200,
    "effect": "Held\n:   When the holder uses a damaging fire-type move, the move has 1.5× power and this item is consumed.",
    "short_effect": "Held: When the holder uses a damaging fire-type move, the move has 1.5× power and this item is consumed.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 592,
    "name": "water-gem",
    "category": "jewels",
    "cost": 200,
    "effect": "Held\n:   When the holder uses a damaging water-type move, the move has 1.5× power and this item is consumed.",
    "short_effect": "Held: When the holder uses a damaging water-type move, the move has 1.5× power and this item is consumed.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 593,
    "name": "electric-gem",
    "category": "jewels",
    "cost": 200,
    "effect": "Held\n:   When the holder uses a damaging electric-type move, the move has 1.5× power and this item is consumed.",
    "short_effect": "Held: When the holder uses a damaging electric-type move, the move has 1.5× power and this item is consumed.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 594,
    "name": "grass-gem",
    "category": "jewels",
    "cost": 200,
    "effect": "Held\n:   When the holder uses a damaging grass-type move, the move has 1.5× power and this item is consumed.",
    "short_effect": "Held: When the holder uses a damaging grass-type move, the move has 1.5× power and this item is consumed.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 595,
    "name": "ice-gem",
    "category": "jewels",
    "cost": 200,
    "effect": "Held\n:   When the holder uses a damaging ice-type move, the move has 1.5× power and this item is consumed.",
    "short_effect": "Held: When the holder uses a damaging ice-type move, the move has 1.5× power and this item is consumed.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 596,
    "name": "fighting-gem",
    "category": "jewels",
    "cost": 200,
    "effect": "Held\n:   When the holder uses a damaging fighting-type move, the move has 1.5× power and this item is consumed.",
    "short_effect": "Held: When the holder uses a damaging fighting-type move, the move has 1.5× power and this item is consumed.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 597,
    "name": "poison-gem",
    "category": "jewels",
    "cost": 200,
    "effect": "Held\n:   When the holder uses a damaging poison-type move, the move has 1.5× power and this item is consumed.",
    "short_effect": "Held: When the holder uses a damaging poison-type move, the move has 1.5× power and this item is consumed.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 598,
    "name": "ground-gem",
    "category": "jewels",
    "cost": 200,
    "effect": "Held\n:   When the holder uses a damaging ground-type move, the move has 1.5× power and this item is consumed.",
    "short_effect": "Held: When the holder uses a damaging ground-type move, the move has 1.5× power and this item is consumed.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 599,
    "name": "flying-gem",
    "category": "jewels",
    "cost": 200,
    "effect": "Held\n:   When the holder uses a damaging flying-type move, the move has 1.5× power and this item is consumed.",
    "short_effect": "Held: When the holder uses a damaging flying-type move, the move has 1.5× power and this item is consumed.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 600,
    "name": "psychic-gem",
    "category": "jewels",
    "cost": 200,
    "effect": "Held\n:   When the holder uses a damaging psychic-type move, the move has 1.5× power and this item is consumed.",
    "short_effect": "Held: When the holder uses a damaging psychic-type move, the move has 1.5× power and this item is consumed.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 601,
    "name": "bug-gem",
    "category": "jewels",
    "cost": 200,
    "effect": "Held\n:   When the holder uses a damaging bug-type move, the move has 1.5× power and this item is consumed.",
    "short_effect": "Held: When the holder uses a damaging bug-type move, the move has 1.5× power and this item is consumed.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 602,
    "name": "rock-gem",
    "category": "jewels",
    "cost": 200,
    "effect": "Held\n:   When the holder uses a damaging rock-type move, the move has 1.5× power and this item is consumed.",
    "short_effect": "Held: When the holder uses a damaging rock-type move, the move has 1.5× power and this item is consumed.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 603,
    "name": "ghost-gem",
    "category": "jewels",
    "cost": 200,
    "effect": "Held\n:   When the holder uses a damaging ghost-type move, the move has 1.5× power and this item is consumed.",
    "short_effect": "Held: When the holder uses a damaging ghost-type move, the move has 1.5× power and this item is consumed.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 604,
    "name": "dark-gem",
    "category": "jewels",
    "cost": 200,
    "effect": "Held\n:   When the holder uses a damaging dark-type move, the move has 1.5× power and this item is consumed.",
    "short_effect": "Held: When the holder uses a damaging dark-type move, the move has 1.5× power and this item is consumed.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 605,
    "name": "steel-gem",
    "category": "jewels",
    "cost": 200,
    "effect": "Held\n:   When the holder uses a damaging steel-type move, the move has 1.5× power and this item is consumed.",
    "short_effect": "Held: When the holder uses a damaging steel-type move, the move has 1.5× power and this item is consumed.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 606,
    "name": "health-wing",
    "category": "vitamins",
    "cost": 300,
    "effect": "Used on a party Pokémon\n:   Increases the target’s HP effort by 1.",
    "short_effect": "Increases HP effort by 1.",
    "attributes": [],
    "fling_power": 20,
    "fling_effect": null
  },
  {
    "id": 607,
    "name": "muscle-wing",
    "category": "vitamins",
    "cost": 300,
    "effect": "Used on a party Pokémon\n:   Increases the target’s Attack effort by 1.",
    "short_effect": "Increases Attack effort by 1.",
    "attributes": [],
    "fling_power": 20,
    "fling_effect": null
  },
  {
    "id": 608,
    "name": "resist-wing",
    "category": "vitamins",
    "cost": 300,
    "effect": "Used on a party Pokémon\n:   Increases the target’s Defense effort by 1.",
    "short_effect": "Increases Defense effort by 1.",
    "attributes": [],
    "fling_power": 20,
    "fling_effect": null
  },
  {
    "id": 609,
    "name": "genius-wing",
    "category": "vitamins",
    "cost": 300,
    "effect": "Used on a party Pokémon\n:   Increases the target’s Special Attack effort by 1.",
    "short_effect": "Increases Special Attack effort by 1.",
    "attributes": [],
    "fling_power": 20,
    "fling_effect": null
  },
  {
    "id": 610,
    "name": "clever-wing",
    "category": "vitamins",
    "cost": 300,
    "effect": "Used on a party Pokémon\n:   Increases the target’s Special Defense effort by 1.",
    "short_effect": "Increases Special Defense effort by 1.",
    "attributes": [],
    "fling_power": 20,
    "fling_effect": null
  },
  {
    "id": 611,
    "name": "swift-wing",
    "category": "vitamins",
    "cost": 300,
    "effect": "Used on a party Pokémon\n:   Increases the target’s Speed effort by 1.",
    "short_effect": "Increases Speed effort by 1.",
    "attributes": [],
    "fling_power": 20,
    "fling_effect": null
  },
  {
    "id": 612,
    "name": "pretty-wing",
    "category": "loot",
    "cost": 1000,
    "effect": "Vendor trash.",
    "short_effect": "Sell for 100 Pokédollars.",
    "attributes": [],
    "fling_power": 20,
    "fling_effect": null
  },
  {
    "id": 613,
    "name": "cover-fossil",
    "category": "dex-completion",
    "cost": 7000,
    "effect": "Give to a scientist in a museum to receive a tirtouga.",
    "short_effect": "Can be revived into a tirtouga.",
    "attributes": [],
    "fling_power": 100,
    "fling_effect": null
  },
  {
    "id": 614,
    "name": "plume-fossil",
    "category": "dex-completion",
    "cost": 7000,
    "effect": "Give to a scientist in a museum to receive an archen.",
    "short_effect": "Can be revived into an archen.",
    "attributes": [],
    "fling_power": 100,
    "fling_effect": null
  },
  {
    "id": 615,
    "name": "liberty-pass",
    "category": "event-items",
    "cost": 0,
    "effect": "Allows passage on the castelia city ship, which leads to liberty garden and victini.",
    "short_effect": "Allows access to Liberty Garden and Victini.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 616,
    "name": "pass-orb",
    "category": "held-items",
    "cost": 200,
    "effect": "Acts as currency to activate Pass Powers in the Entralink.",
    "short_effect": "Activates Pass Powers.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 617,
    "name": "dream-ball",
    "category": "special-balls",
    "cost": 0,
    "effect": "Can only be used in Entree Forest, to catch Pokémon encountered in the Dream World.\n\nUsed in battle\n:   Catches a wild Pokémon without fail.",
    "short_effect": "Catches Pokémon found in the Dream World.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 618,
    "name": "poke-toy",
    "category": "spelunking",
    "cost": 100,
    "effect": "Used in battle\n:   Ends a wild battle.  Cannot be used in trainer battles.",
    "short_effect": "Ends a wild battle.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 619,
    "name": "prop-case",
    "category": "gameplay",
    "cost": 0,
    "effect": "Stores props for the Pokémon Musical.",
    "short_effect": "Stores props for the Pokémon Musical.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 620,
    "name": "dragon-skull",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Only used as a plot point; this item is given to the player and taken away in the same cutscene.",
    "short_effect": "Return to the museum in Nacrene City.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 621,
    "name": "balm-mushroom",
    "category": "loot",
    "cost": 15000,
    "effect": "Cult vendor trash.",
    "short_effect": "Sell to Hungry Maid for 25000 Pokédollars.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 622,
    "name": "big-nugget",
    "category": "loot",
    "cost": 40000,
    "effect": "Cult vendor trash.",
    "short_effect": "Sell to Ore Collector for 30000 Pokédollars.",
    "attributes": [],
    "fling_power": 130,
    "fling_effect": null
  },
  {
    "id": 623,
    "name": "pearl-string",
    "category": "loot",
    "cost": 20000,
    "effect": "Cult vendor trash.",
    "short_effect": "Sell to Ore Collector for 25000 Pokédollars.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 624,
    "name": "comet-shard",
    "category": "loot",
    "cost": 25000,
    "effect": "Cult vendor trash.",
    "short_effect": "Sell to Ore Collector for 60000 Pokédollars.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 625,
    "name": "relic-copper",
    "category": "loot",
    "cost": 0,
    "effect": "Cult vendor trash.",
    "short_effect": "Sell to Villa Owner for 1000 Pokédollars.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 626,
    "name": "relic-silver",
    "category": "loot",
    "cost": 0,
    "effect": "Cult vendor trash.",
    "short_effect": "Sell to Villa Owner 5000 Pokédollars.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 627,
    "name": "relic-gold",
    "category": "loot",
    "cost": 60000,
    "effect": "Cult vendor trash.",
    "short_effect": "Sell to Villa Owner 10000 Pokédollars.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 628,
    "name": "relic-vase",
    "category": "loot",
    "cost": 0,
    "effect": "Cult vendor trash.",
    "short_effect": "Sell to Villa Owner 50000 Pokédollars.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 629,
    "name": "relic-band",
    "category": "loot",
    "cost": 0,
    "effect": "Cult vendor trash.",
    "short_effect": "Sell to Villa Owner for 100000 Pokédollars.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 630,
    "name": "relic-statue",
    "category": "loot",
    "cost": 0,
    "effect": "Cult vendor trash.",
    "short_effect": "Sell to Villa Owner 200000 Pokédollars.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 631,
    "name": "relic-crown",
    "category": "loot",
    "cost": 0,
    "effect": "Cult vendor trash.",
    "short_effect": "Sell to Villa Owner for 300000 Pokédollars.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 632,
    "name": "casteliacone",
    "category": "status-cures",
    "cost": 350,
    "effect": "Used on a party Pokémon\n:   Cures any status ailment and confusion.",
    "short_effect": "Cures any status ailment and confusion.",
    "attributes": [],
    "fling_power": 30,
    "fling_effect": null
  },
  {
    "id": 633,
    "name": "dire-hit-2",
    "category": "miracle-shooter",
    "cost": 0,
    "effect": "Used on a party Pokémon in battle\n:   Raises the target’s critical hit rate by two stages.\nThis item can only be obtained or used via the Wonder Launcher.",
    "short_effect": "Raises critical hit rate by two stages in battle.  Wonder Launcher only.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 634,
    "name": "x-speed-2",
    "category": "miracle-shooter",
    "cost": 0,
    "effect": "Used on a party Pokémon in battle\n:   Raises the target’s Speed by two stages.\nThis item can only be obtained or used via the Wonder Launcher.",
    "short_effect": "Raises Speed by two stages in battle.  Wonder Launcher only.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 635,
    "name": "x-sp-atk-2",
    "category": "miracle-shooter",
    "cost": 0,
    "effect": "Used on a party Pokémon in battle\n:   Raises the target’s Special Attack by two stages.\nThis item can only be obtained or used via the Wonder Launcher.",
    "short_effect": "Raises Special Attack by two stages in battle.  Wonder Launcher only.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 636,
    "name": "x-sp-def-2",
    "category": "miracle-shooter",
    "cost": 0,
    "effect": "Used on a party Pokémon in battle\n:   Raises the target’s Special Defense by two stages.\nThis item can only be obtained or used via the Wonder Launcher.",
    "short_effect": "Raises Special Defense by two stages in battle.  Wonder Launcher only.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 637,
    "name": "x-defense-2",
    "category": "miracle-shooter",
    "cost": 0,
    "effect": "Used on a party Pokémon in battle\n:   Raises the target’s Defense by two stages.\nThis item can only be obtained or used via the Wonder Launcher.",
    "short_effect": "Raises Defense by two stages in battle.  Wonder Launcher only.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 638,
    "name": "x-attack-2",
    "category": "miracle-shooter",
    "cost": 0,
    "effect": "Used on a party Pokémon in battle\n:   Raises the target’s Attack by two stages.\nThis item can only be obtained or used via the Wonder Launcher.",
    "short_effect": "Raises Attack by two stages in battle.  Wonder Launcher only.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 639,
    "name": "x-accuracy-2",
    "category": "miracle-shooter",
    "cost": 0,
    "effect": "Used on a party Pokémon in battle\n:   Raises the target’s accuracy by two stages.\nThis item can only be obtained or used via the Wonder Launcher.",
    "short_effect": "Raises accuracy by two stages in battle.  Wonder Launcher only.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 640,
    "name": "x-speed-3",
    "category": "miracle-shooter",
    "cost": 0,
    "effect": "Used on a party Pokémon in battle\n:   Raises the target’s Speed by three stages.\nThis item can only be obtained or used via the Wonder Launcher.",
    "short_effect": "Raises Speed by three stages in battle.  Wonder Launcher only.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 641,
    "name": "x-sp-atk-3",
    "category": "miracle-shooter",
    "cost": 0,
    "effect": "Used on a party Pokémon in battle\n:   Raises the target’s Special Attack by three stages.\nThis item can only be obtained or used via the Wonder Launcher.",
    "short_effect": "Raises Special Attack by three stages in battle.  Wonder Launcher only.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 642,
    "name": "x-sp-def-3",
    "category": "miracle-shooter",
    "cost": 0,
    "effect": "Used on a party Pokémon in battle\n:   Raises the target’s Special Defense by three stages.\nThis item can only be obtained or used via the Wonder Launcher.",
    "short_effect": "Raises Special Defense by three stages in battle.  Wonder Launcher only.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 643,
    "name": "x-defense-3",
    "category": "miracle-shooter",
    "cost": 0,
    "effect": "Used on a party Pokémon in battle\n:   Raises the target’s Defense by three stages.\nThis item can only be obtained or used via the Wonder Launcher.",
    "short_effect": "Raises Defense by three stages in battle.  Wonder Launcher only.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 644,
    "name": "x-attack-3",
    "category": "miracle-shooter",
    "cost": 0,
    "effect": "Used on a party Pokémon in battle\n:   Raises the target’s Attack by three stages.\nThis item can only be obtained or used via the Wonder Launcher.",
    "short_effect": "Raises Attack by three stages in battle.  Wonder Launcher only.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 645,
    "name": "x-accuracy-3",
    "category": "miracle-shooter",
    "cost": 0,
    "effect": "Used on a party Pokémon in battle\n:   Raises the target’s accuracy by three stages.\nThis item can only be obtained or used via the Wonder Launcher.",
    "short_effect": "Raises accuracy by three stages in battle.  Wonder Launcher only.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 646,
    "name": "x-speed-6",
    "category": "miracle-shooter",
    "cost": 0,
    "effect": "Used on a party Pokémon in battle\n:   Raises the target’s Speed by six stages.\nThis item can only be obtained or used via the Wonder Launcher.",
    "short_effect": "Raises Speed by six stages in battle.  Wonder Launcher only.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 647,
    "name": "x-sp-atk-6",
    "category": "miracle-shooter",
    "cost": 0,
    "effect": "Used on a party Pokémon in battle\n:   Raises the target’s Special Attack by six stages.\nThis item can only be obtained or used via the Wonder Launcher.",
    "short_effect": "Raises Special Attack by six stages in battle.  Wonder Launcher only.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 648,
    "name": "x-sp-def-6",
    "category": "miracle-shooter",
    "cost": 0,
    "effect": "Used on a party Pokémon in battle\n:   Raises the target’s Special Defense by six stages.\nThis item can only be obtained or used via the Wonder Launcher.",
    "short_effect": "Raises Special Defense by six stages in battle.  Wonder Launcher only.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 649,
    "name": "x-defense-6",
    "category": "miracle-shooter",
    "cost": 0,
    "effect": "Used on a party Pokémon in battle\n:   Raises the target’s Defense by six stages.\nThis item can only be obtained or used via the Wonder Launcher.",
    "short_effect": "Raises Defense by six stages in battle.  Wonder Launcher only.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 650,
    "name": "x-attack-6",
    "category": "miracle-shooter",
    "cost": 0,
    "effect": "Used on a party Pokémon in battle\n:   Raises the target’s Attack by six stages.\n\nThis item can only be obtained or used via the Wonder Launcher.",
    "short_effect": "Raises Attack by six stages in battle.  Wonder Launcher only.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 651,
    "name": "x-accuracy-6",
    "category": "miracle-shooter",
    "cost": 0,
    "effect": "Used on a party Pokémon in battle\n:   Raises the target’s accuracy by six stages.\n\nThis item can only be obtained or used via the Wonder Launcher.",
    "short_effect": "Raises accuracy by six stages in battle.  Wonder Launcher only.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 652,
    "name": "ability-urge",
    "category": "miracle-shooter",
    "cost": 0,
    "effect": "Used on a party Pokémon in battle\n:   Selects another friendly Pokémon at random.  If that Pokémon’s ability is normally activated by some condition—i.e., is not continuous and passive—its effect is forcibly activated.\n\nThis item can only be obtained or used via the Wonder Launcher.",
    "short_effect": "Forcibly activates a friendly Pokémon’s ability.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 653,
    "name": "item-drop",
    "category": "miracle-shooter",
    "cost": 0,
    "effect": "Used on a party Pokémon in battle\n:   Selects another friendly Pokémon at random.  If that Pokémon is holding an item, that item is removed for the duration of the battle.\n\nThis item can only be obtained or used via the Wonder Launcher.",
    "short_effect": "Forces a friendly Pokémon to drop its held item.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 654,
    "name": "item-urge",
    "category": "miracle-shooter",
    "cost": 0,
    "effect": "Used on a party Pokémon in battle\n:   Selects another friendly Pokémon at random.  If that Pokémon is holding an item normally activated by some condition—i.e., not continuous and passive—its effect is forcibly activated.\n\nThis item can only be obtained or used via the Wonder Launcher.",
    "short_effect": "Forcibly activates a friendly Pokémon’s held item.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 655,
    "name": "reset-urge",
    "category": "miracle-shooter",
    "cost": 0,
    "effect": "Used on a party Pokémon in battle\n:   Selects another friendly Pokémon at random.  Removes all of that Pokémon’s stat changes.\n\nThis item can only be obtained or used via the Wonder Launcher.",
    "short_effect": "Resets a friendly Pokémon’s stat changes.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 656,
    "name": "dire-hit-3",
    "category": "miracle-shooter",
    "cost": 0,
    "effect": "Used on a party Pokémon in battle\n:   Raises the target’s critical hit rate by three stages.\nThis item can only be obtained or used via the Wonder Launcher.",
    "short_effect": "Raises critical hit rate by three stages in battle.  Wonder Launcher only.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 657,
    "name": "light-stone",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Summons reshiram for the final battle against N.",
    "short_effect": "Summons Reshiram for the final battle against N.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 658,
    "name": "dark-stone",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Summons zekrom for the final battle against N.",
    "short_effect": "Summons Zekrom for the final battle against N.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 659,
    "name": "tm93",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches wild charge to a compatible Pokémon.",
    "short_effect": "Teaches Wild Charge to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 660,
    "name": "tm94",
    "category": "all-machines",
    "cost": 10000,
    "effect": "Teaches rock smash to a compatible Pokémon.",
    "short_effect": "Teaches Rock Smash to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 661,
    "name": "tm95",
    "category": "all-machines",
    "cost": 1000,
    "effect": "Teaches snarl to a compatible Pokémon.",
    "short_effect": "Teaches Snarl to a compatible Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 662,
    "name": "xtransceiver",
    "category": "gameplay",
    "cost": 0,
    "effect": "Makes four-way video calls.  Used for plot advancement in-game, but also works with other players via the C-Gear.",
    "short_effect": "Makes four-way video calls.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 663,
    "name": "god-stone",
    "category": "unused",
    "cost": 0,
    "effect": "Unknown.  Currently unused.",
    "short_effect": "Unknown.  Currently unused.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 664,
    "name": "gram-1",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Give to the wingull on unova route 13, along with gram 2 and gram 3, to receive tm89.",
    "short_effect": "Part of a sidequest to obtain tm89.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 665,
    "name": "gram-2",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Give to the wingull on unova route 13, along with gram 1 and gram 3, to receive tm89.",
    "short_effect": "Part of a sidequest to obtain tm89.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 666,
    "name": "gram-3",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "Give to the wingull on unova route 13, along with gram 1 and gram 2, to receive tm89.",
    "short_effect": "Part of a sidequest to obtain tm89.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 668,
    "name": "dragon-gem",
    "category": "jewels",
    "cost": 200,
    "effect": "Held\n:   When the holder uses a damaging dragon-type move, the move has 1.5× power and this item is consumed.",
    "short_effect": "Held: When the holder uses a damaging dragon-type move, the move has 1.5× power and this item is consumed.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 669,
    "name": "normal-gem",
    "category": "jewels",
    "cost": 4000,
    "effect": "Held\n:   When the holder uses a damaging normal-type move, the move has 1.5× power and this item is consumed.",
    "short_effect": "Held: When the holder uses a damaging normal-type move, the move has 1.5× power and this item is consumed.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 670,
    "name": "medal-box",
    "category": "gameplay",
    "cost": 0,
    "effect": "",
    "short_effect": "Holds medals recieved in the medal rally.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 671,
    "name": "dna-splicers",
    "category": "gameplay",
    "cost": 0,
    "effect": "",
    "short_effect": "Fuses Kyurem with Reshiram or Zekrom, or splits them apart again.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 673,
    "name": "permit",
    "category": "gameplay",
    "cost": 0,
    "effect": "",
    "short_effect": "Grants access to the Nature Preserve.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 674,
    "name": "oval-charm",
    "category": "gameplay",
    "cost": 0,
    "effect": "",
    "short_effect": "Doubles the chance of two Pokémon producing an egg at the daycare every 255 steps.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 675,
    "name": "shiny-charm",
    "category": "gameplay",
    "cost": 0,
    "effect": "",
    "short_effect": "Raises the chance of finding a shiny Pokémon.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 676,
    "name": "plasma-card",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "",
    "short_effect": "Required to progress in the Plasma Frigate.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 677,
    "name": "grubby-hanky",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "",
    "short_effect": "Appears in the Café Warehouse on Sunday; return to the customer with a Patrat on Thursday.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 678,
    "name": "colress-machine",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "",
    "short_effect": "Wakes up the Crustle blocking the way in Seaside Cave.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 679,
    "name": "dropped-item",
    "category": "plot-advancement",
    "cost": 0,
    "effect": "",
    "short_effect": "Returned to Curtis or Yancy as part of a sidequest.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  },
  {
    "id": 681,
    "name": "reveal-glass",
    "category": "gameplay",
    "cost": 0,
    "effect": "",
    "short_effect": "Switches Tornadus, Thundurus, and Landorus between Incarnate and Therian Forme.",
    "attributes": [],
    "fling_power": null,
    "fling_effect": null
  }
];
