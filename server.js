const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3001;

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// const cors = require('cors');
// app.use(cors);

app.use(express.static(__dirname + '/public'));

// const routes = require('./routes');

// app.use(routes);

// app.post('/api/form', (req, res) => {
//     console.log(req.body);
// })


app.post('/api/form', (req, res) => {
    var name = req.body.name
    var email = req.body.email
    var website = req.body.website
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n website: ${website} \n message: ${message}`

    const msg = {
        to: 'sarahnv@icloud.com',
        from: req.body.email,
        subject: 'New Message From Studio Bobo',
        text: content
        // html: '',
    };
    sgMail.send(msg);
});


app.listen(PORT, function () {
    console.log(`🌎 Server listening on port ${PORT}`);
});



// app.post('/api/v1', (req, res) => {

//     var smtpTransport = nodemailer.createTransport({
//         Server: 'smtp.gmail.com',
//         port: 465,
//         auth: {
//             user: process.env.EMAIL_GMAIL,
//             pass: process.env.EMAIL_GMAIL_PASS
//         }
//     });

//     var name = req.body.name
//     var email = req.body.email
//     var website = req.body.website
//     var message = req.body.message
//     var content = `name: ${name} \n email: ${email} \n website: ${website} \n message: ${message} `

//     var mail = {
//         from: name,
//         to: process.env.EMAIL_ICLOUD,  //Change to email address that you want to receive messages on
//         subject: 'New Message from Contact Form',
//         text: content
//     }

//     smtpTransport.sendMail(mail,
//         (error, response) => {
//             if (error) {
//                 res.send(error)
//             } else {
//                 res.send('Success')
//             }
//             smtpTransport.close();
//         });

// })