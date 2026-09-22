const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
const permissionGroupRoutes = require("./routes/permissionGroupRoutes")
const permissionCategoryRoutes = require("./routes/permissionCategoryRoutes")
app.get("/api", (req, res) => {

    res.json({
        success: true,
        message: "Ekatra API is running"
    });

});
app.use("/api/permission-groups",permissionGroupRoutes);
app.use("/api/permission-categories",permissionCategoryRoutes);
module.exports = app;