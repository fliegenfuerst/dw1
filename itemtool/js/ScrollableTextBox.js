class ScrollableTextBox extends TextBox {
    constructor(id,container,content,width,height) {
    	super(id,container,content,width,height);
        this.scrollBar=getSpan("scrollBar shadowTopLeft");
        this.scrollBarHandle=getDiv("scrollBarHandle shadowBottomRight");
		this.scrollBarHandle.onmousedown=this.scrollBar.onmousedown=this.content.onmousedown=this.doScroll;
		this.scrollBarHandle.ontouchstart=this.scrollBar.ontouchstart=this.content.ontouchstart=this.doScroll;
		this.main.ontouchmove=this.main.onmousemove=this.updateScroll;
		this.main.onmouseleave=this.main.onmouseout=this.stop;
		this.main.onwheel=this.mouseWheelScroll;
        this.scrollBar.appendChild(this.scrollBarHandle);
        //this.container.appendChild(this.content);
        this.container.appendChild(this.scrollBar);
        //this.main.appendChild(this.container);
        this.currentPercentage=this.contentPosition=this.scrollBarHandlePosition=0;
        this.source=-1;//-1 = no scroll, 0 = scrollBar, 1 = scrollBarHandle, 2 = content
        this.update();
		adjustWidth(this.content,this.main.offsetWidth-this.scrollBar.offsetWidth-28);
	}
	stopScroll(){
		this.source=-1;
	}
    update(){
		this.contentHeight=this.content.offsetHeight;
		this.containerHeight=this.container.offsetHeight;
		this.heightDifference=this.containerHeight-this.contentHeight-2;
		this.mainPosition=getOffsetY(this.main);
		if(this.heightDifference>0){
			this.scrollBar.classList.add("hidden");
		}else{
			this.scrollBar.classList.remove("hidden");
			this.scrollBarPosition=getOffsetY(this.scrollBar);
			this.scrollBarHeight=this.scrollBar.offsetHeight;
			this.scrollBarHandleHeight=Math.floor(this.scrollBarHeight*(this.containerHeight/this.contentHeight));
			this.scrollBarDifference=this.scrollBarHeight-this.scrollBarHandleHeight-6;
			adjustHeight(this.scrollBarHandle,this.scrollBarHandleHeight);
			this.scrollToPercentage();
		}
    }
	doScroll(){
		let current;
		console.log(this);
		if(this.classList.contains("scrollBarHandle")){
			current=textBoxes[this.parentNode.parentNode.parentNode.id];
			current.source=1;
			current.grabPosition=(arguments[0].clientY||arguments[0].touches[0].clientY)-getOffsetY(current.scrollBarHandle);
		}else if(this.classList.contains("scrollBar")){
			current=textBoxes[this.parentNode.parentNode.id];
			if(current.source!==1){
				current.source=0;
				current.scrollBarJump(arguments[0].clientY||arguments[0].touches[0].clientY);
			}
		}else if(this.className=="content"){
			current=textBoxes[this.parentNode.parentNode.id];
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
			this.contentPosition+=this.containerHeight;
			if(this.contentPosition>0){
				this.contentPosition=this.scrollBarHandlePosition=this.currentPercentage=0;
			}else{
				this.currentPercentage=this.contentPosition/this.heightDifference;
				this.scrollBarHandlePosition=Math.floor(this.currentPercentage*this.scrollBarDifference);
			}
		}else if(y-this.scrollBarPosition>this.scrollBarHandlePosition+this.scrollBarHandleHeight){			
			this.contentPosition-=this.containerHeight;
			if(this.contentPosition<this.heightDifference){
				this.contentPosition=this.heightDifference;
				this.scrollBarHandlePosition=this.scrollBarDifference;
				this.currentPercentage=1;
			}else{
				this.currentPercentage=this.contentPosition/this.heightDifference;
				this.scrollBarHandlePosition=Math.floor(this.currentPercentage*this.scrollBarDifference);
			}
		}
		this.applyScroll();
	}
	scrollBarScroll(y){//return false if scrollBarHandle out of bounds (lock at top respectively bottom until true)
		if(this.scrollBarPosition+this.scrollBarDifference<y-this.grabPosition){//mouse below scrollBar
			this.scrollBarHandlePosition=this.scrollBarDifference;
			this.contentPosition=this.heightDifference;
			this.currentPercentage=1;
		}else if(y-this.grabPosition<this.scrollBarPosition){//mouse above scrollBar
			this.scrollBarHandlePosition=this.contentPosition=this.currentPercentage=0;
		}else{//mouse inside scrollBar or left or right of it while pressed
			this.scrollBarHandlePosition=y-this.scrollBarPosition-this.grabPosition;
			this.currentPercentage=this.scrollBarHandlePosition/this.scrollBarDifference;
			this.contentPosition=Math.floor(this.heightDifference*this.currentPercentage);
		}
		this.applyScroll();
	}
	mouseDragScroll(y){
		this.contentPosition=this.contentDragStartPosition+y-this.mainPosition-this.contentGrabPosition;
		if(this.contentPosition>0){
    		this.contentPosition=this.scrollBarHandlePosition=this.currentPercentage=0;
		}else if(this.contentPosition<this.heightDifference){
			this.contentPosition=this.heightDifference;
			this.scrollBarHandlePosition=this.scrollBarDifference;
			this.currentPercentage=1;
		}else{
			this.currentPercentage=this.contentPosition/this.heightDifference;
			this.scrollBarHandlePosition=Math.floor(this.currentPercentage*this.scrollBarDifference);
		}
		this.applyScroll();
	}
    mouseWheelScroll(){
		let current=textBoxes[this.id];
		let deltaY=arguments[0].deltaY;
		if(deltaY%100==0){
			deltaY=deltaY/100*3;
		}
    	current.contentPosition+=deltaY*-12;
    	if(current.contentPosition>0){
    		current.contentPosition=current.scrollBarHandlePosition=current.currentPercentage=0;
		}else if(current.contentPosition<current.heightDifference){
			current.contentPosition=current.heightDifference;
			current.scrollBarHandlePosition=current.scrollBarDifference;
			current.currentPercentage=1;
		}else{
			current.currentPercentage=current.contentPosition/current.heightDifference;
			current.scrollBarHandlePosition=current.currentPercentage*current.scrollBarDifference;
		}
		current.applyScroll();
    }
	scrollToPercentage(){
		//this.currentPercentage=Math.round(this.currentPercentage*100)/100;
		this.contentPosition=this.currentPercentage*this.heightDifference;
		this.scrollBarHandlePosition=this.currentPercentage*this.scrollBarDifference;
		this.scrollBarHandle.style.marginTop=this.scrollBarHandlePosition+"px";
		this.content.style.marginTop=this.contentPosition+"px";
	}
	applyScroll(){
		this.content.style.marginTop=this.contentPosition+"px";
		this.scrollBarHandle.style.marginTop=this.scrollBarHandlePosition+"px";
	}
}