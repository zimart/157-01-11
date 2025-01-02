export default {
	
czywymagane: function () {
var rodzajsterowania = Select17.selectedOptionLabel;
var wymagane;
if (rodzajsterowania === "Elektryczne") { wymagane = "true" }
//var doplatakolor = (cenasystemubaza*(doplatakolorinput22.text/100));
//if (szerokoscm === '1') { szerm33 = podana; }
else wymagane = "false";
return wymagane;
},	

	
tkaninamax: function () {
var grupatkaniny = Select9.selectedOptionLabel;
var cenabazowamarkizy = cenabazowasystemu.text;
var doplatamax;
if (grupatkaniny === 'DICKSON MAX') { doplatamax = (cenabazowasystemu.text * 0.10); }
else doplatamax = '0';
return doplatamax;
},
	

};