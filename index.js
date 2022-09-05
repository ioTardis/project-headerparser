require('dotenv').config();
const express = require('express');
const app = express();

// serving static file
app.use(express.static('public'));

// basic routing
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ greeting: 'hello API' });
});

// headerparser API
app.get('/api/whoami', (req, res) => {
  let output = {
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  }
  res.json(output);
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
