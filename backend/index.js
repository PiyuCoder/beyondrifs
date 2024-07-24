const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDb = require("./db");
const demoRoutes = require("./routes/demoRoutes");

connectDb();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", demoRoutes);

const PORT = process.env.PORT || "8000";
app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
