export default {

async BuildPDF () {
const doc = jspdf.jsPDF();
const data2 = glowna_tabela.tableData;
const numer = idoferty_appsmith.text;
const Roboto = Input1.text;
const Robotobold = Input9.text;
const footer = stopka.text;

// Custom headers
const columns = [
{ header: 'Lp', dataKey: 'Lp' },
{ header: 'Produkt', dataKey: 'Produkt' },
{ header: 'Ilość', dataKey: 'Ilosc' },
//{ header: 'Netto', dataKey: 'cenanetto' } ,// Custom header with currency
//{ header: 'Rabat %', dataKey: 'Rabatprocent' } ,// Custom header with currency
//{header: 'Kwota rabatu', dataKey: 'Rabat' } ,// Custom header with currency
{ header: 'Netto', dataKey: 'nettopo' } ,// Custom header with currency
//{ header: 'Opis', dataKey: 'Opis' }, // Custom header with currency
{ header: 'Razem netto', dataKey: 'razemnetto' }, // Custom header with currency
{ header: 'VAT %', dataKey: 'vat' }, // Custom header with currency
{ header: 'Kwota podatku', dataKey: 'vatkwota' }, // Custom header with currency
{ header: 'Do zapłaty', dataKey: 'Brutto' } // Custom header with currency
];	
	
const columns2 = [
{ header: 'szczegoly', dataKey: 'szczegoly' }
];	

const columns3 = [
{ header: 'szczegoly', dataKey: 'szczegoly' }
];	
	
// Custom headers - kalkulacja z rabatami
const columns4 = [
{ header: 'Lp', dataKey: 'Lp' },
{ header: 'Produkt', dataKey: 'Produkt' },
{ header: 'Ilość', dataKey: 'Ilosc' },
//{ header: 'Netto', dataKey: 'cenanetto' } ,// Custom header with currency
//{ header: 'Rabatt %', dataKey: 'Rabatprocent' } ,// Custom header with currency
//{header: 'Rabattbetrag', dataKey: 'Rabat' } ,// Custom header with currency
{ header: 'Netto po rabacie', dataKey: 'nettopo' } ,// Custom header with currency
//{ header: 'Opis', dataKey: 'Opis' }, // Custom header with currency
{ header: 'Razem netto', dataKey: 'razemnetto' }, // Custom header with currency
//{ header: 'Steuer %', dataKey: 'vat' }, // Custom header with currency
//{ header: 'Steuerbetrag', dataKey: 'vatkwota' }, // Custom header with currency
//{ header: 'Zu bezahlen', dataKey: 'Brutto' } // Custom header with currency
];		
	

const currencyRate = kursinput.text; // Example currency rate for conversion
const narzuty = narzutpdf.text;
const data = glowna_tabela.tableData.map(item => ({
//Produkt: item.Produkt +"\n"+item.opiszrabatami,
Lp:item.seq,
Produkt: item.Produkt +"\n"+item.skugen+"\n"+item.komentarz,
//Produkt: item.Produkt,
Ilosc: item.Ilosc,
cenanetto: ((item.cenanetto / currencyRate)*narzuty).toFixed(2),// Convert price using currency rate
Opis: item.opiszrabatami,
Rabatprocent: item.rabatogolny,
Rabat: ((item.kwotarabatogolny/currencyRate)*narzuty).toFixed(2),
nettopo: ((item.cenaporabacie / currencyRate)*narzuty).toFixed(2),
razemnetto: ((item.razemnetto/ currencyRate)*narzuty).toFixed(2),
vat: item.vat,
vatkwota: ((item.razemnetto*(item.vat/100))*narzuty).toFixed(2),
Brutto: ((item.brutto/ currencyRate)*narzuty).toFixed(2)
}));	
	
const data4 = glowna_tabela.tableData.map(item => ({
//Produkt: item.Produkt +"\n"+item.opiszrabatami,
Lp:item.seq,
//Produkt: item.opiszrabatami_de,
Produkt: item.Produkt+"\n"+item.skugen+"\n"+"\n"+item.opiszrabatami,
//Produkt: item.Produkt,
Ilosc: item.Ilosc,
cenanetto: ((item.cenanetto / currencyRate)*narzuty).toFixed(2),// Convert price using currency rate
Opis: item.opiszrabatami,
Rabatprocent: item.rabatogolny,
Rabat: ((item.kwotarabatogolny/currencyRate)*narzuty).toFixed(2),
nettopo: ((item.cenaporabacie / currencyRate)*narzuty).toFixed(2),
razemnetto: ((item.razemnetto/ currencyRate)*narzuty).toFixed(2),
vat: item.vat,
vatkwota: ((item.razemnetto*(item.vat/100))*narzuty).toFixed(2),
Brutto: ((item.brutto/ currencyRate)*narzuty).toFixed(2)
}));		
	
	
doc.addFileToVFS("RobotoCondensed-Regular.ttf", Roboto);
doc.addFont("RobotoCondensed-Regular.ttf", "Roboto", "normal");

doc.addFileToVFS("RobotoCondensed-Bold-normal.ttf", Robotobold);
doc.addFont("RobotoCondensed-Bold-normal.ttf", "Robotobold", "normal");

     doc.setFont("Roboto"); // set font
	
    //  doc.setFont ("Helvetica");
	    doc.addImage(Text13.text,'PNG',175,15,20,20);
	    doc.setDrawColor(akcent.text);
	    doc.setLineWidth(1.5);
      doc.line(15, 15, 170, 15);
	
	    doc.setDrawColor(247, 247, 247);
	    doc.setLineWidth(8);
      doc.line(15, 46, 198, 46);
	
	
	    doc.setFontSize("9")
      doc.text (nagl.text, 15, 20);
	
	    doc.setFontSize("10");
	     doc.setFont("Robotobold"); // set font
	    doc.text ("OFERTA", 16, 48);
	     doc.text (dataoferty.text, 180,48);
	    doc.text (numeroferty.text, 32, 48);
	   // doc.text (Text21.text, 175, 48);
	    
	    doc.setFont("Roboto"); // set font
	    doc.setFontSize("10");
	    doc.text ("Klient: ", 15, 58);
	    doc.setFont("Robotobold"); // set font
	    doc.text(klientdane.text, 15, 63);
	 
	
	     doc.setFont("Roboto"); // set font
	    doc.setFontSize("10")
	   doc.text ("Serdecznie dziękujemy za zainteresowanie naszą ofertą handlową. Mamy nadzieję, że dokonają Państwo trafnego wyboru.", 15, 80);
     doc.text ("Poniżej znajdziecie Państwo szczegóły naszej oferty.", 15, 84);

//tabela-opis-oferty	
CellHookData_3(doc, {
theme: 'grid',
	headStyles: { 
		fillColor:  [255, 255, 255] ,
           // lineColor: 'black',
							 lineWidth: 0,
            //lineColor: 'black'
							 fontSize: 10,
							 fontStyle: 'bold',
							},
	startY: 90,
	columnStyles: { europe: { halign: 'left',valign: 'middle' },
             Produkt: {
       //fontStyle: 'bold',
							 halign: 'left',
							 valign: 'middle',
							 lineWidth: 0,
      },
								
								},
	styles: { cellPadding: 1, fontSize: 10,
					 textColor:0,
					 //font: 'Amiri',
					 font: 'Roboto',
					//  font:'Helvetica',
           // lineColor: 'black',
					 cellWidth: 'auto',
					overflow: 'linebreak',
//					overflow: 'linebreak'|'ellipsize'|'visible'|'hidden' = 'linebreak'
//fillColor: 255,
//textColor: Color? = 20
//cellWidth: 'auto'|'wrap'|number = 'auto'
minCellWidth: 8,
minCellHeight:8,
//minCellHeight: number = 0
halign: 'left',
valign: 'middle',
//	halign: 'left'|'center'|'right' = 'left'
//valign: 'top'|'middle'|'bottom' = 'top'
//fontSize: number = 10
//cellPadding: Padding = 10
//lineColor: Color = 10
lineWidth: border = 0 // If 0, no border is drawn
				
					
					
					
					},		
	
	// European countries centered
body: [
  { opis: opisoferty.text },
 
],
columns: [
  { header: "Opis oferty:", dataKey: 'opis' },
 
]

});
//koniec-tabeli-opis-oferty	
	
//ustalenie-po-pierwszej-tabeli-po-opisie-oferty
const finalY1 = doc.lastAutoTable.finalY; // The y position where the table ends	
 doc.setFontSize("10");
 doc.text (walutatekst.text, 15, finalY1+8);
 doc.text (KURSOPIS.text, 35, finalY1+8);
	
	
	
// tabela-glowna
CellHookData_3(doc, {
	theme: 'grid',
	headStyles: { fillColor:  [247, 247, 247] ,
           // lineColor: 'black',
							 lineWidth: 0.1,
            //lineColor: 'black'
							 fontSize: 9,
							 fontStyle: 'bold',
							},
	startY: finalY1+10,
	columnStyles: { europe: { halign: 'center',valign: 'middle' },
             Produkt: {
       //fontStyle: 'bold',
							 halign: 'left',
							 valign: 'middle'
      },
								
								},
	styles: { cellPadding: 1.2, fontSize: 9,
					 textColor:0,
					 //font: 'Amiri',
					 font: 'Roboto',
					//  font:'Helvetica',
           // lineColor: 'black',
					 cellWidth: 'auto',
					overflow: 'linebreak',
//					overflow: 'linebreak'|'ellipsize'|'visible'|'hidden' = 'linebreak'
//fillColor: 255,
//textColor: Color? = 20
//cellWidth: 'auto'|'wrap'|number = 'auto'
minCellWidth: 8,
minCellHeight:8,
//minCellHeight: number = 0
halign: 'center',
valign: 'middle'
//	halign: 'left'|'center'|'right' = 'left'
//valign: 'top'|'middle'|'bottom' = 'top'
//fontSize: number = 10
//cellPadding: Padding = 10
//lineColor: Color = 10
//lineWidth: border = 0 // If 0, no border is drawn
					
					
					
					
					},			
  columns: columns,
  body: data,
	 willDrawPage: function (data) {
      // Header
      doc.setFontSize(20)
      doc.setTextColor(40)
     // if (base64Img) {
     //   doc.addImage(base64Img, 'JPEG', data.settings.margin.left, 15, 10, 10)
      },
});
// koniec tabeli glownej
const narzuty2 = narzutpdf.text;
// ustalenie final2-po tabeli glownej-i cena netto
const finalY2 = doc.lastAutoTable.finalY; // The y position where the table ends

	doc.setFont("Robotobold");
doc.text(razemnetto_pl.text, 15, finalY2 + 10);
doc.text(podatek_pl.text, 15, finalY2 + 15); 
	doc.setFont("Roboto");
doc.text("Do zapłaty z podatkiem :", 15, finalY2 + 25);
	
  doc.setFontSize("13");
	doc.setFont("Robotobold"); // set font	
doc.text(razembrutto_de.text, 15, finalY2 + 30);
	

//doc.addPage();
//doc.text(textpdfdlugi.text, 15, finalY2 + 30);	
	
//const finalY3 = doc.lastAutoTable.finalY; // The y position where the table ends			
	

//doc.text(textpdfdlugi.text, 15, finalY2 + 30);		
	
//tabela-opis-z-danymi
CellHookData_3(doc, {
theme: 'grid',
	headStyles: { 
		fillColor:  [255, 255, 255] ,
           // lineColor: 'black',
							 lineWidth: 0,
            //lineColor: 'black'
							 fontSize: 10,
							 fontStyle: 'bold',
							},
	startY: finalY2+30,
	columnStyles: { europe: { halign: 'left',valign: 'middle' },
             Produkt: {
       //fontStyle: 'bold',
							 halign: 'left',
							 valign: 'middle',
							 lineWidth: 0,
      },
								
								},
	styles: { cellPadding: 1, fontSize: 10,
					 textColor:0,
					 //font: 'Amiri',
					 font: 'Roboto',
					//  font:'Helvetica',
           // lineColor: 'black',
					 cellWidth: 'auto',
					overflow: 'linebreak',
//					overflow: 'linebreak'|'ellipsize'|'visible'|'hidden' = 'linebreak'
//fillColor: 255,
//textColor: Color? = 20
//cellWidth: 'auto'|'wrap'|number = 'auto'
minCellWidth: 8,
minCellHeight:8,
//minCellHeight: number = 0
halign: 'left',
valign: 'middle',
//	halign: 'left'|'center'|'right' = 'left'
//valign: 'top'|'middle'|'bottom' = 'top'
//fontSize: number = 10
//cellPadding: Padding = 10
//lineColor: Color = 10
lineWidth: border = 0 // If 0, no border is drawn
				
					
					
					
					},		
	
	// European countries centered
body: [
  { opis: textpdfdlugipl.text },
 
],
columns: [
  { header: i18n.translate(" "), dataKey: 'opis' },
 
]

});
//koniec-tabeli-opis-opis-z-danymi	

//function addFooters() {
//    const pageCount = doc.internal.getNumberOfPages();
//    for(var i = 1; i <= pageCount; i++) {
			
//         doc.setFontSize("8");
//	doc.setFont("Roboto"); // set font	
//doc.text(footer, 15, 285);			
//        //doc.text(String(i), 15, 285);
//			  
//    }
//}	
	
doc.setFontSize("8");
	doc.setFont("Roboto"); // set font	
	 doc.addImage(Input10.text,'PNG',15,265,180,15);
   doc.text(footer, 15, 285);			
	//nowa strona
	
	   doc.addPage();
	    doc.setDrawColor(247, 247, 247);
	    doc.setLineWidth(8);
      doc.line(15, 15, 198, 15);
	    doc.setFontSize("10");
	     doc.setFont("Robotobold"); // set font
	    doc.text ("OFERTA", 16, 16);
	    doc.text (dataoferty.text, 180, 16);
	    doc.text (numeroferty.text, 32, 16);
   	doc.setFontSize("11");
	     doc.setFont("Robotobold"); // set font
	 doc.text ("Kalkulacja pozycji", 15, 25);
	
	
	   // doc.text (Text21.text, 175, 48);
// tabela-kalkulacja
CellHookData_3(doc, {
	theme: 'grid',
	headStyles: { fillColor:  [247, 247, 247] ,
           // lineColor: 'black',
							 lineWidth: 0.1,
            //lineColor: 'black'
							 fontSize: 9,
							 fontStyle: 'bold',
							},
	startY: 30,
	columnStyles: { europe: { halign: 'center',valign: 'middle' },
             Produkt: {
       //fontStyle: 'bold',
							 halign: 'left',
							 valign: 'middle'
      },
								
								},
	styles: { cellPadding: 1.2, fontSize: 9,
					 textColor:0,
					 //font: 'Amiri',
					 font: 'Roboto',
					//  font:'Helvetica',
           // lineColor: 'black',
					 cellWidth: 'auto',
					overflow: 'linebreak',
//					overflow: 'linebreak'|'ellipsize'|'visible'|'hidden' = 'linebreak'
//fillColor: 255,
//textColor: Color? = 20
//cellWidth: 'auto'|'wrap'|number = 'auto'
minCellWidth: 8,
minCellHeight:8,
//minCellHeight: number = 0
halign: 'center',
valign: 'middle'
//	halign: 'left'|'center'|'right' = 'left'
//valign: 'top'|'middle'|'bottom' = 'top'
//fontSize: number = 10
//cellPadding: Padding = 10
//lineColor: Color = 10
//lineWidth: border = 0 // If 0, no border is drawn
					
					
					
					
					},			
  columns: columns4,
  body: data4,
	 willDrawPage: function (data) {
      // Header
      doc.setFontSize(20)
      doc.setTextColor(40)
     // if (base64Img) {
     //   doc.addImage(base64Img, 'JPEG', data.settings.margin.left, 15, 10, 10)
      },
});	
	
	const finalY5 = doc.lastAutoTable.finalY; // The y position where the table ends

	doc.setFont("Robotobold");
 // doc.text(razemnetto_de.text, 15, finalY5 + 10);

	doc.setFontSize("8");
	doc.setFont("Roboto"); // set font	
	 doc.addImage(Input10.text,'PNG',15,265,180,15);
   doc.text(footer, 15, 285);	
	
//addFooters(doc);
//return doc.output("dataurlstring");
	download(doc.output(), Text29.text);
//doc.save('table.pdf');
}
}
	