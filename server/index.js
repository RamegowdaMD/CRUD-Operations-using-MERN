const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/userModel')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/CRUD")


app.post('/Register',(req ,res)=>
{
    UserModel.create(req.body)
    .then(Users=>res.json(Users))
    .catch(err=>res.json(err))
})

app.get('/Getall', async (req ,res) =>
{   try {
    const userdata =  await UserModel.find()
    if(!userdata)
    {
        return res.status(404).json({msg:" user data not found"})
    }
    res.status(200).json(userdata);
} catch (error) {
    res.status(500).json({error:error});
} 
})


app.put('/Update/:id',async (req, res)=>
{
    try{
        const id = req.params.id
        const userExist = await UserModel.findById(id);
        if(!userExist)
        {
            return res.status(401).json({msg:"User Not found"});
        }
        const updatedData = await UserModel.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(updatedData)
    }
    catch(error)
    {
        res.status(500).json({error:error})
    }

})

app.get('/Update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.delete('/Delete/:id', async (req, res) => {
    try {
        const id = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ msg: "Invalid user ID" });
        }

        const userExist = await UserModel.findById(id);
        if (!userExist) {
            return res.status(404).json({ msg: "User does not exist" });
        }
        
        await UserModel.findByIdAndDelete(id);
        res.status(200).json({ msg: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error.message);
        res.status(500).json({ error: error.message });
    }
});


app.listen(3000,()=>
{
    console.log("server is running")
})