require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/characters.routes');
const userRoute = require("./src/users/users.route");
const authRoute = require("./src/auth/auth.route");
const connectToDatabase = require('./src/database/database');

const port = process.env.PORT || 3000;
const app = express();

connectToDatabase();

app.use("/users", userRoute);
app.use("/auth", authRoute);
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});