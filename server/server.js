const express = require('express')
const cors = require ('cors')
const app = express()

app.use(express.json())
app.use(cors())

//endpoints


//EXAMPLES
// app.get("/api/compliment", getCompliment);
// app.get("/api/fortune", getFortune);
// app.post("/api/travelideas", addTravelIdeas);
// app.put("/api/travelideas/:id", updateTravelIdeas);
// app.delete("/api/travelideas/:id", deleteTravelIdeas);




app.listen(4040, () => console.log('Server running on 4040'))
