export default {
zmientabele: function () {
//var tabela = {{Input1.text}};
var rodzajzapytania = Select2.selectedOptionLabel;
var zapytanie;
//var obwod2;
if (rodzajzapytania === "1.Wszyscy") { zapytanie = "{{SelectQuery.data}}"; }
else zapytanie === "{{SelectQueryCopy.data}}"; //{obwod2=(((3*szerokosc)+(2*wysokosc))/1000);}
//else if (typ_moskitiery === "PRZESUWNA-MRP") {obwod2=(((3*szerokosc)+(2*wysokosc))/1000);}
//else if (typ_moskitiery === "PLISOWANA-MPH") {obwod2=(((1*szerokosc)+(3*wysokosc))/1000);}
//else if (typ_moskitiery === "ZWIJANA MZN") {obwod2=(((1*szerokosc)+(2*wysokosc))/1000);}
//else if (typ_moskitiery === "PIONOWA MPH-VERTI") {obwod2=(((3*szerokosc)+(2*wysokosc))/1000);}
	
return zapytanie;

},		
	
}
	
