const mongoose = require("mongoose")
const { string } = require("zod")

mongoose.connect("mongodb+srv://vrushabhpatil4801:m5dmb33fNyoaMyxg@cluster0.lhnns8h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Todos")

const TodoSchema = new mongoose.Schema({
    task: String,
    completed: Boolean
});

const Todos = mongoose.model('Todos', TodoSchema);

module.exports = {Todos};
