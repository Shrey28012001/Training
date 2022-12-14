const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument();

doc.pipe(fs.createWriteStream('exaple.pdf'));

doc.fontSize(28).text('This the simple PDF generater Module !!!',100,100);

doc.image('nature.jpg',{
    fit:[600,600],
    align:'center',
    valign:'center'
});

doc.addPage().fontSize(22).text('Generating pdf with node',100,100);

doc.addPage().fillColor('green').text('The PDF generater module',100,100).link(100,100,160,27,'https://nxon.io/');

doc.end();
