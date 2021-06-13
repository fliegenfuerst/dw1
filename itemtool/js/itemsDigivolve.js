const items=
	[
		{
			"name": {
				"ger": "kl. Heildisk",
				"eng": "sm.recovery"
			},
			"fullName": {
				"ger": "kleine Heildisk",
				"eng": "Small Recovery"
			},
			"description": {
				"ger": "füllt LE um 500 auf.",
				"eng": "Small Recovery: +500 HP"
			},
			"id": "0",
			"price": 100,
			"meritValue": 0,
			"sortingValue": 0,
			"color": 2,
			"droppable": true,
			"battle": true,
			"healHP": 500
		},
		{
			"name": {
				"ger": "mi. Heildisk",
				"eng": "med.recovery"
			},
			"fullName": {
				"ger": "mittlere Heildisk",
				"eng": "Medium Recovery"
			},
			"description": {
				"ger": "füllt LE um 1500 auf.",
				"eng": "Medium Recovery: +1500 HP"
			},
			"id": "1",
			"price": 500,
			"meritValue": 0,
			"sortingValue": 0,
			"color": 2,
			"droppable": true,
			"battle": true,
			"healHP": 1500
		},
		{
			"name": {
				"ger": "gr. Heildisk",
				"eng": "lrg.recovery"
			},
			"fullName": {
				"ger": "gross Heildisk",
				"eng": "Large Recovery"
			},
			"description": {
				"ger": "füllt LE um 5000 auf.",
				"eng": "Large Recovery: +5000 HP"
			},
			"id": "2",
			"price": 1000,
			"meritValue": 0,
			"sortingValue": 0,
			"color": 2,
			"droppable": true,
			"battle": true,
			"healHP": 5000
		},
		{
			"name": {
				"ger": "Su.-Heildisk",
				"eng": "sup.recovery"
			},
			"fullName": {
				"ger": "Super-Heildisk",
				"eng": "Super Recovery"
			},
			"description": {
				"ger": "füllt volle LE auf.",
				"eng": "Super Recovery: full HP"
			},
			"id": "3",
			"price": 2500,
			"meritValue": 20,
			"sortingValue": 0,
			"color": 2,
			"droppable": true,
			"battle": true,
			"healHP": 9999
		},
		{
			"name": {
				"ger": "MP-Disk",
				"eng": "MP Floppy"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "füllt 500 MP auf.",
				"eng": "Recover +500 Magic Points"
			},
			"id": "4",
			"price": 300,
			"meritValue": 0,
			"sortingValue": 0,
			"color": 2,
			"droppable": true,
			"battle": true,
			"healMP": 500
		},
		{
			"name": {
				"ger": "mi. MP-Disk",
				"eng": "Medium MP"
			},
			"fullName": {
				"ger": "mittlere MP-Disk",
				"eng": "Medium MP Floppy"
			},
			"description": {
				"ger": "füllt 1500 MP auf.",
				"eng": "Med. MP: recover +1500 MP"
			},
			"id": "5",
			"price": 800,
			"meritValue": 0,
			"sortingValue": 0,
			"color": 2,
			"droppable": true,
			"battle": true,
			"healMP": 1500
		},
		{
			"name": {
				"ger": "gr. MP-Disk",
				"eng": "Large MP"
			},
			"fullName": {
				"ger": "grosse MP-Disk",
				"eng": "Large MP Floppy"
			},
			"description": {
				"ger": "füllt 5000 MP auf.",
				"eng": "Lrg. MP: recover +5000 MP"
			},
			"id": "6",
			"price": 2000,
			"meritValue": 0,
			"sortingValue": 0,
			"color": 2,
			"droppable": true,
			"battle": true,
			"healMP": 5000
		},
		{
			"name": {
				"ger": "Do.-disk",
				"eng": "Double flop"
			},
			"fullName": {
				"ger": "Doppel-Disk",
				"eng": "Double Floppy"
			},
			"description": {
				"ger": "füllt MP + LE um 1500 auf.",
				"eng": "Recovers +1500 MP and HP"
			},
			"id": "7",
			"price": 1500,
			"meritValue": 0,
			"sortingValue": 0,
			"color": 2,
			"droppable": true,
			"battle": true,
			"healHP": 1500,
			"healMP": 1500
		},
		{
			"name": {
				"ger": "Vari-Disk",
				"eng": "Various"
			},
			"fullName": {
				"ger": "",
				"eng": "Various Floppy"
			},
			"description": {
				"ger": "heilt Gift,Lähm., Verw.+ Kristall.",
				"eng": "Cures Status Errors"
			},
			"id": "8",
			"price": 300,
			"meritValue": 0,
			"sortingValue": 1,
			"color": 1,
			"droppable": true,
			"battle": true,
			"healStatus": true
		},
		{
			"name": {
				"ger": "Omni-Disk",
				"eng": "Omnipotent"
			},
			"fullName": {
				"ger": "",
				"eng": "Omnipotent Floppy"
			},
			"description": {
				"ger": "heilt anom.Zust.,füllt MP + LE auf.",
				"eng": "Cures errors + rec. HP+MP"
			},
			"id": "9",
			"price": 2000,
			"meritValue": 0,
			"sortingValue": 1,
			"color": 2,
			"droppable": true,
			"battle": true,
			"healStatus": true,
			"healHP": 1500,
			"healMP": 1500
		},
		{
			"name": {
				"ger": "Schutzdisk",
				"eng": "Protection"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "verh. Zustandsverschl. im Kampf.",
				"eng": "Protects yr cond. in battle"
			},
			"id": "a",
			"price": 1200,
			"meritValue": 0,
			"sortingValue": 1,
			"color": 1,
			"droppable": true,
			"battle": true,
			"healStatus": true
		},
		{
			"name": {
				"ger": "Weckdisk",
				"eng": "Restore"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "heilt Atemnot,füllt mind.1/2 LE auf.",
				"eng": "Cures Coma + rec. half HP"
			},
			"id": "b",
			"price": 4000,
			"meritValue": 0,
			"sortingValue": 1,
			"color": 1,
			"droppable": true,
			"battle": true,
			"healHP": "maxHP/2"
		},
		{
			"name": {
				"ger": "Aloedisk",
				"eng": "Sup.restore"
			},
			"fullName": {
				"ger": "",
				"eng": "Super Restore"
			},
			"description": {
				"ger": "heilt anom.Zustände + Atemnot.",
				"eng": "Cures coma, errors +full HP"
			},
			"id": "c",
			"price": 9500,
			"meritValue": 100,
			"sortingValue": 1,
			"color": 2,
			"droppable": true,
			"battle": true,
			"healHP": 9999
		},
		{
			"name": {
				"ger": "Verband",
				"eng": "Bandage"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "heilt Wunden + best. Krankheiten.",
				"eng": "Cures wounds + some sickness"
			},
			"id": "d",
			"price": 200,
			"meritValue": 0,
			"sortingValue": 1,
			"color": 0,
			"droppable": true,
			"healInjury": "100%",
			"healSickness": "20%"
		},
		{
			"name": {
				"ger": "Medizin",
				"eng": "Medicine"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "heilt Wunden und Krankheiten.",
				"eng": "Cures wounds + sickness"
			},
			"id": "e",
			"price": 1000,
			"meritValue": 0,
			"sortingValue": 1,
			"color": 0,
			"droppable": true,
			"healInjury": "100%",
			"healSickness": "100%"
		},
		{
			"name": {
				"ger": "Kraftdisk",
				"eng": "Off. Disk"
			},
			"fullName": {
				"ger": "",
				"eng": "Offense Disk"
			},
			"description": {
				"ger": "stärkt den Angriff im Kampf.",
				"eng": "Boost Off. Power in battle"
			},
			"id": "f",
			"price": 500,
			"meritValue": 0,
			"sortingValue": 3,
			"color": 1,
			"droppable": true,
			"battle": true,
			"battleBuff":{stats:["offense"],amount:"+20%"}

		},
		{
			"name": {
				"ger": "Abwehrdisk",
				"eng": "Def. Disk"
			},
			"fullName": {
				"ger": "",
				"eng": "Defense Disk"
			},
			"description": {
				"ger": "erhöht die Abwehr im Kampf.",
				"eng": "Boost Def. Power in battle"
			},
			"id": "10",
			"price": 500,
			"meritValue": 0,
			"sortingValue": 3,
			"color": 1,
			"droppable": true,
			"battle": true,
			"battleBuff":{stats:["defense"],amount:"+20%"}
		},
		{
			"name": {
				"ger": "Tempodisk",
				"eng": "Hispeed dsk"
			},
			"fullName": {
				"ger": "",
				"eng": "Speed Disk"
			},
			"description": {
				"ger": "erhöht das Tempo im Kampf.",
				"eng": "Boost Speed in battle"
			},
			"id": "11",
			"price": 500,
			"meritValue": 0,
			"sortingValue": 3,
			"color": 1,
			"droppable": true,
			"battle": true,
			"battleBuff":{stats:["speed"],amount:"+20%"}
		},
		{
			"name": {
				"ger": "Dopingdisk",
				"eng": "Omni Disk"
			},
			"fullName": {
				"ger": "",
				"eng": "Omnipotent Disk"
			},
			"description": {
				"ger": "erhöht alle Werte im Kampf.",
				"eng": "Boost all skills in battle"
			},
			"id": "12",
			"price": 3000,
			"meritValue": 0,
			"sortingValue": 3,
			"color": 1,
			"droppable": true,
			"battle": true,
			"battleBuff":{stats:["offense","defense","speed"],amount:"+20%"}
		},
		{
			"name": {
				"ger": "Super-Kraft",
				"eng": "S.Off.disk"
			},
			"fullName": {
				"ger": "Super-Kraftdisk",
				"eng": "Super Offense Disk"
			},
			"description": {
				"ger": "stärkt Angriff im Kampf sehr.",
				"eng": "Super boost off. pwr in bat."
			},
			"id": "13",
			"price": 4000,
			"meritValue": 0,
			"sortingValue": 3,
			"color": 1,
			"droppable": true,
			"battle": true,
			"battleBuff":{stats:["offense"],amount:"+50%"}
		},
		{
			"name": {
				"ger": "Su.-Abwehr",
				"eng": "S.Def.disk"
			},
			"fullName": {
				"ger": "Super-Abwehrdisk",
				"eng": "Super Defense Disk"
			},
			"description": {
				"ger": "erhöht Abwehr im Kampf sehr.",
				"eng": "Super boost def. pwr in bat."
			},
			"id": "14",
			"price": 4000,
			"meritValue": 0,
			"sortingValue": 3,
			"color": 1,
			"droppable": true,
			"battle": true,
			"battleBuff":{stats:["defense"],amount:"+50%"}
		},
		{
			"name": {
				"ger": "Turbodisk",
				"eng": "S.speed.disk"
			},
			"fullName": {
				"ger": "",
				"eng": "Super Speed Disk"
			},
			"description": {
				"ger": "erhöht Tempo im Kampf sehr.",
				"eng": "Super boost Speed in battle"
			},
			"id": "15",
			"price": 4000,
			"meritValue": 0,
			"sortingValue": 3,
			"color": 1,
			"droppable": true,
			"battle": true,
			"battleBuff":{stats:["speed"],amount:"+50%"}
		},
		{
			"name": {
				"ger": "Autopilot",
				"eng": "Auto Pilot"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "blitzschnelle Rückkehr in die Stadt.",
				"eng": "Can return to city quickly"
			},
			"id": "16",
			"price": 300,
			"meritValue": 0,
			"sortingValue": 5,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Kraftchip",
				"eng": "Off. Chip"
			},
			"fullName": {
				"ger": "",
				"eng": "Offense Chip"
			},
			"description": {
				"ger": "erhöht Angriff dauerhaft um 50.",
				"eng": "Boost max off. pwr level +50"
			},
			"id": "17",
			"price": 9999,
			"meritValue": 800,
			"sortingValue": 4,
			"color": 0,
			"droppable": true,
			"offense": 50
		},
		{
			"name": {
				"ger": "Abwehrchip",
				"eng": "Def. Chip"
			},
			"fullName": {
				"ger": "",
				"eng": "Defense Chip"
			},
			"description": {
				"ger": "erhöht Abwehr dauerhaft um 50.",
				"eng": "Boost max def. pwr level +50"
			},
			"id": "18",
			"price": 9999,
			"meritValue": 800,
			"sortingValue": 4,
			"color": 0,
			"droppable": true,
			"defense": 50
		},
		{
			"name": {
				"ger": "IQ-Chip",
				"eng": "Brain Chip"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "erhöht Intelligenz dauerhaft um 50.",
				"eng": "Boost max Brains level +50"
			},
			"id": "19",
			"price": 9999,
			"meritValue": 800,
			"sortingValue": 4,
			"color": 0,
			"droppable": true,
			"brains": 50
		},
		{
			"name": {
				"ger": "Tempochip",
				"eng": "Quick Chip"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "erhöht Tempo dauerhaft um 50.",
				"eng": "Boost max Speed level +50"
			},
			"id": "1a",
			"price": 9999,
			"meritValue": 800,
			"sortingValue": 4,
			"color": 0,
			"droppable": true,
			"speed": 50
		},
		{
			"name": {
				"ger": "LE-Chip",
				"eng": "HP Chip"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "erhöht max. LE dauerhaft um 500.",
				"eng": "Boost max HP level +500"
			},
			"id": "1b",
			"price": 9999,
			"meritValue": 800,
			"sortingValue": 4,
			"color": 0,
			"droppable": true,
			"hp": 500
		},
		{
			"name": {
				"ger": "MP-Chip",
				"eng": "MP Chip"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "erhöht max. MP dauerhaft um 500.",
				"eng": "Boost max MP level +500"
			},
			"id": "1c",
			"price": 9999,
			"meritValue": 800,
			"sortingValue": 4,
			"color": 0,
			"droppable": true,
			"mp": 500
		},
		{
			"name": {
				"ger": "Devi-Chip A",
				"eng": "DV Chip A"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Angriff + Intelligenz +100, aber…",
				"eng": "Boost Off. Pwr+Brains +100"
			},
			"id": "1d",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true,
			"offense": 100,
			"brains": 100,
			"lifetime": -24
		},
		{
			"name": {
				"ger": "Devi-Chip D",
				"eng": "DV Chip D"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Abwehr + Tempo +100, aber…",
				"eng": "Boost Def. Pwr+Speed +100"
			},
			"id": "1e",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true,
			"defense": 100,
			"speed": 100,
			"lifetime": -24
		},
		{
			"name": {
				"ger": "Devi-Chip E",
				"eng": "DV Chip E"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "MP + LE dauerhaft +1000, aber…",
				//"eng": "Boost Off. Pwr+Speed +1000"
				"eng": "Boost HP+MP +1000"
			},
			"id": "1f",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true,
			"hp": 1000,
			"mp": 1000,
			"lifetime": -24
		},
		{
			"name": {
				"ger": "Camping-WC",
				"eng": "Port. potty"
			},
			"fullName": {
				"ger": "",
				"eng": "Portable Potty"
			},
			"description": {
				"ger": "Kann auch ben. werden, wo es k. Toilette gibt.",
				"eng": "Can do potty anywhere"
			},
			"id": "20",
			"price": 300,
			"meritValue": 0,
			"sortingValue": 5,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Trainingsplan",
				"eng": "Trn. manual"
			},
			"fullName": {
				"ger": "",
				"eng": "Training Manual"
			},
			"description": {
				"ger": "erhöht Wirksamkeit des Tr. autom.",
				"eng": "Train better with this"
			},
			"id": "21",
			"price": 9999,
			"meritValue": 0,
			"sortingValue": 5,
			"color": 0,
			"droppable": true,
			"buff":{stats:["hp","mp","offense","defense","speed","brains"],amount:"x1.1"}
		},
		{
			"name": {
				"ger": "Ruhekissen",
				"eng": "Rest pillow"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "bessere Erholung im Schlaf.",
				"eng": "More recovery during rest"
			},
			"id": "22",
			"price": 1000,
			"meritValue": 0,
			"sortingValue": 5,
			"color": 0,
			"droppable": true,
			"effect": "Improves sleep quality by 20% (HP/MP healing and tiredness reduction)."
		},
		{
			"name": {
				"ger": "Socken",
				"eng": "Enemy repel"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "hält Gegner fern.",
				"eng": "Repels enemies to stay away"
			},
			"id": "23",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 5,
			"color": 0,
			"droppable": true,
			"effect": "Makes enemies 20% more likely to run away."
		},
		{
			"name": {
				"ger": "Glocke",
				"eng": "Enemy bell"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "lockt Gegner an.",
				"eng": "Attract enemies to come"
			},
			"id": "24",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 5,
			"color": 0,
			"droppable": true,
			"effect": "Makes enemies 50% less likely to run away."

		},
		{
			"name": {
				"ger": "Reha-Treter",
				"eng": "Health shoe"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "MP+LE werden beim Gehen(nicht beim Laufen!) aufgefüllt.",
				"eng": "Walk and HP + MP go up"
			},
			"id": "25",
			"price": 2000,
			"meritValue": 0,
			"sortingValue": 5,
			"color": 0,
			"droppable": true,
			"effect": "Slow walking (holding r1) heals 5HP and 5MP per step taken."
		},
		{
			"name": {
				"ger": "Fleisch",
				"eng": "Meat"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Nahrung. Sättigt Digimon etwas.",
				"eng": "Makes Digimon a bit full"
			},
			"id": "26",
			"price": 50,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":12,
			"weight":1
		},
		{
			"name": {
				"ger": "Hüftsteak",
				"eng": "Giant Meat"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Nahrung. Sättigt Digimon.",
				"eng": "Makes Digimon quite full ."
			},
			"id": "27",
			"price": 500,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":24,
			"weight":2
		},
		{
			"name": {
				"ger": "Filet",
				"eng": "Sirloin"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Sättigt Digimon sehr.",
				"eng": "Makes Digimon very full."
			},
			"id": "28",
			"price": 1500,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":35,
			"weight":3,
			"tiredness":-5,
			"happiness":3
		},
		{
			"name": {
				"ger": "Supermöhre",
				"eng": "Supercarrot"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Nahrung. Trainingswirkung steigt kurz.",
				"eng": "Boosts training effect"
			},
			"id": "29",
			"price": 500,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":10,
			"weight":-2,
			"buff":{stats:["mp","offense","brains"],amount:"x1.2"}
		},
		{
			"name": {
				"ger": "Adlerrettich",
				"eng": "Hawk radish"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Trainingswirkung Nahrung. steigt kurz.",
				"eng": "Boosts training effect"
			},
			"id": "2a",
			"price": 500,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":15,
			"weight":3,
			"buff":{stats:["hp","defense","speed"],amount:"x1.2"}
		},
		{
			"name": {
				"ger": "Stachelkraut",
				"eng": "Spiny green"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Nahrung. Verringert Müdigkeit sehr.",
				"eng": "Greatly reduces Tiredness"
			},
			"id": "2b",
			"price": 1000,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":9,
			"weight":1,
			"tiredness":-50
		},
		{
			"name": {
				"ger": "Digipilz",
				"eng": "Digimushrm"
			},
			"fullName": {
				"ger": "",
				"eng": "Digimushroom"
			},
			"description": {
				"ger": "Nahrung. Sättigt Digimon etwas.",
				"eng": "Make Digimon a bit full"
			},
			"id": "2c",
			"price": 100,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":12,
			"weight":1
		},
		{
			"name": {
				"ger": "Frostpilz",
				"eng": "Ice mushrm"
			},
			"fullName": {
				"ger": "",
				"eng": "Ice Mushroom"
			},
			"description": {
				"ger": "Nahrung. Erhöht Disziplin sehr.",
				"eng": "Greatly boosts Discipline"
			},
			"id": "2d",
			"price": 1000,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":19,
			"weight":2,
			"discipline":50
		},
		{
			"name": {
				"ger": "Superpilz",
				"eng": "Deluxmushrm"
			},
			"fullName": {
				"ger": "",
				"eng": "Deluxe Mushroom"
			},
			"description": {
				"ger": "Nahrung. Stärkt alle Talente.",
				"eng": "Boosts all abilities"
			},
			"id": "2e",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":38,
			"weight":4,
			"hp":100,
			"mp":100,
			"offense":10,
			"defense":10,
			"speed":10,
			"brains":10
		},
		{
			"name": {
				"ger": "Digi-Kiefer",
				"eng": "Digipine"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Nahrung. Trainingswirkung steigt kurz.",
				"eng": "Boosts training effect"
			},
			"id": "2f",
			"price": 1000,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":22,
			"weight":2,
			"buff":{stats:["hp","mp","offense","defense","speed","brains"],amount:"x1.5"}
		},
		{
			"name": {
				"ger": "Blauapfel",
				"eng": "Blue apple"
			},
			"fullName": {
				"ger": "",
				"eng": "Blue Apple"
			},
			"description": {
				"ger": "Nahrung. Macht Digimon. glücklich.",
				"eng": "Makes Digimon happy"
			},
			"id": "30",
			"price": 1000,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":30,
			"weight":3,
			"happiness":50
		},
		{
			"name": {
				"ger": "Rotbeere",
				"eng": "Red Berry"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Nahrung. Verr. Müdigkeit, erhöht Disziplin + Glück!",
				"eng": "Gives rest, boost disc.+hap"
			},
			"id": "31",
			"price": 1000,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":25,
			"weight":2,
			"tiredness":-20,
			"happiness":20,
			"discipline":20
		},
		{
			"name": {
				"ger": "Goldeichel",
				"eng": "Gold Acorn"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Nahrung. Kann teuer verkauft werden.",
				"eng": "Can be sold for a high price"
			},
			"id": "32",
			"price": 8000,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":40,
			"weight":4
		},
		{
			"name": {
				"ger": "Riesenbeere",
				"eng": "Big Berry"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Nahrung. Sättigt Dig., erhöht Gewicht sehr!",
				"eng": "Makes full + boosts Weight!"
			},
			"id": "33",
			"price": 1000,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":100,
			"weight":4
		},
		{
			"name": {
				"ger": "Süßholz",
				"eng": "Sweet Nut"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Nahrung. Füllt gesamte LE auf!",
				"eng": "Recovers HP completely!"
			},
			"id": "34",
			"price": 1000,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":20,
			"weight":2,
			"healHP":9999
		},
		{
			"name": {
				"ger": "Supergemüse",
				"eng": "Super veggy"
			},
			"fullName": {
				"ger": "",
				"eng": "Super Veggy"
			},
			"description": {
				"ger": "Nahrung. Füllt sämtl. MP auf!",
				"eng": "Recovers MP completely!"
			},
			"id": "35",
			"price": 1000,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":16,
			"weight":2,
			"healMP":9999
		},
		{
			"name": {
				"ger": "Kaktusfeige",
				"eng": "Pricklypear"
			},
			"fullName": {
				"ger": "",
				"eng": "Prickly Pear"
			},
			"description": {
				"ger": "Nahrung. Senkt das Gewicht!",
				"eng": "Lowers Weight!"
			},
			"id": "36",
			"price": 1000,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":33,
			"weight":-5
		},
		{
			"name": {
				"ger": "Banane",
				"eng": "Orange bana"
			},
			"fullName": {
				"ger": "",
				"eng": "Orange Banana"
			},
			"description": {
				"ger": "Nahrung. Füllt ges. LE + MP auf.",
				"eng": "Fully recovers HP and MP"
			},
			"id": "37",
			"price": 1000,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":24,
			"weight":2,
			"healHP":1000,
			"healMP":1000
		},
		{
			"name": {
				"ger": "Kraftfrucht",
				"eng": "Power fruit"
			},
			"fullName": {
				"ger": "",
				"eng": "Power Fruit"
			},
			"description": {
				"ger": "Nahrung. Angriff +20!",
				"eng": "Boost Offensive Power +20!"
			},
			"id": "38",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":20,
			"weight":2,
			"offense":20
		},
		{
			"name": {
				"ger": "Eisriegel",
				"eng": "Power Ice"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Nahrung. Abwehr +20!",
				"eng": "Boost Defensive Power +20!"
			},
			"id": "39",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":20,
			"weight":2,
			"defense":20
		},
		{
			"name": {
				"ger": "Sprintblatt",
				"eng": "Speed Leaf"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Nahrung. Tempo +20!",
				"eng": "Boost Speed +20!"
			},
			"id": "3a",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":20,
			"weight":2,
			"speed":20
		},
		{
			"name": {
				"ger": "Frucht der W",
				"eng": "Sage Fruit"
			},
			"fullName": {
				"ger": "Frucht der Weisen",
				"eng": ""
			},
			"description": {
				"ger": "Nahrung. Intelligenz +20!",
				"eng": "Boost Brains +20!"
			},
			"id": "3b",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":20,
			"weight":2,
			"brains":20
		},
		{
			"name": {
				"ger": "Muskelknolle",
				"eng": "Muscle Yam"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Nahrung. LE +200!",
				"eng": "Boost HP by +200!"
			},
			"id": "3c",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":20,
			"weight":2,
			"hp":200
		},
		{
			"name": {
				"ger": "Friedensfruch",
				"eng": "Calm berry"
			},
			"fullName": {
				"ger": "Friedensfrucht",
				"eng": ""
			},
			"description": {
				"ger": "Nahrung. MP +200!",
				"eng": "Boost MP by +200!"
			},
			"id": "3d",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":20,
			"weight":2,
			"mp":200
		},
		{
			"name": {
				"ger": "Digisardelle",
				"eng": "Digianchovy"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Nahrung. Sättigt Digimon etwas.",
				"eng": "Makes Digimon a bit full."
			},
			"id": "3e",
			"price": 50,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":8,
			"weight":1
		},
		{
			"name": {
				"ger": "Digihering",
				"eng": "Digisnapper"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Nahrung. Sättigt Digimon.",
				"eng": "Makes Digimon quite full."
			},
			"id": "3f",
			"price": 100,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":12,
			"weight":1
		},
		{
			"name": {
				"ger": "Digiforelle",
				"eng": "DigiTrout"
			},
			"fullName": {
				"ger": "",
				"eng": "Digitrout"
			},
			"description": {
				"ger": "Nahrung. Sättigt Digimon sehr.",
				"eng": "Makes Digimon very full."
			},
			"id": "40",
			"price": 300,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":22,
			"weight":2
		},
		{
			"name": {
				"ger": "Blauforelle",
				"eng": "Black trout"
			},
			"fullName": {
				"ger": "",
				"eng": "Black Trout"
			},
			"description": {
				"ger": "Nahrung. Stärkt alle Talente.",
				"eng": "Boosts all abilities"
			},
			"id": "41",
			"price": 1000,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":27,
			"weight":-2,
			"hp":10,
			"mp":10,
			"offense":1,
			"defense":1,
			"speed":1,
			"brains":1
		},
		{
			"name": {
				"ger": "Digibarbe",
				"eng": "Digicatfish"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Nahrung. Sättigt Digimon sehr.",
				"eng": "Makes Digimon very full"
			},
			"id": "42",
			"price": 2000,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":49,
			"weight":5
		},
		{
			"name": {
				"ger": "Digibarsch",
				"eng": "Digiseabass"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Nahrung. Füllt ges. LE + MP auf, erhöht L.erwartung!",
				"eng": "Full HP and MP + life span++"
			},
			"id": "43",
			"price": 8000,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":35,
			"weight":4,
			"lifetime":3,
			"sickness":"20%",
			"healHP":9999,
			"healMP":9999
		},
		{
			"name": {
				"ger": "Gammelfl",
				"eng": "Moldy Meat"
			},
			"fullName": {
				"ger": "Gammelfleisch",
				"eng": ""
			},
			"description": {
				"ger": "Nahrung. Sättigt Digimon etwas.",
				"eng": "Makes Digimon somewhat full"
			},
			"id": "44",
			"price": 50,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":30,
			"weight":2,
			"sickness":"100%"
		},
		{
			"name": {
				"ger": "Glückspilz",
				"eng": "Happymushrm"
			},
			"fullName": {
				"ger": "",
				"eng": "Happymushroom"
			},
			"description": {
				"ger": "Nahrung. Erhöht Glück, n. ohne Risiko.",
				"eng": "Boost Happiness, but risky"
			},
			"id": "45",
			"price": 1000,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":15,
			"weight":1,
			"tiredness":-30,
			"happiness":30,
			"sickness":"30%"
		},
		{
			"name": {
				"ger": "Kettenmelone",
				"eng": "Chain melon"
			},
			"fullName": {
				"ger": "",
				"eng": "Chain Melon"
			},
			"description": {
				"ger": "Nahrung. Für vieles gut!",
				"eng": "Good for many things"
			},
			"id": "46",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 2,
			"color": 0,
			"droppable": true,
			"energy":50,
			"weight":3,
			"tiredness":-50,
			"happiness":50,
			"lifetime":20,
			"sickness":"5%"
		},
		{
			"name": {
				"ger": "Grautatze",
				"eng": "Grey Claws"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Greymon!",
				"eng": "Digivolve to Greymon!"
			},
			"location":"tournament prize",
			"id": "47",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Feuerball",
				"eng": "Fireball"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Meramon!",
				"eng": "Digivolve to Meramon!"
			},
			"location":"tournament prize",
			"id": "48",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Brandschw",
				"eng": "Flamingwing"
			},
			"fullName": {
				"ger": "Brandschwinge",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Birdramon!",
				"eng": "Digivolve to Birdramon!"
			},
			"id": "49",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Eisenhuf",
				"eng": "Iron Hoof"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Centarumon!",
				"eng": "Digivolve to Centarumon!"
			},
			"location":"tournament prize",
			"id": "4a",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Mono-Stein",
				"eng": "Mono Stone"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Monochromon!",
				"eng": "Digivolve to Monochromon!"
			},
			"location":"tournament prize",
			"id": "4b",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Stahlbohrer",
				"eng": "Steel drill"
			},
			"fullName": {
				"ger": "",
				"eng": "Steel Drill"
			},
			"description": {
				"ger": "Digimon digitiert zu Drimogenon!",
				"eng": "Digivolve to Drimogemon!"
			},
			"location":"tournament prize",
			"id": "4c",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Reißzahn",
				"eng": "White Fang"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Tyrannomon!",
				"eng": "Digivolve to Tyrannomon!"
			},
			"location":"tournament prize",
			"id": "4d",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Nachtschw",
				"eng": "Black Wing"
			},
			"fullName": {
				"ger": "Nachtschwinge",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Devimon!",
				"eng": "Digivolve to Devimon!"
			},
			"location":"tournament prize",
			"id": "4e",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Stachelkeule",
				"eng": "Spike Club"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Ogremon!",
				"eng": "Digivolve to Ogremon!"
			},
			"location":"tournament prize",
			"id": "4f",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Feuermähne",
				"eng": "Flamingmane"
			},
			"fullName": {
				"ger": "",
				"eng": "Flaming Mane"
			},
			"description": {
				"ger": "Digimon digitiert zu Leomon!",
				"eng": "Digivolve to Leomon!"
			},
			"location":"tournament prize",
			"id": "50",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Engelsschw",
				"eng": "White Wing"
			},
			"fullName": {
				"ger": "Engelsschwinge",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Angemon!",
				"eng": "Digivolve to Angemon!"
			},
			"location":"tournament prize",
			"id": "51",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Fetzen",
				"eng": "Torn tatter"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Bakemon!",
				"eng": "Digivolve to Bakemon!"
			},
			"location":"treasure hunter",
			"id": "52",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Elektroring",
				"eng": "Electo ring"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Kaminarimon!",
				"eng": "Digivolve to Kaminarimon!"
			},
			"id": "53",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Bunthorn",
				"eng": "Rainbowhorn"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Airdramon!",
				"eng": "Digivolve to Airdramon!"
			},
			"location":"shogun gekomon shop",
			"id": "54",
			"price": 5000,
			"meritValue": 500,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Hahn",
				"eng": "Rooster"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Kokatorimon!",
				"eng": "Digivolve to Kokatorimon!"
			},
			"location":"penguinmon curling prize 2%",
			"id": "55",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Uni-Horn",
				"eng": "Unihorn"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Unimon!",
				"eng": "Digivolve to Unimon!"
			},
			"location":"tournament prize",
			"id": "56",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Spitzhelm",
				"eng": "Horn helmet"
			},
			"fullName": {
				"ger": "",
				"eng": "Horn Helmet"
			},
			"description": {
				"ger": "Digimon digitiert zu Kabuterimon!",
				"eng": "Digivolve to Kabuterimon!"
			},
			"location":"beetleland tournament prize",
			"id": "57",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Scherenkief",
				"eng": "Scissor jaw"
			},
			"fullName": {
				"ger": "Scherenkiefer",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Kuwagamon!",
				"eng": "Digivolve to Kuwagamon!"
			},
			"location":"beetleland tournament prize",
			"id": "58",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Dünger",
				"eng": "Fertilizer"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Vegiemon!",
				"eng": "Digivolve to Vegiemon!"
			},
			"location":"tournament prize",
			"id": "59",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Kogas Gesetz",
				"eng": "Koga laws"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Ninjamon!",
				"eng": "Digivolve to Ninjamon!"
			},
			"location":"treasure hunter",
			"id": "5a",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Wasserfl",
				"eng": "Waterbottle"
			},
			"fullName": {
				"ger": "Wasserflasche",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Seadramon!",
				"eng": "Digivolve to Seadramon!"
			},
			"location":"shogun gekomon shop and seadramon (pre-recruitment only)",
			"id": "5b",
			"price": 5000,
			"meritValue": 500,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Nordstern",
				"eng": "North Star"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Whamon!",
				"eng": "Digivolve to Whamon!"
			},
			"location":"tournament prize",
			"id": "5c",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Rotmuschel",
				"eng": "Red Shell"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Shellmon!",
				"eng": "Digivolve to Shellmon!"
			},
			"location":"shogun gekomon shop",
			"id": "5d",
			"price": 5000,
			"meritValue": 500,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Schuppe",
				"eng": "Hard Scale"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Coelamon!",
				"eng": "Digivolve to Coelamon!"
			},
			"location":"shogun gekomon shop",
			"id": "5e",
			"price": 5000,
			"meritValue": 500,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Bl. Kristal",
				"eng": "Bluecrystal"
			},
			"fullName": {
				"ger": "Blauer Kristall",
				"eng": "Blue Crystal"
			},
			"description": {
				"ger": "Digimon digitiert zu Garurumon!",
				"eng": "Digivolve to Garurumon!"
			},
			"location":"tournament prize",
			"id": "5f",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Eiskristall",
				"eng": "Ice crystal"
			},
			"fullName": {
				"ger": "",
				"eng": "Ice Crystal"
			},
			"description": {
				"ger": "Digimon digitiert zu Frigimon!",
				"eng": "Digivolve to Frigimon!"
			},
			"location":"shogun gekomon shop",
			"id": "60",
			"price": 5000,
			"meritValue": 500,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Haarwuchsm",
				"eng": "Hair grower"
			},
			"fullName": {
				"ger": "Haarwuchsmittel",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Mojyamon!",
				"eng": "Digivolve to Mojyamon!"
			},
			"location":"trade happymushroom with mojyamon on penguinmon screen",
			"id": "61",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Sonnenbrille",
				"eng": "Sunglasses"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Nanimon!",
				"eng": "Digivolve to Nanimon!"
			},
			"location":"tournament prize",
			"id": "62",
			"price": 5000,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Metallstück",
				"eng": "Metal part"
			},
			"fullName": {
				"ger": "",
				"eng": "Metal Part"
			},
			"description": {
				"ger": "Digimon digitiert zu MetalGreymon!",
				"eng": "Digivolve to MetalGreymon!"
			},
			"location":"tournament prize",
			"id": "63",
			"price": 9999,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Schädelkn",
				"eng": "Fatal Bone"
			},
			"fullName": {
				"ger": "Schädelknochen",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu SkullGreymon!",
				"eng": "Digivolve to SkullGreymon!"
			},
			"location":"tournament prize",
			"id": "64",
			"price": 9999,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Cyberteil",
				"eng": "Cyber part"
			},
			"fullName": {
				"ger": "",
				"eng": "Cyber Part"
			},
			"description": {
				"ger": "Digimon digitiert zu Andromon!",
				"eng": "Digivolve to Andromon!"
			},
			"location":"tournament prize",
			"id": "65",
			"price": 9999,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Megahand",
				"eng": "Mega Hand"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Megadramon!",
				"eng": "Digivolve to Megadramon!"
			},
			"location":"tournament prize",
			"id": "66",
			"price": 9999,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Silberkugel",
				"eng": "Silver ball"
			},
			"fullName": {
				"ger": "",
				"eng": "Silver Ball"
			},
			"description": {
				"ger": "Digimon digitiert zu Mamemon!",
				"eng": "Digivolve to Mamemon!"
			},
			"location":"metalmamemon curling prize 2%",
			"id": "67",
			"price": 9999,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Metallrüstg",
				"eng": "Metal armor"
			},
			"fullName": {
				"ger": "Metallrüstung",
				"eng": "Metal Armor"
			},
			"description": {
				"ger": "Digimon digitiert zu MetalMamemon!",
				"eng": "Digivolve to MetalMamemon!"
			},
			"location":"metalmamemon curling prize 2%",
			"id": "68",
			"price": 9999,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Kettensäge",
				"eng": "Chainsaw"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Giromon!",
				"eng": "Digivolve to Giromon!"
			},
			"location":"metalmamemon curling prize 2%",
			"id": "69",
			"price": 9999,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Minispeer",
				"eng": "Small spear"
			},
			"fullName": {
				"ger": "",
				"eng": "Small Spear"
			},
			"description": {
				"ger": "Digimon digitiert zu Piximon!",
				"eng": "Digivolve to Piximon!"
			},
			"location":"metalmamemon curling prize 2%",
			"id": "6a",
			"price": 9999,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "X-Verband",
				"eng": "X Bandage"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Monzaemon!",
				"eng": "Digivolve to Monzaemon!"
			},
			"location":"trade Hagurumon, ToyAgumon and WaruMonzaemon cards with ClearAgumon in toy town",
			"id": "6b",
			"price": 9999,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Strahlengew",
				"eng": "Ray Gun"
			},
			"fullName": {
				"ger": "Strahlenpistole",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Vademon!",
				"eng": "Digivolve to Vademon!"
			},
			"id": "6c",
			"price": 9999,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Goldbanane",
				"eng": "Gold banana"
			},
			"fullName": {
				"ger": "",
				"eng": "Gold Banana"
			},
			"description": {
				"ger": "Digimon digitiert zu Etemon!",
				"eng": "Digivolve to Etemon!"
			},
			"location":"etemon 'shop'",
			"id": "6d",
			"price": 9999,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Zauber-Ei",
				"eng": "Mysty Egg"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Dig. digitiert zu Digitamamon!",
				"eng": "Digivolve to Digitamamon!"
			},
			"location":"chest in secret beach cave",
			"id": "6e",
			"price": 9999,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Blutrubin",
				"eng": "Red Ruby"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Phoenixmon!",
				"eng": "Digivolve to Phoenixmon!"
			},
			"location":"tournament prize", 
			"id": "6f",
			"price": 9999,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Chitinperle",
				"eng": "Beetlepearl"
			},
			"fullName": {
				"ger": "",
				"eng": "Beetle Pearl"
			},
			"description": {
				"ger": "Dig. digitiert zu HerculesKabuterimon!",
				"eng": "Digivolve to HerculesKabuterimon!"
			},
			"location":"beetleland tournament prize",
			"id": "70",
			"price": 9999,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Koralle",
				"eng": "Coral charm"
			},
			"fullName": {
				"ger": "",
				"eng": "Coral Charm"
			},
			"description": {
				"ger": "digitiert zu MegaSeadramon!",
				"eng": "Digivolve to MegaSeadramon!"
			},
			"location":"random: lose your bait while fishing, mash X",
			"id": "71",
			"price": 9999,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Mondspiegel",
				"eng": "Moon mirror"
			},
			"fullName": {
				"ger": "",
				"eng": "Moon Mirror"
			},
			"description": {
				"ger": "Dig. digitiert zu WereGarurumon!",
				"eng": "Digivolve to WereGarurumon!"
			},
			"id": "72",
			"price": 9999,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Blaue Flöte",
				"eng": "Blue Flute"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "bel. Freundschaft zu Seadramon.",
				"eng": "Seadramon friendship proof"
			},
			"id": "73",
			"price": 9999,
			"meritValue": 0,
			"sortingValue": 5,
			"color": 0,
			"droppable": false
		},
		{
			"name": {
				"ger": "Alte Angelrut",
				"eng": "old fishrod"
			},
			"fullName": {
				"ger": "Alte Angelrute",
				"eng": "Old Fishing Rod"
			},
			"description": {
				"ger": "damit kann man im See angeln!",
				"eng": "Enables you to fish at lake"
			},
			"id": "74",
			"price": 100,
			"meritValue": 0,
			"sortingValue": 5,
			"color": 0,
			"droppable": false
		},
		{
			"name": {
				"ger": "Wunderrute",
				"eng": "Amazing rod"
			},
			"fullName": {
				"ger": "",
				"eng": "Amazing Rod"
			},
			"description": {
				"ger": "sorgt für einen guten Fang im See!",
				"eng": "Gives good fishing at lake"
			},
			"id": "75",
			"price": 3000,
			"meritValue": 300,
			"sortingValue": 5,
			"color": 0,
			"droppable": false
		},
		{
			"name": {
				"ger": "Leomon-St",
				"eng": "Leomonstone"
			},
			"fullName": {
				"ger": "Leomon-Stein",
				"eng": ""
			},
			"description": {
				"ger": "Steintafel von Leomons Vorfahren.",
				"eng": "Stone Tablet of Leomon"
			},
			"id": "76",
			"price": 100,
			"meritValue": 0,
			"sortingValue": 5,
			"color": 0,
			"droppable": false
		},
		{
			"name": {
				"ger": "Villenschl",
				"eng": "Mansion key"
			},
			"fullName": {
				"ger": "Villenschlüssel",
				"eng": "Mansion Key"
			},
			"description": {
				"ger": "für die Schattenvilla.",
				"eng": "Key to Gray Lord Mansion"
			},
			"id": "77",
			"price": 100,
			"meritValue": 0,
			"sortingValue": 5,
			"color": 0,
			"droppable": false
		},
		{
			"name": {
				"ger": "Zahnrad",
				"eng": "Gear"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "???",
				"eng": "Mystery Item"
			},
			"id": "78",
			"price": 100,
			"meritValue": 0,
			"sortingValue": 5,
			"color": 0,
			"droppable": false
		},
		{
			"name": {
				"ger": "Regenfrucht",
				"eng": "Rain Plant"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Nahrung. Füllt 1000 MP auf + and. Wirkungen…",
				"eng": "Recover 1000 MP +other uses"
			},
			"id": "79",
			"price": 1000,
			"meritValue": 0,
			"sortingValue": 5,
			"color": 2,
			"droppable": true,
			"healMP":1000
		},
		{
			"name": {
				"ger": "Steak",
				"eng": "Steak"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Sättigt Digimon sehr.",
				"eng": "Makes Digimon very full"
			},
			"id": "7a",
			"price": 1000,
			"meritValue": 0,
			"sortingValue": 0,
			"color": 0,
			"droppable": true,
			"energy":32,
			"sickness":"20%",
			"healHP":1000
		},
		{
			"name": {
				"ger": "Kühlschranksc",
				"eng": "Frig Key"
			},
			"fullName": {
				"ger": "Kühlschrankschlüssel",
				"eng": ""
			},
			"description": {
				"ger": "öffnet einen Kühlschrank.",
				"eng": "Key to open Refrigerator"
			},
			"id": "7b",
			"price": 100,
			"meritValue": 0,
			"sortingValue": 5,
			"color": -1,
			"droppable": false
		},
		{
			"name": {
				"ger": "AS-Dekoder",
				"eng": "AS Decoder"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "alte Schrift lässt sich lesen!",
				"eng": "You can read Ancient Script"
			},
			"id": "7c",
			"price": 500,
			"meritValue": 0,
			"sortingValue": 5,
			"color": -1,
			"droppable": false
		},
		{
			"name": {
				"ger": "Gigahand",
				"eng": "Giga Hand"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Gigadramon!",
				"eng": "Digivolve to Gigadramon!"
			},
			"id": "7d",
			"price": 0,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Edelmähne",
				"eng": "Noble Mane"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu Panjyamon!",
				"eng": "Digivolve to Panjyamon!"
			},
			"id": "7e",
			"price": 0,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		},
		{
			"name": {
				"ger": "Metallbanane",
				"eng": "Metalbanana"
			},
			"fullName": {
				"ger": "",
				"eng": ""
			},
			"description": {
				"ger": "Digimon digitiert zu MetalEtemon!",
				"eng": "Digivolve to MetalEtemon!"
			},
			"id": "7f",
			"price": 0,
			"meritValue": 0,
			"sortingValue": 4,
			"color": 0,
			"droppable": true
		}
	];
	let props=[];
	let p;
	for(let i=0;i<items.length;i++){
		items[i].id=parseInt(items[i].id,16);
		items[i].locations=[];
		if(items[i].description.eng.indexOf("Digivolve")>-1){
			if(items[i].description.eng.indexOf("HerculesKabuterimon")>-1){
				items[i].digivolveTo="H-Kabuterimon";
			}else{
				items[i].digivolveTo=items[i].description.eng.split(" to ")[1].slice(0, -1);
			}
		}
		/*p=Object.getOwnPropertyNames(items[i]);
		for(let j=0;j<p.length;j++){
			if(props.indexOf(p[j])==-1){
				props.push(p[j]);
			}
		}*/
	}
	//console.log(props);
	/*
	there are still a few sub-functions I have to check, some of which I know to take the position into account
but I doubt that they're relevant for this case
to document it here, the chance for a Digimon fight you is:
(A row represents your Digimon's type)

     |  D  | Vac | Vir |
  D  | 60% | 70% | 100%|
 Vac | 80% | 60% | 100%|
 Vir | 80% | 100%| 30% |
No guarantees though, I might have flipped the table or so :S
Oh and having an Enemy Repel takes 20% from it, while and Enemy Bell adds 50% to it

slow walk (holding r1) heals 5hp and 5mp per step taken

RestFactor = (SleptHours / MeanHours) * PillowFactor * AreaFactor
PillowFactor = if hasRestPillow then 1.2 else 1
AreaFactor = if likesArea then 1.2 else if dislikesArea then 0.8 else 1

HP/MP Regen = (0.7 + random(0 to 0.1)) * RestFactor * maxHP
Tiredness Reduction = (80 + random(0 to 20) * RestFactor


-----------------------------------------------------------------------------------------------------------------------
const props=[];
props[0]="name";
​props[1]="fullName";
​props[2]="description";
​props[3]="id";
​props[4]="price";
​props[5]="meritValue";
​props[6]="sortingValue";
​props[7]="color";
​props[8]="droppable";
​props[9]="healHP";				hp+heart?
​props[10]="locations";				
​props[11]="healMP";				mp+heart
​props[12]="healStatus";			?
​props[13]="healInjury";			bandage?
​props[14]="healSickness";		syringe?
​props[15]="buff";				-arrow up
​props[16]="offense";			off+plus
​props[17]="defense";		""
​props[18]="brains";		""
​props[19]="speed";		""
​props[20]="hp";				""
​props[21]="mp";				""
​props[22]="lifetime";			HEART?
​props[23]="effect";				------------->SHOW TEXT
​props[24]="energy";				???
​props[25]="weight";				MEAT
​props[26]="tiredness";			SWEATDROPS
​props[27]="happiness";			HAPPINESSSMILEY
​props[28]="discipline";			DISCIPLINE EMOTE
​props[29]="sickness";			ALSO SYRINGE?
​props[30]="location";
*/