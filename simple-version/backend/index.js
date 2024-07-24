const express = require('express');
const {createTodo, updateTodo} = require('./validate');
const {Todos} = require('./db');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());


app.post('/todo',async (req,res) => {
    const data = req.body;
    const parseddata = createTodo.safeParse(data);

    if(!parseddata.success){
        res.status(411).json({
            msg: "Wrong inputs"
        });
    }

    await Todos.create({
        task: data.task,
        completed: false
    })

    res.json({
        msg: "Task added."
    })
})

app.get("/todos", async (req,res) => {
    const todos = await Todos.find({});

    res.json({
        todos: todos
    })
})

app.put("/completed" , async (req,res) => {
    const data = req.body;
    const parseddata = updateTodo.safeParse(data);

    if(!parseddata.success){
        res.json({
            msg : "Wrong inputs"
        })
    }

    await Todos.updateOne({
        _id : req.body.id
    },{
        completed : true
    })

    res.json({
        msg : "Task marked as completed"
    })
})

app.listen(port, (req,res)=>{
    console.log(`Server is running at Port ${port}`);
})