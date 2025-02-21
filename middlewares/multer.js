import multer from "multer";

const storage = multer.memoryStorage();

const uplodeFile = multer({ storage }).array("files", 10);

export default uplodeFile;
