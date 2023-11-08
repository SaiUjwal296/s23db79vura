var Tshirts = require('../models/Tshirts');
// List of all Costumes
exports.Tshirts_list = async function(req, res) {
    try{
    theTshirts = await Tshirts.find();
    res.send(theTshirts);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// for a specific Costume.
exports.Tshirts_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.Tshirts_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Tshirts();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    //{"size":"x-large"; "color":blue; "price":340}
    document.size = req.body.size;
    document.color = req.body.color;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// Handle Costume delete form on DELETE.
exports.Tshirts_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.Tshirts_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
};
exports.Tshirts_view_all_Page = async function(req, res) {
    try{
    theTshirts = await Tshirts.find();
    res.render('Tshirts', { title: 'Tshirts Search Results', results: theTshirts });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };