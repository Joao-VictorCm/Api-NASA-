import express from "express";
import axios from "axios";

const app = express()
const port = 3000

const API_URl = "https://api.nasa.gov/planetary/apod?api_key=8Oll478WCX8rj7eyMJt5EgvUcEfBjTwfrsxVles5"

app.use(express.static("piblic"))

app.get("/", async (req, res) =>{
    try{
        const result = await axios.get(API_URl)
        res.render("index.ejs", {
            data: result.data.date,
            explanation: result.data.explanation,
            img: result.data.url
        }    
        )
    }catch(error){
        
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})