const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT;

const app = express();

const server = app.listen(PORT, console.log(`Server running on port ${PORT}`));

process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
});
