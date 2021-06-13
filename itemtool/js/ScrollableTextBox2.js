class ScrollableTextBox2 extends TextBox {
    constructor(id,container,content,width,height) {
    	super(id,container,content,width,height);
		//container.onscroll=container.onmouseup=container.ontouchstop=this.stopScroll;
        this.scrollBar=new ScrollBar(this);
        this.scrollSource=-1;//-1 = no scroll, 0 = scrollBar, 1 = scrollBarHandle, 2 = content
        this.scrollBar.update();
	}
	stopScroll(){
		this.scrollBar.scrollSource=-1;
	}
	update(){
		this.scrollBar.update();
	}

}