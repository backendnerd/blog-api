const express = require("express");
const dotenv = require("dotenv");
const blogRoutes = require("./router/blog");

dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT;

const app = express();

app.use("/api/v1/blog", blogRoutes);

app.use("/", (req, res) => {
    res.status(404).send("Opps... Something went wrong!<br>Error 404");
});

const server = app.listen(PORT, console.log(`Server running on port ${PORT}`));

process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
});
