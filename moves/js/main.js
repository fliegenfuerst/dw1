var currentSort="byRegion";
var container=idGet("container");
var hM=new HashManager();
var gui=new GUIManager();
var tb=new toolbox();
var currentDigimon=stats.find(x => x.name==="Agumon");
gui.getRaiseSelect();
gui.getSortSelect();
gui.showMoveTable();
var sortDirection="hightolow";
setInterval(function() {
	hM.checkHash();
}, 300);
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode != 46 &&(charCode < 48 || charCode > 57)))
        return false;
    return true;
}
function checkMax(evt){
	if(evt.target.min<evt.target.valueAsNumber){
		if(evt.target.valueAsNumber>evt.target.max){
			evt.target.value=evt.target.max;
		}
		hM.updateStats();
		update();
	}
}
function sortBy(arr,prop){
	return arr.sort(sortByImp);
	function sortByImp(a,b) {
		var x = a[prop];
		var y = b[prop];
		if(sortDirection=="lowtohigh"){
			return x < y ? -1 : x > y ? 1 : 0;
		}else{
			return y < x ? -1 : y > x ? 1 : 0;
		}
	}
}
function sortSimple(arr,prop){
	return arr.sort(sortByImp);
		function sortByImp(a,b) {
			var x = a[prop];
			var y = b[prop];
			return x < y ? -1 : x > y ? 1 : 0;
		}
}
function setSortDir(){
	sortDirection=this.value.toLowerCase();
	update();
}

var moveList=[];
var curSpec="FIRE";
moveList["FIRE"]=[];
for(var k=0;k<moves.length;k++){
	if(moves[k].speciality!==curSpec){
		curSpec=moves[k].speciality;
		moveList[curSpec]=[];
	}
	moveList[curSpec].push(moves[k].name);
}

