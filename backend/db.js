const mongoose = require("mongoose")
const { string } = require("zod")

mongoose.connect("mongodb+srv://vrushabhpatil4801:m5dmb33fNyoaMyxg@cluster0.lhnns8h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const Todo = mongoose.model('todos', todoSchema);

module.exports = {Todo};
