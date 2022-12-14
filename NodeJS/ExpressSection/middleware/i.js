const express = require('express');
const user = require('./routes/user')
const app = express();

app.use('/',user)


app.listen(3000,()=>{
    console.log('listening on poet no 3000');
})