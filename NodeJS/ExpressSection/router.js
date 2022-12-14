const express = require('express');
const app = express();


app.get("/", (req, res) => {
    res.send("Welcome to Routing \n use test,about,data for check routing");

});

app.get("/test", (req, res) => {
    res.status(200).send("Its Testing");
});

app.get("/about", (req, res) => {
    res.status(200).send("Some information");
});

app.get("/data", (req, res) => {
    res.status(200).send("SQL data");
});

app.listen(3000, () => {
    console.log('listening on poet no 3000');
})