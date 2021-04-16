const nodemailer = require('nodemailer')

exports.sendMail = (req, res) => {
  const { name, email, phone, message, emailAddress } = req.body
  console.log(emailAddress)

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ladrianmm@gmail.com',
      pass: 'knbossrpvuhyintq'
    }
  })

  let messages = {
    from: email,
    to: emailAddress,
    subject: 'Message from LandingPage SPBox',
    html:`<h3> Informations </h3>
    <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Subject: ${phone}</li>
    </ul>
     
      <h3>Message</h3>
      <p>${message}</p>
    `
  }

  transporter.sendMail(messages, (err, info) => {
    if(err){
      console.log('errrrr', err)
      return res.status(400).json({
        message:  `error in sending mail ${err}`
      })
    }else {
      console.log('success', info)
      return res.json({
        message:info
      })
    }
  })

}