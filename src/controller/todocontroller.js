
const { Response } = require('../utils/common')
const { createTodo, getTodo, updateTodos, deleteTodos } = require('../Services/todoService')

const createTodos = async (req, res, next) => {
    try {
        const result = await createTodo(req.body)
        Response(res, 201, 'Todo Created', result)
    } catch (err) {
        next(err)//doubt
    }
}

const getTodos = async (req, res, next) => {
    try {
        const result = await getTodo()
        Response(res, 200, 'Todo retrive succesfully', result)
    } catch (err) {
        next(err)
    }
}
const updateTodo = async (req, res, next) => {
    try {
        const { name, work, email } = req.body

        const result = updateTodos(name, work, email)
        return res.status(404).json({
            success: false,
            message: 'Update succesfully'
        });
    } catch (err) {
        next(err)
    }
}

const deleteTodo = async (req, res, next) => {
    try {
        const { email } = req.body
        const result = await deleteTodos(email)
        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Record not found'
            });
        }
        Response(res, 200, 'Delete Succesfully', result)
    } catch (err) {
        next(err)
    }
}

module.exports = { createTodos, getTodos, updateTodo, deleteTodo }