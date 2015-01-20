// Your code here
function start() {
	EnterValue();
	reset (); 
	
}


function IsEven(num){
		if (num%2===0){
			return true;
		}else{
			return false;
		}
	}

function EnterValue () {
	
	var counter = 0;
	var cell = document.getElementsByClassName("box");
	for (var i = 0; i < cell.length; i++) {
		console.log("11111");
		cell[i].addEventListener("click", function (event) {
		console.log("22222");	
			if (event.target.innerHTML != "x" && this.innerHTML != "o") {
				console.log("3333");
				if (IsEven(counter)) {
					event.target.setAttribute("class", "box selected_x");
					event.target.innerHTML = "x";
				} else {
					event.target.setAttribute("class", "box selected_o");
					event.target.innerHTML = "o";
				}
				counter++;

			} else {
				console.log("4444421s");
				return false;

			}
		});
	}	
}

	function reset () {
		document.getElementById("press").addEventListener("click", resetTic);
		console.log("Happy"); 
	}
	// var sit = document.getElementById("press");
	// console.log("hdfhdkhfd");
	// .addEventListener("click",resetTic);


	var cell = document.getElementsByClassName("box");

	var resetTic = function() {
		for (var i = 0; i< cell.length; i++){
			cell[i].className = "box";
			cell[i].innerHTML = " ";
		}
	}; 


window.onload = start;