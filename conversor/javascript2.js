"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var resultF;
  var resultC;
  var resultK;
  var temp = original.value;
  var regexp = /([-+]?\d+(?:\.\d*)?)\E?(\d*)\s*([cCkKfF])/;
  
  var m = temp.match(regexp);
  
  if (m) {
    var num = m[1];
    var exp = m[2];
    var type = m[3];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
 
      resultF = (num*(10^exp) * 9/5)+32;
      resultF = resultF.toFixed(1)+" Farenheit  |";
	  resultK = (num*(10^exp) + 273.15);
	  resultK = resultK.toFixed(1)+" Kelvin   |";
	  resultC = num*(10^exp);
	  resultC = resultC.toFixed(1)+" Celsius   |";
	  
    }
    else if (type == 'f' || type =='F'){
      resultC = (num(10^exp) - 32)*5/9;
      resultC = resultC.toFixed(1)+" Celsius   |";
	  resultK = (num*(10^exp) + 459.67)*5/9;
	  resultK = resultK.toFixed(1)+" Kelvin   |";
	  resultF = num*(10^exp);
	  resultF = resultF.toFixed(1)+" Farenheit   |";
    }
	else if (type == 'k' || type == 'K'){
		resultF = num*(10^exp) * 9/5 - 459.67;
		resultF = resultF.toFixed(1)+" Farenheit   |";
		resultC = num*(10^exp) - 273.15;
		resultC = resultC.toFixed(1)+" Celsius   |";
		resultK = num*(10^exp);
		resultK = resultK.toFixed(1)+" Kelvin   |";
	}
	
	convertedF.innerHTML = resultF;
	convertedC.innerHTML = resultC;
	convertedK.innerHTML = resultK;


	
  }
  
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
  }
}
