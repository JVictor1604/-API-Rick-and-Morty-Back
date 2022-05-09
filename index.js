require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./src/routes/characters.routes");
const userRoutes = require("./src/users/users.routes");
const authRoutes = require("./src/auth/auth.routes");
const connectToDatabase = require("./src/database/database");

const port = process.env.PORT || 3001;
const app = express();

connectToDatabase();

app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use(express.json());
app.use(cors());
app.use(routes);
app.use(userRoutes);
app.use(authRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
