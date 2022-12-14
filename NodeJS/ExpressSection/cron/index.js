const express = require('express');
const cron = require('node-cron');

const app = express();

cron.schedule("*/30 * * * * *",()=> {
    console.log("This is cron example an it Run in every 10 sec.");
});

app.listen(3000)


/*
Descriptors with their ranges:

Seconds (optional): 0 – 59
Minute: 0 – 59
Hour: 0 – 23
Day of the Month: 1 – 31
Month: 1 – 12
Day of the week: 0 – 7 (0 and 7 both represent Sunday)
Examples:

// (* * 21 * *) – Runs 21th of every month
// (0 8 * * 1) – Runs 8 AM on every Monday
// */