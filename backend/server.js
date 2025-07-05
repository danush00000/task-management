const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");
const dotenv = require("dotenv");
const passport = require("passport");
const session = require("cookie-session");
const socketIo = require("socket.io");
const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");
require("./config/passport");

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: { origin: process.env.CLIENT_URL, methods: ["GET", "POST"] }
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(
  session({
    name: "session",
    keys: [process.env.SESSION_SECRET || "yourSecretKey"],
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: "lax",
    secure: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Add io to req object so controllers can access it
app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use("/api/tasks", taskRoutes);
app.use("/auth", authRoutes);

app.get('/some-path', (req, res) => {
  res.send('Hello');
});

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("disconnect", () => console.log("Client disconnected"));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
