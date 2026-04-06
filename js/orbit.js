const planets = document.querySelectorAll(".planet")

planets.forEach((planet,index)=>{

    planet.style.animation = `orbit ${5 + index}s linear infinite`

})