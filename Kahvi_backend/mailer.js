const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

const sendMessage = async ({ name, email, phone, message }) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER, 
    subject: `New message from Kahvikulma website`,
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "-"}
Message: ${message}
    `
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendMessage;
