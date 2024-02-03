const express = require("express");
const mongoose = require("mongoose");
const server = express();
const cors = require("cors");
const { valildateForm, isValildateForm } = require("./Middlewawres/index");
const { addForm } = require("./Controllers/Form");
const http = require("http")
const app = http.createServer(server)
const { Server } = require("socket.io");
const { log } = require("console");
const { sendEmail } = require("./Helper/Email");
const io = new Server(app);
require('dotenv').config()

server.use(express.json());
server.use(cors());
server.get("/", (req, res) => {
  res.send("hello mithiii")
});

server.post("/addForm", valildateForm, isValildateForm, addForm,sendEmail)
io.on("connection", socket => {
  console.log("new user connected");
  socket.on("message", (message,room) => {
    console.log(`New message received in ${room} and message is ${message}`);
     socket.to(room).emit("message",message)
  })
  socket.on("join", (room) => {
    socket.join(room)
    socket.emit("joined")
  })
})
const port =process.env.PORT

app.listen(port, () => {
  console.log("server started");
});

const mongodb =process.env.PORT

mongoose
  .connect(`mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@cluster0.mv6i3qr.mongodb.net/?retryWrites=true&w=majority`)
  .then((data) => console.log("Datatbase Connected"))
  .catch((error) => console.log("Error"));