email-valid
===========

Node.JS API for email validation. It uses the node module at https://www.npmjs.org/package/email-existence to validate the email.

The email validation component validates the email address by telnetting to the MX server of the email domain and attempting to send an email to the supplied address. MX servers return 250 if the email address exists and 550 if it does not. This test email is not ever sent.

#### Running the API
> $ cd [source_folder]
> $ nmp install
> $ NODE_ENV=production npm start

_By default it will listen at TCP port 3001_

#### Making a sample request
> $ curl -X POST  http://\<URL\>:3001/v1/email/verify --data "email=johndoe@google.com"

####Sample Replies

#####Valid Email
```json
{"valid":true}
```

#####Invalid Email
```json
{"valid":false}
```
