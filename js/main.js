async function start(){

    initScene()

    const planets = await fetchPlanets()

    let x = -8

    planets.forEach(p => {

        const planetMesh = createPlanet(p.size, p.color, x)

        planetMesh.userData = p

        planetMesh.callback = () => showInfo(p)

        x += 2.5
    })

    window.addEventListener("click", (event)=>{

        const mouse = new THREE.Vector2(
            (event.clientX / window.innerWidth) * 2 - 1,
            -(event.clientY / 500) * 2 + 1
        )

        const raycaster = new THREE.Raycaster()

        raycaster.setFromCamera(mouse, camera)

        const intersects = raycaster.intersectObjects(scene.children)

        if(intersects.length > 0){
            const obj = intersects[0].object
            showInfo(obj.userData)
        }

    })

    animate()
}

start()