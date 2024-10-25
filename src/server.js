const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

const recipeList = [
    {
        name:"egg rice",
        ingredients:"egg, rice",
        time: "45 minutes",
        steps:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
        name:"egg rice",
        ingredients:"egg, rice",
        time: "45 minutes",
        steps:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
        name:"egg rice",
        ingredients:"egg, rice",
        time: "45 minutes",
        steps:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    }
];

app.get("/api/recipes", (req, res) =>{
    res.json(recipeList);
})

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})

