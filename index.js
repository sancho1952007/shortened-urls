const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

var spost='https://spost.sanchogodinho.repl.co/';

app.use(express.static(__dirname));
app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('https://github.com/sancho1952007');
});

app.get('/spost', (req, res) => {
    if (req.query!=[]){
        var query = req.query;
        var sent='?';
        for (each in query){
            sent+=each+'='+query[each]+'&';
        }
        res.redirect(spost+sent.slice(0, -1));
    }
    else{
        res.redirect(spost);
    }
});

app.listen(8080);