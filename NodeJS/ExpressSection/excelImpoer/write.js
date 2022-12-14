
const xs = require('xlsx')
const file = xs.readFile('./TestData.xlsx')
  
// Sample data set
let student_data = [{
    Name: 'Shrey',
        Address: 'gota',
        Mobi: 123,
        abc: 546,
        s: 85
},
{
    Name: 'Shrey',
        Address: 'gota',
        Mobi: 123,
        abc: 546,
        s: 85
}]
  
const ws = xs.utils.json_to_sheet(student_data)
  
xs.utils.book_append_sheet(file,ws,"Sheet3")
  
// Writing to our file
xs.writeFile(file,'./TestData.xlsx')