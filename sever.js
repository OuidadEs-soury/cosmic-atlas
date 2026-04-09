const express = require("express")
const cors = require("cors")
const path = require("path")

const planetsRoute = require("./routes/planets")
const favoritesRoute = require("./routes/favorites")

const app = express()

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, "public")))

app.use("/api/planets", planetsRoute)
app.use("/api/favorites", favoritesRoute)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`🌌 Cosmic Atlas ULTRA running on http://localhost:${PORT}`)
})