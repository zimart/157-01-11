export default {
wymaganynaped: function () {
//var wartoscdoplaty = doplatakolorinput.text;
var wysieg3 = Input31.text;
var wymaganynapedmoc;
//var skrzynka = Select8.selectedOptionValue;
if (wysieg3 <= 2500) { wymaganynapedmoc = 40; }
//var doplatakolor = (cenasystemubaza*(doplatakolorinput22.text/100));
if (wysieg3 > 2500 && wysieg3 <=3500) { wymaganynapedmoc= 50; }
if (wysieg3 = 4000) { wymaganynapedmoc= 85; }
//else wymaganynapedmoc = '0';
return wymaganynapedmoc;
},
}