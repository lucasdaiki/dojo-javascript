'use strict';

const cors = require('cors');
const express = require('express');

// Constants
const PORT = 3000;

// App
const app = express();

app.use(cors());

app.get('/', function (req, res) {
  res.status(200).json({
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
  });
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);