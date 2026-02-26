const app = require("./app");
const connectDB = require("./config/db");

connectDB();

app.listen(3000, () => {
  console.log("🚀 Servidor corriendo en puerto 3000");
});