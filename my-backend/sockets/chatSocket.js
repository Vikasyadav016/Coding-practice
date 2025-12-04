const chatSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // JOIN CHAT ROOMS
    socket.on("join-room", (chatId) => {
      socket.join(chatId);
    });

    // SEND MESSAGE
    socket.on("send-message", (msg) => {
      io.to(msg.chatId).emit("receive-message", msg);
    });

    // TYPING INDICATOR
    socket.on("typing", ({ chatId, user }) => {
      socket.to(chatId).emit("typing", user);
    });

    socket.on("stop-typing", ({ chatId, user }) => {
      socket.to(chatId).emit("stop-typing", user);
    });

    // READ RECEIPT
    socket.on("message-read", ({ chatId, messageId, userId }) => {
      io.to(chatId).emit("message-read", { messageId, userId });
    });

    // ONLINE STATUS
    socket.on("user-online", (user) => {
      io.emit("user-online", user);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};

export default chatSocket;
