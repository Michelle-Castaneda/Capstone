const express = require('express')
const cors = require ('cors')
const app = express()

app.use(express.json()) //middleware does the conversion of data from json to and object
app.use(cors())

//endpoints
const{
    seed,
    getRoutine,
    getTasks,
    createTask,
    //deleteRoutine,
   // createRoutine,
    deleteTask,
    updateTask
} = require ('./controller.js')

app.post('/seed', seed)
app.get("/routine", getRoutine);
//app.delete("/routine/:", deleteRoutine);
//app/post("/routine", createRoutine);

app.get("/tasks", getTasks);
app.post("/tasks", createTask);
app.delete("/tasks/:task_id", deleteTask);
app.put("/tasks/:task_id", updateTask);




app.listen(4040, () => console.log('Server running on 4040'))
