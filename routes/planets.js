const express = require("express")
const router = express.Router()

const planets = require("../data/planets.json")

router.get("/", (req, res) => {
    res.json(planets)
})

router.get("/:name", (req, res) => {

    const planet = planets.find(
        p => p.name.toLowerCase() === req.params.name.toLowerCase()
    )

    if (!planet) {
        return res.status(404).json({error:"Planet not found"})
    }

    res.json(planet)

})

module.exports = router