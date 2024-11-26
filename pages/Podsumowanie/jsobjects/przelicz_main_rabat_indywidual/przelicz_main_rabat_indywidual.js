export default {
przelicz_glowna: async () => {
//var wartoscdoplaty = doplatakolorinput.text;
//var skrzynka = Select8.selectedOptionValue;
//var doplatakolor = (cenasystemubaza*(doplatakolorinput.text/100));
await showModal(LanguageLoading.name);
//.then(() => 
//await ustawrabatogolny.run();
	await rabatindywidualny.run();
//.then(() => 
await przeliczbezrabatu.run();
//.then(() => 
await tabela_glowna.run();

await sumanettoporabacie.run();
//.then(() => 
await sumabrutto.run();
//.then(() => 
await przenumeruj.run();	
	
await closeModal(LanguageLoading.name);

},
}
