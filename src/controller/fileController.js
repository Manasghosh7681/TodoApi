const fileService = require('../Services/uploadService')
const { Response } = require('../utils/common')
const fileControll = async (req, res, next) => {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        const values = [
            file.originalname,
            file.filename,
            file.path,
            file.mimetype,
            file.size
        ];
        console.log("file details", file)
        console.log("value", values)
        const result = await fileService(file.originalname,
            file.filename,
            file.path,
            file.mimetype,
            file.size)
        Response(res, 200, "File upload succesfully", result)
    } catch (err) {
        next(err)
    }
}
module.exports=fileControll