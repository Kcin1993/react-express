const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();

app.use(
  '/static/css',
  express.static(path.resolve(__dirname, '../build/static/css'))
);
app.use(
  '/static/js',
  express.static(path.resolve(__dirname, '../build/static/js'))
);
app.use('/', (req, res) => {
  fs.readFile(
    path.resolve(__dirname, '../build/index.html'),
    'utf8',
    (err, data) => {
      res.status(200).send(data);
    }
  );
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`Server listening on port ${process.env.PORT || 8080}`)
);
