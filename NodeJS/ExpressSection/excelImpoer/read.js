const xs = require('xlsx');

const file = xs.readFile("./TestData.xlsx");

let data = []

const sheets = file.SheetNames

for (let i =0 ;i<sheets.length; i++){
    const temp = xs.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]]

    )
    temp.forEach((res)=> {
        data.push(res)
    })
}

console.log(data);

