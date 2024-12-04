export default {
button_edit: async () => {
//var wartoscdoplaty = doplatakolorinput.text;
//var skrzynka = Select8.selectedOptionValue;
//var doplatakolor = (cenasystemubaza*(doplatakolorinput.text/100));
//await showModal(LanguageLoading.name)
//await clearStore();
showModal(modal_edit.name);
await clearStore();
await removeValue('edit_sku_value');
await Moskitiery_form_plisy_trigered.run();
await Moskitiery_FORM_typ_moskitery.run();
await Moskitiery_FORM_kolor_zapytaj.run();

//await Moskitiery_tabela_inventory.run();
//.then(() => 
//await closeModal(LanguageLoading.name))	;

},			
}