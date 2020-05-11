

function DropTarget(element) {
	
	if (document.getElementsByClassName('uponMe')["length"] == 4) {
		
		return

	}
	

	

	element.dropTarget = this
	
	this.canAccept = function(dragObject) {
		
		if (document.getElementsByClassName('uponMe')["length"] == 4) {
		
			return
	
		}

		return true
	
	}
	
	this.accept = function(dragObject) {

		

		if 
		(  

		   ((coord=="drag4") && (coord2=="drop4")) 
		|| ((coord=="drag3") && (coord2=="drop3")) 
		|| ((coord=="drag2") && (coord2=="drop2")) 
		|| ((coord=="drag1") && (coord2=="drop1")) 
		
		) 
			 {
		this.onEnter();
		dragObject.onDragFail()
		
	
		}
		else{

			dragObject.onDragFail();
			
			this.onFail();
			alert('Ответ не верен');

		}
		if (document.getElementsByClassName('uponMe')["length"] == 4) {
			
			setTimeout("alert('Поздравляю, все ответы верны');",200);
			document.getElementsByClassName('reload')[0].style.display = "inline-block";
			
			
			dragObjects = document.getElementsByClassName('draggable');
       		for(var i=0; i<dragObjects.length; i++) {
            new DragObject("")
		}

		return
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
