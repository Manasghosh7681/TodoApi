const errorHandling = (err, req, res, next) => {
    res.status(500).json({
        success: false,
        error: err.message
    })
}

const validation = (req, res, next) => {

    const { name, email, work, createTime } = req.body;
    if (!req.body || !email) {
        res.status(404).json({
            success: false,
            message: 'email required'
        })
    }

    next(); //doubt where goes control
    //runs only when email present and control goes to  controller
}

const updateValidation = (req, res, next) => {
     if (!req.body) {
        return res.status(400).json({
            success: false,
            message: 'Request body is missing'
        });
    }

    const { email } = req.body;

    if (!email) {
        return res.status(400).json({
            success: false,
            message: 'email required'
        });
    }
    next()
}
module.exports = { errorHandling, validation, updateValidation };