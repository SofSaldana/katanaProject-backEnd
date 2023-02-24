const config = require("../../lib/config");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(config.sendgrid.apiKey);

const msg = {
  to: "emiliodeleon.contact@gmail.com", // Change to your recipient
  from: "diego@serfactor.com", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "PUDISTE COMPRAR ESTO NUEVO PERO TE CULEASTE: PRECIO",
  html: "<strong>Estufas se la come</strong>",
};

sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
