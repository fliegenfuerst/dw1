function HashManager(){
	this.triggered=false;
	this.lastHash="";
	this.currentHash="none";
	this.digimon="";
	this.move="";
	this.moveLearned="0";
	this.partnerHP="0";
	this.partnerDefense="0";
	this.updateHash=function(){
		window.location.hash="!"+this.digimon+"/"+this.move+"/"+this.moveLearned+"/"+this.partnerHP+"/"+this.partnerDefense;
		this.currentHash=window.location.hash;
	};
	this.setHash=function(digi,move){
		if(this.triggered){
			this.triggered=false;
		}else{
			move=move.split(" ").join("_");
			if(this.digimon!==digi||this.move!==move){
				this.digimon=digi;
				this.move=move;
				this.updateHash();
			}
		}
	};
	this.setHashLearn=function(moves){
		this.moveLearned=binTo64(moves);
		this.updateHash();
	};
	this.setHashStats=function(value,type){
		this[type]=intToUrl(value);
		this.updateHash();
	};
	this.updateStats=function(){
		this.partnerHP=intToUrl(gui.partner.hp.valueAsNumber);
		this.partnerDefense=intToUrl(gui.partner.def.valueAsNumber);
		this.updateHash();
	}
	this.checkHash=function(){
		if(window.location.hash!==this.currentHash){
			this.triggered=true;
			if(window.location.hash==""){
				gui.showPartner("Agumon");
				gui.showMove("Spit Fire");
				this.setHash("Agumon","Spit_Fire");
			}else{
				this.currentHash=window.location.hash;
				var part=window.location.hash.substr(2,window.location.hash.length);
				part=part.split("/");
				if(part.length==5){
					this.digimon=part[0];
					this.move=part[1];
					this.moveLearned=part[2];
					this.partnerHP=part[3];
					this.partnerDefense=part[4];
					gui.partner.hp.value=urlToInt(this.partnerHP);
					gui.partner.def.value=urlToInt(this.partnerDefense);
					gui.setMovesLearned(urlToBin(this.moveLearned));
					gui.showPartner(this.digimon);
					gui.showMove(part[1].split("_").join(" "));
				}
			}
		}
	};
}
var chars="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
function binTo64(bin,check){
	bin=bin.substring(bin.indexOf(1),bin.length);
	var result="";
	var index=bin.length;
	var current;
	for(var index=bin.length;index>0;index-=6){	
		if(index>6){
		current=bin.substring(index-6,index);
		result=chars.charAt(parseInt(current, 2))+result;
		}else{
			current=bin.substring(0,index);
			result=chars.charAt(parseInt(current, 2))+result;
			if(result=="0000000000"){
				return "0";
			}else{
				return reduceZeros(result);
			}
		}
	}
}
function urlToBin(url,check2){
	url=restoreZeros(url);
	var result="";
	for(var i=0;i<url.length;i++){
		result+=("000000"+chars.indexOf(url.charAt(i)).toString(2)).substr(-6);
		if(i==url.length-1){
			return ("00000000000000000000000000000000000000000000000000000000"+result).substr(-56);
		}
	}
}
function intToUrl(int){
	var digit;
	var residual = int;
	var result = '';
	while (true) {
		digit = residual % 64;
		result = chars.charAt(digit) + result;
		residual = Math.floor(residual / 64);
		if (residual == 0)
			break;
	}
	return result;
}

function urlToInt(url){
	var int=0;
	for(var h=0;h<url.length;h++){
		int+=chars.indexOf(url[h])*Math.pow(64,(url.length-h-1));
	}
	return int;
}
function reduceZeros(str){
	var outPut="";
	var count=0;
	for(var i=0;i<str.length;i++){
		if(str.charAt(i)=="0"){
			count++;
		}else{
			if(count>0){
				outPut+=getZeros(count);
				count=0;
			}
			outPut+=str.charAt(i);
		}
		if(i==str.length-1){
			if(count>0){
				outPut+=getZeros(count);
			}
			return outPut;
		}
	}
}
function getZeros(count){
	if(count>2){
		return "~"+count;
	}else{
		if(count==1){
			return "0";
		}else{
			return "00"
		}
	}
}
function restoreZeros(str){
	var outPut="";
	if(str.indexOf("~")>-1){
		var parts=str.split("~");
		outPut+=parts[0];
		for(var i=1;i<parts.length;i++){
			var count=parts[i].substring(0,1);
			for(var j=0;j<count;j++){
				outPut+="0";
				if(j==count-1){
					outPut+=parts[i].substring(1,parts[i].length);
				}
			}
			if(i==parts.length-1){
				return outPut;
			}
		}
	}else{
		return str;
	}
}