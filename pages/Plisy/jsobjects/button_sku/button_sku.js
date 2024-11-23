export default {
		
oblicz: async () => {
//var wartoscdoplaty = doplatakolorinput.text;
//var skrzynka = Select8.selectedOptionValue;
//var doplatakolor = (cenasystemubaza*(doplatakolorinput.text/100));
//await showModal(LanguageLoading.name)

await Plisy_indeksszer.run();
//.then(() => 
await Plisy_indekswys.run();
//.then(() => 
await  removeValue('sku_value');
await  storeValue('sku_value', tymczasowy.text);
await  Plisy_danesku.run();
await Plisy_doplata_kolor.run();
await  storeValue('cenaplisy', Input32.text);	
//await closeModal(LanguageLoading.name))	;

},
	
plisy_dodaj_pozycje: async () => {
//var wartoscdoplaty = doplatakolorinput.text;
//var skrzynka = Select8.selectedOptionValue;
//var doplatakolor = (cenasystemubaza*(doplatakolorinput.text/100));
//await showModal(LanguageLoading.name)

await Plisy_dodajpozycje.run();
//.then(() => 
await Plisy_przeliczpozycje.run();
await Plisy_tabela_inventory_id_new.run();
},	
	
	
oblicz_form: async () => {
//var wartoscdoplaty = doplatakolorinput.text;
//var skrzynka = Select8.selectedOptionValue;
//var doplatakolor = (cenasystemubaza*(doplatakolorinput.text/100));
//await showModal(LanguageLoading.name)

await Plisy_FORM_indeksszer.run();
//.then(() => 
await Plisy_FORM_indekswys.run();
	
//.then(() => 
await  removeValue('sku_value');
await Plisy_FORM_grupa_kolekcja.grupa();

await  storeValue('grupa', Plisy_FORM_grupa_kolekcja.grupa.data);
await  storeValue('sku_value', edit_tymczasowy.text);
await  Plisy_FORM_danesku.run();
await Plisy_FORM_doplata_kolor.run();
await  storeValue('cenaplisy', cenastore.text);	
//await closeModal(LanguageLoading.name))	;

},	
	
	
}


