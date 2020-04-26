function DropTarget(element) {
	
	

	element.dropTarget = this
	
	this.canAccept = function(dragObject) {
		
		return true
	
	}
	
	this.accept = function(dragObject) {
	
		if (
		 ((coord.x==56) && (coord2.x==258)) ||
		 ((coord.x==258) && (coord2.x==460)) ||
		 ((coord.x==460) && (coord2.x==662)) ||
		 ((coord.x==662) && (coord2.x==56)) 
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
