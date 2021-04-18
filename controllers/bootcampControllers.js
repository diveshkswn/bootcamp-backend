/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable linebreak-style */

const BootcampModel = require('../models/Bootcamp');

async function getAllBootcamps(req, res) {
  console.log(req.query);
  // { price: { '$lte': '9000' } }
  // We are using req.query to create a query to find only results according to query.
  // We add params as : ?price[$lte]=9000 which will turn into json : { price: { $lte: 1000 } }
  // Which we can directly put into find().
  // const bootcamps = await BootcampModel.find({ price: { $lte: 1000 } });

  const reqQuery = { ...req.query };
  const removeFields = ['sort'];
  removeFields.forEach((val) => delete reqQuery[val]);
  let queryStr = JSON.stringify(reqQuery);
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`);
  console.log(`query String ${queryStr}`);
  let sortByStr;
  if (req.query.sort) {
    const sortByArr = req.query.sort.split(',');
    sortByStr = sortByArr.join(' ');
    console.log(`sortByStr value : ${sortByStr}`);
  }

  const bootcamps = await BootcampModel.find(JSON.parse(queryStr)).sort(sortByStr);
  res.status(200);
  res.json({
    success: true,
    data: bootcamps,
  });
}

// Using try catch and sending catch error message to response
async function createNewBootcamp(req, res) {
  try {
    const bootcamp = await BootcampModel.create(req.body);

    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      data: error.message,
    });
  }
}

async function deleteBootcamp(req, res) {
  try {
    const bootcamp = await BootcampModel.findById(req.params.id);
    if (!bootcamp) {
      res.status(404).json({
        status: false,
        data: `Bootcamp with id ${req.params.id} not found`,
      });
    } else {
      bootcamp.remove();
      res.status(200).json({
        status: true,
        data: bootcamp,
      });
    }
  } catch (error) {
    res.status(404).json({
      status: false,
      data: 'There is some error with this request. Probably the id provided is wrong',
    });
  }
}

async function updateBootcampById(req, res) {
  try {
    let bootcamp = await BootcampModel.findById(req.params.id);
    if (!bootcamp) {
      console.log(`Bootcamp with id : ${req.params.id} was not found `);
      res.status(404).json({
        success: false,
        data: `Bootcamp with id : ${req.params.id} was not found `,
      });
    } else {
      bootcamp = await BootcampModel.findByIdAndUpdate(req.params.id, req.body,
        { new: true, runValidators: true });
      res.status(201).json({
        success: true,
        data: bootcamp,
      });
    }
  } catch (error) {
    res.status(404).json({
      success: false,
      data: error.message,
    });
  }
}

module.exports = {
  getAllBootcamps, createNewBootcamp, deleteBootcamp, updateBootcampById,
};
