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
var obwod;
if (typ_moskitiery === "RAMKOWA") { obwod = (((2*szerokosc)+(2*wysokosc))/1000); }
else if (typ_moskitiery === "OTWIERANA-MRO") { skrottyp = "MRO"}
else if (typ_moskitiery === "PRZESUWNA-MRP") { skrottyp = "MRP"}
else if (typ_moskitiery === "PLISOWANA-MPH") { skrottyp = "MPH"}
else if (typ_moskitiery === "ZWIJANA MZN") { skrottyp = "MZN"}
else if (typ_moskitiery === "PIONOWA MPH-VERTI") { skrottyp = "VERTI"}
	
return obwod;

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
	
	
}