const express = require("express");
const app = express();
app.use(express.static("public"));

app.set("view engine", "ejs");






//Routing
app.get("/", function (req, res) {
    res.render("root");
});













app.listen("3000", function (req, res) {
    console.log("server started on port 3000");

});