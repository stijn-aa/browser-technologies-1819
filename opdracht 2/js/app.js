const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const ejs = require('ejs')
const fs = require('fs')



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'))

app.get('/', function (req, res) {
    Page.start(res);
    console.log("mainpage")   
});
app.get('/vraag_1', function (req, res) {
    Page.een(res);
});
app.get('/vraag_2', function (req, res) {
    Page.twee(res);
});
app.get('/vraag_3', function (req, res) {
    Page.drie(res);
});
app.get('/resultaat', function (req, res) {
    Page.resultaat(res);
});
app.get('/index2', function (req, res) {
    Page.index2(res);
});



app.post('/vraag_1', function (req, res) {
    console.log(req.body)
    res.redirect('/vraag_1')
    
});
app.post('/antwoord_1', function (req, res) {
    storage.add(req);
    res.redirect('/vraag_2')
});
app.post('/antwoord_2', function (req, res) {
    storage.add(req);
    res.redirect('/vraag_3')
});
app.post('/antwoord_3', function (req, res) {
    storage.add(req);
    res.redirect('/resultaat')
});


const Page ={
    start: function(res){
        storage.reset();
        res.render('pages/index',{page: '../partials/start'});
    },
    een: function(res){
        res.render('pages/index',{page: '../partials/vraag_1'});
    },
    twee: function(res){
        res.render('pages/index',{page: '../partials/vraag_2'});
    },
    drie: function(res){
        res.render('pages/index',{page: '../partials/vraag_3'});
    },
    resultaat: function(res){
        storage.calc()

        res.render('pages/index',{page: '../partials/resultaat', result: storage.result});
    },
    index2: function(res){
        res.render('pages/index2');
    },
}

const storage={
    answers: {
    },
    result: 0,

    add: function(req){
      
        
        Object.keys(req.body).forEach(function (key) {
            storage.answers[key] = req.body[key]
        })
        console.log(storage.answers)

    },
    calc: function(){
        


        for (var property in storage.answers) {
            storage.result += Number(storage.answers[property]);
            console.log(storage.result)
        }
    
    },
    reset: function(){
        storage.result = 0;
    }

    

}



app.listen(8080);
console.log('8080 is the magic port');