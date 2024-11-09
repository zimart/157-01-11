export default {
	
wys2: function () {
var szerokoscm = rodzajwysokosci.selectedOptionValue;
var podana = podawana_wysokosc_input.text;
var skrzynka = wartoscskrzynka.text;
var szerm33;
if (szerokoscm === '1') { szerm33 = podana; }
else if (szerokoscm === '2') { szerm33 = podana + skrzynka }
return szerm33;
},
	
	
wys2_form: function () {
var szerokoscm2 = edit_rodzaj_pomiaru.selectedOptionValue;
var podana2 = edit_podawana_wysokosc_input.text;
var skrzynka2 = edit_wartosc_skrzynka.text;
var szerm332;
if (szerokoscm2 === '1') { szerm332 = podana2; }
else if (szerokoscm2 === '2') { szerm332 = podana2 +skrzynka2}
return szerm332;
}
	
	 
	
};


    

