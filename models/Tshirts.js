const mongoose = require("mongoose")
const TshirtsSchema = mongoose.Schema({
size: String,
color: String,
price:Number

})
module.exports = mongoose.model("Tshirts",
TshirtsSchema)