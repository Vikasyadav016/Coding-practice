import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/files"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

export default multer({ storage });

/*
import express from "express";
import http from "http";
import { Server } from "socket.io";
import chatSocket from "./sockets/chatSocket.js";
import chatRoutes from "./routes/chatRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/chatDB");

const app = express();
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/chats", chatRoutes);
app.use("/api/messages", messageRoutes);

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" },
});

chatSocket(io);

server.listen(5000, () => console.log("Server running on port 5000"));

*/
