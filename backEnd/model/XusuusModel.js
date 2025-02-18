const mongoose = require("mongoose")
const CawashoSchema = mongoose.Schema({
        Name: {
                type: String,
                required: true
        },
        Email: {
                type: String,
                required:true
        },
        massage: {
                type: String,
                required: true
        }
})

module.exports = mongoose.model("Cawasho" , CawashoSchema)