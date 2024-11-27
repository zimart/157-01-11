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
	

	
}