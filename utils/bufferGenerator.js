import DataUriParser from "datauri/parser.js";
import path from "path";

const bufferGeberator = (file) => {
  const parser = new DataUriParser();

  const extName = path.extname(file.originalname).toString();

  return parser.format(extName, file.buffer);
};

export default bufferGeberator;
