var moves=
	[
		{
			"name": "Fire Tower",
			"power": 155,
			"mp": 27,
			"invincibleTime": 26,
			"range": "LARGE",
			"speciality": "FIRE",
			"effect": {
				"type": "STUN",
				"chance": 8
			},
			"accuracy": 55,
			"aiTargetDistance": 9,
			"tier": 3,
			"learningChance": [
				"25%",
				"16%",
				"11%"
			]
		},
		{
			"name": "Prominence Beam",
			"power": 444,
			"mp": 61,
			"invincibleTime": 1,
			"range": "LARGE",
			"speciality": "FIRE",
			"effect": {
				"type": "FLAT",
				"chance": 3
			},
			"accuracy": 75,
			"aiTargetDistance": 2,
			"tier": 6,
			"learningChance": [
				"17%",
				"10%",
				"5%"
			]
		},
		{
			"name": "Spit Fire",
			"power": 66,
			"mp": 10,
			"invincibleTime": 1,
			"range": "LARGE",
			"speciality": "FIRE",
			"accuracy": 43,
			"aiTargetDistance": 5,
			"tier": 1,
			"learningChance": [
				"30%",
				"22%",
				"15%"
			]
		},
		{
			"name": "Red Inferno",
			"power": 210,
			"mp": 57,
			"invincibleTime": 1,
			"range": "WIDE",
			"speciality": "FIRE",
			"accuracy": 72,
			"aiTargetDistance": 9,
			"tier": 5,
			"learningChance": [
				"20%",
				"12%",
				"7%"
			]
		},
		{
			"name": "Magma Bomb",
			"power": 279,
			"mp": 44,
			"invincibleTime": 1,
			"range": "LARGE",
			"speciality": "FIRE",
			"effect": {
				"type": "CONFUSE",
				"chance": 4
			},
			"accuracy": 50,
			"aiTargetDistance": 5,
			"tier": 4,
			"learningChance": [
				"22%",
				"14%",
				"9%"
			]
		},
		{
			"name": "Heat Laser",
			"power": 84,
			"mp": 35,
			"invincibleTime": 1,
			"range": "WIDE",
			"speciality": "FIRE",
			"effect": {
				"type": "FLAT",
				"chance": 32
			},
			"accuracy": 80,
			"aiTargetDistance": 2,
			"tier": 2,
			"learningChance": [
				"28%",
				"19%",
				"13%"
			]
		},
		{
			"name": "Inifinity Burn",
			"power": 488,
			"mp": 88,
			"invincibleTime": 26,
			"range": "WIDE",
			"speciality": "FIRE",
			"effect": {
				"type": "STUN",
				"chance": 11
			},
			"accuracy": 79,
			"aiTargetDistance": 5,
			"tier": 7,
			"learningChance": [
				"15%",
				"8%",
				"0%"
			]
		},
		{
			"name": "Meltdown",
			"power": 400,
			"mp": 106,
			"invincibleTime": 1,
			"range": "WIDE",
			"speciality": "FIRE",
			"effect": {
				"type": "STUN",
				"chance": 24
			},
			"accuracy": 86,
			"aiTargetDistance": 5,
			"tier": 8,
			"learningChance": [
				"14%",
				"6%",
				"0%"
			]
		},
		{
			"name": "Thunder Justice",
			"power": 586,
			"mp": 110,
			"invincibleTime": 1,
			"range": "LARGE",
			"speciality": "AIR",
			"effect": {
				"type": "STUN",
				"chance": 32
			},
			"accuracy": 85,
			"aiTargetDistance": 9,
			"tier": 7,
			"learningChance": [
				"13%",
				"9%",
				"0%"
			]
		},
		{
			"name": "Spinning Shot",
			"power": 389,
			"mp": 50,
			"invincibleTime": 1,
			"range": "LARGE",
			"speciality": "AIR",
			"accuracy": 77,
			"aiTargetDistance": 12,
			"tier": 4,
			"learningChance": [
				"22%",
				"14%",
				"10%"
			]
		},
		{
			"name": "Electric Cloud",
			"power": 120,
			"mp": 23,
			"invincibleTime": 1,
			"range": "LARGE",
			"speciality": "AIR",
			"effect": {
				"type": "STUN",
				"chance": 9
			},
			"accuracy": 60,
			"aiTargetDistance": 2,
			"tier": 2,
			"learningChance": [
				"32%",
				"19%",
				"15%"
			]
		},
		{
			"name": "Megalo Spark",
			"power": 382,
			"mp": 58,
			"invincibleTime": 1,
			"range": "LARGE",
			"speciality": "AIR",
			"effect": {
				"type": "STUN",
				"chance": 23
			},
			"accuracy": 68,
			"aiTargetDistance": 0,
			"tier": 5,
			"learningChance": [
				"18%",
				"13%",
				"8%"
			]
		},
		{
			"name": "Static Elect",
			"power": 85,
			"mp": 15,
			"invincibleTime": 1,
			"range": "SHORT",
			"speciality": "AIR",
			"effect": {
				"type": "STUN",
				"chance": 15
			},
			"accuracy": 55,
			"aiTargetDistance": 9,
			"tier": 1,
			"learningChance": [
				"36%",
				"21%",
				"17%"
			]
		},
		{
			"name": "Wind Cutter",
			"power": 178,
			"mp": 31,
			"invincibleTime": 1,
			"range": "LARGE",
			"speciality": "AIR",
			"accuracy": 62,
			"aiTargetDistance": 2,
			"tier": 3,
			"learningChance": [
				"26%",
				"16%",
				"13%"
			]
		},
		{
			"name": "Confused Storm",
			"power": 225,
			"mp": 72,
			"invincibleTime": 1,
			"range": "WIDE",
			"speciality": "AIR",
			"effect": {
				"type": "CONFUSE",
				"chance": 60
			},
			"accuracy": 87,
			"aiTargetDistance": 2,
			"tier": 6,
			"learningChance": [
				"15%",
				"11%",
				"7%"
			]
		},
		{
			"name": "Hurricane",
			"power": 366,
			"mp": 85,
			"invincibleTime": 1,
			"range": "WIDE",
			"speciality": "AIR",
			"effect": {
				"type": "CONFUSE",
				"chance": 13
			},
			"accuracy": 73,
			"aiTargetDistance": 0,
			"tier": 8,
			"learningChance": [
				"12%",
				"8%",
				"0%"
			]
		},
		{
			"name": "Giga Freeze",
			"power": 264,
			"mp": 40,
			"invincibleTime": 5,
			"range": "LARGE",
			"speciality": "ICE",
			"effect": {
				"type": "STUN",
				"chance": 10
			},
			"accuracy": 65,
			"aiTargetDistance": 7,
			"tier": 6,
			"learningChance": [
				"17%",
				"10%",
				"5%"
			]
		},
		{
			"name": "Ice Statue",
			"power": 424,
			"mp": 62,
			"invincibleTime": 17,
			"range": "LARGE",
			"speciality": "ICE",
			"effect": {
				"type": "STUN",
				"chance": 38
			},
			"accuracy": 79,
			"aiTargetDistance": 5,
			"tier": 7,
			"learningChance": [
				"15%",
				"8%",
				"0%"
			]
		},
		{
			"name": "Winter Blast",
			"power": 120,
			"mp": 55,
			"invincibleTime": 1,
			"range": "WIDE",
			"speciality": "ICE",
			"effect": {
				"type": "STUN",
				"chance": 15
			},
			"accuracy": 90,
			"aiTargetDistance": 9,
			"tier": 5,
			"learningChance": [
				"20%",
				"12%",
				"7%"
			]
		},
		{
			"name": "Ice Needle",
			"power": 126,
			"mp": 26,
			"invincibleTime": 1,
			"range": "LARGE",
			"speciality": "ICE",
			"effect": {
				"type": "STUN",
				"chance": 5
			},
			"accuracy": 50,
			"aiTargetDistance": 5,
			"tier": 2,
			"learningChance": [
				"30%",
				"15%",
				"8%"
			]
		},
		{
			"name": "Water Blit",
			"power": 211,
			"mp": 34,
			"invincibleTime": 1,
			"range": "LARGE",
			"speciality": "ICE",
			"accuracy": 74,
			"aiTargetDistance": 0,
			"tier": 3,
			"learningChance": [
				"20%",
				"10%",
				"5%"
			]
		},
		{
			"name": "Aqua Magic",
			"power": 0,
			"mp": 12,
			"invincibleTime": 1,
			"range": "SELF",
			"speciality": "ICE",
			"accuracy": 100,
			"aiTargetDistance": 5,
			"tier": 4,
			"learningChance": [
				"22%",
				"14%",
				"9%"
			]
		},
		{
			"name": "Aurora Freeze",
			"power": 430,
			"mp": 86,
			"invincibleTime": 1,
			"range": "WIDE",
			"speciality": "ICE",
			"effect": {
				"type": "FLAT",
				"chance": 24
			},
			"accuracy": 81,
			"aiTargetDistance": 2,
			"tier": 8,
			"learningChance": [
				"14%",
				"6%",
				"0%"
			]
		},
		{
			"name": "Tear Drop",
			"power": 60,
			"mp": 14,
			"invincibleTime": 1,
			"range": "LARGE",
			"speciality": "ICE",
			"effect": {
				"type": "FLAT",
				"chance": 46
			},
			"accuracy": 44,
			"aiTargetDistance": 7,
			"tier": 1,
			"learningChance": [
				"30%",
				"22%",
				"15%"
			]
		},
		{
			"name": "Power Crane",
			"power": 226,
			"mp": 42,
			"invincibleTime": 1,
			"range": "LARGE",
			"speciality": "MECH",
			"accuracy": 53,
			"aiTargetDistance": 5,
			"tier": 1,
			"learningChance": [
				"40%",
				"30%",
				"22%"
			]
		},
		{
			"name": "All Range Beam",
			"power": 573,
			"mp": 110,
			"invincibleTime": 1,
			"range": "WIDE",
			"speciality": "MECH",
			"accuracy": 81,
			"aiTargetDistance": 3,
			"tier": 7,
			"learningChance": [
				"16%",
				"13%",
				"0%"
			]
		},
		{
			"name": "Metal Sprinter",
			"power": 150,
			"mp": 55,
			"invincibleTime": 1,
			"range": "WIDE",
			"speciality": "MECH",
			"accuracy": 78,
			"aiTargetDistance": 9,
			"tier": 2,
			"learningChance": [
				"35%",
				"27%",
				"18%"
			]
		},
		{
			"name": "Pulse Laser",
			"power": 389,
			"mp": 56,
			"invincibleTime": 1,
			"range": "LARGE",
			"speciality": "MECH",
			"accuracy": 72,
			"aiTargetDistance": 9,
			"tier": 4,
			"learningChance": [
				"28%",
				"21%",
				"13%"
			]
		},
		{
			"name": "Delete Program",
			"power": 430,
			"mp": 73,
			"invincibleTime": 1,
			"range": "LARGE",
			"speciality": "MECH",
			"effect": {
				"type": "FLAT",
				"chance": 50
			},
			"accuracy": 65,
			"aiTargetDistance": 2,
			"tier": 6,
			"learningChance": [
				"20%",
				"14%",
				"10%"
			]
		},
		{
			"name": "DG Dimension",
			"power": 722,
			"mp": 140,
			"invincibleTime": 1,
			"range": "WIDE",
			"speciality": "MECH",
			"accuracy": 100,
			"aiTargetDistance": 0,
			"tier": 8,
			"learningChance": [
				"15%",
				"12%",
				"0%"
			]
		},
		{
			"name": "Full Potential",
			"power": 0,
			"mp": 33,
			"invincibleTime": 1,
			"range": "SELF",
			"speciality": "MECH",
			"accuracy": 100,
			"aiTargetDistance": 7,
			"tier": 5,
			"learningChance": [
				"25%",
				"17%",
				"11%"
			]
		},
		{
			"name": "Reverse Prog",
			"power": 256,
			"mp": 99,
			"invincibleTime": 1,
			"range": "LARGE",
			"speciality": "MECH",
			"effect": {
				"type": "FLAT",
				"chance": 12
			},
			"accuracy": 100,
			"aiTargetDistance": 5,
			"tier": 3,
			"learningChance": [
				"32%",
				"24%",
				"15%"
			]
		},
		{
			"name": "Poison Powder",
			"power": 117,
			"mp": 57,
			"invincibleTime": 1,
			"range": "WIDE",
			"speciality": "EARTH",
			"effect": {
				"type": "POISON",
				"chance": 62
			},
			"accuracy": 77,
			"aiTargetDistance": 9,
			"tier": 3,
			"learningChance": [
				"26%",
				"19%",
				"14%"
			]
		},
		{
			"name": "Bug",
			"power": 500,
			"mp": 118,
			"invincibleTime": 1,
			"range": "LARGE",
			"speciality": "EARTH",
			"effect": {
				"type": "FLAT",
				"chance": 35
			},
			"accuracy": 80,
			"aiTargetDistance": 0,
			"tier": 8,
			"learningChance": [
				"12%",
				"8%",
				"0%"
			]
		},
		{
			"name": "Mass Morph",
			"power": 0,
			"mp": 10,
			"invincibleTime": 1,
			"range": "SELF",
			"speciality": "EARTH",
			"accuracy": 100,
			"aiTargetDistance": 9,
			"tier": 5,
			"learningChance": [
				"23%",
				"15%",
				"12%"
			]
		},
		{
			"name": "Insect Plague",
			"power": 58,
			"mp": 32,
			"invincibleTime": 12,
			"range": "LARGE",
			"speciality": "EARTH",
			"effect": {
				"type": "POISON",
				"chance": 90
			},
			"accuracy": 83,
			"aiTargetDistance": 5,
			"tier": 4,
			"learningChance": [
				"24%",
				"16%",
				"13%"
			]
		},
		{
			"name": "Charm Perfume",
			"power": 180,
			"mp": 70,
			"invincibleTime": 1,
			"range": "WIDE",
			"speciality": "EARTH",
			"effect": {
				"type": "CONFUSE",
				"chance": 57
			},
			"accuracy": 75,
			"aiTargetDistance": 0,
			"tier": 6,
			"learningChance": [
				"18%",
				"12%",
				"9%"
			]
		},
		{
			"name": "Poison Claw",
			"power": 62,
			"mp": 17,
			"invincibleTime": 1,
			"range": "SHORT",
			"speciality": "EARTH",
			"effect": {
				"type": "POISON",
				"chance": 40
			},
			"accuracy": 60,
			"aiTargetDistance": 0,
			"tier": 1,
			"learningChance": [
				"28%",
				"22%",
				"16%"
			]
		},
		{
			"name": "Danger Sting",
			"power": 157,
			"mp": 34,
			"invincibleTime": 1,
			"range": "SHORT",
			"speciality": "EARTH",
			"effect": {
				"type": "FLAT",
				"chance": 26
			},
			"accuracy": 70,
			"aiTargetDistance": 9,
			"tier": 2,
			"learningChance": [
				"27%",
				"20%",
				"15%"
			]
		},
		{
			"name": "Green Trap",
			"power": 310,
			"mp": 49,
			"invincibleTime": 1,
			"range": "LARGE",
			"speciality": "EARTH",
			"effect": {
				"type": "STUN",
				"chance": 55
			},
			"accuracy": 82,
			"aiTargetDistance": 5,
			"tier": 7,
			"learningChance": [
				"14%",
				"10%",
				"0%"
			]
		},
		{
			"name": "Tremar",
			"power": 178,
			"mp": 56,
			"invincibleTime": 1,
			"range": "WIDE",
			"speciality": "BATTLE",
			"accuracy": 60,
			"aiTargetDistance": 0,
			"tier": 7,
			"learningChance": [
				"18%",
				"8%",
				"0%"
			]
		},
		{
			"name": "Muscle Charge",
			"power": 0,
			"mp": 22,
			"invincibleTime": 1,
			"range": "SELF",
			"speciality": "BATTLE",
			"accuracy": 100,
			"aiTargetDistance": 0,
			"tier": 6,
			"learningChance": [
				"19%",
				"9%",
				"8%"
			]
		},
		{
			"name": "War Cry",
			"power": 0,
			"mp": 14,
			"invincibleTime": 1,
			"range": "SELF",
			"speciality": "BATTLE",
			"accuracy": 100,
			"aiTargetDistance": 0,
			"tier": 3,
			"learningChance": [
				"22%",
				"15%",
				"10%"
			]
		},
		{
			"name": "Sonic Jab",
			"power": 52,
			"mp": 6,
			"invincibleTime": 1,
			"range": "SHORT",
			"speciality": "BATTLE",
			"accuracy": 53,
			"aiTargetDistance": 0,
			"tier": 1,
			"learningChance": [
				"26%",
				"19%",
				"14%"
			]
		},
		{
			"name": "Dynamite Kick",
			"power": 193,
			"mp": 33,
			"invincibleTime": 1,
			"range": "SHORT",
			"speciality": "BATTLE",
			"effect": {
				"type": "STUN",
				"chance": 3
			},
			"accuracy": 62,
			"aiTargetDistance": 0,
			"tier": 2,
			"learningChance": [
				"24%",
				"17%",
				"12%"
			]
		},
		{
			"name": "Counter",
			"power": 285,
			"mp": 55,
			"invincibleTime": 1,
			"range": "SHORT",
			"speciality": "BATTLE",
			"effect": {
				"type": "CONFUSE",
				"chance": 10
			},
			"accuracy": 100,
			"aiTargetDistance": 0,
			"tier": 5,
			"learningChance": [
				"20%",
				"11%",
				"8%"
			]
		},
		{
			"name": "Megaton Punch",
			"power": 320,
			"mp": 62,
			"invincibleTime": 1,
			"range": "SHORT",
			"speciality": "BATTLE",
			"effect": {
				"type": "STUN",
				"chance": 9
			},
			"accuracy": 70,
			"aiTargetDistance": 5,
			"tier": 4,
			"learningChance": [
				"21%",
				"13%",
				"9%"
			]
		},
		{
			"name": "Buster Dive",
			"power": 500,
			"mp": 86,
			"invincibleTime": 1,
			"range": "LARGE",
			"speciality": "BATTLE",
			"effect": {
				"type": "CONFUSE",
				"chance": 14
			},
			"accuracy": 80,
			"aiTargetDistance": 0,
			"tier": 8,
			"learningChance": [
				"16%",
				"7%",
				"0%"
			]
		},
		{
			"name": "Odor Spray",
			"power": 88,
			"mp": 25,
			"invincibleTime": 1,
			"range": "LARGE",
			"speciality": "FILTH",
			"effect": {
				"type": "STUN",
				"chance": 10
			},
			"accuracy": 37,
			"aiTargetDistance": 7,
			"tier": 2,
			"learningChance": [
				"24%",
				"14%",
				"9%"
			]
		},
		{
			"name": "Poop Spd Toss",
			"power": 122,
			"mp": 32,
			"invincibleTime": 1,
			"range": "LARGE",
			"speciality": "FILTH",
			"effect": {
				"type": "POISON",
				"chance": 11
			},
			"accuracy": 40,
			"aiTargetDistance": 2,
			"tier": 3,
			"learningChance": [
				"23%",
				"13%",
				"8%"
			]
		},
		{
			"name": "Big Poop Toss",
			"power": 211,
			"mp": 64,
			"invincibleTime": 1,
			"range": "LARGE",
			"speciality": "FILTH",
			"effect": {
				"type": "CONFUSE",
				"chance": 17
			},
			"accuracy": 49,
			"aiTargetDistance": 2,
			"tier": 6,
			"learningChance": [
				"15%",
				"10%",
				"5%"
			]
		},
		{
			"name": "Big Rnd Toss",
			"power": 211,
			"mp": 94,
			"invincibleTime": 1,
			"range": "WIDE",
			"speciality": "FILTH",
			"effect": {
				"type": "CONFUSE",
				"chance": 20
			},
			"accuracy": 47,
			"aiTargetDistance": 2,
			"tier": 7,
			"learningChance": [
				"11%",
				"8%",
				"0%"
			]
		},
		{
			"name": "Poop Rnd Toss",
			"power": 75,
			"mp": 40,
			"invincibleTime": 1,
			"range": "WIDE",
			"speciality": "FILTH",
			"effect": {
				"type": "POISON",
				"chance": 9
			},
			"accuracy": 33,
			"aiTargetDistance": 3,
			"tier": 4,
			"learningChance": [
				"21%",
				"12%",
				"7%"
			]
		},
		{
			"name": "Rnd Spd Toss",
			"power": 122,
			"mp": 72,
			"invincibleTime": 1,
			"range": "WIDE",
			"speciality": "FILTH",
			"effect": {
				"type": "POISON",
				"chance": 10
			},
			"accuracy": 50,
			"aiTargetDistance": 0,
			"tier": 5,
			"learningChance": [
				"20%",
				"11%",
				"6%"
			]
		},
		{
			"name": "Horizontal Kick",
			"power": 53,
			"mp": 8,
			"invincibleTime": 1,
			"range": "SHORT",
			"speciality": "FILTH",
			"accuracy": 41,
			"aiTargetDistance": 5,
			"tier": 1,
			"learningChance": [
				"25%",
				"16%",
				"10%"
			]
		},
		{
			"name": "Ult Poop Hell",
			"power": 333,
			"mp": 111,
			"invincibleTime": 1,
			"range": "WIDE",
			"speciality": "FILTH",
			"effect": {
				"type": "FLAT",
				"chance": 83
			},
			"accuracy": 100,
			"aiTargetDistance": 0,
			"tier": 8,
			"learningChance": [
				"9%",
				"7%",
				"0%"
			]
		}
	]
;