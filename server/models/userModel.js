const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        fname:String,
        lname:String,
        email:String,
        number:String
    }
)
const UserModel = mongoose.model("Users",UserSchema)

module.exports = UserModel;
