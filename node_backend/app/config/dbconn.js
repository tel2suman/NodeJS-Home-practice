
require('dotenv').config();

const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGODB_URL;

const DatabaseConnection = async ()=> {

    try {

        const conn = await mongoose.connect(MONGO_URL)

        if (conn) {

            console.log("Database Connected Succesfully");

        } else {

            console.log("Databse not Connected");
        }

    } catch (error) {

        console.log(error);
    }
}

module.exports = DatabaseConnection