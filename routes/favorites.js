const express = require("express")
const router = express.Router()

let favorites = []

router.get("/", (req,res)=>{
    res.json(favorites)
})

router.post("/", (req,res)=>{
    favorites.push(req.body)
    res.json({message:"Added to favorites"})
})

module.exports = router