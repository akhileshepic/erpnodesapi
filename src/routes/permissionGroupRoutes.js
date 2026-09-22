const express = require("express");
const { create, getAll, getById, update, deletes } = require("../controllers/permissionGroupController");

const router = express.Router();

router.post("/",create);
router.get("/",getAll);
router.get("/:id",getById);
router.put("/:id",update);
router.delete("/:id",deletes);
module.exports=router;