//var dropDownSelf;
class DropDown{
	constructor(itemList,target){
		this.isOpen=false;
		this.target=target;
		this.main=getDiv("");
		this.container=getDiv("dropDownContainer");
		this.content=getDiv("dropDownContent");
		this.currentMarginTop="0px";
		this.itemList=itemList;
		/*
		this.itemList=[...itemList];
		this.itemList.sort(function(a,b){
		    if(a.name < b.name) { return -1; }
		    if(a.name > b.name) { return 1; }
		    return 0;
		});*/
		this.scrollBar=new ScrollBar(this);
		this.container.appendChild(this.content);
		for(let item of this.itemList){
			this.content.appendChild(this.getOption(item));
		}
		console.log(this.itemList);
		this.main.appendChild(this.container);
		this.target.container.prepend(this.main);
		//dropDownSelf=this;
	}
	getOption(map){
		let div=getDiv("dropDownOption");
		div.innerText=map.name+", "+map.description;
		div.onclick=this.showMap;
		div.dropDownIndex=map.id;
		div.target=this;
		return div;
	}
	openDropDown(){
		console.log("hui");
		this.container.style.maxHeight=this.container.style.minHeight="200px";
		this.container.style.overflowY="scroll";
		this.content.style.marginTop="0px";
		//this.content.style.top="0px";
		this.container.scrollTo(0,this.currentMarginTop);
		this.isOpen=true;
	}
	showMap(){
		console.log(this.target);
		let dropDownSelf=this.target;
		if(dropDownSelf.isOpen){
			dropDownSelf.container.style.overflowY="hidden";
			dropDownSelf.target.displaySelection(this.dropDownIndex);
			dropDownSelf.isOpen=false;
			dropDownSelf.container.style.maxHeight=dropDownSelf.container.style.minHeight="22px";
			//dropDownSelf.content.style.top=-this.offsetTop+"px";
			dropDownSelf.content.style.marginTop=-this.offsetTop+"px";
			dropDownSelf.currentMarginTop=this.offsetTop;
			dropDownSelf.container.scrollTo(0,this.currentMarginTop);
		}else{
			dropDownSelf.openDropDown();
		}
	}
}