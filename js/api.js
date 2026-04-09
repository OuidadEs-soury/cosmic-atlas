async function fetchPlanets(){
    const res = await fetch("/api/planets")
    return res.json()
}

async function saveFavorite(planet){
    await fetch("/api/favorites",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(planet)
    })
}