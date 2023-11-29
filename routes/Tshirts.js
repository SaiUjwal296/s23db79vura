var express = require('express');
const Tshirts_controllers= require('../controllers/Tshirts');
var router = express.Router();
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }
/* GET Tshirts */
router.get('/', Tshirts_controllers.Tshirts_view_all_Page );
router.get('/detail', Tshirts_controllers.Tshirts_view_one_Page);
router.get('/create',secured, Tshirts_controllers.Tshirts_create_Page);
router.get('/update',secured, Tshirts_controllers.Tshirts_update_Page);
router.get('/delete',secured, Tshirts_controllers.Tshirts_delete_Page);
module.exports = router;
