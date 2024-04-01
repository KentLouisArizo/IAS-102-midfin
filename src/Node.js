const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your-email@gmail.com', // Your Gmail email address
    pass: 'your-email-password', // Your Gmail password
  },
});

// Define API endpoint for sending message
app.post('/send-message', (req, res) => {
    const { email, message } = req.body;
  
    // Construct email
    const mailOptions = {
      from: email, // User's email address as the sender
      to: 'kentlouisarizo.202100202@gmail.com', // Admin's email address
      subject: 'Message from User',
      text: `User Email: ${email}\nMessage: ${message}`,
    };
  
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to send message' });
      }
  
      console.log('Message sent:', info.response);
      res.status(200).json({ message: 'Message sent successfully' });
    });
  });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});