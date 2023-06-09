import './style.css'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg')
})

const loader = new THREE.TextureLoader()

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(30)
renderer.render(scene, camera)

const pointLight = new THREE.DirectionalLight(0xffffff)
pointLight.position.set(-50, 50, 50)

const ambientLight = new THREE.AmbientLight(0x999999)
scene.add(pointLight, ambientLight)

// const lightHelper = new Three.PointLightHelper(pointLight)
// const gridHelper = new Three.GridHelper(200, 50)
// scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(camera, renderer.domElement)

const starGeo = new THREE.BufferGeometry()
const positions = []
const n = 200, n2 = n / 2
for (let i = 0; i < 6000; i++) {
  positions.push({
    x: Math.random() * n -n2,
    y: Math.random() * n -n2,
    z: Math.random() * n -n2
  })
}
starGeo.setFromPoints(positions);

const stars = new THREE.Points(
  starGeo,
  new THREE.PointsMaterial({size: 0.01})
)
scene.add(stars)

const spaceTexture = loader.load('milkyway.jpg')
scene.background = spaceTexture

const moonTexture = loader.load('moon.png')
const moonNormal = loader.load('moonNormal.png')
const moonBump = loader.load('moonHeight.png')

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: moonNormal,
    bumpMap: moonBump
  })
)
scene.add(moon)

// const boxTexture = loader.load('moon.png')
// const box = new Three.Mesh(
//   new Three.BoxGeometry(3, 3, 3),
//   new Three.MeshBasicMaterial({map: boxTexture})
// )

// scene.add(box)

const moveCamera = () => {
  const {top} = document.body.getBoundingClientRect()

  camera.position.z = top * -0.01
  camera.position.x = top * -0.0002
  camera.position.y = top * -0.0002
}

// document.body.onscroll = moveCamera

const animate = () => {
  requestAnimationFrame(animate)
  
  moon.rotation.x += 0.0005
  moon.rotation.y += 0.00025
  moon.rotation.z += 0.0005

  controls.update()
  renderer.render(scene, camera)
}

animate()
