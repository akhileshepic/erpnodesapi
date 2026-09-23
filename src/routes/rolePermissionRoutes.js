const express = require("express");

const {
    create,
    getAll,
    getById,
    update,
    deletes
} = require("../controllers/rolePermissionController");


const router = express.Router();


// CREATE
router.post(
    "/",
    create
);


// GET ALL
router.get(
    "/",
    getAll
);


// GET BY ID
router.get(
    "/:id",
    getById
);


// UPDATE
router.put(
    "/:id",
    update
);


// DELETE
router.delete(
    "/:id",
    deletes
);


module.exports = router;