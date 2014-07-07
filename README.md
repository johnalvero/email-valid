email-valid
===========

Node.JS API for email validation. It uses the node module at https://www.npmjs.org/package/email-existence to validate the email.

The check function will return a boolean to indicate existence of an email address. Existence is determined by telnetting to the MX server of the email domain and attempting to send an email to the supplied address. MX servers return 250 if the email address exists and 550 if it does not. This test email is not ever sent.
