const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
// uploads folder public
app.use(
    "/uploads",
    express.static(
        path.join(__dirname, "../uploads")
    )
);
const permissionGroupRoutes = require("./routes/permissionGroupRoutes")
const permissionCategoryRoutes = require("./routes/permissionCategoryRoutes")
const roleRoutes = require("./routes/roleRoutes");
const rolePermissionRoutes = require("./routes/rolePermissionRoutes");
// Staff routes
const staffRoutes = require("./routes/staffRoutes");
app.get("/api", (req, res) => {

    res.json({
        success: true,
        message: "Ekatra API is running"
    });

});
app.use("/api/permission-groups",permissionGroupRoutes);
app.use("/api/permission-categories",permissionCategoryRoutes);
app.use("/api/roles",roleRoutes);
app.use("/api/role-permissions",rolePermissionRoutes);
app.use("/api/staff",staffRoutes);
module.exports = app;