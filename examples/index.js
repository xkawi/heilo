'use strict'

const heilo = require('../lib')

heilo('http://localhost', {
  interval: '5m',
  debug: true,
  fetchOptions: {
    method: 'POST',
    body: JSON.stringify({ email: 'test@example.com', password: 'password' }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  },
  report: error => {
    console.log(`
    SERVER DOWN: ${JSON.stringify(error)}
    `)
  }
})
