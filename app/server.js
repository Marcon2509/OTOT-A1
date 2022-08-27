'use strict';

const express = require('express');

// Constants
//const PORT = 8080; //8080
//const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log(`I am Running on http://${HOST}:${PORT}`);
})
