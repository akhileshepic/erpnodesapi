const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");

const {create, getall, getStaffById, updateStaff} =
    require("../controllers/staffController");


// CREATE
router.post(
    "/",
    upload.single("image"),
   create
);
router.get("/",getall)
router.get("/:id",getStaffById);
router.put("/:id",upload.single("image"),updateStaff);




module.exports = router;