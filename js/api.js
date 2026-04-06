async function getPlanets(){

    const response = await fetch("/api/planets")

    const data = await response.json()

    return data

}

async function getPlanet(name){

    const response = await fetch(`/api/planets/${name}`)

    return response.json()

}