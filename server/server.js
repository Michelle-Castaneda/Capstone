const express = require('express')
const cors = require ('cors')
const app = express()

app.use(express.json()) //middleware does the conversion of data from json to and object
app.use(cors())

//endpoints


//EXAMPLES
// app.get("/api/compliment", getCompliment);
// app.get("/api/fortune", getFortune);
// app.put("/api/travelideas/:id", updateTravelIdeas);
// app.delete("/api/travelideas/:id", deleteTravelIdeas);

app.post('/seed', seed)


// let database= []

// app.post("/main", (req,res) => {
//     console.log('test')
//     console.log(req.body)

//     res.status(200).send(database)
// });



app.listen(4040, () => console.log('Server running on 4040'))
