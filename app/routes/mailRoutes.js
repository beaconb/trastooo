var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

module.exports = function(app){
    app.use(bodyParser.json());
    app.post('/email',function (req, res) {
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'beaconb.mail@gmail.com', // Your email id
                pass: 'Raul#G0mez' // Your password
            }
        });

        var text = 'Hello world from my home';

        var mailOptions = {
            from: 'beaconb.mail@gmail.com>', // sender address
            to: 'beaconb.mail@gmail.com', // list of receivers
            subject: 'Email Example', // Subject line
            text: text 
        };
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                 console.log('Error: ' +error);
            }else{
                console.log('Message sent: '+info.response );
            };
        });
    });
}