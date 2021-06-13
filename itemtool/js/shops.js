/*const bigShop1Clerk=
	[
		"sm.recovery",
		"med.recovery",
		"MP Floppy",
		"Various",
		"Off. Disk",
		"Def. Disk",
		"Hispeed dsk",
		"Auto Pilot",
		"Port. potty",
		"Meat"
	]
;

const bigShop2Clerks=["MP Floppy"];//2shopkeeps
const bigShop3Clerks=["lrg.recovery"];//3shopkeeps
const bigShop4Clerks=//all shopkeeps
	[
		"Large MP",
		"Double flop",
		"Restore"
	]
;
*/
const bigShop1Clerk=
	[
		0,
		1,
		4,
		8,
		15,
		16,
		17,
		22,
		32,
		38
	]
;
const bigShop2Clerks=5;//2shopkeeps
const bigShop3Clerks=2;//3shopkeeps
const bigShop4Clerks=//all shopkeeps
	[
		6,
		7,
		11
	]
;
const shops=
	[
		{
			"shopkeeper":"Betamon / Coelamon",
			"map":189,
			"items":
				[
					"sm.recovery",
					"MP Floppy",
					"Meat"
				]
		},
		{
			"shopkeeper":"Betamon & Coelamon",
			"map":189,
			"items":
				[
					"sm.recovery",
					"med.recovery",
					"MP Floppy",
					"Various",
					"Auto Pilot",
					"Meat"
				]
		},
		{
			"shopkeeper":"Monochromon",
			"map":216,
			"items":
				[
					"Protection"
				]
		},
		{
			"shopkeeper":"Unimon",
			"map":216,
			"items":
				[
					"Sup.restore"
				]
		},
		{
			"shopkeeper":"Biyomon",
			"map":216,
			"items":
				[
					"sup.recovery"
				]
		},
		{
			"shopkeeper":"Patamon",
			"map":216,
			"items":
				[
					"Omnipotent"
				]
		},
		{
			"shopkeeper":"recycleShop",
			"map":131,
			"items":
				[
					"med.recovery",
					"Medium MP",
					"Off. Disk",
					"Def. Disk",
					"Hispeed dsk",
					"Auto Pilot",
					"Giant Meat"
				]
		},
		{
			"shopkeeper":"Numemon",
			"map":217,
			"items":
				[
					"Enemy repel",
					"Enemy bell"
				]
		},
		{
			"shopkeeper":"Mojyamon",
			"map":217,
			"items":
				[
					"Rest pillow",
					"Health shoe"
				]
		},
		{
			"shopkeeper":"Mamemon",
			"map":217,
			"items":
				[
					"Omni Disk",
					"S.Off.disk",
					"S.Def.disk",
					"S.speed.disk"
				]
		},
		{
			"shopkeeper":"Devimon",
			"map":217,
			"items":
				[
					"DV Chip A",
					"DV Chip D",
					"DV Chip E"
				]
		},
];

const specialShops=[
		{
			"shopkeeper":"ShogunGekomon",
			"map":141,
			"items":
				[
					{
						"item":"sup.recovery",
						"meritPoints":20
					},
					{
						"item":"Sup.restore",
						"meritPoints":100
					},
					{
						"item":"Off. Chip",
						"meritPoints":800
					},
					{
						"item":"Def. Chip",
						"meritPoints":800
					},
					{
						"item":"Brain Chip",
						"meritPoints":800
					},
					{
						"item":"Quick Chip",
						"meritPoints":800
					},
					{
						"item":"HP Chip",
						"meritPoints":800
					},
					{
						"item":"MP Chip",
						"meritPoints":800
					},
					{
						"item":"Rainbowhorn",
						"meritPoints":500
					},
					{
						"item":"Waterbottle",
						"meritPoints":500
					},
					{
						"item":"Red Shell",
						"meritPoints":500
					},
					{
						"item":"Hard Scale",
						"meritPoints":500
					},
					{
						"item":"Ice crystal",
						"meritPoints":500
					},
					{
						"item":"Amazing rod",
						"meritPoints":300
					}
				]
		},
		{
			"shopkeeper":"Piximon",
			"map":216,
			"items":
				[
					{
						"item":"Trn. manual",
						"price":50000
					}
				]
		},
		{
			"shopkeeper":"Centarumon",
			"map":213,
			"items":
				[
					{
						"item":"Bandage",
						"price":400
					},
					{
						"item":"Medicine",
						"price":1200
					}
				]
		},
		{
			"shopkeeper":"Etemon",
			"map":9,
			"items":
				[
					{
						"item":"Gold banana",
						"price":50000
					}
				]
		},
		{
			"shopkeeper":"Palmon",
			"map":169,
			"items":
				[
					{"item":"Giant Meat"}
				]
		},
		{
			"shopkeeper":"Vegiemon",
			"map":170,
			"items":
				[
					{"item":"Supercarrot"},
					{"item":"Hawk radish"}
				]
		}	
	]
