const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect to Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

//Test Route
app.get("/", (req, res) => res.send("API Running"));

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/auctions", require("./routes/api/auctions"));
app.use("/api/products", require("./routes/api/products"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
