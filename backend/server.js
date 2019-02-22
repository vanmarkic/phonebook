const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello World!'))


// Mongo Connection
// mongoose
//   .connect(
//     mongoURI,
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("Connected to MongoDB"))
//   .catch(err => console.log(err));

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
// const routes = require("./api/entries");
// app.use("/contacts", routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});