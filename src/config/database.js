const mongoose = require("mongoose")
const DB_NAME = require("../utility/constant")

async function connectToDB() {

    try {
        await mongoose.connect( `${process.env.MONGO_URI}/${DB_NAME}`)

        console.log("Connected to Database")
    }
    catch (err) {
        console.log("URIrrrrrrrrr:", process.env.MONGO_URI);
    console.log("DBrrrrrrrrr:", DB_NAME);
        console.log(err)
    }
}

module.exports = connectToDB