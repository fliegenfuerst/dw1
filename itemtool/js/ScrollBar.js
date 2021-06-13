
class ScrollBar{
	constructor(target) {
    	this.target=target;
        this.container=getSpan("scrollBar shadowTopLeft");
        this.handle=getDiv("scrollBarHandle shadowBottomRight");
		this.handle.onmousedown=this.container.onmousedown=this.target.content.onmousedown=this.doScroll;
		this.handle.ontouchstart=this.container.ontouchstart=this.target.content.ontouchstart=this.doScroll;
		this.target.main.ontouchmove=this.target.main.onmousemove=this.updateScroll;
		this.target.content.onwheel=this.mouseWheelScroll;
        this.container.appendChild(this.handle);
        this.target.container.appendChild(this.container);
        this.currentPercentage=this.contentPosition=this.handlePosition=this.position=this.heightDifference=0;
        this.scrollSource=-1;//-1 = no scroll, 0 = scrollBar, 1 = handle, 2 = content
		adjustWidth(this.target.content,this.target.main.offsetWidth-this.target.container.offsetWidth-28);
        this.update();
	}
    update(){
		let contentHeight=this.target.content.offsetHeight;
		console.log(contentHeight+this.target.main.id);
		this.targetHeight=this.target.container.offsetHeight;
		this.heightDifference=this.targetHeight-contentHeight-2;
		this.targetPosition=getOffsetY(this.target.container);
		console.log("heitodifurensu: "+this.heightDifference);
		if(this.heightDifference>0){
			this.container.classList.add("hidden");
		}else{
			console.log("whoooeeee");
			this.container.classList.remove("hidden");
			this.position=getOffsetY(this.container);
			let height=this.container.offsetHeight;
			this.handleHeight=Math.floor(height*(this.targetHeight/contentHeight));
			this.difference=height-this.handleHeight-6;
			adjustHeight(this.handle,this.handleHeight);
			this.scrollToPercentage();
		}
    }
	doScroll(){
		let current;
		console.log(this);
		if(this.classList.contains("scrollBarHandle")){
			current=textBoxes[this.parentNode.parentNode.parentNode.id].scrollBar;
			current.scrollSource=1;
			current.grabPosition=(arguments[0].clientY||arguments[0].touches[0].clientY)-getOffsetY(current.handle);
		}else if(this.classList.contains("scrollBar")){
			current=textBoxes[this.parentNode.parentNode.id].scrollBar;
			console.log(this);
			if(current.scrollSource!==1){
				current.scrollSource=0;
				current.jump(arguments[0].clientY||arguments[0].touches[0].clientY);
			}
		}else if(this.className=="content"){
			current=textBoxes[this.parentNode.parentNode.id].scrollBar;
        	current.contentGrabPosition=(arguments[0].clientY||arguments[0].touches[0].clientY)-current.targetPosition;
        	current.contentDragStartPosition=current.contentPosition;
			current.scrollSource=2;
		}
	}
	updateScroll(){
		let current=textBoxes[this.id];
		switch(current.scrollBar.scrollSource){
			case 1:
				current.scrollBar.scrollBarScroll(arguments[0].clientY||arguments[0].touches[0].clientY);
				break;
			case 2:
				current.scrollBar.mouseDragScroll(arguments[0].clientY||arguments[0].touches[0].clientY);
				break;
			default:
				break;
		}
	}
	jump(y){
		console.log(y);
		if(y-this.position<this.handlePosition){
			this.contentPosition+=this.targetHeight;
			if(this.contentPosition>0){
				this.contentPosition=this.handlePosition=this.currentPercentage=0;
			}else{
				this.currentPercentage=this.contentPosition/this.heightDifference;
				this.handlePosition=Math.floor(this.currentPercentage*this.difference);
			}
		}else if(y-this.position>this.handlePosition+this.handleHeight){			
			this.contentPosition-=this.targetHeight;
			if(this.contentPosition<this.heightDifference){
				this.contentPosition=this.heightDifference;
				this.handlePosition=this.difference;
				this.currentPercentage=1;
			}else{
				this.currentPercentage=this.contentPosition/this.heightDifference;
				this.handlePosition=Math.floor(this.currentPercentage*this.difference);
			}
		}
		this.applyScroll();
	}
	scrollBarScroll(y){//return false if handle out of bounds (lock at top respectively bottom until true)
		if(this.position+this.difference<y-this.grabPosition){//mouse below scrollBar
			this.handlePosition=this.difference;
			this.contentPosition=this.heightDifference;
			this.currentPercentage=1;
		}else if(y-this.grabPosition<this.position){//mouse above scrollBar
			this.handlePosition=this.contentPosition=this.currentPercentage=0;
		}else{//mouse inside scrollBar or left or right of it while pressed
			this.handlePosition=y-this.position-this.grabPosition;
			this.currentPercentage=this.handlePosition/this.difference;
			this.contentPosition=Math.floor(this.heightDifference*this.currentPercentage);
		}
		this.applyScroll();
	}
	mouseDragScroll(y){
		this.contentPosition=this.contentDragStartPosition+y-this.targetPosition-this.contentGrabPosition;
		if(this.contentPosition>0){
    		this.contentPosition=this.handlePosition=this.currentPercentage=0;
		}else if(this.contentPosition<this.heightDifference){
			this.contentPosition=this.heightDifference;
			this.handlePosition=this.difference;
			this.currentPercentage=1;
		}else{
			this.currentPercentage=this.contentPosition/this.heightDifference;
			this.handlePosition=Math.floor(this.currentPercentage*this.difference);
		}
		this.applyScroll();
	}
    mouseWheelScroll(){
    	textBoxes[this.parentNode.parentNode.id].scrollBar.doMouseWheelScroll(arguments[0].deltaY);
    }
    doMouseWheelScroll(deltaY){
    	if(deltaY%100==0){
			deltaY=deltaY/100*3;
		}
    	this.contentPosition+=deltaY*-12;
    	if(this.contentPosition>0){
    		this.contentPosition=this.handlePosition=this.currentPercentage=0;
		}else if(this.contentPosition<this.heightDifference){
			this.contentPosition=this.heightDifference;
			this.handlePosition=this.difference;
			this.currentPercentage=1;
		}else{
			this.currentPercentage=this.contentPosition/this.heightDifference;
			this.handlePosition=this.currentPercentage*this.difference;
		}
		this.applyScroll();
    }
	scrollToPercentage(){
		//this.currentPercentage=Math.round(this.currentPercentage*100)/100;
		this.contentPosition=this.currentPercentage*this.heightDifference;
		this.handlePosition=this.currentPercentage*this.difference;
		this.handle.style.marginTop=this.handlePosition+"px";
		this.target.content.style.marginTop=this.contentPosition+"px";
	}
	applyScroll(){
		this.target.content.style.marginTop=this.contentPosition+"px";
		this.handle.style.marginTop=this.handlePosition+"px";
	}
}