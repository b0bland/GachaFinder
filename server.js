var express = require("express");

var app = express();

var PORT = process.env.PORT || 3960;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App connected to PORT: " + PORT);
})