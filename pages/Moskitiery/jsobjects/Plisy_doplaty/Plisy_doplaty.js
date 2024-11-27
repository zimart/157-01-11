export default {
mocowanie: function () {
var mocowanie = select_mocowanie.selectedOptionValue;
var doplatamocowanie;
if (mocowanie === 'Standard') { doplatamocowanie = 0; }
else if (mocowanie === 'Standard-regulowany') { doplatamocowanie = 10}
else if (mocowanie === 'Bezinwazyjne-standard') { doplatamocowanie = 10}
else if (mocowanie === 'Bezinwazyjne-wydłużone') { doplatamocowanie = 12}
return doplatamocowanie;

},
	
	
	
	
	
prowadnica: function () {
var czyprowadnica = typmoskitiery.selectedOptionValue;
var doplataprowadnica;
if (czyprowadnica === 'DACHOWA-VEGAS') { doplataprowadnica = 60; }
else  doplataprowadnica = 0;
return doplataprowadnica;
},
	 
	
};