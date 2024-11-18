export default {
	
m2: function () {
var szerokoscm2 = szerokosc_input.text;
//var wysokoscm2 = wysokosc_input.text;
var wysokoscm2 = appsmith.store.calkowita;	
var powierzchniam2 = (szerokoscm2*wysokoscm2)/1000000;

//return 	powierzchniam2.toFixed(2);
return Number.parseFloat(powierzchniam2).toFixed(2);	
//	return powierzchniam2
},	
	
m2_form: function () {
var szerokoscm22 = edit_szerokosc.text;
//var wysokoscm2 = wysokosc_input.text;
var wysokoscm22 = appsmith.store.edit_calkowita;	
var powierzchniam22 = (szerokoscm22*wysokoscm22)/1000000;

//return 	powierzchniam2.toFixed(2);
return Number.parseFloat(powierzchniam22).toFixed(2);	
//	return powierzchniam2
},	
	 
	
};