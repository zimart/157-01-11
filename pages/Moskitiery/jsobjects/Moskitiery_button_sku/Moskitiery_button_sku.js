export default {
		
oblicz_moskitiery: async () => {
//var wartoscdoplaty = doplatakolorinput.text;
//var skrzynka = Select8.selectedOptionValue;
//var doplatakolor = (cenasystemubaza*(doplatakolorinput.text/100));
//await showModal(LanguageLoading.name)

await Moskitiery_indeksszer.run();
//.then(() => 
await Moskitiery_indekswys.run();
await Moskitiery_js.obwod();
await Moskitiery_js.polemalowania();
//.then(() => 
await  removeValue('sku_value');
await  storeValue('sku_value', moskitiery_tymczasowy.text);
await  Moskitiery_danesku.run();
//await Plisy_doplata_kolor.run();
await  storeValue('cenamoskitiery', cena_sku.text);	
//await closeModal(LanguageLoading.name))	;

},
	
moskitiery_dodaj_pozycje: async () => {
//var wartoscdoplaty = doplatakolorinput.text;
//var skrzynka = Select8.selectedOptionValue;
//var doplatakolor = (cenasystemubaza*(doplatakolorinput.text/100));
//await showModal(LanguageLoading.name)

await Moskitiery_dodajpozycje.run();
//.then(() => 
await Moskitiery_przeliczpozycje.run();
await Moskitiery_tabela_inventory.run();
},	
	
	
oblicz_form: async () => {
//var wartoscdoplaty = doplatakolorinput.text;
//var skrzynka = Select8.selectedOptionValue;
//var doplatakolor = (cenasystemubaza*(doplatakolorinput.text/100));
//await showModal(LanguageLoading.name)

await Moskitiery_FORM_indeksszer.run();
//.then(() => 
await Moskitiery_FORM_indekswys.run();
	
await Moskitiery_js.edit_obwod();
await Moskitiery_js.edit_polemalowania();
//.then(() => 
await  removeValue('edit_sku_value');
await  storeValue('edit_sku_value', edit_tymczasowy.text);
await  Moskitiery_FORM_danesku.run();
//await Plisy_doplata_kolor.run();
await  storeValue('cenamoskitiery', cenastore.text);	
//await closeModal(LanguageLoading.name))	;

	

}
	
	
}


