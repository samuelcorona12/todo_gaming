const express = require("express");
const authRoutes = require("./routes/auth.routes");
const gamesRoutes = require("./routes/gameRoutes");
const userActionsRoutes = require('./routes/userActions.routes')
const app = express();

// Middleware para leer JSON
app.use(express.json());
app.use('/api/user', userActionsRoutes);
app.use("/auth", authRoutes);   // Para login y registro
app.use("/games", gamesRoutes); // Para el CRUD de videojuegos

module.exports = app;