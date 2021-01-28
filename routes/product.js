const express = require('express');
const router = express.Router();
const ProductController = require('../Controller/ProductCOntroller')
/* GET home page. */
router.get('/', ProductController.index);
router.post('/', ProductController.insert);

module.exports = router;
