export default {
typ: async () => {
//var wartoscdoplaty = doplatakolorinput.text;
//var skrzynka = Select8.selectedOptionValue;
//var doplatakolor = (cenasystemubaza*(doplatakolorinput.text/100));
//await showModal(LanguageLoading.name)
//await clearStore();
//.then(() => 
await removeValue('sku_value');
await Moskitiery_skrot_system.skrot_typ();	
await Moskitiery_typ_moskitery.run();
await Moskitiery_kolor_zapytaj.run();
//.then(() => 
//await Moskitiery_tabela_inventory.run();
//.then(() => 
//await closeModal(LanguageLoading.name))	;

},
	
form_typ: async () => {
//var wartoscdoplaty = doplatakolorinput.text;
//var skrzynka = Select8.selectedOptionValue;
//var doplatakolor = (cenasystemubaza*(doplatakolorinput.text/100));
//await showModal(LanguageLoading.name)
//await clearStore();
//.then(() => 
await removeValue('edit_sku_value');
await Moskitiery_skrot_system.edit_skrot_typ();	
await Moskitiery_FORM_typ_moskitery.run();
//await Moskitiery_kolor_zapytaj.run();
	
//.then(() => 
//await Moskitiery_tabela_inventory.run();
//.then(() => 
//await closeModal(LanguageLoading.name))	;

},	
	
rodzaj: async () => {
//var wartoscdoplaty = doplatakolorinput.text;
//var skrzynka = Select8.selectedOptionValue;
//var doplatakolor = (cenasystemubaza*(doplatakolorinput.text/100));
//await showModal(LanguageLoading.name)
//await clearStore();
	
await removeValue('sku_value');
await Moskitiery_kolor_zapytaj.run();

//await Moskitiery_tabela_inventory.run();
//.then(() => 
//await closeModal(LanguageLoading.name))	;

},	
	
edit_rodzaj: async () => {
//var wartoscdoplaty = doplatakolorinput.text;
//var skrzynka = Select8.selectedOptionValue;
//var doplatakolor = (cenasystemubaza*(doplatakolorinput.text/100));
//await showModal(LanguageLoading.name)
//await clearStore();
	
await removeValue('edit_sku_value');
await Moskitiery_FORM_kolor_zapytaj.run();

//await Moskitiery_tabela_inventory.run();
//.then(() => 
//await closeModal(LanguageLoading.name))	;

},		
	
	
kolor: async () => {
//var wartoscdoplaty = doplatakolorinput.text;
//var skrzynka = Select8.selectedOptionValue;
//var doplatakolor = (cenasystemubaza*(doplatakolorinput.text/100));
//await showModal(LanguageLoading.name)
//await clearStore();
	
await removeValue('sku_value');
await Moskitiery_kolor_zapytaj.run();
await	Moskitiery_skrot_kolor.run();

//await Moskitiery_tabela_inventory.run();
//.then(() => 
//await closeModal(LanguageLoading.name))	;

},
	
obwod: function () {
var typ_moskitiery = typmoskitiery.selectedOptionLabel;
var szerokosc = szerokosc_input.text;
var wysokosc = podawana_wysokosc_input.text;
var obwod2;
if (typ_moskitiery === "RAMKOWA") { obwod2=(((2*szerokosc)+(2*wysokosc))/1000); }
else if (typ_moskitiery === "OTWIERANA-MRO") {obwod2=(((3*szerokosc)+(2*wysokosc))/1000);}
else if (typ_moskitiery === "PRZESUWNA-MRP") {obwod2=(((3*szerokosc)+(2*wysokosc))/1000);}
else if (typ_moskitiery === "PLISOWANA-MPH") {obwod2=(((1*szerokosc)+(3*wysokosc))/1000);}
else if (typ_moskitiery === "ZWIJANA MZN") {obwod2=(((1*szerokosc)+(2*wysokosc))/1000);}
else if (typ_moskitiery === "PIONOWA MPH-VERTI") {obwod2=(((3*szerokosc)+(2*wysokosc))/1000);}
	
return obwod2;

},	
	
edit_obwod: function () {
var typ_moskitiery2 = edit_linia.selectedOptionLabel;
var szerokosc2 = edit_szerokosc.text;
var wysokosc2 = edit_podawana_wysokosc_input.text;
var obwod6;
if (typ_moskitiery2 === "RAMKOWA") { obwod6=(((2*szerokosc2)+(2*wysokosc2))/1000); }
else if (typ_moskitiery2 === "OTWIERANA-MRO") {obwod6=(((3*szerokosc2)+(2*wysokosc2))/1000);}
else if (typ_moskitiery2 === "PRZESUWNA-MRP") {obwod6=(((3*szerokosc2)+(2*wysokosc2))/1000);}
else if (typ_moskitiery2 === "PLISOWANA-MPH") {obwod6=(((1*szerokosc2)+(3*wysokosc2))/1000);}
else if (typ_moskitiery2 === "ZWIJANA MZN") {obwod6=(((1*szerokosc2)+(2*wysokosc2))/1000);}
else if (typ_moskitiery2 === "PIONOWA MPH-VERTI") {obwod6=(((3*szerokosc2)+(2*wysokosc2))/1000);}
	
return obwod6;

},			
	
maksymalne_szer: function () {
var typ_moskitiery = typmoskitiery.selectedOptionLabel;
var max2;
if (typ_moskitiery === "RAMKOWA") { max2="min 300 max 1600"; }
else if (typ_moskitiery === "OTWIERANA-MRO") {max2="min 400 max 1200";}
else if (typ_moskitiery === "PRZESUWNA-MRP") {max2="min 601 max 1700";}
else if (typ_moskitiery === "PLISOWANA-MPH") {max2="min 501 max 4000";}
else if (typ_moskitiery === "ZWIJANA MZN") {max2="min 501 max 1600";}
else if (typ_moskitiery === "PIONOWA MPH-VERTI") {max2="min 901 max 2300";}
	
return max2;
},
	
maksymalne_wys: function () {
var typ_moskitiery = typmoskitiery.selectedOptionLabel;
var max3;
if (typ_moskitiery === "RAMKOWA") { max3="min 300 max 1600"; }
else if (typ_moskitiery === "OTWIERANA-MRO") {max3="min 1700 max 2500";}
else if (typ_moskitiery === "PRZESUWNA-MRP") {max3="min 1700 max 2538";}
else if (typ_moskitiery === "PLISOWANA-MPH") {max3="min 1501 max 2700";}
else if (typ_moskitiery === "ZWIJANA MZN") {max3="min 401 max 2500";}
else if (typ_moskitiery === "PIONOWA MPH-VERTI") {max3="min 601 max 2000";}
	
return max3;
},	

polemalowania: function () {
var kolormosk = kolor_select.selectedOptionLabel;
var obwod3 = obwodinput.text;
var polemalowania2;
if (kolormosk === "RAL SPECJALNY") { polemalowania2 = obwod3*0.14 }
else polemalowania2 = 0;

return polemalowania2;

},			

edit_polemalowania: function () {
var kolormosk7 = edit_kolor.selectedOptionLabel;
var obwod7 = edit_obwod.text;
var polemalowania7;
if (kolormosk7 === "RAL SPECJALNY") { polemalowania7 = obwod7*0.14 }
else polemalowania7 = 0;
return polemalowania7;

},			
	
	
edit_maksymalne_szer: function () {
var typ_moskitiery = edit_linia.selectedOptionLabel;
var max4;
if (typ_moskitiery === "RAMKOWA") { max4="min 300 max 1600"; }
else if (typ_moskitiery === "OTWIERANA-MRO") {max4="min 400 max 1200";}
else if (typ_moskitiery === "PRZESUWNA-MRP") {max4="min 601 max 1700";}
else if (typ_moskitiery === "PLISOWANA-MPH") {max4="min 501 max 4000";}
else if (typ_moskitiery === "ZWIJANA MZN") {max4="min 501 max 1600";}
else if (typ_moskitiery === "PIONOWA MPH-VERTI") {max4="min 901 max 2300";}
	
return max4;
},
	
edit_maksymalne_wys: function () {
var typ_moskitiery = edit_linia.selectedOptionLabel;
var max5;
if (typ_moskitiery === "RAMKOWA") { max5="min 300 max 1600"; }
else if (typ_moskitiery === "OTWIERANA-MRO") {max5="min 1700 max 2500";}
else if (typ_moskitiery === "PRZESUWNA-MRP") {max5="min 1700 max 2538";}
else if (typ_moskitiery === "PLISOWANA-MPH") {max5="min 1501 max 2700";}
else if (typ_moskitiery === "ZWIJANA MZN") {max5="min 401 max 2500";}
else if (typ_moskitiery === "PIONOWA MPH-VERTI") {max5="min 601 max 2000";}
	
return max5;
},		

}