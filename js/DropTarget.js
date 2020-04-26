function DropTarget(element) {
	
	

	element.dropTarget = this
	
	this.canAccept = function(dragObject) {
		
		return true
	
	}
	
	this.accept = function(dragObject) {
	
		if (
		 ((coord.top==16) && (coord2.top==84)) ||
		 ((coord.top==84) && (coord2.top==152)) ||
		 ((coord.top==152) && (coord2.top==220)) ||
		 ((coord.top==220) && (coord2.top==16)) 
		 ) {
		this.onEnter();
		dragObject.onDragFail()
		//alert("Акцептор '"+coord.top+"': принял объект '"+coord2.top+"'")
		}
		else{
			dragObject.onDragFail();
			this.onFail();
			if (document.getElementsByTagName('div').className == 'fail') {
            document.getElementsByClassName('reload').style.display="flex;"
        }
		}
	}
	
	this.onLeave = function() {
		element.className =  '';
	}
	
	this.onEnter = function() {
		element.className = 'uponMe';
	}

	this.onFail = function(){
		element.className = 'fail';
	}

	this.toString = function() {
		return element.id
	}
}
