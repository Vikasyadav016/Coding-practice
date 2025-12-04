import express from "express";
import { getMessages, sendMessage } from "../controllers/messageController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/:chatId", getMessages);
router.post("/send", upload.single("file"), sendMessage);

export default router;
