import config from './config.util';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport(config.mail.config);

const verifyMailer = () => {
  transport.verify((err, success) => {
    if (success) {
      console.log('Mailer ready');
    } else {
      console.log('Error with mailer');
      console.log(err);
    }
  });
};

const sendMail = async (to: string | string[], subject: string, html: string): Promise<any> => {
  try {
    const info = await transport.sendMail({
      to,
      subject,
      html,
      from: config.mail.from,
    });
    return info;
  } catch (err) {
    console.log('Error mail');
    console.log(err);
    return null;
  }
};

export default {
  sendMail,
  verifyMailer,
};
