import nodemailer from 'nodemailer'

export default (req, res) => {
  if (req.method === 'POST') {
    const { name, surname, email, text } = req.body

    const transporter = nodemailer.createTransport({
      host: 'smtpout.secureserver.net',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_EMAIL, // generated ethereal user
        pass: process.env.EMAIL_PASSWORD // generated ethereal password
      }
    })

    const mailOptions = {
      from: `${name + ' ' + surname} <${email}>`, // sender address
      to: process.env.EMAIL_EMAIL, // list of receivers
      subject: 'Shaoula Get Offer',
      text: text
    }
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error)
      }
      console.log('Message sent: %s', info.messageId)
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

      res.end('Email has been sent')
    })

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.send('Success')
  } else {
    res.send('Contact')
  }
}
