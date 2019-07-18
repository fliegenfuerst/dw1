function Digimon(name, statsGains, requirements) {
	this.name = name;
	this.statsGains = statsGains;
	this.requirements = requirements;
	this.getEvolutionStats = function() {
		var string = '';
		if (requirements.hp != 0) {
			string += 'HP ' + requirements.hp + ', ';
		}
		if (requirements.mp != 0) {
			string += 'MP ' + requirements.mp + ', ';
		}
		if (requirements.offense != 0) {
			string += 'Offense ' + requirements.offense + ', ';
		}
		if (requirements.defense != 0) {
			string += 'Defense ' + requirements.defense + ', ';
		}
		if (requirements.speed != 0) {
			string += 'Speed ' + requirements.speed + ', ';
		}
		if (requirements.brains != 0) {
			string += 'Brains ' + requirements.brains + '. ';
		}
			string = string.substring(0, string.length - 2);
			string += '.<br>';
		if (requirements.care != 0) {
			if (requirements.minCare) {
				string += 'You are allowed to make up to ' + requirements.care + ' care mistakes.<br>';
			} else {
				string += 'You need at least ' + requirements.care + ' care mistakes.<br>';
			}
		}
		if (requirements.weight != 0) {
			var weig = requirements.weight - 5;
			string += 'Target weight: ' + weig + '-';
			weig += 10;
			string += weig + '.<br>';
		}
		if (requirements.happiness != 0) {
			string += 'Target Happiness: ' + requirements.happiness + '.<br>';
		}
		if (requirements.discipline != 0) {
			string += 'Target Discipline: ' + requirements.discipline + '.<br>';
		}
		if (requirements.techs != 0) {
			string += 'No. of Techs: ' + requirements.techs + '.<br>';
		}
		if(requirements.battles > -1){
			if (requirements.minBattles) {
				string += 'Max No. of Battles: ' + requirements.battles + '.<br>';
			} else {
				string += 'Min No. of Battles: ' + requirements.battles + '.<br>';
			}
		}
		if (requirements.digimonBonus != ('' || undefined)) {
			string += 'BonusDigimon: ' + requirements.digimonBonus + '.<br>';
		}
		return string == '' ? 'none' : string;
	};
}

function EvolutionRequirements(hp, mp, offense, defense, speed, brains, care, weight, discipline, happiness, battles, techs, minCare, minBattles, digimonBonus) {
	this.hp = hp;
	this.mp = mp;
	this.offense = offense;
	this.defense = defense;
	this.speed = speed;
	this.brains = brains;
	this.care = care;
	this.weight = weight;
	this.happiness = happiness;
	this.discipline = discipline;
	this.techs = techs;
	this.battles = battles;
	this.minBattles = minBattles;
	this.minCare = minCare;
	this.digimonBonus = digimonBonus;
}

function StatsGains(hp, mp, offense, defense, speed, brains) {
	this.hp = hp;
	this.mp = mp;
	this.offense = offense;
	this.defense = defense;
	this.speed = speed;
	this.brains = brains;
}

function EvolutionPath(targets) {
	this.targets = targets;
	this.canEvolveTo = function(digimon) {
		for (var v in targets) {
			if (targets[v] == digimon) {
				return true;
			}
		}
		return false;
	};
}
function uDigimon(name){
	this.name=name;
	this.sources=[];
	this.getOpt=function(){
		var	div="";
		div = div + "<option class='digimon' style='background-image: url(";
		div = div + '"./img/'+this.name+'.gif")';
		div = div + "'>" + this.name + "</option>";
		return div;
	}
}

var dInTraining;
var dRookie;
var dChampion;

dInTraining=[new uDigimon("Koromon"),new uDigimon("Tokomon"),new uDigimon("Tsunomon"),new uDigimon("Tanemon")];
dRookie=[new uDigimon("Agumon"),new uDigimon("Gabumon"),new uDigimon("Patamon"),new uDigimon("Elecmon"),new uDigimon("Biyomon"),new uDigimon("Palmon"),new uDigimon("Betamon"),new uDigimon("Penguinmon"),new uDigimon("Kunemon")];
dChampion=[new uDigimon("Greymon"),new uDigimon("Meramon"),new uDigimon("Birdramon"),new uDigimon("Centarumon"),new uDigimon("Monochromon"),new uDigimon("Drimogemon"),new uDigimon("Tyrannomon"),new uDigimon("Ogremon"),new uDigimon("Leomon"),new uDigimon("Angemon"),new uDigimon("Bakemon"),new uDigimon("Airdramon"),new uDigimon("Kokatorimon"),new uDigimon("Unimon"),new uDigimon("Kabuterimon"),new uDigimon("Kuwagamon"),new uDigimon("Vegiemon"),new uDigimon("Ninjamon"),new uDigimon("Seadramon"),new uDigimon("Whamon"),new uDigimon("Shellmon"),new uDigimon("Coelamon"),new uDigimon("Garurumon"),new uDigimon("Frigimon"),new uDigimon("Mojyamon"),new uDigimon("Numemon"),new uDigimon("Sukamon"),new uDigimon("Nanimon")];

