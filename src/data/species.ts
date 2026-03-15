// Pokemon species data — Gen 1–5 (649 species)
import type { PokemonSpecies } from '../types';

export const SPECIES: PokemonSpecies[] = [
  {
    "id": 1,
    "name": "bulbasaur",
    "genus": "Seed Pokémon",
    "flavor_text": "While it is young, it uses the nutrients that are stored in the seed on its back in order to grow.",
    "generation": "generation-i",
    "color": "green",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "monster",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 1,
    "evolves_from": null,
    "varieties": [
      "bulbasaur"
    ]
  },
  {
    "id": 2,
    "name": "ivysaur",
    "genus": "Seed Pokémon",
    "flavor_text": "Exposure to sunlight adds to its strength. Sunlight also makes the bud on its back grow larger.",
    "generation": "generation-i",
    "color": "green",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "monster",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 1,
    "evolves_from": "bulbasaur",
    "varieties": [
      "ivysaur"
    ]
  },
  {
    "id": 3,
    "name": "venusaur",
    "genus": "Seed Pokémon",
    "flavor_text": "A bewitching aroma wafts from its flower. The fragrance becalms those engaged in a battle.",
    "generation": "generation-i",
    "color": "green",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "monster",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 1,
    "evolves_from": "ivysaur",
    "varieties": [
      "venusaur",
      "venusaur-mega",
      "venusaur-gmax"
    ]
  },
  {
    "id": 4,
    "name": "charmander",
    "genus": "Lizard Pokémon",
    "flavor_text": "From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out.",
    "generation": "generation-i",
    "color": "red",
    "shape": "upright",
    "habitat": "mountain",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "monster",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 2,
    "evolves_from": null,
    "varieties": [
      "charmander"
    ]
  },
  {
    "id": 5,
    "name": "charmeleon",
    "genus": "Flame Pokémon",
    "flavor_text": "If it becomes agitated during battle, it spouts intense flames, incinerating its surroundings.",
    "generation": "generation-i",
    "color": "red",
    "shape": "upright",
    "habitat": "mountain",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "monster",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 2,
    "evolves_from": "charmander",
    "varieties": [
      "charmeleon"
    ]
  },
  {
    "id": 6,
    "name": "charizard",
    "genus": "Flame Pokémon",
    "flavor_text": "Its wings can carry this Pokémon close to an altitude of 4,600 feet. It blows out fire at very high temperatures.",
    "generation": "generation-i",
    "color": "red",
    "shape": "upright",
    "habitat": "mountain",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "monster",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 2,
    "evolves_from": "charmeleon",
    "varieties": [
      "charizard",
      "charizard-mega-x",
      "charizard-mega-y",
      "charizard-gmax"
    ]
  },
  {
    "id": 7,
    "name": "squirtle",
    "genus": "Tiny Turtle Pokémon",
    "flavor_text": "When it feels threatened, it draws its limbs inside its shell and sprays water from its mouth.",
    "generation": "generation-i",
    "color": "blue",
    "shape": "upright",
    "habitat": "waters-edge",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "monster",
      "water1"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 3,
    "evolves_from": null,
    "varieties": [
      "squirtle"
    ]
  },
  {
    "id": 8,
    "name": "wartortle",
    "genus": "Turtle Pokémon",
    "flavor_text": "It cleverly controls its furry ears and tail to maintain its balance while swimming.",
    "generation": "generation-i",
    "color": "blue",
    "shape": "upright",
    "habitat": "waters-edge",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "monster",
      "water1"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 3,
    "evolves_from": "squirtle",
    "varieties": [
      "wartortle"
    ]
  },
  {
    "id": 9,
    "name": "blastoise",
    "genus": "Shellfish Pokémon",
    "flavor_text": "The rocket cannons on its shell fire jets of water capable of punching holes through thick steel.",
    "generation": "generation-i",
    "color": "blue",
    "shape": "upright",
    "habitat": "waters-edge",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "monster",
      "water1"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 3,
    "evolves_from": "wartortle",
    "varieties": [
      "blastoise",
      "blastoise-mega",
      "blastoise-gmax"
    ]
  },
  {
    "id": 10,
    "name": "caterpie",
    "genus": "Worm Pokémon",
    "flavor_text": "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.",
    "generation": "generation-i",
    "color": "green",
    "shape": "armor",
    "habitat": "forest",
    "growth_rate": "medium",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 4,
    "evolves_from": null,
    "varieties": [
      "caterpie"
    ]
  },
  {
    "id": 11,
    "name": "metapod",
    "genus": "Cocoon Pokémon",
    "flavor_text": "Even though it is encased in a sturdy shell, the body inside is tender. It can’t withstand a harsh attack.",
    "generation": "generation-i",
    "color": "green",
    "shape": "squiggle",
    "habitat": "forest",
    "growth_rate": "medium",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 4,
    "evolves_from": "caterpie",
    "varieties": [
      "metapod"
    ]
  },
  {
    "id": 12,
    "name": "butterfree",
    "genus": "Butterfly Pokémon",
    "flavor_text": "It collects honey every day. It rubs honey onto the hairs on its legs to carry it back to its nest.",
    "generation": "generation-i",
    "color": "white",
    "shape": "bug-wings",
    "habitat": "forest",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 4,
    "evolves_from": "metapod",
    "varieties": [
      "butterfree",
      "butterfree-gmax"
    ]
  },
  {
    "id": 13,
    "name": "weedle",
    "genus": "Hairy Bug Pokémon",
    "flavor_text": "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "armor",
    "habitat": "forest",
    "growth_rate": "medium",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 5,
    "evolves_from": null,
    "varieties": [
      "weedle"
    ]
  },
  {
    "id": 14,
    "name": "kakuna",
    "genus": "Cocoon Pokémon",
    "flavor_text": "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.",
    "generation": "generation-i",
    "color": "yellow",
    "shape": "squiggle",
    "habitat": "forest",
    "growth_rate": "medium",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 5,
    "evolves_from": "weedle",
    "varieties": [
      "kakuna"
    ]
  },
  {
    "id": 15,
    "name": "beedrill",
    "genus": "Poison Bee Pokémon",
    "flavor_text": "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
    "generation": "generation-i",
    "color": "yellow",
    "shape": "bug-wings",
    "habitat": "forest",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 5,
    "evolves_from": "kakuna",
    "varieties": [
      "beedrill",
      "beedrill-mega"
    ]
  },
  {
    "id": 16,
    "name": "pidgey",
    "genus": "Tiny Bird Pokémon",
    "flavor_text": "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "wings",
    "habitat": "forest",
    "growth_rate": "medium-slow",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 6,
    "evolves_from": null,
    "varieties": [
      "pidgey"
    ]
  },
  {
    "id": 17,
    "name": "pidgeotto",
    "genus": "Bird Pokémon",
    "flavor_text": "This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "wings",
    "habitat": "forest",
    "growth_rate": "medium-slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 6,
    "evolves_from": "pidgey",
    "varieties": [
      "pidgeotto"
    ]
  },
  {
    "id": 18,
    "name": "pidgeot",
    "genus": "Bird Pokémon",
    "flavor_text": "This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "wings",
    "habitat": "forest",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 6,
    "evolves_from": "pidgeotto",
    "varieties": [
      "pidgeot",
      "pidgeot-mega"
    ]
  },
  {
    "id": 19,
    "name": "rattata",
    "genus": "Mouse Pokémon",
    "flavor_text": "Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.",
    "generation": "generation-i",
    "color": "purple",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 7,
    "evolves_from": null,
    "varieties": [
      "rattata",
      "rattata-alola"
    ]
  },
  {
    "id": 20,
    "name": "raticate",
    "genus": "Mouse Pokémon",
    "flavor_text": "Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 127,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 7,
    "evolves_from": "rattata",
    "varieties": [
      "raticate",
      "raticate-alola",
      "raticate-totem-alola"
    ]
  },
  {
    "id": 21,
    "name": "spearow",
    "genus": "Tiny Bird Pokémon",
    "flavor_text": "Inept at flying high. However, it can fly around very fast to protect its territory.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "wings",
    "habitat": "rough-terrain",
    "growth_rate": "medium",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 8,
    "evolves_from": null,
    "varieties": [
      "spearow"
    ]
  },
  {
    "id": 22,
    "name": "fearow",
    "genus": "Beak Pokémon",
    "flavor_text": "A Pokémon that dates back many years. If it senses danger, it flies high and away, instantly.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "wings",
    "habitat": "rough-terrain",
    "growth_rate": "medium",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 8,
    "evolves_from": "spearow",
    "varieties": [
      "fearow"
    ]
  },
  {
    "id": 23,
    "name": "ekans",
    "genus": "Snake Pokémon",
    "flavor_text": "The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest.",
    "generation": "generation-i",
    "color": "purple",
    "shape": "squiggle",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 9,
    "evolves_from": null,
    "varieties": [
      "ekans"
    ]
  },
  {
    "id": 24,
    "name": "arbok",
    "genus": "Cobra Pokémon",
    "flavor_text": "The frightening patterns on its belly have been studied. Six variations have been confirmed.",
    "generation": "generation-i",
    "color": "purple",
    "shape": "squiggle",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 9,
    "evolves_from": "ekans",
    "varieties": [
      "arbok"
    ]
  },
  {
    "id": 25,
    "name": "pikachu",
    "genus": "Mouse Pokémon",
    "flavor_text": "Possesses cheek sacs in which it stores electricity. This clever forest-dweller roasts tough berries with an electric shock before consuming them.",
    "generation": "generation-i",
    "color": "yellow",
    "shape": "quadruped",
    "habitat": "forest",
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 10,
    "gender_rate": 4,
    "egg_groups": [
      "ground",
      "fairy"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 10,
    "evolves_from": "pichu",
    "varieties": [
      "pikachu",
      "pikachu-rock-star",
      "pikachu-belle",
      "pikachu-pop-star",
      "pikachu-phd",
      "pikachu-libre",
      "pikachu-cosplay",
      "pikachu-original-cap",
      "pikachu-hoenn-cap",
      "pikachu-sinnoh-cap",
      "pikachu-unova-cap",
      "pikachu-kalos-cap",
      "pikachu-alola-cap",
      "pikachu-partner-cap",
      "pikachu-starter",
      "pikachu-world-cap",
      "pikachu-gmax"
    ]
  },
  {
    "id": 26,
    "name": "raichu",
    "genus": "Mouse Pokémon",
    "flavor_text": "It can discharge bursts of electricity exceeding 100,000 volts— a single strike with that amount of power would incapacitate one of the Copperajah of my homeland.",
    "generation": "generation-i",
    "color": "yellow",
    "shape": "upright",
    "habitat": "forest",
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 10,
    "gender_rate": 4,
    "egg_groups": [
      "ground",
      "fairy"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 10,
    "evolves_from": "pikachu",
    "varieties": [
      "raichu",
      "raichu-alola",
      "raichu-mega-x",
      "raichu-mega-y"
    ]
  },
  {
    "id": 27,
    "name": "sandshrew",
    "genus": "Mouse Pokémon",
    "flavor_text": "It burrows into the ground to create its nest. If hard stones impede its tunneling, it uses its sharp claws to shatter them and then carries on digging.",
    "generation": "generation-i",
    "color": "yellow",
    "shape": "upright",
    "habitat": "rough-terrain",
    "growth_rate": "medium",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 11,
    "evolves_from": null,
    "varieties": [
      "sandshrew",
      "sandshrew-alola"
    ]
  },
  {
    "id": 28,
    "name": "sandslash",
    "genus": "Mouse Pokémon",
    "flavor_text": "It climbs trees by hooking on with its sharp claws. Sandslash shares the berries it gathers, dropping them down to Sandshrew waiting below the tree.",
    "generation": "generation-i",
    "color": "yellow",
    "shape": "upright",
    "habitat": "rough-terrain",
    "growth_rate": "medium",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 11,
    "evolves_from": "sandshrew",
    "varieties": [
      "sandslash",
      "sandslash-alola"
    ]
  },
  {
    "id": 29,
    "name": "nidoran-f",
    "genus": "Poison Pin Pokémon",
    "flavor_text": "It uses its hard incisor teeth to crush and eat berries. The tip of a female Nidoran’s horn is a bit more rounded than the tip of a male’s horn.",
    "generation": "generation-i",
    "color": "blue",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 235,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 8,
    "egg_groups": [
      "monster",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 12,
    "evolves_from": null,
    "varieties": [
      "nidoran-f"
    ]
  },
  {
    "id": 30,
    "name": "nidorina",
    "genus": "Poison Pin Pokémon",
    "flavor_text": "If the group is threatened, these Pokémon will band together to assault enemies with a chorus of ultrasonic waves.",
    "generation": "generation-i",
    "color": "blue",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 8,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 12,
    "evolves_from": "nidoran-f",
    "varieties": [
      "nidorina"
    ]
  },
  {
    "id": 31,
    "name": "nidoqueen",
    "genus": "Drill Pokémon",
    "flavor_text": "It pacifies offspring by placing them in the gaps between the spines on its back. The spines will never secrete poison while young are present.",
    "generation": "generation-i",
    "color": "blue",
    "shape": "upright",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 8,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 12,
    "evolves_from": "nidorina",
    "varieties": [
      "nidoqueen"
    ]
  },
  {
    "id": 32,
    "name": "nidoran-m",
    "genus": "Poison Pin Pokémon",
    "flavor_text": "Small but brave, this Pokémon will hold its ground and even risk its life in battle to protect the female it’s friendly with.",
    "generation": "generation-i",
    "color": "purple",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 235,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 0,
    "egg_groups": [
      "monster",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 13,
    "evolves_from": null,
    "varieties": [
      "nidoran-m"
    ]
  },
  {
    "id": 33,
    "name": "nidorino",
    "genus": "Poison Pin Pokémon",
    "flavor_text": "It’s nervous and quick to act aggressively. The potency of its poison increases along with the level of adrenaline present in its body.",
    "generation": "generation-i",
    "color": "purple",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 0,
    "egg_groups": [
      "monster",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 13,
    "evolves_from": "nidoran-m",
    "varieties": [
      "nidorino"
    ]
  },
  {
    "id": 34,
    "name": "nidoking",
    "genus": "Drill Pokémon",
    "flavor_text": "Nidoking prides itself on its strength. It’s forceful and spirited in battle, making use of its thick tail and diamond-crushing horn.",
    "generation": "generation-i",
    "color": "purple",
    "shape": "upright",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 0,
    "egg_groups": [
      "monster",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 13,
    "evolves_from": "nidorino",
    "varieties": [
      "nidoking"
    ]
  },
  {
    "id": 35,
    "name": "clefairy",
    "genus": "Fairy Pokémon",
    "flavor_text": "It can be found in quiet mountain areas on a full moon's night. Its dancing and its tiny, faintly glowing wings confer upon it a lovely fairylike quality.",
    "generation": "generation-i",
    "color": "pink",
    "shape": "upright",
    "habitat": "mountain",
    "growth_rate": "fast",
    "capture_rate": 150,
    "base_happiness": 140,
    "hatch_counter": 10,
    "gender_rate": 6,
    "egg_groups": [
      "fairy"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 14,
    "evolves_from": "cleffa",
    "varieties": [
      "clefairy"
    ]
  },
  {
    "id": 36,
    "name": "clefable",
    "genus": "Fairy Pokémon",
    "flavor_text": "Legend says that on clear, quiet nights, it listens for the voices of its kin living on the moon. I, too, often think of my homeland, so far away.",
    "generation": "generation-i",
    "color": "pink",
    "shape": "upright",
    "habitat": "mountain",
    "growth_rate": "fast",
    "capture_rate": 25,
    "base_happiness": 140,
    "hatch_counter": 10,
    "gender_rate": 6,
    "egg_groups": [
      "fairy"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 14,
    "evolves_from": "clefairy",
    "varieties": [
      "clefable",
      "clefable-mega"
    ]
  },
  {
    "id": 37,
    "name": "vulpix",
    "genus": "Fox Pokémon",
    "flavor_text": "In its belly burns a fire, which Vulpix spits out in the form of fireballs. When young, this Pokémon has but one white tail. As the Pokémon matures, this single tail splits into six.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 6,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 15,
    "evolves_from": null,
    "varieties": [
      "vulpix",
      "vulpix-alola"
    ]
  },
  {
    "id": 38,
    "name": "ninetales",
    "genus": "Fox Pokémon",
    "flavor_text": "The coat of gleaming golden fur is quite magnificent. This species is said to store sacred power in its nine long tails and to live for a millennium.",
    "generation": "generation-i",
    "color": "yellow",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 6,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 15,
    "evolves_from": "vulpix",
    "varieties": [
      "ninetales",
      "ninetales-alola"
    ]
  },
  {
    "id": 39,
    "name": "jigglypuff",
    "genus": "Balloon Pokémon",
    "flavor_text": "By freely changing the wavelength of its voice, Jigglypuff sings a mysterious melody sure to make any listener sleepy.",
    "generation": "generation-i",
    "color": "pink",
    "shape": "humanoid",
    "habitat": "grassland",
    "growth_rate": "fast",
    "capture_rate": 170,
    "base_happiness": 70,
    "hatch_counter": 10,
    "gender_rate": 6,
    "egg_groups": [
      "fairy"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 16,
    "evolves_from": "igglybuff",
    "varieties": [
      "jigglypuff"
    ]
  },
  {
    "id": 40,
    "name": "wigglytuff",
    "genus": "Balloon Pokémon",
    "flavor_text": "It’s proud of its fur, which is fine and delicate. In particular, the curl on its forehead has a texture that’s perfectly heavenly.",
    "generation": "generation-i",
    "color": "pink",
    "shape": "humanoid",
    "habitat": "grassland",
    "growth_rate": "fast",
    "capture_rate": 50,
    "base_happiness": 70,
    "hatch_counter": 10,
    "gender_rate": 6,
    "egg_groups": [
      "fairy"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 16,
    "evolves_from": "jigglypuff",
    "varieties": [
      "wigglytuff"
    ]
  },
  {
    "id": 41,
    "name": "zubat",
    "genus": "Bat Pokémon",
    "flavor_text": "Makes its home in gloomy caves. Atrophied eyes have left this Pokémon blind, so it scans its surroundings via sound waves that it emits from its mouth as it flies.",
    "generation": "generation-i",
    "color": "purple",
    "shape": "wings",
    "habitat": "cave",
    "growth_rate": "medium",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 17,
    "evolves_from": null,
    "varieties": [
      "zubat"
    ]
  },
  {
    "id": 42,
    "name": "golbat",
    "genus": "Bat Pokémon",
    "flavor_text": "It sinks its sharp fangs into other creatures and slurps up their blood. A closer look at the fangs reveals that they are hollow and akin to straws.",
    "generation": "generation-i",
    "color": "purple",
    "shape": "wings",
    "habitat": "cave",
    "growth_rate": "medium",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 17,
    "evolves_from": "zubat",
    "varieties": [
      "golbat"
    ]
  },
  {
    "id": 43,
    "name": "oddish",
    "genus": "Weed Pokémon",
    "flavor_text": "During the day, it stays in the cold underground to avoid the sun. It grows by bathing in moonlight.",
    "generation": "generation-i",
    "color": "blue",
    "shape": "legs",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 18,
    "evolves_from": null,
    "varieties": [
      "oddish"
    ]
  },
  {
    "id": 44,
    "name": "gloom",
    "genus": "Weed Pokémon",
    "flavor_text": "What appears to be drool is actually sweet honey. It is very sticky and clings stubbornly if touched.",
    "generation": "generation-i",
    "color": "blue",
    "shape": "humanoid",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 18,
    "evolves_from": "oddish",
    "varieties": [
      "gloom"
    ]
  },
  {
    "id": 45,
    "name": "vileplume",
    "genus": "Flower Pokémon",
    "flavor_text": "The larger its petals, the more toxic pollen it contains. Its big head is heavy and hard to hold up.",
    "generation": "generation-i",
    "color": "red",
    "shape": "humanoid",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 18,
    "evolves_from": "gloom",
    "varieties": [
      "vileplume"
    ]
  },
  {
    "id": 46,
    "name": "paras",
    "genus": "Mushroom Pokémon",
    "flavor_text": "Sometimes seen at the foot of trees in humid forests. The mushrooms on its back—called tochukaso—are not present on infant specimens and instead emerge as Paras matures.",
    "generation": "generation-i",
    "color": "red",
    "shape": "armor",
    "habitat": "forest",
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "bug",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 19,
    "evolves_from": null,
    "varieties": [
      "paras"
    ]
  },
  {
    "id": 47,
    "name": "parasect",
    "genus": "Mushroom Pokémon",
    "flavor_text": "Mushroom-lacking specimens of this Pokémon lie unmoving in the forest, lending credence to the hypothesis that the large mushroom is in control of Parasect's actions.",
    "generation": "generation-i",
    "color": "red",
    "shape": "armor",
    "habitat": "forest",
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "bug",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 19,
    "evolves_from": "paras",
    "varieties": [
      "parasect"
    ]
  },
  {
    "id": 48,
    "name": "venonat",
    "genus": "Insect Pokémon",
    "flavor_text": "Its large eyes act as radar. In a bright place, you can see that they are clusters of many tiny eyes.",
    "generation": "generation-i",
    "color": "purple",
    "shape": "humanoid",
    "habitat": "forest",
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 20,
    "evolves_from": null,
    "varieties": [
      "venonat"
    ]
  },
  {
    "id": 49,
    "name": "venomoth",
    "genus": "Poison Moth Pokémon",
    "flavor_text": "The powdery scales on its wings are hard to remove from skin. They also contain poison that leaks out on contact.",
    "generation": "generation-i",
    "color": "purple",
    "shape": "bug-wings",
    "habitat": "forest",
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 20,
    "evolves_from": "venonat",
    "varieties": [
      "venomoth"
    ]
  },
  {
    "id": 50,
    "name": "diglett",
    "genus": "Mole Pokémon",
    "flavor_text": "It burrows through the ground at a shallow depth. It leaves raised earth in its wake, making it easy to spot.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "blob",
    "habitat": "cave",
    "growth_rate": "medium",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 21,
    "evolves_from": null,
    "varieties": [
      "diglett",
      "diglett-alola"
    ]
  },
  {
    "id": 51,
    "name": "dugtrio",
    "genus": "Mole Pokémon",
    "flavor_text": "These Diglett triplets dig over 60 miles below sea level. No one knows what it’s like underground.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "heads",
    "habitat": "cave",
    "growth_rate": "medium",
    "capture_rate": 50,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 21,
    "evolves_from": "diglett",
    "varieties": [
      "dugtrio",
      "dugtrio-alola"
    ]
  },
  {
    "id": 52,
    "name": "meowth",
    "genus": "Scratch Cat Pokémon",
    "flavor_text": "It loves to collect shiny things. If it’s in a good mood, it might even let its Trainer have a look at its hoard of treasures.",
    "generation": "generation-i",
    "color": "yellow",
    "shape": "quadruped",
    "habitat": "urban",
    "growth_rate": "medium",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 22,
    "evolves_from": null,
    "varieties": [
      "meowth",
      "meowth-alola",
      "meowth-galar",
      "meowth-gmax"
    ]
  },
  {
    "id": 53,
    "name": "persian",
    "genus": "Classy Cat Pokémon",
    "flavor_text": "Its elegant and refined behavior clashes with that of the barbaric Perrserker. The relationship between the two is one of mutual disdain.",
    "generation": "generation-i",
    "color": "yellow",
    "shape": "quadruped",
    "habitat": "urban",
    "growth_rate": "medium",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 22,
    "evolves_from": "meowth",
    "varieties": [
      "persian",
      "persian-alola"
    ]
  },
  {
    "id": 54,
    "name": "psyduck",
    "genus": "Duck Pokémon",
    "flavor_text": "Suffers perpetual headaches. If the agony grows too great, Psyduck's latent power erupts, contrary to Psyduck's intent. Ergo, I am exploring ways to ease the pain.",
    "generation": "generation-i",
    "color": "yellow",
    "shape": "upright",
    "habitat": "waters-edge",
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 23,
    "evolves_from": null,
    "varieties": [
      "psyduck"
    ]
  },
  {
    "id": 55,
    "name": "golduck",
    "genus": "Duck Pokémon",
    "flavor_text": "Its body is strong, and it has webbing on its hands and feet. Golduck can swim easily through rough seas, clawing its way through the high waves.",
    "generation": "generation-i",
    "color": "blue",
    "shape": "upright",
    "habitat": "waters-edge",
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 23,
    "evolves_from": "psyduck",
    "varieties": [
      "golduck"
    ]
  },
  {
    "id": 56,
    "name": "mankey",
    "genus": "Pig Monkey Pokémon",
    "flavor_text": "An agile Pokémon that lives in trees. It angers easily and will not hesitate to attack anything.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "upright",
    "habitat": "mountain",
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 24,
    "evolves_from": null,
    "varieties": [
      "mankey"
    ]
  },
  {
    "id": 57,
    "name": "primeape",
    "genus": "Pig Monkey Pokémon",
    "flavor_text": "It stops being angry only when nobody else is around. To view this moment is very difficult.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "upright",
    "habitat": "mountain",
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 24,
    "evolves_from": "mankey",
    "varieties": [
      "primeape"
    ]
  },
  {
    "id": 58,
    "name": "growlithe",
    "genus": "Puppy Pokémon",
    "flavor_text": "They patrol their territory in pairs. I believe the igneous rock components in the fur of this species are the result of volcanic activity in its habitat.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "slow",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 2,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 25,
    "evolves_from": null,
    "varieties": [
      "growlithe",
      "growlithe-hisui"
    ]
  },
  {
    "id": 59,
    "name": "arcanine",
    "genus": "Legendary Pokémon",
    "flavor_text": "Snaps at its foes with fangs cloaked in blazing flame. Despite its bulk, it deftly feints every which way, leading opponents on a deceptively merry chase as it all but dances around them.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "slow",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 2,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 25,
    "evolves_from": "growlithe",
    "varieties": [
      "arcanine",
      "arcanine-hisui"
    ]
  },
  {
    "id": 60,
    "name": "poliwag",
    "genus": "Tadpole Pokémon",
    "flavor_text": "In rivers with fast-flowing water, this Pokémon will cling to a rock by using its thick lips, which act like a suction cup.",
    "generation": "generation-i",
    "color": "blue",
    "shape": "legs",
    "habitat": "waters-edge",
    "growth_rate": "medium-slow",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 26,
    "evolves_from": null,
    "varieties": [
      "poliwag"
    ]
  },
  {
    "id": 61,
    "name": "poliwhirl",
    "genus": "Tadpole Pokémon",
    "flavor_text": "This Pokémon’s sweat is a slimy mucus. When captured, Poliwhirl can slither from its enemies’ grasp and escape.",
    "generation": "generation-i",
    "color": "blue",
    "shape": "humanoid",
    "habitat": "waters-edge",
    "growth_rate": "medium-slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 26,
    "evolves_from": "poliwag",
    "varieties": [
      "poliwhirl"
    ]
  },
  {
    "id": 62,
    "name": "poliwrath",
    "genus": "Tadpole Pokémon",
    "flavor_text": "Poliwrath is skilled at both swimming and martial arts. It uses its well-trained arms to dish out powerful punches.",
    "generation": "generation-i",
    "color": "blue",
    "shape": "humanoid",
    "habitat": "waters-edge",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 26,
    "evolves_from": "poliwhirl",
    "varieties": [
      "poliwrath"
    ]
  },
  {
    "id": 63,
    "name": "abra",
    "genus": "Psi Pokémon",
    "flavor_text": "Spends 18 hours of the day sleeping. Even while asleep, Abra can control its psychic powers—should danger approach, the Pokémon will simply teleport away.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "upright",
    "habitat": "urban",
    "growth_rate": "medium-slow",
    "capture_rate": 200,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 2,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 27,
    "evolves_from": null,
    "varieties": [
      "abra"
    ]
  },
  {
    "id": 64,
    "name": "kadabra",
    "genus": "Psi Pokémon",
    "flavor_text": "There are rumors that a child with mystical powers became a Kadabra; however, this remains unverified. I suspect that the spoon Kadabra holds enhances its brain waves.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "upright",
    "habitat": "urban",
    "growth_rate": "medium-slow",
    "capture_rate": 100,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 2,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 27,
    "evolves_from": "abra",
    "varieties": [
      "kadabra"
    ]
  },
  {
    "id": 65,
    "name": "alakazam",
    "genus": "Psi Pokémon",
    "flavor_text": "The longer Alakazam lives, the larger and heavier its head becomes. Our tests have shown that the strength of its psychic powers correlates positively to the weight of its head.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "humanoid",
    "habitat": "urban",
    "growth_rate": "medium-slow",
    "capture_rate": 50,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 2,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 27,
    "evolves_from": "kadabra",
    "varieties": [
      "alakazam",
      "alakazam-mega"
    ]
  },
  {
    "id": 66,
    "name": "machop",
    "genus": "Superpower Pokémon",
    "flavor_text": "Though as small as a child, it has strength enough to easily throw a well-built adult. Striving to become ever stronger, Machop trains by carrying a Graveler on its shoulders.",
    "generation": "generation-i",
    "color": "gray",
    "shape": "upright",
    "habitat": "mountain",
    "growth_rate": "medium-slow",
    "capture_rate": 180,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 2,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 28,
    "evolves_from": null,
    "varieties": [
      "machop"
    ]
  },
  {
    "id": 67,
    "name": "machoke",
    "genus": "Superpower Pokémon",
    "flavor_text": "A sturdy creature boasting a robust physique and boundless stamina. Loves training above all else and voluntarily assists with tasks such as construction and clearing land.",
    "generation": "generation-i",
    "color": "gray",
    "shape": "humanoid",
    "habitat": "mountain",
    "growth_rate": "medium-slow",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 2,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 28,
    "evolves_from": "machop",
    "varieties": [
      "machoke"
    ]
  },
  {
    "id": 68,
    "name": "machamp",
    "genus": "Superpower Pokémon",
    "flavor_text": "In close combat, its four arms afford it offensive and defensive supremacy. In but a blink, this valiant Pokémon can overwhelm its foes with more than 1,000 blows from its fists.",
    "generation": "generation-i",
    "color": "gray",
    "shape": "humanoid",
    "habitat": "mountain",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 2,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 28,
    "evolves_from": "machoke",
    "varieties": [
      "machamp",
      "machamp-gmax"
    ]
  },
  {
    "id": 69,
    "name": "bellsprout",
    "genus": "Flower Pokémon",
    "flavor_text": "Prefers hot and humid places. It ensnares tiny bugs with its vines and devours them.",
    "generation": "generation-i",
    "color": "green",
    "shape": "humanoid",
    "habitat": "forest",
    "growth_rate": "medium-slow",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 29,
    "evolves_from": null,
    "varieties": [
      "bellsprout"
    ]
  },
  {
    "id": 70,
    "name": "weepinbell",
    "genus": "Flycatcher Pokémon",
    "flavor_text": "When hungry, it swallows anything that moves. Its hapless prey is dissolved by strong acids.",
    "generation": "generation-i",
    "color": "green",
    "shape": "blob",
    "habitat": "forest",
    "growth_rate": "medium-slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 29,
    "evolves_from": "bellsprout",
    "varieties": [
      "weepinbell"
    ]
  },
  {
    "id": 71,
    "name": "victreebel",
    "genus": "Flycatcher Pokémon",
    "flavor_text": "Lures prey with the sweet aroma of honey. Swallowed whole, the prey is dissolved in a day, bones and all.",
    "generation": "generation-i",
    "color": "green",
    "shape": "blob",
    "habitat": "forest",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 29,
    "evolves_from": "weepinbell",
    "varieties": [
      "victreebel",
      "victreebel-mega"
    ]
  },
  {
    "id": 72,
    "name": "tentacool",
    "genus": "Jellyfish Pokémon",
    "flavor_text": "They fire beams from the glassy, magenta orbs that resemble eyes atop their heads, and they drift in shallow seas. During low tide, they can sometimes be found on beaches, desiccated.",
    "generation": "generation-i",
    "color": "blue",
    "shape": "tentacles",
    "habitat": "sea",
    "growth_rate": "slow",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water3"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 30,
    "evolves_from": null,
    "varieties": [
      "tentacool"
    ]
  },
  {
    "id": 73,
    "name": "tentacruel",
    "genus": "Jellyfish Pokémon",
    "flavor_text": "It has 80 tentacles, each with a venomous tip. These tentacles are also extendible, lengthening when Tentacruel attempts to catch prey. Use caution.",
    "generation": "generation-i",
    "color": "blue",
    "shape": "tentacles",
    "habitat": "sea",
    "growth_rate": "slow",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water3"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 30,
    "evolves_from": "tentacool",
    "varieties": [
      "tentacruel"
    ]
  },
  {
    "id": 74,
    "name": "geodude",
    "genus": "Rock Pokémon",
    "flavor_text": "Makes its home in mountainous regions, using its arms to climb along harsh mountain roads. Can be troublesome—carelessly kicking one will cause it to fly into a rage and chase after you.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "arms",
    "habitat": "mountain",
    "growth_rate": "medium-slow",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 31,
    "evolves_from": null,
    "varieties": [
      "geodude",
      "geodude-alola"
    ]
  },
  {
    "id": 75,
    "name": "graveler",
    "genus": "Rock Pokémon",
    "flavor_text": "Dwells in holes dug into sheer walls of stone. It enjoys rolling down slopes as though it were a boulder during a rockfall, so keep an eye upward while traversing mountain roads.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "humanoid",
    "habitat": "mountain",
    "growth_rate": "medium-slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 31,
    "evolves_from": "geodude",
    "varieties": [
      "graveler",
      "graveler-alola"
    ]
  },
  {
    "id": 76,
    "name": "golem",
    "genus": "Megaton Pokémon",
    "flavor_text": "The rocklike shell is shed each year. The cast-off shell then crumbles, reverting to a mass of soil, which can be spread across fields to promote crop growth.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "humanoid",
    "habitat": "mountain",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 31,
    "evolves_from": "graveler",
    "varieties": [
      "golem",
      "golem-alola"
    ]
  },
  {
    "id": 77,
    "name": "ponyta",
    "genus": "Fire Horse Pokémon",
    "flavor_text": "These Pokémon live in herds out in the grassland. Newborn foals lack their fiery manes, which will develop about an hour after birth.",
    "generation": "generation-i",
    "color": "yellow",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 32,
    "evolves_from": null,
    "varieties": [
      "ponyta",
      "ponyta-galar"
    ]
  },
  {
    "id": 78,
    "name": "rapidash",
    "genus": "Fire Horse Pokémon",
    "flavor_text": "Fiery mane aglow, Rapidash darts like an arrow across the land. This prodigiously swift creature can traverse the vast region of Hisui in a day and a half.",
    "generation": "generation-i",
    "color": "yellow",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 32,
    "evolves_from": "ponyta",
    "varieties": [
      "rapidash",
      "rapidash-galar"
    ]
  },
  {
    "id": 79,
    "name": "slowpoke",
    "genus": "Dopey Pokémon",
    "flavor_text": "When this Pokémon’s tail is soaked in water, sweetness seeps from it. Slowpoke uses this trait to lure in and fish up other Pokémon.",
    "generation": "generation-i",
    "color": "pink",
    "shape": "quadruped",
    "habitat": "waters-edge",
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "monster",
      "water1"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 33,
    "evolves_from": null,
    "varieties": [
      "slowpoke",
      "slowpoke-galar"
    ]
  },
  {
    "id": 80,
    "name": "slowbro",
    "genus": "Hermit Crab Pokémon",
    "flavor_text": "Being bitten by a Shellder shocked this Pokémon into standing on two legs. If the Shellder lets go, it seems Slowbro will turn back into a Slowpoke.",
    "generation": "generation-i",
    "color": "pink",
    "shape": "upright",
    "habitat": "waters-edge",
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "monster",
      "water1"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 33,
    "evolves_from": "slowpoke",
    "varieties": [
      "slowbro",
      "slowbro-mega",
      "slowbro-galar"
    ]
  },
  {
    "id": 81,
    "name": "magnemite",
    "genus": "Magnet Pokémon",
    "flavor_text": "A bizarre Pokémon with but a single eye embedded in an iron sphere. I suspect this creature levitates due to the magnetism it emits from its arms, which resemble horseshoe-shaped magnets.",
    "generation": "generation-i",
    "color": "gray",
    "shape": "arms",
    "habitat": "rough-terrain",
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": -1,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 34,
    "evolves_from": null,
    "varieties": [
      "magnemite"
    ]
  },
  {
    "id": 82,
    "name": "magneton",
    "genus": "Magnet Pokémon",
    "flavor_text": "Three Magnemite gathered to evolve into this Pokémon. The source of much vexation on my part, as its powerful magnetism destroys my research equipment.",
    "generation": "generation-i",
    "color": "gray",
    "shape": "heads",
    "habitat": "rough-terrain",
    "growth_rate": "medium",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": -1,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 34,
    "evolves_from": "magnemite",
    "varieties": [
      "magneton"
    ]
  },
  {
    "id": 83,
    "name": "farfetchd",
    "genus": "Wild Duck Pokémon",
    "flavor_text": "They use a plant stalk as a weapon, but not all of them use it in the same way. Several distinct styles of stalk fighting have been observed.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "wings",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "flying",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 35,
    "evolves_from": null,
    "varieties": [
      "farfetchd",
      "farfetchd-galar"
    ]
  },
  {
    "id": 84,
    "name": "doduo",
    "genus": "Twin Bird Pokémon",
    "flavor_text": "Its short wings make flying difficult. Instead, this Pokémon runs at high speed on developed legs.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "legs",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 36,
    "evolves_from": null,
    "varieties": [
      "doduo"
    ]
  },
  {
    "id": 85,
    "name": "dodrio",
    "genus": "Triple Bird Pokémon",
    "flavor_text": "One of Doduo’s two heads splits to form a unique species. It runs close to 40 mph in prairies.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "legs",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 36,
    "evolves_from": "doduo",
    "varieties": [
      "dodrio"
    ]
  },
  {
    "id": 86,
    "name": "seel",
    "genus": "Sea Lion Pokémon",
    "flavor_text": "Loves freezing-cold conditions. Relishes swimming in a frigid climate of around 14 degrees Fahrenheit.",
    "generation": "generation-i",
    "color": "white",
    "shape": "fish",
    "habitat": "sea",
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 37,
    "evolves_from": null,
    "varieties": [
      "seel"
    ]
  },
  {
    "id": 87,
    "name": "dewgong",
    "genus": "Sea Lion Pokémon",
    "flavor_text": "Its entire body is a snowy white. Unharmed by even intense cold, it swims powerfully in icy waters.",
    "generation": "generation-i",
    "color": "white",
    "shape": "fish",
    "habitat": "sea",
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 37,
    "evolves_from": "seel",
    "varieties": [
      "dewgong"
    ]
  },
  {
    "id": 88,
    "name": "grimer",
    "genus": "Sludge Pokémon",
    "flavor_text": "Made of congealed sludge. It smells too putrid to touch. Even weeds won’t grow in its path.",
    "generation": "generation-i",
    "color": "purple",
    "shape": "arms",
    "habitat": "urban",
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 38,
    "evolves_from": null,
    "varieties": [
      "grimer",
      "grimer-alola"
    ]
  },
  {
    "id": 89,
    "name": "muk",
    "genus": "Sludge Pokémon",
    "flavor_text": "Smells so awful, it can cause fainting. Through degeneration of its nose, it lost its sense of smell.",
    "generation": "generation-i",
    "color": "purple",
    "shape": "arms",
    "habitat": "urban",
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 38,
    "evolves_from": "grimer",
    "varieties": [
      "muk",
      "muk-alola"
    ]
  },
  {
    "id": 90,
    "name": "shellder",
    "genus": "Bivalve Pokémon",
    "flavor_text": "Its hard shell repels any kind of attack. It is vulnerable only when its shell is open.",
    "generation": "generation-i",
    "color": "purple",
    "shape": "ball",
    "habitat": "sea",
    "growth_rate": "slow",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water3"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 39,
    "evolves_from": null,
    "varieties": [
      "shellder"
    ]
  },
  {
    "id": 91,
    "name": "cloyster",
    "genus": "Bivalve Pokémon",
    "flavor_text": "Once it slams its shell shut, it is impossible to open, even by those with superior strength.",
    "generation": "generation-i",
    "color": "purple",
    "shape": "ball",
    "habitat": "sea",
    "growth_rate": "slow",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water3"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 39,
    "evolves_from": "shellder",
    "varieties": [
      "cloyster"
    ]
  },
  {
    "id": 92,
    "name": "gastly",
    "genus": "Gas Pokémon",
    "flavor_text": "Gaseous and completely impalpable. Also highly dangerous— inhaling part of its poisonous body will cause one to faint instantly.",
    "generation": "generation-i",
    "color": "purple",
    "shape": "ball",
    "habitat": "cave",
    "growth_rate": "medium-slow",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 40,
    "evolves_from": null,
    "varieties": [
      "gastly"
    ]
  },
  {
    "id": 93,
    "name": "haunter",
    "genus": "Gas Pokémon",
    "flavor_text": "This frightful, malevolent spirit can glide through walls, appearing wherever it likes. According to rumor, victims of a Haunter's lick will wither to death day by day.",
    "generation": "generation-i",
    "color": "purple",
    "shape": "arms",
    "habitat": "cave",
    "growth_rate": "medium-slow",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 40,
    "evolves_from": "gastly",
    "varieties": [
      "haunter"
    ]
  },
  {
    "id": 94,
    "name": "gengar",
    "genus": "Shadow Pokémon",
    "flavor_text": "Possesses potential victims' shadows in an effort to steal away the victims' lives. If your shadow begins to laugh, you must take hold of a protective charm posthaste!",
    "generation": "generation-i",
    "color": "purple",
    "shape": "upright",
    "habitat": "cave",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 40,
    "evolves_from": "haunter",
    "varieties": [
      "gengar",
      "gengar-mega",
      "gengar-gmax"
    ]
  },
  {
    "id": 95,
    "name": "onix",
    "genus": "Rock Snake Pokémon",
    "flavor_text": "This chain of immense stones resembles a giant serpent. Tremors shake the earth above as it burrows deep beneath the ground, feeding on boulders as it goes.",
    "generation": "generation-i",
    "color": "gray",
    "shape": "squiggle",
    "habitat": "cave",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 41,
    "evolves_from": null,
    "varieties": [
      "onix"
    ]
  },
  {
    "id": 96,
    "name": "drowzee",
    "genus": "Hypnosis Pokémon",
    "flavor_text": "If you sleep by it all the time, it will sometimes show you dreams it had eaten in the past.",
    "generation": "generation-i",
    "color": "yellow",
    "shape": "humanoid",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 42,
    "evolves_from": null,
    "varieties": [
      "drowzee"
    ]
  },
  {
    "id": 97,
    "name": "hypno",
    "genus": "Hypnosis Pokémon",
    "flavor_text": "Avoid eye contact if you come across one. It will try to put you to sleep by using its pendulum.",
    "generation": "generation-i",
    "color": "yellow",
    "shape": "humanoid",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 42,
    "evolves_from": "drowzee",
    "varieties": [
      "hypno"
    ]
  },
  {
    "id": 98,
    "name": "krabby",
    "genus": "River Crab Pokémon",
    "flavor_text": "If it senses danger approaching, it cloaks itself with bubbles from its mouth so it will look bigger.",
    "generation": "generation-i",
    "color": "red",
    "shape": "armor",
    "habitat": "waters-edge",
    "growth_rate": "medium",
    "capture_rate": 225,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water3"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 43,
    "evolves_from": null,
    "varieties": [
      "krabby"
    ]
  },
  {
    "id": 99,
    "name": "kingler",
    "genus": "Pincer Pokémon",
    "flavor_text": "Its oversized claw is very powerful, but when it’s not in battle, the claw just gets in the way.",
    "generation": "generation-i",
    "color": "red",
    "shape": "armor",
    "habitat": "waters-edge",
    "growth_rate": "medium",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water3"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 43,
    "evolves_from": "krabby",
    "varieties": [
      "kingler",
      "kingler-gmax"
    ]
  },
  {
    "id": 100,
    "name": "voltorb",
    "genus": "Ball Pokémon",
    "flavor_text": "An enigmatic Pokémon that happens to bear a resemblance to a Poké Ball. When excited, it discharges the electric current it has stored in its belly, then lets out a great, uproarious laugh.",
    "generation": "generation-i",
    "color": "red",
    "shape": "ball",
    "habitat": "urban",
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": -1,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 44,
    "evolves_from": null,
    "varieties": [
      "voltorb",
      "voltorb-hisui"
    ]
  },
  {
    "id": 101,
    "name": "electrode",
    "genus": "Ball Pokémon",
    "flavor_text": "The tissue on the surface of its body is curiously similar in composition to an Apricorn. When irritated, this Pokémon lets loose an electric current equal to 20 lightning bolts.",
    "generation": "generation-i",
    "color": "red",
    "shape": "ball",
    "habitat": "urban",
    "growth_rate": "medium",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": -1,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 44,
    "evolves_from": "voltorb",
    "varieties": [
      "electrode",
      "electrode-hisui"
    ]
  },
  {
    "id": 102,
    "name": "exeggcute",
    "genus": "Egg Pokémon",
    "flavor_text": "These Pokémon get nervous when they’re not in a group of six. The minute even one member of the group goes missing, Exeggcute become cowardly.",
    "generation": "generation-i",
    "color": "pink",
    "shape": "heads",
    "habitat": "forest",
    "growth_rate": "slow",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 45,
    "evolves_from": null,
    "varieties": [
      "exeggcute"
    ]
  },
  {
    "id": 103,
    "name": "exeggutor",
    "genus": "Coconut Pokémon",
    "flavor_text": "When they work together, Exeggutor’s three heads can put out powerful psychic energy. Cloudy days make this Pokémon sluggish.",
    "generation": "generation-i",
    "color": "yellow",
    "shape": "legs",
    "habitat": "forest",
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 45,
    "evolves_from": "exeggcute",
    "varieties": [
      "exeggutor",
      "exeggutor-alola"
    ]
  },
  {
    "id": 104,
    "name": "cubone",
    "genus": "Lonely Pokémon",
    "flavor_text": "This Pokémon wears the skull of its deceased mother. Sometimes Cubone’s dreams make it cry, but each tear Cubone sheds makes it stronger.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "upright",
    "habitat": "mountain",
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "monster"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 46,
    "evolves_from": null,
    "varieties": [
      "cubone"
    ]
  },
  {
    "id": 105,
    "name": "marowak",
    "genus": "Bone Keeper Pokémon",
    "flavor_text": "When this Pokémon evolved, the skull of its mother fused to it. Marowak’s temperament also turned vicious at the same time.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "upright",
    "habitat": "mountain",
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "monster"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 46,
    "evolves_from": "cubone",
    "varieties": [
      "marowak",
      "marowak-alola",
      "marowak-totem"
    ]
  },
  {
    "id": 106,
    "name": "hitmonlee",
    "genus": "Kicking Pokémon",
    "flavor_text": "The legs freely contract and stretch. The stretchy legs allow it to hit a distant foe with a rising kick.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "humanoid",
    "habitat": "urban",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 0,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 47,
    "evolves_from": "tyrogue",
    "varieties": [
      "hitmonlee"
    ]
  },
  {
    "id": 107,
    "name": "hitmonchan",
    "genus": "Punching Pokémon",
    "flavor_text": "Its punches slice the air. However, it seems to need a short break after fighting for three minutes.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "humanoid",
    "habitat": "urban",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 0,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 47,
    "evolves_from": "tyrogue",
    "varieties": [
      "hitmonchan"
    ]
  },
  {
    "id": 108,
    "name": "lickitung",
    "genus": "Licking Pokémon",
    "flavor_text": "Wields its long tongue deftly, as though it were an arm. The Pokémon's viscous saliva, once it has been collected and boiled down, yields a strong and highly useful adhesive.",
    "generation": "generation-i",
    "color": "pink",
    "shape": "upright",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "monster"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 48,
    "evolves_from": null,
    "varieties": [
      "lickitung"
    ]
  },
  {
    "id": 109,
    "name": "koffing",
    "genus": "Poison Gas Pokémon",
    "flavor_text": "It adores polluted air. Some claim that Koffing used to be more plentiful in the Galar region than they are now.",
    "generation": "generation-i",
    "color": "purple",
    "shape": "ball",
    "habitat": "urban",
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 49,
    "evolves_from": null,
    "varieties": [
      "koffing"
    ]
  },
  {
    "id": 110,
    "name": "weezing",
    "genus": "Poison Gas Pokémon",
    "flavor_text": "It can’t suck in air quite as well as a Galarian Weezing, but the toxins it creates are more potent than those of its counterpart.",
    "generation": "generation-i",
    "color": "purple",
    "shape": "heads",
    "habitat": "urban",
    "growth_rate": "medium",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 49,
    "evolves_from": "koffing",
    "varieties": [
      "weezing",
      "weezing-galar"
    ]
  },
  {
    "id": 111,
    "name": "rhyhorn",
    "genus": "Spikes Pokémon",
    "flavor_text": "Ludicrously strong—when it butts heads with a mountain, it is the mountain that shatters. But its short legs struggle with turns, and it is incapable of stopping unless it collides with something.",
    "generation": "generation-i",
    "color": "gray",
    "shape": "quadruped",
    "habitat": "rough-terrain",
    "growth_rate": "slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "monster",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 50,
    "evolves_from": null,
    "varieties": [
      "rhyhorn"
    ]
  },
  {
    "id": 112,
    "name": "rhydon",
    "genus": "Drill Pokémon",
    "flavor_text": "Rapidly rotates its horn to bore through bedrock. It swaggers around volcanic regions, protected from the lava's heat by its tough, armorlike hide.",
    "generation": "generation-i",
    "color": "gray",
    "shape": "upright",
    "habitat": "rough-terrain",
    "growth_rate": "slow",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "monster",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 50,
    "evolves_from": "rhyhorn",
    "varieties": [
      "rhydon"
    ]
  },
  {
    "id": 113,
    "name": "chansey",
    "genus": "Egg Pokémon",
    "flavor_text": "This purehearted Pokémon shares its eggs with the injured.",
    "generation": "generation-i",
    "color": "pink",
    "shape": "upright",
    "habitat": "urban",
    "growth_rate": "fast",
    "capture_rate": 30,
    "base_happiness": 140,
    "hatch_counter": 40,
    "gender_rate": 8,
    "egg_groups": [
      "fairy"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 51,
    "evolves_from": "happiny",
    "varieties": [
      "chansey"
    ]
  },
  {
    "id": 114,
    "name": "tangela",
    "genus": "Vine Pokémon",
    "flavor_text": "It is cloaked entirely in blue vines, preventing any glimpse of its true identity. The vines impart a refreshing sensation when chewed—they're useful as a spice.",
    "generation": "generation-i",
    "color": "blue",
    "shape": "legs",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 52,
    "evolves_from": null,
    "varieties": [
      "tangela"
    ]
  },
  {
    "id": 115,
    "name": "kangaskhan",
    "genus": "Parent Pokémon",
    "flavor_text": "There are records of a lost human child being raised by a childless Kangaskhan.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "upright",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 8,
    "egg_groups": [
      "monster"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 53,
    "evolves_from": null,
    "varieties": [
      "kangaskhan",
      "kangaskhan-mega"
    ]
  },
  {
    "id": 116,
    "name": "horsea",
    "genus": "Dragon Pokémon",
    "flavor_text": "They swim with dance-like motions and cause whirlpools to form. Horsea compete to see which of them can generate the biggest whirlpool.",
    "generation": "generation-i",
    "color": "blue",
    "shape": "blob",
    "habitat": "sea",
    "growth_rate": "medium",
    "capture_rate": 225,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 54,
    "evolves_from": null,
    "varieties": [
      "horsea"
    ]
  },
  {
    "id": 117,
    "name": "seadra",
    "genus": "Dragon Pokémon",
    "flavor_text": "Seadra’s mouth is slender, but its suction power is strong. In an instant, Seadra can suck in food that’s larger than the opening of its mouth.",
    "generation": "generation-i",
    "color": "blue",
    "shape": "blob",
    "habitat": "sea",
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 54,
    "evolves_from": "horsea",
    "varieties": [
      "seadra"
    ]
  },
  {
    "id": 118,
    "name": "goldeen",
    "genus": "Goldfish Pokémon",
    "flavor_text": "Its dorsal and pectoral fins are strongly developed like muscles. It can swim at a speed of five knots.",
    "generation": "generation-i",
    "color": "red",
    "shape": "fish",
    "habitat": "waters-edge",
    "growth_rate": "medium",
    "capture_rate": 225,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water2"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 55,
    "evolves_from": null,
    "varieties": [
      "goldeen"
    ]
  },
  {
    "id": 119,
    "name": "seaking",
    "genus": "Goldfish Pokémon",
    "flavor_text": "Using its horn, it bores holes in riverbed boulders, making nests to prevent its eggs from washing away.",
    "generation": "generation-i",
    "color": "red",
    "shape": "fish",
    "habitat": "waters-edge",
    "growth_rate": "medium",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water2"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 55,
    "evolves_from": "goldeen",
    "varieties": [
      "seaking"
    ]
  },
  {
    "id": 120,
    "name": "staryu",
    "genus": "Star Shape Pokémon",
    "flavor_text": "Fish Pokémon nibble at it, but Staryu isn’t bothered. Its body regenerates quickly, even if part of it is completely torn off.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "blob",
    "habitat": "sea",
    "growth_rate": "slow",
    "capture_rate": 225,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": -1,
    "egg_groups": [
      "water3"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 56,
    "evolves_from": null,
    "varieties": [
      "staryu"
    ]
  },
  {
    "id": 121,
    "name": "starmie",
    "genus": "Mysterious Pokémon",
    "flavor_text": "Starmie swims by spinning its body at high speed. As this Pokémon cruises through the ocean, it absorbs tiny plankton.",
    "generation": "generation-i",
    "color": "purple",
    "shape": "blob",
    "habitat": "sea",
    "growth_rate": "slow",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": -1,
    "egg_groups": [
      "water3"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 56,
    "evolves_from": "staryu",
    "varieties": [
      "starmie",
      "starmie-mega"
    ]
  },
  {
    "id": 122,
    "name": "mr-mime",
    "genus": "Barrier Pokémon",
    "flavor_text": "The behavior of this clown-like Pokémon reminds one of pantomime. It creates invisible walls using a force emitted from its fingertips.",
    "generation": "generation-i",
    "color": "pink",
    "shape": "humanoid",
    "habitat": "urban",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 57,
    "evolves_from": "mime-jr",
    "varieties": [
      "mr-mime",
      "mr-mime-galar"
    ]
  },
  {
    "id": 123,
    "name": "scyther",
    "genus": "Mantis Pokémon",
    "flavor_text": "The large, wickedly sharp scythes on its forearms are truly fearsome weapons. Prey's attempts to flee are unfailingly thwarted by this Pokémon's nimble motions.",
    "generation": "generation-i",
    "color": "green",
    "shape": "bug-wings",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 58,
    "evolves_from": null,
    "varieties": [
      "scyther"
    ]
  },
  {
    "id": 124,
    "name": "jynx",
    "genus": "Human Shape Pokémon",
    "flavor_text": "The Jynx of Galar often have beautiful and delicate voices. Some of these Pokémon have even gathered a fan base.",
    "generation": "generation-i",
    "color": "red",
    "shape": "humanoid",
    "habitat": "urban",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 8,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 59,
    "evolves_from": "smoochum",
    "varieties": [
      "jynx"
    ]
  },
  {
    "id": 125,
    "name": "electabuzz",
    "genus": "Electric Pokémon",
    "flavor_text": "Feeds on electrical energy. During sudden showers beneath looming thunderclouds, one can observe Electabuzz scaling tall trees, where the Pokémon will then wait for lightning to strike.",
    "generation": "generation-i",
    "color": "yellow",
    "shape": "upright",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 2,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 60,
    "evolves_from": "elekid",
    "varieties": [
      "electabuzz"
    ]
  },
  {
    "id": 126,
    "name": "magmar",
    "genus": "Spitfire Pokémon",
    "flavor_text": "Legend has it that this Pokémon was born from the crater of a volcano. When wounded, it bathes in lava to heal its body, much as one would soak in a hot spring.",
    "generation": "generation-i",
    "color": "red",
    "shape": "upright",
    "habitat": "mountain",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 2,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 61,
    "evolves_from": "magby",
    "varieties": [
      "magmar"
    ]
  },
  {
    "id": 127,
    "name": "pinsir",
    "genus": "Stag Beetle Pokémon",
    "flavor_text": "This Pokémon clamps its pincers down on its prey and then either splits the prey in half or flings it away.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "humanoid",
    "habitat": "forest",
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 62,
    "evolves_from": null,
    "varieties": [
      "pinsir",
      "pinsir-mega"
    ]
  },
  {
    "id": 128,
    "name": "tauros",
    "genus": "Wild Bull Pokémon",
    "flavor_text": "The Tauros of the Galar region are volatile in nature, and they won’t allow people to ride on their backs.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 0,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 63,
    "evolves_from": null,
    "varieties": [
      "tauros",
      "tauros-paldea-combat-breed",
      "tauros-paldea-blaze-breed",
      "tauros-paldea-aqua-breed"
    ]
  },
  {
    "id": 129,
    "name": "magikarp",
    "genus": "Fish Pokémon",
    "flavor_text": "A feeble, pitiful imbecile of a Pokémon that is nonetheless very hardy. Unperturbed by turbid water, it can be found living in all sorts of places.",
    "generation": "generation-i",
    "color": "red",
    "shape": "fish",
    "habitat": "waters-edge",
    "growth_rate": "slow",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 5,
    "gender_rate": 4,
    "egg_groups": [
      "water2",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 64,
    "evolves_from": null,
    "varieties": [
      "magikarp"
    ]
  },
  {
    "id": 130,
    "name": "gyarados",
    "genus": "Atrocious Pokémon",
    "flavor_text": "I suspect this Pokémon to be the true identity of a dragon written of in ancient texts, which claimed that it razed an entire village with white-hot beams from its maw.",
    "generation": "generation-i",
    "color": "blue",
    "shape": "squiggle",
    "habitat": "waters-edge",
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 5,
    "gender_rate": 4,
    "egg_groups": [
      "water2",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 64,
    "evolves_from": "magikarp",
    "varieties": [
      "gyarados",
      "gyarados-mega"
    ]
  },
  {
    "id": 131,
    "name": "lapras",
    "genus": "Transport Pokémon",
    "flavor_text": "Crossing icy seas is no issue for this cold-resistant Pokémon. Its smooth skin is a little cool to the touch.",
    "generation": "generation-i",
    "color": "blue",
    "shape": "fish",
    "habitat": "sea",
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 40,
    "gender_rate": 4,
    "egg_groups": [
      "monster",
      "water1"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 65,
    "evolves_from": null,
    "varieties": [
      "lapras",
      "lapras-gmax"
    ]
  },
  {
    "id": 132,
    "name": "ditto",
    "genus": "Transform Pokémon",
    "flavor_text": "When it encounters another Ditto, it will move faster than normal to duplicate that opponent exactly.",
    "generation": "generation-i",
    "color": "purple",
    "shape": "ball",
    "habitat": "urban",
    "growth_rate": "medium",
    "capture_rate": 35,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": -1,
    "egg_groups": [
      "ditto"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 66,
    "evolves_from": null,
    "varieties": [
      "ditto"
    ]
  },
  {
    "id": 133,
    "name": "eevee",
    "genus": "Evolution Pokémon",
    "flavor_text": "Harbors the potential to evolve into manifold forms. Within Eevee lies the key to the mysteries of Pokémon evolution—I'm certain of it.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "quadruped",
    "habitat": "urban",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 35,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 67,
    "evolves_from": null,
    "varieties": [
      "eevee",
      "eevee-starter",
      "eevee-gmax"
    ]
  },
  {
    "id": 134,
    "name": "vaporeon",
    "genus": "Bubble Jet Pokémon",
    "flavor_text": "Tests show that its cells closely resemble water molecules, which perhaps explains its ability to conceal its form while submerged. I believe the origins of mermaid folklore lie with this Pokémon.",
    "generation": "generation-i",
    "color": "blue",
    "shape": "quadruped",
    "habitat": "urban",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 35,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 67,
    "evolves_from": "eevee",
    "varieties": [
      "vaporeon"
    ]
  },
  {
    "id": 135,
    "name": "jolteon",
    "genus": "Lightning Pokémon",
    "flavor_text": "Bristles its fur into sharp, needlelike points when enraged. One can hear electricity crackle in its breath when it exhales.",
    "generation": "generation-i",
    "color": "yellow",
    "shape": "quadruped",
    "habitat": "urban",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 35,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 67,
    "evolves_from": "eevee",
    "varieties": [
      "jolteon"
    ]
  },
  {
    "id": 136,
    "name": "flareon",
    "genus": "Flame Pokémon",
    "flavor_text": "Flames burn within a saclike organ inside this Pokémon. When Flareon inhales, these flames grow in intensity, reaching a mighty 3,000 degrees Fahrenheit.",
    "generation": "generation-i",
    "color": "red",
    "shape": "quadruped",
    "habitat": "urban",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 35,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 67,
    "evolves_from": "eevee",
    "varieties": [
      "flareon"
    ]
  },
  {
    "id": 137,
    "name": "porygon",
    "genus": "Virtual Pokémon",
    "flavor_text": "It has no discernible heartbeat and does not seem to draw breath, and yet it appears to function without issue. I cannot even begin to explain this utterly bizarre anomaly.",
    "generation": "generation-i",
    "color": "pink",
    "shape": "legs",
    "habitat": "urban",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": -1,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 68,
    "evolves_from": null,
    "varieties": [
      "porygon"
    ]
  },
  {
    "id": 138,
    "name": "omanyte",
    "genus": "Spiral Pokémon",
    "flavor_text": "This Pokémon is a member of an ancient, extinct species. Omanyte paddles through water with its 10 tentacles, looking like it’s just drifting along.",
    "generation": "generation-i",
    "color": "blue",
    "shape": "tentacles",
    "habitat": "sea",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 30,
    "gender_rate": 1,
    "egg_groups": [
      "water1",
      "water3"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 69,
    "evolves_from": null,
    "varieties": [
      "omanyte"
    ]
  },
  {
    "id": 139,
    "name": "omastar",
    "genus": "Spiral Pokémon",
    "flavor_text": "Omastar’s sharp fangs could crush rock, but the Pokémon can attack only the prey that come within reach of its tentacles.",
    "generation": "generation-i",
    "color": "blue",
    "shape": "tentacles",
    "habitat": "sea",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 30,
    "gender_rate": 1,
    "egg_groups": [
      "water1",
      "water3"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 69,
    "evolves_from": "omanyte",
    "varieties": [
      "omastar"
    ]
  },
  {
    "id": 140,
    "name": "kabuto",
    "genus": "Shellfish Pokémon",
    "flavor_text": "While some say this species has gone extinct, Kabuto sightings are apparently fairly common in some places.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "armor",
    "habitat": "sea",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 30,
    "gender_rate": 1,
    "egg_groups": [
      "water1",
      "water3"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 70,
    "evolves_from": null,
    "varieties": [
      "kabuto"
    ]
  },
  {
    "id": 141,
    "name": "kabutops",
    "genus": "Shellfish Pokémon",
    "flavor_text": "The cause behind the extinction of this species is unknown. Kabutops were aggressive Pokémon that inhabited warm seas.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "upright",
    "habitat": "sea",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 30,
    "gender_rate": 1,
    "egg_groups": [
      "water1",
      "water3"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 70,
    "evolves_from": "kabuto",
    "varieties": [
      "kabutops"
    ]
  },
  {
    "id": 142,
    "name": "aerodactyl",
    "genus": "Fossil Pokémon",
    "flavor_text": "Aerodactyl’s sawlike fangs can shred skin to tatters—even the skin of Steel-type Pokémon.",
    "generation": "generation-i",
    "color": "purple",
    "shape": "wings",
    "habitat": "mountain",
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 35,
    "gender_rate": 1,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 71,
    "evolves_from": null,
    "varieties": [
      "aerodactyl",
      "aerodactyl-mega"
    ]
  },
  {
    "id": 143,
    "name": "snorlax",
    "genus": "Sleeping Pokémon",
    "flavor_text": "This glutton appears in villages without warning and devours the entirety of their rice granaries—such occurrences have long been counted among the gravest of disasters.",
    "generation": "generation-i",
    "color": "black",
    "shape": "humanoid",
    "habitat": "mountain",
    "growth_rate": "slow",
    "capture_rate": 25,
    "base_happiness": 70,
    "hatch_counter": 40,
    "gender_rate": 1,
    "egg_groups": [
      "monster"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 72,
    "evolves_from": "munchlax",
    "varieties": [
      "snorlax",
      "snorlax-gmax"
    ]
  },
  {
    "id": 144,
    "name": "articuno",
    "genus": "Freeze Pokémon",
    "flavor_text": "This Pokémon can control ice at will. Articuno is said to live in snowy mountains riddled with permafrost.",
    "generation": "generation-i",
    "color": "blue",
    "shape": "wings",
    "habitat": "rare",
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 35,
    "hatch_counter": 80,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 73,
    "evolves_from": null,
    "varieties": [
      "articuno",
      "articuno-galar"
    ]
  },
  {
    "id": 145,
    "name": "zapdos",
    "genus": "Electric Pokémon",
    "flavor_text": "Zapdos is a legendary bird Pokémon. It’s said that when Zapdos rubs its feathers together, lightning will fall immediately after.",
    "generation": "generation-i",
    "color": "yellow",
    "shape": "wings",
    "habitat": "rare",
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 35,
    "hatch_counter": 80,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 74,
    "evolves_from": null,
    "varieties": [
      "zapdos",
      "zapdos-galar"
    ]
  },
  {
    "id": 146,
    "name": "moltres",
    "genus": "Flame Pokémon",
    "flavor_text": "There are stories of this Pokémon using its radiant, flame-cloaked wings to light up paths for those lost in the mountains.",
    "generation": "generation-i",
    "color": "yellow",
    "shape": "wings",
    "habitat": "rare",
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 35,
    "hatch_counter": 80,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 75,
    "evolves_from": null,
    "varieties": [
      "moltres",
      "moltres-galar"
    ]
  },
  {
    "id": 147,
    "name": "dratini",
    "genus": "Dragon Pokémon",
    "flavor_text": "This Pokémon was long considered to be no more than a myth. The small lump on a Dratini’s forehead is actually a horn that’s still coming in.",
    "generation": "generation-i",
    "color": "blue",
    "shape": "squiggle",
    "habitat": "waters-edge",
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 35,
    "hatch_counter": 40,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 76,
    "evolves_from": null,
    "varieties": [
      "dratini"
    ]
  },
  {
    "id": 148,
    "name": "dragonair",
    "genus": "Dragon Pokémon",
    "flavor_text": "This Pokémon gathers power in the orbs on its tail and controls the weather. When enshrouded by an aura, Dragonair has a mystical appearance.",
    "generation": "generation-i",
    "color": "blue",
    "shape": "squiggle",
    "habitat": "waters-edge",
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 35,
    "hatch_counter": 40,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 76,
    "evolves_from": "dratini",
    "varieties": [
      "dragonair"
    ]
  },
  {
    "id": 149,
    "name": "dragonite",
    "genus": "Dragon Pokémon",
    "flavor_text": "This Pokémon is known as the Sea Incarnate. Figureheads that resemble Dragonite decorate the bows of many ships.",
    "generation": "generation-i",
    "color": "brown",
    "shape": "upright",
    "habitat": "waters-edge",
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 35,
    "hatch_counter": 40,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 76,
    "evolves_from": "dragonair",
    "varieties": [
      "dragonite",
      "dragonite-mega"
    ]
  },
  {
    "id": 150,
    "name": "mewtwo",
    "genus": "Genetic Pokémon",
    "flavor_text": "Its DNA is almost the same as Mew’s. However, its size and disposition are vastly different.",
    "generation": "generation-i",
    "color": "purple",
    "shape": "upright",
    "habitat": "rare",
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 0,
    "hatch_counter": 120,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 77,
    "evolves_from": null,
    "varieties": [
      "mewtwo",
      "mewtwo-mega-x",
      "mewtwo-mega-y"
    ]
  },
  {
    "id": 151,
    "name": "mew",
    "genus": "New Species Pokémon",
    "flavor_text": "When viewed through a microscope, this Pokémon’s short, fine, delicate hair can be seen.",
    "generation": "generation-i",
    "color": "pink",
    "shape": "upright",
    "habitat": "rare",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 100,
    "hatch_counter": 120,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": true,
    "evolution_chain_id": 78,
    "evolves_from": null,
    "varieties": [
      "mew"
    ]
  },
  {
    "id": 152,
    "name": "chikorita",
    "genus": "Leaf Pokémon",
    "flavor_text": "In battle, Chikorita waves its leaf around to keep the foe at bay. However, a sweet fragrance also wafts from the leaf, becalming the battling Pokémon and creating a cozy, friendly atmosphere all around.",
    "generation": "generation-ii",
    "color": "green",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "monster",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 79,
    "evolves_from": null,
    "varieties": [
      "chikorita"
    ]
  },
  {
    "id": 153,
    "name": "bayleef",
    "genus": "Leaf Pokémon",
    "flavor_text": "Bayleef’s neck is ringed by curled-up leaves. Inside each tubular leaf is a small shoot of a tree. The fragrance of this shoot makes people peppy.",
    "generation": "generation-ii",
    "color": "green",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "monster",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 79,
    "evolves_from": "chikorita",
    "varieties": [
      "bayleef"
    ]
  },
  {
    "id": 154,
    "name": "meganium",
    "genus": "Herb Pokémon",
    "flavor_text": "The fragrance of Meganium’s flower soothes and calms emotions. In battle, this Pokémon gives off more of its becalming scent to blunt the foe’s fighting spirit.",
    "generation": "generation-ii",
    "color": "green",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "monster",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 79,
    "evolves_from": "bayleef",
    "varieties": [
      "meganium",
      "meganium-mega"
    ]
  },
  {
    "id": 155,
    "name": "cyndaquil",
    "genus": "Fire Mouse Pokémon",
    "flavor_text": "Hails from the Johto region. Though usually curled into a ball due to its timid disposition, it harbors tremendous firepower.",
    "generation": "generation-ii",
    "color": "yellow",
    "shape": "humanoid",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 80,
    "evolves_from": null,
    "varieties": [
      "cyndaquil"
    ]
  },
  {
    "id": 156,
    "name": "quilava",
    "genus": "Volcano Pokémon",
    "flavor_text": "This creature's fur is most mysterious—it is wholly impervious to the burning touch of flame. Should Quilava turn its back to you, take heed! Such a posture indicates a forthcoming attack.",
    "generation": "generation-ii",
    "color": "yellow",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 80,
    "evolves_from": "cyndaquil",
    "varieties": [
      "quilava"
    ]
  },
  {
    "id": 157,
    "name": "typhlosion",
    "genus": "Volcano Pokémon",
    "flavor_text": "Said to purify lost, forsaken souls with its flames and guide them to the afterlife. I believe its form has been influenced by the energy of the sacred mountain towering at Hisui's center.",
    "generation": "generation-ii",
    "color": "yellow",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 80,
    "evolves_from": "quilava",
    "varieties": [
      "typhlosion",
      "typhlosion-hisui"
    ]
  },
  {
    "id": 158,
    "name": "totodile",
    "genus": "Big Jaw Pokémon",
    "flavor_text": "Despite the smallness of its body, Totodile’s jaws are very powerful. While the Pokémon may think it is just playfully nipping, its bite has enough power to cause serious injury.",
    "generation": "generation-ii",
    "color": "blue",
    "shape": "upright",
    "habitat": "waters-edge",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "monster",
      "water1"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 81,
    "evolves_from": null,
    "varieties": [
      "totodile"
    ]
  },
  {
    "id": 159,
    "name": "croconaw",
    "genus": "Big Jaw Pokémon",
    "flavor_text": "Once Croconaw has clamped its jaws on its foe, it will absolutely not let go. Because the tips of its fangs are forked back like barbed fishhooks, they become impossible to remove when they have sunk in.",
    "generation": "generation-ii",
    "color": "blue",
    "shape": "upright",
    "habitat": "waters-edge",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "monster",
      "water1"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 81,
    "evolves_from": "totodile",
    "varieties": [
      "croconaw"
    ]
  },
  {
    "id": 160,
    "name": "feraligatr",
    "genus": "Big Jaw Pokémon",
    "flavor_text": "Feraligatr intimidates its foes by opening its huge mouth. In battle, it will kick the ground hard with its thick and powerful hind legs to charge at the foe at an incredible speed.",
    "generation": "generation-ii",
    "color": "blue",
    "shape": "upright",
    "habitat": "waters-edge",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "monster",
      "water1"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 81,
    "evolves_from": "croconaw",
    "varieties": [
      "feraligatr",
      "feraligatr-mega"
    ]
  },
  {
    "id": 161,
    "name": "sentret",
    "genus": "Scout Pokémon",
    "flavor_text": "When Sentret sleeps, it does so while another stands guard. The sentry wakes the others at the first sign of danger. When this Pokémon becomes separated from its pack, it becomes incapable of sleep due to fear.",
    "generation": "generation-ii",
    "color": "brown",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 82,
    "evolves_from": null,
    "varieties": [
      "sentret"
    ]
  },
  {
    "id": 162,
    "name": "furret",
    "genus": "Long Body Pokémon",
    "flavor_text": "Furret has a very slim build. When under attack, it can slickly squirm through narrow spaces and get away. In spite of its short limbs, this Pokémon is very nimble and fleet.",
    "generation": "generation-ii",
    "color": "brown",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 82,
    "evolves_from": "sentret",
    "varieties": [
      "furret"
    ]
  },
  {
    "id": 163,
    "name": "hoothoot",
    "genus": "Owl Pokémon",
    "flavor_text": "It begins to hoot at the same time every day. Some Trainers use them in place of clocks.",
    "generation": "generation-ii",
    "color": "brown",
    "shape": "wings",
    "habitat": "forest",
    "growth_rate": "medium",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 83,
    "evolves_from": null,
    "varieties": [
      "hoothoot"
    ]
  },
  {
    "id": 164,
    "name": "noctowl",
    "genus": "Owl Pokémon",
    "flavor_text": "When it needs to think, it rotates its head 180 degrees to sharpen its intellectual power.",
    "generation": "generation-ii",
    "color": "brown",
    "shape": "wings",
    "habitat": "forest",
    "growth_rate": "medium",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 83,
    "evolves_from": "hoothoot",
    "varieties": [
      "noctowl"
    ]
  },
  {
    "id": 165,
    "name": "ledyba",
    "genus": "Five Star Pokémon",
    "flavor_text": "These very cowardly Pokémon join together and use Reflect to protect their nest.",
    "generation": "generation-ii",
    "color": "red",
    "shape": "wings",
    "habitat": "forest",
    "growth_rate": "fast",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 84,
    "evolves_from": null,
    "varieties": [
      "ledyba"
    ]
  },
  {
    "id": 166,
    "name": "ledian",
    "genus": "Five Star Pokémon",
    "flavor_text": "It flies through the night sky, sprinkling sparkly dust. According to some, if that dust sticks to you, good things will happen to you.",
    "generation": "generation-ii",
    "color": "red",
    "shape": "wings",
    "habitat": "forest",
    "growth_rate": "fast",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 84,
    "evolves_from": "ledyba",
    "varieties": [
      "ledian"
    ]
  },
  {
    "id": 167,
    "name": "spinarak",
    "genus": "String Spit Pokémon",
    "flavor_text": "Although the poison from its fangs isn’t that strong, it’s potent enough to weaken prey that gets caught in its web.",
    "generation": "generation-ii",
    "color": "green",
    "shape": "armor",
    "habitat": "forest",
    "growth_rate": "fast",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 85,
    "evolves_from": null,
    "varieties": [
      "spinarak"
    ]
  },
  {
    "id": 168,
    "name": "ariados",
    "genus": "Long Leg Pokémon",
    "flavor_text": "It spews threads from its mouth to catch its prey. When night falls, it leaves its web to go hunt aggressively.",
    "generation": "generation-ii",
    "color": "red",
    "shape": "armor",
    "habitat": "forest",
    "growth_rate": "fast",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 85,
    "evolves_from": "spinarak",
    "varieties": [
      "ariados"
    ]
  },
  {
    "id": 169,
    "name": "crobat",
    "genus": "Bat Pokémon",
    "flavor_text": "Its hind limbs have become another set of wings. Crobat expertly maneuvers its four wings to dart in exquisite fashion through even the most confined caves without losing any speed.",
    "generation": "generation-ii",
    "color": "purple",
    "shape": "bug-wings",
    "habitat": "cave",
    "growth_rate": "medium",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 17,
    "evolves_from": "golbat",
    "varieties": [
      "crobat"
    ]
  },
  {
    "id": 170,
    "name": "chinchou",
    "genus": "Angler Pokémon",
    "flavor_text": "On the dark ocean floor, its only means of communication is its constantly flashing lights.",
    "generation": "generation-ii",
    "color": "blue",
    "shape": "fish",
    "habitat": "sea",
    "growth_rate": "slow",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water2"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 86,
    "evolves_from": null,
    "varieties": [
      "chinchou"
    ]
  },
  {
    "id": 171,
    "name": "lanturn",
    "genus": "Light Pokémon",
    "flavor_text": "This Pokémon flashes a bright light that blinds its prey. This creates an opening for it to deliver an electrical attack.",
    "generation": "generation-ii",
    "color": "blue",
    "shape": "fish",
    "habitat": "sea",
    "growth_rate": "slow",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water2"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 86,
    "evolves_from": "chinchou",
    "varieties": [
      "lanturn"
    ]
  },
  {
    "id": 172,
    "name": "pichu",
    "genus": "Tiny Mouse Pokémon",
    "flavor_text": "Pichu stores electricity in the sacs on its cheeks but discharges it inadvertently when agitated or excited. Being yet immature, the Pokémon's handling of electricity is rather inept.",
    "generation": "generation-ii",
    "color": "yellow",
    "shape": "quadruped",
    "habitat": "forest",
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 10,
    "gender_rate": 4,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": true,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 10,
    "evolves_from": null,
    "varieties": [
      "pichu"
    ]
  },
  {
    "id": 173,
    "name": "cleffa",
    "genus": "Star Shape Pokémon",
    "flavor_text": "In silhouette, they resemble twinkling starlight. When shooting stars rain from the night sky, Cleffa gather in numbers and dance as though they are indeed incarnations of the stars.",
    "generation": "generation-ii",
    "color": "pink",
    "shape": "upright",
    "habitat": "mountain",
    "growth_rate": "fast",
    "capture_rate": 150,
    "base_happiness": 140,
    "hatch_counter": 10,
    "gender_rate": 6,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": true,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 14,
    "evolves_from": null,
    "varieties": [
      "cleffa"
    ]
  },
  {
    "id": 174,
    "name": "igglybuff",
    "genus": "Balloon Pokémon",
    "flavor_text": "Taking advantage of the softness of its body, Igglybuff moves as if bouncing. Its body turns a deep pink when its temperature rises.",
    "generation": "generation-ii",
    "color": "pink",
    "shape": "humanoid",
    "habitat": "grassland",
    "growth_rate": "fast",
    "capture_rate": 170,
    "base_happiness": 70,
    "hatch_counter": 10,
    "gender_rate": 6,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": true,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 16,
    "evolves_from": null,
    "varieties": [
      "igglybuff"
    ]
  },
  {
    "id": 175,
    "name": "togepi",
    "genus": "Spike Ball Pokémon",
    "flavor_text": "This ovate creature is frequently mistaken for a moving egg when encountered out in the fields or in the mountains. Its guileless smile soothes the soul.",
    "generation": "generation-ii",
    "color": "white",
    "shape": "humanoid",
    "habitat": "forest",
    "growth_rate": "fast",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 10,
    "gender_rate": 1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": true,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 87,
    "evolves_from": null,
    "varieties": [
      "togepi"
    ]
  },
  {
    "id": 176,
    "name": "togetic",
    "genus": "Happiness Pokémon",
    "flavor_text": "No records exist of Togetic being seen in the wilds. Rumors abound that it evolves under the loving care of a trusted human companion, upon whom the Pokémon then bestows great joy.",
    "generation": "generation-ii",
    "color": "white",
    "shape": "humanoid",
    "habitat": "forest",
    "growth_rate": "fast",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 10,
    "gender_rate": 1,
    "egg_groups": [
      "flying",
      "fairy"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 87,
    "evolves_from": "togepi",
    "varieties": [
      "togetic"
    ]
  },
  {
    "id": 177,
    "name": "natu",
    "genus": "Tiny Bird Pokémon",
    "flavor_text": "Because its wings aren’t yet fully grown, it has to hop to get around. It is always staring at something.",
    "generation": "generation-ii",
    "color": "green",
    "shape": "wings",
    "habitat": "forest",
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 88,
    "evolves_from": null,
    "varieties": [
      "natu"
    ]
  },
  {
    "id": 178,
    "name": "xatu",
    "genus": "Mystic Pokémon",
    "flavor_text": "This odd Pokémon can see both the past and the future. It eyes the sun’s movement all day.",
    "generation": "generation-ii",
    "color": "green",
    "shape": "wings",
    "habitat": "forest",
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 88,
    "evolves_from": "natu",
    "varieties": [
      "xatu"
    ]
  },
  {
    "id": 179,
    "name": "mareep",
    "genus": "Wool Pokémon",
    "flavor_text": "Rubbing its fleece generates electricity. You’ll want to pet it because it’s cute, but if you use your bare hand, you’ll get a painful shock.",
    "generation": "generation-ii",
    "color": "white",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 235,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "monster",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 89,
    "evolves_from": null,
    "varieties": [
      "mareep"
    ]
  },
  {
    "id": 180,
    "name": "flaaffy",
    "genus": "Wool Pokémon",
    "flavor_text": "It stores electricity in its fluffy fleece. If it stores up too much, it will start to go bald in those patches.",
    "generation": "generation-ii",
    "color": "pink",
    "shape": "upright",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "monster",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 89,
    "evolves_from": "mareep",
    "varieties": [
      "flaaffy"
    ]
  },
  {
    "id": 181,
    "name": "ampharos",
    "genus": "Light Pokémon",
    "flavor_text": "Its tail shines bright and strong. It has been prized since long ago as a beacon for sailors.",
    "generation": "generation-ii",
    "color": "yellow",
    "shape": "upright",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "monster",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 89,
    "evolves_from": "flaaffy",
    "varieties": [
      "ampharos",
      "ampharos-mega"
    ]
  },
  {
    "id": 182,
    "name": "bellossom",
    "genus": "Flower Pokémon",
    "flavor_text": "Bellossom gather at times and appear to dance. They say that the dance is a ritual to summon the sun.",
    "generation": "generation-ii",
    "color": "green",
    "shape": "humanoid",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 18,
    "evolves_from": "gloom",
    "varieties": [
      "bellossom"
    ]
  },
  {
    "id": 183,
    "name": "marill",
    "genus": "Aqua Mouse Pokémon",
    "flavor_text": "Even after Marill swims in a cold sea, its water- repellent fur dries almost as soon as Marill leaves the water. That’s why this Pokémon is never cold.",
    "generation": "generation-ii",
    "color": "blue",
    "shape": "upright",
    "habitat": "waters-edge",
    "growth_rate": "fast",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 10,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "fairy"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 90,
    "evolves_from": "azurill",
    "varieties": [
      "marill"
    ]
  },
  {
    "id": 184,
    "name": "azumarill",
    "genus": "Aqua Rabbit Pokémon",
    "flavor_text": "These Pokémon create air-filled bubbles. When Azurill play in rivers, Azumarill will cover them with these bubbles.",
    "generation": "generation-ii",
    "color": "blue",
    "shape": "upright",
    "habitat": "waters-edge",
    "growth_rate": "fast",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 10,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "fairy"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 90,
    "evolves_from": "marill",
    "varieties": [
      "azumarill"
    ]
  },
  {
    "id": 185,
    "name": "sudowoodo",
    "genus": "Imitation Pokémon",
    "flavor_text": "Though it pretends to be a tree, it fails to fool even children. To the touch, its body feels more like rock than tree bark. Sudowoodo's extreme aversion to water merits special note.",
    "generation": "generation-ii",
    "color": "brown",
    "shape": "humanoid",
    "habitat": "forest",
    "growth_rate": "medium",
    "capture_rate": 65,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 91,
    "evolves_from": "bonsly",
    "varieties": [
      "sudowoodo"
    ]
  },
  {
    "id": 186,
    "name": "politoed",
    "genus": "Frog Pokémon",
    "flavor_text": "The cry of a male is louder than that of a female. Male Politoed with deep, menacing voices find more popularity with the opposite gender.",
    "generation": "generation-ii",
    "color": "green",
    "shape": "humanoid",
    "habitat": "waters-edge",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 26,
    "evolves_from": "poliwhirl",
    "varieties": [
      "politoed"
    ]
  },
  {
    "id": 187,
    "name": "hoppip",
    "genus": "Cottonweed Pokémon",
    "flavor_text": "This Pokémon drifts and floats with the wind. If it senses the approach of strong winds, Hoppip links its leaves with other Hoppip to prepare against being blown away.",
    "generation": "generation-ii",
    "color": "pink",
    "shape": "upright",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "fairy",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 92,
    "evolves_from": null,
    "varieties": [
      "hoppip"
    ]
  },
  {
    "id": 188,
    "name": "skiploom",
    "genus": "Cottonweed Pokémon",
    "flavor_text": "Skiploom’s flower blossoms when the temperature rises above 64 degrees Fahrenheit. How much the flower opens depends on the temperature. For that reason, this Pokémon is sometimes used as a thermometer.",
    "generation": "generation-ii",
    "color": "green",
    "shape": "upright",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "fairy",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 92,
    "evolves_from": "hoppip",
    "varieties": [
      "skiploom"
    ]
  },
  {
    "id": 189,
    "name": "jumpluff",
    "genus": "Cottonweed Pokémon",
    "flavor_text": "Jumpluff rides warm southern winds to cross the sea and fly to foreign lands. The Pokémon descends to the ground when it encounters cold air while it is floating.",
    "generation": "generation-ii",
    "color": "blue",
    "shape": "upright",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "fairy",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 92,
    "evolves_from": "skiploom",
    "varieties": [
      "jumpluff"
    ]
  },
  {
    "id": 190,
    "name": "aipom",
    "genus": "Long Tail Pokémon",
    "flavor_text": "This treetop dweller possesses a tail as dexterous as a hand. Ancient writings describe this Pokémon as a one-armed oddity.",
    "generation": "generation-ii",
    "color": "purple",
    "shape": "upright",
    "habitat": "forest",
    "growth_rate": "fast",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 93,
    "evolves_from": null,
    "varieties": [
      "aipom"
    ]
  },
  {
    "id": 191,
    "name": "sunkern",
    "genus": "Seed Pokémon",
    "flavor_text": "Sunkern tries to move as little as it possibly can. It does so because it tries to conserve all the nutrients it has stored in its body for its evolution. It will not eat a thing, subsisting only on morning dew.",
    "generation": "generation-ii",
    "color": "yellow",
    "shape": "ball",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 235,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 94,
    "evolves_from": null,
    "varieties": [
      "sunkern"
    ]
  },
  {
    "id": 192,
    "name": "sunflora",
    "genus": "Sun Pokémon",
    "flavor_text": "Sunflora converts solar energy into nutrition. It moves around actively in the daytime when it is warm. It stops moving as soon as the sun goes down for the night.",
    "generation": "generation-ii",
    "color": "yellow",
    "shape": "humanoid",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 94,
    "evolves_from": "sunkern",
    "varieties": [
      "sunflora"
    ]
  },
  {
    "id": 193,
    "name": "yanma",
    "genus": "Clear Wing Pokémon",
    "flavor_text": "Its frail wings are so thin that one can see clear through them. However, during flight these wings exhibit the power to churn air with force enough to launch a house skyward.",
    "generation": "generation-ii",
    "color": "red",
    "shape": "bug-wings",
    "habitat": "forest",
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 95,
    "evolves_from": null,
    "varieties": [
      "yanma"
    ]
  },
  {
    "id": 194,
    "name": "wooper",
    "genus": "Water Fish Pokémon",
    "flavor_text": "When walking on land, it covers its body with a poisonous film that keeps its skin from dehydrating.",
    "generation": "generation-ii",
    "color": "blue",
    "shape": "legs",
    "habitat": "waters-edge",
    "growth_rate": "medium",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 96,
    "evolves_from": null,
    "varieties": [
      "wooper",
      "wooper-paldea"
    ]
  },
  {
    "id": 195,
    "name": "quagsire",
    "genus": "Water Fish Pokémon",
    "flavor_text": "Its body is always slimy. It often bangs its head on the river bottom as it swims but seems not to care.",
    "generation": "generation-ii",
    "color": "blue",
    "shape": "upright",
    "habitat": "waters-edge",
    "growth_rate": "medium",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 96,
    "evolves_from": "wooper",
    "varieties": [
      "quagsire"
    ]
  },
  {
    "id": 196,
    "name": "espeon",
    "genus": "Sun Pokémon",
    "flavor_text": "Wields an arcane power with which it can predict the weather and even people's thoughts. When bathed in sunshine, the scarlet orb on its brow glows and builds energy.",
    "generation": "generation-ii",
    "color": "purple",
    "shape": "quadruped",
    "habitat": "urban",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 35,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 67,
    "evolves_from": "eevee",
    "varieties": [
      "espeon"
    ]
  },
  {
    "id": 197,
    "name": "umbreon",
    "genus": "Moonlight Pokémon",
    "flavor_text": "It is most active in the wee hours of the night, when moonlight bathes the land. Its large eyes can pierce the darkness and perceive prey with absolute clarity.",
    "generation": "generation-ii",
    "color": "black",
    "shape": "quadruped",
    "habitat": "urban",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 35,
    "hatch_counter": 35,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 67,
    "evolves_from": "eevee",
    "varieties": [
      "umbreon"
    ]
  },
  {
    "id": 198,
    "name": "murkrow",
    "genus": "Darkness Pokémon",
    "flavor_text": "Widely shunned as a bearer of ill fortune. Upon crossing paths with this creature, I've been told one must chant ”Workrum, Workrum—bad luck, don't come” as a protective incantation.",
    "generation": "generation-ii",
    "color": "black",
    "shape": "wings",
    "habitat": "forest",
    "growth_rate": "medium-slow",
    "capture_rate": 30,
    "base_happiness": 35,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 97,
    "evolves_from": null,
    "varieties": [
      "murkrow"
    ]
  },
  {
    "id": 199,
    "name": "slowking",
    "genus": "Royal Pokémon",
    "flavor_text": "Slowking can solve any problem presented to it, but no one can understand a thing Slowking says.",
    "generation": "generation-ii",
    "color": "pink",
    "shape": "upright",
    "habitat": "waters-edge",
    "growth_rate": "medium",
    "capture_rate": 70,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "monster",
      "water1"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 33,
    "evolves_from": "slowpoke",
    "varieties": [
      "slowking",
      "slowking-galar"
    ]
  },
  {
    "id": 200,
    "name": "misdreavus",
    "genus": "Screech Pokémon",
    "flavor_text": "It conceals itself in darkness, sending chills up travelers' spines with its childlike weeping. As it observes the frightened travelers with glee, the red orbs upon its chest let off an eerie light.",
    "generation": "generation-ii",
    "color": "gray",
    "shape": "ball",
    "habitat": "cave",
    "growth_rate": "fast",
    "capture_rate": 45,
    "base_happiness": 35,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 98,
    "evolves_from": null,
    "varieties": [
      "misdreavus"
    ]
  },
  {
    "id": 201,
    "name": "unown",
    "genus": "Symbol Pokémon",
    "flavor_text": "It is hard to believe these strangely shaped Pokémon are truly living creatures. I've pointed out that the species' many forms resemble writing from other lands; no one will take me seriously.",
    "generation": "generation-ii",
    "color": "black",
    "shape": "ball",
    "habitat": "rare",
    "growth_rate": "medium",
    "capture_rate": 225,
    "base_happiness": 70,
    "hatch_counter": 40,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 99,
    "evolves_from": null,
    "varieties": [
      "unown"
    ]
  },
  {
    "id": 202,
    "name": "wobbuffet",
    "genus": "Patient Pokémon",
    "flavor_text": "To keep its pitch-black tail hidden, it lives quietly in the darkness. It is never first to attack.",
    "generation": "generation-ii",
    "color": "blue",
    "shape": "blob",
    "habitat": "cave",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 100,
    "evolves_from": "wynaut",
    "varieties": [
      "wobbuffet"
    ]
  },
  {
    "id": 203,
    "name": "girafarig",
    "genus": "Long Neck Pokémon",
    "flavor_text": "Girafarig’s rear head contains a tiny brain that is too small for thinking. However, the rear head doesn’t need to sleep, so it can keep watch over its surroundings 24 hours a day.",
    "generation": "generation-ii",
    "color": "yellow",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 101,
    "evolves_from": null,
    "varieties": [
      "girafarig"
    ]
  },
  {
    "id": 204,
    "name": "pineco",
    "genus": "Bagworm Pokémon",
    "flavor_text": "It sticks tree bark to itself with its saliva, making itself thicker and larger. Elderly Pineco are ridiculously huge.",
    "generation": "generation-ii",
    "color": "gray",
    "shape": "ball",
    "habitat": "forest",
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 102,
    "evolves_from": null,
    "varieties": [
      "pineco"
    ]
  },
  {
    "id": 205,
    "name": "forretress",
    "genus": "Bagworm Pokémon",
    "flavor_text": "In the moment that it gulps down its prey, the inside of its shell is exposed, but to this day, no one has ever seen that sight.",
    "generation": "generation-ii",
    "color": "purple",
    "shape": "ball",
    "habitat": "forest",
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 102,
    "evolves_from": "pineco",
    "varieties": [
      "forretress"
    ]
  },
  {
    "id": 206,
    "name": "dunsparce",
    "genus": "Land Snake Pokémon",
    "flavor_text": "The nests Dunsparce live in are mazes of tunnels. They never get lost in their own nests—they can tell where they are by the scent of the dirt.",
    "generation": "generation-ii",
    "color": "yellow",
    "shape": "squiggle",
    "habitat": "cave",
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 103,
    "evolves_from": null,
    "varieties": [
      "dunsparce"
    ]
  },
  {
    "id": 207,
    "name": "gligar",
    "genus": "Fly Scorpion Pokémon",
    "flavor_text": "Its tail is tipped by a thick, horrible stinger. To bring down prey, it will first obscure their vision by covering their faces with its body, and then it will use the stinger to inject them with venom.",
    "generation": "generation-ii",
    "color": "purple",
    "shape": "wings",
    "habitat": "mountain",
    "growth_rate": "medium-slow",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 104,
    "evolves_from": null,
    "varieties": [
      "gligar"
    ]
  },
  {
    "id": 208,
    "name": "steelix",
    "genus": "Iron Snake Pokémon",
    "flavor_text": "This Pokémon evolved through use of a strange item. Its body is coated with steel powder and notably hard—not even diamond can leave so much as a scratch.",
    "generation": "generation-ii",
    "color": "gray",
    "shape": "squiggle",
    "habitat": "cave",
    "growth_rate": "medium",
    "capture_rate": 25,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 41,
    "evolves_from": "onix",
    "varieties": [
      "steelix",
      "steelix-mega"
    ]
  },
  {
    "id": 209,
    "name": "snubbull",
    "genus": "Fairy Pokémon",
    "flavor_text": "In contrast to its appearance, it’s quite timid. When playing with other puppy Pokémon, it sometimes gets bullied.",
    "generation": "generation-ii",
    "color": "pink",
    "shape": "humanoid",
    "habitat": "urban",
    "growth_rate": "fast",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 6,
    "egg_groups": [
      "ground",
      "fairy"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 105,
    "evolves_from": null,
    "varieties": [
      "snubbull"
    ]
  },
  {
    "id": 210,
    "name": "granbull",
    "genus": "Fairy Pokémon",
    "flavor_text": "Although it’s popular with young people, Granbull is timid and sensitive, so it’s totally incompetent as a watchdog.",
    "generation": "generation-ii",
    "color": "purple",
    "shape": "upright",
    "habitat": "urban",
    "growth_rate": "fast",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 6,
    "egg_groups": [
      "ground",
      "fairy"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 105,
    "evolves_from": "snubbull",
    "varieties": [
      "granbull"
    ]
  },
  {
    "id": 211,
    "name": "qwilfish",
    "genus": "Balloon Pokémon",
    "flavor_text": "Fishers detest this troublesome Pokémon because it sprays poison from its spines, getting it everywhere. A different form of Qwilfish lives in other regions.",
    "generation": "generation-ii",
    "color": "gray",
    "shape": "fish",
    "habitat": "sea",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water2"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 106,
    "evolves_from": null,
    "varieties": [
      "qwilfish",
      "qwilfish-hisui"
    ]
  },
  {
    "id": 212,
    "name": "scizor",
    "genus": "Pincer Pokémon",
    "flavor_text": "Evolved by way of a curious item. The shell covering its body has been shown to be stronger than forged steel.",
    "generation": "generation-ii",
    "color": "red",
    "shape": "bug-wings",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 25,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 58,
    "evolves_from": "scyther",
    "varieties": [
      "scizor",
      "scizor-mega"
    ]
  },
  {
    "id": 213,
    "name": "shuckle",
    "genus": "Mold Pokémon",
    "flavor_text": "The berries stored in its vaselike shell eventually become a thick, pulpy juice.",
    "generation": "generation-ii",
    "color": "yellow",
    "shape": "armor",
    "habitat": "mountain",
    "growth_rate": "medium-slow",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 107,
    "evolves_from": null,
    "varieties": [
      "shuckle"
    ]
  },
  {
    "id": 214,
    "name": "heracross",
    "genus": "Single Horn Pokémon",
    "flavor_text": "This Pokémon has an unparalleled horn. Heracross itself demonstrates tremendous power—it's capable of throwing several people trained in the traditional arts of war at once.",
    "generation": "generation-ii",
    "color": "blue",
    "shape": "humanoid",
    "habitat": "forest",
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 108,
    "evolves_from": null,
    "varieties": [
      "heracross",
      "heracross-mega"
    ]
  },
  {
    "id": 215,
    "name": "sneasel",
    "genus": "Sharp Claw Pokémon",
    "flavor_text": "Its sturdy, curved claws are ideal for traversing precipitous cliffs. From the tips of these claws drips a venom that infiltrates the nerves of any prey caught in Sneasel's grasp.",
    "generation": "generation-ii",
    "color": "black",
    "shape": "upright",
    "habitat": "forest",
    "growth_rate": "medium-slow",
    "capture_rate": 60,
    "base_happiness": 35,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 109,
    "evolves_from": null,
    "varieties": [
      "sneasel",
      "sneasel-hisui"
    ]
  },
  {
    "id": 216,
    "name": "teddiursa",
    "genus": "Little Bear Pokémon",
    "flavor_text": "It licks its paws because of the sweet honey that has soaked into them. It is cunning, stealing into the nests of Combee and taking for itself the honey that the Combee have amassed.",
    "generation": "generation-ii",
    "color": "brown",
    "shape": "upright",
    "habitat": "mountain",
    "growth_rate": "medium",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 110,
    "evolves_from": null,
    "varieties": [
      "teddiursa"
    ]
  },
  {
    "id": 217,
    "name": "ursaring",
    "genus": "Hibernator Pokémon",
    "flavor_text": "When the cold season arrives in Hisui, this Pokémon will wander fields and mountains alike in search of its favorite berries. Ursaring's hunger during this time makes it a ferocious danger.",
    "generation": "generation-ii",
    "color": "brown",
    "shape": "upright",
    "habitat": "mountain",
    "growth_rate": "medium",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 110,
    "evolves_from": "teddiursa",
    "varieties": [
      "ursaring"
    ]
  },
  {
    "id": 218,
    "name": "slugma",
    "genus": "Lava Pokémon",
    "flavor_text": "Slugma does not have any blood in its body. Instead, intensely hot magma circulates throughout this Pokémon’s body, carrying essential nutrients and oxygen to its organs.",
    "generation": "generation-ii",
    "color": "red",
    "shape": "squiggle",
    "habitat": "mountain",
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 111,
    "evolves_from": null,
    "varieties": [
      "slugma"
    ]
  },
  {
    "id": 219,
    "name": "magcargo",
    "genus": "Lava Pokémon",
    "flavor_text": "Magcargo’s body temperature is approximately 18,000 degrees Fahrenheit. Water is vaporized on contact. If this Pokémon is caught in the rain, the raindrops instantly turn into steam, cloaking the area in a thick fog.",
    "generation": "generation-ii",
    "color": "red",
    "shape": "squiggle",
    "habitat": "mountain",
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 111,
    "evolves_from": "slugma",
    "varieties": [
      "magcargo"
    ]
  },
  {
    "id": 220,
    "name": "swinub",
    "genus": "Pig Pokémon",
    "flavor_text": "Swinub excels at sniffing out mushrooms buried beneath grass or snow. Since ancient times, the people of Hisui have often relied upon this skill.",
    "generation": "generation-ii",
    "color": "brown",
    "shape": "quadruped",
    "habitat": "cave",
    "growth_rate": "slow",
    "capture_rate": 225,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 112,
    "evolves_from": null,
    "varieties": [
      "swinub"
    ]
  },
  {
    "id": 221,
    "name": "piloswine",
    "genus": "Swine Pokémon",
    "flavor_text": "The long fur of this Pokémon covers its eyes, ears, and even limbs, allowing Piloswine to resist harshly frigid conditions. The Pokémon's white tusks can be used to defeat its enemies.",
    "generation": "generation-ii",
    "color": "brown",
    "shape": "quadruped",
    "habitat": "cave",
    "growth_rate": "slow",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 112,
    "evolves_from": "swinub",
    "varieties": [
      "piloswine"
    ]
  },
  {
    "id": 222,
    "name": "corsola",
    "genus": "Coral Pokémon",
    "flavor_text": "These Pokémon live in warm seas. In prehistoric times, many lived in the oceans around the Galar region as well.",
    "generation": "generation-ii",
    "color": "pink",
    "shape": "armor",
    "habitat": "sea",
    "growth_rate": "fast",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 6,
    "egg_groups": [
      "water1",
      "water3"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 113,
    "evolves_from": null,
    "varieties": [
      "corsola",
      "corsola-galar"
    ]
  },
  {
    "id": 223,
    "name": "remoraid",
    "genus": "Jet Pokémon",
    "flavor_text": "Spits water from its mouth with incredible accuracy. It captures Burmy by shooting them down off the branches from which they dangle.",
    "generation": "generation-ii",
    "color": "gray",
    "shape": "fish",
    "habitat": "sea",
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "water2"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 114,
    "evolves_from": null,
    "varieties": [
      "remoraid"
    ]
  },
  {
    "id": 224,
    "name": "octillery",
    "genus": "Jet Pokémon",
    "flavor_text": "While Octillery still shoots water from its mouth, the drastic anatomical difference between it and Remoraid meant that for a long time, no one believed the former evolved from the latter.",
    "generation": "generation-ii",
    "color": "red",
    "shape": "tentacles",
    "habitat": "sea",
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "water2"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 114,
    "evolves_from": "remoraid",
    "varieties": [
      "octillery"
    ]
  },
  {
    "id": 225,
    "name": "delibird",
    "genus": "Delivery Pokémon",
    "flavor_text": "It has a generous habit of sharing its food with people and Pokémon, so it’s always scrounging around for more food.",
    "generation": "generation-ii",
    "color": "red",
    "shape": "wings",
    "habitat": "mountain",
    "growth_rate": "fast",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 115,
    "evolves_from": null,
    "varieties": [
      "delibird"
    ]
  },
  {
    "id": 226,
    "name": "mantine",
    "genus": "Kite Pokémon",
    "flavor_text": "This calm and gentle Pokémon swims gracefully through the sea. After building speed, it can leap out of the water. It is often misidentified as a bird Pokémon due to this behavior.",
    "generation": "generation-ii",
    "color": "purple",
    "shape": "wings",
    "habitat": "sea",
    "growth_rate": "slow",
    "capture_rate": 25,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "water1"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 116,
    "evolves_from": "mantyke",
    "varieties": [
      "mantine"
    ]
  },
  {
    "id": 227,
    "name": "skarmory",
    "genus": "Armor Bird Pokémon",
    "flavor_text": "People fashion swords from Skarmory’s shed feathers, so this Pokémon is a popular element in heraldic designs.",
    "generation": "generation-ii",
    "color": "gray",
    "shape": "wings",
    "habitat": "rough-terrain",
    "growth_rate": "slow",
    "capture_rate": 25,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 117,
    "evolves_from": null,
    "varieties": [
      "skarmory",
      "skarmory-mega"
    ]
  },
  {
    "id": 228,
    "name": "houndour",
    "genus": "Dark Pokémon",
    "flavor_text": "They make repeated eerie howls before dawn to call attention to their pack.",
    "generation": "generation-ii",
    "color": "black",
    "shape": "quadruped",
    "habitat": "rough-terrain",
    "growth_rate": "slow",
    "capture_rate": 120,
    "base_happiness": 35,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 118,
    "evolves_from": null,
    "varieties": [
      "houndour"
    ]
  },
  {
    "id": 229,
    "name": "houndoom",
    "genus": "Dark Pokémon",
    "flavor_text": "Identifiable by its eerie howls, people a long time ago thought it was the grim reaper and feared it.",
    "generation": "generation-ii",
    "color": "black",
    "shape": "quadruped",
    "habitat": "rough-terrain",
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 35,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 118,
    "evolves_from": "houndour",
    "varieties": [
      "houndoom",
      "houndoom-mega"
    ]
  },
  {
    "id": 230,
    "name": "kingdra",
    "genus": "Dragon Pokémon",
    "flavor_text": "Scales shed by this Pokémon have such a splendorous gleam to them that they’ve been given to royalty as gifts.",
    "generation": "generation-ii",
    "color": "blue",
    "shape": "blob",
    "habitat": "sea",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 54,
    "evolves_from": "seadra",
    "varieties": [
      "kingdra"
    ]
  },
  {
    "id": 231,
    "name": "phanpy",
    "genus": "Long Nose Pokémon",
    "flavor_text": "Phanpy uses its long nose to shower itself. When others gather around, they thoroughly douse each other with water. These Pokémon can be seen drying their soaking-wet bodies at the edge of water.",
    "generation": "generation-ii",
    "color": "blue",
    "shape": "quadruped",
    "habitat": "rough-terrain",
    "growth_rate": "medium",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 119,
    "evolves_from": null,
    "varieties": [
      "phanpy"
    ]
  },
  {
    "id": 232,
    "name": "donphan",
    "genus": "Armor Pokémon",
    "flavor_text": "If Donphan were to tackle with its hard body, even a house could be destroyed. Using its massive strength, the Pokémon helps clear rock and mud slides that block mountain trails.",
    "generation": "generation-ii",
    "color": "gray",
    "shape": "quadruped",
    "habitat": "rough-terrain",
    "growth_rate": "medium",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 119,
    "evolves_from": "phanpy",
    "varieties": [
      "donphan"
    ]
  },
  {
    "id": 233,
    "name": "porygon2",
    "genus": "Virtual Pokémon",
    "flavor_text": "A bizarre item caused this Pokémon to evolve. While it now exhibits many new gestures and expressions, its biology remains inscrutable.",
    "generation": "generation-ii",
    "color": "red",
    "shape": "legs",
    "habitat": "urban",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": -1,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 68,
    "evolves_from": "porygon",
    "varieties": [
      "porygon2"
    ]
  },
  {
    "id": 234,
    "name": "stantler",
    "genus": "Big Horn Pokémon",
    "flavor_text": "Its strangely shaped antlers have the power to bewitch those who see them. Medicine made by grinding up the black orbs from fallen antlers is an effective treatment for insomnia.",
    "generation": "generation-ii",
    "color": "brown",
    "shape": "quadruped",
    "habitat": "forest",
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 120,
    "evolves_from": null,
    "varieties": [
      "stantler"
    ]
  },
  {
    "id": 235,
    "name": "smeargle",
    "genus": "Painter Pokémon",
    "flavor_text": "It draws symbols with the fluid that oozes from the tip of its tail. Depending on the symbol, Smeargle fanatics will pay big money for them.",
    "generation": "generation-ii",
    "color": "white",
    "shape": "upright",
    "habitat": "urban",
    "growth_rate": "fast",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 121,
    "evolves_from": null,
    "varieties": [
      "smeargle"
    ]
  },
  {
    "id": 236,
    "name": "tyrogue",
    "genus": "Scuffle Pokémon",
    "flavor_text": "Even though it is small, it can’t be ignored because it will slug any handy target without warning.",
    "generation": "generation-ii",
    "color": "purple",
    "shape": "humanoid",
    "habitat": "urban",
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 0,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": true,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 47,
    "evolves_from": null,
    "varieties": [
      "tyrogue"
    ]
  },
  {
    "id": 237,
    "name": "hitmontop",
    "genus": "Handstand Pokémon",
    "flavor_text": "After doing a handstand to throw off the opponent’s timing, it presents its fancy kick moves.",
    "generation": "generation-ii",
    "color": "brown",
    "shape": "upright",
    "habitat": "urban",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 0,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 47,
    "evolves_from": "tyrogue",
    "varieties": [
      "hitmontop"
    ]
  },
  {
    "id": 238,
    "name": "smoochum",
    "genus": "Kiss Pokémon",
    "flavor_text": "This is a very curious Pokémon. Smoochum decides what it likes and dislikes by touching things with its lips.",
    "generation": "generation-ii",
    "color": "pink",
    "shape": "humanoid",
    "habitat": "urban",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 8,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": true,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 59,
    "evolves_from": null,
    "varieties": [
      "smoochum"
    ]
  },
  {
    "id": 239,
    "name": "elekid",
    "genus": "Electric Pokémon",
    "flavor_text": "They generate electricity by spinning their arms. During a thunderstorm, if one hears the lively voices of children out in the wilderness, what one is actually hearing are the voices of Elekid.",
    "generation": "generation-ii",
    "color": "yellow",
    "shape": "humanoid",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 2,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": true,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 60,
    "evolves_from": null,
    "varieties": [
      "elekid"
    ]
  },
  {
    "id": 240,
    "name": "magby",
    "genus": "Live Coal Pokémon",
    "flavor_text": "This Pokémon lives in volcanic areas. With each breath, sparks spurt from its mouth and nose. When Magby is in good health, its flames gain a yellow tint.",
    "generation": "generation-ii",
    "color": "red",
    "shape": "upright",
    "habitat": "mountain",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 2,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": true,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 61,
    "evolves_from": null,
    "varieties": [
      "magby"
    ]
  },
  {
    "id": 241,
    "name": "miltank",
    "genus": "Milk Cow Pokémon",
    "flavor_text": "This Pokémon needs to be milked every day, or else it will fall ill. The flavor of Miltank milk changes with the seasons.",
    "generation": "generation-ii",
    "color": "pink",
    "shape": "upright",
    "habitat": "grassland",
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 8,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 122,
    "evolves_from": null,
    "varieties": [
      "miltank"
    ]
  },
  {
    "id": 242,
    "name": "blissey",
    "genus": "Happiness Pokémon",
    "flavor_text": "A kindhearted Pokémon that will care for any sick person or Pokémon until their health improves. The eggs it lays are delicious and bring good fortune to those who eat them.",
    "generation": "generation-ii",
    "color": "pink",
    "shape": "humanoid",
    "habitat": "urban",
    "growth_rate": "fast",
    "capture_rate": 30,
    "base_happiness": 140,
    "hatch_counter": 40,
    "gender_rate": 8,
    "egg_groups": [
      "fairy"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 51,
    "evolves_from": "chansey",
    "varieties": [
      "blissey"
    ]
  },
  {
    "id": 243,
    "name": "raikou",
    "genus": "Thunder Pokémon",
    "flavor_text": "Raikou embodies the speed of lightning. The roars of this Pokémon send shock waves shuddering through the air and shake the ground as if lightning bolts had come crashing down.",
    "generation": "generation-ii",
    "color": "yellow",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 35,
    "hatch_counter": 80,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 123,
    "evolves_from": null,
    "varieties": [
      "raikou"
    ]
  },
  {
    "id": 244,
    "name": "entei",
    "genus": "Volcano Pokémon",
    "flavor_text": "Entei embodies the passion of magma. This Pokémon is thought to have been born in the eruption of a volcano. It sends up massive bursts of fire that utterly consume all that they touch.",
    "generation": "generation-ii",
    "color": "brown",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 35,
    "hatch_counter": 80,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 124,
    "evolves_from": null,
    "varieties": [
      "entei"
    ]
  },
  {
    "id": 245,
    "name": "suicune",
    "genus": "Aurora Pokémon",
    "flavor_text": "Suicune embodies the compassion of a pure spring of water. It runs across the land with gracefulness. This Pokémon has the power to purify dirty water.",
    "generation": "generation-ii",
    "color": "blue",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 35,
    "hatch_counter": 80,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 125,
    "evolves_from": null,
    "varieties": [
      "suicune"
    ]
  },
  {
    "id": 246,
    "name": "larvitar",
    "genus": "Rock Skin Pokémon",
    "flavor_text": "It feeds on soil. After it has eaten a large mountain, it will fall asleep so it can grow.",
    "generation": "generation-ii",
    "color": "green",
    "shape": "upright",
    "habitat": "mountain",
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 35,
    "hatch_counter": 40,
    "gender_rate": 4,
    "egg_groups": [
      "monster"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 126,
    "evolves_from": null,
    "varieties": [
      "larvitar"
    ]
  },
  {
    "id": 247,
    "name": "pupitar",
    "genus": "Hard Shell Pokémon",
    "flavor_text": "It will not stay still, even while it’s a pupa. It already has arms and legs under its solid shell.",
    "generation": "generation-ii",
    "color": "gray",
    "shape": "squiggle",
    "habitat": "mountain",
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 35,
    "hatch_counter": 40,
    "gender_rate": 4,
    "egg_groups": [
      "monster"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 126,
    "evolves_from": "larvitar",
    "varieties": [
      "pupitar"
    ]
  },
  {
    "id": 248,
    "name": "tyranitar",
    "genus": "Armor Pokémon",
    "flavor_text": "The quakes caused when it walks make even great mountains crumble and change the surrounding terrain.",
    "generation": "generation-ii",
    "color": "green",
    "shape": "upright",
    "habitat": "mountain",
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 35,
    "hatch_counter": 40,
    "gender_rate": 4,
    "egg_groups": [
      "monster"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 126,
    "evolves_from": "pupitar",
    "varieties": [
      "tyranitar",
      "tyranitar-mega"
    ]
  },
  {
    "id": 249,
    "name": "lugia",
    "genus": "Diving Pokémon",
    "flavor_text": "Lugia’s wings pack devastating power—a light fluttering of its wings can blow apart regular houses. As a result, this Pokémon chooses to live out of sight deep under the sea.",
    "generation": "generation-ii",
    "color": "white",
    "shape": "wings",
    "habitat": "rare",
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 0,
    "hatch_counter": 120,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 127,
    "evolves_from": null,
    "varieties": [
      "lugia"
    ]
  },
  {
    "id": 250,
    "name": "ho-oh",
    "genus": "Rainbow Pokémon",
    "flavor_text": "Ho-Oh’s feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot of a rainbow.",
    "generation": "generation-ii",
    "color": "red",
    "shape": "wings",
    "habitat": "rare",
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 0,
    "hatch_counter": 120,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 128,
    "evolves_from": null,
    "varieties": [
      "ho-oh"
    ]
  },
  {
    "id": 251,
    "name": "celebi",
    "genus": "Time Travel Pokémon",
    "flavor_text": "This Pokémon traveled through time to come from the future. It bolsters grass and trees with its own strength, and it can heal wounds, too.",
    "generation": "generation-ii",
    "color": "green",
    "shape": "humanoid",
    "habitat": "forest",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 100,
    "hatch_counter": 120,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": true,
    "evolution_chain_id": 129,
    "evolves_from": null,
    "varieties": [
      "celebi"
    ]
  },
  {
    "id": 252,
    "name": "treecko",
    "genus": "Wood Gecko Pokémon",
    "flavor_text": "Treecko is cool, calm, and collected—it never panics under any situation. If a bigger foe were to glare at this Pokémon, it would glare right back without conceding an inch of ground.",
    "generation": "generation-iii",
    "color": "green",
    "shape": "upright",
    "habitat": "forest",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "monster",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 130,
    "evolves_from": null,
    "varieties": [
      "treecko"
    ]
  },
  {
    "id": 253,
    "name": "grovyle",
    "genus": "Wood Gecko Pokémon",
    "flavor_text": "This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.",
    "generation": "generation-iii",
    "color": "green",
    "shape": "upright",
    "habitat": "forest",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "monster",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 130,
    "evolves_from": "treecko",
    "varieties": [
      "grovyle"
    ]
  },
  {
    "id": 254,
    "name": "sceptile",
    "genus": "Forest Pokémon",
    "flavor_text": "Sceptile has seeds growing on its back. They are said to be bursting with nutrients that revitalize trees. This Pokémon raises the trees in a forest with loving care.",
    "generation": "generation-iii",
    "color": "green",
    "shape": "upright",
    "habitat": "forest",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "monster",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 130,
    "evolves_from": "grovyle",
    "varieties": [
      "sceptile",
      "sceptile-mega"
    ]
  },
  {
    "id": 255,
    "name": "torchic",
    "genus": "Chick Pokémon",
    "flavor_text": "Torchic has a place inside its body where it keeps its flame. Give it a hug—it will be glowing with warmth. This Pokémon is covered all over by a fluffy coat of down.",
    "generation": "generation-iii",
    "color": "red",
    "shape": "legs",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 131,
    "evolves_from": null,
    "varieties": [
      "torchic"
    ]
  },
  {
    "id": 256,
    "name": "combusken",
    "genus": "Young Fowl Pokémon",
    "flavor_text": "Combusken battles with the intensely hot flames it spews from its beak and with outstandingly destructive kicks. This Pokémon’s cry is very loud and distracting.",
    "generation": "generation-iii",
    "color": "red",
    "shape": "upright",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 131,
    "evolves_from": "torchic",
    "varieties": [
      "combusken"
    ]
  },
  {
    "id": 257,
    "name": "blaziken",
    "genus": "Blaze Pokémon",
    "flavor_text": "Blaziken has incredibly strong legs—it can easily clear a 30-story building in one leap. This Pokémon’s blazing punches leave its foes scorched and blackened.",
    "generation": "generation-iii",
    "color": "red",
    "shape": "upright",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 131,
    "evolves_from": "combusken",
    "varieties": [
      "blaziken",
      "blaziken-mega"
    ]
  },
  {
    "id": 258,
    "name": "mudkip",
    "genus": "Mud Fish Pokémon",
    "flavor_text": "In water, Mudkip breathes using the gills on its cheeks. If it is faced with a tight situation in battle, this Pokémon will unleash its amazing power—it can crush rocks bigger than itself.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "quadruped",
    "habitat": "waters-edge",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "monster",
      "water1"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 132,
    "evolves_from": null,
    "varieties": [
      "mudkip"
    ]
  },
  {
    "id": 259,
    "name": "marshtomp",
    "genus": "Mud Fish Pokémon",
    "flavor_text": "Marshtomp is much faster at traveling through mud than it is at swimming. This Pokémon’s hindquarters exhibit obvious development, giving it the ability to walk on just its hind legs.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "upright",
    "habitat": "waters-edge",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "monster",
      "water1"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 132,
    "evolves_from": "mudkip",
    "varieties": [
      "marshtomp"
    ]
  },
  {
    "id": 260,
    "name": "swampert",
    "genus": "Mud Fish Pokémon",
    "flavor_text": "Swampert predicts storms by sensing subtle differences in the sounds of waves and tidal winds with its fins. If a storm is approaching, it piles up boulders to protect itself.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "upright",
    "habitat": "waters-edge",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "monster",
      "water1"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 132,
    "evolves_from": "marshtomp",
    "varieties": [
      "swampert",
      "swampert-mega"
    ]
  },
  {
    "id": 261,
    "name": "poochyena",
    "genus": "Bite Pokémon",
    "flavor_text": "Poochyena is an omnivore—it will eat anything. A distinguishing feature is how large its fangs are compared to its body. This Pokémon tries to intimidate its foes by making the hair on its tail bristle out.",
    "generation": "generation-iii",
    "color": "gray",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 133,
    "evolves_from": null,
    "varieties": [
      "poochyena"
    ]
  },
  {
    "id": 262,
    "name": "mightyena",
    "genus": "Bite Pokémon",
    "flavor_text": "Mightyena travel and act as a pack in the wild. The memory of its life in the wild compels the Pokémon to obey only those Trainers that it recognizes to possess superior skill.",
    "generation": "generation-iii",
    "color": "gray",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 127,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 133,
    "evolves_from": "poochyena",
    "varieties": [
      "mightyena"
    ]
  },
  {
    "id": 263,
    "name": "zigzagoon",
    "genus": "Tiny Raccoon Pokémon",
    "flavor_text": "Zigzagoon that adapted to regions outside Galar acquired this appearance. If you’ve lost something, this Pokémon can likely find it.",
    "generation": "generation-iii",
    "color": "brown",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 134,
    "evolves_from": null,
    "varieties": [
      "zigzagoon",
      "zigzagoon-galar"
    ]
  },
  {
    "id": 264,
    "name": "linoone",
    "genus": "Rushing Pokémon",
    "flavor_text": "It uses its explosive speed and razor-sharp claws to bring down prey. Running along winding paths is not its strong suit.",
    "generation": "generation-iii",
    "color": "white",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 134,
    "evolves_from": "zigzagoon",
    "varieties": [
      "linoone",
      "linoone-galar"
    ]
  },
  {
    "id": 265,
    "name": "wurmple",
    "genus": "Worm Pokémon",
    "flavor_text": "Likes sap and is abundant in the wild. Why it evolves into various different forms is unknown. One cannot tell from a Wurmple's appearance which form it will take when it evolves.",
    "generation": "generation-iii",
    "color": "red",
    "shape": "armor",
    "habitat": "forest",
    "growth_rate": "medium",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 135,
    "evolves_from": null,
    "varieties": [
      "wurmple"
    ]
  },
  {
    "id": 266,
    "name": "silcoon",
    "genus": "Cocoon Pokémon",
    "flavor_text": "Wraps itself in thin strings of silk while it stores energy for evolution. It can't extend its limbs and its movement is slow, but its eyes keep a sharp lookout—Silcoon is always on guard.",
    "generation": "generation-iii",
    "color": "white",
    "shape": "ball",
    "habitat": "forest",
    "growth_rate": "medium",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 135,
    "evolves_from": "wurmple",
    "varieties": [
      "silcoon"
    ]
  },
  {
    "id": 267,
    "name": "beautifly",
    "genus": "Butterfly Pokémon",
    "flavor_text": "A colorful and incredibly beautiful but also greedy Pokémon. In an effort to keep its favorite food all to itself, it will chase away Combee as they try to gather nectar.",
    "generation": "generation-iii",
    "color": "yellow",
    "shape": "bug-wings",
    "habitat": "forest",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 135,
    "evolves_from": "silcoon",
    "varieties": [
      "beautifly"
    ]
  },
  {
    "id": 268,
    "name": "cascoon",
    "genus": "Cocoon Pokémon",
    "flavor_text": "The silk coating its body is thin but sufficiently strong. Cascoon's silk has a luster and texture superior to that of Silcoon's, and clothes made using Cascoon silk are regarded as top-notch.",
    "generation": "generation-iii",
    "color": "purple",
    "shape": "ball",
    "habitat": "forest",
    "growth_rate": "medium",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 135,
    "evolves_from": "wurmple",
    "varieties": [
      "cascoon"
    ]
  },
  {
    "id": 269,
    "name": "dustox",
    "genus": "Poison Moth Pokémon",
    "flavor_text": "Tends to be drawn to bonfires on dark nights. Difficult to chase away from settlements because of the way it scatters highly toxic scales.",
    "generation": "generation-iii",
    "color": "green",
    "shape": "bug-wings",
    "habitat": "forest",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 135,
    "evolves_from": "cascoon",
    "varieties": [
      "dustox"
    ]
  },
  {
    "id": 270,
    "name": "lotad",
    "genus": "Water Weed Pokémon",
    "flavor_text": "Its leaf grew too large for it to live on land. That is how it began to live floating in the water.",
    "generation": "generation-iii",
    "color": "green",
    "shape": "armor",
    "habitat": "waters-edge",
    "growth_rate": "medium-slow",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 136,
    "evolves_from": null,
    "varieties": [
      "lotad"
    ]
  },
  {
    "id": 271,
    "name": "lombre",
    "genus": "Jolly Pokémon",
    "flavor_text": "It lives at the water’s edge where it is sunny. It sleeps on a bed of water grass by day and becomes active at night.",
    "generation": "generation-iii",
    "color": "green",
    "shape": "humanoid",
    "habitat": "waters-edge",
    "growth_rate": "medium-slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 136,
    "evolves_from": "lotad",
    "varieties": [
      "lombre"
    ]
  },
  {
    "id": 272,
    "name": "ludicolo",
    "genus": "Carefree Pokémon",
    "flavor_text": "If it hears festive music, it begins moving in rhythm in order to amplify its power.",
    "generation": "generation-iii",
    "color": "green",
    "shape": "humanoid",
    "habitat": "waters-edge",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 136,
    "evolves_from": "lombre",
    "varieties": [
      "ludicolo"
    ]
  },
  {
    "id": 273,
    "name": "seedot",
    "genus": "Acorn Pokémon",
    "flavor_text": "It attaches itself to a tree branch using the top of its head. Strong winds can sometimes make it fall.",
    "generation": "generation-iii",
    "color": "brown",
    "shape": "legs",
    "habitat": "forest",
    "growth_rate": "medium-slow",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "ground",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 137,
    "evolves_from": null,
    "varieties": [
      "seedot"
    ]
  },
  {
    "id": 274,
    "name": "nuzleaf",
    "genus": "Wily Pokémon",
    "flavor_text": "They live in holes bored in large trees. The sound of Nuzleaf’s grass flute fills listeners with dread.",
    "generation": "generation-iii",
    "color": "brown",
    "shape": "humanoid",
    "habitat": "forest",
    "growth_rate": "medium-slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "ground",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 137,
    "evolves_from": "seedot",
    "varieties": [
      "nuzleaf"
    ]
  },
  {
    "id": 275,
    "name": "shiftry",
    "genus": "Wicked Pokémon",
    "flavor_text": "It lives quietly in the deep forest. It is said to create chilly winter winds with the fans it holds.",
    "generation": "generation-iii",
    "color": "brown",
    "shape": "humanoid",
    "habitat": "forest",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "ground",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 137,
    "evolves_from": "nuzleaf",
    "varieties": [
      "shiftry"
    ]
  },
  {
    "id": 276,
    "name": "taillow",
    "genus": "Tiny Swallow Pokémon",
    "flavor_text": "Taillow is young—it has only just left its nest. As a result, it sometimes becomes lonesome and cries at night. This Pokémon feeds on Wurmple that live in forests.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "wings",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 200,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 138,
    "evolves_from": null,
    "varieties": [
      "taillow"
    ]
  },
  {
    "id": 277,
    "name": "swellow",
    "genus": "Swallow Pokémon",
    "flavor_text": "Swellow is very conscientious about the upkeep of its glossy wings. Once two Swellow are gathered, they diligently take care of cleaning each other’s wings.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "wings",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 138,
    "evolves_from": "taillow",
    "varieties": [
      "swellow"
    ]
  },
  {
    "id": 278,
    "name": "wingull",
    "genus": "Seagull Pokémon",
    "flavor_text": "It soars on updrafts without flapping its wings. It makes a nest on sheer cliffs at the sea’s edge.",
    "generation": "generation-iii",
    "color": "white",
    "shape": "wings",
    "habitat": "sea",
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 139,
    "evolves_from": null,
    "varieties": [
      "wingull"
    ]
  },
  {
    "id": 279,
    "name": "pelipper",
    "genus": "Water Bird Pokémon",
    "flavor_text": "Skimming the water’s surface, it dips its large bill in the sea, scoops up food and water, and carries it.",
    "generation": "generation-iii",
    "color": "yellow",
    "shape": "wings",
    "habitat": "sea",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 139,
    "evolves_from": "wingull",
    "varieties": [
      "pelipper"
    ]
  },
  {
    "id": 280,
    "name": "ralts",
    "genus": "Feeling Pokémon",
    "flavor_text": "Tends to prefer people with a chipper disposition to those who are gloomy, but it has shown no discrimination with regard to age or gender. Needs more research.",
    "generation": "generation-iii",
    "color": "white",
    "shape": "humanoid",
    "habitat": "urban",
    "growth_rate": "slow",
    "capture_rate": 235,
    "base_happiness": 35,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "humanshape",
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 140,
    "evolves_from": null,
    "varieties": [
      "ralts"
    ]
  },
  {
    "id": 281,
    "name": "kirlia",
    "genus": "Emotion Pokémon",
    "flavor_text": "It resembles a maiden in appearance, but it wields strange powers to project visions of paradise. I suspect the crimson ornaments on its head are the key to its abilities.",
    "generation": "generation-iii",
    "color": "white",
    "shape": "humanoid",
    "habitat": "urban",
    "growth_rate": "slow",
    "capture_rate": 120,
    "base_happiness": 35,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "humanshape",
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 140,
    "evolves_from": "ralts",
    "varieties": [
      "kirlia"
    ]
  },
  {
    "id": 282,
    "name": "gardevoir",
    "genus": "Embrace Pokémon",
    "flavor_text": "It will dedicate itself to defending a master it has come to adore. Its pure white dress, reminiscent of those worn by ladies of nobility, is the dress of one who is willing to risk their life.",
    "generation": "generation-iii",
    "color": "white",
    "shape": "humanoid",
    "habitat": "urban",
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 35,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "humanshape",
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 140,
    "evolves_from": "kirlia",
    "varieties": [
      "gardevoir",
      "gardevoir-mega"
    ]
  },
  {
    "id": 283,
    "name": "surskit",
    "genus": "Pond Skater Pokémon",
    "flavor_text": "It lives in ponds and marshes that feature lots of plant life. It often fights with Dewpider, whose habitat and diet are similar.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "armor",
    "habitat": "waters-edge",
    "growth_rate": "medium",
    "capture_rate": 200,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 141,
    "evolves_from": null,
    "varieties": [
      "surskit"
    ]
  },
  {
    "id": 284,
    "name": "masquerain",
    "genus": "Eyeball Pokémon",
    "flavor_text": "Its thin, winglike antennae are highly absorbent. It waits out rainy days in tree hollows.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "bug-wings",
    "habitat": "waters-edge",
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 141,
    "evolves_from": "surskit",
    "varieties": [
      "masquerain"
    ]
  },
  {
    "id": 285,
    "name": "shroomish",
    "genus": "Mushroom Pokémon",
    "flavor_text": "If Shroomish senses danger, it shakes its body and scatters spores from the top of its head. This Pokémon’s spores are so toxic, they make trees and weeds wilt.",
    "generation": "generation-iii",
    "color": "brown",
    "shape": "legs",
    "habitat": "forest",
    "growth_rate": "fast-then-very-slow",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "fairy",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 142,
    "evolves_from": null,
    "varieties": [
      "shroomish"
    ]
  },
  {
    "id": 286,
    "name": "breloom",
    "genus": "Mushroom Pokémon",
    "flavor_text": "The seeds ringing Breloom’s tail are made of hardened toxic spores. It is horrible to eat the seeds. Just taking a bite of this Pokémon’s seed will cause your stomach to rumble.",
    "generation": "generation-iii",
    "color": "green",
    "shape": "upright",
    "habitat": "forest",
    "growth_rate": "fast-then-very-slow",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "fairy",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 142,
    "evolves_from": "shroomish",
    "varieties": [
      "breloom"
    ]
  },
  {
    "id": 287,
    "name": "slakoth",
    "genus": "Slacker Pokémon",
    "flavor_text": "Slakoth’s heart beats just once a minute. Whatever happens, it is content to loaf around motionless. It is rare to see this Pokémon in motion.",
    "generation": "generation-iii",
    "color": "brown",
    "shape": "quadruped",
    "habitat": "forest",
    "growth_rate": "slow",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 143,
    "evolves_from": null,
    "varieties": [
      "slakoth"
    ]
  },
  {
    "id": 288,
    "name": "vigoroth",
    "genus": "Wild Monkey Pokémon",
    "flavor_text": "Vigoroth is simply incapable of remaining still. Even when it tries to sleep, the blood in its veins grows agitated, compelling this Pokémon to run wild throughout the jungle before it can settle down.",
    "generation": "generation-iii",
    "color": "white",
    "shape": "upright",
    "habitat": "forest",
    "growth_rate": "slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 143,
    "evolves_from": "slakoth",
    "varieties": [
      "vigoroth"
    ]
  },
  {
    "id": 289,
    "name": "slaking",
    "genus": "Lazy Pokémon",
    "flavor_text": "Wherever Slaking live, rings of over a yard in diameter appear in grassy fields. They are made by the Pokémon as it eats all the grass within reach while lying prone on the ground.",
    "generation": "generation-iii",
    "color": "brown",
    "shape": "humanoid",
    "habitat": "forest",
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 143,
    "evolves_from": "vigoroth",
    "varieties": [
      "slaking"
    ]
  },
  {
    "id": 290,
    "name": "nincada",
    "genus": "Trainee Pokémon",
    "flavor_text": "It can sometimes live underground for more than 10 years. It absorbs nutrients from the roots of trees.",
    "generation": "generation-iii",
    "color": "gray",
    "shape": "armor",
    "habitat": "forest",
    "growth_rate": "slow-then-very-fast",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 144,
    "evolves_from": null,
    "varieties": [
      "nincada"
    ]
  },
  {
    "id": 291,
    "name": "ninjask",
    "genus": "Ninja Pokémon",
    "flavor_text": "This Pokémon is so quick, it is said to be able to avoid any attack. It loves to feed on tree sap.",
    "generation": "generation-iii",
    "color": "yellow",
    "shape": "bug-wings",
    "habitat": "forest",
    "growth_rate": "slow-then-very-fast",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 144,
    "evolves_from": "nincada",
    "varieties": [
      "ninjask"
    ]
  },
  {
    "id": 292,
    "name": "shedinja",
    "genus": "Shed Pokémon",
    "flavor_text": "A strange Pokémon—it flies without moving its wings, has a hollow shell for a body, and does not breathe.",
    "generation": "generation-iii",
    "color": "brown",
    "shape": "blob",
    "habitat": "forest",
    "growth_rate": "slow-then-very-fast",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": -1,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 144,
    "evolves_from": "nincada",
    "varieties": [
      "shedinja"
    ]
  },
  {
    "id": 293,
    "name": "whismur",
    "genus": "Whisper Pokémon",
    "flavor_text": "When Whismur cries, the sound of its own voice startles it, making the Pokémon cry even louder. It cries until it’s exhausted, then it falls asleep.",
    "generation": "generation-iii",
    "color": "pink",
    "shape": "upright",
    "habitat": "cave",
    "growth_rate": "medium-slow",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "monster",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 145,
    "evolves_from": null,
    "varieties": [
      "whismur"
    ]
  },
  {
    "id": 294,
    "name": "loudred",
    "genus": "Big Voice Pokémon",
    "flavor_text": "The force of this Pokémon’s loud voice isn’t just the sound—it’s also the wave of air pressure that blows opponents away and damages them.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "upright",
    "habitat": "cave",
    "growth_rate": "medium-slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "monster",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 145,
    "evolves_from": "whismur",
    "varieties": [
      "loudred"
    ]
  },
  {
    "id": 295,
    "name": "exploud",
    "genus": "Loud Noise Pokémon",
    "flavor_text": "This Pokémon can do more than just shout. To communicate with others of its kind, it’ll emit all sorts of sounds from the holes in its body.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "upright",
    "habitat": "cave",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "monster",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 145,
    "evolves_from": "loudred",
    "varieties": [
      "exploud"
    ]
  },
  {
    "id": 296,
    "name": "makuhita",
    "genus": "Guts Pokémon",
    "flavor_text": "There’s a rumor of a traditional recipe for stew that Trainers can use to raise strong Makuhita.",
    "generation": "generation-iii",
    "color": "yellow",
    "shape": "humanoid",
    "habitat": "mountain",
    "growth_rate": "fast-then-very-slow",
    "capture_rate": 180,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 2,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 146,
    "evolves_from": null,
    "varieties": [
      "makuhita"
    ]
  },
  {
    "id": 297,
    "name": "hariyama",
    "genus": "Arm Thrust Pokémon",
    "flavor_text": "Hariyama that are big and fat aren’t necessarily strong. There are some small ones that move nimbly and use moves skillfully.",
    "generation": "generation-iii",
    "color": "brown",
    "shape": "humanoid",
    "habitat": "mountain",
    "growth_rate": "fast-then-very-slow",
    "capture_rate": 200,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 2,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 146,
    "evolves_from": "makuhita",
    "varieties": [
      "hariyama"
    ]
  },
  {
    "id": 298,
    "name": "azurill",
    "genus": "Polka Dot Pokémon",
    "flavor_text": "Although Azurill are normally docile, an angry one will swing around the big ball on its tail and try to smash its opponents.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "legs",
    "habitat": "waters-edge",
    "growth_rate": "fast",
    "capture_rate": 150,
    "base_happiness": 70,
    "hatch_counter": 10,
    "gender_rate": 6,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": true,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 90,
    "evolves_from": null,
    "varieties": [
      "azurill"
    ]
  },
  {
    "id": 299,
    "name": "nosepass",
    "genus": "Compass Pokémon",
    "flavor_text": "Once the people of Hisui discovered that its red nose always points north, they grew to rely on it greatly when traveling afar. The nose seems to work in a similar way to ancient compasses.",
    "generation": "generation-iii",
    "color": "gray",
    "shape": "humanoid",
    "habitat": "cave",
    "growth_rate": "medium",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 147,
    "evolves_from": null,
    "varieties": [
      "nosepass"
    ]
  },
  {
    "id": 300,
    "name": "skitty",
    "genus": "Kitten Pokémon",
    "flavor_text": "Skitty is known to chase around playfully after its own tail. In the wild, this Pokémon lives in holes in the trees of forests. It is very popular as a pet because of its adorable looks.",
    "generation": "generation-iii",
    "color": "pink",
    "shape": "quadruped",
    "habitat": "forest",
    "growth_rate": "fast",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 6,
    "egg_groups": [
      "ground",
      "fairy"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 148,
    "evolves_from": null,
    "varieties": [
      "skitty"
    ]
  },
  {
    "id": 301,
    "name": "delcatty",
    "genus": "Prim Pokémon",
    "flavor_text": "Delcatty sleeps anywhere it wants without keeping a permanent nest. If other Pokémon approach it as it sleeps, this Pokémon will never fight—it will just move away somewhere else.",
    "generation": "generation-iii",
    "color": "purple",
    "shape": "quadruped",
    "habitat": "forest",
    "growth_rate": "fast",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 6,
    "egg_groups": [
      "ground",
      "fairy"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 148,
    "evolves_from": "skitty",
    "varieties": [
      "delcatty"
    ]
  },
  {
    "id": 302,
    "name": "sableye",
    "genus": "Darkness Pokémon",
    "flavor_text": "It feeds on gemstone crystals. In darkness, its eyes sparkle with the glitter of jewels.",
    "generation": "generation-iii",
    "color": "purple",
    "shape": "humanoid",
    "habitat": "cave",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 35,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 149,
    "evolves_from": null,
    "varieties": [
      "sableye",
      "sableye-mega"
    ]
  },
  {
    "id": 303,
    "name": "mawile",
    "genus": "Deceiver Pokémon",
    "flavor_text": "It chomps with its gaping mouth. Its huge jaws are actually steel horns that have been transformed.",
    "generation": "generation-iii",
    "color": "black",
    "shape": "humanoid",
    "habitat": "cave",
    "growth_rate": "fast",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground",
      "fairy"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 150,
    "evolves_from": null,
    "varieties": [
      "mawile",
      "mawile-mega"
    ]
  },
  {
    "id": 304,
    "name": "aron",
    "genus": "Iron Armor Pokémon",
    "flavor_text": "When Aron evolves, its steel armor peels off. In ancient times, people would collect Aron’s shed armor and make good use of it in their daily lives.",
    "generation": "generation-iii",
    "color": "gray",
    "shape": "quadruped",
    "habitat": "mountain",
    "growth_rate": "slow",
    "capture_rate": 180,
    "base_happiness": 35,
    "hatch_counter": 35,
    "gender_rate": 4,
    "egg_groups": [
      "monster"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 151,
    "evolves_from": null,
    "varieties": [
      "aron"
    ]
  },
  {
    "id": 305,
    "name": "lairon",
    "genus": "Iron Armor Pokémon",
    "flavor_text": "During territorial disputes, Lairon fight by slamming into each other. Close inspection of their steel armor reveals scratches and dents.",
    "generation": "generation-iii",
    "color": "gray",
    "shape": "quadruped",
    "habitat": "mountain",
    "growth_rate": "slow",
    "capture_rate": 90,
    "base_happiness": 35,
    "hatch_counter": 35,
    "gender_rate": 4,
    "egg_groups": [
      "monster"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 151,
    "evolves_from": "aron",
    "varieties": [
      "lairon"
    ]
  },
  {
    "id": 306,
    "name": "aggron",
    "genus": "Iron Armor Pokémon",
    "flavor_text": "Long ago, there was a king who wore a helmet meant to resemble the head of an Aggron. He was trying to channel the Pokémon’s strength.",
    "generation": "generation-iii",
    "color": "gray",
    "shape": "upright",
    "habitat": "mountain",
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 35,
    "hatch_counter": 35,
    "gender_rate": 4,
    "egg_groups": [
      "monster"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 151,
    "evolves_from": "lairon",
    "varieties": [
      "aggron",
      "aggron-mega"
    ]
  },
  {
    "id": 307,
    "name": "meditite",
    "genus": "Meditate Pokémon",
    "flavor_text": "Meditite heightens its inner energy through meditation. It survives on just one berry a day. Minimal eating is another aspect of this Pokémon’s training.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "humanoid",
    "habitat": "mountain",
    "growth_rate": "medium",
    "capture_rate": 180,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 152,
    "evolves_from": null,
    "varieties": [
      "meditite"
    ]
  },
  {
    "id": 308,
    "name": "medicham",
    "genus": "Meditate Pokémon",
    "flavor_text": "Through the power of meditation, Medicham developed its sixth sense. It gained the ability to use psychokinetic powers. This Pokémon is known to meditate for a whole month without eating.",
    "generation": "generation-iii",
    "color": "red",
    "shape": "humanoid",
    "habitat": "mountain",
    "growth_rate": "medium",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 152,
    "evolves_from": "meditite",
    "varieties": [
      "medicham",
      "medicham-mega"
    ]
  },
  {
    "id": 309,
    "name": "electrike",
    "genus": "Lightning Pokémon",
    "flavor_text": "It stores electricity in its fur. It gives off sparks from all over its body in seasons when the air is dry.",
    "generation": "generation-iii",
    "color": "green",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 153,
    "evolves_from": null,
    "varieties": [
      "electrike"
    ]
  },
  {
    "id": 310,
    "name": "manectric",
    "genus": "Discharge Pokémon",
    "flavor_text": "It rarely appears before people. It is said to nest where lightning has fallen.",
    "generation": "generation-iii",
    "color": "yellow",
    "shape": "quadruped",
    "habitat": "grassland",
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 153,
    "evolves_from": "electrike",
    "varieties": [
      "manectric",
      "manectric-mega"
    ]
  },
  {
    "id": 311,
    "name": "plusle",
    "genus": "Cheering Pokémon",
    "flavor_text": "When Plusle is cheering on its partner, it flashes with electric sparks from all over its body. If its partner loses, this Pokémon cries loudly.",
    "generation": "generation-iii",
    "color": "yellow",
    "shape": "upright",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 200,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "fairy"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 154,
    "evolves_from": null,
    "varieties": [
      "plusle"
    ]
  },
  {
    "id": 312,
    "name": "minun",
    "genus": "Cheering Pokémon",
    "flavor_text": "Minun loves to cheer on its partner in battle. It gives off sparks from its body while it is doing so. If its partner is in trouble, this Pokémon gives off increasing amounts of sparks.",
    "generation": "generation-iii",
    "color": "yellow",
    "shape": "upright",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 200,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "fairy"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 155,
    "evolves_from": null,
    "varieties": [
      "minun"
    ]
  },
  {
    "id": 313,
    "name": "volbeat",
    "genus": "Firefly Pokémon",
    "flavor_text": "Volbeat’s tail glows like a lightbulb. With other Volbeat, it uses its tail to draw geometric shapes in the night sky. This Pokémon loves the sweet aroma given off by Illumise.",
    "generation": "generation-iii",
    "color": "gray",
    "shape": "upright",
    "habitat": "forest",
    "growth_rate": "slow-then-very-fast",
    "capture_rate": 150,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 0,
    "egg_groups": [
      "bug",
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 156,
    "evolves_from": null,
    "varieties": [
      "volbeat"
    ]
  },
  {
    "id": 314,
    "name": "illumise",
    "genus": "Firefly Pokémon",
    "flavor_text": "Illumise leads a flight of illuminated Volbeat to draw signs in the night sky. This Pokémon is said to earn greater respect from its peers by composing more complex designs in the sky.",
    "generation": "generation-iii",
    "color": "purple",
    "shape": "humanoid",
    "habitat": "forest",
    "growth_rate": "fast-then-very-slow",
    "capture_rate": 150,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 8,
    "egg_groups": [
      "bug",
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 157,
    "evolves_from": null,
    "varieties": [
      "illumise"
    ]
  },
  {
    "id": 315,
    "name": "roselia",
    "genus": "Thorn Pokémon",
    "flavor_text": "Though beautiful, it has highly poisonous thorns. There is an old tradition in my homeland wherein one would send these thorns to an opponent to challenge them to a duel.",
    "generation": "generation-iii",
    "color": "green",
    "shape": "humanoid",
    "habitat": "grassland",
    "growth_rate": "medium-slow",
    "capture_rate": 150,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "fairy",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 158,
    "evolves_from": "budew",
    "varieties": [
      "roselia"
    ]
  },
  {
    "id": 316,
    "name": "gulpin",
    "genus": "Stomach Pokémon",
    "flavor_text": "Most of Gulpin’s body is made up of its stomach—its heart and brain are very small in comparison. This Pokémon’s stomach contains special enzymes that dissolve anything.",
    "generation": "generation-iii",
    "color": "green",
    "shape": "arms",
    "habitat": "grassland",
    "growth_rate": "fast-then-very-slow",
    "capture_rate": 225,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 159,
    "evolves_from": null,
    "varieties": [
      "gulpin"
    ]
  },
  {
    "id": 317,
    "name": "swalot",
    "genus": "Poison Bag Pokémon",
    "flavor_text": "Swalot has no teeth, so what it eats, it swallows whole, no matter what. Its cavernous mouth yawns widely. An automobile tire could easily fit inside this Pokémon’s mouth.",
    "generation": "generation-iii",
    "color": "purple",
    "shape": "arms",
    "habitat": "grassland",
    "growth_rate": "fast-then-very-slow",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 159,
    "evolves_from": "gulpin",
    "varieties": [
      "swalot"
    ]
  },
  {
    "id": 318,
    "name": "carvanha",
    "genus": "Savage Pokémon",
    "flavor_text": "These Pokémon have sharp fangs and powerful jaws. Sailors avoid Carvanha dens at all costs.",
    "generation": "generation-iii",
    "color": "red",
    "shape": "fish",
    "habitat": "sea",
    "growth_rate": "slow",
    "capture_rate": 225,
    "base_happiness": 35,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water2"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 160,
    "evolves_from": null,
    "varieties": [
      "carvanha"
    ]
  },
  {
    "id": 319,
    "name": "sharpedo",
    "genus": "Brutal Pokémon",
    "flavor_text": "This Pokémon is known as the Bully of the Sea. Any ship entering the waters Sharpedo calls home will be attacked—no exceptions.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "fish",
    "habitat": "sea",
    "growth_rate": "slow",
    "capture_rate": 60,
    "base_happiness": 35,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water2"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 160,
    "evolves_from": "carvanha",
    "varieties": [
      "sharpedo",
      "sharpedo-mega"
    ]
  },
  {
    "id": 320,
    "name": "wailmer",
    "genus": "Ball Whale Pokémon",
    "flavor_text": "When it sucks in a large volume of seawater, it becomes like a big, bouncy ball. It eats a ton of food daily.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "fish",
    "habitat": "sea",
    "growth_rate": "fast-then-very-slow",
    "capture_rate": 125,
    "base_happiness": 70,
    "hatch_counter": 40,
    "gender_rate": 4,
    "egg_groups": [
      "ground",
      "water2"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 161,
    "evolves_from": null,
    "varieties": [
      "wailmer"
    ]
  },
  {
    "id": 321,
    "name": "wailord",
    "genus": "Float Whale Pokémon",
    "flavor_text": "Its immense size is the reason for its popularity. Wailord watching is a favorite sightseeing activity in various parts of the world.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "fish",
    "habitat": "sea",
    "growth_rate": "fast-then-very-slow",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 40,
    "gender_rate": 4,
    "egg_groups": [
      "ground",
      "water2"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 161,
    "evolves_from": "wailmer",
    "varieties": [
      "wailord"
    ]
  },
  {
    "id": 322,
    "name": "numel",
    "genus": "Numb Pokémon",
    "flavor_text": "Numel stores magma of almost 2,200 degrees Fahrenheit within its body. If it gets wet, the magma cools and hardens. In that event, the Pokémon’s body grows heavy and its movements become sluggish.",
    "generation": "generation-iii",
    "color": "yellow",
    "shape": "quadruped",
    "habitat": "mountain",
    "growth_rate": "medium",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 162,
    "evolves_from": null,
    "varieties": [
      "numel"
    ]
  },
  {
    "id": 323,
    "name": "camerupt",
    "genus": "Eruption Pokémon",
    "flavor_text": "The humps on Camerupt’s back are formed by a transformation of its bones. They sometimes blast out molten magma. This Pokémon apparently erupts often when it is enraged.",
    "generation": "generation-iii",
    "color": "red",
    "shape": "quadruped",
    "habitat": "mountain",
    "growth_rate": "medium",
    "capture_rate": 150,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 162,
    "evolves_from": "numel",
    "varieties": [
      "camerupt",
      "camerupt-mega"
    ]
  },
  {
    "id": 324,
    "name": "torkoal",
    "genus": "Coal Pokémon",
    "flavor_text": "You find abandoned coal mines full of them. They dig tirelessly in search of coal.",
    "generation": "generation-iii",
    "color": "brown",
    "shape": "quadruped",
    "habitat": "mountain",
    "growth_rate": "medium",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 163,
    "evolves_from": null,
    "varieties": [
      "torkoal"
    ]
  },
  {
    "id": 325,
    "name": "spoink",
    "genus": "Bounce Pokémon",
    "flavor_text": "Spoink keeps a pearl on top of its head. The pearl functions to amplify this Pokémon’s psychokinetic powers. It is therefore on a constant search for a bigger pearl.",
    "generation": "generation-iii",
    "color": "black",
    "shape": "arms",
    "habitat": "mountain",
    "growth_rate": "fast",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 164,
    "evolves_from": null,
    "varieties": [
      "spoink"
    ]
  },
  {
    "id": 326,
    "name": "grumpig",
    "genus": "Manipulate Pokémon",
    "flavor_text": "Grumpig uses the black pearls on its body to wield its fantastic powers. When it is doing so, it dances bizarrely. This Pokémon’s black pearls are valuable as works of art.",
    "generation": "generation-iii",
    "color": "purple",
    "shape": "upright",
    "habitat": "mountain",
    "growth_rate": "fast",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 164,
    "evolves_from": "spoink",
    "varieties": [
      "grumpig"
    ]
  },
  {
    "id": 327,
    "name": "spinda",
    "genus": "Spot Panda Pokémon",
    "flavor_text": "Each Spinda’s spot pattern is different. With its stumbling movements, it evades opponents’ attacks brilliantly!",
    "generation": "generation-iii",
    "color": "brown",
    "shape": "upright",
    "habitat": "mountain",
    "growth_rate": "fast",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "ground",
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 165,
    "evolves_from": null,
    "varieties": [
      "spinda"
    ]
  },
  {
    "id": 328,
    "name": "trapinch",
    "genus": "Ant Pit Pokémon",
    "flavor_text": "It makes an inescapable conical pit and lies in wait at the bottom for prey to come tumbling down.",
    "generation": "generation-iii",
    "color": "brown",
    "shape": "armor",
    "habitat": "rough-terrain",
    "growth_rate": "medium-slow",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "bug",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 166,
    "evolves_from": null,
    "varieties": [
      "trapinch"
    ]
  },
  {
    "id": 329,
    "name": "vibrava",
    "genus": "Vibration Pokémon",
    "flavor_text": "To help make its wings grow, it dissolves quantities of prey in its digestive juices and guzzles them down every day.",
    "generation": "generation-iii",
    "color": "green",
    "shape": "bug-wings",
    "habitat": "rough-terrain",
    "growth_rate": "medium-slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "bug",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 166,
    "evolves_from": "trapinch",
    "varieties": [
      "vibrava"
    ]
  },
  {
    "id": 330,
    "name": "flygon",
    "genus": "Mystic Pokémon",
    "flavor_text": "It is nicknamed the Desert Spirit because the flapping of its wings sounds like a woman singing.",
    "generation": "generation-iii",
    "color": "green",
    "shape": "wings",
    "habitat": "rough-terrain",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "bug",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 166,
    "evolves_from": "vibrava",
    "varieties": [
      "flygon"
    ]
  },
  {
    "id": 331,
    "name": "cacnea",
    "genus": "Cactus Pokémon",
    "flavor_text": "The more arid and harsh the environment, the more pretty and fragrant a flower Cacnea grows. This Pokémon battles by wildly swinging its thorny arms.",
    "generation": "generation-iii",
    "color": "green",
    "shape": "humanoid",
    "habitat": "rough-terrain",
    "growth_rate": "medium-slow",
    "capture_rate": 190,
    "base_happiness": 35,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "plant",
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 167,
    "evolves_from": null,
    "varieties": [
      "cacnea"
    ]
  },
  {
    "id": 332,
    "name": "cacturne",
    "genus": "Scarecrow Pokémon",
    "flavor_text": "If a traveler is going through a desert in the thick of night, Cacturne will follow in a ragtag group. The Pokémon are biding their time, waiting for the traveler to tire and become incapable of moving.",
    "generation": "generation-iii",
    "color": "green",
    "shape": "humanoid",
    "habitat": "rough-terrain",
    "growth_rate": "medium-slow",
    "capture_rate": 60,
    "base_happiness": 35,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "plant",
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 167,
    "evolves_from": "cacnea",
    "varieties": [
      "cacturne"
    ]
  },
  {
    "id": 333,
    "name": "swablu",
    "genus": "Cotton Bird Pokémon",
    "flavor_text": "Since Swablu looks like a cumulus cloud, foes can have a hard time finding it. Apparently its wings turned white over many generations.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "wings",
    "habitat": "forest",
    "growth_rate": "slow-then-very-fast",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "flying",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 168,
    "evolves_from": null,
    "varieties": [
      "swablu"
    ]
  },
  {
    "id": 334,
    "name": "altaria",
    "genus": "Humming Pokémon",
    "flavor_text": "This Pokémon has a kind disposition, but if it’s provoked, it will threaten opponents with shrill cries before attacking them without mercy.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "wings",
    "habitat": "forest",
    "growth_rate": "slow-then-very-fast",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "flying",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 168,
    "evolves_from": "swablu",
    "varieties": [
      "altaria",
      "altaria-mega"
    ]
  },
  {
    "id": 335,
    "name": "zangoose",
    "genus": "Cat Ferret Pokémon",
    "flavor_text": "Zangoose usually stays on all fours, but when angered, it gets up on its hind legs and extends its claws. This Pokémon shares a bitter rivalry with Seviper that dates back over generations.",
    "generation": "generation-iii",
    "color": "white",
    "shape": "upright",
    "habitat": "grassland",
    "growth_rate": "slow-then-very-fast",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 169,
    "evolves_from": null,
    "varieties": [
      "zangoose"
    ]
  },
  {
    "id": 336,
    "name": "seviper",
    "genus": "Fang Snake Pokémon",
    "flavor_text": "Seviper’s swordlike tail serves two purposes—it slashes foes and douses them with secreted poison. This Pokémon will not give up its long-running blood feud with Zangoose.",
    "generation": "generation-iii",
    "color": "black",
    "shape": "squiggle",
    "habitat": "grassland",
    "growth_rate": "fast-then-very-slow",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 170,
    "evolves_from": null,
    "varieties": [
      "seviper"
    ]
  },
  {
    "id": 337,
    "name": "lunatone",
    "genus": "Meteorite Pokémon",
    "flavor_text": "It was discovered at the site of a meteor strike 40 years ago. Its stare can lull its foes to sleep.",
    "generation": "generation-iii",
    "color": "yellow",
    "shape": "ball",
    "habitat": "cave",
    "growth_rate": "fast",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": -1,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 171,
    "evolves_from": null,
    "varieties": [
      "lunatone"
    ]
  },
  {
    "id": 338,
    "name": "solrock",
    "genus": "Meteorite Pokémon",
    "flavor_text": "Solar energy is the source of its power, so it is strong during the daytime. When it spins, its body shines.",
    "generation": "generation-iii",
    "color": "red",
    "shape": "ball",
    "habitat": "cave",
    "growth_rate": "fast",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": -1,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 172,
    "evolves_from": null,
    "varieties": [
      "solrock"
    ]
  },
  {
    "id": 339,
    "name": "barboach",
    "genus": "Whiskers Pokémon",
    "flavor_text": "Makes its home in swamps with murky water. The poor visibility hides this Pokémon from predators, and the slime on its body makes grasping it difficult.",
    "generation": "generation-iii",
    "color": "gray",
    "shape": "fish",
    "habitat": "waters-edge",
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water2"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 173,
    "evolves_from": null,
    "varieties": [
      "barboach"
    ]
  },
  {
    "id": 340,
    "name": "whiscash",
    "genus": "Whiskers Pokémon",
    "flavor_text": "Strikes its caudal fin against the swamp bed to shake the ground and startle its prey. It will then swallow the fleeing prey whole. People mistook this behavior as the cause of earthquakes.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "fish",
    "habitat": "waters-edge",
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water2"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 173,
    "evolves_from": "barboach",
    "varieties": [
      "whiscash"
    ]
  },
  {
    "id": 341,
    "name": "corphish",
    "genus": "Ruffian Pokémon",
    "flavor_text": "It was originally a Pokémon from afar that escaped to the wild. It can adapt to the dirtiest river.",
    "generation": "generation-iii",
    "color": "red",
    "shape": "armor",
    "habitat": "waters-edge",
    "growth_rate": "fast-then-very-slow",
    "capture_rate": 205,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "water3"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 174,
    "evolves_from": null,
    "varieties": [
      "corphish"
    ]
  },
  {
    "id": 342,
    "name": "crawdaunt",
    "genus": "Rogue Pokémon",
    "flavor_text": "A brutish Pokémon that loves to battle. It will crash itself into any foe that approaches its nest.",
    "generation": "generation-iii",
    "color": "red",
    "shape": "armor",
    "habitat": "waters-edge",
    "growth_rate": "fast-then-very-slow",
    "capture_rate": 155,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "water3"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 174,
    "evolves_from": "corphish",
    "varieties": [
      "crawdaunt"
    ]
  },
  {
    "id": 343,
    "name": "baltoy",
    "genus": "Clay Doll Pokémon",
    "flavor_text": "It was discovered in ancient ruins. While moving, it constantly spins. It stands on one foot even when asleep.",
    "generation": "generation-iii",
    "color": "brown",
    "shape": "arms",
    "habitat": "rough-terrain",
    "growth_rate": "medium",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": -1,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 175,
    "evolves_from": null,
    "varieties": [
      "baltoy"
    ]
  },
  {
    "id": 344,
    "name": "claydol",
    "genus": "Clay Doll Pokémon",
    "flavor_text": "It appears to have been born from clay dolls made by ancient people. It uses telekinesis to float and move.",
    "generation": "generation-iii",
    "color": "black",
    "shape": "arms",
    "habitat": "rough-terrain",
    "growth_rate": "medium",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": -1,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 175,
    "evolves_from": "baltoy",
    "varieties": [
      "claydol"
    ]
  },
  {
    "id": 345,
    "name": "lileep",
    "genus": "Sea Lily Pokémon",
    "flavor_text": "Lileep clings to rocks on the seabed. When prey comes close, this Pokémon entangles it with petallike tentacles.",
    "generation": "generation-iii",
    "color": "purple",
    "shape": "blob",
    "habitat": "sea",
    "growth_rate": "slow-then-very-fast",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 30,
    "gender_rate": 1,
    "egg_groups": [
      "water3"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 176,
    "evolves_from": null,
    "varieties": [
      "lileep"
    ]
  },
  {
    "id": 346,
    "name": "cradily",
    "genus": "Barnacle Pokémon",
    "flavor_text": "Once Cradily catches prey in its tentacles, it digests them whole and absorbs their nutrients.",
    "generation": "generation-iii",
    "color": "green",
    "shape": "blob",
    "habitat": "sea",
    "growth_rate": "slow-then-very-fast",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 30,
    "gender_rate": 1,
    "egg_groups": [
      "water3"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 176,
    "evolves_from": "lileep",
    "varieties": [
      "cradily"
    ]
  },
  {
    "id": 347,
    "name": "anorith",
    "genus": "Old Shrimp Pokémon",
    "flavor_text": "Anorith can swim swiftly by pulling its eight wings through the water like oars on a boat. This Pokémon is an ancestor of modern bug Pokémon.",
    "generation": "generation-iii",
    "color": "gray",
    "shape": "armor",
    "habitat": "waters-edge",
    "growth_rate": "slow-then-very-fast",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 30,
    "gender_rate": 1,
    "egg_groups": [
      "water3"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 177,
    "evolves_from": null,
    "varieties": [
      "anorith"
    ]
  },
  {
    "id": 348,
    "name": "armaldo",
    "genus": "Plate Pokémon",
    "flavor_text": "Though it lives on land, it’s also a good swimmer. It dives into the ocean in search of prey, using its sharp claws to take down its quarry.",
    "generation": "generation-iii",
    "color": "gray",
    "shape": "upright",
    "habitat": "waters-edge",
    "growth_rate": "slow-then-very-fast",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 30,
    "gender_rate": 1,
    "egg_groups": [
      "water3"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 177,
    "evolves_from": "anorith",
    "varieties": [
      "armaldo"
    ]
  },
  {
    "id": 349,
    "name": "feebas",
    "genus": "Fish Pokémon",
    "flavor_text": "It is a shabby and ugly Pokémon. However, it is very hardy and can survive on little water.",
    "generation": "generation-iii",
    "color": "brown",
    "shape": "fish",
    "habitat": "waters-edge",
    "growth_rate": "slow-then-very-fast",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 178,
    "evolves_from": null,
    "varieties": [
      "feebas"
    ]
  },
  {
    "id": 350,
    "name": "milotic",
    "genus": "Tender Pokémon",
    "flavor_text": "It’s said that a glimpse of a Milotic and its beauty will calm any hostile emotions you’re feeling.",
    "generation": "generation-iii",
    "color": "pink",
    "shape": "squiggle",
    "habitat": "waters-edge",
    "growth_rate": "slow-then-very-fast",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 178,
    "evolves_from": "feebas",
    "varieties": [
      "milotic"
    ]
  },
  {
    "id": 351,
    "name": "castform",
    "genus": "Weather Pokémon",
    "flavor_text": "Its form changes depending on the weather. The rougher conditions get, the rougher Castform’s disposition!",
    "generation": "generation-iii",
    "color": "gray",
    "shape": "ball",
    "habitat": "grassland",
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "fairy",
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 179,
    "evolves_from": null,
    "varieties": [
      "castform",
      "castform-sunny",
      "castform-rainy",
      "castform-snowy"
    ]
  },
  {
    "id": 352,
    "name": "kecleon",
    "genus": "Color Swap Pokémon",
    "flavor_text": "Its color changes for concealment and also when its mood or health changes. The darker the color, the healthier it is.",
    "generation": "generation-iii",
    "color": "green",
    "shape": "upright",
    "habitat": "forest",
    "growth_rate": "medium-slow",
    "capture_rate": 200,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 180,
    "evolves_from": null,
    "varieties": [
      "kecleon"
    ]
  },
  {
    "id": 353,
    "name": "shuppet",
    "genus": "Puppet Pokémon",
    "flavor_text": "There’s a proverb that says, “Shun the house where Shuppet gather in the growing dusk.”",
    "generation": "generation-iii",
    "color": "black",
    "shape": "ball",
    "habitat": "urban",
    "growth_rate": "fast",
    "capture_rate": 225,
    "base_happiness": 35,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 181,
    "evolves_from": null,
    "varieties": [
      "shuppet"
    ]
  },
  {
    "id": 354,
    "name": "banette",
    "genus": "Marionette Pokémon",
    "flavor_text": "Resentment at being cast off made it spring into being. Some say that treating it well will satisfy it, and it will once more become a stuffed toy.",
    "generation": "generation-iii",
    "color": "black",
    "shape": "upright",
    "habitat": "urban",
    "growth_rate": "fast",
    "capture_rate": 45,
    "base_happiness": 35,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 181,
    "evolves_from": "shuppet",
    "varieties": [
      "banette",
      "banette-mega"
    ]
  },
  {
    "id": 355,
    "name": "duskull",
    "genus": "Requiem Pokémon",
    "flavor_text": "I've heard that the children of Hisui all begin to behave once they've been told the story of how this Pokémon roams about before the witching hour to spirit away misbehaving children.",
    "generation": "generation-iii",
    "color": "black",
    "shape": "arms",
    "habitat": "forest",
    "growth_rate": "fast",
    "capture_rate": 190,
    "base_happiness": 35,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 182,
    "evolves_from": null,
    "varieties": [
      "duskull"
    ]
  },
  {
    "id": 356,
    "name": "dusclops",
    "genus": "Beckon Pokémon",
    "flavor_text": "There are rumors that peeking inside its bandage-wrapped body will cause one to get pulled in through the gaps between the bandages, never to return. I've been too scared to verify.",
    "generation": "generation-iii",
    "color": "black",
    "shape": "humanoid",
    "habitat": "forest",
    "growth_rate": "fast",
    "capture_rate": 90,
    "base_happiness": 35,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 182,
    "evolves_from": "duskull",
    "varieties": [
      "dusclops"
    ]
  },
  {
    "id": 357,
    "name": "tropius",
    "genus": "Fruit Pokémon",
    "flavor_text": "Bunches of delicious fruit grow around its neck. In warm areas, many ranches raise Tropius.",
    "generation": "generation-iii",
    "color": "green",
    "shape": "quadruped",
    "habitat": "forest",
    "growth_rate": "slow",
    "capture_rate": 200,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "monster",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 183,
    "evolves_from": null,
    "varieties": [
      "tropius"
    ]
  },
  {
    "id": 358,
    "name": "chimecho",
    "genus": "Wind Chime Pokémon",
    "flavor_text": "Can emit waves of air powerful enough to knock out prey taller than itself. I hypothesize that it amplifies the faint sound of wind within its body.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "arms",
    "habitat": "grassland",
    "growth_rate": "fast",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 184,
    "evolves_from": "chingling",
    "varieties": [
      "chimecho",
      "chimecho-mega"
    ]
  },
  {
    "id": 359,
    "name": "absol",
    "genus": "Disaster Pokémon",
    "flavor_text": "Because of this Pokémon’s ability to detect danger, people mistook Absol as a bringer of doom.",
    "generation": "generation-iii",
    "color": "white",
    "shape": "quadruped",
    "habitat": "mountain",
    "growth_rate": "medium-slow",
    "capture_rate": 30,
    "base_happiness": 35,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 185,
    "evolves_from": null,
    "varieties": [
      "absol",
      "absol-mega",
      "absol-mega-z"
    ]
  },
  {
    "id": 360,
    "name": "wynaut",
    "genus": "Bright Pokémon",
    "flavor_text": "It tends to move in a pack with others. They cluster in a tight group to sleep in a cave.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "upright",
    "habitat": "cave",
    "growth_rate": "medium",
    "capture_rate": 125,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": true,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 100,
    "evolves_from": null,
    "varieties": [
      "wynaut"
    ]
  },
  {
    "id": 361,
    "name": "snorunt",
    "genus": "Snow Hat Pokémon",
    "flavor_text": "Arrives alongside the first snow. It's thought that homes Snorunt visit will prosper for many generations. By tradition, one might offer a lump of ice made from pure water at one's front door.",
    "generation": "generation-iii",
    "color": "gray",
    "shape": "humanoid",
    "habitat": "cave",
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "fairy",
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 186,
    "evolves_from": null,
    "varieties": [
      "snorunt"
    ]
  },
  {
    "id": 362,
    "name": "glalie",
    "genus": "Face Pokémon",
    "flavor_text": "It covers its body with an armor of ice harder than steel. Uses its breath to freeze prey, which it then devours as if they were frozen desserts.",
    "generation": "generation-iii",
    "color": "gray",
    "shape": "ball",
    "habitat": "cave",
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "fairy",
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 186,
    "evolves_from": "snorunt",
    "varieties": [
      "glalie",
      "glalie-mega"
    ]
  },
  {
    "id": 363,
    "name": "spheal",
    "genus": "Clap Pokémon",
    "flavor_text": "During the season when drift ice approaches the shore, Spheal prefers living on the ice—where fewer predators lurk—rather than the land. Its fur retains heat superbly and resists harsh cold.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "fish",
    "habitat": "sea",
    "growth_rate": "medium-slow",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 187,
    "evolves_from": null,
    "varieties": [
      "spheal"
    ]
  },
  {
    "id": 364,
    "name": "sealeo",
    "genus": "Ball Roll Pokémon",
    "flavor_text": "Its white whiskers are very sensitive. Sealeo will balance Spheal on the tip of its nose, checking its scent and its feel to be sure the Spheal is healthy.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "fish",
    "habitat": "sea",
    "growth_rate": "medium-slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 187,
    "evolves_from": "spheal",
    "varieties": [
      "sealeo"
    ]
  },
  {
    "id": 365,
    "name": "walrein",
    "genus": "Ice Break Pokémon",
    "flavor_text": "Its thick tusks are strong enough to shatter drift ice. They have been known to break, but they will grow back by the next year. The Hisui region is well known for these broken tusks.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "quadruped",
    "habitat": "sea",
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 187,
    "evolves_from": "sealeo",
    "varieties": [
      "walrein"
    ]
  },
  {
    "id": 366,
    "name": "clamperl",
    "genus": "Bivalve Pokémon",
    "flavor_text": "Clamperl’s pearls are exceedingly precious. They can be more than 10 times as costly as Shellder’s pearls.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "ball",
    "habitat": "sea",
    "growth_rate": "slow-then-very-fast",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 188,
    "evolves_from": null,
    "varieties": [
      "clamperl"
    ]
  },
  {
    "id": 367,
    "name": "huntail",
    "genus": "Deep Sea Pokémon",
    "flavor_text": "Deep seas are their habitat. According to tradition, when Huntail wash up onshore, something unfortunate will happen.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "squiggle",
    "habitat": "sea",
    "growth_rate": "slow-then-very-fast",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 188,
    "evolves_from": "clamperl",
    "varieties": [
      "huntail"
    ]
  },
  {
    "id": 368,
    "name": "gorebyss",
    "genus": "South Sea Pokémon",
    "flavor_text": "It sucks bodily fluids out of its prey. The leftover meat sinks to the seafloor, where it becomes food for other Pokémon.",
    "generation": "generation-iii",
    "color": "pink",
    "shape": "squiggle",
    "habitat": "sea",
    "growth_rate": "slow-then-very-fast",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 188,
    "evolves_from": "clamperl",
    "varieties": [
      "gorebyss"
    ]
  },
  {
    "id": 369,
    "name": "relicanth",
    "genus": "Longevity Pokémon",
    "flavor_text": "This Pokémon was discovered during deep-sea exploration. Its appearance hasn’t changed in 100,000,000 years, so it’s called a living fossil.",
    "generation": "generation-iii",
    "color": "gray",
    "shape": "fish",
    "habitat": "sea",
    "growth_rate": "slow",
    "capture_rate": 25,
    "base_happiness": 70,
    "hatch_counter": 40,
    "gender_rate": 1,
    "egg_groups": [
      "water1",
      "water2"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 189,
    "evolves_from": null,
    "varieties": [
      "relicanth"
    ]
  },
  {
    "id": 370,
    "name": "luvdisc",
    "genus": "Rendezvous Pokémon",
    "flavor_text": "Luvdisc makes its home in coral reefs in warm seas. It especially likes sleeping in the space between Corsola’s branches.",
    "generation": "generation-iii",
    "color": "pink",
    "shape": "fish",
    "habitat": "sea",
    "growth_rate": "fast",
    "capture_rate": 225,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 6,
    "egg_groups": [
      "water2"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 190,
    "evolves_from": null,
    "varieties": [
      "luvdisc"
    ]
  },
  {
    "id": 371,
    "name": "bagon",
    "genus": "Rock Head Pokémon",
    "flavor_text": "Bagon is a solitary Pokémon that doesn’t form groups with others of its kind. It also has a head hard enough to cleave a boulder in one strike.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "humanoid",
    "habitat": "rough-terrain",
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 35,
    "hatch_counter": 40,
    "gender_rate": 4,
    "egg_groups": [
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 191,
    "evolves_from": null,
    "varieties": [
      "bagon"
    ]
  },
  {
    "id": 372,
    "name": "shelgon",
    "genus": "Endurance Pokémon",
    "flavor_text": "Shelgon ignores its hunger entirely, never eating any food. Apparently, Shelgon will evolve once all its energy stores are used up.",
    "generation": "generation-iii",
    "color": "white",
    "shape": "quadruped",
    "habitat": "rough-terrain",
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 35,
    "hatch_counter": 40,
    "gender_rate": 4,
    "egg_groups": [
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 191,
    "evolves_from": "bagon",
    "varieties": [
      "shelgon"
    ]
  },
  {
    "id": 373,
    "name": "salamence",
    "genus": "Dragon Pokémon",
    "flavor_text": "While basking in the joy of flight generally keeps this Pokémon in high spirits, Salamence turns into an uncontrollable menace if something angers it.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "quadruped",
    "habitat": "rough-terrain",
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 35,
    "hatch_counter": 40,
    "gender_rate": 4,
    "egg_groups": [
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 191,
    "evolves_from": "shelgon",
    "varieties": [
      "salamence",
      "salamence-mega"
    ]
  },
  {
    "id": 374,
    "name": "beldum",
    "genus": "Iron Ball Pokémon",
    "flavor_text": "The cells in this Pokémon’s body are composed of magnetic material. Instead of blood, magnetic forces flow through Beldum’s body.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "blob",
    "habitat": "rough-terrain",
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 35,
    "hatch_counter": 40,
    "gender_rate": -1,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 192,
    "evolves_from": null,
    "varieties": [
      "beldum"
    ]
  },
  {
    "id": 375,
    "name": "metang",
    "genus": "Iron Claw Pokémon",
    "flavor_text": "Using magnetic forces to stay aloft, this Pokémon flies at high speeds, weaving through harsh mountain terrain in pursuit of prey.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "arms",
    "habitat": "rough-terrain",
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 35,
    "hatch_counter": 40,
    "gender_rate": -1,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 192,
    "evolves_from": "beldum",
    "varieties": [
      "metang"
    ]
  },
  {
    "id": 376,
    "name": "metagross",
    "genus": "Iron Leg Pokémon",
    "flavor_text": "Metagross is the result of the fusion of two Metang. This Pokémon defeats its opponents through use of its supercomputer-level brain.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "heads",
    "habitat": "rough-terrain",
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 35,
    "hatch_counter": 40,
    "gender_rate": -1,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 192,
    "evolves_from": "metang",
    "varieties": [
      "metagross",
      "metagross-mega"
    ]
  },
  {
    "id": 377,
    "name": "regirock",
    "genus": "Rock Peak Pokémon",
    "flavor_text": "Cutting-edge technology was used to study the internals of this Pokémon’s rock body, but nothing was found—not even a brain or a heart.",
    "generation": "generation-iii",
    "color": "brown",
    "shape": "humanoid",
    "habitat": "cave",
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 35,
    "hatch_counter": 80,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 193,
    "evolves_from": null,
    "varieties": [
      "regirock"
    ]
  },
  {
    "id": 378,
    "name": "regice",
    "genus": "Iceberg Pokémon",
    "flavor_text": "This Pokémon’s body is made of solid ice. It’s said that Regice was born beneath thick ice in the ice age.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "humanoid",
    "habitat": "cave",
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 35,
    "hatch_counter": 80,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 194,
    "evolves_from": null,
    "varieties": [
      "regice"
    ]
  },
  {
    "id": 379,
    "name": "registeel",
    "genus": "Iron Pokémon",
    "flavor_text": "It’s rumored that this Pokémon was born deep underground in the planet’s mantle and that it emerged onto the surface 10,000 years ago.",
    "generation": "generation-iii",
    "color": "gray",
    "shape": "humanoid",
    "habitat": "cave",
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 35,
    "hatch_counter": 80,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 195,
    "evolves_from": null,
    "varieties": [
      "registeel"
    ]
  },
  {
    "id": 380,
    "name": "latias",
    "genus": "Eon Pokémon",
    "flavor_text": "Latias is highly intelligent and capable of understanding human speech. It is covered with a glass-like down. The Pokémon enfolds its body with its down and refracts light to alter its appearance.",
    "generation": "generation-iii",
    "color": "red",
    "shape": "wings",
    "habitat": "waters-edge",
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 90,
    "hatch_counter": 120,
    "gender_rate": 8,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 196,
    "evolves_from": null,
    "varieties": [
      "latias",
      "latias-mega"
    ]
  },
  {
    "id": 381,
    "name": "latios",
    "genus": "Eon Pokémon",
    "flavor_text": "Latios will only open its heart to a Trainer with a compassionate spirit. This Pokémon can fly faster than a jet plane by folding its forelegs to minimize air resistance.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "wings",
    "habitat": "waters-edge",
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 90,
    "hatch_counter": 120,
    "gender_rate": 0,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 197,
    "evolves_from": null,
    "varieties": [
      "latios",
      "latios-mega"
    ]
  },
  {
    "id": 382,
    "name": "kyogre",
    "genus": "Sea Basin Pokémon",
    "flavor_text": "Kyogre is said to be the personification of the sea itself. Legends tell of its many clashes against Groudon, as each sought to gain the power of nature.",
    "generation": "generation-iii",
    "color": "blue",
    "shape": "fish",
    "habitat": "sea",
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 0,
    "hatch_counter": 120,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 198,
    "evolves_from": null,
    "varieties": [
      "kyogre",
      "kyogre-primal"
    ]
  },
  {
    "id": 383,
    "name": "groudon",
    "genus": "Continent Pokémon",
    "flavor_text": "Through Primal Reversion and with nature’s full power, it will take back its true form. It can cause magma to erupt and expand the landmass of the world.",
    "generation": "generation-iii",
    "color": "red",
    "shape": "upright",
    "habitat": "rough-terrain",
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 0,
    "hatch_counter": 120,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 199,
    "evolves_from": null,
    "varieties": [
      "groudon",
      "groudon-primal"
    ]
  },
  {
    "id": 384,
    "name": "rayquaza",
    "genus": "Sky High Pokémon",
    "flavor_text": "It flies forever through the ozone layer, consuming meteoroids for sustenance. The many meteoroids in its body provide the energy it needs to Mega Evolve.",
    "generation": "generation-iii",
    "color": "green",
    "shape": "squiggle",
    "habitat": "rare",
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 0,
    "hatch_counter": 120,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 200,
    "evolves_from": null,
    "varieties": [
      "rayquaza",
      "rayquaza-mega"
    ]
  },
  {
    "id": 385,
    "name": "jirachi",
    "genus": "Wish Pokémon",
    "flavor_text": "It’s believed that when this Pokémon wakes from its 1,000-year slumber, it will grant any wishes written on the notes attached to its head.",
    "generation": "generation-iii",
    "color": "yellow",
    "shape": "humanoid",
    "habitat": "mountain",
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 100,
    "hatch_counter": 120,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": true,
    "evolution_chain_id": 201,
    "evolves_from": null,
    "varieties": [
      "jirachi"
    ]
  },
  {
    "id": 386,
    "name": "deoxys",
    "genus": "DNA Pokémon",
    "flavor_text": "Deoxys emerged from a virus that came from space. It is highly intelligent and wields psychokinetic powers. This Pokémon shoots lasers from the crystalline organ on its chest.",
    "generation": "generation-iii",
    "color": "red",
    "shape": "humanoid",
    "habitat": "rare",
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 0,
    "hatch_counter": 120,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": true,
    "evolution_chain_id": 202,
    "evolves_from": null,
    "varieties": [
      "deoxys-normal",
      "deoxys-attack",
      "deoxys-defense",
      "deoxys-speed"
    ]
  },
  {
    "id": 387,
    "name": "turtwig",
    "genus": "Tiny Leaf Pokémon",
    "flavor_text": "This Pokémon becomes more energetic the more sunlight there is. The part resembling a shell is similar to silt and is slightly damp and warm to the touch.",
    "generation": "generation-iv",
    "color": "green",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "monster",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 203,
    "evolves_from": null,
    "varieties": [
      "turtwig"
    ]
  },
  {
    "id": 388,
    "name": "grotle",
    "genus": "Grove Pokémon",
    "flavor_text": "Appears where there is clean spring water. The fruit that grows on the shrubs on its shell is sweet, nutritious, and truly delicious.",
    "generation": "generation-iv",
    "color": "green",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "monster",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 203,
    "evolves_from": "turtwig",
    "varieties": [
      "grotle"
    ]
  },
  {
    "id": 389,
    "name": "torterra",
    "genus": "Continent Pokémon",
    "flavor_text": "This remarkable, large-bodied Pokémon would serve beautifully as borrowed scenery for a garden, and its strength is peerless. Torterra roams the wilderness in search of clean water.",
    "generation": "generation-iv",
    "color": "green",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "monster",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 203,
    "evolves_from": "grotle",
    "varieties": [
      "torterra"
    ]
  },
  {
    "id": 390,
    "name": "chimchar",
    "genus": "Chimp Pokémon",
    "flavor_text": "Full of vigor and always in high spirits. It was once known by the name ”Lantern-Tail” and feared as some kind of apparition.",
    "generation": "generation-iv",
    "color": "brown",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "ground",
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 204,
    "evolves_from": null,
    "varieties": [
      "chimchar"
    ]
  },
  {
    "id": 391,
    "name": "monferno",
    "genus": "Playful Pokémon",
    "flavor_text": "The deeper the blue on its face, the more powerful it will grow to become. It leaps about every which way and lands powerful blows against its opponents with the flame on its tail.",
    "generation": "generation-iv",
    "color": "brown",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "ground",
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 204,
    "evolves_from": "chimchar",
    "varieties": [
      "monferno"
    ]
  },
  {
    "id": 392,
    "name": "infernape",
    "genus": "Flame Pokémon",
    "flavor_text": "A tall, hardy Pokémon with a dazzling appearance. It shrouds itself in flame and battles as if engaged in dance—truly a sight to behold.",
    "generation": "generation-iv",
    "color": "brown",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "ground",
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 204,
    "evolves_from": "monferno",
    "varieties": [
      "infernape"
    ]
  },
  {
    "id": 393,
    "name": "piplup",
    "genus": "Penguin Pokémon",
    "flavor_text": "Prefers cold climes and appears along coasts. It's an adorable little thing—as cute as any child—but it's also prideful, unwilling to accept handouts from people.",
    "generation": "generation-iv",
    "color": "blue",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "water1",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 205,
    "evolves_from": null,
    "varieties": [
      "piplup"
    ]
  },
  {
    "id": 394,
    "name": "prinplup",
    "genus": "Penguin Pokémon",
    "flavor_text": "It swims gracefully through the frigid sea and sings with a voice like the roaring tide. It has powerful, sturdy wings and dignity to match.",
    "generation": "generation-iv",
    "color": "blue",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "water1",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 205,
    "evolves_from": "piplup",
    "varieties": [
      "prinplup"
    ]
  },
  {
    "id": 395,
    "name": "empoleon",
    "genus": "Emperor Pokémon",
    "flavor_text": "Since ancient times, it has been revered by the people of Hisui, who call it the Master of the Waves. Its wings are a match for even master-crafted blades.",
    "generation": "generation-iv",
    "color": "blue",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "water1",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 205,
    "evolves_from": "prinplup",
    "varieties": [
      "empoleon"
    ]
  },
  {
    "id": 396,
    "name": "starly",
    "genus": "Starling Pokémon",
    "flavor_text": "They live in the fields and mountains, gathering in large flocks. Their cries are quite obnoxious. Though small, their wings are strong—a strike from them leaves pain that persists for a week.",
    "generation": "generation-iv",
    "color": "brown",
    "shape": "wings",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 206,
    "evolves_from": null,
    "varieties": [
      "starly"
    ]
  },
  {
    "id": 397,
    "name": "staravia",
    "genus": "Starling Pokémon",
    "flavor_text": "They form remarkably large flocks and are constantly fighting amongst themselves. I suspect that those with magnificent plumes on their heads are the strong ones.",
    "generation": "generation-iv",
    "color": "brown",
    "shape": "wings",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 206,
    "evolves_from": "starly",
    "varieties": [
      "staravia"
    ]
  },
  {
    "id": 398,
    "name": "staraptor",
    "genus": "Predator Pokémon",
    "flavor_text": "It has left the flock, having gained strength enough to survive on its own. The astounding force with which Staraptor flies through the air allows it to carry away large, burly targets.",
    "generation": "generation-iv",
    "color": "brown",
    "shape": "wings",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 206,
    "evolves_from": "staravia",
    "varieties": [
      "staraptor",
      "staraptor-mega"
    ]
  },
  {
    "id": 399,
    "name": "bidoof",
    "genus": "Plump Mouse Pokémon",
    "flavor_text": "Bidoof has an unsophisticated face and is rarely flustered by anything. There have been incidents involving Bidoof sauntering into villages and gnawing on the houses without a single care.",
    "generation": "generation-iv",
    "color": "brown",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 207,
    "evolves_from": null,
    "varieties": [
      "bidoof"
    ]
  },
  {
    "id": 400,
    "name": "bibarel",
    "genus": "Beaver Pokémon",
    "flavor_text": "Bibarel fur repels water and is also a fantastic material for heat retention. These Pokémon create dams on rivers to live in.",
    "generation": "generation-iv",
    "color": "brown",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 127,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 207,
    "evolves_from": "bidoof",
    "varieties": [
      "bibarel"
    ]
  },
  {
    "id": 401,
    "name": "kricketot",
    "genus": "Cricket Pokémon",
    "flavor_text": "When the trees take on new hues, more of these Pokémon appear. The tone they create by striking their antennae together resembles that of the marimba, an instrument of foreign lands.",
    "generation": "generation-iv",
    "color": "red",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 208,
    "evolves_from": null,
    "varieties": [
      "kricketot"
    ]
  },
  {
    "id": 402,
    "name": "kricketune",
    "genus": "Cricket Pokémon",
    "flavor_text": "It uses its cutlass-like arms to produce sound, the melody of which varies from individual to individual. It is a worthwhile endeavor to seek out one's favorite tunes.",
    "generation": "generation-iv",
    "color": "red",
    "shape": "bug-wings",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 208,
    "evolves_from": "kricketot",
    "varieties": [
      "kricketune"
    ]
  },
  {
    "id": 403,
    "name": "shinx",
    "genus": "Flash Pokémon",
    "flavor_text": "Shakes its body to generate electricity. Its stature belies its aggression—one must be patient to tame this Pokémon.",
    "generation": "generation-iv",
    "color": "blue",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 235,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 209,
    "evolves_from": null,
    "varieties": [
      "shinx"
    ]
  },
  {
    "id": 404,
    "name": "luxio",
    "genus": "Spark Pokémon",
    "flavor_text": "Proudly uses its electrified claws as weapons. It seems to be a gracious Pokémon, evenly sharing the spoils of the hunt with others of its kind.",
    "generation": "generation-iv",
    "color": "blue",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 120,
    "base_happiness": 100,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 209,
    "evolves_from": "shinx",
    "varieties": [
      "luxio"
    ]
  },
  {
    "id": 405,
    "name": "luxray",
    "genus": "Gleam Eyes Pokémon",
    "flavor_text": "They form packs, each having one male as leader. Legends say that when Luxray's two eyes shimmer with gold, the Pokémon can see through anything.",
    "generation": "generation-iv",
    "color": "blue",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 209,
    "evolves_from": "luxio",
    "varieties": [
      "luxray"
    ]
  },
  {
    "id": 406,
    "name": "budew",
    "genus": "Bud Pokémon",
    "flavor_text": "When the sun's light strengthens, the bud atop this Pokémon's head opens. This is a sign to the people that the harsh winter is over, and the season of budding has begun.",
    "generation": "generation-iv",
    "color": "green",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": true,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 158,
    "evolves_from": null,
    "varieties": [
      "budew"
    ]
  },
  {
    "id": 407,
    "name": "roserade",
    "genus": "Bouquet Pokémon",
    "flavor_text": "Hidden within the bouquet on each hand are thorned whips loaded with virulent poison. Roserade moves gracefully as it corners its prey and mercilessly lashes them with its whips.",
    "generation": "generation-iv",
    "color": "green",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "fairy",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 158,
    "evolves_from": "roselia",
    "varieties": [
      "roserade"
    ]
  },
  {
    "id": 408,
    "name": "cranidos",
    "genus": "Head Butt Pokémon",
    "flavor_text": "An incredibly rare sight. They duel each other by ramming their heads together, and the resulting sound echoes throughout the area like the pealing of a bell.",
    "generation": "generation-iv",
    "color": "blue",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "slow-then-very-fast",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 30,
    "gender_rate": 1,
    "egg_groups": [
      "monster"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 211,
    "evolves_from": null,
    "varieties": [
      "cranidos"
    ]
  },
  {
    "id": 409,
    "name": "rampardos",
    "genus": "Head Butt Pokémon",
    "flavor_text": "Very little is known about its biology. Can knock down massive trees by smashing its beautiful, pearl-like crown against them.",
    "generation": "generation-iv",
    "color": "blue",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "slow-then-very-fast",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 30,
    "gender_rate": 1,
    "egg_groups": [
      "monster"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 211,
    "evolves_from": "cranidos",
    "varieties": [
      "rampardos"
    ]
  },
  {
    "id": 410,
    "name": "shieldon",
    "genus": "Shield Pokémon",
    "flavor_text": "Much remains unknown about this Pokémon, as few have ever seen it. However, we know that it is calm and dislikes conflict, and it enjoys polishing its face against trees and rocks.",
    "generation": "generation-iv",
    "color": "gray",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "slow-then-very-fast",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 30,
    "gender_rate": 1,
    "egg_groups": [
      "monster"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 212,
    "evolves_from": null,
    "varieties": [
      "shieldon"
    ]
  },
  {
    "id": 411,
    "name": "bastiodon",
    "genus": "Shield Pokémon",
    "flavor_text": "Its face is sturdy—as strong as diamond—and this hardness offers a very stable defense. Much about this species is still unknown, such as its natural habitat.",
    "generation": "generation-iv",
    "color": "gray",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "slow-then-very-fast",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 30,
    "gender_rate": 1,
    "egg_groups": [
      "monster"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 212,
    "evolves_from": "shieldon",
    "varieties": [
      "bastiodon"
    ]
  },
  {
    "id": 412,
    "name": "burmy",
    "genus": "Bagworm Pokémon",
    "flavor_text": "If its cloak is even slightly damaged, Burmy will immediately repair it with whatever is close at hand. The Pokémon within the cloak is scrawny and vulnerable to the cold.",
    "generation": "generation-iv",
    "color": "green",
    "shape": "blob",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 213,
    "evolves_from": null,
    "varieties": [
      "burmy"
    ]
  },
  {
    "id": 413,
    "name": "wormadam",
    "genus": "Bagworm Pokémon",
    "flavor_text": "When Burmy evolved, its cloak became a part of this Pokémon’s body. The cloak is never shed.",
    "generation": "generation-iv",
    "color": "green",
    "shape": "blob",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 8,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 213,
    "evolves_from": "burmy",
    "varieties": [
      "wormadam-plant",
      "wormadam-sandy",
      "wormadam-trash"
    ]
  },
  {
    "id": 414,
    "name": "mothim",
    "genus": "Moth Pokémon",
    "flavor_text": "Scatters steel-colored scales as it flaps its wings. Despite being observed feeding primarily on the nectar of flowers, Mothim is not often seen around flower gardens.",
    "generation": "generation-iv",
    "color": "yellow",
    "shape": "bug-wings",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 0,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 213,
    "evolves_from": "burmy",
    "varieties": [
      "mothim"
    ]
  },
  {
    "id": 415,
    "name": "combee",
    "genus": "Tiny Bee Pokémon",
    "flavor_text": "They swear fealty to a queen Pokémon and work diligently to gather nectar. Each swarm produces a different flavor of honey.",
    "generation": "generation-iv",
    "color": "yellow",
    "shape": "heads",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 1,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 214,
    "evolves_from": null,
    "varieties": [
      "combee"
    ]
  },
  {
    "id": 416,
    "name": "vespiquen",
    "genus": "Beehive Pokémon",
    "flavor_text": "Commands its subjects to build its hive. It will dispatch any interlopers who dare sneak into its nest and use them as nourishment for itself.",
    "generation": "generation-iv",
    "color": "yellow",
    "shape": "bug-wings",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 8,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 214,
    "evolves_from": "combee",
    "varieties": [
      "vespiquen"
    ]
  },
  {
    "id": 417,
    "name": "pachirisu",
    "genus": "EleSquirrel Pokémon",
    "flavor_text": "A species related to the Pikachu line. Though Pachirisu is a calm Pokémon, it still presents a danger should one touch its electrified tail or cheeks.",
    "generation": "generation-iv",
    "color": "white",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 200,
    "base_happiness": 100,
    "hatch_counter": 10,
    "gender_rate": 4,
    "egg_groups": [
      "ground",
      "fairy"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 215,
    "evolves_from": null,
    "varieties": [
      "pachirisu"
    ]
  },
  {
    "id": 418,
    "name": "buizel",
    "genus": "Sea Weasel Pokémon",
    "flavor_text": "It moves freely in the water by spinning its forked tail for propulsion. The resemblance to the screw of a steamboat is coincidental.",
    "generation": "generation-iv",
    "color": "brown",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 216,
    "evolves_from": null,
    "varieties": [
      "buizel"
    ]
  },
  {
    "id": 419,
    "name": "floatzel",
    "genus": "Sea Weasel Pokémon",
    "flavor_text": "Has a long, rather splendid flotation sac, which prevents Floatzel from drowning even in stormy seas. One might glimpse this species around fishing hamlets from time to time.",
    "generation": "generation-iv",
    "color": "brown",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 216,
    "evolves_from": "buizel",
    "varieties": [
      "floatzel"
    ]
  },
  {
    "id": 420,
    "name": "cherubi",
    "genus": "Cherry Pokémon",
    "flavor_text": "Once the fruit growing alongside the main body is large and plump, Cherubi will use the nutrients within to evolve. The fruit then detaches, becoming nourishment for other creatures.",
    "generation": "generation-iv",
    "color": "pink",
    "shape": "heads",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "fairy",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 217,
    "evolves_from": null,
    "varieties": [
      "cherubi"
    ]
  },
  {
    "id": 421,
    "name": "cherrim",
    "genus": "Blossom Pokémon",
    "flavor_text": "Motionless, save for the occasional quiver. A rich array of Pokémon can be found gathered around it, drawn by the scent exuded from Cherrim's folded petals.",
    "generation": "generation-iv",
    "color": "purple",
    "shape": "legs",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "fairy",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 217,
    "evolves_from": "cherubi",
    "varieties": [
      "cherrim"
    ]
  },
  {
    "id": 422,
    "name": "shellos",
    "genus": "Sea Slug Pokémon",
    "flavor_text": "Found in abundance on seashores bordering warm waters. Shellos are unexpectedly friendly and will crawl toward any person they see. Take care not to get coated in mucus!",
    "generation": "generation-iv",
    "color": "purple",
    "shape": "squiggle",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 218,
    "evolves_from": null,
    "varieties": [
      "shellos"
    ]
  },
  {
    "id": 423,
    "name": "gastrodon",
    "genus": "Sea Slug Pokémon",
    "flavor_text": "Eats beach sand for nourishment. Should one Gastrodon encounter another of a different color, a fierce battle will inevitably ensue.",
    "generation": "generation-iv",
    "color": "purple",
    "shape": "squiggle",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 218,
    "evolves_from": "shellos",
    "varieties": [
      "gastrodon"
    ]
  },
  {
    "id": 424,
    "name": "ambipom",
    "genus": "Long Tail Pokémon",
    "flavor_text": "To affirm their kinship, members of this species will form a ring by linking their newly doubled tails together. On rare occasions, humans have been accepted into such rings.",
    "generation": "generation-iv",
    "color": "purple",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "fast",
    "capture_rate": 45,
    "base_happiness": 100,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 93,
    "evolves_from": "aipom",
    "varieties": [
      "ambipom"
    ]
  },
  {
    "id": 425,
    "name": "drifloon",
    "genus": "Balloon Pokémon",
    "flavor_text": "Said to lure away young children and carry them off to the afterlife. Some whisper that Drifloon are formed of reincarnated human souls, but these rumors are as yet unconfirmed.",
    "generation": "generation-iv",
    "color": "purple",
    "shape": "arms",
    "habitat": null,
    "growth_rate": "fast-then-very-slow",
    "capture_rate": 125,
    "base_happiness": 70,
    "hatch_counter": 30,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 219,
    "evolves_from": null,
    "varieties": [
      "drifloon"
    ]
  },
  {
    "id": 426,
    "name": "drifblim",
    "genus": "Blimp Pokémon",
    "flavor_text": "It drifts along at dusk, perfectly silent. Its transient, melancholy aspect touches some people deeply—every so often, one will come upon a song or poem devoted to Drifblim.",
    "generation": "generation-iv",
    "color": "purple",
    "shape": "arms",
    "habitat": null,
    "growth_rate": "fast-then-very-slow",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 30,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 219,
    "evolves_from": "drifloon",
    "varieties": [
      "drifblim"
    ]
  },
  {
    "id": 427,
    "name": "buneary",
    "genus": "Rabbit Pokémon",
    "flavor_text": "My hypothesis as to why Buneary rolls up its ears is that its hearing is far too keen. I surmise that the Pokémon protects its hearing by limiting the sound that may enter its ears.",
    "generation": "generation-iv",
    "color": "brown",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 0,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground",
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 220,
    "evolves_from": null,
    "varieties": [
      "buneary"
    ]
  },
  {
    "id": 428,
    "name": "lopunny",
    "genus": "Rabbit Pokémon",
    "flavor_text": "Its fur is warm and yet remarkably light. This Pokémon kicks as though it were a master of karate, driving back its opponents with ease.",
    "generation": "generation-iv",
    "color": "brown",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 60,
    "base_happiness": 140,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground",
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 220,
    "evolves_from": "buneary",
    "varieties": [
      "lopunny",
      "lopunny-mega"
    ]
  },
  {
    "id": 429,
    "name": "mismagius",
    "genus": "Magical Pokémon",
    "flavor_text": "The incantations Mismagius chants can ward against misfortune, so a custom exists of inviting it into one's home. Incur the Pokémon's displeasure, however, and disaster will surely ensue.",
    "generation": "generation-iv",
    "color": "purple",
    "shape": "ball",
    "habitat": null,
    "growth_rate": "fast",
    "capture_rate": 45,
    "base_happiness": 35,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 98,
    "evolves_from": "misdreavus",
    "varieties": [
      "mismagius"
    ]
  },
  {
    "id": 430,
    "name": "honchkrow",
    "genus": "Big Boss Pokémon",
    "flavor_text": "One cry from this Pokémon, and a murder of Murkrow come flying. At such times, one would think the curtain of night had fallen, plunging the world into jet-black darkness.",
    "generation": "generation-iv",
    "color": "black",
    "shape": "wings",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 30,
    "base_happiness": 35,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 97,
    "evolves_from": "murkrow",
    "varieties": [
      "honchkrow"
    ]
  },
  {
    "id": 431,
    "name": "glameow",
    "genus": "Catty Pokémon",
    "flavor_text": "Bewitches humans with its helical tail and piercing gaze. Its hidden claws are quite sharp as well, making this Pokémon an exceedingly tricky opponent if antagonized.",
    "generation": "generation-iv",
    "color": "gray",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "fast",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 6,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 221,
    "evolves_from": null,
    "varieties": [
      "glameow"
    ]
  },
  {
    "id": 432,
    "name": "purugly",
    "genus": "Tiger Cat Pokémon",
    "flavor_text": "Though impudent and difficult to tame, Purugly enjoys great popularity due to its fur, the beauty of which surpasses even velveteen.",
    "generation": "generation-iv",
    "color": "gray",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "fast",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 6,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 221,
    "evolves_from": "glameow",
    "varieties": [
      "purugly"
    ]
  },
  {
    "id": 433,
    "name": "chingling",
    "genus": "Bell Pokémon",
    "flavor_text": "This Pokémon gave me an excruciating headache when it seemingly cried out without making a sound. Perhaps there are some sounds that the human ear is simply incapable of hearing.",
    "generation": "generation-iv",
    "color": "yellow",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "fast",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": true,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 184,
    "evolves_from": null,
    "varieties": [
      "chingling"
    ]
  },
  {
    "id": 434,
    "name": "stunky",
    "genus": "Skunk Pokémon",
    "flavor_text": "The poison that gushes from its aft end is accompanied by an utterly evil-smelling odor with such potency that one whiff can induce memory loss.",
    "generation": "generation-iv",
    "color": "purple",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 225,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 223,
    "evolves_from": null,
    "varieties": [
      "stunky"
    ]
  },
  {
    "id": 435,
    "name": "skuntank",
    "genus": "Skunk Pokémon",
    "flavor_text": "Sprays a poisonous fluid to take down prey. Sometimes, unable to stomach the stench of its own fluid, it leaves the bested prey uneaten.",
    "generation": "generation-iv",
    "color": "purple",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 223,
    "evolves_from": "stunky",
    "varieties": [
      "skuntank"
    ]
  },
  {
    "id": 436,
    "name": "bronzor",
    "genus": "Bronze Pokémon",
    "flavor_text": "Floats using a mysterious energy. The pattern engraved upon its back is held as sacred and can sometimes be found in imagery from ancient cemeteries and other such timeworn places.",
    "generation": "generation-iv",
    "color": "green",
    "shape": "ball",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": -1,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 224,
    "evolves_from": null,
    "varieties": [
      "bronzor"
    ]
  },
  {
    "id": 437,
    "name": "bronzong",
    "genus": "Bronze Bell Pokémon",
    "flavor_text": "Some believe that its bell-like cry opens holes to another world. It has been revered as a deity since ancient times.",
    "generation": "generation-iv",
    "color": "green",
    "shape": "arms",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": -1,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 224,
    "evolves_from": "bronzor",
    "varieties": [
      "bronzong"
    ]
  },
  {
    "id": 438,
    "name": "bonsly",
    "genus": "Bonsai Pokémon",
    "flavor_text": "Its tears elicit sympathy from those who see them, but do not be deceived! This expulsion of body water is merely a physiological mechanism for keeping itself in good health.",
    "generation": "generation-iv",
    "color": "brown",
    "shape": "legs",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": true,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 91,
    "evolves_from": null,
    "varieties": [
      "bonsly"
    ]
  },
  {
    "id": 439,
    "name": "mime-jr",
    "genus": "Mime Pokémon",
    "flavor_text": "Known to turn up in bustling marketplaces now and again. It mimics people much as a child would, then watches how they react, eyes sparkling.",
    "generation": "generation-iv",
    "color": "pink",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 145,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": true,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 57,
    "evolves_from": null,
    "varieties": [
      "mime-jr"
    ]
  },
  {
    "id": 440,
    "name": "happiny",
    "genus": "Playhouse Pokémon",
    "flavor_text": "In imitation of Chansey, it keeps a round stone tucked into its belly pouch and cherishes it dearly. It gets along well with children and will sometimes play house with them for fun.",
    "generation": "generation-iv",
    "color": "pink",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "fast",
    "capture_rate": 130,
    "base_happiness": 140,
    "hatch_counter": 40,
    "gender_rate": 8,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": true,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 51,
    "evolves_from": null,
    "varieties": [
      "happiny"
    ]
  },
  {
    "id": 441,
    "name": "chatot",
    "genus": "Music Note Pokémon",
    "flavor_text": "A versatile performer skilled in the imitation of human speech. It is said that older, more experienced Chatot can even understand the meaning of the words they mimic.",
    "generation": "generation-iv",
    "color": "black",
    "shape": "wings",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 30,
    "base_happiness": 35,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 228,
    "evolves_from": null,
    "varieties": [
      "chatot"
    ]
  },
  {
    "id": 442,
    "name": "spiritomb",
    "genus": "Forbidden Pokémon",
    "flavor_text": "It lays curses by thinking wicked thoughts. Writings tell that this Pokémon was born out of the assembly of five score and eight malevolent spirits.",
    "generation": "generation-iv",
    "color": "purple",
    "shape": "blob",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 100,
    "base_happiness": 70,
    "hatch_counter": 30,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 229,
    "evolves_from": null,
    "varieties": [
      "spiritomb"
    ]
  },
  {
    "id": 443,
    "name": "gible",
    "genus": "Land Shark Pokémon",
    "flavor_text": "It nests in caves untouched by sunlight. Its sharp teeth may fall out when worn away or after an impact, but they regrow within a few days.",
    "generation": "generation-iv",
    "color": "blue",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 40,
    "gender_rate": 4,
    "egg_groups": [
      "monster",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 230,
    "evolves_from": null,
    "varieties": [
      "gible"
    ]
  },
  {
    "id": 444,
    "name": "gabite",
    "genus": "Cave Pokémon",
    "flavor_text": "Though Gabite are usually of a violent disposition, when I gave one a glass bead it had been eyeing covetously, it suddenly became quite docile.",
    "generation": "generation-iv",
    "color": "blue",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 40,
    "gender_rate": 4,
    "egg_groups": [
      "monster",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 230,
    "evolves_from": "gible",
    "varieties": [
      "gabite"
    ]
  },
  {
    "id": 445,
    "name": "garchomp",
    "genus": "Mach Pokémon",
    "flavor_text": "Soars across the heavens at blinding speed—a magnificent sight! It has a feral disposition. Utmost caution is required if one meets a Garchomp out in the wilds.",
    "generation": "generation-iv",
    "color": "blue",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 40,
    "gender_rate": 4,
    "egg_groups": [
      "monster",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 230,
    "evolves_from": "gabite",
    "varieties": [
      "garchomp",
      "garchomp-mega",
      "garchomp-mega-z"
    ]
  },
  {
    "id": 446,
    "name": "munchlax",
    "genus": "Big Eater Pokémon",
    "flavor_text": "Its robust stomach allows it to nonchalantly devour even rotted matter. It pays frequent visits to villages, seeking out food scraps intended for compost.",
    "generation": "generation-iv",
    "color": "black",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 50,
    "base_happiness": 70,
    "hatch_counter": 40,
    "gender_rate": 1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": true,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 72,
    "evolves_from": null,
    "varieties": [
      "munchlax"
    ]
  },
  {
    "id": 447,
    "name": "riolu",
    "genus": "Emanation Pokémon",
    "flavor_text": "Though infantile in appearance, it has the mysterious ability to read the minds of humans. The pure of heart are met with Riolu's approval, while those of ill nature earn only its loathing.",
    "generation": "generation-iv",
    "color": "blue",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": true,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 232,
    "evolves_from": null,
    "varieties": [
      "riolu"
    ]
  },
  {
    "id": 448,
    "name": "lucario",
    "genus": "Aura Pokémon",
    "flavor_text": "A most gallant-looking creature. It emits energy waves and controls them with precision, using them to sense even faraway beings. I have given the name ”aura” to this power.",
    "generation": "generation-iv",
    "color": "blue",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 1,
    "egg_groups": [
      "ground",
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 232,
    "evolves_from": "riolu",
    "varieties": [
      "lucario",
      "lucario-mega",
      "lucario-mega-z"
    ]
  },
  {
    "id": 449,
    "name": "hippopotas",
    "genus": "Hippo Pokémon",
    "flavor_text": "Though large and languid, Hippopotas is difficult to detect due to its tendency to burrow into and lurk beneath the soil. When agitated or excited, it expels sand from its nostrils.",
    "generation": "generation-iv",
    "color": "brown",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 140,
    "base_happiness": 70,
    "hatch_counter": 30,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 233,
    "evolves_from": null,
    "varieties": [
      "hippopotas"
    ]
  },
  {
    "id": 450,
    "name": "hippowdon",
    "genus": "Heavyweight Pokémon",
    "flavor_text": "Short-tempered and easily moved to violence. It whips up whirlwinds of sand to crush its foes' spirits, then goes in for the attack.",
    "generation": "generation-iv",
    "color": "brown",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 30,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 233,
    "evolves_from": "hippopotas",
    "varieties": [
      "hippowdon"
    ]
  },
  {
    "id": 451,
    "name": "skorupi",
    "genus": "Scorpion Pokémon",
    "flavor_text": "Its claws are not only razor-sharp but poisonous, making Skorupi a highly dangerous Pokémon. It seems to be weakened by cold temperatures, however.",
    "generation": "generation-iv",
    "color": "purple",
    "shape": "armor",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "bug",
      "water3"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 234,
    "evolves_from": null,
    "varieties": [
      "skorupi"
    ]
  },
  {
    "id": 452,
    "name": "drapion",
    "genus": "Ogre Scorpion Pokémon",
    "flavor_text": "Has a brutish, ferocious temperament. With immense strength and a sturdy shell off which swords will bounce, it rampages about and wreaks havoc.",
    "generation": "generation-iv",
    "color": "purple",
    "shape": "armor",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "bug",
      "water3"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 234,
    "evolves_from": "skorupi",
    "varieties": [
      "drapion"
    ]
  },
  {
    "id": 453,
    "name": "croagunk",
    "genus": "Toxic Mouth Pokémon",
    "flavor_text": "A poison wielder with a dastardly personality. Despite such qualities, this species is afforded a measure of popularity due to its peculiar cry and comical features.",
    "generation": "generation-iv",
    "color": "blue",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 140,
    "base_happiness": 100,
    "hatch_counter": 10,
    "gender_rate": 4,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 235,
    "evolves_from": null,
    "varieties": [
      "croagunk"
    ]
  },
  {
    "id": 454,
    "name": "toxicroak",
    "genus": "Toxic Mouth Pokémon",
    "flavor_text": "Its crimson claws contain a virulent toxin. This toxin can be made into a tonic by diluting it, mixing it with several types of wild grass, and boiling it down over two days.",
    "generation": "generation-iv",
    "color": "blue",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 235,
    "evolves_from": "croagunk",
    "varieties": [
      "toxicroak"
    ]
  },
  {
    "id": 455,
    "name": "carnivine",
    "genus": "Bug Catcher Pokémon",
    "flavor_text": "Though this is a plant Pokémon, it has a gluttonous and unruly temperament. Carnivine attacks its prey with its cavernous maw wide open.",
    "generation": "generation-iv",
    "color": "green",
    "shape": "tentacles",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 200,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 236,
    "evolves_from": null,
    "varieties": [
      "carnivine"
    ]
  },
  {
    "id": 456,
    "name": "finneon",
    "genus": "Wing Fish Pokémon",
    "flavor_text": "What a gorgeous sight this Pokémon is as it swims with its long, pink-painted caudal fins fluttering behind it. Finneon's beautiful appearance has led to its nickname: ”finery fish.”",
    "generation": "generation-iv",
    "color": "blue",
    "shape": "fish",
    "habitat": null,
    "growth_rate": "slow-then-very-fast",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water2"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 237,
    "evolves_from": null,
    "varieties": [
      "finneon"
    ]
  },
  {
    "id": 457,
    "name": "lumineon",
    "genus": "Neon Pokémon",
    "flavor_text": "Uses its gleaming fins to hunt its prey. The view of Lumineon schooling near the surface of the sea at night is breathtaking— it's as though there were shining stars right there.",
    "generation": "generation-iv",
    "color": "blue",
    "shape": "fish",
    "habitat": null,
    "growth_rate": "slow-then-very-fast",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water2"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 237,
    "evolves_from": "finneon",
    "varieties": [
      "lumineon"
    ]
  },
  {
    "id": 458,
    "name": "mantyke",
    "genus": "Kite Pokémon",
    "flavor_text": "Though ball-like in shape, this Pokémon is a proficient swimmer. I have discovered that if a Mantyke spends much time with schools of Remoraid, it will eventually achieve evolution.",
    "generation": "generation-iv",
    "color": "blue",
    "shape": "wings",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 25,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": true,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 116,
    "evolves_from": null,
    "varieties": [
      "mantyke"
    ]
  },
  {
    "id": 459,
    "name": "snover",
    "genus": "Frost Tree Pokémon",
    "flavor_text": "One is likely to encounter this Pokémon while out in the snow. There are stories of Snover appearing in human settlements but doing no harm—rather, they bond with the children.",
    "generation": "generation-iv",
    "color": "white",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "monster",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 239,
    "evolves_from": null,
    "varieties": [
      "snover"
    ]
  },
  {
    "id": 460,
    "name": "abomasnow",
    "genus": "Frost Tree Pokémon",
    "flavor_text": "A powerful Pokémon that can split huge boulders with ease. Dislikes associating with others and chooses to live quietly deep within the mountains, playing with the snow.",
    "generation": "generation-iv",
    "color": "white",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "monster",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 239,
    "evolves_from": "snover",
    "varieties": [
      "abomasnow",
      "abomasnow-mega"
    ]
  },
  {
    "id": 461,
    "name": "weavile",
    "genus": "Sharp Claw Pokémon",
    "flavor_text": "This species corners prey as a pack, under the guidance of a leader. Weavile displays increased cunning, leading me to speculate that its evolution caused further brain development.",
    "generation": "generation-iv",
    "color": "black",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 35,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 109,
    "evolves_from": "sneasel",
    "varieties": [
      "weavile"
    ]
  },
  {
    "id": 462,
    "name": "magnezone",
    "genus": "Magnet Area Pokémon",
    "flavor_text": "I theorize that a special magnetic field influenced this Pokémon, changing its molecular structure and causing it to evolve. It emits strange radio waves toward space from its antenna.",
    "generation": "generation-iv",
    "color": "gray",
    "shape": "arms",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 30,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": -1,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 34,
    "evolves_from": "magneton",
    "varieties": [
      "magnezone"
    ]
  },
  {
    "id": 463,
    "name": "lickilicky",
    "genus": "Licking Pokémon",
    "flavor_text": "Its tongue can extend and contract freely, and it is capable of reaching lengths over 10 times Lickilicky's height. Beware of the saliva, as it contains corrosive elements.",
    "generation": "generation-iv",
    "color": "pink",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 30,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "monster"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 48,
    "evolves_from": "lickitung",
    "varieties": [
      "lickilicky"
    ]
  },
  {
    "id": 464,
    "name": "rhyperior",
    "genus": "Drill Pokémon",
    "flavor_text": "This Pokémon evolved through use of a curious item. Its rocklike hide is composed of a mysterious substance and can withstand a blow from a masterwork sword with nary a scratch.",
    "generation": "generation-iv",
    "color": "gray",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 30,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "monster",
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 50,
    "evolves_from": "rhydon",
    "varieties": [
      "rhyperior"
    ]
  },
  {
    "id": 465,
    "name": "tangrowth",
    "genus": "Vine Pokémon",
    "flavor_text": "Draped with long vines, it resembles a shrub in appearance. It swings bundles of vines as though they were arms, wrapping them around prey to ensnare them.",
    "generation": "generation-iv",
    "color": "blue",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 30,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 52,
    "evolves_from": "tangela",
    "varieties": [
      "tangrowth"
    ]
  },
  {
    "id": 466,
    "name": "electivire",
    "genus": "Thunderbolt Pokémon",
    "flavor_text": "Its evolution was induced by an unusual item, and its electrical output rises along with its heart rate. From its tails, it can unleash an electric current measuring 20,000 volts.",
    "generation": "generation-iv",
    "color": "yellow",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 30,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 2,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 60,
    "evolves_from": "electabuzz",
    "varieties": [
      "electivire"
    ]
  },
  {
    "id": 467,
    "name": "magmortar",
    "genus": "Blast Pokémon",
    "flavor_text": "Use of a strange item caused this Pokémon to evolve. Fireballs launched from the ends of its tubelike arms are hot enough to melt an iron pot in an instant.",
    "generation": "generation-iv",
    "color": "red",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 30,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 2,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 61,
    "evolves_from": "magmar",
    "varieties": [
      "magmortar"
    ]
  },
  {
    "id": 468,
    "name": "togekiss",
    "genus": "Jubilee Pokémon",
    "flavor_text": "Scant few have ever sighted this Pokémon. After studying what literature remains, I am certain Togekiss will reveal itself when peace reigns in the land.",
    "generation": "generation-iv",
    "color": "white",
    "shape": "wings",
    "habitat": null,
    "growth_rate": "fast",
    "capture_rate": 30,
    "base_happiness": 70,
    "hatch_counter": 10,
    "gender_rate": 1,
    "egg_groups": [
      "flying",
      "fairy"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 87,
    "evolves_from": "togetic",
    "varieties": [
      "togekiss"
    ]
  },
  {
    "id": 469,
    "name": "yanmega",
    "genus": "Ogre Darner Pokémon",
    "flavor_text": "Extremely violent. When hunting, it wastes none of its energy, aiming only for prey's most vulnerable spots. Any who manage to tame this Pokémon must be of incredible bravery.",
    "generation": "generation-iv",
    "color": "green",
    "shape": "bug-wings",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 30,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 95,
    "evolves_from": "yanma",
    "varieties": [
      "yanmega"
    ]
  },
  {
    "id": 470,
    "name": "leafeon",
    "genus": "Verdant Pokémon",
    "flavor_text": "Cells similar to those of plants have been found in its fur. Its hard tail can fell a large tree with one stroke, and the tail's sharpness exceeds even that of a sword crafted by a master.",
    "generation": "generation-iv",
    "color": "green",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 35,
    "hatch_counter": 35,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 67,
    "evolves_from": "eevee",
    "varieties": [
      "leafeon"
    ]
  },
  {
    "id": 471,
    "name": "glaceon",
    "genus": "Fresh Snow Pokémon",
    "flavor_text": "Glaceon is able to lower its body temperature very quickly. It freezes the atmosphere, creating diamond dust that glitters like gems while it flutters and dances around.",
    "generation": "generation-iv",
    "color": "blue",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 35,
    "hatch_counter": 35,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 67,
    "evolves_from": "eevee",
    "varieties": [
      "glaceon"
    ]
  },
  {
    "id": 472,
    "name": "gliscor",
    "genus": "Fang Scorpion Pokémon",
    "flavor_text": "It glides soundlessly on pitch-black wings and sinks sharp fangs into the throat of its prey. It takes on a look of satisfaction once it has entirely drained its prey of blood.",
    "generation": "generation-iv",
    "color": "purple",
    "shape": "wings",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 30,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 104,
    "evolves_from": "gligar",
    "varieties": [
      "gliscor"
    ]
  },
  {
    "id": 473,
    "name": "mamoswine",
    "genus": "Twin Tusk Pokémon",
    "flavor_text": "This species reached its zenith during the period known as the ice age. I suspect that Hisui's frigid climate is in harmony with Mamoswine's constitution, thus awakening hidden potential.",
    "generation": "generation-iv",
    "color": "brown",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 50,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 112,
    "evolves_from": "piloswine",
    "varieties": [
      "mamoswine"
    ]
  },
  {
    "id": 474,
    "name": "porygon-z",
    "genus": "Virtual Pokémon",
    "flavor_text": "A curious item induced this evolution. The Pokémon's offensive capabilities have greatly increased, but the strangeness of its behavior has magnified in equal measure. This worries me.",
    "generation": "generation-iv",
    "color": "red",
    "shape": "arms",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 30,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": -1,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 68,
    "evolves_from": "porygon2",
    "varieties": [
      "porygon-z"
    ]
  },
  {
    "id": 475,
    "name": "gallade",
    "genus": "Blade Pokémon",
    "flavor_text": "The blades extending from its elbows are sharper than the finest swords. Its swordsmanship, albeit self-taught, is astonishingly impressive.",
    "generation": "generation-iv",
    "color": "white",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 35,
    "hatch_counter": 20,
    "gender_rate": 0,
    "egg_groups": [
      "humanshape",
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 140,
    "evolves_from": "kirlia",
    "varieties": [
      "gallade",
      "gallade-mega"
    ]
  },
  {
    "id": 476,
    "name": "probopass",
    "genus": "Compass Pokémon",
    "flavor_text": "It is able to emit powerful magnetism, allowing it control over the iron sand that forms its luscious mustache. Using this iron sand, Probopass forms hard stones with which it smites its prey.",
    "generation": "generation-iv",
    "color": "gray",
    "shape": "heads",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 147,
    "evolves_from": "nosepass",
    "varieties": [
      "probopass"
    ]
  },
  {
    "id": 477,
    "name": "dusknoir",
    "genus": "Gripper Pokémon",
    "flavor_text": "Comes to those whose lives have come to an end and escorts their souls to the afterlife. Known to mistakenly take the souls of those who yet have life left in them, albeit rarely.",
    "generation": "generation-iv",
    "color": "black",
    "shape": "arms",
    "habitat": null,
    "growth_rate": "fast",
    "capture_rate": 45,
    "base_happiness": 35,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 182,
    "evolves_from": "dusclops",
    "varieties": [
      "dusknoir"
    ]
  },
  {
    "id": 478,
    "name": "froslass",
    "genus": "Snow Land Pokémon",
    "flavor_text": "A Pokémon inhabited by the soul of a woman who died bearing a grudge in the snowy mountains. Legends of Froslass placing deathly curses on misbehaving men send shivers down my spine.",
    "generation": "generation-iv",
    "color": "white",
    "shape": "arms",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 8,
    "egg_groups": [
      "fairy",
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 186,
    "evolves_from": "snorunt",
    "varieties": [
      "froslass",
      "froslass-mega"
    ]
  },
  {
    "id": 479,
    "name": "rotom",
    "genus": "Plasma Pokémon",
    "flavor_text": "This bizarre Pokémon appears to be a will-o'-the-wisp powered by electricity. Be wary, as Rotom is both smart and mischievous.",
    "generation": "generation-iv",
    "color": "red",
    "shape": "ball",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": -1,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 240,
    "evolves_from": null,
    "varieties": [
      "rotom",
      "rotom-heat",
      "rotom-wash",
      "rotom-frost",
      "rotom-fan",
      "rotom-mow"
    ]
  },
  {
    "id": 480,
    "name": "uxie",
    "genus": "Knowledge Pokémon",
    "flavor_text": "A Pokémon feared but also respected for stealing away the memories of evildoers. I have found records that suggest Uxie holds dominion over knowledge.",
    "generation": "generation-iv",
    "color": "yellow",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 140,
    "hatch_counter": 80,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 241,
    "evolves_from": null,
    "varieties": [
      "uxie"
    ]
  },
  {
    "id": 481,
    "name": "mesprit",
    "genus": "Emotion Pokémon",
    "flavor_text": "Known as the Being of Emotion. In legend, this Pokémon was feared, as any who showed disrespect would have their emotions thrown into disarray.",
    "generation": "generation-iv",
    "color": "pink",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 140,
    "hatch_counter": 80,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 242,
    "evolves_from": null,
    "varieties": [
      "mesprit"
    ]
  },
  {
    "id": 482,
    "name": "azelf",
    "genus": "Willpower Pokémon",
    "flavor_text": "The dreaded Being of Willpower. Legends tell of this Pokémon manipulating the will of its adversaries and turning them into puppets of its own.",
    "generation": "generation-iv",
    "color": "blue",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 140,
    "hatch_counter": 80,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 243,
    "evolves_from": null,
    "varieties": [
      "azelf"
    ]
  },
  {
    "id": 483,
    "name": "dialga",
    "genus": "Temporal Pokémon",
    "flavor_text": "This Pokémon is revered as a deity in Hisuian legend. The birth of Dialga was what caused the vast river of time to begin flowing in our world.",
    "generation": "generation-iv",
    "color": "white",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 0,
    "hatch_counter": 120,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 244,
    "evolves_from": null,
    "varieties": [
      "dialga",
      "dialga-origin"
    ]
  },
  {
    "id": 484,
    "name": "palkia",
    "genus": "Spatial Pokémon",
    "flavor_text": "This Pokémon is feared as a deity in Hisuian legend. The birth of Palkia was what caused the walls of our world to disappear, creating a sky that spans for infinity.",
    "generation": "generation-iv",
    "color": "purple",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 0,
    "hatch_counter": 120,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 245,
    "evolves_from": null,
    "varieties": [
      "palkia",
      "palkia-origin"
    ]
  },
  {
    "id": 485,
    "name": "heatran",
    "genus": "Lava Dome Pokémon",
    "flavor_text": "Stories tell of this Pokémon being birthed from the boiling magma within Mount Coronet. Its molten-steel body holds many mysteries.",
    "generation": "generation-iv",
    "color": "brown",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 100,
    "hatch_counter": 10,
    "gender_rate": 4,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 246,
    "evolves_from": null,
    "varieties": [
      "heatran",
      "heatran-mega"
    ]
  },
  {
    "id": 486,
    "name": "regigigas",
    "genus": "Colossal Pokémon",
    "flavor_text": "According to legend, Regigigas pulled landmasses together and bound them with rope to create the continent of Hisui. Though I have my doubts, the story could well contain a shred of truth.",
    "generation": "generation-iv",
    "color": "white",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 0,
    "hatch_counter": 120,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 247,
    "evolves_from": null,
    "varieties": [
      "regigigas"
    ]
  },
  {
    "id": 487,
    "name": "giratina",
    "genus": "Renegade Pokémon",
    "flavor_text": "There is one Hisuian verse that tells of a powerful light creating a deep shadow. I imagine that this deep shadow is Giratina.",
    "generation": "generation-iv",
    "color": "black",
    "shape": "tentacles",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 0,
    "hatch_counter": 120,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 248,
    "evolves_from": null,
    "varieties": [
      "giratina-altered",
      "giratina-origin"
    ]
  },
  {
    "id": 488,
    "name": "cresselia",
    "genus": "Lunar Pokémon",
    "flavor_text": "Cresselia is reminiscent of the crescent moon. It leaves a brilliant line of light in its wake as it flies across the night sky. I daresay it resembles the heavenly maiden who created the Milky Way.",
    "generation": "generation-iv",
    "color": "yellow",
    "shape": "squiggle",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 100,
    "hatch_counter": 120,
    "gender_rate": 8,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 249,
    "evolves_from": null,
    "varieties": [
      "cresselia"
    ]
  },
  {
    "id": 489,
    "name": "phione",
    "genus": "Sea Drifter Pokémon",
    "flavor_text": "Can be seen floating offshore during seasons when the seas are warm. Its azure body blends in with the ocean waters—logic suggests this is a defense mechanism against natural predators.",
    "generation": "generation-iv",
    "color": "blue",
    "shape": "arms",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 30,
    "base_happiness": 70,
    "hatch_counter": 40,
    "gender_rate": -1,
    "egg_groups": [
      "water1",
      "fairy"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": true,
    "evolution_chain_id": 250,
    "evolves_from": null,
    "varieties": [
      "phione"
    ]
  },
  {
    "id": 490,
    "name": "manaphy",
    "genus": "Seafaring Pokémon",
    "flavor_text": "Rumored to migrate across the oceans and visit Hisui's coastal waters only rarely. Although Manaphy resembles Phione, it is also quite different. The relation between the two is unclear.",
    "generation": "generation-iv",
    "color": "blue",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 70,
    "hatch_counter": 10,
    "gender_rate": -1,
    "egg_groups": [
      "water1",
      "fairy"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": true,
    "evolution_chain_id": 250,
    "evolves_from": null,
    "varieties": [
      "manaphy"
    ]
  },
  {
    "id": 491,
    "name": "darkrai",
    "genus": "Pitch-Black Pokémon",
    "flavor_text": "On a moonless night, a strange incident occurred in which every one of a village's inhabitants suffered nightmares. The villagers attested that Darkrai appeared before them in these nightmares.",
    "generation": "generation-iv",
    "color": "black",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 0,
    "hatch_counter": 120,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": true,
    "evolution_chain_id": 252,
    "evolves_from": null,
    "varieties": [
      "darkrai",
      "darkrai-mega"
    ]
  },
  {
    "id": 492,
    "name": "shaymin",
    "genus": "Gratitude Pokémon",
    "flavor_text": "When the turning of seasons brings the cruel winter to its end and the joyous people give thanks to the heavens, Shaymin appears and covers the withered land with flowers.",
    "generation": "generation-iv",
    "color": "green",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 100,
    "hatch_counter": 120,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": true,
    "evolution_chain_id": 253,
    "evolves_from": null,
    "varieties": [
      "shaymin-land",
      "shaymin-sky"
    ]
  },
  {
    "id": 493,
    "name": "arceus",
    "genus": "Alpha Pokémon",
    "flavor_text": "It is the heavenly fount from which pours the light that shines across Hisui. Its luminance guides and protects all Pokémon. Hisuian mythology states that Arceus is the creator of all things.",
    "generation": "generation-iv",
    "color": "white",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 0,
    "hatch_counter": 120,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": true,
    "evolution_chain_id": 254,
    "evolves_from": null,
    "varieties": [
      "arceus"
    ]
  },
  {
    "id": 494,
    "name": "victini",
    "genus": "Victory Pokémon",
    "flavor_text": "When it shares the infinite energy it creates, that being’s entire body will be overflowing with power.",
    "generation": "generation-v",
    "color": "yellow",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 100,
    "hatch_counter": 120,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": true,
    "evolution_chain_id": 255,
    "evolves_from": null,
    "varieties": [
      "victini"
    ]
  },
  {
    "id": 495,
    "name": "snivy",
    "genus": "Grass Snake Pokémon",
    "flavor_text": "They photosynthesize by bathing their tails in sunlight. When they are not feeling well, their tails droop.",
    "generation": "generation-v",
    "color": "green",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "ground",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 256,
    "evolves_from": null,
    "varieties": [
      "snivy"
    ]
  },
  {
    "id": 496,
    "name": "servine",
    "genus": "Grass Snake Pokémon",
    "flavor_text": "When it gets dirty, its leaves can’t be used in photosynthesis, so it always keeps itself clean.",
    "generation": "generation-v",
    "color": "green",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "ground",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 256,
    "evolves_from": "snivy",
    "varieties": [
      "servine"
    ]
  },
  {
    "id": 497,
    "name": "serperior",
    "genus": "Regal Pokémon",
    "flavor_text": "It can stop its opponents’ movements with just a glare. It takes in solar energy and boosts it internally.",
    "generation": "generation-v",
    "color": "green",
    "shape": "squiggle",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "ground",
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 256,
    "evolves_from": "servine",
    "varieties": [
      "serperior"
    ]
  },
  {
    "id": 498,
    "name": "tepig",
    "genus": "Fire Pig Pokémon",
    "flavor_text": "It loves to eat roasted berries, but sometimes it gets too excited and burns them to a crisp.",
    "generation": "generation-v",
    "color": "red",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 257,
    "evolves_from": null,
    "varieties": [
      "tepig"
    ]
  },
  {
    "id": 499,
    "name": "pignite",
    "genus": "Fire Pig Pokémon",
    "flavor_text": "When its internal fire flares up, its movements grow sharper and faster. When in trouble, it emits smoke.",
    "generation": "generation-v",
    "color": "red",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 257,
    "evolves_from": "tepig",
    "varieties": [
      "pignite"
    ]
  },
  {
    "id": 500,
    "name": "emboar",
    "genus": "Mega Fire Pig Pokémon",
    "flavor_text": "It has mastered fast and powerful fighting moves. It grows a beard of fire.",
    "generation": "generation-v",
    "color": "red",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 257,
    "evolves_from": "pignite",
    "varieties": [
      "emboar",
      "emboar-mega"
    ]
  },
  {
    "id": 501,
    "name": "oshawott",
    "genus": "Sea Otter Pokémon",
    "flavor_text": "This Pokémon from the Unova region uses the shell on its belly as a weapon to cut down its foes. Thus, I've conferred upon this shell the name ”scalchop”.",
    "generation": "generation-v",
    "color": "blue",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 258,
    "evolves_from": null,
    "varieties": [
      "oshawott"
    ]
  },
  {
    "id": 502,
    "name": "dewott",
    "genus": "Discipline Pokémon",
    "flavor_text": "Its exquisite double-scalchop technique is likely the result of daily training, and it can send even masters of the blade fleeing in defeat.",
    "generation": "generation-v",
    "color": "blue",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 258,
    "evolves_from": "oshawott",
    "varieties": [
      "dewott"
    ]
  },
  {
    "id": 503,
    "name": "samurott",
    "genus": "Formidable Pokémon",
    "flavor_text": "Hard of heart and deft of blade, this rare form of Samurott is a product of the Pokémon's evolution in the region of Hisui. Its turbulent blows crash into foes like ceaseless pounding waves.",
    "generation": "generation-v",
    "color": "blue",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 258,
    "evolves_from": "dewott",
    "varieties": [
      "samurott",
      "samurott-hisui"
    ]
  },
  {
    "id": 504,
    "name": "patrat",
    "genus": "Scout Pokémon",
    "flavor_text": "Extremely cautious, one of them will always be on the lookout, but it won’t notice a foe coming from behind.",
    "generation": "generation-v",
    "color": "brown",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 259,
    "evolves_from": null,
    "varieties": [
      "patrat"
    ]
  },
  {
    "id": 505,
    "name": "watchog",
    "genus": "Lookout Pokémon",
    "flavor_text": "When they see an enemy, their tails stand high, and they spit the seeds of berries stored in their cheek pouches.",
    "generation": "generation-v",
    "color": "brown",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 259,
    "evolves_from": "patrat",
    "varieties": [
      "watchog"
    ]
  },
  {
    "id": 506,
    "name": "lillipup",
    "genus": "Puppy Pokémon",
    "flavor_text": "This Pokémon is far brighter than the average child, and Lillipup won’t forget the love it receives or any abuse it suffers.",
    "generation": "generation-v",
    "color": "brown",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 260,
    "evolves_from": null,
    "varieties": [
      "lillipup"
    ]
  },
  {
    "id": 507,
    "name": "herdier",
    "genus": "Loyal Dog Pokémon",
    "flavor_text": "The black fur that covers this Pokémon’s body is dense and springy. Even sharp fangs bounce right off.",
    "generation": "generation-v",
    "color": "gray",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 260,
    "evolves_from": "lillipup",
    "varieties": [
      "herdier"
    ]
  },
  {
    "id": 508,
    "name": "stoutland",
    "genus": "Big-Hearted Pokémon",
    "flavor_text": "Stoutland is immensely proud of its impressive moustache. It’s said that moustache length is what determines social standing among this species.",
    "generation": "generation-v",
    "color": "gray",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 260,
    "evolves_from": "herdier",
    "varieties": [
      "stoutland"
    ]
  },
  {
    "id": 509,
    "name": "purrloin",
    "genus": "Devious Pokémon",
    "flavor_text": "Opponents that get drawn in by its adorable behavior come away with stinging scratches from its claws and stinging pride from its laughter.",
    "generation": "generation-v",
    "color": "purple",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 261,
    "evolves_from": null,
    "varieties": [
      "purrloin"
    ]
  },
  {
    "id": 510,
    "name": "liepard",
    "genus": "Cruel Pokémon",
    "flavor_text": "This stealthy Pokémon sneaks up behind prey without making any sound at all. It competes with Thievul for territory.",
    "generation": "generation-v",
    "color": "purple",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 261,
    "evolves_from": "purrloin",
    "varieties": [
      "liepard"
    ]
  },
  {
    "id": 511,
    "name": "pansage",
    "genus": "Grass Monkey Pokémon",
    "flavor_text": "It’s good at finding berries and gathers them from all over. It’s kind enough to share them with friends.",
    "generation": "generation-v",
    "color": "green",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 262,
    "evolves_from": null,
    "varieties": [
      "pansage"
    ]
  },
  {
    "id": 512,
    "name": "simisage",
    "genus": "Thorn Monkey Pokémon",
    "flavor_text": "Ill tempered, it fights by swinging its barbed tail around wildly. The leaf growing on its head is very bitter.",
    "generation": "generation-v",
    "color": "green",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 262,
    "evolves_from": "pansage",
    "varieties": [
      "simisage"
    ]
  },
  {
    "id": 513,
    "name": "pansear",
    "genus": "High Temp Pokémon",
    "flavor_text": "This Pokémon lives in caves in volcanoes. The fire within the tuft on its head can reach 600 degrees Fahrenheit.",
    "generation": "generation-v",
    "color": "red",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 263,
    "evolves_from": null,
    "varieties": [
      "pansear"
    ]
  },
  {
    "id": 514,
    "name": "simisear",
    "genus": "Ember Pokémon",
    "flavor_text": "When it gets excited, embers rise from its head and tail and it gets hot. For some reason, it loves sweets.",
    "generation": "generation-v",
    "color": "red",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 263,
    "evolves_from": "pansear",
    "varieties": [
      "simisear"
    ]
  },
  {
    "id": 515,
    "name": "panpour",
    "genus": "Spray Pokémon",
    "flavor_text": "The water stored inside the tuft on its head is full of nutrients. Plants that receive its water grow large.",
    "generation": "generation-v",
    "color": "blue",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 264,
    "evolves_from": null,
    "varieties": [
      "panpour"
    ]
  },
  {
    "id": 516,
    "name": "simipour",
    "genus": "Geyser Pokémon",
    "flavor_text": "It prefers places with clean water. When its tuft runs low, it replenishes it by siphoning up water with its tail.",
    "generation": "generation-v",
    "color": "blue",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 264,
    "evolves_from": "panpour",
    "varieties": [
      "simipour"
    ]
  },
  {
    "id": 517,
    "name": "munna",
    "genus": "Dream Eater Pokémon",
    "flavor_text": "It eats dreams and releases mist. The mist is pink when it’s eating a good dream, and black when it’s eating a nightmare.",
    "generation": "generation-v",
    "color": "pink",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "fast",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 10,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 265,
    "evolves_from": null,
    "varieties": [
      "munna"
    ]
  },
  {
    "id": 518,
    "name": "musharna",
    "genus": "Drowsing Pokémon",
    "flavor_text": "It drowses and dreams all the time. It’s best to leave it be if it’s just woken up, as it’s a terrible grump when freshly roused from sleep.",
    "generation": "generation-v",
    "color": "pink",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "fast",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 10,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 265,
    "evolves_from": "munna",
    "varieties": [
      "musharna"
    ]
  },
  {
    "id": 519,
    "name": "pidove",
    "genus": "Tiny Pigeon Pokémon",
    "flavor_text": "It’s forgetful and not very bright, but many Trainers love it anyway for its friendliness and sincerity.",
    "generation": "generation-v",
    "color": "gray",
    "shape": "wings",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 266,
    "evolves_from": null,
    "varieties": [
      "pidove"
    ]
  },
  {
    "id": 520,
    "name": "tranquill",
    "genus": "Wild Pigeon Pokémon",
    "flavor_text": "These bright Pokémon have acute memories. Apparently delivery workers often choose them as their partners.",
    "generation": "generation-v",
    "color": "gray",
    "shape": "wings",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 266,
    "evolves_from": "pidove",
    "varieties": [
      "tranquill"
    ]
  },
  {
    "id": 521,
    "name": "unfezant",
    "genus": "Proud Pokémon",
    "flavor_text": "This Pokémon is intelligent and intensely proud. People will sit up and take notice if you become the Trainer of one.",
    "generation": "generation-v",
    "color": "gray",
    "shape": "wings",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 266,
    "evolves_from": "tranquill",
    "varieties": [
      "unfezant"
    ]
  },
  {
    "id": 522,
    "name": "blitzle",
    "genus": "Electrified Pokémon",
    "flavor_text": "Its mane shines when it discharges electricity. They use the frequency and rhythm of these flashes to communicate.",
    "generation": "generation-v",
    "color": "black",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 267,
    "evolves_from": null,
    "varieties": [
      "blitzle"
    ]
  },
  {
    "id": 523,
    "name": "zebstrika",
    "genus": "Thunderbolt Pokémon",
    "flavor_text": "They have lightning-like movements. When Zebstrika run at full speed, the sound of thunder reverberates.",
    "generation": "generation-v",
    "color": "black",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 267,
    "evolves_from": "blitzle",
    "varieties": [
      "zebstrika"
    ]
  },
  {
    "id": 524,
    "name": "roggenrola",
    "genus": "Mantle Pokémon",
    "flavor_text": "When it detects a noise, it starts to move. The energy core inside it makes this Pokémon slightly warm to the touch.",
    "generation": "generation-v",
    "color": "blue",
    "shape": "legs",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 268,
    "evolves_from": null,
    "varieties": [
      "roggenrola"
    ]
  },
  {
    "id": 525,
    "name": "boldore",
    "genus": "Ore Pokémon",
    "flavor_text": "It relies on sound in order to monitor what’s in its vicinity. When angered, it will attack without ever changing the direction it’s facing.",
    "generation": "generation-v",
    "color": "blue",
    "shape": "tentacles",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 268,
    "evolves_from": "roggenrola",
    "varieties": [
      "boldore"
    ]
  },
  {
    "id": 526,
    "name": "gigalith",
    "genus": "Compressed Pokémon",
    "flavor_text": "Although its energy blasts can blow away a dump truck, they have a limitation— they can only be fired when the sun is out.",
    "generation": "generation-v",
    "color": "blue",
    "shape": "tentacles",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 268,
    "evolves_from": "boldore",
    "varieties": [
      "gigalith"
    ]
  },
  {
    "id": 527,
    "name": "woobat",
    "genus": "Bat Pokémon",
    "flavor_text": "It emits ultrasonic waves as it flutters about, searching for its prey—bug Pokémon.",
    "generation": "generation-v",
    "color": "blue",
    "shape": "wings",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "ground",
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 269,
    "evolves_from": null,
    "varieties": [
      "woobat"
    ]
  },
  {
    "id": 528,
    "name": "swoobat",
    "genus": "Courting Pokémon",
    "flavor_text": "The auspicious shape of this Pokémon’s nose apparently led some regions to consider Swoobat a symbol of good luck.",
    "generation": "generation-v",
    "color": "blue",
    "shape": "wings",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "ground",
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 269,
    "evolves_from": "woobat",
    "varieties": [
      "swoobat"
    ]
  },
  {
    "id": 529,
    "name": "drilbur",
    "genus": "Mole Pokémon",
    "flavor_text": "It’s a digger, using its claws to burrow through the ground. It causes damage to vegetable crops, so many farmers have little love for it.",
    "generation": "generation-v",
    "color": "gray",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 270,
    "evolves_from": null,
    "varieties": [
      "drilbur"
    ]
  },
  {
    "id": 530,
    "name": "excadrill",
    "genus": "Subterrene Pokémon",
    "flavor_text": "Known as the Drill King, this Pokémon can tunnel through the terrain at speeds of over 90 mph.",
    "generation": "generation-v",
    "color": "gray",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 270,
    "evolves_from": "drilbur",
    "varieties": [
      "excadrill",
      "excadrill-mega"
    ]
  },
  {
    "id": 531,
    "name": "audino",
    "genus": "Hearing Pokémon",
    "flavor_text": "This Pokémon has a kind heart. By touching with its feelers, Audino can gauge other creatures’ feelings and physical conditions.",
    "generation": "generation-v",
    "color": "pink",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "fast",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "fairy"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 271,
    "evolves_from": null,
    "varieties": [
      "audino",
      "audino-mega"
    ]
  },
  {
    "id": 532,
    "name": "timburr",
    "genus": "Muscular Pokémon",
    "flavor_text": "Timburr that have started carrying logs that are about three times their size are nearly ready to evolve.",
    "generation": "generation-v",
    "color": "gray",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 180,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 2,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 272,
    "evolves_from": null,
    "varieties": [
      "timburr"
    ]
  },
  {
    "id": 533,
    "name": "gurdurr",
    "genus": "Muscular Pokémon",
    "flavor_text": "Gurdurr excels at demolition—construction is not its forte. In any case, there’s skill in the way this Pokémon wields its metal beam.",
    "generation": "generation-v",
    "color": "gray",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 2,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 272,
    "evolves_from": "timburr",
    "varieties": [
      "gurdurr"
    ]
  },
  {
    "id": 534,
    "name": "conkeldurr",
    "genus": "Muscular Pokémon",
    "flavor_text": "When going all out, this Pokémon throws aside its concrete pillars and leaps at opponents to pummel them with its fists.",
    "generation": "generation-v",
    "color": "brown",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 2,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 272,
    "evolves_from": "gurdurr",
    "varieties": [
      "conkeldurr"
    ]
  },
  {
    "id": 535,
    "name": "tympole",
    "genus": "Tadpole Pokémon",
    "flavor_text": "It uses sound waves to communicate with others of its kind. People and other Pokémon species can’t hear its cries of warning.",
    "generation": "generation-v",
    "color": "blue",
    "shape": "fish",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 273,
    "evolves_from": null,
    "varieties": [
      "tympole"
    ]
  },
  {
    "id": 536,
    "name": "palpitoad",
    "genus": "Vibration Pokémon",
    "flavor_text": "On occasion, their cries are sublimely pleasing to the ear. Palpitoad with larger lumps on their bodies can sing with a wider range of sounds.",
    "generation": "generation-v",
    "color": "blue",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 273,
    "evolves_from": "tympole",
    "varieties": [
      "palpitoad"
    ]
  },
  {
    "id": 537,
    "name": "seismitoad",
    "genus": "Vibration Pokémon",
    "flavor_text": "This Pokémon is popular among the elderly, who say the vibrations of its lumps are great for massages.",
    "generation": "generation-v",
    "color": "blue",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 273,
    "evolves_from": "palpitoad",
    "varieties": [
      "seismitoad"
    ]
  },
  {
    "id": 538,
    "name": "throh",
    "genus": "Judo Pokémon",
    "flavor_text": "They train in groups of five. Any member that can’t keep up will discard its belt and leave the group.",
    "generation": "generation-v",
    "color": "red",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 0,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 274,
    "evolves_from": null,
    "varieties": [
      "throh"
    ]
  },
  {
    "id": 539,
    "name": "sawk",
    "genus": "Karate Pokémon",
    "flavor_text": "The karate chops of a Sawk that’s trained itself to the limit can cleave the ocean itself.",
    "generation": "generation-v",
    "color": "blue",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 0,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 275,
    "evolves_from": null,
    "varieties": [
      "sawk"
    ]
  },
  {
    "id": 540,
    "name": "sewaddle",
    "genus": "Sewing Pokémon",
    "flavor_text": "Since this Pokémon makes its own clothes out of leaves, it is a popular mascot for fashion designers.",
    "generation": "generation-v",
    "color": "yellow",
    "shape": "armor",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 276,
    "evolves_from": null,
    "varieties": [
      "sewaddle"
    ]
  },
  {
    "id": 541,
    "name": "swadloon",
    "genus": "Leaf-Wrapped Pokémon",
    "flavor_text": "It protects itself from the cold by wrapping up in leaves. It stays on the move, eating leaves in forests.",
    "generation": "generation-v",
    "color": "green",
    "shape": "arms",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 276,
    "evolves_from": "sewaddle",
    "varieties": [
      "swadloon"
    ]
  },
  {
    "id": 542,
    "name": "leavanny",
    "genus": "Nurturing Pokémon",
    "flavor_text": "It keeps its eggs warm with heat from fermenting leaves. It also uses leaves to make warm wrappings for Sewaddle.",
    "generation": "generation-v",
    "color": "yellow",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 276,
    "evolves_from": "swadloon",
    "varieties": [
      "leavanny"
    ]
  },
  {
    "id": 543,
    "name": "venipede",
    "genus": "Centipede Pokémon",
    "flavor_text": "Its fangs are highly venomous. If this Pokémon finds prey it thinks it can eat, it leaps for them without any thought of how things might turn out.",
    "generation": "generation-v",
    "color": "red",
    "shape": "armor",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 277,
    "evolves_from": null,
    "varieties": [
      "venipede"
    ]
  },
  {
    "id": 544,
    "name": "whirlipede",
    "genus": "Curlipede Pokémon",
    "flavor_text": "Whirlipede protects itself with a sturdy shell and poisonous spikes while it stores up the energy it’ll need for evolution.",
    "generation": "generation-v",
    "color": "gray",
    "shape": "ball",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 277,
    "evolves_from": "venipede",
    "varieties": [
      "whirlipede"
    ]
  },
  {
    "id": 545,
    "name": "scolipede",
    "genus": "Megapede Pokémon",
    "flavor_text": "Scolipede engage in fierce territorial battles with Centiskorch. At the end of one of these battles, the victor makes a meal of the loser.",
    "generation": "generation-v",
    "color": "red",
    "shape": "armor",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 277,
    "evolves_from": "whirlipede",
    "varieties": [
      "scolipede",
      "scolipede-mega"
    ]
  },
  {
    "id": 546,
    "name": "cottonee",
    "genus": "Cotton Puff Pokémon",
    "flavor_text": "Weaving together the cotton of both Cottonee and Eldegoss produces exquisite cloth that’s highly prized by many luxury brands.",
    "generation": "generation-v",
    "color": "green",
    "shape": "ball",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "plant",
      "fairy"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 278,
    "evolves_from": null,
    "varieties": [
      "cottonee"
    ]
  },
  {
    "id": 547,
    "name": "whimsicott",
    "genus": "Windveiled Pokémon",
    "flavor_text": "As long as this Pokémon bathes in sunlight, its cotton keeps growing. If too much cotton fluff builds up, Whimsicott tears it off and scatters it.",
    "generation": "generation-v",
    "color": "green",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "plant",
      "fairy"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 278,
    "evolves_from": "cottonee",
    "varieties": [
      "whimsicott"
    ]
  },
  {
    "id": 548,
    "name": "petilil",
    "genus": "Bulb Pokémon",
    "flavor_text": "The leaves on its head are highly valued for medicinal purposes. Dry the leaves in the sun, boil them, and then drink the bitter decoction for remarkably effective relief from fatigue.",
    "generation": "generation-v",
    "color": "green",
    "shape": "blob",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 8,
    "egg_groups": [
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 279,
    "evolves_from": null,
    "varieties": [
      "petilil"
    ]
  },
  {
    "id": 549,
    "name": "lilligant",
    "genus": "Flowering Pokémon",
    "flavor_text": "I suspect that its well-developed legs are the result of a life spent on mountains covered in deep snow. The scent it exudes from its flower crown heartens those in proximity.",
    "generation": "generation-v",
    "color": "green",
    "shape": "blob",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 8,
    "egg_groups": [
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 279,
    "evolves_from": "petilil",
    "varieties": [
      "lilligant",
      "lilligant-hisui"
    ]
  },
  {
    "id": 550,
    "name": "basculin",
    "genus": "Hostile Pokémon",
    "flavor_text": "Though it differs from other Basculin in several respects, including demeanor—this one is gentle—I have categorized it as a regional form given the vast array of shared qualities.",
    "generation": "generation-v",
    "color": "green",
    "shape": "fish",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 25,
    "base_happiness": 70,
    "hatch_counter": 40,
    "gender_rate": 4,
    "egg_groups": [
      "water2"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 280,
    "evolves_from": null,
    "varieties": [
      "basculin-red-striped",
      "basculin-blue-striped",
      "basculin-white-striped"
    ]
  },
  {
    "id": 551,
    "name": "sandile",
    "genus": "Desert Croc Pokémon",
    "flavor_text": "Sandile is small, but its legs and lower body are powerful. Pushing sand aside as it goes, Sandile moves through the desert as if it’s swimming.",
    "generation": "generation-v",
    "color": "brown",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 180,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 281,
    "evolves_from": null,
    "varieties": [
      "sandile"
    ]
  },
  {
    "id": 552,
    "name": "krokorok",
    "genus": "Desert Croc Pokémon",
    "flavor_text": "Although this Pokémon has specialized eyes that allow it to see in the dark, Krokorok won’t move much at night—the desert gets cold after sunset.",
    "generation": "generation-v",
    "color": "brown",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 281,
    "evolves_from": "sandile",
    "varieties": [
      "krokorok"
    ]
  },
  {
    "id": 553,
    "name": "krookodile",
    "genus": "Intimidation Pokémon",
    "flavor_text": "While terribly aggressive, Krookodile also has the patience to stay hidden under sand for days, lying in wait for prey.",
    "generation": "generation-v",
    "color": "red",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 281,
    "evolves_from": "krokorok",
    "varieties": [
      "krookodile"
    ]
  },
  {
    "id": 554,
    "name": "darumaka",
    "genus": "Zen Charm Pokémon",
    "flavor_text": "This popular symbol of good fortune will never fall over in its sleep, no matter how it’s pushed or pulled.",
    "generation": "generation-v",
    "color": "red",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 282,
    "evolves_from": null,
    "varieties": [
      "darumaka",
      "darumaka-galar"
    ]
  },
  {
    "id": 555,
    "name": "darmanitan",
    "genus": "Blazing Pokémon",
    "flavor_text": "This Pokémon’s power level rises along with the temperature of its fire, which can reach 2,500 degrees Fahrenheit.",
    "generation": "generation-v",
    "color": "red",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 282,
    "evolves_from": "darumaka",
    "varieties": [
      "darmanitan-standard",
      "darmanitan-zen",
      "darmanitan-galar-standard",
      "darmanitan-galar-zen"
    ]
  },
  {
    "id": 556,
    "name": "maractus",
    "genus": "Cactus Pokémon",
    "flavor_text": "Once each year, this Pokémon scatters its seeds. They’re jam-packed with nutrients, making them a precious food source out in the desert.",
    "generation": "generation-v",
    "color": "green",
    "shape": "blob",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 283,
    "evolves_from": null,
    "varieties": [
      "maractus"
    ]
  },
  {
    "id": 557,
    "name": "dwebble",
    "genus": "Rock Inn Pokémon",
    "flavor_text": "It first tries to find a rock to live in, but if there are no suitable rocks to be found, Dwebble may move in to the ports of a Hippowdon.",
    "generation": "generation-v",
    "color": "red",
    "shape": "armor",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "bug",
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 284,
    "evolves_from": null,
    "varieties": [
      "dwebble"
    ]
  },
  {
    "id": 558,
    "name": "crustle",
    "genus": "Stone Home Pokémon",
    "flavor_text": "Its thick claws are its greatest weapons. They’re mighty enough to crack Rhyperior’s carapace.",
    "generation": "generation-v",
    "color": "red",
    "shape": "armor",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "bug",
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 284,
    "evolves_from": "dwebble",
    "varieties": [
      "crustle"
    ]
  },
  {
    "id": 559,
    "name": "scraggy",
    "genus": "Shedding Pokémon",
    "flavor_text": "It protects itself with its durable skin. It’s thought that this Pokémon will evolve once its skin has completely stretched out.",
    "generation": "generation-v",
    "color": "yellow",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 180,
    "base_happiness": 35,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "ground",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 285,
    "evolves_from": null,
    "varieties": [
      "scraggy"
    ]
  },
  {
    "id": 560,
    "name": "scrafty",
    "genus": "Hoodlum Pokémon",
    "flavor_text": "While mostly known for having the temperament of an aggressive ruffian, this Pokémon takes very good care of its family, friends, and territory.",
    "generation": "generation-v",
    "color": "red",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "ground",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 285,
    "evolves_from": "scraggy",
    "varieties": [
      "scrafty",
      "scrafty-mega"
    ]
  },
  {
    "id": 561,
    "name": "sigilyph",
    "genus": "Avianoid Pokémon",
    "flavor_text": "A discovery was made in the desert where Sigilyph fly. The ruins of what may have been an ancient city were found beneath the sands.",
    "generation": "generation-v",
    "color": "black",
    "shape": "wings",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 286,
    "evolves_from": null,
    "varieties": [
      "sigilyph"
    ]
  },
  {
    "id": 562,
    "name": "yamask",
    "genus": "Spirit Pokémon",
    "flavor_text": "The spirit of a person from a bygone age became this Pokémon. It rambles through ruins, searching for someone who knows its face.",
    "generation": "generation-v",
    "color": "black",
    "shape": "arms",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "mineral",
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 287,
    "evolves_from": null,
    "varieties": [
      "yamask",
      "yamask-galar"
    ]
  },
  {
    "id": 563,
    "name": "cofagrigus",
    "genus": "Coffin Pokémon",
    "flavor_text": "There are many depictions of Cofagrigus decorating ancient tombs. They’re symbols of the wealth that kings of bygone eras had.",
    "generation": "generation-v",
    "color": "yellow",
    "shape": "blob",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "mineral",
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 287,
    "evolves_from": "yamask",
    "varieties": [
      "cofagrigus"
    ]
  },
  {
    "id": 564,
    "name": "tirtouga",
    "genus": "Prototurtle Pokémon",
    "flavor_text": "Tirtouga is considered to be the ancestor of many turtle Pokémon. It was restored to life from a fossil.",
    "generation": "generation-v",
    "color": "blue",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 30,
    "gender_rate": 1,
    "egg_groups": [
      "water1",
      "water3"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 288,
    "evolves_from": null,
    "varieties": [
      "tirtouga"
    ]
  },
  {
    "id": 565,
    "name": "carracosta",
    "genus": "Prototurtle Pokémon",
    "flavor_text": "This Pokémon emerges from the water in search of prey despite the fact that it moves more slowly on land.",
    "generation": "generation-v",
    "color": "blue",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 30,
    "gender_rate": 1,
    "egg_groups": [
      "water1",
      "water3"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 288,
    "evolves_from": "tirtouga",
    "varieties": [
      "carracosta"
    ]
  },
  {
    "id": 566,
    "name": "archen",
    "genus": "First Bird Pokémon",
    "flavor_text": "Archen is said to be the ancestor of bird Pokémon. It lived in treetops, eating berries and bug Pokémon.",
    "generation": "generation-v",
    "color": "yellow",
    "shape": "wings",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 30,
    "gender_rate": 1,
    "egg_groups": [
      "flying",
      "water3"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 289,
    "evolves_from": null,
    "varieties": [
      "archen"
    ]
  },
  {
    "id": 567,
    "name": "archeops",
    "genus": "First Bird Pokémon",
    "flavor_text": "Though capable of flight, Archeops was apparently better at hunting on the ground.",
    "generation": "generation-v",
    "color": "yellow",
    "shape": "wings",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 30,
    "gender_rate": 1,
    "egg_groups": [
      "flying",
      "water3"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 289,
    "evolves_from": "archen",
    "varieties": [
      "archeops"
    ]
  },
  {
    "id": 568,
    "name": "trubbish",
    "genus": "Trash Bag Pokémon",
    "flavor_text": "This Pokémon was born from a bag stuffed with trash. Galarian Weezing relish the fumes belched by Trubbish.",
    "generation": "generation-v",
    "color": "green",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 290,
    "evolves_from": null,
    "varieties": [
      "trubbish"
    ]
  },
  {
    "id": 569,
    "name": "garbodor",
    "genus": "Trash Heap Pokémon",
    "flavor_text": "The toxic liquid it launches from its right arm is so virulent that it can kill a weakened creature instantly.",
    "generation": "generation-v",
    "color": "green",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 290,
    "evolves_from": "trubbish",
    "varieties": [
      "garbodor",
      "garbodor-gmax"
    ]
  },
  {
    "id": 570,
    "name": "zorua",
    "genus": "Tricky Fox Pokémon",
    "flavor_text": "A once-departed soul, returned to life in Hisui. Derives power from resentment, which rises as energy atop its head and takes on the forms of foes. In this way, Zorua vents lingering malice.",
    "generation": "generation-v",
    "color": "gray",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 291,
    "evolves_from": null,
    "varieties": [
      "zorua",
      "zorua-hisui"
    ]
  },
  {
    "id": 571,
    "name": "zoroark",
    "genus": "Illusion Fox Pokémon",
    "flavor_text": "With its disheveled white fur, it looks like an embodiment of death. Heedless of its own safety, Zoroark attacks its nemeses with a bitter energy so intense, it lacerates Zoroark's own body.",
    "generation": "generation-v",
    "color": "gray",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 1,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 291,
    "evolves_from": "zorua",
    "varieties": [
      "zoroark",
      "zoroark-hisui"
    ]
  },
  {
    "id": 572,
    "name": "minccino",
    "genus": "Chinchilla Pokémon",
    "flavor_text": "They pet each other with their tails as a form of greeting. Of the two, the one whose tail is fluffier is a bit more boastful.",
    "generation": "generation-v",
    "color": "gray",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "fast",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 6,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 292,
    "evolves_from": null,
    "varieties": [
      "minccino"
    ]
  },
  {
    "id": 573,
    "name": "cinccino",
    "genus": "Scarf Pokémon",
    "flavor_text": "A special oil that seeps through their fur helps them avoid attacks. The oil fetches a high price at market.",
    "generation": "generation-v",
    "color": "gray",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "fast",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 6,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 292,
    "evolves_from": "minccino",
    "varieties": [
      "cinccino"
    ]
  },
  {
    "id": 574,
    "name": "gothita",
    "genus": "Fixation Pokémon",
    "flavor_text": "Even when nobody seems to be around, Gothita can still be heard making a muted cry. Many believe it’s speaking to something only it can see.",
    "generation": "generation-v",
    "color": "purple",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 200,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 6,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 293,
    "evolves_from": null,
    "varieties": [
      "gothita"
    ]
  },
  {
    "id": 575,
    "name": "gothorita",
    "genus": "Manipulate Pokémon",
    "flavor_text": "On nights when the stars shine, this Pokémon’s psychic power is at its strongest. It’s unknown just what link Gothorita has to the greater universe.",
    "generation": "generation-v",
    "color": "purple",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 100,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 6,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 293,
    "evolves_from": "gothita",
    "varieties": [
      "gothorita"
    ]
  },
  {
    "id": 576,
    "name": "gothitelle",
    "genus": "Astral Body Pokémon",
    "flavor_text": "A criminal who was shown his fate by a Gothitelle went missing that same day and was never seen again.",
    "generation": "generation-v",
    "color": "purple",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 50,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 6,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 293,
    "evolves_from": "gothorita",
    "varieties": [
      "gothitelle"
    ]
  },
  {
    "id": 577,
    "name": "solosis",
    "genus": "Cell Pokémon",
    "flavor_text": "Many say that the special liquid covering this Pokémon’s body would allow it to survive in the vacuum of space.",
    "generation": "generation-v",
    "color": "green",
    "shape": "ball",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 200,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 294,
    "evolves_from": null,
    "varieties": [
      "solosis"
    ]
  },
  {
    "id": 578,
    "name": "duosion",
    "genus": "Mitosis Pokémon",
    "flavor_text": "Its brain has split into two, and the two halves rarely think alike. Its actions are utterly unpredictable.",
    "generation": "generation-v",
    "color": "green",
    "shape": "ball",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 100,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 294,
    "evolves_from": "solosis",
    "varieties": [
      "duosion"
    ]
  },
  {
    "id": 579,
    "name": "reuniclus",
    "genus": "Multiplying Pokémon",
    "flavor_text": "It’s said that drinking the liquid surrounding Reuniclus grants wisdom. Problem is, the liquid is highly toxic to anything besides Reuniclus itself.",
    "generation": "generation-v",
    "color": "green",
    "shape": "arms",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 50,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 294,
    "evolves_from": "duosion",
    "varieties": [
      "reuniclus"
    ]
  },
  {
    "id": 580,
    "name": "ducklett",
    "genus": "Water Bird Pokémon",
    "flavor_text": "They are better at swimming than flying, and they happily eat their favorite food, peat moss, as they dive underwater.",
    "generation": "generation-v",
    "color": "blue",
    "shape": "wings",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 295,
    "evolves_from": null,
    "varieties": [
      "ducklett"
    ]
  },
  {
    "id": 581,
    "name": "swanna",
    "genus": "White Bird Pokémon",
    "flavor_text": "Swanna start to dance at dusk. The one dancing in the middle is the leader of the flock.",
    "generation": "generation-v",
    "color": "white",
    "shape": "wings",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 295,
    "evolves_from": "ducklett",
    "varieties": [
      "swanna"
    ]
  },
  {
    "id": 582,
    "name": "vanillite",
    "genus": "Fresh Snow Pokémon",
    "flavor_text": "Supposedly, this Pokémon was born from an icicle. It spews out freezing air at −58 degrees Fahrenheit to make itself more comfortable.",
    "generation": "generation-v",
    "color": "white",
    "shape": "blob",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 296,
    "evolves_from": null,
    "varieties": [
      "vanillite"
    ]
  },
  {
    "id": 583,
    "name": "vanillish",
    "genus": "Icy Snow Pokémon",
    "flavor_text": "It blasts enemies with cold air reaching −148 degrees Fahrenheit, freezing them solid. But it spares their lives afterward—it’s a kind Pokémon.",
    "generation": "generation-v",
    "color": "white",
    "shape": "blob",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 296,
    "evolves_from": "vanillite",
    "varieties": [
      "vanillish"
    ]
  },
  {
    "id": 584,
    "name": "vanilluxe",
    "genus": "Snowstorm Pokémon",
    "flavor_text": "People believe this Pokémon formed when two Vanillish stuck together. Its body temperature is roughly 21 degrees Fahrenheit.",
    "generation": "generation-v",
    "color": "white",
    "shape": "heads",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 296,
    "evolves_from": "vanillish",
    "varieties": [
      "vanilluxe"
    ]
  },
  {
    "id": 585,
    "name": "deerling",
    "genus": "Season Pokémon",
    "flavor_text": "The turning of the seasons changes the color and scent of this Pokémon’s fur. People use it to mark the seasons.",
    "generation": "generation-v",
    "color": "pink",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 297,
    "evolves_from": null,
    "varieties": [
      "deerling"
    ]
  },
  {
    "id": 586,
    "name": "sawsbuck",
    "genus": "Season Pokémon",
    "flavor_text": "They migrate according to the seasons, so some people call Sawsbuck the harbingers of spring.",
    "generation": "generation-v",
    "color": "brown",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 297,
    "evolves_from": "deerling",
    "varieties": [
      "sawsbuck"
    ]
  },
  {
    "id": 587,
    "name": "emolga",
    "genus": "Sky Squirrel Pokémon",
    "flavor_text": "This Pokémon absolutely loves sweet berries. Sometimes it stuffs its cheeks full of so much food that it can’t fly properly.",
    "generation": "generation-v",
    "color": "white",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 200,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 298,
    "evolves_from": null,
    "varieties": [
      "emolga"
    ]
  },
  {
    "id": 588,
    "name": "karrablast",
    "genus": "Clamping Pokémon",
    "flavor_text": "It spits a liquid from its mouth to melt through Shelmet’s shell. Karrablast doesn’t eat the shell— it eats only the contents.",
    "generation": "generation-v",
    "color": "blue",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 200,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 299,
    "evolves_from": null,
    "varieties": [
      "karrablast"
    ]
  },
  {
    "id": 589,
    "name": "escavalier",
    "genus": "Cavalry Pokémon",
    "flavor_text": "It charges its enemies, lances at the ready. An image of one of its duels is captured in a famous painting of Escavalier clashing with Sirfetch’d.",
    "generation": "generation-v",
    "color": "gray",
    "shape": "arms",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 299,
    "evolves_from": "karrablast",
    "varieties": [
      "escavalier"
    ]
  },
  {
    "id": 590,
    "name": "foongus",
    "genus": "Mushroom Pokémon",
    "flavor_text": "The spores released from this Pokémon’s hands are highly poisonous, but when thoroughly dried, the spores can be used as stomach medicine.",
    "generation": "generation-v",
    "color": "white",
    "shape": "arms",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 300,
    "evolves_from": null,
    "varieties": [
      "foongus"
    ]
  },
  {
    "id": 591,
    "name": "amoonguss",
    "genus": "Mushroom Pokémon",
    "flavor_text": "Amoonguss generally doesn’t move much. It tends to stand still near Poké Balls that have been dropped on the ground.",
    "generation": "generation-v",
    "color": "white",
    "shape": "arms",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "plant"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 300,
    "evolves_from": "foongus",
    "varieties": [
      "amoonguss"
    ]
  },
  {
    "id": 592,
    "name": "frillish",
    "genus": "Floating Pokémon",
    "flavor_text": "Legend has it that the residents of a sunken ancient city changed into these Pokémon.",
    "generation": "generation-v",
    "color": "white",
    "shape": "tentacles",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 301,
    "evolves_from": null,
    "varieties": [
      "frillish-male"
    ]
  },
  {
    "id": 593,
    "name": "jellicent",
    "genus": "Floating Pokémon",
    "flavor_text": "Whenever a full moon hangs in the night sky, schools of Jellicent gather near the surface of the sea, waiting for their prey to appear.",
    "generation": "generation-v",
    "color": "white",
    "shape": "tentacles",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 301,
    "evolves_from": "frillish",
    "varieties": [
      "jellicent-male"
    ]
  },
  {
    "id": 594,
    "name": "alomomola",
    "genus": "Caring Pokémon",
    "flavor_text": "The reason it helps Pokémon in a weakened condition is that any Pokémon coming after them may also attack Alomomola.",
    "generation": "generation-v",
    "color": "pink",
    "shape": "fish",
    "habitat": null,
    "growth_rate": "fast",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 40,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "water2"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 302,
    "evolves_from": null,
    "varieties": [
      "alomomola"
    ]
  },
  {
    "id": 595,
    "name": "joltik",
    "genus": "Attaching Pokémon",
    "flavor_text": "Joltik latch on to other Pokémon and suck out static electricity. They’re often found sticking to Yamper’s hindquarters.",
    "generation": "generation-v",
    "color": "yellow",
    "shape": "armor",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 303,
    "evolves_from": null,
    "varieties": [
      "joltik"
    ]
  },
  {
    "id": 596,
    "name": "galvantula",
    "genus": "EleSpider Pokémon",
    "flavor_text": "It lays traps of electrified threads near the nests of bird Pokémon, aiming to snare chicks that are not yet good at flying.",
    "generation": "generation-v",
    "color": "yellow",
    "shape": "armor",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 303,
    "evolves_from": "joltik",
    "varieties": [
      "galvantula"
    ]
  },
  {
    "id": 597,
    "name": "ferroseed",
    "genus": "Thorn Seed Pokémon",
    "flavor_text": "Mossy caves are their preferred dwellings. Enzymes contained in mosses help Ferroseed’s spikes grow big and strong.",
    "generation": "generation-v",
    "color": "gray",
    "shape": "ball",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "plant",
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 304,
    "evolves_from": null,
    "varieties": [
      "ferroseed"
    ]
  },
  {
    "id": 598,
    "name": "ferrothorn",
    "genus": "Thorn Pod Pokémon",
    "flavor_text": "Its spikes are harder than steel. This Pokémon crawls across rock walls by stabbing the spikes on its feelers into the stone.",
    "generation": "generation-v",
    "color": "gray",
    "shape": "tentacles",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "plant",
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 304,
    "evolves_from": "ferroseed",
    "varieties": [
      "ferrothorn"
    ]
  },
  {
    "id": 599,
    "name": "klink",
    "genus": "Gear Pokémon",
    "flavor_text": "It’s suspected that Klink were the inspiration behind ancient people’s invention of the first gears.",
    "generation": "generation-v",
    "color": "gray",
    "shape": "heads",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 130,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": -1,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 305,
    "evolves_from": null,
    "varieties": [
      "klink"
    ]
  },
  {
    "id": 600,
    "name": "klang",
    "genus": "Gear Pokémon",
    "flavor_text": "Many companies in the Galar region choose Klang as their logo. This Pokémon is considered the symbol of industrial technology.",
    "generation": "generation-v",
    "color": "gray",
    "shape": "heads",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": -1,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 305,
    "evolves_from": "klink",
    "varieties": [
      "klang"
    ]
  },
  {
    "id": 601,
    "name": "klinklang",
    "genus": "Gear Pokémon",
    "flavor_text": "The three gears that compose this Pokémon spin at high speed. Its new spiked gear isn’t a living creature.",
    "generation": "generation-v",
    "color": "gray",
    "shape": "heads",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 30,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": -1,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 305,
    "evolves_from": "klang",
    "varieties": [
      "klinklang"
    ]
  },
  {
    "id": 602,
    "name": "tynamo",
    "genus": "EleFish Pokémon",
    "flavor_text": "One alone can emit only a trickle of electricity, so a group of them gathers to unleash a powerful electric shock.",
    "generation": "generation-v",
    "color": "white",
    "shape": "fish",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 306,
    "evolves_from": null,
    "varieties": [
      "tynamo"
    ]
  },
  {
    "id": 603,
    "name": "eelektrik",
    "genus": "EleFish Pokémon",
    "flavor_text": "These Pokémon have a big appetite. When they spot their prey, they attack it and paralyze it with electricity.",
    "generation": "generation-v",
    "color": "blue",
    "shape": "fish",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 306,
    "evolves_from": "tynamo",
    "varieties": [
      "eelektrik"
    ]
  },
  {
    "id": 604,
    "name": "eelektross",
    "genus": "EleFish Pokémon",
    "flavor_text": "They crawl out of the ocean using their arms. They will attack prey on shore and immediately drag it into the ocean.",
    "generation": "generation-v",
    "color": "blue",
    "shape": "fish",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 30,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 306,
    "evolves_from": "eelektrik",
    "varieties": [
      "eelektross",
      "eelektross-mega"
    ]
  },
  {
    "id": 605,
    "name": "elgyem",
    "genus": "Cerebral Pokémon",
    "flavor_text": "This Pokémon was discovered about 50 years ago. Its highly developed brain enables it to exert its psychic powers.",
    "generation": "generation-v",
    "color": "blue",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 255,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 307,
    "evolves_from": null,
    "varieties": [
      "elgyem"
    ]
  },
  {
    "id": 606,
    "name": "beheeyem",
    "genus": "Cerebral Pokémon",
    "flavor_text": "Sometimes found drifting above wheat fields, this Pokémon can control the memories of its opponents.",
    "generation": "generation-v",
    "color": "brown",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 307,
    "evolves_from": "elgyem",
    "varieties": [
      "beheeyem"
    ]
  },
  {
    "id": 607,
    "name": "litwick",
    "genus": "Candle Pokémon",
    "flavor_text": "The younger the life this Pokémon absorbs, the brighter and eerier the flame on its head burns.",
    "generation": "generation-v",
    "color": "white",
    "shape": "blob",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 308,
    "evolves_from": null,
    "varieties": [
      "litwick"
    ]
  },
  {
    "id": 608,
    "name": "lampent",
    "genus": "Lamp Pokémon",
    "flavor_text": "It lurks in cities, pretending to be a lamp. Once it finds someone whose death is near, it will trail quietly after them.",
    "generation": "generation-v",
    "color": "black",
    "shape": "arms",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 308,
    "evolves_from": "litwick",
    "varieties": [
      "lampent"
    ]
  },
  {
    "id": 609,
    "name": "chandelure",
    "genus": "Luring Pokémon",
    "flavor_text": "In homes illuminated by Chandelure instead of lights, funerals were a constant occurrence— or so it’s said.",
    "generation": "generation-v",
    "color": "black",
    "shape": "arms",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 308,
    "evolves_from": "lampent",
    "varieties": [
      "chandelure",
      "chandelure-mega"
    ]
  },
  {
    "id": 610,
    "name": "axew",
    "genus": "Tusk Pokémon",
    "flavor_text": "They play with each other by knocking their large tusks together. Their tusks break sometimes, but they grow back so quickly that it isn’t a concern.",
    "generation": "generation-v",
    "color": "green",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 75,
    "base_happiness": 35,
    "hatch_counter": 40,
    "gender_rate": 4,
    "egg_groups": [
      "monster",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 309,
    "evolves_from": null,
    "varieties": [
      "axew"
    ]
  },
  {
    "id": 611,
    "name": "fraxure",
    "genus": "Axe Jaw Pokémon",
    "flavor_text": "Its skin is as hard as a suit of armor. Fraxure’s favorite strategy is to tackle its opponents, stabbing them with its tusks at the same time.",
    "generation": "generation-v",
    "color": "green",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 60,
    "base_happiness": 35,
    "hatch_counter": 40,
    "gender_rate": 4,
    "egg_groups": [
      "monster",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 309,
    "evolves_from": "axew",
    "varieties": [
      "fraxure"
    ]
  },
  {
    "id": 612,
    "name": "haxorus",
    "genus": "Axe Jaw Pokémon",
    "flavor_text": "While usually kindhearted, it can be terrifying if angered. Tusks that can slice through steel beams are how Haxorus deals with its adversaries.",
    "generation": "generation-v",
    "color": "yellow",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 35,
    "hatch_counter": 40,
    "gender_rate": 4,
    "egg_groups": [
      "monster",
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 309,
    "evolves_from": "fraxure",
    "varieties": [
      "haxorus"
    ]
  },
  {
    "id": 613,
    "name": "cubchoo",
    "genus": "Chill Pokémon",
    "flavor_text": "It sniffles before performing a move, using its frosty snot to provide an icy element to any move that needs it.",
    "generation": "generation-v",
    "color": "white",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 120,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 310,
    "evolves_from": null,
    "varieties": [
      "cubchoo"
    ]
  },
  {
    "id": 614,
    "name": "beartic",
    "genus": "Freezing Pokémon",
    "flavor_text": "It swims energetically through frigid seas. When it gets tired, it freezes the seawater with its breath so it can rest on the ice.",
    "generation": "generation-v",
    "color": "white",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 310,
    "evolves_from": "cubchoo",
    "varieties": [
      "beartic"
    ]
  },
  {
    "id": 615,
    "name": "cryogonal",
    "genus": "Crystallizing Pokémon",
    "flavor_text": "When the weather gets hot, these Pokémon turn into water vapor. Cryogonal are almost never seen during summer.",
    "generation": "generation-v",
    "color": "blue",
    "shape": "ball",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 25,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": -1,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 311,
    "evolves_from": null,
    "varieties": [
      "cryogonal"
    ]
  },
  {
    "id": 616,
    "name": "shelmet",
    "genus": "Snail Pokémon",
    "flavor_text": "It has a strange physiology that responds to electricity. When together with Karrablast, Shelmet evolves for some reason.",
    "generation": "generation-v",
    "color": "red",
    "shape": "ball",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 200,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 312,
    "evolves_from": null,
    "varieties": [
      "shelmet"
    ]
  },
  {
    "id": 617,
    "name": "accelgor",
    "genus": "Shell Out Pokémon",
    "flavor_text": "Discarding its shell made it nimble. To keep itself from dehydrating, it wraps its body in bands of membrane.",
    "generation": "generation-v",
    "color": "red",
    "shape": "arms",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 15,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 312,
    "evolves_from": "shelmet",
    "varieties": [
      "accelgor"
    ]
  },
  {
    "id": 618,
    "name": "stunfisk",
    "genus": "Trap Pokémon",
    "flavor_text": "For some reason, this Pokémon smiles slightly when it emits a strong electric current from the yellow markings on its body.",
    "generation": "generation-v",
    "color": "brown",
    "shape": "fish",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 75,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "water1",
      "indeterminate"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 313,
    "evolves_from": null,
    "varieties": [
      "stunfisk",
      "stunfisk-galar"
    ]
  },
  {
    "id": 619,
    "name": "mienfoo",
    "genus": "Martial Arts Pokémon",
    "flavor_text": "Though small, Mienfoo’s temperament is fierce. Any creature that approaches Mienfoo carelessly will be greeted with a flurry of graceful attacks.",
    "generation": "generation-v",
    "color": "yellow",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 180,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "ground",
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 314,
    "evolves_from": null,
    "varieties": [
      "mienfoo"
    ]
  },
  {
    "id": 620,
    "name": "mienshao",
    "genus": "Martial Arts Pokémon",
    "flavor_text": "Delivered at blinding speeds, kicks from this Pokémon can shatter massive boulders into tiny pieces.",
    "generation": "generation-v",
    "color": "purple",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium-slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": 4,
    "egg_groups": [
      "ground",
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 314,
    "evolves_from": "mienfoo",
    "varieties": [
      "mienshao"
    ]
  },
  {
    "id": 621,
    "name": "druddigon",
    "genus": "Cave Pokémon",
    "flavor_text": "Druddigon are vicious and cunning. They take up residence in nests dug out by other Pokémon, treating the stolen nests as their own lairs.",
    "generation": "generation-v",
    "color": "red",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 30,
    "gender_rate": 4,
    "egg_groups": [
      "dragon",
      "monster"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 315,
    "evolves_from": null,
    "varieties": [
      "druddigon"
    ]
  },
  {
    "id": 622,
    "name": "golett",
    "genus": "Automaton Pokémon",
    "flavor_text": "This Pokémon was created from clay. It received orders from its master many thousands of years ago, and it still follows those orders to this day.",
    "generation": "generation-v",
    "color": "green",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": -1,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 316,
    "evolves_from": null,
    "varieties": [
      "golett"
    ]
  },
  {
    "id": 623,
    "name": "golurk",
    "genus": "Automaton Pokémon",
    "flavor_text": "There’s a theory that inside Golurk is a perpetual motion machine that produces limitless energy, but this belief hasn’t been proven.",
    "generation": "generation-v",
    "color": "green",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 25,
    "gender_rate": -1,
    "egg_groups": [
      "mineral"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 316,
    "evolves_from": "golett",
    "varieties": [
      "golurk",
      "golurk-mega"
    ]
  },
  {
    "id": 624,
    "name": "pawniard",
    "genus": "Sharp Blade Pokémon",
    "flavor_text": "A pack of these Pokémon forms to serve a Bisharp boss. Each Pawniard trains diligently, dreaming of one day taking the lead.",
    "generation": "generation-v",
    "color": "red",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 120,
    "base_happiness": 35,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 317,
    "evolves_from": null,
    "varieties": [
      "pawniard"
    ]
  },
  {
    "id": 625,
    "name": "bisharp",
    "genus": "Sword Blade Pokémon",
    "flavor_text": "Violent conflicts erupt between Bisharp and Fraxure over places where sharpening stones can be found.",
    "generation": "generation-v",
    "color": "red",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 35,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "humanshape"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 317,
    "evolves_from": "pawniard",
    "varieties": [
      "bisharp"
    ]
  },
  {
    "id": 626,
    "name": "bouffalant",
    "genus": "Bash Buffalo Pokémon",
    "flavor_text": "These Pokémon live in herds of about 20 individuals. Bouffalant that betray the herd will lose the hair on their heads for some reason.",
    "generation": "generation-v",
    "color": "brown",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 318,
    "evolves_from": null,
    "varieties": [
      "bouffalant"
    ]
  },
  {
    "id": 627,
    "name": "rufflet",
    "genus": "Eaglet Pokémon",
    "flavor_text": "Its chick-like looks belie its hotheadedness. It challenges its parents at every opportunity, desperate to prove its strength.",
    "generation": "generation-v",
    "color": "white",
    "shape": "wings",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 190,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 0,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 319,
    "evolves_from": null,
    "varieties": [
      "rufflet"
    ]
  },
  {
    "id": 628,
    "name": "braviary",
    "genus": "Valiant Pokémon",
    "flavor_text": "Screaming a bloodcurdling battle cry, this huge and ferocious bird Pokémon goes out on the hunt. It blasts lakes with shock waves, then scoops up any prey that float to the water's surface.",
    "generation": "generation-v",
    "color": "red",
    "shape": "wings",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 60,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 0,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 319,
    "evolves_from": "rufflet",
    "varieties": [
      "braviary",
      "braviary-hisui"
    ]
  },
  {
    "id": 629,
    "name": "vullaby",
    "genus": "Diapered Pokémon",
    "flavor_text": "Vullaby grow quickly. Bones that have gotten too small for older Vullaby to wear often get passed down to younger ones in the nest.",
    "generation": "generation-v",
    "color": "brown",
    "shape": "wings",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 190,
    "base_happiness": 35,
    "hatch_counter": 20,
    "gender_rate": 8,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 320,
    "evolves_from": null,
    "varieties": [
      "vullaby"
    ]
  },
  {
    "id": 630,
    "name": "mandibuzz",
    "genus": "Bone Vulture Pokémon",
    "flavor_text": "They adorn themselves with bones. There seem to be fashion trends among them, as different bones come into and fall out of popularity.",
    "generation": "generation-v",
    "color": "brown",
    "shape": "wings",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 60,
    "base_happiness": 35,
    "hatch_counter": 20,
    "gender_rate": 8,
    "egg_groups": [
      "flying"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 320,
    "evolves_from": "vullaby",
    "varieties": [
      "mandibuzz"
    ]
  },
  {
    "id": 631,
    "name": "heatmor",
    "genus": "Anteater Pokémon",
    "flavor_text": "A flame serves as its tongue, melting through the hard shell of Durant so that Heatmor can devour their insides.",
    "generation": "generation-v",
    "color": "red",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "ground"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 321,
    "evolves_from": null,
    "varieties": [
      "heatmor"
    ]
  },
  {
    "id": 632,
    "name": "durant",
    "genus": "Iron Ant Pokémon",
    "flavor_text": "With their large mandibles, these Pokémon can crunch their way through rock. They work together to protect their eggs from Sandaconda.",
    "generation": "generation-v",
    "color": "gray",
    "shape": "armor",
    "habitat": null,
    "growth_rate": "medium",
    "capture_rate": 90,
    "base_happiness": 70,
    "hatch_counter": 20,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 322,
    "evolves_from": null,
    "varieties": [
      "durant"
    ]
  },
  {
    "id": 633,
    "name": "deino",
    "genus": "Irate Pokémon",
    "flavor_text": "Because it can’t see, this Pokémon is constantly biting at everything it touches, trying to keep track of its surroundings.",
    "generation": "generation-v",
    "color": "blue",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 35,
    "hatch_counter": 40,
    "gender_rate": 4,
    "egg_groups": [
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 323,
    "evolves_from": null,
    "varieties": [
      "deino"
    ]
  },
  {
    "id": 634,
    "name": "zweilous",
    "genus": "Hostile Pokémon",
    "flavor_text": "Their two heads will fight each other over a single piece of food. Zweilous are covered in scars even without battling others.",
    "generation": "generation-v",
    "color": "blue",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 35,
    "hatch_counter": 40,
    "gender_rate": 4,
    "egg_groups": [
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 323,
    "evolves_from": "deino",
    "varieties": [
      "zweilous"
    ]
  },
  {
    "id": 635,
    "name": "hydreigon",
    "genus": "Brutal Pokémon",
    "flavor_text": "The three heads take turns sinking their teeth into the opponent. Their attacks won’t slow until their target goes down.",
    "generation": "generation-v",
    "color": "blue",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 35,
    "hatch_counter": 40,
    "gender_rate": 4,
    "egg_groups": [
      "dragon"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 323,
    "evolves_from": "zweilous",
    "varieties": [
      "hydreigon"
    ]
  },
  {
    "id": 636,
    "name": "larvesta",
    "genus": "Torch Pokémon",
    "flavor_text": "Larvesta’s body is warm all over. It spouts fire from the tips of its horns to intimidate predators and scare prey.",
    "generation": "generation-v",
    "color": "white",
    "shape": "armor",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 45,
    "base_happiness": 70,
    "hatch_counter": 40,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 324,
    "evolves_from": null,
    "varieties": [
      "larvesta"
    ]
  },
  {
    "id": 637,
    "name": "volcarona",
    "genus": "Sun Pokémon",
    "flavor_text": "This Pokémon emerges from a cocoon formed of raging flames. Ancient murals depict Volcarona as a deity of fire.",
    "generation": "generation-v",
    "color": "white",
    "shape": "bug-wings",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 15,
    "base_happiness": 70,
    "hatch_counter": 40,
    "gender_rate": 4,
    "egg_groups": [
      "bug"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "evolution_chain_id": 324,
    "evolves_from": "larvesta",
    "varieties": [
      "volcarona"
    ]
  },
  {
    "id": 638,
    "name": "cobalion",
    "genus": "Iron Will Pokémon",
    "flavor_text": "From the moment it’s born, this Pokémon radiates the air of a leader. Its presence will calm even vicious foes.",
    "generation": "generation-v",
    "color": "blue",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 35,
    "hatch_counter": 80,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 325,
    "evolves_from": null,
    "varieties": [
      "cobalion"
    ]
  },
  {
    "id": 639,
    "name": "terrakion",
    "genus": "Cavern Pokémon",
    "flavor_text": "In Unovan legend, Terrakion battled against humans in an effort to protect other Pokémon.",
    "generation": "generation-v",
    "color": "gray",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 35,
    "hatch_counter": 80,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 326,
    "evolves_from": null,
    "varieties": [
      "terrakion"
    ]
  },
  {
    "id": 640,
    "name": "virizion",
    "genus": "Grassland Pokémon",
    "flavor_text": "It darts around opponents with a flurry of quick movements, slicing them up with its horns.",
    "generation": "generation-v",
    "color": "green",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 35,
    "hatch_counter": 80,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 327,
    "evolves_from": null,
    "varieties": [
      "virizion"
    ]
  },
  {
    "id": 641,
    "name": "tornadus",
    "genus": "Cyclone Pokémon",
    "flavor_text": "This storm-stirring Pokémon is said to cause the seasons to turn by whipping up the air. I suspect its humanlike form to be a false one.",
    "generation": "generation-v",
    "color": "green",
    "shape": "arms",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 90,
    "hatch_counter": 120,
    "gender_rate": 0,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 328,
    "evolves_from": null,
    "varieties": [
      "tornadus-incarnate",
      "tornadus-therian"
    ]
  },
  {
    "id": 642,
    "name": "thundurus",
    "genus": "Bolt Strike Pokémon",
    "flavor_text": "They say this wielder of electricity has waged war with its nemesis, Tornadus, since time immemorial. The lightning bolts it hurls pierce the very earth and enrich the soil.",
    "generation": "generation-v",
    "color": "blue",
    "shape": "arms",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 90,
    "hatch_counter": 120,
    "gender_rate": 0,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 329,
    "evolves_from": null,
    "varieties": [
      "thundurus-incarnate",
      "thundurus-therian"
    ]
  },
  {
    "id": 643,
    "name": "reshiram",
    "genus": "Vast White Pokémon",
    "flavor_text": "According to myth, if people ignore truth and let themselves become consumed by greed, Reshiram will arrive to burn their kingdoms down.",
    "generation": "generation-v",
    "color": "white",
    "shape": "wings",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 0,
    "hatch_counter": 120,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 330,
    "evolves_from": null,
    "varieties": [
      "reshiram"
    ]
  },
  {
    "id": 644,
    "name": "zekrom",
    "genus": "Deep Black Pokémon",
    "flavor_text": "Mythology tells us that if people lose the righteousness in their hearts, their kingdoms will be razed by Zekrom’s lightning.",
    "generation": "generation-v",
    "color": "black",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 0,
    "hatch_counter": 120,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 331,
    "evolves_from": null,
    "varieties": [
      "zekrom"
    ]
  },
  {
    "id": 645,
    "name": "landorus",
    "genus": "Abundance Pokémon",
    "flavor_text": "When the incarnations of wind and of lightning clash, Landorus arrives to quell the conflict. After the tempests and thunderbolts abate, the land is sure to be blessed with bountiful harvests.",
    "generation": "generation-v",
    "color": "brown",
    "shape": "arms",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 90,
    "hatch_counter": 120,
    "gender_rate": 0,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 332,
    "evolves_from": null,
    "varieties": [
      "landorus-incarnate",
      "landorus-therian"
    ]
  },
  {
    "id": 646,
    "name": "kyurem",
    "genus": "Boundary Pokémon",
    "flavor_text": "It appears that this Pokémon uses its powers over ice to freeze its own body in order to stabilize its cellular structure.",
    "generation": "generation-v",
    "color": "gray",
    "shape": "upright",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 0,
    "hatch_counter": 120,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": true,
    "is_mythical": false,
    "evolution_chain_id": 333,
    "evolves_from": null,
    "varieties": [
      "kyurem",
      "kyurem-black",
      "kyurem-white"
    ]
  },
  {
    "id": 647,
    "name": "keldeo",
    "genus": "Colt Pokémon",
    "flavor_text": "They say that Keldeo must survive harsh battles and fully develop the horn on its forehead before this Pokémon’s true power will awaken.",
    "generation": "generation-v",
    "color": "yellow",
    "shape": "quadruped",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 35,
    "hatch_counter": 80,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": true,
    "evolution_chain_id": 334,
    "evolves_from": null,
    "varieties": [
      "keldeo-ordinary",
      "keldeo-resolute"
    ]
  },
  {
    "id": 648,
    "name": "meloetta",
    "genus": "Melody Pokémon",
    "flavor_text": "Its melodies are sung with a special vocalization method that can control the feelings of those who hear it.",
    "generation": "generation-v",
    "color": "white",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 100,
    "hatch_counter": 120,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": true,
    "evolution_chain_id": 335,
    "evolves_from": null,
    "varieties": [
      "meloetta-aria",
      "meloetta-pirouette"
    ]
  },
  {
    "id": 649,
    "name": "genesect",
    "genus": "Paleozoic Pokémon",
    "flavor_text": "This Pokémon existed 300 million years ago. Team Plasma altered it and attached a cannon to its back.",
    "generation": "generation-v",
    "color": "purple",
    "shape": "humanoid",
    "habitat": null,
    "growth_rate": "slow",
    "capture_rate": 3,
    "base_happiness": 0,
    "hatch_counter": 120,
    "gender_rate": -1,
    "egg_groups": [
      "no-eggs"
    ],
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": true,
    "evolution_chain_id": 336,
    "evolves_from": null,
    "varieties": [
      "genesect"
    ]
  }
];
