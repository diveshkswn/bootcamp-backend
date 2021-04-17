/* eslint-disable linebreak-style */
// 12345-Divesh
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable linebreak-style */
const mongoose = require('mongoose');

const configString = process.env.DATABASE_CONNECTION;
const connectDB = async () => {
  try {
    await mongoose.connect(configString, {
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log('Connected to MongoDB successfully ✅');
  } catch (error) {
    console.log('Failed to connect MongoDB');
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
