const nodemailer = require('nodemailer')
const heilo = require('heilo')

const mailTransport = nodemailer.createTransport({ direct: true, debug: true })

// NOTE: Please change to valid email addresses
const from = process.env.FROM_EMAIL || 'aaa'
const to = process.env.TO_EMAIL || 'bbb'
const hostname = process.env.HOSTNAME || 'https://localhost'

const reportError = (error) => {
  console.log('Server Down, sending notification...')
  mailTransport.sendMail({
    from,
    to,
    subject: 'Server Down!',
    text: `${error.hostname} is down with status code ${error.statusCode} and error message - ${error.message}`,
    html: `<p>${error.hostname} is down with status code ${error.statusCode} and error message - ${error.message}</p>`
  })
}

heilo(hostname, {
  interval: '5m',
  report: reportError,
  debug: true
})
