const mongoose = require("mongoose")
const TshirtsSchema = mongoose.Schema({
size:{ 
    type: String,
    required: true
},
color: { 
    type: String,
    required: true,
    enum: ["Red", "Blue", "Green", "White", "Black"] 
},
price: { 
    type: Number,
    required: true,
    min: 0,
    max: 2000
}
})
module.exports = mongoose.model("Tshirts",TshirtsSchema)