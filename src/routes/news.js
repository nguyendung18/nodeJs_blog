const express = require('express')
const { show } = require('../app/controllers/NewsController')
const router = express.Router()
const newController = require('../app/controllers/NewsController')




router.get('/:slug', newController.show);
router.get('/', newController.index);



module.exports = router