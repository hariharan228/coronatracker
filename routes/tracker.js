const express = require('express');
const router = express.Router();
const request = require('request');
//Get routes starts

router.get('/', (req, res)=> { 

    request('https://api.covid19india.org/district_wise.json', (error, response, body) => {
        if(error) {
            console.log(error);
        }

        let data = JSON.parse(body);
        res.render('index', {data:data});

    });
 

});
router.get('/visual',(req,res)=>{
    request('https://api.covid19india.org/districts_daily.json',(error,response,body)=>{
        if(error){
            console.log(error);
        }
        let graph = JSON.parse(body);
        res.render('visual',{graph:graph});
    });
})
router.get('/madurai',(req,res)=>{
    request('https://api.covid19india.org/districts_daily.json', (error, response, body) => {
    if(error){
        console.log(error);
    }
    let daily = JSON.parse(body);
    res.render('madurai',{daily:daily})
});
});
router.get('/results', (req, res)=> {

    let query = req.query.search;

    request('https://api.covid19india.org/district_wise.json',query, (error, response, body) => {
        if(error) {
            console.log(error);
        }

        let disdata = JSON.parse(body);
        res.render('district', {disdata:disdata, searchQuery:query});

    });

});

router.get('/what',(req,res)=>{
    res.render('what');
});

router.get('/how',(req,res)=>{
    res.render('how');
});

router.get('/tamilnadu',(req,res)=>{
    request('https://api.covid19india.org/district_wise.json', (error, response, body) => {
        if(error) {
            console.log(error);
        }

        let tnStateData = JSON.parse(body);
        res.render('tamilnadu', {tnStateData:tnStateData});

    });
});

router.get('/india',(req,res)=>{
    request('https://api.covid19india.org/district_wise.json', (error, response, body) => {
        if(error) {
            console.log(error);
        }

        let indData = JSON.parse(body);
        res.render('india', {indData:indData});

    });
});

router.get('/world',(req,res)=>{
    request('https://api.covid19api.com/summary',(error,response,body)=>{
        if(error) {
            console.log(error);
        }

        let worldData = JSON.parse(body);
        res.render('world', {worldData:worldData});
    });
    
        
});
//get route ends



module.exports = router;