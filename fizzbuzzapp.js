$(document).ready(function() {
	/*for (var j = 1; j <= 100; j++) {
		var number=j;
		if(number % 3 == 0 && number % 5 == 0){
			number='fizzbuzz'

		}else if (number % 5 == 0) {
			number='buzz'
		}else if (number % 3 == 0) {
			number='fizz'
		}
		$('p').append(number+'<br/>');
		console.log(number);
	};*/

	var fizzButton = $('button');
	var fizzInput = $('input');
		//Add item to list if Add Item button is pressed
	fizzButton.click(function() {
		fizzbuzzer(fizzInput.val());
	})
	//Add item to list when enter key is pressed
	fizzInput.keyup(function(e) {
		if (e.keyCode == 13)
			fizzbuzzer(fizzInput.val());
	})
	function fizzbuzzer(num) {
		$('ul').empty();
		if (isNaN(num)) {
				alert('Enter a Number');
		}else if(num % 1 !==0){
			alert('Enter Whole Number');
		}
		else if (num  <= 0) {
			alert('Enter Number Greater Than 0');
		}else if (num % 1 == 0){
		for (var j = 1; j <= num; j++) {
			var number=j;
			if(number % 3 == 0 && number % 5 == 0){
				number='fizzbuzz';
			}else if (number % 5 == 0) {
				number='buzz';
			}else if (number % 3 == 0) {
				number='fizz';
			}
			$('ul').append('<li>' + number + '</li>');
			//console.log(number);
			}
		};
		fizzInput.val("");
	}
});
