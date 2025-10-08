/* This code snippet is setting up a configuration for handling file uploads using the `multer`
middleware in a Node.js application. Here's a breakdown of what each part of the code is doing: */

import multer from "multer";
import path from "path";
const strorageConfing = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + "-" + uniqueSuffix + ext);
    }
})
const Userfile = multer({
    storage: strorageConfing
})

export default Userfile;