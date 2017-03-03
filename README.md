_**heilo**, is your server up or down?_

[![Build Status](https://travis-ci.org/xkawi/heilo.svg?branch=master)](https://travis-ci.org/xkawi/heilo)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

# heilo there

If you are looking for a NodeJS-based server status monitoring tool, `heilo` is for you. It is lightweight, simple to use, and has clean interface. It can be used programmatically as an npm `module`, or `cli` tool.

Default behaviour will ping a host every 10 minutes (configurable) to check if it is UP, UP with Error or DOWN.

NOTE: `heilo` does not come with any notification/reporting functionality. Though `heilo` provides an interface for you to write your own notification/reporting function. Here is an example on how you can write a simple email notification system using `nodemailer` and deploy to [Now](https://zeit.co/now) - [heilo-mail](https://github.com/xkawi/heilo/tree/master/examples/heilo-mail).

## Usage

**NOTE:** `heilo` requires Node `6.0.0` and above

### Use Programmatically as Module

Install it as dependencies

```bash
npm install heilo --save
```

Use it
```js
const heilo = require('heilo')

heilo('https://localhost', {
  interval: '10m',        // ping interval
  stopLooping = false,    // stop pinging, useful if you want to control the start/stop manually
  report = (error) => {}, // function to report any error (e.g. send email when server down)
  debug = false,          // log every ping result to STDOUT if set to true,
  fetchOptions = { method: 'GET' } // options passed to fetch(url, fetchOptions)
})
```

Refer to this [example](https://github.com/xkawi/heilo/blob/master/examples/index.js) for more details on how to write the report function.

### Use as CLI

Install it globally

```bash
npm install -g heilo
```

Run it

```bash
heilo <absolute_url_path> [options]
```

Here are some examples of its usage:

```bash
heilo http://localhost
heilo http://localhost -i 5m
heilo http://localhost -f ./examples/reporting.js
```

#### Options

| Usage                  | Description | Default value |
| ---------------------- | ----------- | ------------------ |
| -h, --help             | Output usage information | - |
| -d, --debug            | Debug Mode (log to STDOUT) | false |
| -p, --port [port]      | Specific port to ping | - |
| -i, --interval [interval]  | String value of the ping interval (refer to [ms](https://github.com/zeit/ms) module for available values) | '10m' |
| -f, --file FILE           | `.js` file that exports a function to report any error (e.g. send email when server down) | - |

## Contribute

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Uninstall `heilo` if it's already installed: `npm uninstall -g heilo`
3. Link it to the global module directory (to use `heilo` command everywhere): `npm link`
4. Once you make some changes, transpile the source code: `npm run build`
5. Use `heilo` command to test any `cli` changes
6. Test the Programmatic API: `npm run example`

## Credit

Thanks to projects like [micro](https://github.com/zeit/micro) and [serve](https://github.com/zeit/serve) that gives me inspiration and a head-start on how to write and structure this module.