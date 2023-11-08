var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Tshirts_controller = require('../controllers/Tshirts');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/Tshirts', Tshirts_controller.Tshirts_create_post);
// DELETE request to delete Costume.
router.delete('/Tshirts/:id', Tshirts_controller.Tshirts_delete);
// PUT request to update Costume.
router.put('/Tshirts/:id', Tshirts_controller.Tshirts_update_put);
// GET request for one Costume.
router.get('/Tshirts/:id', Tshirts_controller.Tshirts_detail);
// GET request for list of all Costume items.
router.get('/Tshirts', Tshirts_controller.Tshirts_list);
module.exports = router;