var dUltimate=[new uDigimon("MetalGreymon"),new uDigimon("Andromon"),new uDigimon("SkullGreymon"),new uDigimon("Megadramon"),new uDigimon("Giromon"),new uDigimon("Phoenixmon"),new uDigimon("Devimon"),new uDigimon("H-Kabuterimon"),new uDigimon("Piximon"),new uDigimon("MetalMamemon"),new uDigimon("Mamemon"),new uDigimon("MegaSeadramon"),new uDigimon("Monzaemon"),new uDigimon("Digitamamon"),new uDigimon("Etemon"),new uDigimon("Vademon")];
/* Define all Evolution paths in order of priority. */

function populate() {
	EvolutionPaths = [];
	Digimons = {};

	EvolutionPaths['Botamon'] = new EvolutionPath(['Koromon', 'Sukamon']);
	EvolutionPaths['Poyomon'] = new EvolutionPath(['Tokomon', 'Sukamon']);
	EvolutionPaths['Punimon'] = new EvolutionPath(['Tsunomon', 'Sukamon']);
	EvolutionPaths['Yuramon'] = new EvolutionPath(['Tanemon', 'Sukamon']);
	
	EvolutionPaths['Koromon'] = new EvolutionPath(['Agumon', 'Gabumon', 'Kunemon', 'Sukamon']);
	EvolutionPaths['Tokomon'] = new EvolutionPath(['Patamon', 'Biyomon', 'Kunemon', 'Sukamon']);
	EvolutionPaths['Tsunomon'] = new EvolutionPath(['Elecmon', 'Penguinmon', 'Kunemon', 'Sukamon']);
	EvolutionPaths['Tanemon'] = new EvolutionPath(['Palmon', 'Betamon', 'Kunemon', 'Sukamon']);

	EvolutionPaths['Agumon'] = new EvolutionPath(['Greymon', 'Meramon', 'Birdramon', 'Centarumon', 'Monochromon', 'Tyrannomon', 'Numemon', 'Nanimon', 'Sukamon']);
	EvolutionPaths['Gabumon'] = new EvolutionPath(['Centarumon', 'Monochromon', 'Drimogemon', 'Tyrannomon', 'Ogremon', 'Garurumon', 'Numemon', 'Nanimon', 'Sukamon']);
	EvolutionPaths['Patamon'] = new EvolutionPath(['Drimogemon', 'Tyrannomon', 'Ogremon', 'Leomon', 'Angemon', 'Unimon', 'Numemon', 'Nanimon', 'Sukamon']);
	EvolutionPaths['Elecmon'] = new EvolutionPath(['Leomon', 'Angemon', 'Bakemon', 'Kokatorimon', 'Numemon', 'Nanimon', 'Sukamon']);
	EvolutionPaths['Biyomon'] = new EvolutionPath(['Birdramon', 'Airdramon', 'Kokatorimon', 'Unimon', 'Kabuterimon', 'Numemon', 'Nanimon', 'Sukamon']);
	EvolutionPaths['Kunemon'] = new EvolutionPath(['Bakemon', 'Kabuterimon', 'Kuwagamon', 'Vegiemon', 'Numemon', 'Nanimon', 'Sukamon']);
	EvolutionPaths['Palmon'] = new EvolutionPath(['Kuwagamon', 'Vegiemon', 'Ninjamon', 'Whamon', 'Coelamon', 'Numemon', 'Nanimon', 'Sukamon']);
	EvolutionPaths['Betamon'] = new EvolutionPath(['Seadramon', 'Whamon', 'Shellmon', 'Coelamon', 'Numemon', 'Nanimon', 'Sukamon']);
	EvolutionPaths['Penguinmon'] = new EvolutionPath(['Whamon', 'Shellmon', 'Garurumon', 'Frigimon', 'Mojyamon', 'Numemon', 'Nanimon', 'Sukamon']);

	EvolutionPaths['Greymon'] = new EvolutionPath(['MetalGreymon', 'SkullGreymon', 'Vademon', 'Sukamon']);
	EvolutionPaths['Meramon'] = new EvolutionPath(['MetalGreymon', 'Andromon', 'Vademon', 'Sukamon']);
	EvolutionPaths['Birdramon'] = new EvolutionPath(['Phoenixmon', 'Vademon', 'Sukamon']);
	EvolutionPaths['Centarumon'] = new EvolutionPath(['Andromon', 'Giromon', 'Vademon', 'Sukamon']);
	EvolutionPaths['Monochromon'] = new EvolutionPath(['MetalGreymon', 'MetalMamemon', 'Vademon', 'Sukamon']);
	EvolutionPaths['Drimogemon'] = new EvolutionPath(['MetalGreymon', 'Vademon', 'Sukamon']);
	EvolutionPaths['Tyrannomon'] = new EvolutionPath(['MetalGreymon', 'Megadramon', 'Vademon', 'Sukamon']);
	EvolutionPaths['Devimon'] = new EvolutionPath(['SkullGreymon', 'Megadramon', 'Vademon', 'Sukamon']);
	EvolutionPaths['Ogremon'] = new EvolutionPath(['Andromon', 'Giromon', 'Vademon', 'Sukamon']);
	EvolutionPaths['Leomon'] = new EvolutionPath(['Andromon', 'Mamemon', 'Vademon', 'Sukamon']);
	EvolutionPaths['Angemon'] = new EvolutionPath(['Andromon', 'Phoenixmon', 'Devimon', 'Vademon', 'Sukamon']);
	EvolutionPaths['Bakemon'] = new EvolutionPath(['SkullGreymon', 'Giromon', 'Vademon', 'Sukamon']);
	EvolutionPaths['Airdramon'] = new EvolutionPath(['Megadramon', 'Phoenixmon', 'Vademon', 'Sukamon']);
	EvolutionPaths['Kokatorimon'] = new EvolutionPath(['Phoenixmon', 'Piximon', 'Vademon', 'Sukamon']);
	EvolutionPaths['Unimon'] = new EvolutionPath(['Giromon', 'Phoenixmon', 'Vademon', 'Sukamon']);
	EvolutionPaths['Kabuterimon'] = new EvolutionPath(['H-Kabuterimon', 'MetalMamemon', 'Vademon', 'Sukamon']);
	EvolutionPaths['Kuwagamon'] = new EvolutionPath(['H-Kabuterimon', 'Piximon', 'Vademon', 'Sukamon']);
	EvolutionPaths['Vegiemon'] = new EvolutionPath(['Piximon', 'Vademon', 'Sukamon']);
	EvolutionPaths['Ninjamon'] = new EvolutionPath(['Piximon', 'MetalMamemon', 'Mamemon', 'Vademon', 'Sukamon']);
	EvolutionPaths['Seadramon'] = new EvolutionPath(['Megadramon', 'MegaSeadramon', 'Vademon', 'Sukamon']);
	EvolutionPaths['Whamon'] = new EvolutionPath(['MegaSeadramon', 'Mamemon', 'Vademon', 'Sukamon']);
	EvolutionPaths['Shellmon'] = new EvolutionPath(['H-Kabuterimon', 'MegaSeadramon', 'Vademon', 'Sukamon']);
	EvolutionPaths['Coelamon'] = new EvolutionPath(['MegaSeadramon', 'Vademon', 'Sukamon']);
	EvolutionPaths['Garurumon'] = new EvolutionPath(['SkullGreymon', 'MegaSeadramon', 'Vademon', 'Sukamon']);
	EvolutionPaths['Frigimon'] = new EvolutionPath(['MetalMamemon', 'Mamemon', 'Vademon', 'Sukamon']);
	EvolutionPaths['Mojyamon'] = new EvolutionPath(['SkullGreymon', 'Mamemon', 'Vademon', 'Sukamon']);
	EvolutionPaths['Numemon'] = new EvolutionPath(['Monzaemon', 'Vademon', 'Sukamon']);
	EvolutionPaths['Sukamon'] = new EvolutionPath(['Etemon', 'Vademon']);
	EvolutionPaths['Nanimon'] = new EvolutionPath(['Digitamamon', 'Vademon', 'Sukamon']);

	EvolutionPaths['MetalGreymon'] = new EvolutionPath([]);
	EvolutionPaths['Andromon'] = new EvolutionPath([]);
	EvolutionPaths['SkullGreymon'] = new EvolutionPath([]);
	EvolutionPaths['Megadramon'] = new EvolutionPath([]);
	EvolutionPaths['Giromon'] = new EvolutionPath([]);
	EvolutionPaths['Phoenixmon'] = new EvolutionPath([]);
	EvolutionPaths['H-Kabuterimon'] = new EvolutionPath([]);
	EvolutionPaths['Piximon'] = new EvolutionPath([]);
	EvolutionPaths['MetalMamemon'] = new EvolutionPath([]);
	EvolutionPaths['Mamemon'] = new EvolutionPath([]);
	EvolutionPaths['MegaSeadramon'] = new EvolutionPath([]);
	EvolutionPaths['Monzaemon'] = new EvolutionPath([]);
	EvolutionPaths['Vademon'] = new EvolutionPath([]);
	EvolutionPaths['Digitamamon'] = new EvolutionPath([]);
	EvolutionPaths['Etemon'] = new EvolutionPath([]);

	/* define all Digimon and their stats/statgains */

	//Digimons['name'] = new Digimon('Name', new StatsGains(HP, MP, Off, Def, Spd, Brains), (hp, mp, offense, defense, speed, brains, care, weight, discipline, happiness, battles, techs, minCare, minBattles, digimonBonus));
	//Digimons['name'] = new Digimon('Name', new StatsGains(HP, MP, Off, Def, Spd, Brains), new EvolutionRequirements(HP, MP, Off, Def, Spd, Brains, Care, Weight, battles, techs, Happy, Disc, minBattles, minCare, digimonBonus));
	Digimons['Botamon'] = new Digimon('Botamon', new StatsGains(0, 0, 0, 0, 0, 0), new EvolutionRequirements(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, false, false));
	Digimons['Koromon'] = new Digimon('Koromon', new StatsGains(0, 0, 0, 0, 0, 0), new EvolutionRequirements(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, false, false));
	Digimons['Poyomon'] = new Digimon('Poyomon', new StatsGains(0, 0, 0, 0, 0, 0), new EvolutionRequirements(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, false, false));
	Digimons['Punimon'] = new Digimon('Punimon', new StatsGains(0, 0, 0, 0, 0, 0), new EvolutionRequirements(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, false, false));
	Digimons['Tanemon'] = new Digimon('Tanemon', new StatsGains(0, 0, 0, 0, 0, 0), new EvolutionRequirements(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, false, false));
	Digimons['Tokomon'] = new Digimon('Tokomon', new StatsGains(0, 0, 0, 0, 0, 0), new EvolutionRequirements(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, false, false));
	Digimons['Tsunomon'] = new Digimon('Tsunomon', new StatsGains(0, 0, 0, 0, 0, 0), new EvolutionRequirements(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, false, false));
	Digimons['Yuramon'] = new Digimon('Yuramon', new StatsGains(0, 0, 0, 0, 0, 0), new EvolutionRequirements(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, false, false));


	Digimons['Agumon'] = new Digimon('Agumon', new StatsGains(1000, 500, 100, 50, 50, 50), new EvolutionRequirements(10, 10, 1, 0, 0, 0, 0, 0, 0, 0, -1, 0, false, false));
	Digimons['Betamon'] = new Digimon('Betamon', new StatsGains(1000, 500, 50, 100, 50, 50), new EvolutionRequirements(10, 10, 0, 1, 0, 0, 0, 15, 0, 0, -2, 0, false, false, 'Tanemon'));
	Digimons['Biyomon'] = new Digimon('Biyomon', new StatsGains(500, 1000, 50, 50, 100, 50), new EvolutionRequirements(0, 10, 0, 1, 1, 0, 0, 15, 0, 0, -2, 0, false, false, 'Tokomon'));
	Digimons['Elecmon'] = new Digimon('Elecmon', new StatsGains(500, 500, 100, 50, 100, 50), new EvolutionRequirements(10, 0, 1, 0, 1, 0, 0, 15, 0, 0, -2, 0, false, false, 'Tsunomon'));
	Digimons['Gabumon'] = new Digimon('Gabumon', new StatsGains(500, 500, 50, 100, 100, 50), new EvolutionRequirements(0, 0, 0, 1, 1, 1, 0, 15, 0, 0, -2, 0, false, false, 'Koromon'));
	Digimons['Kunemon'] = new Digimon('Kunemon', new StatsGains(1000, 1000, 50, 50, 50, 50), new EvolutionRequirements(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, false, false));
	Digimons['Palmon'] = new Digimon('Palmon', new StatsGains(500, 1000, 50, 50, 50, 100), new EvolutionRequirements(0, 10, 0, 0, 1, 1, 0, 15, 0, 0, -2, 0, false, false, 'Tanemon'));
	Digimons['Patamon'] = new Digimon('Patamon', new StatsGains(500, 500, 100, 50, 50, 100), new EvolutionRequirements(10, 0, 1, 0, 0, 1, 0, 15, 0, 0, -2, 0, false, false, 'Tokomon'));
	Digimons['Penguinmon'] = new Digimon('Penguinmon', new StatsGains(500, 500, 50, 100, 50, 100), new EvolutionRequirements(0, 10, 0, 1, 0, 1, 0, 15, 0, 0, -2, 0, false, false, 'Tsunomon'));


	Digimons['Airdramon'] = new Digimon('Airdramon', new StatsGains(1500, 2000, 150, 150, 200, 200), new EvolutionRequirements(0, 1000, 0, 0, 100, 100, 1, 30, 90, 0, -1, 35, true, false));
	Digimons['Angemon'] = new Digimon('Angemon', new StatsGains(1500, 2000, 150, 150, 150, 250), new EvolutionRequirements(0, 1000, 0, 0, 0, 100, 0, 20, 0, 0, -1, 35, true, false, 'Patamon'));
	Digimons['Bakemon'] = new Digimon('Bakemon', new StatsGains(1500, 2500, 150, 100, 150, 100), new EvolutionRequirements(0, 1000, 0, 0, 0, 0, 3, 20, 0, 50, -1, 28, false, false));
	Digimons['Birdramon'] = new Digimon('Birdramon', new StatsGains(1500, 1500, 150, 100, 250, 150), new EvolutionRequirements(0, 0, 0, 0, 100, 0, 3, 20, 0, 0, -1, 35, false, false, 'Biyomon'));
	Digimons['Centarumon'] = new Digimon('Centarumon', new StatsGains(1500, 1500, 150, 150, 150, 250), new EvolutionRequirements(0, 0, 0, 0, 0, 100, 3, 30, 60, 0, -1, 28, true, false));
	Digimons['Coelamon'] = new Digimon('Coelamon', new StatsGains(1500, 1500, 150, 200, 150, 150), new EvolutionRequirements(0, 0, 0, 100, 0, 0, 3, 30, 0, 0, 5, 35, false, true));
	Digimons['Devimon'] = new Digimon('Devimon', new StatsGains(0, 0, 0, 0, 0, 0), new EvolutionRequirements(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, false, false));
	Digimons['Drimogemon'] = new Digimon('Drimogemon', new StatsGains(1500, 1500, 250, 150, 150, 150), new EvolutionRequirements(0, 0, 100, 0, 0, 0, 3, 40, 0, 50, -1, 28, false, false));
	Digimons['Frigimon'] = new Digimon('Frigimon', new StatsGains(1500, 2000, 100, 150, 150, 200), new EvolutionRequirements(0, 1000, 0, 0, 0, 100, 5, 30, 0, 50, -1, 28, true, false));
	Digimons['Garurumon'] = new Digimon('Garurumon', new StatsGains(1500, 1500, 150, 200, 150, 150), new EvolutionRequirements(0, 1000, 0, 0, 100, 0, 1, 30, 90, 0, -1, 28, true, false));
	Digimons['Greymon'] = new Digimon('Greymon', new StatsGains(2000, 1500, 200, 200, 200, 200), new EvolutionRequirements(0, 0, 100, 100, 100, 100, 1, 30, 90, 0, -1, 35, true, false));
	Digimons['Kabuterimon'] = new Digimon('Kabuterimon', new StatsGains(2000, 1500, 200, 200, 200, 100), new EvolutionRequirements(1000, 1000, 100, 0, 100, 0, 1, 30, 0, 0, -1, 35, true, false, 'Kunemon'));
	Digimons['Kokatorimon'] = new Digimon('Kokatorimon', new StatsGains(2500, 1500, 100, 150, 150, 150), new EvolutionRequirements(1000, 0, 0, 0, 0, 0, 3, 30, 0, 0, -1, 28, false, false, 'Biyomon'));
	Digimons['Kuwagamon'] = new Digimon('Kuwagamon', new StatsGains(2000, 2000, 200, 150, 200, 100), new EvolutionRequirements(1000, 1000, 100, 0, 100, 0, 5, 30, 0, 0, -1, 28, false, false, 'Kunemon'));
	Digimons['Leomon'] = new Digimon('Leomon', new StatsGains(1500, 1500, 250, 150, 200, 200), new EvolutionRequirements(0, 0, 100, 0, 100, 100, 1, 20, 0, 0, 10, 35, true, false));
	Digimons['Meramon'] = new Digimon('Meramon', new StatsGains(1000, 1500, 250, 150, 150, 150), new EvolutionRequirements(0, 0, 100, 0, 0, 0, 5, 20, 0, 0, 10, 28, false, false));
	Digimons['Mojyamon'] = new Digimon('Mojyamon', new StatsGains(2000, 1500, 150, 150, 150, 150), new EvolutionRequirements(1000, 0, 0, 0, 0, 0, 5, 20, 0, 0, 5, 28, false, true));
	Digimons['Monochromon'] = new Digimon('Monochromon', new StatsGains(2000, 1500, 150, 250, 150, 200), new EvolutionRequirements(1000, 0, 0, 100, 0, 100, 3, 40, 0, 0, 5, 35, true, true));
	Digimons['Nanimon'] = new Digimon('Nanimon', new StatsGains(0, 0, 0, 0, 0, 0), new EvolutionRequirements(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, false, false));
	Digimons['Ninjamon'] = new Digimon('Ninjamon', new StatsGains(1500, 2000, 200, 150, 200, 150), new EvolutionRequirements(0, 1000, 100, 0, 100, 0, 1, 10, 0, 0, 15, 35, true, false));
	Digimons['Numemon'] = new Digimon('Numemon', new StatsGains(0, 0, 0, 0, 0, 0), new EvolutionRequirements(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, false, false));
	Digimons['Ogremon'] = new Digimon('Ogremon', new StatsGains(2500, 1000, 250, 150, 150, 100), new EvolutionRequirements(1000, 0, 100, 0, 0, 0, 5, 30, 0, 0, 15, 35, false, false));
	Digimons['Seadramon'] = new Digimon('Seadramon', new StatsGains(2000, 2000, 150, 150, 100, 150), new EvolutionRequirements(1000, 1000, 0, 0, 0, 0, 3, 30, 0, 0, 5, 28, false, true));
	Digimons['Shellmon'] = new Digimon('Shellmon', new StatsGains(2000, 1500, 150, 250, 100, 100), new EvolutionRequirements(1000, 0, 0, 100, 0, 0, 5, 40, 0, 0, -1, 35, false, false, 'Betamon'));
	Digimons['Sukamon'] = new Digimon('Sukamon', new StatsGains(0, 0, 0, 0, 0, 0), new EvolutionRequirements(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, false, false));
	Digimons['Tyrannomon'] = new Digimon('Tyrannomon', new StatsGains(2000, 1500, 150, 200, 150, 150), new EvolutionRequirements(1000, 0, 0, 100, 0, 0, 5, 30, 0, 0, 5, 28, true, true));
	Digimons['Unimon'] = new Digimon('Unimon', new StatsGains(2000, 1500, 150, 150, 200, 150), new EvolutionRequirements(1000, 0, 0, 0, 100, 0, 3, 30, 0, 0, 10, 35, true, false));
	Digimons['Vegiemon'] = new Digimon('Vegiemon', new StatsGains(1500, 2000, 100, 150, 150, 100), new EvolutionRequirements(0, 1000, 0, 0, 0, 0, 5, 10, 0, 50, -1, 21, false, false));
	Digimons['Whamon'] = new Digimon('Whamon', new StatsGains(2500, 1500, 100, 150, 100, 200), new EvolutionRequirements(1000, 0, 0, 0, 0, 100, 5, 40, 60, 0, -1, 28, true, false));

	Digimons['Andromon'] = new Digimon('Andromon', new StatsGains(4000, 6000, 400, 600, 400, 600), new EvolutionRequirements(2000, 4000, 200, 400, 200, 400, 5, 40, 95, 0, 30, 30, true, false));
	Digimons['Digitamamon'] = new Digimon('Digitamamon', new StatsGains(5000, 5000, 600, 600, 600, 500), new EvolutionRequirements(3000, 3000, 400, 400, 400, 300, 0, 10, 0, 0, 100, 49, true, false));
	Digimons['Etemon'] = new Digimon('Etemon', new StatsGains(4000, 5000, 600, 400, 600, 500), new EvolutionRequirements(2000, 3000, 400, 200, 400, 300, 0, 15, 0, 0, 50, 49, true, false));
	Digimons['Giromon'] = new Digimon('Giromon', new StatsGains(3000, 3000, 600, 600, 500, 600), new EvolutionRequirements(0, 0, 400, 0, 300, 400, 15, 5, 0, 95, 100, 35, false, false));
	Digimons['H-Kabuterimon'] = new Digimon('H-Kabuterimon', new StatsGains(5000, 5000, 500, 500, 500, 500), new EvolutionRequirements(7000, 0, 400, 600, 400, 0, 5, 55, 0, 0, 0, 40, true, true));
	Digimons['Mamemon'] = new Digimon('Mamemon', new StatsGains(3000, 3000, 600, 500, 500, 600), new EvolutionRequirements(0, 0, 400, 300, 300, 400, 15, 5, 0, 90, -1, 25, false, false));
	Digimons['Megadramon'] = new Digimon('Megadramon', new StatsGains(6000, 6000, 600, 500, 600, 500), new EvolutionRequirements(3000, 5000, 500, 300, 400, 400, 10, 55, 0, 0, 30, 30, true, false));
	Digimons['MegaSeadramon'] = new Digimon('MegaSeadramon', new StatsGains(3000, 6000, 600, 600, 300, 600), new EvolutionRequirements(0, 4000, 500, 400, 0, 400, 5, 30, 0, 0, 0, 40, true, true));
	Digimons['MetalGreymon'] = new Digimon('MetalGreymon', new StatsGains(5000, 5000, 500, 500, 500, 500), new EvolutionRequirements(4000, 3000, 500, 500, 300, 300, 10, 65, 95, 0, 30, 30, true, false));
	Digimons['MetalMamemon'] = new Digimon('MetalMamemon', new StatsGains(3000, 3000, 600, 600, 600, 500), new EvolutionRequirements(0, 0, 500, 400, 400, 400, 15, 10, 0, 95, -1, 30, true, false));
	Digimons['Monzaemon'] = new Digimon('Monzaemon', new StatsGains(5000, 5000, 500, 500, 500, 500), new EvolutionRequirements(3000, 3000, 300, 300, 300, 300, 0, 40, 0, 0, 50, 49, true, false));
	Digimons['Phoenixmon'] = new Digimon('Phoenixmon', new StatsGains(6000, 6000, 400, 400, 600, 600), new EvolutionRequirements(4000, 4000, 0, 0, 400, 600, 3, 30, 100, 0, 0, 40, true, true));
	Digimons['Piximon'] = new Digimon('Piximon', new StatsGains(3000, 3000, 500, 500, 600, 600), new EvolutionRequirements(0, 0, 300, 300, 400, 400, 15, 5, 0, 95, -1, 25, false, false));
	Digimons['SkullGreymon'] = new Digimon('SkullGreymon', new StatsGains(5000, 5000, 600, 600, 400, 400), new EvolutionRequirements(4000, 6000, 400, 400, 200, 500, 10, 30, 0, 0, 40, 45, false, false));
	Digimons['Vademon'] = new Digimon('Vademon', new StatsGains(5000, 5000, 500, 500, 500, 500), new EvolutionRequirements(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, false, false));
}

