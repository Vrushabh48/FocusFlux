const express = require("express")
const {Todo} = require("./db");
const mongoose = require("mongoose")
const app = express();
const port = 3000;


app.use(express.json());

app.post("/todos", async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;

    try {
        // adding data to db
        const todo = await Todo.create({
            title: title,
            description: description,
        });
        console.log(todo);
        res.json({
            msg: "Todo added to db.",
            todo: todo
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Failed to add todo to db." });
    }
});


app.listen(port,()=>{
    console.log(`Server is listening to Port ${port}`);
})