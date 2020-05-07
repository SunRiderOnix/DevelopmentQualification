

function DropTarget(element) {
	
	

	

	element.dropTarget = this
	
	this.canAccept = function(dragObject) {
		
		return true
	
	}
	
	this.accept = function(dragObject) {

		if ( ( (coord=="drag4") && (coord2=="drop4") ) || ((coord=="drag3") && (coord2=="drop3")) || ((coord=="drag2") && (coord2=="drop2")) || ((coord=="drag1") && (coord2=="drop1")) ) 
			 {
		this.onEnter();
		dragObject.onDragFail()
		
	
		}
		else{
			dragObject.onDragFail();
			this.onFail();
			
			/*if (document.getElementsByTagName('div').className == 'fail') {
            document.getElementsByClassName('reload').style.display="flex;"
        }*/
		}
		if (document.getElementsByClassName('uponMe')["length"] == 4) {
			
			setTimeout("alert('Вы прошли тест, сейчас вы будете перенаправлены на страницу');",2000);
			setTimeout("history.back()",4000);
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
