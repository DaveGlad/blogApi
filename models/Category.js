const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    catagoryname:{
        type: String,
        required: true,
    }
}, {timestamps: true})

module.exports = mongoose.model("Catagory", CategorySchema);