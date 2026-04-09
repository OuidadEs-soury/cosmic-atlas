function showInfo(planet){

    document.getElementById("info-panel").innerHTML = `
        <h2>${planet.name}</h2>
        <p>${planet.info}</p>
        <button onclick='saveFavorite(${JSON.stringify(planet)})'>⭐ Save</button>
    `
}

function comparePlanets(){
    alert("🚀 Comparison feature coming soon")
}