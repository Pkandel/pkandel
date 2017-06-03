const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cors());
require('dotenv').config();


app.post('/sendmail', (req, res) => {
  const from = req.body.mail;
  const to = 'unique.prakash2002@gmail.com';
  const subject = `Hello from ${req.body.subject}`;
  const body = `${req.body.message} <br /> Regards From : ${from}`;
    // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_SERVER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

    // setup email data with unicode symbols
  const mailOptions = {
    from, // sender address
    to, // list of receivers
    subject, // Subject line
    html: body, // plain text body
  };

    // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.json({
        success: false,
        message: `failed sending message ${err}`,
      });
    }
    return res.json({
      success: true,
      message: 'successfully sent message ',
    });
  });
});


app.listen(4000, (err) => {
  if (err) {
    console.log('error connecting to the server', err);
  }
  console.log('App is running on http://localhost:4000');
});
