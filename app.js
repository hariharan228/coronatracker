const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const ejs = require('ejs');
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const trackerRoutes = require('./routes/tracker');
const request = require ('request');
let browser;
let url = "https://covid19-indialive.easocare.com/"
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('public'));
dotenv.config({path:'config.env'});


app.get('/results', (req, res)=> {

    let query = req.query.search;
    
    request('https://api.covid19india.org/district_wise.json', (error, response, body) => {
        if(error) {
            console.log(error);
        }

        let disdata = JSON.parse(body);
        res.render('district', {disdata:disdata, searchQuery:query});

    });
    

});


PORT = process.env.PORT;

app.use(trackerRoutes);
app.listen(PORT,()=>{
    console.log('localhost:'+ PORT+'/');
});