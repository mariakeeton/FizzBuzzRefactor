$(document).ready(function() {
	for (var j = 1; j <= 100; j++) {
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
	};
});
