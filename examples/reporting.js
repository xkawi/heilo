/**
 * Usage:
 * heilo <host/url> -r examples/reporting.js
 */
module.exports = (error) => {
  console.log(`
  SERVER DOWN: ${JSON.stringify(error)}
  `)
}