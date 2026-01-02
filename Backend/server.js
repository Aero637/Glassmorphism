const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 1. USE ONLY THIS ATLAS CONNECTION STRING
const mongoURI = "mongodb+srv://pandasrija_db_user:Aerovitb_db_user@cluster0.qljzylb.mongodb.net/glassDB?retryWrites=true&w=majority";

mongoose.connect(mongoURI)
  .then(() => console.log("Success: Connected to MongoDB Atlas!"))
  .catch((err) => console.log("Error: Could not connect to MongoDB", err));

// 2. DATA SCHEMA
const UserSchema = new mongoose.Schema({
  name: String,
  email: String
});
const User = mongoose.model('User', UserSchema);

// 3. REGISTRATION ROUTE
app.post('/register', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send({ message: "Data Saved!" });
  } catch (err) {
    res.status(500).send({ error: "Could not save data" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));