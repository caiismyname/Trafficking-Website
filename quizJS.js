var environmentalCounter = 0;
var environmentalThreshold = 3;
var physicalCounter = 0;
var physicalThreshold = 5
var psychologicalCounter = 0;
var psychologicalThreshold = 3;

function initListeners() {

	$('.environmentalButton').change(function(){
		(this.checked) 
		? environmentalCounter += 1 
		: environmentalCounter -= 1;

		(environmentalCounter >= environmentalThreshold) 
		? document.getElementById('environmentalTitle').style.color = 'green'
		: document.getElementById('environmentalTitle').style.color = 'black';

		masterCheck();
	})

	$('.physicalButton').change(function(){
		(this.checked) 
		? physicalCounter += 1 
		: physicalCounter -= 1;

		(physicalCounter >= physicalThreshold) 
		? document.getElementById('physicalTitle').style.color = 'green'
		: document.getElementById('physicalTitle').style.color = 'black';

		masterCheck();
	})

	$('.psychologicalButton').change(function(){
		(this.checked)
		? psychologicalCounter += 1
		: psychologicalCounter -= 1;

		(psychologicalCounter >= psychologicalThreshold) 
		? document.getElementById('psychologicalTitle').style.color = 'green'
		: document.getElementById('psychologicalTitle').style.color = 'black';

		masterCheck();
	})


}


function masterCheck() {


	if ((environmentalCounter == 0) && 
		(physicalCounter == 0) && 
		(psychologicalCounter == 0)) {
		document.getElementById('trueMessage').style.display = "none";
		document.getElementById('falseMessage').style.display = "none";
	} else if ((environmentalCounter >= environmentalThreshold) &&
		(physicalCounter >= physicalThreshold) &&
		(psychologicalCounter >= psychologicalThreshold)) {
		document.getElementById('trueMessage').style.display = "block";
		document.getElementById('falseMessage').style.display = "none";
	} else {
		document.getElementById('trueMessage').style.display = "none";
		document.getElementById('falseMessage').style.display = "block";
	}
}


$(document).ready(function() {
	initListeners();
})