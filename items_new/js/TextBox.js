class TextBox {
    constructor(id,container,content) {
        this.content=content;
        this.main=getDiv("textBox");
        this.scrollBar=getSpan("scrollBar");
        this.scrollBarHandle=getDiv("scrollBarHandle");
	this.scrollBarHandle.onmousedown=this.scrollBar.onmousedown=this.content.onmousedown=this.doScroll;
	this.scrollBarHandle.ontouchstart=this.scrollBar.ontouchstart=this.content.ontouchstart=this.doScroll;
	this.main.ontouchmove=this.main.onmousemove=this.updateScroll;
	this.main.onwheel=this.mouseWheelScroll;
        this.scrollBar.appendChild(this.scrollBarHandle);
        this.main.appendChild(this.content);
        this.main.appendChild(this.scrollBar);
        container.appendChild(this.main);
        this.main.id=id;
        this.currentPercentage=0;
        this.contentPosition=0;
        this.scrollBarHandlePosition=0;
        this.source=-1;//-1 = no scroll, 0 = scrollBar, 1 = scrollBarHandle, 2 = content
        this.update();
	let body=document.getElementsByTagName("BODY")[0];
	body.onresize=this.updateAll;
	body.onmouseleave=body.onscroll=body.onmouseup=this.stopScroll;
    }
    stopScroll(){
    	for(let textBox in textBoxes){
    		textBoxes[textBox].source=-1;
    	}
    }
    updateAll(){
    	for(let textBox in textBoxes){
    		textBoxes[textBox].update();
    	}
    }
    update(){
		this.contentHeight=this.content.offsetHeight;
		this.mainHeight=this.main.offsetHeight;
		this.heightDifference=this.mainHeight-this.contentHeight-(16+8);
		this.mainPosition=getOffset(this.main);
		if(this.heightDifference>0){
			this.scrollBar.className="hidden";
		}else{
			this.scrollBarPosition=getOffset(this.scrollBar);
			this.scrollBarHeight=this.scrollBar.offsetHeight;
			this.scrollBarHandleHeight=Math.floor(this.scrollBarHeight*(this.mainHeight/this.contentHeight));
			this.scrollBarDifference=this.scrollBarHeight-this.scrollBarHandleHeight-8;
			adjustHeight(this.scrollBarHandle,this.scrollBarHandleHeight);
			this.scrollBar.className="scrollBar";
			this.scrollToPercentage();
		}
    }
	doScroll(){
		let current;
		if(this.className=="scrollBarHandle"){
			current=textBoxes[this.parentNode.parentNode.id];
			current.source=1;
			current.grabPosition=(arguments[0].clientY||arguments[0].touches[0].clientY)-getOffset(current.scrollBarHandle);
		}else if(this.className=="scrollBar"){
			current=textBoxes[this.parentNode.id];
			if(current.source!==1){
				current.source=0;
				current.scrollBarJump(arguments[0].clientY||arguments[0].touches[0].clientY);
			}
		}else if(this.className=="content"){
			current=textBoxes[this.parentNode.id];
        		current.contentGrabPosition=(arguments[0].clientY||arguments[0].touches[0].clientY)-current.mainPosition;
        		current.contentDragStartPosition=current.contentPosition;
			current.source=2;
		}
	}
	updateScroll(){
		let current=textBoxes[this.id];
		switch(current.source){
			case 1:
				current.scrollBarScroll(arguments[0].clientY||arguments[0].touches[0].clientY);
				break;
			case 2:
				current.mouseDragScroll(arguments[0].clientY||arguments[0].touches[0].clientY);
				break;
			default:
				break;
		}
	}
	scrollBarJump(y){
		if(y-this.scrollBarPosition<this.scrollBarHandlePosition){
			this.contentPosition+=this.mainHeight;
			if(this.contentPosition>0){
				this.contentPosition=this.scrollBarHandlePosition=0;
			}else{
				this.setPercentage(this.contentPosition/this.heightDifference);
				this.scrollBarHandlePosition=Math.floor(this.currentPercentage*this.scrollBarDifference);
			}
		}else if(y-this.scrollBarPosition>this.scrollBarHandlePosition+this.scrollBarHandleHeight){			
			this.contentPosition-=this.mainHeight;
			if(this.contentPosition<this.heightDifference){
				this.contentPosition=this.heightDifference;
				this.scrollBarHandlePosition=this.scrollBarDifference;
			}else{
				this.setPercentage(this.contentPosition/this.heightDifference);
				this.scrollBarHandlePosition=Math.floor(this.currentPercentage*this.scrollBarDifference);
			}
		}
		this.applyScroll();

	}
	scrollBarScroll(y){//return false if scrollBarHandle out of bounds (lock at top respectively bottom until true)
		if(this.scrollBarPosition+this.scrollBarDifference<y-this.grabPosition){//mouse below scrollBar
			this.scrollBarHandlePosition=this.scrollBarDifference;
			this.contentPosition=this.heightDifference;
		}else if(y-this.grabPosition<this.scrollBarPosition){//mouse above scrollBar
			this.scrollBarHandlePosition=this.contentPosition=0;
		}else{//mouse inside scrollBar or left or right of it while pressed
			this.scrollBarHandlePosition=y-this.scrollBarPosition-this.grabPosition;
			this.setPercentage(this.scrollBarHandlePosition/this.scrollBarDifference);
			this.contentPosition=Math.floor(this.heightDifference*this.currentPercentage);
		}
		this.applyScroll();
	}
	mouseDragScroll(y){
		this.contentPosition=this.contentDragStartPosition+y-this.mainPosition-this.contentGrabPosition;
		if(this.contentPosition>0){
    			this.contentPosition=this.scrollBarHandlePosition=0;
		}else if(this.contentPosition<this.heightDifference){
			this.contentPosition=this.heightDifference;
			this.scrollBarHandlePosition=this.scrollBarDifference;
		}else{
			this.setPercentage(this.contentPosition/this.heightDifference);
			this.scrollBarHandlePosition=Math.floor(this.currentPercentage*this.scrollBarDifference);
		}
		this.applyScroll();
	}
	mouseWheelScroll(){
		let current=textBoxes[this.id];
    		current.contentPosition+=arguments[0].deltaY*-12;
    		if(current.contentPosition>0){
    			current.contentPosition=current.scrollBarHandlePosition=0;
			}else if(current.contentPosition<current.heightDifference){
				current.contentPosition=current.heightDifference;
				current.scrollBarHandlePosition=current.scrollBarDifference;
			}else{
				current.setPercentage(current.contentPosition/current.heightDifference);
				current.scrollBarHandlePosition=current.currentPercentage*current.scrollBarDifference;
			}
		current.applyScroll();
	}
	scrollToPercentage(){
		this.contentPosition=this.currentPercentage*this.heightDifference;
		this.scrollBarHandlePosition=this.currentPercentage*this.scrollBarDifference;
		this.scrollBarHandle.style.marginTop=this.scrollBarHandlePosition+"px";
		this.content.style.marginTop=this.contentPosition+"px";
	}
	setPercentage(p){
		this.currentPercentage=p;
	}
	applyScroll(){
		this.content.style.marginTop=this.contentPosition+"px";
		this.scrollBarHandle.style.marginTop=this.scrollBarHandlePosition+"px";
	}
}
function adjustHeight(el,value){
	el.style.minHeight=value+"px";
	el.style.maxHeight=value+"px";
	el.style.height=value+"px";
}
function getOffset(el) {
	var rect = el.getBoundingClientRect(),
	//scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	//return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	return rect.top + scrollTop
}
function getDiv(className){
	let div=document.createElement("DIV");
	div.className=className;
	return div;
}
function getSpan(className){
	let span=document.createElement("SPAN");
	span.className=className;
	return span;
}
