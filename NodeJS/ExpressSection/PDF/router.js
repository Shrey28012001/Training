const express = require('express');
const {homeview, generatePdf}  = require('./controller');

const router = express.Router();

router.get('/', homeview);
router.get('/download', generatePdf);

module.exports = {
    routes: router
}