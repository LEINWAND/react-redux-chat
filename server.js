var express = require('express')
var app = express()

// Serve static assets
app.use('/', express.static('.') );

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

var PORT = 3000
app.listen(PORT, function () {
  console.log('Your app is awaiting at http://localhost:' + PORT)
})