function getSpecialOutput(target) {
	switch(target) {
		case 'Devimon':
			return "Lose a battle with your Angemon while having <50% discipline and you'll have a chance to evolve into Devimon.";
		case 'Numemon':
			return "Make sure you have no other evolution enabled and you'll evolve into Numemon after 96h on the Rookie level.";
		case 'Sukamon':
			return 'Fill your virus bar by pooping on the ground.';
		case 'Nanimon':
			return 'Bring happiness and discipline to 0 and scold your Digimon. The easiest way to do so is praising/scolding and then reducing the last bit of discipline by overfeeding. The fly/flower condition will increase your happiness and prevents you from getting this evolution!';
		case 'Vademon':
			return 'Make sure you have no other evolution enabled and you can evolve into Vademon when praising/scolding your Digimon after 240h on the Champion level.';
		case 'Kunemon':
			return "Sleep in Kunemon's bed and you'll have a chance to evolve into Kunemon.";
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
function alphabetical(a, b){
    var A = a.name.toLowerCase();
    var B = b.name.toLowerCase();
    if (A < B) {
        return -1;
    }else 
        if (A > B) {
            return 1;
        }else {
            return 0;
        }
}


function check() {
	populate();

var longest=0;
var longT;


for(var r=0;r<dInTraining.length;r++){
	for(var c=0;c<EvolutionPaths[dInTraining[r].name].targets.length;c++){

		var tStr=EvolutionPaths[dInTraining[r].name].targets[c];
		for(var f=0;f<dRookie.length;f++){
			if(tStr==dRookie[f].name){
				dRookie[f].sources.push(dInTraining[r]);
				break;
			}
		}
	}
}

dRookie.sort(alphabetical);

for(var r=0;r<dRookie.length;r++){
	for(var c=0;c<EvolutionPaths[dRookie[r].name].targets.length;c++){
		var tStr2=EvolutionPaths[dRookie[r].name].targets[c];
		for(var fR=0;fR<dChampion.length;fR++){
			if(tStr2==dChampion[fR].name){
				dChampion[fR].sources.push(dRookie[r]);
				break;
			}
		}
	}
}

dChampion.sort(alphabetical);

for(var r=0;r<dChampion.length;r++){
	for(var c=0;c<EvolutionPaths[dChampion[r].name].targets.length;c++){
		var tStr=EvolutionPaths[dChampion[r].name].targets[c];
		for(var f=0;f<dUltimate.length;f++){
			if(tStr==dUltimate[f].name){
				dUltimate[f].sources.push(dChampion[r]);
				break;
			}
		}
	}
}

dUltimate.sort(alphabetical);

getUltimatesR();
getChampionsC();
getRookiesRook();
	var div = '';
	//common: sukamon
	div = div + "<div><label for='starter'>Starter Egg/Digitama/In Training</label></div><div>";
	div = div + "<select onchange='listClicked(this.id)'name='Current Digimon' id='starter' class='digimon digimonList'>";
	div = div + "<option class='digimon' style='background-image: url(./img/Koromon.gif)'>Green spotted egg/Botamon/Koromon</option>";
	div = div + "<option class='digimon' style='background-image: url(./img/Tokomon.gif)'>Yellow double lined egg/Poyomon/Tokomon</option>";
	div = div + "<option class='digimon' style='background-image: url(./img/Tsunomon.gif)'>Blue lined egg/Punimon/Tsunomon</option>";
	div = div + "<option class='digimon' style='background-image: url(./img/Tanemon.gif)'>Pink spotted egg/Yuramon/Tanemon</option>";
	div = div + "</select></div>";
	document.getElementById('evLi').innerHTML = '';
	document.getElementById('evLi').innerHTML = div;
	document.getElementById("starter").style='background-image: url("./img/Koromon.gif")';
	getRookies('Koromon');
	document.getElementById("rookie").style='background-image: url("./img/Agumon.gif")';
	document.getElementById("champion").style='background-image: url("./img/Greymon.gif")';
	document.getElementById("ultimate").style='background-image: url("./img/MetalGreymon.gif")';
}

function getRookies(in_training) {
	var div = '';
	var path;
	//common: sukamon
	div = div + "<div><label for='current'>Rookie Digimon</label></div><div>";
	div = div + "<select onchange='listClicked(this.id)'name='Rookie Digimon' id='rookie' class='digimon digimonList' >";
	var ePath = EvolutionPaths[in_training];
	for (var i = 0; i < ePath.targets.length-1; i++) {
		path = ePath.targets[i];
		div = div + "<option class='digimon' style='background-image: url(";
		div = div + '"./img/'+path.trim()+'.gif")';
		div = div + "'>" + path.trim() + "</option>";
	}
	div = div + "</select></div>";
	document.getElementById('evLi2').innerHTML = '';
	document.getElementById('evLi2').innerHTML = div;
	document.getElementById("rookie").style='background-image: url("./img/'+ePath.targets[0]+'.gif")';

	getChampions(ePath.targets[0]);
}

function getChampions(rookie) {
	var div = '';
	var pathR = '';
	//common: sukamon
	div = div + "<div><label for='champion'>Champion Digimon</label></div><div>";
	div = div + "<select onchange='listClicked(this.id)'name='Champion Digimon' id='champion' class='digimon digimonList'>";
	var ePathR = EvolutionPaths[rookie];
	for (var i = 0; i < ePathR.targets.length; i++) {
		pathR = ePathR.targets[i];
		div = div + "<option class='digimon' style='background-image: url(";
		div = div + '"./img/'+pathR.trim()+'.gif")';
		div = div + "'>" + pathR.trim() + "</option>";
	}
	div = div + "</select></div>";
	document.getElementById('evLi3').innerHTML = '';
	document.getElementById('evLi3').innerHTML = div;
		document.getElementById("champion").style='background-image: url("./img/'+ePathR.targets[0]+'.gif")';
	if (isSpecialEvolution(rookie)) {
		document.getElementById('rookReq').innerHTML = getSpecialOutput(rookie);
	} else {
		document.getElementById('rookReq').innerHTML = Digimons[rookie].getEvolutionStats();
	}
	if (isSpecialEvolution(ePathR.targets[0])) {
		document.getElementById('champReq').innerHTML = getSpecialOutput(ePathR.targets[0]);
	} else {
		document.getElementById('champReq').innerHTML = Digimons[ePathR.targets[0]].getEvolutionStats();
	}
	getUltimates(ePathR.targets[0]);
}

function getUltimates(champion) {
	var div = '';
	var pathU = '';
	//common: sukamon, vademon
	div = div + "<div><label for='ultimate'>Ultimate Digimon</label></div><div>";
	div = div + "<select onchange='listClicked(this.id)' name='Ultimate Digimon' id='ultimate' class='digimon digimonList'>";
	var ePath = EvolutionPaths[champion];
	getUlt(ePath.targets[0]);
	for (var i = 0; i < ePath.targets.length; i++) {
		pathU = ePath.targets[i];
		div = div + "<option class='digimon' style='background-image: url(";
		div = div + '"./img/'+pathU.trim()+'.gif")';
		div = div + "'>" + pathU.trim() + "</option>";
	}
	div = div + "</select></div>";
	document.getElementById('evLi4').innerHTML = '';
	document.getElementById('evLi4').innerHTML = div;
	document.getElementById('ultiReq').innerHTML = Digimons[ePath.targets[0]].getEvolutionStats();
	document.getElementById("ultimate").style='background-image: url("./img/'+ePath.targets[0]+'.gif")';

	if (isSpecialEvolution(champion)) {
		document.getElementById('champReq').innerHTML = getSpecialOutput(champion);
	} else {
		document.getElementById('champReq').innerHTML = Digimons[champion].getEvolutionStats();
	}
}

function getUlt(ult) {
	if (isSpecialEvolution(ult)) {
		document.getElementById('ultiReq').innerHTML = getSpecialOutput(ult);
	} else {
		document.getElementById('ultiReq').innerHTML = Digimons[ult].getEvolutionStats();
	}
}

function listClicked(name) {
	var x = document.getElementById(name).value;
	switch(name) {
		case 'starter':
			document.getElementById(name).style='background-image: url("./img/'+x.split("/")[2]+'.gif")';
			getRookies(x.split("/")[2]);
			break;
		case 'rookie':
			document.getElementById(name).style='background-image: url("./img/'+x+'.gif")';
			getChampions(x);
			break;
		case 'champion':
			document.getElementById(name).style='background-image: url("./img/'+x+'.gif")';
			getUltimates(x);
			break;
		case 'ultimate':
			document.getElementById(name).style='background-image: url("./img/'+x+'.gif")';
			getUlt(x);
			break;
	}
}