;
const vendingMachines=[

		{
			"shopkeeper":"Vending Machine Dragon Eye Lake",
			"map":8,
			"items":
				[
					{
						"item":"Meat",
						"price":300
					},
					{
						"item":"Digimushrm",
						"price":600
					}
				]
		},
		{
			"shopkeeper":"Vending Machine Ancient Glacial Region",
			"map":81,
			"items":
				[
					{
						"item":"Moldy Meat",
						"price":200,
						"chance":20
					},
					{
						"item":"Meat",
						"price":200,
						"chance":30
					},
					{
						"item":"sm.recovery",
						"price":200,
						"chance":20
					},
					{
						"item":"MP Floppy",
						"price":200,
						"chance":30
					}
				]
		},
		{
			"shopkeeper":"Vending Machine Gear Savanna",
			"map":74,
			"note":
				"9% Chance of Double flop when buying Port. potty",
			"items":
				[
					{
						"item":"sm.recovery",
						"price":200
					},
					{
						"item":"Port. potty",
						"price":500
					},
					{
						"item":"Double flop",
						"price":0,
						"chance":9
					}
				]
		}	
	]
;
let temp;
for(let shop in shops){
	for(let s=0;s<shops[shop].items.length;s++){
		temp=items.find(x => x.name.eng==shops[shop].items[s]);
		if(temp==undefined){
			console.log(shops[shop].items[s]);
		}else{
			shops[shop].items[s]=temp.id;
		}
	}
}
console.log(shops);
for(let shop in specialShops){
	for(let s=0;s<specialShops[shop].items.length;s++){
		temp=items.find(x => x.name.eng==specialShops[shop].items[s].item);
		if(temp==undefined){
			console.log(specialShops[shop].items[s]);
		}else{
			specialShops[shop].items[s].item=temp.id;
		}
	}
}
//alert(JSON.stringify(shops));
/*
Anchovy - None
Snapper - None
DigiTrout - Happy Mushroom
BlackTrout - DigiTrout
DigiCatfish - Moldy Meat
DigiSeabass - DigiCatfish
*/
const fishing=[
	{
		"id":62,
		"favourite": "anything"
	},
	{
		"id":63,
		"favourite": "anything"
	},
	{
		"id":64,
		"favourite": "Happy Mushroom"
	},
	{
		"id":65,
		"favourite": "DigiTrout"
	},
	{
		"id":66,
		"favourite": "Moldy Meat"
	},
	{
		"id":67,
		"favourite": "DigiCatfish"
	}
];
const fishingLuck=[
	{
		"id":0,
		"item":"sm.recovery",
		"chance":35
	},
	{
		"id":8,
		"item":"Various",
		"chance":28
	},
	{
		"id":11,
		"item":"Restore",
		"chance":20
	},
	{
		"id":18,
		"item":"Omni Disk",
		"chance":10
	},
	{
		"id":22,
		"item":"Auto Pilot",
		"chance":5
	},
	{
		"id":113,
		"item":"Coral charm",
		"chance":2
	}
];
const curlingPenguinmon={


"items":
[
{
	id:85,
	chance:2
},
{
	id:11,
	chance:10
},
{
	id:18,
	chance:20
},
{
	id:39,
	chance:14
},
{
	id:2,
	chance:16
},
{
	id:5,
	chance:38
}]};
const curlingMetalMamemon={


"items":
[
{
	id:103,
	chance:2
},
{
	id:104,
	chance:2
},
{
	id:105,
	chance:2
},
{
	id:106,
	chance:2
},
{
	id:3,
	chance:16
},
{
	id:11,
	chance:20
},
{
	id:9,
	chance:24
},
{
	id:40,
	chance:32
}]};
const drimogemon3={
"shopkeeper":"Drimogemon",
			"map":209,
			"items":
			[
				{
					"id":90,
					"item":"Koga laws",
					"chance":1
				},
				{
					"id":73,
					"item":"Flamingwing",
					"chance":1
				},
				{
					"id":82,
					"item":"Torn tatter",
					"chance":1
				},
				{
					"id":3,
					"item":"sup.recovery",
					"chance":10
				},
				{
					"id":11,
					"item":"Restore",
					"chance":3
				},
				{
					"id":9,
					"item":"Omnipotent",
					"chance":4
				},
				{
					"id":10,
					"item":"Protection",
					"chance":4
				},
				{
					"id":6,
					"item":"Large MP",
					"chance":10
				},
				{
					"id":19,
					"item":"S.Off.disk",
					"chance":4
				},
				{
					"id":20,
					"item":"S.Def.disk",
					"chance":4
				},
				{
					"id":21,
					"item":"S.speed.disk",
					"chance":4
				},
				{
					"id":18,
					"item":"Omni Disk",
					"chance":54
				}
			]
		};

