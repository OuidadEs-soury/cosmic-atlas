let scene, camera, renderer

function initScene(){

    scene = new THREE.Scene()

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000)
    camera.position.z = 10

    renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, 500)

    document.getElementById("scene").appendChild(renderer.domElement)

}

function createPlanet(size, color, position){

    const geometry = new THREE.SphereGeometry(size, 32, 32)
    const material = new THREE.MeshBasicMaterial({color:color})

    const planet = new THREE.Mesh(geometry, material)

    planet.position.x = position

    scene.add(planet)

    return planet
}

function animate(){

    requestAnimationFrame(animate)

    scene.children.forEach(obj=>{
        obj.rotation.y += 0.01
    })

    renderer.render(scene, camera)
}