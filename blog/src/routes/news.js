const express = require('express');
const router = express.Router();

const newcontroller = require('../app/controllers/NewController');

router.use('/:slug', newcontroller.show);
router.use('/', newcontroller.index);





module.exports = router;