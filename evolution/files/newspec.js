function getSpecialOutput(target) {
	switch(target) {
		case 'Devimon':
			return "Lose a battle with your Angemon while having <50% discipline and you'll have a 50% chance to evolve into Devimon.";
		case 'Numemon':
			return "Make sure you have no other evolution enabled and you'll evolve into Numemon after between 72h and 96h on the Rookie level. Lowers current stats by 20%.";
		case 'Sukamon':
			return 'Fill your virus bar by pooping on the ground. The virus bar is full at 16 poops and carries over.';
		case 'Nanimon':
			return 'Bring happiness and discipline to 0 and scold your Digimon. The easiest way to do so is praising/scolding and then reducing the last bit of discipline by overfeeding. The fly/flower condition will increase your happiness and prevents you from getting this evolution!';
		case 'Vademon':
			return 'Make sure you have no other evolution enabled and you can evolve into Vademon when praising/scolding your Digimon after 240h on the Champion level.';
		case 'Kunemon':
			return "Sleep in Kunemon's bed and you'll have a 50% chance to evolve into Kunemon.";
		default:
			return '';
	}
}

function isSpecialEvolution(target) {
	switch(target) {
		case 'Devimon':
		case 'Numemon':
		case 'Sukamon':
		case 'Nanimon':
		case 'Vademon':
		case 'Kunemon':
			return true;
		default:
			return false;
	}
}
function uDigimon(name){
	this.name=name;
	this.targets=[];
}
function populate() {

var EvolutionPaths = {};
var Digimons = {};
var dInTraining=[new uDigimon("Koromon"),new uDigimon("Poyomon"),new uDigimon("Tsunomon"),new uDigimon("Yuramon")];
var dRookie=[],dChampion=[],dUltimate=[];

dRookie=[new uDigimon("Agumon"),new uDigimon("Gabumon"),new uDigimon("Patamon"),new uDigimon("Elecmon"),new uDigimon("Biyomon"),new uDigimon("Kunemon"),new uDigimon("Palmon"),new uDigimon("Betamon"),new uDigimon("Penguinmon")];
for(var r=0;r<dRookie.length;r++){
	dRookie[r].targets=EvolutionPaths[dRookie[r]];
}
dChampion=[new uDigimon("Greymon"),new uDigimon("Meramon"),new uDigimon("Birdramon"),new uDigimon("Centarumon"),new uDigimon("Monochromon"),new uDigimon("Drimogemon"),new uDigimon("Tyrannomon"),new uDigimon("Devimon"),new uDigimon("Ogremon"),new uDigimon("Leomon"),new uDigimon("Angemon"),new uDigimon("Bakemon"),new uDigimon("Airdramon"),new uDigimon("Kokatorimon"),new uDigimon("Unimon"),new uDigimon("Kabuterimon"),new uDigimon("Kuwagamon"),new uDigimon("Vegiemon"),new uDigimon("Ninjamon"),new uDigimon("Seadramon"),new uDigimon("Whamon"),new uDigimon("Shellmon"),new uDigimon("Coelamon"),new uDigimon("Garurumon"),new uDigimon("Frigimon"),new uDigimon("Mojyamon"),new uDigimon("Numemon"),new uDigimon("Sukamon"),new uDigimon("Nanimon")];
for(var r=0;r<dChampion.length;r++){
	dChampion[r].targets=EvolutionPaths[dChampion[r]];
}

dUltimate=[new uDigimon("MetalGreymon"),new uDigimon("Andromon"),new uDigimon("SkullGreymon"),new uDigimon("Megadramon"),new uDigimon("Giromon"),new uDigimon("Phoenixmon"),new uDigimon("H-Kabuterimon"),new uDigimon("Piximon"),new uDigimon("MetalMamemon"),new uDigimon("Mamemon"),new uDigimon("MegaSeadramon"),new uDigimon("Monzaemon"),new uDigimon("Vademon"),new uDigimon("Digitamamon"),new uDigimon("Etemon")];
for(var r=0;r<dUltimate.length;r++){
	dUltimate[r].targets=EvolutionPaths[dUltimate[r]];
}


}
function uDigimon(name){
	this.targets=[];
}
function populate() {

var EvolutionPaths = {};
var Digimons = {};
var dInTraining=["Koromon","Poyomon","Tsunomon","Yuramon"];
var dRookie=[],dChampion=[],dUltimate=[];

dRookie=['Agumon','Gabumon','Patamon','Elecmon','Biyomon','Kunemon','Palmon','Betamon','Penguinmon'];

dChampion=['Greymon','Meramon','Birdramon','Centarumon','Monochromon','Drimogemon','Tyrannomon','Devimon','Ogremon','Leomon','Angemon','Bakemon','Airdramon','Kokatorimon','Unimon','Kabuterimon','Kuwagamon','Vegiemon','Ninjamon','Seadramon','Whamon','Shellmon','Coelamon','Garurumon','Frigimon','Mojyamon','Numemon','Sukamon','Nanimon'];

dUltimate=['MetalGreymon','Andromon','SkullGreymon','Megadramon','Giromon','Phoenixmon','H-Kabuterimon','Piximon','MetalMamemon','Mamemon','MegaSeadramon','Monzaemon','Vademon','Digitamamon','Etemon'];
for(var r=0;r<dRookie.length;r++){
	EvolutionPaths[dRookie[r]]
}
}


















