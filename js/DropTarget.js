function DropTarget(element) {
	
	

	element.dropTarget = this
	
	this.canAccept = function(dragObject) {
		
		return true
	
	}
	
	this.accept = function(dragObject) {
	
		if (
		 ((coord.x==30) && (coord2.x==264)) ||
		 ((coord.x==264) && (coord2.x==498)) ||
		 ((coord.x==498) && (coord2.x==732)) ||
		 ((coord.x==732) && (coord2.x==30)) 
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
