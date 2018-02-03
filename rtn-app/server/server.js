const express = require('express');
const app = express();
const api = require('./routes/api');
const index = require('./routes/index');
const path = require('path');

//setup cross origin

app.use(express.static(path.join(__dirname, '../dist')));
//web server
app.use('/', index);
app.use('/api',api);
app.get('*', (req, res) => {
  console.log('test');
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.use(function(req, res){
  res.send(404);
});
const port = process.env.port || '3000';
app.listen(port, () => {
  console.log(`server running and listening on : ${port} ...`);
});

module.exports = app;
