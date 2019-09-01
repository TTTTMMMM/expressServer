const express = require('express');
const path = require('path');
let fs = require('fs');
let https = require('https');

/*
Tutorial: https://www.youtube.com/watch?v=L72fhGm1tfE
HTTPS Tutorial: https://timonweb.com/posts/running-expressjs-server-over-https/
Certificate Generation Tutorial: https://ryanparman.com/posts/2019/how-to-create-local-tls-certificates-for-development-on-macos/
*/

const serverHttps = express();

serverHttps.use(express.static(path.join(__dirname, 'public')));  // Set a static folder

/*
const PORT = process.env.PORT || 5001;

serverHttps.listen(PORT, () => console.log(`Express https server started on port ${PORT}`));
 */
https.createServer({
    key: fs.readFileSync('/Users/tm/devDir/security/antonios-iMac.fios-router.home_key.pem'),
    cert: fs.readFileSync('/Users/tm/devDir/security/antonios-iMac.fios-router.home.cer.pem')
  }, serverHttps)
  .listen(5001, function () {
    console.log('Example https server listening on port 5001! Go to https://localhost:5001/')
  })