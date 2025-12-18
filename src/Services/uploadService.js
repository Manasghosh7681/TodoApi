const upload = require('../models/upload')
const uploadService = async (original_name, file_name, file_path, mime_type, file_size) => {
   return await upload(original_name, file_name, file_path, mime_type, file_size)
}
module.exports = uploadService;