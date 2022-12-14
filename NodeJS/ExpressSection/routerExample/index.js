const express = require('express');

const app = express();
const product = require('./routes/product');
const userD = require('./routes/userDetails')

app.use('/user',userD);

app.use('/',product);
app.use('/product',product);


app.listen(3000);