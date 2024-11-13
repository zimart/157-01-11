export default {

kolor: function () {
//var wartoscdoplaty = doplatakolorinput.text;
var cenasystemubaza = cena_systemu.text;
var czydoplatakolor = Input17.text;
//var skrzynka = Select8.selectedOptionValue;
if (czydoplatakolor === 'tak') { doplatakolor = (cenasystemubaza*(doplatakolorinput22.text/100)); }
//var doplatakolor = (cenasystemubaza*(doplatakolorinput22.text/100));
//if (szerokoscm === '1') { szerm33 = podana; }
else doplatakolor = '0';
return doplatakolor;
},
	
	
tkanina: function () {
var kosztmetra = doplatatkaninam2.text;
var powierzchniam2 = appsmith.store.powierzchnia;
//var skrzynka = Select8.selectedOptionValue;
var tkaninacos = Select9.selectedOptionValue;
//var doplatatkanina = (doplatatkaninam2.text * powierzchnia.text);

if (tkaninacos === 'COPACO LUNAR') { doplatatkanina = (doplatatkaninam2.text * powierzchnia.text); }
//var doplatakolor = (cenasystemubaza*(doplatakolorinput22.text/100));
//if (szerokoscm === '1') { szerm33 = podana; }
else doplatatkanina = '0';
//if (szerokoscm === '1') { szerm33 = podana; }
//else if (szerokoscm === '2') { szerm33 = podana ; }
return doplatatkanina;
},
	

	
tkanina_form: function () {
var kosztmetra2 = doplatatkaninam2.text;
var powierzchniam2 = appsmith.store.edit_powierzchnia;
//var skrzynka = Select8.selectedOptionValue;
var tkaninacos2 = edit_tkanina.selectedOptionValue;
//var doplatatkanina = (doplatatkaninam2.text * powierzchnia.text);

if (tkaninacos2 === 'COPACO LUNAR') { doplatatkanina2 = (doplatatkaninam2.text * powierzchniam2); }
//var doplatakolor = (cenasystemubaza*(doplatakolorinput22.text/100));
//if (szerokoscm === '1') { szerm33 = podana; }
else doplatatkanina2 = '0';
//if (szerokoscm === '1') { szerm33 = podana; }
//else if (szerokoscm === '2') { szerm33 = podana ; }
return doplatatkanina2;
},
	
	
	
	 
wkladka: function () {
//var wartoscdoplaty = doplatakolorinput.text;
var cenametra = Input19.text;
var klipsy = kosztklipsow.text;
//var skrzynka = Select8.selectedOptionValue;
var dlugoscprowadnic = dlugosprowadnic.text;
var doplatawkladkacena;
if (wkladkaselect.selectedOptionLabel === 'NZIPS'&& szerokosc_input.text>1200) {doplatawkladkacena = (dlugoscprowadnic * cenametra)+klipsy; }
else doplatawkladkacena = '0';


return doplatawkladkacena;
},
	
wkladka_form: function () {
//var wartoscdoplaty = doplatakolorinput.text;
var cenametra2 = Input19.text;
var klipsy2 = edit_kosztklipsow.text;
//var skrzynka = Select8.selectedOptionValue;
var dlugoscprowadnic2 = edit_dlugosprowadnic.text;
var doplatawkladkacena2;
if (edit_wkladkaselect.selectedOptionLabel === 'NZIPS' && edit_szerokosc.text >1200) {doplatawkladkacena2 = (dlugoscprowadnic2 * cenametra2)+klipsy2; }
else doplatawkladka2 = '0';
return doplatawkladkacena2;
},
	
kolor_form: function () {
//var wartoscdoplaty = doplatakolorinput.text;
var cenasystemubaza2 = edit_cenasystemu.text;
var czydoplatakolor2 = edit_czydoplatakolor.text;
var doplatakolor2;
//var skrzynka = Select8.selectedOptionValue;
if (czydoplatakolor2 === 'tak') { doplatakolor2 = (edit_cenasystemu.text*(edit_doplatakolorinput22.text/100)); }
//var doplatakolor = (cenasystemubaza*(doplatakolorinput22.text/100));
//if (szerokoscm === '1') { szerm33 = podana; }
else doplatakolor2 = '0';
return doplatakolor2;
},
	
};