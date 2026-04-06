const solarSystem = document.getElementById("solar-system")
const info = document.getElementById("planet-info")

async function loadPlanets(){

    const planets = await getPlanets()

    planets.forEach(p => {

        const div = document.createElement("div")

        div.className = "planet"

        div.innerText = p.name

        div.addEventListener("click", () => showPlanet(p.name))

        solarSystem.appendChild(div)

    })

}

async function showPlanet(name){

    const planet = await getPlanet(name)

    info.innerHTML = `
        <h2>${planet.name}</h2>
        <p>${planet.description}</p>
        <p>Diameter: ${planet.diameter}</p>
        <p>Distance from Sun: ${planet.distance}</p>
    `

}

loadPlanets()