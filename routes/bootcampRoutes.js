/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable linebreak-style */
const express = require('express');
const bootcampControllers = require('../controllers/bootcampControllers');

const router = express.Router();

// route - > /api/v1/bootcamps/

router.route('/').get(bootcampControllers.getAllBootcamps).post(bootcampControllers.createNewBootcamp);

// route - > /api/v1/bootcamps/:id
router.route('/:id').delete(bootcampControllers.deleteBootcamp).put(bootcampControllers.updateBootcampById);

module.exports = router;
