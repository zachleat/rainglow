# rainglow

A demo site using [Eleventy Serverless](https://www.11ty.dev/docs/plugins/serverless/) built for 11tymeetup.dev.

* [Live demo](https://rainglow.netlify.app/e122a0/)
* Production build command: `npm run build-production`
* Development build command: `npm start`
* On Netlify it requires the Environment variable `AWS_LAMBDA_JS_RUNTIME` set to `nodejs14.x`
  * Note that this app code specifically requires Node 14, Eleventy Serverless requires Node 12+.