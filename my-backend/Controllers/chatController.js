import Chat from "../models/Chat.js";

export const createChat = async (req, res) => {
  const { participants, isGroup, name } = req.body;

  const chat = await Chat.create({ participants, isGroup, name });
  res.json(chat);
};

export const getUserChats = async (req, res) => {
  const userId = req.params.userId;

  const chats = await Chat.find({ participants: userId })
    .populate("participants")
    .populate("lastMessage");

  res.json(chats);
};