const drimogemon10={
"shopkeeper":"Drimogemon",
			"map":209,
			"items":
			[
				{
					"id":23,
					"item":"Off. Chip",
					"chance":1
				},
				{
					"id":27,
					"item":"HP Chip",
					"chance":1
				},
				{
					"id":25,
					"item":"Brain Chip",
					"chance":1
				},
				{
					"id":24,
					"item":"Def. Chip",
					"chance":1
				},
				{
					"id":28,
					"item":"MP Chip",
					"chance":1
				},
				{
					"id":26,
					"item":"Quick Chip",
					"chance":1
				},
				{
					"id":90,
					"item":"Koga laws",
					"chance":1
				},
				{
					"id":73,
					"item":"Flamingwing",
					"chance":1
				},
				{
					"id":82,
					"item":"Torn tatter",
					"chance":1
				},
				{
					"id":3,
					"item":"sup.recovery",
					"chance":12
				},
				{
					"id":11,
					"item":"Restore",
					"chance":9
				},
				{
					"id":9,
					"item":"Omnipotent",
					"chance":70
				}
			]
		};

const itemGivers={
	"Seadramon":[
		"Blue Flute",
		"Waterbottle"
	],
	"WaruMonzaemon":[
		"Gear"
	],
	"Jijimon":[
		"Chain melon"
	],
	"Tanemon":[
		"Rain Plant"
	],
	"Myotismon":[
		"Steak",
		"Frig Key",
		"Mansion key"
	],
	"Tokomon":[
		"sm.recovery",
		"Meat",
		"MP Floppy",
		"Restore",
		"Bandage",
		"Medicine"
	],
	"Drimogemon":[
		"Leomonstone"
	],
	"Mojyamon":[
		"S.Off.disk",	//"Omnipotent"
		"S.Def.disk",	//"med.recovery"
		"S.speed.disk",	//"Digianchovy"
		"Auto Pilot",	//"Giant Meat"
		"Restore",		//"Black trout"
		"Medicine",		//"Hispeed dsk"
		"med.recovery",	//"Digimushrm"
		"Omnipotent",	//"Supercarrot"
		"Hair grower"	//"Happymushrm"
	],
	"Cherrymon":[
		"Digiseabass"
	],
	"Sukamon":[
		"old fishrod"
	],
	"ClearAgumon":[
		"X Bandage"
	]
};

