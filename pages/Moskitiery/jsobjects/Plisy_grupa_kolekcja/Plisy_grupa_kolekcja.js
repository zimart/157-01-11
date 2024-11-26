export default {
grupa: function () {
var kolekcja = seria_ramka.selectedOptionValue;
var grupa;
if (kolekcja === "P200") { grupa = 'G1'; }
else if (kolekcja === "P300") { grupa = 'G2'}
else if (kolekcja === "P600") { grupa = 'G2'}
else if (kolekcja === "P900") { grupa = 'G3'}
return grupa;

}
	 
	
};