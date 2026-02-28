const mongoose = require('mongoose');
// En local usa el string de Atlas, en producción usará la variable de entorno
const mongoURI = process.env.MONGO_URI = "mongodb+srv://al02997859_db_user:9egtMCMcqxAnlE0L>@todogaming.huxfu4r.mongodb.net/todogaming?appName=TodoGaming";

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Conectado a MongoDB Atlas 🚀");
    } catch (err) {
        console.error("Error de conexión:", err.message);
        process.exit(1);
    }
};
module.exports = connectDB;