let temp1;
let temp2;
for(let item of fishing){
	items.find(x => x.id==item.id).locations.push({name:"fishing",text:`Easiest to catch using ${item.favourite} as bait`});
}
for(let item in fishingLuck){
	items.find(x => x.id==fishingLuck[item].id).locations.push({name:"fishing",text:fishingLuck[item].chance+"% chance"});
}
for(let item in drimogemon3.items){
	items.find(x => x.id==drimogemon3.items[item].id).locations.push({name:"Drimogemon",text:`3days treasure hunt ${drimogemon3.items[item].chance}% chance`});
}
for(let item in drimogemon10.items){
	temp1=items.find(x => x.id==drimogemon10.items[item].id);
	temp2=temp1.locations.find(x => x.name=="Drimogemon");
	if(temp2!==undefined){
		temp2.text+=`
		10days treasure hunt ${drimogemon10.items[item].chance}% chance`;
	}else{
		temp1.locations.push({name:"Drimogemon",text:`10days treasure hunt ${drimogemon10.items[item].chance}% chance`});
	}
}
for(let item in curlingPenguinmon.items){
	items.find(x => x.id==curlingPenguinmon.items[item].id).locations.push({name:"Penguinmon",text:`Penguinmon curling ${curlingPenguinmon.items[item].chance}% chance`});
}
for(let item in curlingMetalMamemon.items){
	items.find(x => x.id==curlingMetalMamemon.items[item].id).locations.push({name:"MetalMamemon",text:`MetalMamemon curling ${curlingMetalMamemon.items[item].chance}% chance`});
}


for(let shop in shops){
	for(let item in shops[shop].items){
		temp1=items.find(x => x.id==shops[shop].items[item]);
		if(shops[shop].shopkeeper.indexOf("Betamon")>-1){
			if(shops[shop].shopkeeper.indexOf(" / ")>-1){
				temp1.locations.push({name:"Betamon",text:`Buyable in Betamon shop for ${temp1.price}Bits`});
				temp1.locations.push({name:"Coelamon",text:`Buyable in Coelamon shop for ${temp1.price}Bits`});
			}else{
				if(temp1.locations.find(x=>x.name=="Betamon")==undefined){
				temp1.locations.push({name:"Betamon",text:`Buyable in shop with Betamon and Coelamon for ${temp1.price}Bits`});
				temp1.locations.push({name:"Coelamon",text:`Buyable in shop with Betamon and Coelamon for ${temp1.price}Bits`});
				}
			}
		}else{
			temp1.locations.push({name:shops[shop].shopkeeper,text:`Buyable in ${shops[shop].shopkeeper} shop for ${temp1.price}Bits`});
		}
		//
	}
}
//alert(JSON.stringify(specialShops));
for(let specialShop in specialShops){
	for(let item in specialShops[specialShop].items){
		//console.log(specialShops[specialShop].items[item]);
		temp1=items.find(x => x.id==specialShops[specialShop].items[item].item);
		if(specialShops[specialShop].items[item].price!==undefined){
			temp1.locations.push({name:specialShops[specialShop].shopkeeper,text:`Buyable in ${specialShops[specialShop].shopkeeper} shop for ${specialShops[specialShop].items[item].price}Bits`});
		}else if(specialShops[specialShop].shopkeeper=="ShogunGekomon"){
			temp1.locations.push({name:specialShops[specialShop].shopkeeper,text:`Buyable in ${specialShops[specialShop].shopkeeper} shop for ${temp1.meritValue}Merit Points`});
		}else{	
			console.log(temp1);
			temp1.locations.push({name:specialShops[specialShop].shopkeeper,text:`Buyable in ${specialShops[specialShop].shopkeeper} shop for ${temp1.price}Bits`});
		}
	}
}
for(let b=0;b<bigShop1Clerk.length;b++){
	temp1=items.find(x => x.id==bigShop1Clerk[b]);
	temp1.locations.push({name:"bigShop",text:`Buyable in Big Shop for ${temp1.price}Bits`});
}
temp1=items.find(x => x.id==bigShop2Clerks);
temp1.locations.push({name:"bigShop",text:`Buyable in Big Shop with at least 2 clerks for ${temp1.price}Bits`});

temp1=items.find(x => x.id==bigShop3Clerks);
temp1.locations.push({name:"bigShop",text:`Buyable in Big Shop with at least 3 clerks for ${temp1.price}Bits`});