Evolution:	Any rookie ⇒ Bakemon
Condition:	Lose a life (battle or illness)
Comment:	Store all items in the bank in order to prevent theft; Save before losing a life in order to 
retry upon fail.
10% chance of success.


Evolution:	Seadramon ⇒ Airdramon
Condition:	Sleep while discipline = 100; happiness = 100;  tiredness = 0. 
	30% chance of success.(Conclusion from our tests still to be confirmed)

Evolution:	Birdramon ⇒ Airdramon
Condition:	Sleep while discipline = 100; happiness = 100;  tiredness = 0. 
	30% chance of success.(Conclusion from our tests still to be confirmed)

Evolution:	Whamon ⇒ Coelamon (⇒ Megaseadramon)
Condition:	Scold or praise during the 200th hour as Whamon.
Comment:	Coelamon will digivolve to Megaseadramon as a result of a battles and care mistakes 
reset, Coelamons target weight and a lack of evolution age reset.

Evolution:	Shellmon ⇒ Coelamon (⇒ Megaseadramon) 
Condition:	Scold or praise during the 200th hour as Shellmon.
Comment:	Coelamon will digivolve to Megaseadramon as a result of battles, care mistakes 
reset, Coelamons target weight and a lack of evolution age reset.

Evolution:	Vegimon ⇒ Ninjamon
Condition:	Sleep while discipline = 100; battles fought = 50+.
30% chance of success.

Evolution:	Drimogemon ⇒ Monochromon
Condition:	Sleep while discipline = 100; defense = 500+.
Comment:	Evolution age does not get reset upon digivolution.
30% chance of success.
Champion ⇒ Ultimate

Evolution:	Any Champion ⇒ Vademon
Condition:	Praise after 240h in champion form. Reaching 360h in champion.

Evolution:	Kokatorimon ⇒ Phoenixmon
Condition:	Lose a life (battle or illness).
Comment:	Store all items in the bank in order to prevent theft; Save before losing a life in order to 
retry upon fail.
10% chance of success.
Ultimate ⇒ Ultimate

Evolution:	MetalGreymon ⇒ SkullGreymon
Condition:	Lose a life (battle or illness).
Comment:	Store all items in the bank in order to prevent theft; Save before losing a life in order to 
retry upon fail.
10% chance of success.

Evolution:	Megadramon ⇒ SkullGreymon
Condition:	Lose a life (battle or illness).
Comment:	Store all items in the bank in order to prevent theft; Save before losing a life in order to 
retry upon fail.
10% chance of success.

Evolution:	Mamemon -> MetalMamemon
Condition:	Talk to the single Guardromon located in the top room, near the left wall, of Factorial 
Town and he'll offer you to "remodel" your Digimon for 2000 bits. 
Comment:	Save beforehand in order to retry upon fail or Giromon.
45% chance of success; 10% chance of Giromon; 45% chance of a fail.

Evolution:	Mamemon -> Giromon
Condition:	Talk to the single Guardromon located in the top room, near the left wall, of Factorial 
Town and he'll offer you to "remodel" your Digimon for 2000 bits. 
Comment:	Save beforehand in order to retry upon fail or Metalmamemon..
10% chance of success; 45% chance of a MetalMamemon; 45% chance of a fail.
Champion ⇒ Any digimon

Evolution:	Sukamon ⇒ pre Sukamon digimon
Condition:	Talk to King Sukamon at Trash Mountain.
Comment:	After a first time he will be angry with you and instantly revert you back with asking. 
The stats will be reverted back to the moment he became Sukamon and you will gain 
50% of the stats gained while being a Sukamon.