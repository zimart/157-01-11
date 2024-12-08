export default {
wybranekonto: function () {
var wybranawaluta2 = Select6.selectedOptionValue;
var kontopdf;
if (wybranawaluta2 === "PLN") { kontopdf = kontopln.text; }
else if (wybranawaluta2 === "EUR") {  kontopdf = kontoeur.text ; }
return kontopdf;
},
}