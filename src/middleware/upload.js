const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, "uploads/staff");
    },

    filename: function (req, file, cb) {

        const extension = path.extname(file.originalname);

        const filename =
            "staff-" +
            Date.now() +
            extension;

        cb(null, filename);
    }
});


const fileFilter = (req, file, cb) => {

    const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/webp"
    ];

    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(
            new Error("Only JPG, JPEG, PNG and WEBP images are allowed"),
            false
        );
    }
};


const upload = multer({
    storage: storage,

    fileFilter: fileFilter,

    limits: {
        fileSize: 2 * 1024 * 1024
    }
});


module.exports = upload;