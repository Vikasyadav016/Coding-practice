import Message from "../models/Message.js";
import Chat from "../models/Chat.js";

export const getMessages = async (req, res) => {
  const messages = await Message.find({ chatId: req.params.chatId }).populate("sender");
  res.json(messages);
};

export const sendMessage = async (req, res) => {
  const { chatId, sender, content, type } = req.body;

  const fileUrl = req.file ? `/uploads/${req.file.filename}` : null;

  const message = await Message.create({
    chatId,
    sender,
    content,
    type,
    fileUrl,
  });

  await Chat.findByIdAndUpdate(chatId, { lastMessage: message._id });

  res.json(message);
};
