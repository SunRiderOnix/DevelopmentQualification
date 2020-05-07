

function DropTarget(element) {
	
	

	

	element.dropTarget = this
	
	this.canAccept = function(dragObject) {
		
		return true
	
	}
	
	this.accept = function(dragObject) {

		
		
		
		

		if (
		 ((coord.x==coord11[0]) && (coord2.x==coord21[1])) ||
		 ((coord.x==coord11[1]) && (coord2.x==coord21[2])) ||
		 ((coord.x==coord11[2]) && (coord2.x==coord21[3])) ||
		 ((coord.x==coord11[3]) && (coord2.x==coord21[0])) 
		 ) {
		this.onEnter();
		dragObject.onDragFail()
		
		
		//alert("Акцептор '"+coord.top+"': принял объект '"+coord2.top+"'")
		}
		else{
			dragObject.onDragFail();
			this.onFail();
			
			/*if (document.getElementsByTagName('div').className == 'fail') {
            document.getElementsByClassName('reload').style.display="flex;"
        }*/
		}
		i = 0;
	}

	
	this.onLeave = function() {
		element.className =  '';
	}
	
	this.onEnter = function() {
		element.className = 'uponMe';
	}

	this.onFail = function(){
		element.className = 'droppable fail';
	}

	this.toString = function() {
		return element.id
	}
}
