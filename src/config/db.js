const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/tienda");
        console.log("Base de datos conectada");
    } catch (error) {
        console.error("Error al conectar la DB", error);
    }
};

module.exports = connectDB;