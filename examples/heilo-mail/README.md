First, please change the default email addresses at `index.js` before running this example.

Run it

```bash
$ yarn install
$ npm start
```

If you have [Now](https://zeit.co/now) installed, you can use it to deploy:

```bash
$ now -e FROM_EMAIL=any@email.com -e TO_EMAIL=to@email.com -e HOSTNAME=http://localhost
```

Your email's spam (or main) folder should have an email with subject "Server Down" if the specified hostname is down, and the check/ping interval is 5 minutes.