const express = require("express")
const router = express.Router()
const planets = require("../data/planets.json")

router.get("/", (req,res)=>{
    res.json(planets)
})

module.exports = router