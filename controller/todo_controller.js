import todo from "../model/todo_model.js";

export const addTodo = async(req,res)=>{
    try {
        const newTodo = await todo.create({
            data:req.body.data,
            createdAt: Date.now()
        })
        await newTodo.save();
        return res.status(200).json(newTodo)
    } catch (error) {
       return res.status(500).json(error.message); 
    }
}
export const getAllToDo = async(req,res)=>{
    try {
        const todos = await todo.find({}).sort({'createdAt': -1})
        return res.status(200).json(todos)
    } catch (error) {
       return res.status(500).json(error.message); 
    }
}

export const toggleTodoDone= async(req,res)=>{
    try {
        const todoRef = await todo.findById(req.params.id)
        console.log(todoRef)
        const todoSave = await todo.findOneAndUpdate(
            {_id:req.params.id},
            {done: !todoRef.done}
        )

        await todoSave.save();
        return res.status(200).json(todoSave)

    } catch (error) {
        return res.status(500).json(error.message); 
    }
}

