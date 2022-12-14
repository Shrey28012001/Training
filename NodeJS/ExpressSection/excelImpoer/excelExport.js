const xs = require('xlsx');

const data = [
    {
        name:'Shrey',
        mobi:12345,
        age:25,
        address:'surat'
    },
    {
        name:'Shambhu',
        mobi:65424,
        age:20,
        address:'motavarachha'
    }   
]

const createExcel = () => {
    const workSheet = xs.utils.json_to_sheet(data);
    const workBook = xs.utils.book_new();

    xs.utils.book_append_sheet(workBook,workSheet,"ExportData");

    xs.writeFile(workBook,"ExportData.xlsx")
}
createExcel();
console.log("Done");