const express = require('express');
const path = require('path');
const members = require('./members');

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
  console.log(`Server has been started on the port ${PORT} ...`);
});

app.use(express.static(path.join(__dirname, 'public')));
app.get('/download', (req, res) => {
  res.download(path.join(__dirname, 'public', 'index.html'));
});

const logger = (req, res, next) => {
  console.log('Hello middleware');
  next();
};

ppid.use(logger);

app.get('/api/members', (req, res) => {
  res.json(members);
});

// app.listen(PORT, function() {
//   console.log(`Server has been started on the port ${PORT} ...`);
// });
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });
// app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });