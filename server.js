/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable linebreak-style */
require('dotenv').config();

// eslint-disable-next-line no-unused-vars
const colors = require('colors');
const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

connectDB();

const app = express();
const PORT = process.env.PORT;
// middleware
app.use(express.json());
// Router
app.use('/api/v1/bootcamps', require('./routes/bootcampRoutes'));

// Error Handler  //In nodejs architechute the last piece of middle is error handler
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('Hello india');
});

app.listen(PORT, () => {
  console.log(`Server running on PORT  : ${String(PORT).red}`.blue);
});
