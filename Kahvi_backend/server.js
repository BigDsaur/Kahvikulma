require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
app.use(cors({
    origin: [
    "http://localhost:5173",
    "https://kahvikulma-frontend.onrender.com"
  ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],              // allow cookies
  })
);
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const menuRouter = require('./routes/menu');
app.use('/api/menu', menuRouter);

const openingHoursRouter = require('./routes/openingHours');
app.use('/api/opening-hours', openingHoursRouter);

const messagesRouter = require('./routes/messages');
app.use('/api/messages', messagesRouter);

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
