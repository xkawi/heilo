'use strict'

const heilo = require('../lib')

heilo('http://localhost', {
  interval: '5m',
  debug: true,
  report: error => {
    console.log(`
    SERVER DOWN: ${JSON.stringify(error)}
    `)
  }
})
