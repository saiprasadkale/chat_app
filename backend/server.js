const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");
const app = express();
dotenv.config();
connectDB();
app.use(express.json()); //To accept JSON data
app.get("/", (req, res) => {
  res.send("API is running");
});
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use(errorHandler);
app.use(notFound);
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
