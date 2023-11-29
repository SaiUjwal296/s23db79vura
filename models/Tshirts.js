const mongoose = require("mongoose")
const TshirtsSchema = mongoose.Schema({
size:{ 
    type: String,
    required: true
},
taste: { 
    type: String,
    required: true
},
price: { 
    type: Number,
    required: true,
    min: 0,
    max: 2000
}
})
module.exports = mongoose.model("Tshirts",TshirtsSchema)