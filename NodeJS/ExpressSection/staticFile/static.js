const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.static('data'));

app.get('/',(req,res) => {
    res.send('Basic information');
})


app.get('/data',(req,res) => {
    res.send('Data Are stored!!!');
})

app.listen(PORT, () => {
    console.log(`Server listen on port : ${PORT}`);
})