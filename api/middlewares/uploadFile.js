import multer from "multer";
import { v2 as cloudinary } from cloudinary;

import { CloudinaryStorage } from "multer-storage-cloudinary";

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        
    }
})

const upload = multer({
    storage
});
req.files

export default upload;