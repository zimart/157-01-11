export default {
skrot_typ: function () {
var typ_moskitiery = typmoskitiery.selectedOptionLabel;
var skrottyp;
if (typ_moskitiery === "RAMKOWA") { skrottyp = "MR"; }
else if (typ_moskitiery === "OTWIERANA-MRO") { skrottyp = "MRO"}
else if (typ_moskitiery === "PRZESUWNA-MRP") { skrottyp = "MRP"}
else if (typ_moskitiery === "PLISOWANA-MPH") { skrottyp = "MPH"}
else if (typ_moskitiery === "ZWIJANA MZN") { skrottyp = "MZN"}
else if (typ_moskitiery === "PIONOWA MPH-VERTI") { skrottyp = "VERTI"}
	
return skrottyp;

},		
}