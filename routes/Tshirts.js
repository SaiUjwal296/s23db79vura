var express = require('express');
const Tshirts_controllers= require('../controllers/Tshirts');
var router = express.Router();
/* GET Tshirts */
router.get('/', Tshirts_controllers.Tshirts_view_all_Page );
router.get('/detail', Tshirts_controllers.Tshirts_view_one_Page);
router.get('/create', Tshirts_controllers.Tshirts_create_Page);
router.get('/update', Tshirts_controllers.Tshirts_update_Page);
router.get('/delete', Tshirts_controllers.Tshirts_delete_Page);
module.exports = router;
