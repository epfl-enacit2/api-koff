var express = require('express')
var app = express()
var fs = require("fs")
var bodyParser = require('body-parser')

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.get('/', function (req, res) {

    res.json({
        people: [
            { name: 'NiCrau', sciper: '262544', consumed: 3, payed: 0, hasPhoto: true },
            { name: 'Vitor', sciper: '269711', consumed: 3, payed: 0, hasPhoto: false },
            { name: 'Mickael', sciper: '240312', consumed: 4, payed: 4, hasPhoto: true },
            { name: 'André', sciper: '108332', consumed: 0, payed: 0, hasPhoto: true },
            { name: 'Nicdub', sciper: '167916', consumed: 0, payed: 0, hasPhoto: true },
            { name: 'Stefano', sciper: '150938', consumed: 0, payed: 0, hasPhoto: true }
        ]
    })
})

app.post('/pay', function (req, res) {
    fs.writeFile('toto.json', JSON.stringify(req.body.people), 'utf8');
});


app.listen(3000)