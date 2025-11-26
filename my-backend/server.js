const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');



dotenv.config();
connectDB();
const app = express();

const allowedOrigins = [
  "https://fuzzy-barnacle-594555rw9q42v6gx-5008.app.github.dev/"
//   'http://localhost:3000', // for local dev
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
  } else {
    next();
  }
});

app.use(express.json());

// Routes
app.use("/api/auth", require("./Routes/authRoutes"));
app.use("/api/auth/", require("./Routes/userRoutes"));
app.use("/api/courses", require("./Routes/courseRoutes"));
app.use("/api/instructors", require("./Routes/instructorRoutes"));
app.use("/api/wishlist", require("./Routes/wishlistRoutes"));
app.use("/api/cart", require("./Routes/cartRoutes"));

const PORT = process.env.PORT || 5008;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
