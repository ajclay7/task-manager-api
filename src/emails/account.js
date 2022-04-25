const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGIRD_API_KEY);

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'ajclay7@gmail.com',
		subject: 'Thanks for joining in!',
		text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
	});
};

const sendCancelationEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'ajclay7@gmail.com',
		subject: 'We are sad to see you go :(',
		text: `${name}, we are sad to se you go. Please let us know if there are any ways in which we can imporve our service`,
	});
};

module.exports = {
	sendWelcomeEmail,
	sendCancelationEmail,
};
