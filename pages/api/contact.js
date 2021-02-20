import nodemailer from 'nodemailer'

export default (req, res) => {
  if (req.method === 'POST') {
    const { name, email, text } = req.body

    const transporter = nodemailer.createTransport({
      host: 'smtpout.secureserver.net',
      port: 465,
      //secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_EMAIL, // generated ethereal user
        pass: process.env.EMAIL_PASSWORD // generated ethereal password
      }
    })

    const mailOptions = {
      from: `${name} <${email}>`, // sender address
      to: process.env.EMAIL_EMAIL, // list of receivers
      subject: 'Shaoula Get Offer',
      text: text
    }
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.send(error)
      }
      res.status(200)
      res.end('Email has been sent')
    })
  } else {
    res.send('Contact')
  }
}
