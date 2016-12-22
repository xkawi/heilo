/**
 * Usage:
 * heilo <absolute_url_path> -f examples/reporting.js
 */
module.exports = ({
    hostname,
    statusCode,
    message,
    type,
    errorType,
    originalError,
    timestamp
  }) => {
  const formattedDate = new Date(timestamp).toLocaleString()
  console.log(`
  ${type} - - [${formattedDate}] - [${hostname}] "${statusCode} - ${message}"
  `)
}