for(let b=0;b<bigShop4Clerks.length;b++){
	temp1=items.find(x => x.id==bigShop4Clerks[b]);
	temp1.locations.push({name:"bigShop",text:`Buyable in Big Shop with at least 4 clerks for ${temp1.price}Bits`});
}
/*


const bigShop1Clerk=
	[
		"sm.recovery",
		"med.recovery",
		"MP Floppy",
		"Various",
		"Off. Disk",
		"Def. Disk",
		"Hispeed dsk",
		"Auto Pilot",
		"Port. potty",
		"Meat"
	]
;
const bigShop2Clerks=["MP Floppy"];//2shopkeeps
const bigShop3Clerks=["lrg.recovery"];//3shopkeeps
const bigShop4Clerks=//all shopkeeps
	[
		"Large MP",
		"Double flop",
		"Restore"
	]
;

const tournamentNames=[];
tournamentNames[0]={letter:"D",name:"Grade D",description:" - Grade D -\nContest featuring\nRookie Digimon\n\nSingle match, three rounds\neight contestants.\nQualifications ? none.\n";
tournamentNames[1]={letter:"C",name:"Grade C",description:" - Grade C -\nContest featuring\nChampion Digimon\n\nSingle match, three rounds\neight contestants.\nQualifications ? none.\n"};
tournamentNames[2]={letter:"B",name:"Grade B",description:" - Grade B -\nContest featuring\nChampion Digimon\n\nSingle match, three rounds\neight contestants.\nQualifications ? none.\n"};
tournamentNames[3]={letter:"A",name:"Grade A",description:" - Grade A -\nContest featuring\nUltimate Digimon\n\nSingle match, three rounds\neight contestants.\nQualifications ? none.\n"};
tournamentNames[4]={letter:"S",name:"Grade S",description:" - Grade S -\nContest for\nstrongest Digimon\n\nSingle match, three rounds\neight contestants.\nMust be Grade A winner.\n"};
tournamentNames[6]={letter:"H",name:"Version One Cup",description:" - Version One Cup -\nTime-restricted match for\ntop version one Digimon\n\nSingle match, three rounds\neight contestants.\nMust be version one Digimon.\n"};
tournamentNames[7]={letter:"I",name:"Version Two Cup",description:" - Version Two Cup -\nTime-restricted match for\ntop version two Digimon\n\nSingle match, three rounds\neight contestants.\nMust be version two Digimon.\n"};
tournamentNames[8]={letter:"J",name:"Version Three Cup",description:" - Version Three Cup -\nTime-restricted match for\ntop version three Digimon\n\nSingle match, three rounds\neight contestants. Must be\nversion three Digimon.\n"};
tournamentNames[9]={letter:"K",name:"Version Four Cup",description:" - Version Four Cup -\nTime-restricted match for\ntop version four Digimon\n\nSingle match, three rounds\neight contestants. Must be\nversion four Digimon.\n"};
tournamentNames[10]={letter:"L",name:"Version Zero Cup",description:" - Version Zero Cup -\nTime-restricted match for\ntop Digimon not in\nversions one ? four.\nSingle match, three rounds\neight contestants. Digimons\nnot versions one ? four.\n"};
tournamentNames[11]={letter:"F",name:"Fire Cup",description:" - Fire Cup -\nTime-restricted match for\nKing of Blazing Digimon\n\nSingle match, three rounds\neight contestants. Must be\nDigimon of flaming nature.\n"};
tournamentNames[12]={letter:"G",name:"Grappling Cup",description:" - Grappling Cup -\nTime-restricted match for\nKing of Combative Sport\n\nSingle match, three rounds\neight contestants. Digimon\nmust have a combative nature.\n"};
tournamentNames[13]={letter:"W (T)",name:"Thunder Cup",description:" - Thunder Cup -\nTime-restricted match for\nKing of Atmospheric Digimon\n\nSingle match, three rounds\neight contestants. Must be a\natmospheric nature Digimon.\n"};
tournamentNames[14]={letter:"O",name:"Cool Cup",description:" - Cool Cup -\nTime-restricted match for\nKing of cool Digimon\n\nSingle match, three rounds\neight contestants. Must be\nDigimon of an icy nature.\n"};
tournamentNames[15]={letter:"N",name:"Nature Cup",description:" - Nature Cup -\nTime-restricted match for the\nKing of Naturalist Digimon\n\nSingle match, three rounds\neight contestants. Must be\na nature-oriented Digimon.\n"};
tournamentNames[16]={letter:"M",name:"Mech Cup",description:" - Mech Cup -\nTimed match for King of\nExtreme Android Digimon\n\nSingle match, three rounds\neight contestants. Must be\na mechanical nature Digimon.\n"};
tournamentNames[17]={letter:"T",name:"Filthy Cup",description:" - Filthy Cup -\nTime-restricted match for\nKing of Filthy Digimon\n\nSingle match, three rounds\neight contestants. Must be\na filthy nature Digimon.\n"};
tournamentNames[18]={letter:"Y",name:"Dino Cup",description:" - Dino Cup -\nTime-restricted match for\nDigimon of ancient bloodline\n\nSingle match, three rounds\neight contestants.\nQualifications --  ? ? ?\n"};
tournamentNames[19]={letter:"W (W)",name:"Wing Cup",description:" - Wing Cup -\nDigimon with wings\ncompete for strength\n\nSingle match, three rounds\neight contestants.\nQualifications --  ? ? ?\n"};
tournamentNames[20]={letter:"Z",name:"Animal Cup",description:" - Animal Cup -\nTime-restricted match for\nDigimon of beastly bloodline\n\nSingle match, three rounds\neight contestants.\nQualifications --  ? ? ?\n"};
tournamentNames[21]={letter:"X",name:"Humanoid Cup",description:" - Humanoid Cup -\nTime-restricted match for\nhumanoid Digimon\n\nSingle match, three rounds\neight contestants.\nQualifications --  ? ? ?\n"};
tournamentNames[22]={letter:"BUG",name:"Beetle Cup",description:"On the twenty second,\nthere's a tournament for\nInsectoid Digimon only.\n"};

const tournaments=[
{"id":"0","secondPlace":{"money":500,"itemName":"Two Giant Meat","item":39,"amount":2},"firstPlace":{"money":2000,"itemName":"Double Floppy","item":7,"amount":1}},
{"id":"1","secondPlace":{"money":1000,"itemName":"Sirloin","item":40,"amount":1},"firstPlace":{"money":4000,"itemName":"Three Sirloins","item":40,"amount":3}},
{"id":"2","secondPlace":{"money":2000,"itemName":"Large MP Floppy","item":6,"amount":1},"firstPlace":{"money":6000,"itemName":"Restore Floppy","item":11,"amount":1}},
{"id":"3","secondPlace":{"money":3000,"itemName":"Restore Floppy","item":11,"amount":1},"firstPlace":{"money":8000,"itemName":"Flaming Mane ","item":80,"amount":1}},
{"id":"4","secondPlace":{"money":4000,"itemName":"Super Restore Floppy","item":12,"amount":1},"firstPlace":[
{"money":10000,"itemName":"Metal Part","item":99,"amount":1},
{"money":10000,"itemName":"Fatal Bone","item":100,"amount":1},
{"money":10000,"itemName":"Mega Hand","item":102,"amount":1}],
{"id":"6","secondPlace":{"money":2000,"itemName":"Super Recovery Floppy","item":3,"amount":1},"firstPlace":{"money":5000,"itemName":"White Fang","item":77,"amount":1}},
{"id":"7","secondPlace":{"money":2000,"itemName":"Super Recovery Floppy","item":3,"amount":1},"firstPlace":{"money":5000,"itemName":"Blue Crystal","item":95,"amount":1}},
{"id":"8","secondPlace":{"money":2000,"itemName":"Super Recovery Floppy","item":3,"amount":1},"firstPlace":{"money":5000,"itemName":"Iron Hoof ","item":74,"amount":1}},
{"id":"9","secondPlace":{"money":2000,"itemName":"Super Recovery Floppy","item":3,"amount":1},"firstPlace":{"money":5000,"itemName":"Monochrome Stone","item":75,"amount":1}},
{"id":"10","secondPlace":{"money":2000,"itemName":"Super Recovery Floppy","item":3,"amount":1},"firstPlace":{"money":5000,"itemName":"Red Ruby","item":111,"amount":1}},
{"id":"11","secondPlace":{"money":3000,"itemName":"Omnipotent Floppy","item":9,"amount":1},"firstPlace":{"money":8000,"itemName":"Fireball","item":72,"amount":1}},
{"id":"12","secondPlace":{"money":3000,"itemName":"Omnipotent Floppy","item":9,"amount":1},"firstPlace":{"money":8000,"itemName":"Spike Club","item":79,"amount":1}},
{"id":"13","secondPlace":{"money":3000,"itemName":"Omnipotent Floppy","item":9,"amount":1},"firstPlace":{"money":8000,"itemName":"Unihorn","item":86,"amount":1}},
{"id":"14","secondPlace":{"money":3000,"itemName":"Omnipotent Floppy","item":9,"amount":1},"firstPlace":{"money":8000,"itemName":"North Star","item":92,"amount":1}},
{"id":"15","secondPlace":{"money":3000,"itemName":"Omnipotent Floppy","item":9,"amount":1},"firstPlace":{"money":8000,"itemName":"Fertilizer","item":89,"amount":1}},
{"id":"16","secondPlace":{"money":3000,"itemName":"Omnipotent Floppy","item":9,"amount":1},"firstPlace":{"money":8000,"itemName":"Cyber Parts","item":101,"amount":1}},
{"id":"17","secondPlace":{"money":3000,"itemName":"Omnipotent Floppy ","item":9,"amount":1},"firstPlace":{"money":8000,"itemName":"Sunglasses","item":98,"amount":1}},
{"id":"18","secondPlace":{"money":2000,"itemName":"Omnipotent Disk","item":18,"amount":1},"firstPlace":{"money":5000,"itemName":"Grew Claws","item":71,"amount":1}},
{"id":"19","secondPlace":{"money":2000,"itemName":"Omnipotent Disk","item":18,"amount":1},"firstPlace":{"money":5000,"itemName":"White Wing","item":81,"amount":1}},
{"id":"20","secondPlace":{"money":2000,"itemName":"Omnipotent Disk","item":18,"amount":1},"firstPlace":{"money":5000,"itemName":"Steel Drill","item":76,"amount":1}},
{"id":"21","secondPlace":{"money":2000,"itemName":"Omnipotent Disk","item":18,"amount":1},"firstPlace":{"money":5000,"itemName":"Black Wing","item":78,"amount":1}}
{"id":"21","secondPlace":[
{"money":2000,"itemName":"Horn Helmet","item":87,"amount":1},
{"money":2000,"itemName":"Scissor Jaw","item":88,"amount":1}],
"firstPlace":{"money":5000,"itemName":"Beetle Pearl","item":112,"amount":1}}
];
const participationPrize="Giant Meat";
const schedule=
	[
		["D","C","B","A","Y"],
		["D","C","B","F"],
		["D","C","A","H"],
		["D","C","B","G"],
		["D","B","A","I"],
		["C","W (T)"],
		["D","C","B","A","S","J"],
		["D","C","B","N"],
		["D","C","A","K"],
		["D","B","W (W)"],
		["D","C","B","A","O"],
		["C","L"],
		["D","C","B","A","M"],
		["D","C","B","S","T"],
		["D","A"],
		["D","C","B","F"],
		["D","C","B","A","H"],
		["C","G"],
		["D","C","B","A","I"],
		["D","B","Z"],
		["D","C","A","S","W (T)"],
		["D","C","B","J"],
		["D","C","B","A","N"],
		["C","K"],
		["D","B","A","X"],
		["D","C","B","O"],
		["D","C","A","L"],
		["D","C","B","S","M"],
		["D","C","B","A","T"]
	];


	"Steak": "Can be gathered infinite times during Myotismon quest but is gone once you give one to Myotismon to finish it."
"Rain Plant": "Grows in pot on file city top screen every month on the 15th, can be used to recruit Vegiemon if Palmon has been recruited and city prosperity is above 10, talk to Tanemon (must be awake) to trigger event." (add link to recruitment tool?)


*/