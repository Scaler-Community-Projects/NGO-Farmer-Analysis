const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'sample@email.com',
  from: 'sender@email.com',
  subject: 'Farmer Analysis Details',
  text: 'This is a sample testing email',
  html: '<strong>Hello</strong>',
};
sgMail.send(msg);
