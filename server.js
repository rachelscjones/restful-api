// const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// Setting up a basic route
app.get('/', (req, res) => {
  res.send('Welcome to my first RESTful API!');
});

// Starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
