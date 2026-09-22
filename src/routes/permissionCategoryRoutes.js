const express = require("express");
const { create, getALL,getById } = require("../controllers/permissionCategoryController");
 
const router = express.Router();

router.post("/",create);
 router.get("/",getALL);
 router.get("/:id",getById);
module.exports=router;