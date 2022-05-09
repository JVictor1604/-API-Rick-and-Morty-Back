require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./src/database/database");
const routes = require("./src/routes/characters.routes");
const userRoutes = require("./src/users/users.routes");
const authRoutes = require("./src/auth/auth.routes");


const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

connectToDatabase();

app.use("/users", userRoutes);
app.use("/auth", authRoutes);


app.use(routes);


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
