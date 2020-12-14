const express = require("express");
const app = express();

const postRoutes = require("./routes/post-routes");

app.use(postRoutes);

app.listen(8080);
