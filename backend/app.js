import express from "express";
import mongoose from "mongoose";

const app = express();
mongoose.connect("mongodb+srv://Anupama:Anupama@cluster0.3cwbh.mongodb.net/webApp?retryWrites=true&w=majority")
.then(() => app.listen(5000))
.then(() =>
console.log("Connected TO Database and Listening TO Localhost 5000")
)
.catch((err) => console.log(err));




