var maps=[
	{
		"id": 105,
		"internalName": "BETL01",
		"name": "Beetle Land",
		"description": "Entrance Screen/Dragon Eye Lake",
		"adjacentMaps": [
			{
				"id": 106,
				"direction": "UpCenter"
			},
			{
				"id": 6,
				"direction": "BottomRight"
			}
		],
		"likes": [
			7
		],
		"dislikes": [],
		"items": [
			{
				"chance": 4,
				"item": "Gold Acorn",
				"locX": 36,
				"locY": 69
			}
		]
	},
	{
		"id": 106,
		"internalName": "BETL02",
		"name": "Beetle Land",
		"description": "Hub Screen",
		"adjacentMaps": [
			{
				"id": 105,
				"direction": "BottomCenter"
			},
			{
				"id": 107,
				"direction": "RightCenterBuilding"
			},
			{
				"id": 108,
				"direction": "LeftCenterBuilding"
			}
		],
		"likes": [
			7
		],
		"dislikes": [],
		"items": []
	},
	{
		"id": 107,
		"internalName": "BETL03",
		"name": "Beetle Land",
		"description": "Kabuterimon's Gym",
		"adjacentMaps": [
			{
				"id": 106,
				"direction": "LeftBottom"
			}
		],
		"likes": [
			7
		],
		"dislikes": [],
		"items": []
	},
	{
		"id": 108,
		"internalName": "BETL04",
		"name": "Beetle Land",
		"description": "Kuwagamon's Gym",
		"adjacentMaps": [
			{
				"id": 106,
				"direction": "RightBottom"
			}
		],
		"likes": [
			7
		],
		"dislikes": [],
		"items": []
	},
	{
		"id": 66,
		"internalName": "CHKA01",
		"name": "Mansion Basement",
		"description": "",
		"adjacentMaps": [
			{
				"id": 62,
				"direction": "BottomCenter"
			}
		],
		"likes": [
			6
		],
		"dislikes": [
			2,
			8
		],
		"items": []
	},
	{
		"id": 34,
		"internalName": "DGHA01",
		"name": "Overdell",
		"description": "",
		"adjacentMaps": [
			{
				"id": 35,
				"direction": "UpLeft"
			},
			{
				"id": 13,
				"direction": "BottomCenter"
			},
			{
				"id": 36,
				"direction": "UpRight"
			}
		],
		"likes": [
			6
		],
		"dislikes": [
			2,
			8
		],
		"items": [
			{
				"chance": 15,
				"item": "Digimushrm",
				"locX": 21,
				"locY": 31
			},
			{
				"chance": 8,
				"item": "Digimushrm",
				"locX": 59,
				"locY": 78
			},
			{
				"chance": 1,
				"item": "Deluxmushrm",
				"locX": 60,
				"locY": 51
			}
		]
	},
	{
		"id": 35,
		"internalName": "DGHA02",
		"name": "Overdell Cemetery",
		"description": "Bakemon Screen",
		"adjacentMaps": [
			{
				"id": 34,
				"direction": "BottomCenter"
			},
			{
				"id": 52,
				"direction": "UpCenterBuilding"
			}
		],
		"likes": [
			6
		],
		"dislikes": [
			2,
			8
		],
		"items": [
			{
				"chance": 10,
				"item": "Digimushrm",
				"locX": 56,
				"locY": 78
			},
			{
				"chance": 20,
				"item": "Digimushrm",
				"locX": 24,
				"locY": 44
			},
			{
				"chance": 5,
				"item": "Super veggy",
				"locX": 36,
				"locY": 24
			},
			{
				"chance": 3,
				"item": "Happymushrm",
				"locX": 79,
				"locY": 6
			}
		]
	},
	{
		"id": 152,
		"internalName": "FACT01",
		"name": "Factorial Town",
		"description": "Whamon entrance",
		"adjacentMaps": [
			{
				"id": 153,
				"direction": "RightUp"
			},
			{
				"id": 204,
				"direction": "LeftBottom"
			}
		],
		"likes": [
			3
		],
		"dislikes": [
			5,
			8
		],
		"items": []
	},
	{
		"id": 153,
		"internalName": "FACT02",
		"name": "Factorial Town",
		"description": "MetalMamemon Screen",
		"adjacentMaps": [
			{
				"id": 152,
				"direction": "LeftBottom"
			},
			{
				"id": 154,
				"direction": "UpCenter"
			}
		],
		"likes": [
			3
		],
		"dislikes": [
			5,
			8
		],
		"items": []
	},
	{
		"id": 154,
		"internalName": "FACT03",
		"name": "Factorial Town",
		"description": "Hub Screen",
		"adjacentMaps": [
			{
				"id": 157,
				"direction": "RightUp"
			},
			{
				"id": 155,
				"direction": "RightCenter"
			},
			{
				"id": 153,
				"direction": "LeftUp"
			},
			{
				"id": 163,
				"direction": "UpCenter"
			},
			{
				"id": 156,
				"direction": "BottomCenter"
			}
		],
		"likes": [
			3
		],
		"dislikes": [
			5,
			8
		],
		"items": []
	},
	{
		"id": 155,
		"internalName": "FACT04",
		"name": "Factorial Town",
		"description": "Guardromon guard Screen",
		"adjacentMaps": [
			{
				"id": 154,
				"direction": "LeftCenter"
			},
			{
				"id": 161,
				"direction": "RightCenter"
			}
		],
		"likes": [
			3
		],
		"dislikes": [
			5,
			8
		],
		"items": []
	},
	{
		"id": 156,
		"internalName": "FACT05",
		"name": "Factorial Town",
		"description": "Passage to Gear Savanna",
		"adjacentMaps": [
			{
				"id": 154,
				"direction": "LeftCenter"
			},
			{
				"id": 71,
				"direction": "BottomCenter"
			}
		],
		"likes": [
			3
		],
		"dislikes": [
			5,
			8
		],
		"items": []
	},
	{
		"id": 157,
		"internalName": "FACT06",
		"name": "Factorial Town",
		"description": "Andromon Screen",
		"adjacentMaps": [
			{
				"id": 154,
				"direction": "BottomRight"
			}
		],
		"likes": [
			3
		],
		"dislikes": [
			5,
			8
		],
		"items": []
	},
	{
		"id": 158,
		"internalName": "FACT07",
		"name": "Factorial Town",
		"description": "Hub to Giromon Screen",
		"adjacentMaps": [
			{
				"id": 162,
				"direction": "UpRight"
			},
			{
				"id": 160,
				"direction": "LeftBottom"
			},
			{
				"id": 161,
				"direction": "BottomCenter"
			}
		],
		"likes": [
			3
		],
		"dislikes": [
			5,
			8
		],
		"items": []
	},
	{
		"id": 159,
		"internalName": "FACT08A",
		"name": "Factorial Town",
		"description": "Giromon Screen (repaired)",
		"adjacentMaps": [
			{
				"id": 158,
				"direction": "BottomRight"
			}
		],
		"likes": [
			3
		],
		"dislikes": [
			5,
			8
		],
		"items": []
	},
	{
		"id": 160,
		"internalName": "FACT08B",
		"name": "Factorial Town",
		"description": "Giromon Screen (damaged)",
		"adjacentMaps": [
			{
				"id": 158,
				"direction": "BottomRight"
			}
		],
		"likes": [
			3
		],
		"dislikes": [
			5,
			8
		],
		"items": []
	},
	{
		"id": 161,
		"internalName": "FACT09",
		"name": "Factorial Town",
		"description": "Entrance of the Main Building",
		"adjacentMaps": [
			{
				"id": 158,
				"direction": "UpRight"
			},
			{
				"id": 155,
				"direction": "LeftBottom"
			}
		],
		"likes": [
			3
		],
		"dislikes": [
			5,
			8
		],
		"items": []
	},
	{
		"id": 162,
		"internalName": "FACT10",
		"name": "Factorial Town",
		"description": "Remodelling Guardromon Screen",
		"adjacentMaps": [
			{
				"id": 158,
				"direction": "BottomRight"
			}
		],
		"likes": [
			3
		],
		"dislikes": [
			5,
			8
		],
		"items": []
	},
	{
		"id": 163,
		"internalName": "FACT11A",
		"name": "Sewer",
		"description": "Sewer Entrance Screen",
		"adjacentMaps": [
			{
				"id": 154,
				"direction": "UpLeft"
			},
			{
				"id": 220,
				"direction": "RoghtCenter"
			}
		],
		"likes": [],
		"dislikes": [
			5
		],
		"items": []
	},
	{
		"id": 220,
		"internalName": "FACT11B",
		"name": "Sewer",
		"description": "Numemon Screen",
		"adjacentMaps": [
			{
				"id": 163,
				"direction": "LeftCenter"
			}
		],
		"likes": [],
		"dislikes": [
			5
		],
		"items": []
	},
	{
		"id": 88,
		"internalName": "FRZL01",
		"name": "Freezeland",
		"description": "Oven Screen, Exit to Great Canyon",
		"adjacentMaps": [
			{
				"id": 39,
				"direction": "BottomLeft"
			},
			{
				"id": 38,
				"direction": "BottomRight"
			},
			{
				"id": 89,
				"direction": "UpCenter"
			}
		],
		"likes": [
			1
		],
		"dislikes": [
			0,
			7,
			8
		],
		"items": [
			{
				"chance": 18,
				"item": "Digimushrm",
				"locX": 43,
				"locY": 35
			},
			{
				"chance": 11,
				"item": "Digimushrm",
				"locX": 38,
				"locY": 67
			},
			{
				"chance": 8,
				"item": "Digimushrm",
				"locX": 50,
				"locY": 81
			}
		]
	},
	{
		"id": 89,
		"internalName": "FRZL02",
		"name": "Freezeland",
		"description": "passage between Oven Screen and Toilet",
		"adjacentMaps": [
			{
				"id": 88,
				"direction": "BottomCenter"
			},
			{
				"id": 90,
				"direction": "UpCenter"
			}
		],
		"likes": [
			1
		],
		"dislikes": [
			0,
			7,
			8
		],
		"items": [
			{
				"chance": 6,
				"item": "Digimushrm",
				"locX": 41,
				"locY": 49
			},
			{
				"chance": 12,
				"item": "Digimushrm",
				"locX": 42,
				"locY": 67
			}
		]
	},
	{
		"id": 90,
		"internalName": "FRZL03",
		"name": "Freezeland",
		"description": "Toilet Screen",
		"adjacentMaps": [
			{
				"id": 89,
				"direction": "BottomCenter"
			},
			{
				"id": 91,
				"direction": "LeftUp"
			},
			{
				"id": 93,
				"direction": "RightUp"
			}
		],
		"likes": [
			1
		],
		"dislikes": [
			0,
			7,
			8
		],
		"items": [
			{
				"chance": 17,
				"item": "Digimushrm",
				"locX": 63,
				"locY": 56
			},
			{
				"chance": 8,
				"item": "Digimushrm",
				"locX": 61,
				"locY": 88
			},
			{
				"chance": 4,
				"item": "Ice mushrm",
				"locX": 73,
				"locY": 88
			}
		]
	},
	{
		"id": 91,
		"internalName": "FRZL04",
		"name": "Freezeland",
		"description": "Passage to Ice Sanctuary",
		"adjacentMaps": [
			{
				"id": 90,
				"direction": "RightBottom"
			},
			{
				"id": 92,
				"direction": "UpCenter"
			}
		],
		"likes": [
			1
		],
		"dislikes": [
			0,
			7,
			8
		],
		"items": [
			{
				"chance": 18,
				"item": "Digimushrm",
				"locX": 49,
				"locY": 27
			},
			{
				"chance": 9,
				"item": "Digimushrm",
				"locX": 39,
				"locY": 50
			},
			{
				"chance": 2,
				"item": "Ice mushrm",
				"locX": 53,
				"locY": 70
			}
		]
	},
	{
		"id": 92,
		"internalName": "FRZL05",
		"name": "Freezeland",
		"description": "Ice Sanctuary entrance",
		"adjacentMaps": [
			{
				"id": 91,
				"direction": "BottomCenter"
			},
			{
				"id": 97,
				"direction": "UpCenter"
			}
		],
		"likes": [
			1
		],
		"dislikes": [
			0,
			7,
			8
		],
		"items": []
	},
	{
		"id": 93,
		"internalName": "FRZL06",
		"name": "Freezeland",
		"description": "Birdramon landing Spot",
		"adjacentMaps": [
			{
				"id": 90,
				"direction": "LeftBottom"
			},
			{
				"id": 94,
				"direction": "UpCenter"
			},
			{
				"id": 96,
				"direction": "RightCenter"
			}
		],
		"likes": [
			1
		],
		"dislikes": [
			0,
			7,
			8
		],
		"items": [
			{
				"chance": 12,
				"item": "Digimushrm",
				"locX": 72,
				"locY": 53
			},
			{
				"chance": 18,
				"item": "Digimushrm",
				"locX": 48,
				"locY": 45
			},
			{
				"chance": 4,
				"item": "Ice mushrm",
				"locX": 35,
				"locY": 91
			}
		]
	},
	{
		"id": 94,
		"internalName": "FRZL07",
		"name": "Freezeland",
		"description": "Frigimon's Igloo outside",
		"adjacentMaps": [
			{
				"id": 93,
				"direction": "UpRight"
			},
			{
				"id": 137,
				"direction": "UpCenter"
			},
			{
				"id": 95,
				"direction": "BottomCenter"
			}
		],
		"likes": [
			1
		],
		"dislikes": [
			0,
			7,
			8
		],
		"items": [
			{
				"chance": 6,
				"item": "Digimushrm",
				"locX": 63,
				"locY": 41
			},
			{
				"chance": 16,
				"item": "Digimushrm",
				"locX": 47,
				"locY": 38
			},
			{
				"chance": 20,
				"item": "Digimushrm",
				"locX": 34,
				"locY": 55
			}
		]
	},
	{
		"id": 95,
		"internalName": "FRZL08",
		"name": "Freezeland",
		"description": "Garurumon Screen",
		"adjacentMaps": [
			{
				"id": 94,
				"direction": "UpRight"
			},
			{
				"id": 121,
				"direction": "LeftCenter"
			}
		],
		"likes": [
			1
		],
		"dislikes": [
			0,
			7,
			8
		],
		"items": [
			{
				"chance": 6,
				"item": "Digimushrm",
				"locX": 49,
				"locY": 36
			},
			{
				"chance": 18,
				"item": "Digimushrm",
				"locX": 59,
				"locY": 55
			},
			{
				"chance": 8,
				"item": "Digimushrm",
				"locX": 48,
				"locY": 61
			},
			{
				"chance": 3,
				"item": "Ice mushrm",
				"locX": 38,
				"locY": 60
			}
		]
	},
	{
		"id": 96,
		"internalName": "FRZL12",
		"name": "Freezeland",
		"description": "Passage to Penguinmon and Mojyamon",
		"adjacentMaps": [
			{
				"id": 93,
				"direction": "UpLeft"
			},
			{
				"id": 132,
				"direction": "BottomRight"
			}
		],
		"likes": [
			1
		],
		"dislikes": [
			0,
			7,
			8
		],
		"items": [
			{
				"chance": 10,
				"item": "Digimushrm",
				"locX": 57,
				"locY": 76
			},
			{
				"chance": 5,
				"item": "Digimushrm",
				"locX": 51,
				"locY": 36
			}
		]
	},
	{
		"id": 132,
		"internalName": "FRZL13",
		"name": "Freezeland",
		"description": "Hub Screen to Penguinmon and Mojyamon",
		"adjacentMaps": [
			{
				"id": 96,
				"direction": "UpLeft"
			},
			{
				"id": 135,
				"direction": "LeftCenter"
			},
			{
				"id": 134,
				"direction": "RightUp"
			},
			{
				"id": 133,
				"direction": "BottomCenter"
			}
		],
		"likes": [
			1
		],
		"dislikes": [
			0,
			7,
			8
		],
		"items": [
			{
				"chance": 19,
				"item": "Digimushrm",
				"locX": 68,
				"locY": 27
			},
			{
				"chance": 4,
				"item": "Ice mushrm",
				"locX": 54,
				"locY": 40
			}
		]
	},
	{
		"id": 133,
		"internalName": "FRZL14",
		"name": "Freezeland",
		"description": "Screen with 2 Mojyamon",
		"adjacentMaps": [
			{
				"id": 132,
				"direction": "UpCenter"
			}
		],
		"likes": [
			1
		],
		"dislikes": [
			0,
			7,
			8
		],
		"items": [
			{
				"chance": 18,
				"item": "Digimushrm",
				"locX": 46,
				"locY": 61
			},
			{
				"chance": 1,
				"item": "Sage Fruit",
				"locX": 60,
				"locY": 53
			}
		]
	},
	{
		"id": 134,
		"internalName": "FRZL15",
		"name": "Freezeland",
		"description": "Penguinmon/Mojyamon, depends on chosen entrance",
		"adjacentMaps": [
			{
				"id": 132,
				"direction": "LeftBottom"
			},
			{
				"id": 136,
				"direction": "UpLeft"
			}
		],
		"likes": [
			1
		],
		"dislikes": [
			0,
			7,
			8
		],
		"items": [
			{
				"chance": 11,
				"item": "Digimushrm",
				"locX": 40,
				"locY": 54
			}
		]
	},
	{
		"id": 135,
		"internalName": "FRZL16",
		"name": "Freezeland",
		"description": "Whamon Screen",
		"adjacentMaps": [
			{
				"id": 132,
				"direction": "RightUp"
			}
		],
		"likes": [
			1
		],
		"dislikes": [
			0,
			7,
			8
		],
		"items": [
			{
				"chance": 17,
				"item": "Digimushrm",
				"locX": 31,
				"locY": 3
			}
		]
	},
	{
		"id": 136,
		"internalName": "FRZL17",
		"name": "Freezeland",
		"description": "Curling Screen",
		"adjacentMaps": [
			{
				"id": 134,
				"direction": "UpCenter"
			}
		],
		"likes": [
			1
		],
		"dislikes": [
			0,
			7,
			8
		],
		"items": []
	},
	{
		"id": 137,
		"internalName": "FRZL18",
		"name": "Freezeland",
		"description": "Frigimon's Igloo (inside)",
		"adjacentMaps": [
			{
				"id": 94,
				"direction": "BottomCenter"
			}
		],
		"likes": [
			1
		],
		"dislikes": [
			0,
			7,
			8
		],
		"items": []
	},
	{
		"id": 36,
		"internalName": "GCAN01",
		"name": "Great Canyon Entrance",
		"description": "Invisible Bridge Screen",
		"adjacentMaps": [
			{
				"id": 44,
				"direction": "UpRight"
			},
			{
				"id": 34,
				"direction": "LeftUp"
			},
			{
				"id": 14,
				"direction": "BottomCenter"
			}
		],
		"likes": [
			4
		],
		"dislikes": [
			1
		],
		"items": [
			{
				"chance": 10,
				"item": "Digimushrm",
				"locX": 36,
				"locY": 68
			},
			{
				"chance": 6,
				"item": "Digimushrm",
				"locX": 83,
				"locY": 78
			},
			{
				"chance": 15,
				"item": "Digimushrm",
				"locX": 25,
				"locY": 17
			},
			{
				"chance": 3,
				"item": "Happymushrm",
				"locX": 78,
				"locY": 60
			}
		]
	},
	{
		"id": 37,
		"internalName": "GCAN02",
		"name": "Great Canyon Top Area",
		"description": "after Ogre Fortress Elevator Screen",
		"adjacentMaps": [
			{
				"id": 48,
				"direction": "UpLeft"
			},
			{
				"id": 39,
				"direction": "RightCenter"
			},
			{
				"id": 43,
				"direction": "RightBottom"
			}
		],
		"likes": [],
		"dislikes": [
			4,
			8
		],
		"items": [
			{
				"chance": 10,
				"item": "Digimushrm",
				"locX": 35,
				"locY": 9
			},
			{
				"chance": 5,
				"item": "Digimushrm",
				"locX": 19,
				"locY": 31
			},
			{
				"chance": 1,
				"item": "Happymushrm",
				"locX": 11,
				"locY": 10
			},
			{
				"chance": 1,
				"item": "Deluxmushrm",
				"locX": 46,
				"locY": 46
			}
		]
	},
	{
		"id": 38,
		"internalName": "GCAN03",
		"name": "Great Canyon Top Area",
		"description": "Elevator to Birdramon's Nest",
		"adjacentMaps": [
			{
				"id": 88,
				"direction": "UpLeft"
			},
			{
				"id": 129,
				"direction": "UpCenter"
			},
			{
				"id": 43,
				"direction": "BottomCenter"
			}
		],
		"likes": [],
		"dislikes": [
			4,
			8
		],
		"items": [
			{
				"chance": 10,
				"item": "Digimushrm",
				"locX": 49,
				"locY": 64
			},
			{
				"chance": 15,
				"item": "Digimushrm",
				"locX": 19,
				"locY": 31
			},
			{
				"chance": 5,
				"item": "Pricklypear",
				"locX": 20,
				"locY": 9
			},
			{
				"chance": 1,
				"item": "Deluxmushrm",
				"locX": 69,
				"locY": 16
			}
		]
	},
	{
		"id": 39,
		"internalName": "GCAN04",
		"name": "Great Canyon Bridge",
		"description": "Shellmon's Island up",
		"adjacentMaps": [
			{
				"id": 88,
				"direction": "UpCenter"
			},
			{
				"id": 37,
				"direction": "BottomLeft"
			}
		],
		"likes": [],
		"dislikes": [
			4,
			8
		],
		"items": []
	},
	{
		"id": 127,
		"internalName": "GCAN04_2",
		"name": "Great Canyon Bridge",
		"description": "Shellmon's Island down",
		"adjacentMaps": [
			{
				"id": 88,
				"direction": "UpCenter"
			},
			{
				"id": 37,
				"direction": "BottomLeft"
			}
		],
		"likes": [],
		"dislikes": [
			4,
			8
		],
		"items": []
	},
	{
		"id": 40,
		"internalName": "GCAN05",
		"name": "Fortress Entrance",
		"description": "Entrance to Ogre Fortress",
		"adjacentMaps": [
			{
				"id": 41,
				"direction": "RightCenter"
			},
			{
				"id": 45,
				"direction": "UpCenter"
			}
		],
		"likes": [],
		"dislikes": [
			4,
			8
		],
		"items": [
			{
				"chance": 10,
				"item": "Digimushrm",
				"locX": 76,
				"locY": 78
			},
			{
				"chance": 5,
				"item": "Digimushrm",
				"locX": 31,
				"locY": 68
			},
			{
				"chance": 7,
				"item": "Pricklypear",
				"locX": 66,
				"locY": 68
			},
			{
				"chance": 3,
				"item": "Happymushrm",
				"locX": 22,
				"locY": 75
			}
		]
	},
	{
		"id": 41,
		"internalName": "GCAN06",
		"name": "Great Canyon Bot. Area",
		"description": "Elevator to Birdramon's Nest",
		"adjacentMaps": [
			{
				"id": 42,
				"direction": "RightCenter"
			},
			{
				"id": 129,
				"direction": "UpCenter"
			},
			{
				"id": 40,
				"direction": "BottomLeft"
			}
		],
		"likes": [],
		"dislikes": [
			4,
			8
		],
		"items": [
			{
				"chance": 10,
				"item": "Digimushrm",
				"locX": 69,
				"locY": 49
			},
			{
				"chance": 3,
				"item": "Happymushrm",
				"locX": 37,
				"locY": 33
			}
		]
	},
	{
		"id": 42,
		"internalName": "GCAN07",
		"name": "Great Canyon Bot. Area",
		"description": "Cliff landing spot",
		"adjacentMaps": [
			{
				"id": 43,
				"direction": "Fall"
			},
			{
				"id": 41,
				"direction": "LeftUp"
			}
		],
		"likes": [],
		"dislikes": [
			4,
			8
		],
		"items": [
			{
				"chance": 10,
				"item": "Digimushrm",
				"locX": 79,
				"locY": 63
			},
			{
				"chance": 15,
				"item": "Digimushrm",
				"locX": 48,
				"locY": 37
			},
			{
				"chance": 1,
				"item": "Deluxmushrm",
				"locX": 48,
				"locY": 51
			}
		]
	},
	{
		"id": 43,
		"internalName": "GCAN08_1",
		"name": "Great Canyon Top Area",
		"description": "Ogremon 1 Screen, Ogremon not triggered",
		"adjacentMaps": [
			{
				"id": 37,
				"direction": "LeftCenter"
			},
			{
				"id": 38,
				"direction": "UpRight"
			},
			{
				"id": 42,
				"direction": "UpLeft"
			},
			{
				"id": 44,
				"direction": "BottomCenter"
			}
		],
		"likes": [],
		"dislikes": [
			4,
			8
		],
		"items": [
			{
				"chance": 10,
				"item": "Digimushrm",
				"locX": 48,
				"locY": 68
			},
			{
				"chance": 4,
				"item": "Pricklypear",
				"locX": 76,
				"locY": 49
			}
		]
	},
	{
		"id": 128,
		"internalName": "GCAN08_2",
		"name": "Great Canyon Top Area",
		"description": "Ogremon 1 Screen, Ogremon triggered",
		"adjacentMaps": [
			{
				"id": 37,
				"direction": "LeftCenter"
			},
			{
				"id": 38,
				"direction": "UpRight"
			},
			{
				"id": 42,
				"direction": "UpLeft"
			},
			{
				"id": 44,
				"direction": "BottomCenter"
			}
		],
		"likes": [],
		"dislikes": [
			4,
			8
		],
		"items": [
			{
				"chance": 10,
				"item": "Digimushrm",
				"locX": 48,
				"locY": 68
			},
			{
				"chance": 4,
				"item": "Pricklypear",
				"locX": 76,
				"locY": 49
			}
		]
	},
	{
		"id": 44,
		"internalName": "GCAN09",
		"name": "Great Canyon Top Area",
		"description": "Entrance to Monochromon's Shop",
		"adjacentMaps": [
			{
				"id": 36,
				"direction": "BottomLeft"
			},
			{
				"id": 43,
				"direction": "RightCenter"
			},
			{
				"id": 49,
				"direction": "UpCenter"
			}
		],
		"likes": [],
		"dislikes": [
			4,
			8
		],
		"items": [
			{
				"chance": 10,
				"item": "Digimushrm",
				"locX": 29,
				"locY": 31
			},
			{
				"chance": 15,
				"item": "Digimushrm",
				"locX": 27,
				"locY": 93
			},
			{
				"chance": 5,
				"item": "Pricklypear",
				"locX": 35,
				"locY": 67
			}
		]
	},
	{
		"id": 129,
		"internalName": "GCAN10",
		"name": "Great Canyon",
		"description": "Birdramon's Nest",
		"adjacentMaps": [
			{
				"id": 38,
				"direction": "UpRight"
			},
			{
				"id": 41,
				"direction": "UpRight"
			}
		],
		"likes": [],
		"dislikes": [
			4,
			8
		],
		"items": []
	},
	{
		"id": 49,
		"internalName": "GCAN11",
		"name": "Monochrome Shop",
		"description": "Monochromon's Shop",
		"adjacentMaps": [
			{
				"id": 44,
				"direction": "BottomRight"
			}
		],
		"likes": [],
		"dislikes": [
			4,
			8
		],
		"items": []
	},
	{
		"id": 69,
		"internalName": "GIAS00",
		"name": "Gear Savanna",
		"description": "Gear Savannah entrance Screen",
		"adjacentMaps": [
			{
				"id": 70,
				"direction": "UpCenter"
			},
			{
				"id": 74,
				"direction": "RightBottom"
			},
			{
				"id": 22,
				"direction": "BottomCenter"
			}
		],
		"likes": [
			5
		],
		"dislikes": [],
		"items": [
			{
				"chance": 10,
				"item": "Digimushrm",
				"locX": 65,
				"locY": 67
			},
			{
				"chance": 3,
				"item": "Happymushrm",
				"locX": 57,
				"locY": 49
			},
			{
				"chance": 1,
				"item": "Power Ice",
				"locX": 32,
				"locY": 88
			}
		]
	},
	{
		"id": 70,
		"internalName": "GIAS01",
		"name": "Gear Savanna",
		"description": "Birdramon landing spot, next to Recycle Shop",
		"adjacentMaps": [
			{
				"id": 75,
				"direction": "LeftUp"
			},
			{
				"id": 71,
				"direction": "UpRight"
			},
			{
				"id": 69,
				"direction": "BottomCenter"
			}
		],
		"likes": [
			5
		],
		"dislikes": [],
		"items": [
			{
				"chance": 10,
				"item": "Digimushrm",
				"locX": 40,
				"locY": 84
			},
			{
				"chance": 6,
				"item": "Digimushrm",
				"locX": 68,
				"locY": 72
			},
			{
				"chance": 18,
				"item": "Digimushrm",
				"locX": 39,
				"locY": 59
			},
			{
				"chance": 4,
				"item": "Sweet Nut",
				"locX": 67,
				"locY": 24
			}
		]
	},
	{
		"id": 71,
		"internalName": "GIAS02",
		"name": "Gear Savanna",
		"description": "Elecmon Screen/Factorial Town entrance",
		"adjacentMaps": [
			{
				"id": 70,
				"direction": "BottomCenter"
			},
			{
				"id": 72,
				"direction": "RightUp"
			},
			{
				"id": 156,
				"direction": "UpRight"
			}
		],
		"likes": [
			5
		],
		"dislikes": [],
		"items": [
			{
				"chance": 9,
				"item": "Digimushrm",
				"locX": 57,
				"locY": 61
			},
			{
				"chance": 20,
				"item": "Digimushrm",
				"locX": 35,
				"locY": 43
			},
			{
				"chance": 3,
				"item": "Sweet Nut",
				"locX": 39,
				"locY": 18
			}
		]
	},
	{
		"id": 72,
		"internalName": "GIAS03",
		"name": "Gear Savanna",
		"description": "Patamon Screen",
		"adjacentMaps": [
			{
				"id": 73,
				"direction": "BottomCenter"
			},
			{
				"id": 71,
				"direction": "LeftUp"
			},
			{
				"id": 77,
				"direction": "RightUp"
			}
		],
		"likes": [
			5
		],
		"dislikes": [],
		"items": [
			{
				"chance": 13,
				"item": "Digimushrm",
				"locX": 44,
				"locY": 56
			},
			{
				"chance": 9,
				"item": "Digimushrm",
				"locX": 74,
				"locY": 50
			},
			{
				"chance": 2,
				"item": "Happymushrm",
				"locX": 45,
				"locY": 46
			}
		]
	},
	{
		"id": 73,
		"internalName": "GIAS04",
		"name": "Gear Savanna",
		"description": "Biyomon Screen",
		"adjacentMaps": [
			{
				"id": 72,
				"direction": "UpCenter"
			},
			{
				"id": 77,
				"direction": "RightCenter"
			}
		],
		"likes": [
			5
		],
		"dislikes": [],
		"items": [
			{
				"chance": 16,
				"item": "Digimushrm",
				"locX": 38,
				"locY": 72
			},
			{
				"chance": 8,
				"item": "Digimushrm",
				"locX": 46,
				"locY": 81
			},
			{
				"chance": 19,
				"item": "Digimushrm",
				"locX": 60,
				"locY": 83
			},
			{
				"chance": 15,
				"item": "Digimushrm",
				"locX": 69,
				"locY": 71
			}
		]
	},
	{
		"id": 74,
		"internalName": "GIAS05",
		"name": "Gear Savanna",
		"description": "Between Entrance and Leomon's first encounter",
		"adjacentMaps": [
			{
				"id": 69,
				"direction": "LeftCenter"
			},
			{
				"id": 76,
				"direction": "UpRight"
			}
		],
		"likes": [
			5
		],
		"dislikes": [],
		"items": [
			{
				"chance": 12,
				"item": "Digimushrm",
				"locX": 68,
				"locY": 50
			},
			{
				"chance": 18,
				"item": "Digimushrm",
				"locX": 46,
				"locY": 29
			},
			{
				"chance": 4,
				"item": "Sweet Nut",
				"locX": 46,
				"locY": 73
			},
			{
				"chance": 1,
				"item": "Chain melon",
				"locX": 57,
				"locY": 83
			}
		]
	},
	{
		"id": 75,
		"internalName": "GIAS06A",
		"name": "Gear Savanna",
		"description": "Recycle Shop (no shop)",
		"adjacentMaps": [
			{
				"id": 70,
				"direction": "RightBottom"
			}
		],
		"likes": [
			5
		],
		"dislikes": [],
		"items": [
			{
				"chance": 17,
				"item": "Digimushrm",
				"locX": 49,
				"locY": 70
			},
			{
				"chance": 3,
				"item": "Happymushrm",
				"locX": 25,
				"locY": 68
			}
		]
	},
	{
		"id": 131,
		"internalName": "GIAS06B",
		"name": "Gear Savanna",
		"description": "Recycle Shop (with Shop)",
		"adjacentMaps": [
			{
				"id": 70,
				"direction": "RightBottom"
			}
		],
		"likes": [
			5
		],
		"dislikes": [],
		"items": [
			{
				"chance": 17,
				"item": "Digimushrm",
				"locX": 49,
				"locY": 70
			},
			{
				"chance": 3,
				"item": "Happymushrm",
				"locX": 25,
				"locY": 68
			}
		]
	},
	{
		"id": 76,
		"internalName": "GIAS07",
		"name": "Gear Savanna",
		"description": "Leomon's first encounter",
		"adjacentMaps": [
			{
				"id": 74,
				"direction": "BottomCenter"
			},
			{
				"id": 78,
				"direction": "LeftUp"
			},
			{
				"id": 77,
				"direction": "UpCenter"
			}
		],
		"likes": [
			5
		],
		"dislikes": [],
		"items": [
			{
				"chance": 6,
				"item": "Digimushrm",
				"locX": 39,
				"locY": 59
			},
			{
				"chance": 15,
				"item": "Digimushrm",
				"locX": 62,
				"locY": 89
			},
			{
				"chance": 12,
				"item": "Digimushrm",
				"locX": 40,
				"locY": 24
			},
			{
				"chance": 7,
				"item": "Digimushrm",
				"locX": 61,
				"locY": 35
			}
		]
	},
	{
		"id": 77,
		"internalName": "GIAS08",
		"name": "Gear Savanna",
		"description": "Toilet, entrance to trash mountain",
		"adjacentMaps": [
			{
				"id": 72,
				"direction": "LeftUp"
			},
			{
				"id": 76,
				"direction": "BottomCenter"
			},
			{
				"id": 138,
				"direction": "UpRight"
			},
			{
				"id": 164,
				"direction": "UpCenter"
			}
		],
		"likes": [
			5
		],
		"dislikes": [],
		"items": [
			{
				"chance": 15,
				"item": "Digimushrm",
				"locX": 27,
				"locY": 77
			},
			{
				"chance": 11,
				"item": "Digimushrm",
				"locX": 62,
				"locY": 58
			}
		]
	},
	{
		"id": 78,
		"internalName": "GIAS09",
		"name": "Gear Savanna",
		"description": "Leomon's Gym",
		"adjacentMaps": [
			{
				"id": 76,
				"direction": "RightBottom"
			}
		],
		"likes": [
			5
		],
		"dislikes": [],
		"items": [
			{
				"chance": 9,
				"item": "Digimushrm",
				"locX": 33,
				"locY": 39
			},
			{
				"chance": 17,
				"item": "Digimushrm",
				"locX": 33,
				"locY": 22
			},
			{
				"chance": 3,
				"item": "Sweet Nut",
				"locX": 52,
				"locY": 35
			}
		]
	},
	{
		"id": 140,
		"internalName": "GKYO01",
		"name": "Volume Villa",
		"description": "outside Volume Villa",
		"adjacentMaps": [
			{
				"id": 141,
				"direction": "UpCenter"
			},
			{
				"id": 139,
				"direction": "BottomRight"
			}
		],
		"likes": [
			4
		],
		"dislikes": [
			3,
			8
		],
		"items": []
	},
	{
		"id": 141,
		"internalName": "GKYO02",
		"name": "Volume Villa",
		"description": "inside Volume Villa",
		"adjacentMaps": [
			{
				"id": 140,
				"direction": "BottomCenter"
			}
		],
		"likes": [
			4
		],
		"dislikes": [
			3,
			8
		],
		"items": []
	},
	{
		"id": 164,
		"internalName": "GOMI01",
		"name": "Trash Mountain",
		"description": "Entrance Screen",
		"adjacentMaps": [
			{
				"id": 77,
				"direction": "BottomLeft"
			},
			{
				"id": 165,
				"direction": "UpRight"
			}
		],
		"likes": [],
		"dislikes": [
			2,
			8
		],
		"items": []
	},
	{
		"id": 165,
		"internalName": "GOMI02",
		"name": "Trash Mountain",
		"description": "Sukamon Screen",
		"adjacentMaps": [
			{
				"id": 164,
				"direction": "BottomCenter"
			}
		],
		"likes": [],
		"dislikes": [
			2,
			8
		],
		"items": []
	},
	{
		"id": 97,
		"internalName": "ICSA01",
		"name": "Ice Sanctuary",
		"description": "Main Hall",
		"adjacentMaps": [
			{
				"id": 92,
				"direction": "BottomLeft"
			},
			{
				"id": 98,
				"direction": "UpCenter"
			}
		],
		"likes": [
			2
		],
		"dislikes": [
			6
		],
		"items": []
	},
	{
		"id": 98,
		"internalName": "ICSA02",
		"name": "Ice Sanctuary",
		"description": "1st Room downstairs",
		"adjacentMaps": [
			{
				"id": 97,
				"direction": "BottomCenter"
			},
			{
				"id": 99,
				"direction": "UpCenter"
			},
			{
				"id": 103,
				"direction": "BottomRight"
			}
		],
		"likes": [
			2
		],
		"dislikes": [
			6
		],
		"items": []
	},
	{
		"id": 99,
		"internalName": "ICSA03",
		"name": "Ice Sanctuary",
		"description": "Ice Gym",
		"adjacentMaps": [
			{
				"id": 98,
				"direction": "LeftBottom"
			}
		],
		"likes": [
			2
		],
		"dislikes": [
			6
		],
		"items": []
	},
	{
		"id": 100,
		"internalName": "ICSA04",
		"name": "Ice Sanctuary",
		"description": "Passage from 2 Teleporter to 4 Teleporter Room",
		"adjacentMaps": [
			{
				"id": 103,
				"direction": "BottomCenter"
			},
			{
				"id": 101,
				"direction": "RightUp"
			}
		],
		"likes": [
			2
		],
		"dislikes": [
			6
		],
		"items": []
	},
	{
		"id": 101,
		"internalName": "ICSA05",
		"name": "Ice Sanctuary",
		"description": "4 Teleporter Room",
		"adjacentMaps": [
			{
				"id": 100,
				"direction": "BottomCenter"
			},
			{
				"id": 99,
				"direction": "RightBottom"
			},
			{
				"id": 97,
				"direction": "LeftUp"
			},
			{
				"id": 98,
				"direction": "LeftBottom"
			},
			{
				"id": 102,
				"direction": "RightUp"
			}
		],
		"likes": [
			2
		],
		"dislikes": [
			6
		],
		"items": []
	},
	{
		"id": 102,
		"internalName": "ICSA06",
		"name": "Ice Sanctuary",
		"description": "Blue Light Screen",
		"adjacentMaps": [
			{
				"id": 101,
				"direction": "UpCenter"
			}
		],
		"likes": [
			2
		],
		"dislikes": [
			6
		],
		"items": []
	},
	{
		"id": 103,
		"internalName": "ICSA07",
		"name": "Ice Sanctuary",
		"description": "2 Teleporter Room",
		"adjacentMaps": [
			{
				"id": 92,
				"direction": "BottomRight"
			},
			{
				"id": 100,
				"direction": "UpRight"
			},
			{
				"id": 98,
				"direction": "LeftUp"
			}
		],
		"likes": [
			2
		],
		"dislikes": [
			6
		],
		"items": []
	},
	{
		"id": 104,
		"internalName": "ICSA08",
		"name": "Ice Sanctuary",
		"description": "Machinedramon Fight in Back Dimension",
		"adjacentMaps": [
			{
				"id": 228,
				"direction": "BottomCenter"
			}
		],
		"likes": [
			2
		],
		"dislikes": [
			6
		],
		"items": []
	},
	{
		"id": 79,
		"internalName": "KODA00",
		"name": "Ancient Dino Region",
		"description": "Tyrannomon Screen, Toilet",
		"adjacentMaps": [
			{
				"id": 17,
				"direction": "RightCenter"
			},
			{
				"id": 80,
				"direction": "LeftCenter"
			}
		],
		"likes": [
			0
		],
		"dislikes": [],
		"items": [
			{
				"chance": 10,
				"item": "Digimushrm",
				"locX": 34,
				"locY": 56
			},
			{
				"chance": 6,
				"item": "Digimushrm",
				"locX": 37,
				"locY": 43
			}
		]
	},
	{
		"id": 80,
		"internalName": "KODA01",
		"name": "Ancient Glacial Region",
		"description": "Glacial Region Entrance",
		"adjacentMaps": [
			{
				"id": 79,
				"direction": "BottomCenter"
			},
			{
				"id": 81,
				"direction": "UpLeft"
			}
		],
		"likes": [
			0
		],
		"dislikes": [],
		"items": [
			{
				"chance": 15,
				"item": "Digimushrm",
				"locX": 30,
				"locY": 89
			},
			{
				"chance": 9,
				"item": "Digimushrm",
				"locX": 55,
				"locY": 61
			},
			{
				"chance": 14,
				"item": "Digimushrm",
				"locX": 26,
				"locY": 52
			},
			{
				"chance": 3,
				"item": "Red Berry",
				"locX": 44,
				"locY": 17
			}
		]
	},
	{
		"id": 81,
		"internalName": "KODA02",
		"name": "Ancient Glacial Region",
		"description": "Vending Machine Screen",
		"adjacentMaps": [
			{
				"id": 80,
				"direction": "BottomCenter"
			},
			{
				"id": 82,
				"direction": "UpLeft"
			}
		],
		"likes": [
			0
		],
		"dislikes": [],
		"items": [
			{
				"chance": 11,
				"item": "Digimushrm",
				"locX": 31,
				"locY": 84
			},
			{
				"chance": 8,
				"item": "Digimushrm",
				"locX": 48,
				"locY": 27
			},
			{
				"chance": 4,
				"item": "Red Berry",
				"locX": 25,
				"locY": 55
			}
		]
	},
	{
		"id": 82,
		"internalName": "KODA03",
		"name": "Ancient Glacial Region",
		"description": "Entrance to Ancient Speedy Region",
		"adjacentMaps": [
			{
				"id": 81,
				"direction": "BottomCenter"
			},
			{
				"id": 83,
				"direction": "UpCenter"
			}
		],
		"likes": [
			0
		],
		"dislikes": [],
		"items": [
			{
				"chance": 16,
				"item": "Digimushrm",
				"locX": 54,
				"locY": 55
			},
			{
				"chance": 7,
				"item": "Digimushrm",
				"locX": 40,
				"locY": 47
			},
			{
				"chance": 18,
				"item": "Digimushrm",
				"locX": 39,
				"locY": 46
			},
			{
				"chance": 4,
				"item": "Happymushrm",
				"locX": 58,
				"locY": 34
			}
		]
	},
	{
		"id": 83,
		"internalName": "KODA04",
		"name": "Ancient Speedy Region",
		"description": "Entrance to Ancient Glacial Region",
		"adjacentMaps": [
			{
				"id": 82,
				"direction": "RightBottom"
			},
			{
				"id": 84,
				"direction": "UpLeft"
			}
		],
		"likes": [
			0
		],
		"dislikes": [],
		"items": []
	},
	{
		"id": 84,
		"internalName": "KODA05",
		"name": "Ancient Speedy Region",
		"description": "Bone Tunnel",
		"adjacentMaps": [
			{
				"id": 87,
				"direction": "LeftUp"
			},
			{
				"id": 85,
				"direction": "UpCenter"
			}
		],
		"likes": [
			0
		],
		"dislikes": [],
		"items": []
	},
	{
		"id": 85,
		"internalName": "KODA06",
		"name": "Ancient Speedy Region",
		"description": "end of Bone Tunnel",
		"adjacentMaps": [
			{
				"id": 84,
				"direction": "RightCenter"
			}
		],
		"likes": [
			0
		],
		"dislikes": [],
		"items": []
	},
	{
		"id": 86,
		"internalName": "KODA07",
		"name": "Ancient Speedy Region",
		"description": "Meteormon Screen",
		"adjacentMaps": [
			{
				"id": 87,
				"direction": "BottomCenter"
			}
		],
		"likes": [
			0
		],
		"dislikes": [],
		"items": [
			{
				"chance": 1,
				"item": "Sage Fruit",
				"locX": 60,
				"locY": 53
			}
		]
	},
	{
		"id": 87,
		"internalName": "KODA08",
		"name": "Ancient Speedy Region",
		"description": "secret passage at Bone Tunnel",
		"adjacentMaps": [
			{
				"id": 86,
				"direction": "UpRight"
			},
			{
				"id": 84,
				"direction": "RightBottom"
			}
		],
		"likes": [
			0
		],
		"dislikes": [],
		"items": []
	},
	{
		"id": 113,
		"internalName": "LEOM01",
		"name": "Leomon's Ancestor Cave",
		"description": "Statue Room",
		"adjacentMaps": [
			{
				"id": 114,
				"direction": "BottomRight"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 114,
		"internalName": "LEOM02",
		"name": "Leomon's Ancestor Cave",
		"description": "Entrance",
		"adjacentMaps": [
			{
				"id": 26,
				"direction": "UpRight"
			},
			{
				"id": 113,
				"direction": "LeftUp"
			}
		],
		"likes": [
			1
		],
		"dislikes": [
			0,
			7,
			8
		],
		"items": []
	},
	{
		"id": 109,
		"internalName": "MAYO00",
		"name": "Native Forest",
		"description": "Agumon Screen",
		"adjacentMaps": [
			{
				"id": 112,
				"direction": "UpCenter"
			},
			{
				"id": 180,
				"direction": "RightCenter"
			},
			{
				"id": 110,
				"direction": "LeftBottom"
			}
		],
		"likes": [
			8
		],
		"dislikes": [],
		"items": [
			{
				"chance": 3,
				"item": "Happymushrm",
				"locX": 61,
				"locY": 64
			},
			{
				"chance": 30,
				"item": "Digimushrm",
				"locX": 55,
				"locY": 71
			},
			{
				"chance": 40,
				"item": "Digimushrm",
				"locX": 36,
				"locY": 44
			}
		]
	},
	{
		"id": 0,
		"internalName": "MAYO01",
		"name": "Native Forest",
		"description": "Toilet Screen",
		"adjacentMaps": [
			{
				"id": 1,
				"direction": "RightBottom"
			},
			{
				"id": 2,
				"direction": "BottomLeft"
			},
			{
				"id": 8,
				"direction": "LeftUp"
			},
			{
				"id": 110,
				"direction": "UpLeft"
			}
		],
		"likes": [
			8
		],
		"dislikes": [],
		"items": [
			{
				"chance": 40,
				"item": "Digimushrm",
				"locX": 78,
				"locY": 31
			},
			{
				"chance": 2,
				"item": "Deluxmushrm",
				"locX": 39,
				"locY": 43
			},
			{
				"chance": 10,
				"item": "3_Digimushrm",
				"locX": 35,
				"locY": 88
			},
			{
				"chance": 15,
				"item": "Digimushrm",
				"locX": 68,
				"locY": 84
			},
			{
				"chance": 25,
				"item": "Digimushrm",
				"locX": 49,
				"locY": 46
			}
		]
	},
	{
		"id": 110,
		"internalName": "MAYO01_2",
		"name": "Native Forest",
		"description": "Hub Screen, Path to Mt. Panorama blocked",
		"adjacentMaps": [
			{
				"id": 109,
				"direction": "RightUp"
			},
			{
				"id": 0,
				"direction": "BottomCenter"
			},
			{
				"id": 7,
				"direction": "LeftCenter"
			},
			{
				"id": 18,
				"direction": "LeftUp"
			}
		],
		"likes": [
			8
		],
		"dislikes": [],
		"items": [
			{
				"chance": 20,
				"item": "Digimushrm",
				"locX": 61,
				"locY": 54
			},
			{
				"chance": 5,
				"item": "Happymushrm",
				"locX": 39,
				"locY": 46
			},
			{
				"chance": 15,
				"item": "Digimushrm",
				"locX": 55,
				"locY": 63
			}
		]
	},
	{
		"id": 1,
		"internalName": "MAYO02",
		"name": "Native Forest",
		"description": "Kunemon Screen",
		"adjacentMaps": [
			{
				"id": 0,
				"direction": "LeftUp"
			},
			{
				"id": 10,
				"direction": "UpCenter"
			},
			{
				"id": 4,
				"direction": "RightBottom"
			},
			{
				"id": 3,
				"direction": "BottomLeft"
			}
		],
		"likes": [
			8
		],
		"dislikes": [],
		"items": [
			{
				"chance": 25,
				"item": "Digimushrm",
				"locX": 46,
				"locY": 45
			},
			{
				"chance": 5,
				"item": "Happymushrm",
				"locX": 60,
				"locY": 59
			}
		]
	},
	{
		"id": 111,
		"internalName": "MAYO02_2",
		"name": "Native Forest",
		"description": "Hub Screen, Path to Mt. Panorama open",
		"adjacentMaps": [
			{
				"id": 109,
				"direction": "RightUp"
			},
			{
				"id": 0,
				"direction": "BottomCenter"
			},
			{
				"id": 7,
				"direction": "LeftCenter"
			},
			{
				"id": 18,
				"direction": "LeftUp"
			}
		],
		"likes": [
			8
		],
		"dislikes": [],
		"items": [
			{
				"chance": 20,
				"item": "Digimushrm",
				"locX": 61,
				"locY": 54
			},
			{
				"chance": 5,
				"item": "Happymushrm",
				"locX": 39,
				"locY": 46
			},
			{
				"chance": 15,
				"item": "Digimushrm",
				"locX": 55,
				"locY": 63
			}
		]
	},
	{
		"id": 2,
		"internalName": "MAYO03",
		"name": "Native Forest",
		"description": "Palmon Screen",
		"adjacentMaps": [
			{
				"id": 0,
				"direction": "UpLeft"
			},
			{
				"id": 3,
				"direction": "RightCenter"
			},
			{
				"id": 6,
				"direction": "BottomLeft"
			}
		],
		"likes": [
			8
		],
		"dislikes": [],
		"items": [
			{
				"chance": 4,
				"item": "Blue apple",
				"locX": 37,
				"locY": 33
			},
			{
				"chance": 30,
				"item": "Digimushrm",
				"locX": 46,
				"locY": 59
			},
			{
				"chance": 16,
				"item": "Digimushrm",
				"locX": 62,
				"locY": 54
			}
		]
	},
	{
		"id": 3,
		"internalName": "MAYO04A",
		"name": "Native Forest",
		"description": "Etemon Screen",
		"adjacentMaps": [
			{
				"id": 2,
				"direction": "LeftCenter"
			},
			{
				"id": 1,
				"direction": "UpLeft"
			}
		],
		"likes": [
			8
		],
		"dislikes": [],
		"items": [
			{
				"chance": 3,
				"item": "Blue apple",
				"locX": 44,
				"locY": 31
			},
			{
				"chance": 25,
				"item": "Digimushrm",
				"locX": 42,
				"locY": 57
			},
			{
				"chance": 3,
				"item": "Deluxmushrm",
				"locX": 52,
				"locY": 51
			},
			{
				"chance": 60,
				"item": "Digimushrm",
				"locX": 65,
				"locY": 41
			}
		]
	},
	{
		"id": 4,
		"internalName": "MAYO04B",
		"name": "Native Forest",
		"description": "Between Kunemon and Coelamon Screen",
		"adjacentMaps": [
			{
				"id": 1,
				"direction": "UpCenter"
			},
			{
				"id": 5,
				"direction": "RightBottom"
			}
		],
		"likes": [
			8
		],
		"dislikes": [],
		"items": []
	},
	{
		"id": 5,
		"internalName": "MAYO05",
		"name": "Coela Point",
		"description": "Coelamon Screen",
		"adjacentMaps": [
			{
				"id": 4,
				"direction": "UpCenter"
			}
		],
		"likes": [
			8
		],
		"dislikes": [],
		"items": [
			{
				"chance": 30,
				"item": "Digimushrm",
				"locX": 42,
				"locY": 54
			},
			{
				"chance": 60,
				"item": "Digimushrm",
				"locX": 34,
				"locY": 30
			},
			{
				"chance": 10,
				"item": "Digimushrm",
				"locX": 53,
				"locY": 47
			},
			{
				"chance": 20,
				"item": "Digimushrm",
				"locX": 69,
				"locY": 60
			}
		]
	},
	{
		"id": 6,
		"internalName": "MAYO06",
		"name": "Dragon Eye Lake",
		"description": "Seadramon Screen",
		"adjacentMaps": [
			{
				"id": 2,
				"direction": "RightCenter"
			}
		],
		"likes": [
			8
		],
		"dislikes": [],
		"items": [
			{
				"chance": 5,
				"item": "Digimushrm",
				"locX": 57,
				"locY": 83
			}
		]
	},
	{
		"id": 9,
		"internalName": "MAYO08A",
		"name": "Digimon Bridge",
		"description": "Bridge repaired",
		"adjacentMaps": [
			{
				"id": 1,
				"direction": "BottomCenter"
			},
			{
				"id": 180,
				"direction": "LeftUp"
			},
			{
				"id": 11,
				"direction": "RightUp"
			}
		],
		"likes": [
			8
		],
		"dislikes": [],
		"items": [
			{
				"chance": 40,
				"item": "Digimushrm",
				"locX": 37,
				"locY": 48
			},
			{
				"chance": 4,
				"item": "Blue apple",
				"locX": 38,
				"locY": 52
			}
		]
	},
	{
		"id": 10,
		"internalName": "MAYO08B",
		"name": "Digimon Bridge",
		"description": "Bridge destroyed",
		"adjacentMaps": [
			{
				"id": 1,
				"direction": "BottomCenter"
			},
			{
				"id": 180,
				"direction": "LeftUp"
			},
			{
				"id": 11,
				"direction": "RightUp"
			}
		],
		"likes": [
			8
		],
		"dislikes": [],
		"items": [
			{
				"chance": 40,
				"item": "Digimushrm",
				"locX": 37,
				"locY": 48
			},
			{
				"chance": 4,
				"item": "Blue apple",
				"locX": 38,
				"locY": 52
			}
		]
	},
	{
		"id": 8,
		"internalName": "MAYO10",
		"name": "Dragon Eye Lake",
		"description": "Northern Fishing Spot",
		"adjacentMaps": [
			{
				"id": 0,
				"direction": "RightCenter"
			}
		],
		"likes": [
			8
		],
		"dislikes": [],
		"items": [
			{
				"chance": 15,
				"item": "Digimushrm",
				"locX": 74,
				"locY": 62
			},
			{
				"chance": 25,
				"item": "Digimushrm",
				"locX": 31,
				"locY": 45
			}
		]
	},
	{
		"id": 7,
		"internalName": "MAYO11",
		"name": "Drill Tunnel Entrance",
		"description": "Drill Tunnel Entrance",
		"adjacentMaps": [
			{
				"id": 110,
				"direction": "RightCenter"
			},
			{
				"id": 24,
				"direction": "LeftCenter"
			}
		],
		"likes": [
			8
		],
		"dislikes": [],
		"items": [
			{
				"chance": 2,
				"item": "Happymushrm",
				"locX": 22,
				"locY": 69
			}
		]
	},
	{
		"id": 166,
		"internalName": "MGEN01",
		"name": "Mt. Infinity",
		"description": "Level 1",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "UpLeft"
			},
			{
				"id": 167,
				"direction": "BottomRight"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 167,
		"internalName": "MGEN02",
		"name": "Mt. Infinity",
		"description": "Level 2",
		"adjacentMaps": [
			{
				"id": 166,
				"direction": "LeftCenter"
			},
			{
				"id": 210,
				"direction": "BottomLeft"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 210,
		"internalName": "MGEN03",
		"name": "Mt. Infinity",
		"description": "Level 3",
		"adjacentMaps": [
			{
				"id": 167,
				"direction": "UpLeft"
			},
			{
				"id": 212,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 212,
		"internalName": "MGEN04",
		"name": "Mt. Infinity",
		"description": "Level 4",
		"adjacentMaps": [
			{
				"id": 210,
				"direction": "UpLeft"
			},
			{
				"id": 219,
				"direction": "UpRight"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 219,
		"internalName": "MGEN05",
		"name": "Mt. Infinity",
		"description": "Level 5",
		"adjacentMaps": [
			{
				"id": 212,
				"direction": "UpCenter"
			},
			{
				"id": 247,
				"direction": "BottomLeft"
			}
		],
		"likes": [
			6
		],
		"dislikes": [
			2,
			8
		],
		"items": []
	},
	{
		"id": 247,
		"internalName": "MGEN06",
		"name": "Mt. Infinity",
		"description": "Level 6, Devimon Screen",
		"adjacentMaps": [
			{
				"id": 219,
				"direction": "UpLeft"
			},
			{
				"id": 248,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 248,
		"internalName": "MGEN07",
		"name": "Mt. Infinity",
		"description": "Level 7",
		"adjacentMaps": [
			{
				"id": 247,
				"direction": "BottomRight"
			},
			{
				"id": 249,
				"direction": "BottomLeft"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 249,
		"internalName": "MGEN08",
		"name": "Mt. Infinity",
		"description": "Level 8",
		"adjacentMaps": [
			{
				"id": 248,
				"direction": "LeftCenter"
			},
			{
				"id": 253,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 253,
		"internalName": "MGEN09",
		"name": "Mt. Infinity",
		"description": "Level 9",
		"adjacentMaps": [
			{
				"id": 249,
				"direction": "RightBottom"
			},
			{
				"id": 254,
				"direction": "UpLeft"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 254,
		"internalName": "MGEN10",
		"name": "Mt. Infinity",
		"description": "Level 10, Megadramon Screen",
		"adjacentMaps": [
			{
				"id": 253,
				"direction": "UpRight"
			},
			{
				"id": 222,
				"direction": "UpLeft"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 226,
		"internalName": "MGEN11",
		"name": "Back Dimension",
		"description": "Level 1",
		"adjacentMaps": [
			{
				"id": 227,
				"direction": "LeftCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 227,
		"internalName": "MGEN12",
		"name": "Back Dimension",
		"description": "Level 2",
		"adjacentMaps": [
			{
				"id": 226,
				"direction": "BottomRight"
			},
			{
				"id": 228,
				"direction": "BottomLeft"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 228,
		"internalName": "MGEN13",
		"name": "Back Dimension",
		"description": "Level 3",
		"adjacentMaps": [
			{
				"id": 227,
				"direction": "RightUp"
			},
			{
				"id": 104,
				"direction": "BottomLeft"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 222,
		"internalName": "MGEN98",
		"name": "Mt. Infinity",
		"description": "Level 12, MetalGreymon Screen",
		"adjacentMaps": [
			{
				"id": 254,
				"direction": "BottomCenter"
			},
			{
				"id": 225,
				"direction": "UpCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 225,
		"internalName": "MGEN99",
		"name": "Mt. Infinity",
		"description": "Level 13, Machinedramon Screen",
		"adjacentMaps": [
			{
				"id": 222,
				"direction": "BottomCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 18,
		"internalName": "MIHA00",
		"name": "Path Thru Mt. Panorama",
		"description": "From Native Forest",
		"adjacentMaps": [
			{
				"id": 110,
				"direction": "BottomCenter"
			},
			{
				"id": 233,
				"direction": "UpCenter"
			}
		],
		"likes": [
			5
		],
		"dislikes": [],
		"items": [
			{
				"chance": 15,
				"item": "Digimushrm",
				"locX": 37,
				"locY": 19
			},
			{
				"chance": 10,
				"item": "Digimushrm",
				"locX": 60,
				"locY": 72
			},
			{
				"chance": 4,
				"item": "Big Berry",
				"locX": 57,
				"locY": 54
			}
		]
	},
	{
		"id": 19,
		"internalName": "MIHA01",
		"name": "Mt. Panorama Plains",
		"description": "Mamemon Screen",
		"adjacentMaps": [
			{
				"id": 234,
				"direction": "BottomRight"
			},
			{
				"id": 20,
				"direction": "LeftBottom"
			},
			{
				"id": 233,
				"direction": "BottomLeft"
			}
		],
		"likes": [
			5
		],
		"dislikes": [],
		"items": [
			{
				"chance": 16,
				"item": "Digimushrm",
				"locX": 31,
				"locY": 57
			},
			{
				"chance": 8,
				"item": "Digimushrm",
				"locX": 91,
				"locY": 55
			},
			{
				"chance": 7,
				"item": "Happymushrm",
				"locX": 62,
				"locY": 94
			}
		]
	},
	{
		"id": 20,
		"internalName": "MIHA02",
		"name": "Path Thru Mt. Panorama",
		"description": "From Gear Savanna",
		"adjacentMaps": [
			{
				"id": 19,
				"direction": "UpCenter"
			},
			{
				"id": 22,
				"direction": "BottomCenter"
			}
		],
		"likes": [
			5
		],
		"dislikes": [],
		"items": [
			{
				"chance": 7,
				"item": "Digimushrm",
				"locX": 52,
				"locY": 26
			},
			{
				"chance": 15,
				"item": "Digimushrm",
				"locX": 40,
				"locY": 61
			},
			{
				"chance": 2,
				"item": "Deluxmushrm",
				"locX": 64,
				"locY": 61
			}
		]
	},
	{
		"id": 22,
		"internalName": "MIHA04A",
		"name": "Foot of Mt. Panorama",
		"description": "Toilet, without Tunnel entrance",
		"adjacentMaps": [
			{
				"id": 32,
				"direction": "RightBottom"
			},
			{
				"id": 69,
				"direction": "UpLeft"
			},
			{
				"id": 20,
				"direction": "UpRight"
			}
		],
		"likes": [
			5
		],
		"dislikes": [],
		"items": [
			{
				"chance": 8,
				"item": "Digimushrm",
				"locX": 44,
				"locY": 33
			},
			{
				"chance": 16,
				"item": "Digimushrm",
				"locX": 23,
				"locY": 49
			},
			{
				"chance": 4,
				"item": "Big Berry",
				"locX": 25,
				"locY": 74
			}
		]
	},
	{
		"id": 23,
		"internalName": "MIHA04B",
		"name": "Foot of Mt. Panorama",
		"description": "Toilet, with Tunnel entrance",
		"adjacentMaps": [
			{
				"id": 32,
				"direction": "RightBottom"
			},
			{
				"id": 69,
				"direction": "UpLeft"
			},
			{
				"id": 20,
				"direction": "UpRight"
			}
		],
		"likes": [
			5
		],
		"dislikes": [],
		"items": [
			{
				"chance": 8,
				"item": "Digimushrm",
				"locX": 44,
				"locY": 33
			},
			{
				"chance": 16,
				"item": "Digimushrm",
				"locX": 23,
				"locY": 49
			},
			{
				"chance": 4,
				"item": "Big Berry",
				"locX": 25,
				"locY": 74
			}
		]
	},
	{
		"id": 233,
		"internalName": "MIHA05",
		"name": "Mt. Panorama Spore Area",
		"description": "Unimon Screen",
		"adjacentMaps": [
			{
				"id": 18,
				"direction": "BottomCenter"
			},
			{
				"id": 19,
				"direction": "UpLeft"
			},
			{
				"id": 234,
				"direction": "RightUp"
			}
		],
		"likes": [
			5
		],
		"dislikes": [],
		"items": [
			{
				"chance": 15,
				"item": "Digimushrm",
				"locX": 53,
				"locY": 64
			},
			{
				"chance": 15,
				"item": "Digimushrm",
				"locX": 56,
				"locY": 61
			},
			{
				"chance": 15,
				"item": "Digimushrm",
				"locX": 60,
				"locY": 59
			},
			{
				"chance": 15,
				"item": "Digimushrm",
				"locX": 63,
				"locY": 55
			},
			{
				"chance": 6,
				"item": "Happymushrm",
				"locX": 56,
				"locY": 65
			}
		]
	},
	{
		"id": 234,
		"internalName": "MIHA06",
		"name": "Mt. Panorama Spore Area",
		"description": "Vademon Screen",
		"adjacentMaps": [
			{
				"id": 19,
				"direction": "UpCenter"
			},
			{
				"id": 233,
				"direction": "BottomCenter"
			}
		],
		"likes": [
			5
		],
		"dislikes": [],
		"items": [
			{
				"chance": 5,
				"item": "3_Digimushrm",
				"locX": 39,
				"locY": 47
			},
			{
				"chance": 15,
				"item": "Digimushrm",
				"locX": 44,
				"locY": 66
			},
			{
				"chance": 4,
				"item": "Happymushrm",
				"locX": 59,
				"locY": 42
			}
		]
	},
	{
		"id": 115,
		"internalName": "MIST01",
		"name": "Misty Trees",
		"description": "Entrance from Geko Swamp",
		"adjacentMaps": [
			{
				"id": 139,
				"direction": "BottomLeft"
			},
			{
				"id": 120,
				"direction": "UpLeft"
			},
			{
				"id": 116,
				"direction": "RightUp"
			}
		],
		"likes": [],
		"dislikes": [
			3
		],
		"items": [
			{
				"chance": 17,
				"item": "Digimushrm",
				"locX": 50,
				"locY": 39
			},
			{
				"chance": 5,
				"item": "Digimushrm",
				"locX": 34,
				"locY": 78
			},
			{
				"chance": 8,
				"item": "Digimushrm",
				"locX": 32,
				"locY": 41
			},
			{
				"chance": 4,
				"item": "Happymushrm",
				"locX": 49,
				"locY": 74
			}
		]
	},
	{
		"id": 116,
		"internalName": "MIST02",
		"name": "Misty Trees",
		"description": "3 Shellmon Screen",
		"adjacentMaps": [
			{
				"id": 115,
				"direction": "LeftCenter"
			},
			{
				"id": 118,
				"direction": "UpCenter"
			},
			{
				"id": 117,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [
			3
		],
		"items": [
			{
				"chance": 12,
				"item": "Digimushrm",
				"locX": 31,
				"locY": 56
			},
			{
				"chance": 18,
				"item": "Digimushrm",
				"locX": 55,
				"locY": 52
			},
			{
				"chance": 2,
				"item": "Happymushrm",
				"locX": 40,
				"locY": 80
			}
		]
	},
	{
		"id": 117,
		"internalName": "MIST03",
		"name": "Misty Trees",
		"description": "Kokatorimon Screen",
		"adjacentMaps": [
			{
				"id": 116,
				"direction": "LeftBottom"
			},
			{
				"id": 121,
				"direction": "RightBottom"
			}
		],
		"likes": [],
		"dislikes": [
			3
		],
		"items": [
			{
				"chance": 20,
				"item": "Digimushrm",
				"locX": 37,
				"locY": 84
			},
			{
				"chance": 17,
				"item": "Digimushrm",
				"locX": 33,
				"locY": 67
			},
			{
				"chance": 13,
				"item": "Digimushrm",
				"locX": 56,
				"locY": 63
			},
			{
				"chance": 3,
				"item": "Digipine",
				"locX": 56,
				"locY": 83
			}
		]
	},
	{
		"id": 118,
		"internalName": "MIST04",
		"name": "Misty Trees",
		"description": "Passage to Cherrymon Screen",
		"adjacentMaps": [
			{
				"id": 116,
				"direction": "BottomCenter"
			},
			{
				"id": 119,
				"direction": "UpCenter"
			}
		],
		"likes": [],
		"dislikes": [
			3
		],
		"items": [
			{
				"chance": 8,
				"item": "Digimushrm",
				"locX": 55,
				"locY": 71
			},
			{
				"chance": 16,
				"item": "Digimushrm",
				"locX": 45,
				"locY": 58
			},
			{
				"chance": 5,
				"item": "Digimushrm",
				"locX": 14,
				"locY": 6
			}
		]
	},
	{
		"id": 119,
		"internalName": "MIST05",
		"name": "Misty Trees",
		"description": "Cherrymon Screen",
		"adjacentMaps": [
			{
				"id": 144,
				"direction": "UpLeft"
			},
			{
				"id": 118,
				"direction": "BottomCenter"
			},
			{
				"id": 121,
				"direction": "RightUp"
			}
		],
		"likes": [],
		"dislikes": [
			3
		],
		"items": [
			{
				"chance": 19,
				"item": "Digimushrm",
				"locX": 56,
				"locY": 34
			},
			{
				"chance": 13,
				"item": "Digimushrm",
				"locX": 56,
				"locY": 80
			},
			{
				"chance": 4,
				"item": "Digipine",
				"locX": 35,
				"locY": 64
			},
			{
				"chance": 1,
				"item": "Calm berry",
				"locX": 67,
				"locY": 32
			}
		]
	},
	{
		"id": 120,
		"internalName": "MIST06",
		"name": "Misty Trees",
		"description": "Gabumon Screen",
		"adjacentMaps": [
			{
				"id": 115,
				"direction": "BottomRight"
			}
		],
		"likes": [],
		"dislikes": [
			3
		],
		"items": [
			{
				"chance": 14,
				"item": "Digimushrm",
				"locX": 53,
				"locY": 64
			},
			{
				"chance": 9,
				"item": "Digimushrm",
				"locX": 50,
				"locY": 36
			},
			{
				"chance": 3,
				"item": "Happymushrm",
				"locX": 42,
				"locY": 75
			}
		]
	},
	{
		"id": 121,
		"internalName": "MIST07",
		"name": "Misty Trees",
		"description": "Entrance from Freezeland",
		"adjacentMaps": [
			{
				"id": 117,
				"direction": "LeftBottom"
			},
			{
				"id": 95,
				"direction": "RightUp"
			},
			{
				"id": 119,
				"direction": "LeftUp"
			}
		],
		"likes": [],
		"dislikes": [
			3
		],
		"items": [
			{
				"chance": 5,
				"item": "Digimushrm",
				"locX": 35,
				"locY": 19
			},
			{
				"chance": 17,
				"item": "Digimushrm",
				"locX": 55,
				"locY": 50
			},
			{
				"chance": 7,
				"item": "Digimushrm",
				"locX": 47,
				"locY": 4
			},
			{
				"chance": 4,
				"item": "Digipine",
				"locX": 40,
				"locY": 45
			}
		]
	},
	{
		"id": 45,
		"internalName": "OGRE00",
		"name": "Ogre Fortress",
		"description": "Entrance Screen",
		"adjacentMaps": [
			{
				"id": 40,
				"direction": "BottomCenter"
			},
			{
				"id": 46,
				"direction": "UpRight"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 46,
		"internalName": "OGRE01",
		"name": "Ogre Fortress",
		"description": "Screen after entrance",
		"adjacentMaps": [
			{
				"id": 45,
				"direction": "RightBottom"
			},
			{
				"id": 47,
				"direction": "UpRight"
			},
			{
				"id": 130,
				"direction": "UpCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 47,
		"internalName": "OGRE02",
		"name": "Ogre Fortress",
		"description": "Fridge Screen",
		"adjacentMaps": [
			{
				"id": 46,
				"direction": "LeftBottom"
			},
			{
				"id": 48,
				"direction": "UpRight"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 48,
		"internalName": "OGRE03",
		"name": "Ogre Fortress",
		"description": "Ogremon 3 Screen, Living Room",
		"adjacentMaps": [
			{
				"id": 47,
				"direction": "BottomCenter"
			},
			{
				"id": 37,
				"direction": "UpRight"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 130,
		"internalName": "OGRE04",
		"name": "Ogre Fortress",
		"description": "Storage Room",
		"adjacentMaps": [
			{
				"id": 46,
				"direction": "BottomCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 142,
		"internalName": "OGRE10",
		"name": "Secret Beach Cave",
		"description": "Whamon's Cave entrance",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "LeftCenter"
			},
			{
				"id": 135,
				"direction": "LeftCenter"
			},
			{
				"id": 143,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 143,
		"internalName": "OGRE11",
		"name": "Secret Beach Cave",
		"description": "Ogremon 3 fight Screen",
		"adjacentMaps": [
			{
				"id": 142,
				"direction": "LeftCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 144,
		"internalName": "OMOC01",
		"name": "Toy Town",
		"description": "Main Screen",
		"adjacentMaps": [
			{
				"id": 119,
				"direction": "BottomRight"
			},
			{
				"id": 146,
				"direction": "RightUpBuilding"
			},
			{
				"id": 145,
				"direction": "LeftCenterBuilding"
			},
			{
				"id": 147,
				"direction": "UpCenterBuilding"
			}
		],
		"likes": [],
		"dislikes": [
			6
		],
		"items": []
	},
	{
		"id": 145,
		"internalName": "OMOC02",
		"name": "Costume House",
		"description": "Monzaemon Costume House",
		"adjacentMaps": [
			{
				"id": 144,
				"direction": "BottomRight"
			}
		],
		"likes": [],
		"dislikes": [
			6
		],
		"items": []
	},
	{
		"id": 146,
		"internalName": "OMOC03",
		"name": "Robot House",
		"description": "Tinmon House",
		"adjacentMaps": [
			{
				"id": 144,
				"direction": "BottomCenter"
			}
		],
		"likes": [],
		"dislikes": [
			6
		],
		"items": []
	},
	{
		"id": 147,
		"internalName": "OMOC04",
		"name": "Toy Mansion",
		"description": "1. floor/entrance",
		"adjacentMaps": [
			{
				"id": 144,
				"direction": "BottomCenter"
			},
			{
				"id": 148,
				"direction": "UpCenter"
			}
		],
		"likes": [],
		"dislikes": [
			6
		],
		"items": []
	},
	{
		"id": 148,
		"internalName": "OMOC05",
		"name": "Toy Mansion",
		"description": "2. floor",
		"adjacentMaps": [
			{
				"id": 147,
				"direction": "BottomCenter"
			},
			{
				"id": 149,
				"direction": "UpCenter"
			}
		],
		"likes": [],
		"dislikes": [
			6
		],
		"items": []
	},
	{
		"id": 149,
		"internalName": "OMOC06",
		"name": "Toy Mansion",
		"description": "3. floor",
		"adjacentMaps": [
			{
				"id": 148,
				"direction": "BottomCenter"
			},
			{
				"id": 150,
				"direction": "UpCenter"
			}
		],
		"likes": [],
		"dislikes": [
			6
		],
		"items": []
	},
	{
		"id": 150,
		"internalName": "OMOC07",
		"name": "Toy Mansion",
		"description": "4. floor",
		"adjacentMaps": [
			{
				"id": 149,
				"direction": "BottomCenter"
			},
			{
				"id": 151,
				"direction": "UpCenter"
			}
		],
		"likes": [],
		"dislikes": [
			6
		],
		"items": []
	},
	{
		"id": 151,
		"internalName": "OMOC08",
		"name": "Toy Mansion",
		"description": "WaruMonzaemon Screen",
		"adjacentMaps": [
			{
				"id": 150,
				"direction": "BottomCenter"
			}
		],
		"likes": [],
		"dislikes": [
			6
		],
		"items": []
	},
	{
		"id": 211,
		"internalName": "ROOM02",
		"name": "Item Keeper",
		"description": "",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "LeftBottom"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 213,
		"internalName": "ROOM04",
		"name": "Centar Clinic",
		"description": "",
		"adjacentMaps": [
			{
				"id": 180,
				"direction": "RightUp"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 214,
		"internalName": "ROOM05A",
		"name": "Restaurant",
		"description": "Without Jukebox",
		"adjacentMaps": [
			{
				"id": 180,
				"direction": "LeftCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 215,
		"internalName": "ROOM05B",
		"name": "Restaurant",
		"description": "With Jukebox",
		"adjacentMaps": [
			{
				"id": 180,
				"direction": "LeftCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 216,
		"internalName": "ROOM06",
		"name": "Item Shop",
		"description": "",
		"adjacentMaps": [
			{
				"id": 217,
				"direction": "LeftCenter"
			},
			{
				"id": 180,
				"direction": "BottomCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 217,
		"internalName": "ROOM07",
		"name": "Secret Shop",
		"description": "",
		"adjacentMaps": [
			{
				"id": 216,
				"direction": "RightBottom"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 218,
		"internalName": "ROOM08",
		"name": "Jijimon's House",
		"description": "Base Model",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "BottomCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 205,
		"internalName": "ROOM10",
		"name": "Jijimon's House",
		"description": "Expanded Model",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "BottomCenter"
			},
			{
				"id": 206,
				"direction": "UpLeft"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 206,
		"internalName": "ROOM11",
		"name": "Jijimon's House",
		"description": "2nd Room",
		"adjacentMaps": [
			{
				"id": 205,
				"direction": "BottomLeft"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 207,
		"internalName": "ROOM12",
		"name": "Birdra Transport",
		"description": "",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "BottomCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 208,
		"internalName": "ROOM13",
		"name": "Arena Lobby",
		"description": "Without MetalGreymon/Airdramon",
		"adjacentMaps": [
			{
				"id": 180,
				"direction": "BottomLeft"
			},
			{
				"id": 235,
				"direction": "LeftUp"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 209,
		"internalName": "ROOM14",
		"name": "Treasure Hunt",
		"description": "",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "LeftBottom"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 223,
		"internalName": "ROOM19",
		"name": "Arena Lobby",
		"description": "With MetalGreymon/Airdramon",
		"adjacentMaps": [
			{
				"id": 180,
				"direction": "BottomLeft"
			},
			{
				"id": 235,
				"direction": "LeftUp"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 235,
		"internalName": "ROOM20",
		"name": "Digimon Curling",
		"description": "room in the Arena",
		"adjacentMaps": [
			{
				"id": 208,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 67,
		"internalName": "SAIB01",
		"name": "Underground Lab",
		"description": "passage Tekkamon to Skullgreymon Screen",
		"adjacentMaps": [
			{
				"id": 68,
				"direction": "BottomLeft"
			},
			{
				"id": 221,
				"direction": "UpRight"
			}
		],
		"likes": [
			6
		],
		"dislikes": [
			2,
			8
		],
		"items": []
	},
	{
		"id": 68,
		"internalName": "SAIB02",
		"name": "Underground Lab",
		"description": "Tekkamon Screen, elevator/entrance",
		"adjacentMaps": [
			{
				"id": 60,
				"direction": "LeftBottom"
			},
			{
				"id": 67,
				"direction": "UpLeft"
			}
		],
		"likes": [
			6
		],
		"dislikes": [
			2,
			8
		],
		"items": []
	},
	{
		"id": 221,
		"internalName": "SAIB03",
		"name": "Underground Lab",
		"description": "Skullgreymon Screen",
		"adjacentMaps": [
			{
				"id": 67,
				"direction": "LeftBottom"
			}
		],
		"likes": [
			6
		],
		"dislikes": [
			2,
			8
		],
		"items": []
	},
	{
		"id": 138,
		"internalName": "STIC01",
		"name": "Geko Swamp",
		"description": "Entrance from Gear Savanna",
		"adjacentMaps": [
			{
				"id": 139,
				"direction": "UpLeft"
			},
			{
				"id": 77,
				"direction": "BottomRight"
			}
		],
		"likes": [
			4
		],
		"dislikes": [
			3,
			8
		],
		"items": [
			{
				"chance": 16,
				"item": "Digimushrm",
				"locX": 58,
				"locY": 71
			},
			{
				"chance": 7,
				"item": "Digimushrm",
				"locX": 32,
				"locY": 37
			},
			{
				"chance": 4,
				"item": "Spiny green",
				"locX": 31,
				"locY": 48
			},
			{
				"chance": 1,
				"item": "Muscle Yam",
				"locX": 84,
				"locY": 35
			}
		]
	},
	{
		"id": 139,
		"internalName": "STIC02",
		"name": "Geko Swamp",
		"description": "Toilet/Otamamon Screen",
		"adjacentMaps": [
			{
				"id": 138,
				"direction": "BottomRight"
			},
			{
				"id": 140,
				"direction": "LeftUp"
			},
			{
				"id": 115,
				"direction": "UpRight"
			}
		],
		"likes": [
			4
		],
		"dislikes": [
			3,
			8
		],
		"items": [
			{
				"chance": 12,
				"item": "Digimushrm",
				"locX": 59,
				"locY": 50
			},
			{
				"chance": 18,
				"item": "Digimushrm",
				"locX": 33,
				"locY": 42
			},
			{
				"chance": 3,
				"item": "Happymushrm",
				"locX": 37,
				"locY": 61
			}
		]
	},
	{
		"id": 236,
		"internalName": "TEND01",
		"name": "File City Top",
		"description": "final Cutscene (old house)",
		"adjacentMaps": [
			{
				"id": 166,
				"direction": "UpRight"
			},
			{
				"id": 207,
				"direction": "BottomRightBuilding"
			},
			{
				"id": 205,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 218,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 211,
				"direction": "LeftCenterBuilding"
			},
			{
				"id": 209,
				"direction": "UpCenter"
			},
			{
				"id": 180,
				"direction": "BottomCenter"
			},
			{
				"id": 112,
				"direction": "LeftBottom"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 237,
		"internalName": "TEND02",
		"name": "File City Top",
		"description": "final Cutscene (new house)",
		"adjacentMaps": [
			{
				"id": 166,
				"direction": "UpRight"
			},
			{
				"id": 207,
				"direction": "BottomRightBuilding"
			},
			{
				"id": 205,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 218,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 211,
				"direction": "LeftCenterBuilding"
			},
			{
				"id": 209,
				"direction": "UpCenter"
			},
			{
				"id": 180,
				"direction": "BottomCenter"
			},
			{
				"id": 112,
				"direction": "LeftBottom"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 238,
		"internalName": "TOPN01",
		"name": "File City Top",
		"description": "initial Cutscene",
		"adjacentMaps": [
			{
				"id": 166,
				"direction": "UpRight"
			},
			{
				"id": 207,
				"direction": "BottomRightBuilding"
			},
			{
				"id": 205,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 218,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 211,
				"direction": "LeftCenterBuilding"
			},
			{
				"id": 209,
				"direction": "UpCenter"
			},
			{
				"id": 180,
				"direction": "BottomCenter"
			},
			{
				"id": 112,
				"direction": "LeftBottom"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 112,
		"internalName": "TRAI00",
		"name": "Green Gym",
		"description": "",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "RightBottom"
			},
			{
				"id": 109,
				"direction": "BottomCenter"
			}
		],
		"likes": [
			8
		],
		"dislikes": [],
		"items": []
	},
	{
		"id": 11,
		"internalName": "TROP00",
		"name": "Tropical Jungle",
		"description": "Bridge screen",
		"adjacentMaps": [
			{
				"id": 12,
				"direction": "RightBottom"
			},
			{
				"id": 10,
				"direction": "LeftUp"
			}
		],
		"likes": [
			4
		],
		"dislikes": [
			1
		],
		"items": [
			{
				"chance": 10,
				"item": "Digimushrm",
				"locX": 55,
				"locY": 43
			},
			{
				"chance": 5,
				"item": "Digimushrm",
				"locX": 68,
				"locY": 46
			}
		]
	},
	{
		"id": 12,
		"internalName": "TROP01",
		"name": "Tropical Jungle",
		"description": "Hub screen, where Coelamon brings you to",
		"adjacentMaps": [
			{
				"id": 16,
				"direction": "RightBottom"
			},
			{
				"id": 15,
				"direction": "UpRight"
			},
			{
				"id": 11,
				"direction": "LeftBottom"
			},
			{
				"id": 13,
				"direction": "UpCenter"
			}
		],
		"likes": [
			4
		],
		"dislikes": [
			1
		],
		"items": [
			{
				"chance": 15,
				"item": "Digimushrm",
				"locX": 79,
				"locY": 34
			},
			{
				"chance": 18,
				"item": "Digimushrm",
				"locX": 56,
				"locY": 61
			},
			{
				"chance": 6,
				"item": "Digimushrm",
				"locX": 87,
				"locY": 67
			},
			{
				"chance": 3,
				"item": "Orange bana",
				"locX": 21,
				"locY": 57
			}
		]
	},
	{
		"id": 13,
		"internalName": "TROP02",
		"name": "Tropical Jungle",
		"description": "Toilet Screen",
		"adjacentMaps": [
			{
				"id": 34,
				"direction": "UpCenter"
			},
			{
				"id": 14,
				"direction": "RightCenter"
			},
			{
				"id": 12,
				"direction": "BottomCenter"
			}
		],
		"likes": [
			4
		],
		"dislikes": [
			1
		],
		"items": [
			{
				"chance": 16,
				"item": "Digimushrm",
				"locX": 25,
				"locY": 33
			},
			{
				"chance": 5,
				"item": "Digimushrm",
				"locX": 63,
				"locY": 31
			},
			{
				"chance": 2,
				"item": "Deluxmushrm",
				"locX": 53,
				"locY": 81
			}
		]
	},
	{
		"id": 14,
		"internalName": "TROP03",
		"name": "Tropical Jungle",
		"description": "Vegiemon Screen",
		"adjacentMaps": [
			{
				"id": 15,
				"direction": "RightBottom"
			},
			{
				"id": 13,
				"direction": "LeftCenter"
			},
			{
				"id": 36,
				"direction": "UpCenter"
			}
		],
		"likes": [
			4
		],
		"dislikes": [
			1
		],
		"items": [
			{
				"chance": 15,
				"item": "Digimushrm",
				"locX": 48,
				"locY": 80
			},
			{
				"chance": 7,
				"item": "Happymushrm",
				"locX": 40,
				"locY": 60
			}
		]
	},
	{
		"id": 15,
		"internalName": "TROP04",
		"name": "Mangrove Region",
		"description": "Betamon Screen",
		"adjacentMaps": [
			{
				"id": 14,
				"direction": "LeftBottom"
			},
			{
				"id": 12,
				"direction": "BottomCenter"
			}
		],
		"likes": [
			4
		],
		"dislikes": [
			1
		],
		"items": [
			{
				"chance": 10,
				"item": "Digimushrm",
				"locX": 23,
				"locY": 31
			},
			{
				"chance": 4,
				"item": "Happymushrm",
				"locX": 67,
				"locY": 47
			}
		]
	},
	{
		"id": 16,
		"internalName": "TROP05",
		"name": "Mangrove Region",
		"description": "Before Centarumon Screen",
		"adjacentMaps": [
			{
				"id": 17,
				"direction": "UpCenter"
			},
			{
				"id": 12,
				"direction": "LeftBottom"
			}
		],
		"likes": [
			4
		],
		"dislikes": [
			1
		],
		"items": []
	},
	{
		"id": 17,
		"internalName": "TROP06",
		"name": "Amida Forest",
		"description": "Centarumon's Maze",
		"adjacentMaps": [
			{
				"id": 79,
				"direction": "UpCenter"
			},
			{
				"id": 16,
				"direction": "BottomCenter"
			}
		],
		"likes": [
			4
		],
		"dislikes": [
			1
		],
		"items": [
			{
				"chance": 30,
				"item": "Giant Meat",
				"locX": 33,
				"locY": 49
			},
			{
				"chance": 20,
				"item": "Off. Disk",
				"locX": 33,
				"locY": 49
			},
			{
				"chance": 30,
				"item": "MP Floppy",
				"locX": 49,
				"locY": 53
			},
			{
				"chance": 20,
				"item": "sm.recovery",
				"locX": 49,
				"locY": 53
			},
			{
				"chance": 30,
				"item": "Def. Disk",
				"locX": 67,
				"locY": 42
			},
			{
				"chance": 20,
				"item": "Meat",
				"locX": 67,
				"locY": 42
			},
			{
				"chance": 10,
				"item": "Port. potty",
				"locX": 34,
				"locY": 29
			},
			{
				"chance": 20,
				"item": "Hispeed dsk",
				"locX": 34,
				"locY": 29
			},
			{
				"chance": 10,
				"item": "med.recovery",
				"locX": 50,
				"locY": 34
			},
			{
				"chance": 20,
				"item": "Moldy Meat",
				"locX": 50,
				"locY": 34
			},
			{
				"chance": 2,
				"item": "Orange bana",
				"locX": 49,
				"locY": 18
			},
			{
				"chance": 8,
				"item": "Happymushrm",
				"locX": 49,
				"locY": 18
			},
			{
				"chance": 20,
				"item": "Auto Pilot",
				"locX": 49,
				"locY": 18
			},
			{
				"chance": 5,
				"item": "Omni Disk",
				"locX": 65,
				"locY": 22
			},
			{
				"chance": 25,
				"item": "Medium MP",
				"locX": 65,
				"locY": 22
			}
		]
	},
	{
		"id": 24,
		"internalName": "TUNN01",
		"name": "Drill Tunnel",
		"description": "Entrance, Native Forest side",
		"adjacentMaps": [
			{
				"id": 25,
				"direction": "BottomLeft"
			},
			{
				"id": 7,
				"direction": "RightUp"
			}
		],
		"likes": [
			0
		],
		"dislikes": [
			1,
			8
		],
		"items": []
	},
	{
		"id": 25,
		"internalName": "TUNN02",
		"name": "Drill Tunnel 2nd Floor",
		"description": "Hub screen",
		"adjacentMaps": [
			{
				"id": 27,
				"direction": "LeftCenter"
			},
			{
				"id": 28,
				"direction": "RightCenter"
			},
			{
				"id": 24,
				"direction": "UpCenter"
			},
			{
				"id": 26,
				"direction": "BottomCenter"
			}
		],
		"likes": [
			0
		],
		"dislikes": [
			1,
			8
		],
		"items": []
	},
	{
		"id": 26,
		"internalName": "TUNN03",
		"name": "Drill Tunnel",
		"description": "Entrance to Leomon's Ancestor Cave closed",
		"adjacentMaps": [
			{
				"id": 25,
				"direction": "LeftUp"
			},
			{
				"id": 114,
				"direction": "BottomCenter"
			}
		],
		"likes": [
			0
		],
		"dislikes": [
			1,
			8
		],
		"items": []
	},
	{
		"id": 126,
		"internalName": "TUNN03_2",
		"name": "Drill Tunnel",
		"description": "Entrance to Leomon's Ancestor Cave open",
		"adjacentMaps": [
			{
				"id": 25,
				"direction": "LeftUp"
			},
			{
				"id": 114,
				"direction": "BottomCenter"
			}
		],
		"likes": [
			0
		],
		"dislikes": [
			1,
			8
		],
		"items": []
	},
	{
		"id": 27,
		"internalName": "TUNN04",
		"name": "Residential Area",
		"description": "Drimogemon's Kitchen",
		"adjacentMaps": [
			{
				"id": 25,
				"direction": "UpCenter"
			}
		],
		"likes": [
			0
		],
		"dislikes": [
			1,
			8
		],
		"items": []
	},
	{
		"id": 28,
		"internalName": "TUNN05",
		"name": "Underground Pond",
		"description": "Drilling Drimogemon",
		"adjacentMaps": [
			{
				"id": 29,
				"direction": "UpRight"
			},
			{
				"id": 25,
				"direction": "LeftCenter"
			}
		],
		"likes": [
			0
		],
		"dislikes": [
			1,
			8
		],
		"items": []
	},
	{
		"id": 29,
		"internalName": "TUNN06",
		"name": "Drill Tunnel 2nd Floor",
		"description": "Entrance to Lava Cave",
		"adjacentMaps": [
			{
				"id": 30,
				"direction": "UpRight"
			},
			{
				"id": 28,
				"direction": "BottomLeft"
			}
		],
		"likes": [
			0
		],
		"dislikes": [
			1,
			8
		],
		"items": []
	},
	{
		"id": 30,
		"internalName": "TUNN07",
		"name": "Lava Cave",
		"description": "Entrance, Volcano active (path to Meramon)",
		"adjacentMaps": [
			{
				"id": 31,
				"direction": "RightUp"
			},
			{
				"id": 29,
				"direction": "LeftBottom"
			},
			{
				"id": 123,
				"direction": "BottomLeft"
			}
		],
		"likes": [
			0
		],
		"dislikes": [
			1,
			8
		],
		"items": []
	},
	{
		"id": 122,
		"internalName": "TUNN07_2",
		"name": "Lava Cave",
		"description": "Entrance, Volcano inactive (path to Meramon)",
		"adjacentMaps": [
			{
				"id": 31,
				"direction": "RightUp"
			},
			{
				"id": 29,
				"direction": "LeftBottom"
			},
			{
				"id": 123,
				"direction": "BottomLeft"
			}
		],
		"likes": [
			0
		],
		"dislikes": [
			1,
			8
		],
		"items": []
	},
	{
		"id": 123,
		"internalName": "TUNN07_3",
		"name": "Lava Cave",
		"description": "Entrance, Volcano inactive (lower cave section)",
		"adjacentMaps": [
			{
				"id": 32,
				"direction": "BottomCenter"
			},
			{
				"id": 33,
				"direction": "RightUp"
			},
			{
				"id": 30,
				"direction": "LeftBottom"
			}
		],
		"likes": [
			0
		],
		"dislikes": [
			1,
			8
		],
		"items": []
	},
	{
		"id": 31,
		"internalName": "TUNN08",
		"name": "Lava Cave",
		"description": "Meramon Screen, Vulcano active",
		"adjacentMaps": [
			{
				"id": 30,
				"direction": "LeftBottom"
			}
		],
		"likes": [
			0
		],
		"dislikes": [
			1,
			8
		],
		"items": []
	},
	{
		"id": 124,
		"internalName": "TUNN08_2",
		"name": "Drill Tunnel",
		"description": "Meramon Screen, Volcano inactive (upper section)",
		"adjacentMaps": [
			{
				"id": 30,
				"direction": "LeftBottom"
			}
		],
		"likes": [
			0
		],
		"dislikes": [
			1,
			8
		],
		"items": []
	},
	{
		"id": 125,
		"internalName": "TUNN08_3",
		"name": "Drill Tunnel",
		"description": "Meramon Screen, Volcano inactive (lower section)",
		"adjacentMaps": [
			{
				"id": 33,
				"direction": "RightBottom"
			}
		],
		"likes": [
			0
		],
		"dislikes": [
			1,
			8
		],
		"items": []
	},
	{
		"id": 32,
		"internalName": "TUNN09",
		"name": "Lava Cave",
		"description": "Entrance, Gear Savanna Side",
		"adjacentMaps": [
			{
				"id": 22,
				"direction": "LeftUp"
			},
			{
				"id": 123,
				"direction": "RightCenter"
			}
		],
		"likes": [
			0
		],
		"dislikes": [
			1,
			8
		],
		"items": []
	},
	{
		"id": 33,
		"internalName": "TUNN10",
		"name": "Lava Cave",
		"description": "Cave section with hidden room",
		"adjacentMaps": [
			{
				"id": 123,
				"direction": "BottomLeft"
			},
			{
				"id": 125,
				"direction": "LeftUp"
			}
		],
		"likes": [
			0
		],
		"dislikes": [
			1,
			8
		],
		"items": []
	},
	{
		"id": 204,
		"internalName": "TWNA01",
		"name": "File City Top",
		"description": "no recruitments/start",
		"adjacentMaps": [
			{
				"id": 166,
				"direction": "UpRight"
			},
			{
				"id": 207,
				"direction": "BottomRightBuilding"
			},
			{
				"id": 205,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 218,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 211,
				"direction": "LeftCenterBuilding"
			},
			{
				"id": 209,
				"direction": "UpCenter"
			},
			{
				"id": 180,
				"direction": "BottomCenter"
			},
			{
				"id": 112,
				"direction": "LeftBottom"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 168,
		"internalName": "TWNA02",
		"name": "File City Top",
		"description": "Agumon recruited",
		"adjacentMaps": [
			{
				"id": 166,
				"direction": "UpRight"
			},
			{
				"id": 207,
				"direction": "BottomRightBuilding"
			},
			{
				"id": 205,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 218,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 211,
				"direction": "LeftCenterBuilding"
			},
			{
				"id": 209,
				"direction": "UpCenter"
			},
			{
				"id": 180,
				"direction": "BottomCenter"
			},
			{
				"id": 112,
				"direction": "LeftBottom"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 169,
		"internalName": "TWNA03",
		"name": "File City Top",
		"description": "Palmon recruited",
		"adjacentMaps": [
			{
				"id": 166,
				"direction": "UpRight"
			},
			{
				"id": 207,
				"direction": "BottomRightBuilding"
			},
			{
				"id": 205,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 218,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 211,
				"direction": "LeftCenterBuilding"
			},
			{
				"id": 209,
				"direction": "UpCenter"
			},
			{
				"id": 180,
				"direction": "BottomCenter"
			},
			{
				"id": 112,
				"direction": "LeftBottom"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 170,
		"internalName": "TWNA04",
		"name": "File City Top",
		"description": "Vegiemon recruited",
		"adjacentMaps": [
			{
				"id": 166,
				"direction": "UpRight"
			},
			{
				"id": 207,
				"direction": "BottomRightBuilding"
			},
			{
				"id": 205,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 218,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 211,
				"direction": "LeftCenterBuilding"
			},
			{
				"id": 209,
				"direction": "UpCenter"
			},
			{
				"id": 180,
				"direction": "BottomCenter"
			},
			{
				"id": 112,
				"direction": "LeftBottom"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 171,
		"internalName": "TWNA05",
		"name": "File City Top",
		"description": "Birdramon recruited",
		"adjacentMaps": [
			{
				"id": 166,
				"direction": "UpRight"
			},
			{
				"id": 207,
				"direction": "BottomRightBuilding"
			},
			{
				"id": 205,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 218,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 211,
				"direction": "LeftCenterBuilding"
			},
			{
				"id": 209,
				"direction": "UpCenter"
			},
			{
				"id": 180,
				"direction": "BottomCenter"
			},
			{
				"id": 112,
				"direction": "LeftBottom"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 172,
		"internalName": "TWNA06",
		"name": "File City Top",
		"description": "Birdramon + Palmon recruited",
		"adjacentMaps": [
			{
				"id": 166,
				"direction": "UpRight"
			},
			{
				"id": 207,
				"direction": "BottomRightBuilding"
			},
			{
				"id": 205,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 218,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 211,
				"direction": "LeftCenterBuilding"
			},
			{
				"id": 209,
				"direction": "UpCenter"
			},
			{
				"id": 180,
				"direction": "BottomCenter"
			},
			{
				"id": 112,
				"direction": "LeftBottom"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 173,
		"internalName": "TWNA07",
		"name": "File City Top",
		"description": "Birdramon + Vegiemon recruited",
		"adjacentMaps": [
			{
				"id": 166,
				"direction": "UpRight"
			},
			{
				"id": 207,
				"direction": "BottomRightBuilding"
			},
			{
				"id": 205,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 218,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 211,
				"direction": "LeftCenterBuilding"
			},
			{
				"id": 209,
				"direction": "UpCenter"
			},
			{
				"id": 180,
				"direction": "BottomCenter"
			},
			{
				"id": 112,
				"direction": "LeftBottom"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 174,
		"internalName": "TWNA08",
		"name": "File City Top",
		"description": "New house",
		"adjacentMaps": [
			{
				"id": 166,
				"direction": "UpRight"
			},
			{
				"id": 207,
				"direction": "BottomRightBuilding"
			},
			{
				"id": 205,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 218,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 211,
				"direction": "LeftCenterBuilding"
			},
			{
				"id": 209,
				"direction": "UpCenter"
			},
			{
				"id": 180,
				"direction": "BottomCenter"
			},
			{
				"id": 112,
				"direction": "LeftBottom"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 175,
		"internalName": "TWNA09",
		"name": "File City Top",
		"description": "New house + Palmon recruited",
		"adjacentMaps": [
			{
				"id": 166,
				"direction": "UpRight"
			},
			{
				"id": 207,
				"direction": "BottomRightBuilding"
			},
			{
				"id": 205,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 218,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 211,
				"direction": "LeftCenterBuilding"
			},
			{
				"id": 209,
				"direction": "UpCenter"
			},
			{
				"id": 180,
				"direction": "BottomCenter"
			},
			{
				"id": 112,
				"direction": "LeftBottom"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 176,
		"internalName": "TWNA10",
		"name": "File City Top",
		"description": "New house + Vegiemon recruited",
		"adjacentMaps": [
			{
				"id": 166,
				"direction": "UpRight"
			},
			{
				"id": 207,
				"direction": "BottomRightBuilding"
			},
			{
				"id": 205,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 218,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 211,
				"direction": "LeftCenterBuilding"
			},
			{
				"id": 209,
				"direction": "UpCenter"
			},
			{
				"id": 180,
				"direction": "BottomCenter"
			},
			{
				"id": 112,
				"direction": "LeftBottom"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 177,
		"internalName": "TWNA11",
		"name": "File City Top",
		"description": "New house + Birdramon recruited",
		"adjacentMaps": [
			{
				"id": 166,
				"direction": "UpRight"
			},
			{
				"id": 207,
				"direction": "BottomRightBuilding"
			},
			{
				"id": 205,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 218,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 211,
				"direction": "LeftCenterBuilding"
			},
			{
				"id": 209,
				"direction": "UpCenter"
			},
			{
				"id": 180,
				"direction": "BottomCenter"
			},
			{
				"id": 112,
				"direction": "LeftBottom"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 178,
		"internalName": "TWNA12",
		"name": "File City Top",
		"description": "New house + Birdramon + Palmon recruited",
		"adjacentMaps": [
			{
				"id": 166,
				"direction": "UpRight"
			},
			{
				"id": 207,
				"direction": "BottomRightBuilding"
			},
			{
				"id": 205,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 218,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 211,
				"direction": "LeftCenterBuilding"
			},
			{
				"id": 209,
				"direction": "UpCenter"
			},
			{
				"id": 180,
				"direction": "BottomCenter"
			},
			{
				"id": 112,
				"direction": "LeftBottom"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 179,
		"internalName": "TWNA13",
		"name": "File City Top",
		"description": "New house + Birdramon + Vegiemon recruited",
		"adjacentMaps": [
			{
				"id": 166,
				"direction": "UpRight"
			},
			{
				"id": 207,
				"direction": "BottomRightBuilding"
			},
			{
				"id": 205,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 218,
				"direction": "BottomCenterBuilding"
			},
			{
				"id": 211,
				"direction": "LeftCenterBuilding"
			},
			{
				"id": 209,
				"direction": "UpCenter"
			},
			{
				"id": 180,
				"direction": "BottomCenter"
			},
			{
				"id": 112,
				"direction": "LeftBottom"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 180,
		"internalName": "TWNB01",
		"name": "File City Bottom",
		"description": "no recruitments/start",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "UpCenter"
			},
			{
				"id": 216,
				"direction": "UpLeftBuilding"
			},
			{
				"id": 208,
				"direction": "LeftBottomBuilding"
			},
			{
				"id": 214,
				"direction": "RightUpBuilding"
			},
			{
				"id": 213,
				"direction": "BottomLeftBuilding"
			},
			{
				"id": 109,
				"direction": "LeftCenter"
			},
			{
				"id": 10,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 181,
		"internalName": "TWNB02",
		"name": "File City Bottom",
		"description": "Shop unlocked",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "UpCenter"
			},
			{
				"id": 216,
				"direction": "UpLeftBuilding"
			},
			{
				"id": 208,
				"direction": "LeftBottomBuilding"
			},
			{
				"id": 214,
				"direction": "RightUpBuilding"
			},
			{
				"id": 213,
				"direction": "BottomLeftBuilding"
			},
			{
				"id": 109,
				"direction": "LeftCenter"
			},
			{
				"id": 10,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 182,
		"internalName": "TWNB03",
		"name": "File City Bottom",
		"description": "Shop + Restaurant",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "UpCenter"
			},
			{
				"id": 216,
				"direction": "UpLeftBuilding"
			},
			{
				"id": 208,
				"direction": "LeftBottomBuilding"
			},
			{
				"id": 214,
				"direction": "RightUpBuilding"
			},
			{
				"id": 213,
				"direction": "BottomLeftBuilding"
			},
			{
				"id": 109,
				"direction": "LeftCenter"
			},
			{
				"id": 10,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 183,
		"internalName": "TWNB04",
		"name": "File City Bottom",
		"description": "Shop + Restaurant + Clinic",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "UpCenter"
			},
			{
				"id": 216,
				"direction": "UpLeftBuilding"
			},
			{
				"id": 208,
				"direction": "LeftBottomBuilding"
			},
			{
				"id": 214,
				"direction": "RightUpBuilding"
			},
			{
				"id": 213,
				"direction": "BottomLeftBuilding"
			},
			{
				"id": 109,
				"direction": "LeftCenter"
			},
			{
				"id": 10,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 184,
		"internalName": "TWNB05",
		"name": "File City Bottom",
		"description": "Shop + Restaurant + Clinic + Arena",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "UpCenter"
			},
			{
				"id": 216,
				"direction": "UpLeftBuilding"
			},
			{
				"id": 208,
				"direction": "LeftBottomBuilding"
			},
			{
				"id": 214,
				"direction": "RightUpBuilding"
			},
			{
				"id": 213,
				"direction": "BottomLeftBuilding"
			},
			{
				"id": 109,
				"direction": "LeftCenter"
			},
			{
				"id": 10,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 185,
		"internalName": "TWNB06",
		"name": "File City Bottom",
		"description": "Shop + Restaurant + Arena",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "UpCenter"
			},
			{
				"id": 216,
				"direction": "UpLeftBuilding"
			},
			{
				"id": 208,
				"direction": "LeftBottomBuilding"
			},
			{
				"id": 214,
				"direction": "RightUpBuilding"
			},
			{
				"id": 213,
				"direction": "BottomLeftBuilding"
			},
			{
				"id": 109,
				"direction": "LeftCenter"
			},
			{
				"id": 10,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 186,
		"internalName": "TWNB07",
		"name": "File City Bottom",
		"description": "Shop + Arena",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "UpCenter"
			},
			{
				"id": 216,
				"direction": "UpLeftBuilding"
			},
			{
				"id": 208,
				"direction": "LeftBottomBuilding"
			},
			{
				"id": 214,
				"direction": "RightUpBuilding"
			},
			{
				"id": 213,
				"direction": "BottomLeftBuilding"
			},
			{
				"id": 109,
				"direction": "LeftCenter"
			},
			{
				"id": 10,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 187,
		"internalName": "TWNB08",
		"name": "File City Bottom",
		"description": "Shop + Clinic + Arena",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "UpCenter"
			},
			{
				"id": 216,
				"direction": "UpLeftBuilding"
			},
			{
				"id": 208,
				"direction": "LeftBottomBuilding"
			},
			{
				"id": 214,
				"direction": "RightUpBuilding"
			},
			{
				"id": 213,
				"direction": "BottomLeftBuilding"
			},
			{
				"id": 109,
				"direction": "LeftCenter"
			},
			{
				"id": 10,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 188,
		"internalName": "TWNB09",
		"name": "File City Bottom",
		"description": "Shop + Arena",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "UpCenter"
			},
			{
				"id": 216,
				"direction": "UpLeftBuilding"
			},
			{
				"id": 208,
				"direction": "LeftBottomBuilding"
			},
			{
				"id": 214,
				"direction": "RightUpBuilding"
			},
			{
				"id": 213,
				"direction": "BottomLeftBuilding"
			},
			{
				"id": 109,
				"direction": "LeftCenter"
			},
			{
				"id": 10,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 189,
		"internalName": "TWNB10",
		"name": "File City Bottom",
		"description": "Big shop unlocked only",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "UpCenter"
			},
			{
				"id": 216,
				"direction": "UpLeftBuilding"
			},
			{
				"id": 208,
				"direction": "LeftBottomBuilding"
			},
			{
				"id": 214,
				"direction": "RightUpBuilding"
			},
			{
				"id": 213,
				"direction": "BottomLeftBuilding"
			},
			{
				"id": 109,
				"direction": "LeftCenter"
			},
			{
				"id": 10,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 190,
		"internalName": "TWNB11",
		"name": "File City Bottom",
		"description": "Big shop + Restaurant",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "UpCenter"
			},
			{
				"id": 216,
				"direction": "UpLeftBuilding"
			},
			{
				"id": 208,
				"direction": "LeftBottomBuilding"
			},
			{
				"id": 214,
				"direction": "RightUpBuilding"
			},
			{
				"id": 213,
				"direction": "BottomLeftBuilding"
			},
			{
				"id": 109,
				"direction": "LeftCenter"
			},
			{
				"id": 10,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 191,
		"internalName": "TWNB12",
		"name": "File City Bottom",
		"description": "Big shop + Restaurant + Clinic",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "UpCenter"
			},
			{
				"id": 216,
				"direction": "UpLeftBuilding"
			},
			{
				"id": 208,
				"direction": "LeftBottomBuilding"
			},
			{
				"id": 214,
				"direction": "RightUpBuilding"
			},
			{
				"id": 213,
				"direction": "BottomLeftBuilding"
			},
			{
				"id": 109,
				"direction": "LeftCenter"
			},
			{
				"id": 10,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 192,
		"internalName": "TWNB13",
		"name": "File City Bottom",
		"description": "Big shop + Restaurant + Clinic + Arena",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "UpCenter"
			},
			{
				"id": 216,
				"direction": "UpLeftBuilding"
			},
			{
				"id": 208,
				"direction": "LeftBottomBuilding"
			},
			{
				"id": 214,
				"direction": "RightUpBuilding"
			},
			{
				"id": 213,
				"direction": "BottomLeftBuilding"
			},
			{
				"id": 109,
				"direction": "LeftCenter"
			},
			{
				"id": 10,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 193,
		"internalName": "TWNB14",
		"name": "File City Bottom",
		"description": "Big shop + Restaurant + Arena",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "UpCenter"
			},
			{
				"id": 216,
				"direction": "UpLeftBuilding"
			},
			{
				"id": 208,
				"direction": "LeftBottomBuilding"
			},
			{
				"id": 214,
				"direction": "RightUpBuilding"
			},
			{
				"id": 213,
				"direction": "BottomLeftBuilding"
			},
			{
				"id": 109,
				"direction": "LeftCenter"
			},
			{
				"id": 10,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 194,
		"internalName": "TWNB15",
		"name": "File City Bottom",
		"description": "Big shop + Clinic",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "UpCenter"
			},
			{
				"id": 216,
				"direction": "UpLeftBuilding"
			},
			{
				"id": 208,
				"direction": "LeftBottomBuilding"
			},
			{
				"id": 214,
				"direction": "RightUpBuilding"
			},
			{
				"id": 213,
				"direction": "BottomLeftBuilding"
			},
			{
				"id": 109,
				"direction": "LeftCenter"
			},
			{
				"id": 10,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 195,
		"internalName": "TWNB16",
		"name": "File City Bottom",
		"description": "Big shop + Clinic + Arena",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "UpCenter"
			},
			{
				"id": 216,
				"direction": "UpLeftBuilding"
			},
			{
				"id": 208,
				"direction": "LeftBottomBuilding"
			},
			{
				"id": 214,
				"direction": "RightUpBuilding"
			},
			{
				"id": 213,
				"direction": "BottomLeftBuilding"
			},
			{
				"id": 109,
				"direction": "LeftCenter"
			},
			{
				"id": 10,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 196,
		"internalName": "TWNB17",
		"name": "File City Bottom",
		"description": "Big shop + Arena",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "UpCenter"
			},
			{
				"id": 216,
				"direction": "UpLeftBuilding"
			},
			{
				"id": 208,
				"direction": "LeftBottomBuilding"
			},
			{
				"id": 214,
				"direction": "RightUpBuilding"
			},
			{
				"id": 213,
				"direction": "BottomLeftBuilding"
			},
			{
				"id": 109,
				"direction": "LeftCenter"
			},
			{
				"id": 10,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 197,
		"internalName": "TWNB18",
		"name": "File City Bottom",
		"description": "Restaurant unlocked",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "UpCenter"
			},
			{
				"id": 216,
				"direction": "UpLeftBuilding"
			},
			{
				"id": 208,
				"direction": "LeftBottomBuilding"
			},
			{
				"id": 214,
				"direction": "RightUpBuilding"
			},
			{
				"id": 213,
				"direction": "BottomLeftBuilding"
			},
			{
				"id": 109,
				"direction": "LeftCenter"
			},
			{
				"id": 10,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 198,
		"internalName": "TWNB19",
		"name": "File City Bottom",
		"description": "Restaurant + Clinic",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "UpCenter"
			},
			{
				"id": 216,
				"direction": "UpLeftBuilding"
			},
			{
				"id": 208,
				"direction": "LeftBottomBuilding"
			},
			{
				"id": 214,
				"direction": "RightUpBuilding"
			},
			{
				"id": 213,
				"direction": "BottomLeftBuilding"
			},
			{
				"id": 109,
				"direction": "LeftCenter"
			},
			{
				"id": 10,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 199,
		"internalName": "TWNB20",
		"name": "File City Bottom",
		"description": "Restaurant + Clinic + Arena",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "UpCenter"
			},
			{
				"id": 216,
				"direction": "UpLeftBuilding"
			},
			{
				"id": 208,
				"direction": "LeftBottomBuilding"
			},
			{
				"id": 214,
				"direction": "RightUpBuilding"
			},
			{
				"id": 213,
				"direction": "BottomLeftBuilding"
			},
			{
				"id": 109,
				"direction": "LeftCenter"
			},
			{
				"id": 10,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 200,
		"internalName": "TWNB21",
		"name": "File City Bottom",
		"description": "Restaurant + Arena",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "UpCenter"
			},
			{
				"id": 216,
				"direction": "UpLeftBuilding"
			},
			{
				"id": 208,
				"direction": "LeftBottomBuilding"
			},
			{
				"id": 214,
				"direction": "RightUpBuilding"
			},
			{
				"id": 213,
				"direction": "BottomLeftBuilding"
			},
			{
				"id": 109,
				"direction": "LeftCenter"
			},
			{
				"id": 10,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 201,
		"internalName": "TWNB22",
		"name": "File City Bottom",
		"description": "Clinic unlocked",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "UpCenter"
			},
			{
				"id": 216,
				"direction": "UpLeftBuilding"
			},
			{
				"id": 208,
				"direction": "LeftBottomBuilding"
			},
			{
				"id": 214,
				"direction": "RightUpBuilding"
			},
			{
				"id": 213,
				"direction": "BottomLeftBuilding"
			},
			{
				"id": 109,
				"direction": "LeftCenter"
			},
			{
				"id": 10,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 202,
		"internalName": "TWNB23",
		"name": "File City Bottom",
		"description": "Clinic + Arena",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "UpCenter"
			},
			{
				"id": 216,
				"direction": "UpLeftBuilding"
			},
			{
				"id": 208,
				"direction": "LeftBottomBuilding"
			},
			{
				"id": 214,
				"direction": "RightUpBuilding"
			},
			{
				"id": 213,
				"direction": "BottomLeftBuilding"
			},
			{
				"id": 109,
				"direction": "LeftCenter"
			},
			{
				"id": 10,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 203,
		"internalName": "TWNB24",
		"name": "File City Bottom",
		"description": "Arena unlocked",
		"adjacentMaps": [
			{
				"id": 204,
				"direction": "UpCenter"
			},
			{
				"id": 216,
				"direction": "UpLeftBuilding"
			},
			{
				"id": 208,
				"direction": "LeftBottomBuilding"
			},
			{
				"id": 214,
				"direction": "RightUpBuilding"
			},
			{
				"id": 213,
				"direction": "BottomLeftBuilding"
			},
			{
				"id": 109,
				"direction": "LeftCenter"
			},
			{
				"id": 10,
				"direction": "RightCenter"
			}
		],
		"likes": [],
		"dislikes": [],
		"items": []
	},
	{
		"id": 51,
		"internalName": "YAKA02",
		"name": "Grey Lord's Mansion",
		"description": "Attic Screen",
		"adjacentMaps": [
			{
				"id": 63,
				"direction": "Fall"
			},
			{
				"id": 58,
				"direction": "UpLeft"
			}
		],
		"likes": [
			6
		],
		"dislikes": [
			2,
			8
		],
		"items": []
	},
	{
		"id": 52,
		"internalName": "YAKA11A",
		"name": "Grey Lord's Mansion",
		"description": "Grey Lord's Mansion main hall Bottom",
		"adjacentMaps": [
			{
				"id": 35,
				"direction": "BottomCenter"
			},{
				"id": 57,
				"direction": "UpRight"
			},
			{
				"id": 55,
				"direction": "LeftCenter"
			},
			{
				"id": 59,
				"direction": "RightCenter"
			},
			{
				"id": 53,
				"direction": "UpCenter"
			},
			{
				"id": 224,
				"direction": "LeftCenter"
			},
			{
				"id": 60,
				"direction": "RightBottom"
			}
		],
		"likes": [
			6
		],
		"dislikes": [
			2,
			8
		],
		"items": []
	},
	{
		"id": 53,
		"internalName": "YAKA11B",
		"name": "Grey Lord's Mansion",
		"description": "Grey Lord's Mansion main hall Top",
		"adjacentMaps": [
			{
				"id": 63,
				"direction": "LeftBottom"
			},
			{
				"id": 64,
				"direction": "RightUp"
			},
			{
				"id": 232,
				"direction": "RightBottom"
			},
			{
				"id": 52,
				"direction": "BottomCenter"
			}
		],
		"likes": [
			6
		],
		"dislikes": [
			2,
			8
		],
		"items": []
	},
	{
		"id": 54,
		"internalName": "YAKA12",
		"name": "Grey Lord's Mansion",
		"description": "between Kitchen and Dining room",
		"adjacentMaps": [
			{
				"id": 56,
				"direction": "UpRight"
			},
			{
				"id": 55,
				"direction": "BottomLeft"
			}
		],
		"likes": [
			6
		],
		"dislikes": [
			2,
			8
		],
		"items": []
	},
	{
		"id": 55,
		"internalName": "YAKA13",
		"name": "Grey Lord's Mansion",
		"description": "Dining Room/Fireplace",
		"adjacentMaps": [
			{
				"id": 54,
				"direction": "UpLeft"
			},
			{
				"id": 52,
				"direction": "RightBottom"
			}
		],
		"likes": [
			6
		],
		"dislikes": [
			2,
			8
		],
		"items": []
	},
	{
		"id": 56,
		"internalName": "YAKA14",
		"name": "Grey Lord's Mansion",
		"description": "Kitchen with Fridge",
		"adjacentMaps": [
			{
				"id": 57,
				"direction": "UpRight"
			},
			{
				"id": 54,
				"direction": "BottomLeft"
			}
		],
		"likes": [
			6
		],
		"dislikes": [
			2,
			8
		],
		"items": []
	},
	{
		"id": 57,
		"internalName": "YAKA15",
		"name": "Grey Lord's Mansion",
		"description": "Toilet room",
		"adjacentMaps": [
			{
				"id": 52,
				"direction": "BottomRight"
			},
			{
				"id": 56,
				"direction": "BottomLeft"
			},
			{
				"id": 64,
				"direction": "Fall"
			},
			{
				"id": 58,
				"direction": "UpCenter"
			}
		],
		"likes": [
			6
		],
		"dislikes": [
			2,
			8
		],
		"items": []
	},
	{
		"id": 58,
		"internalName": "YAKA16",
		"name": "Grey Lord's Mansion",
		"description": "stairs to the attic",
		"adjacentMaps": [
			{
				"id": 51,
				"direction": "UpRight"
			},
			{
				"id": 57,
				"direction": "LeftCenter"
			}
		],
		"likes": [
			6
		],
		"dislikes": [
			2,
			8
		],
		"items": []
	},
	{
		"id": 59,
		"internalName": "YAKA17",
		"name": "Grey Lord's Mansion",
		"description": "Brain Chips room",
		"adjacentMaps": [
			{
				"id": 52,
				"direction": "LeftCenter"
			}
		],
		"likes": [
			6
		],
		"dislikes": [
			2,
			8
		],
		"items": []
	},
	{
		"id": 60,
		"internalName": "YAKA18",
		"name": "Grey Lord's Mansion",
		"description": "Entrance to Underground Lab",
		"adjacentMaps": [
			{
				"id": 52,
				"direction": "BottomCenter"
			},
			{
				"id": 68,
				"direction": "UpCenter"
			}
		],
		"likes": [
			6
		],
		"dislikes": [
			2,
			8
		],
		"items": []
	},
	{
		"id": 62,
		"internalName": "YAKA22",
		"name": "Grey Lord's Mansion",
		"description": "Myotismon's \"bed\"room",
		"adjacentMaps": [
			{
				"id": 63,
				"direction": "BottomCenter"
			},
			{
				"id": 66,
				"direction": "UpCenter"
			}
		],
		"likes": [
			6
		],
		"dislikes": [
			2,
			8
		],
		"items": []
	},
	{
		"id": 63,
		"internalName": "YAKA23",
		"name": "Grey Lord's Mansion",
		"description": "Myotismon's office",
		"adjacentMaps": [
			{
				"id": 51,
				"direction": "Fall"
			},
			{
				"id": 62,
				"direction": "RightCenter"
			},
			{
				"id": 53,
				"direction": "BottomRight"
			}
		],
		"likes": [
			6
		],
		"dislikes": [
			2,
			8
		],
		"items": []
	},
	{
		"id": 64,
		"internalName": "YAKA24",
		"name": "Grey Lord's Mansion",
		"description": "Library",
		"adjacentMaps": [
			{
				"id": 53,
				"direction": "UpRight"
			},
			{
				"id": 57,
				"direction": "Fall"
			}
		],
		"likes": [
			6
		],
		"dislikes": [
			2,
			8
		],
		"items": []
	},/*
	{
		"id": 232,
		"internalName": "YAKA25",
		"name": "Grey Lord's Mansion",
		"description": "2nd fireplace, east wing",
		"adjacentMaps": [
			{
				"id": 53,
				"direction": "LeftUp"
			}
		],
		"likes": [
			6
		],
		"dislikes": [
			2,
			8
		],
		"items": []
	},*/
	{
		"id": 224,
		"internalName": "YAKA26",
		"name": "Grey Lord's Mansion",
		"description": "Dining Room/Fireplace with food on table",
		"adjacentMaps": [
			{
				"id": 52,
				"direction": "RightUp"
			}
		],
		"likes": [
			6
		],
		"dislikes": [
			2,
			8
		],
		"items": []
	}
];
/*
let ma=`const maps=
[`;
for(let map of maps){
	ma+=`	
	{
		id:${map.id},
		internalName:"${map.internalName}",
		name:"${map.name}",
		description:"${map.description}",
		adjacentMaps:[${getAdjecentMaps(map.adjacentMaps)}],
		likes:[${getLikes(map.likes)}],
		dislikes:[${getLikes(map.dislikes)}],
		items:[${getItems(map.items)}]
	},`;
}

ma=ma.slice(0, -1)+`
];`;
function getAdjecentMaps(maps){
	let r="";
	for(let map of maps){
		r+=`
			{
				id:${map.id},
				direction:"${map.direction}"
			},`;
	}
	return r.slice(0, -1)+`
		`;
}
function getLikes(likes){
	let l="";
	for(let like of likes){
		l+=`${like},`;
	}
	return l.slice(0, -1);
}
function getItems(mapItems){
	if(mapItems.length==0){
		return "";
	}
	let i="";
	let amount=1;
	let name;
	for(let item of mapItems){
		console.log(item);
		name=item.item;
		if(name.indexOf("_")>-1){
			name=name.split("_");
			amount=name[0];
			name=name[1];
		}
		i+=`
			{
				id:${items.find(x=> x.name.eng==name).id},
				chance:${item.chance},
				amount:${amount},
				locX:${item.locX},
				locY:${item.locY}
			},`;
	}
	return i.slice(0, -1)+`
		`;
}
      let a = document.createElement('a');
      //let str=JSON.stringify(lowest);
      a.setAttribute('href','data:application/json;charset=utf-8,'+ encodeURIComponent(ma));
      a.setAttribute('download',"maps.js");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      */