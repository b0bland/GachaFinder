var appData = require("../data/data.js");


module.exports = function(app) {

    app.get("/api/data", function(req,res) {
        res.json(appData);
    })
}