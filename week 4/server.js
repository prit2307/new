
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;
//var port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));


mongoose.connect("mongodb://localhost:27017/week4", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));


const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
  });
  const User = mongoose.model("User", userSchema);

const cardList = [
    {
    title: "Kitten 2",
    image: "images/kitten-2.jpg",
    link: "About Kitten 2",
    desciption: "Demo desciption about kitten 2"
    },
    {
    title: "Kitten 3",
    image: "images/kitten-3.jpg",
    link: "About Kitten 3",
    desciption: "Demo desciption about kitten 3"
    }
    ]
    
    app.get('/api/projects',(req,res) => {
        res.json({statusCode: 200, data: cardList, message:"Success"})
        })


app.post("/submit", async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;
      const newUser = new User({ firstName, lastName, email, password });
      await newUser.save();
      res.json({ message: "User saved successfully!" });
    } catch (error) {
      res.status(500).json({ error: "Error saving user" });
    }
  });

  app.listen(port, () => console.log(`Server running on http://localhost:${port}`));