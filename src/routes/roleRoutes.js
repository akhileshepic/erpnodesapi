const express = require("express");
const { create, update, deletes,getAll,getById } = require("../controllers/roleController");
 
const router = express.Router();

router.post("/", create);
router.get("/", getAll);
router.get("/:id",getById)
router.put("/:id",update);
router.delete("/:id",deletes);
module.exports = router;