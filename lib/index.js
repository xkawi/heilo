require('isomorphic-fetch')
const ms = require('ms')

module.exports = exports = heilo

let DEBUG_MODE = false

async function heilo (host, options) {
  if (typeof host !== 'string') {
    console.error('heilo: Please provide a valid host name (e.g. https://google.com)')
    return
  }

  const {
    interval = '10m',
    stopLooping = false,
    report, debug
  } = options

  DEBUG_MODE = debug || false

  while (!stopLooping) { // eslint-disable-line
    await ping(host, report)
    await sleep(ms(interval))
  }
}

function ping (hostname, report = () => {}) {
  fetch(hostname) // eslint-disable-line
  .then(response => {
    let result = {}

    if (!response.ok) {
      result = createPingResult(hostname, response.status, response.statusText, 'ServerUpWithError')
      log('Server UP with Error', result)
      return report(result)
    }

    result = createPingResult(hostname, response.status, response.statusText, 'ServerUp')
    log('Server UP', result)
    return response
  })
  .catch(error => {
    let result = {}

    if (error.name === 'FetchError') {
      result = createPingResult(hostname, error.code, error.message, 'ServerDown', error.name, error)
      log('Server DOWN', result)
    } else {
      result = createPingResult(hostname, 500, error.message || `Script fail`, 'ScriptFail', 'ScriptFail', error.stack)
      log('Script Fail', result)
    }

    report(result)
  })
}

function sleep (ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms)
  })
}

function createPingResult (hostname, statusCode, message, type, errorType, originalError) {
  return {
    hostname,
    statusCode,
    message,
    type,
    errorType,
    originalError,
    timestamp: Date.now()
  }
}

function log (title, pingResult = null) {
  if (DEBUG_MODE) {
    console.info(`[${new Date()}] ${title}: ${JSON.stringify(pingResult)}`)
  }
}
