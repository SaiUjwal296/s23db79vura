var express = require('express');
const Tshirts_controllers= require('../controllers/Tshirts');
var router = express.Router();
/* GET costumes */
router.get('/', Tshirts_controllers.Tshirts_view_all_Page );
module.exports = router;
