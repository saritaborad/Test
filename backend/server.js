const express = require("express");
const cors = require("cors");
const product = require("./router");
const app = express();
const PORT = process.env.PORT || 3014;

app.use(cors());
app.use(express.json());
app.use("/", product);

app.listen(PORT, () => console.log(`App is running on port: ${PORT}`));
