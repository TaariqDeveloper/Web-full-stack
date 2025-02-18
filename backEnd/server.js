const express = require("express")
const mongoose = require("mongoose")
const CawashoSchema = require('./model/XusuusModel')
const app = express()
app.use(express.json());
const cors = require("cors")
app.use(cors())



//create a connection 
mongoose.connect("mongodb://localhost:27017/Complaiment").then(() => {
        console.log("dabasa connected successfully ")
}).catch((error) => {
        console.log(error)
})

// create data 
app.post("/create/Cawasho", async (req, res) => {
        const NewData = CawashoSchema(req.body)
        const savedata = await NewData.save();
        if (savedata) {
                res.send(savedata)
        }
})



// read data
app.get("/reade/Cawasho", async (req, res) => {
        const readData = await CawashoSchema.find()
        if (readData) {
                res.send(readData)
        }  
})

// read data by id
app.get("/read/Cawasho/:id", async (req, res) => {
        const singleData = await CawashoSchema.find({ _id: req.params.id })
        if (singleData) {
                res.send(singleData)
        }
})

// update the data

app.put("/update/Cawasho/:id", async (req, res) => {
        const updateData = await CawashoSchema.updateOne({ _id: req.params.id }, { $set: req.body })
        if (updateData) {
                res.send("updated successfully")
        }
})


        
// delete the data

app.delete("/delete/Cawasho/:id", async (req, res) => {
        const deleteData = await CawashoSchema.deleteOne({ _id: req.params.id })
        if (deleteData) {
                res.send("deleted successfully")
        }
})
        









app.listen(3000, () => {
        console.log("server is runing")
})