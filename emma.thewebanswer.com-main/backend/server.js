const express = require("express");
const cors = require("cors"); // en-têtes http
const mongoose = require("mongoose");

require("dotenv").config;

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); //middleware
app.use(express.json());

mongoose.connect(
    "mongodb+srv://Emma:<Emma>@cluster0.b3zmf.mongodb.net/Cluster0?retryWrites=true&w=majority",
    { useNewUrlParser: true }
);

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Connection à la base de donnée effectué ! Bravo Emma");
});

app.listen(port, () => {
    console.log(`Le serveur est en train de tourner sur le port : ${port} `);
});

const articlesRouter = require("./routes/articles");
const usersRouter = require("./routes/users");

app.use("/articles", articlesRouter);
app.use("/users", usersRouter);
