'use strict'

const heilo = require('../lib')

heilo('http://example.com', {
  interval: '5m',
  debug: true,
  report: error => {
    console.log(`
    SERVER DOWN: ${JSON.stringify(error)}
    `)
  }
})
