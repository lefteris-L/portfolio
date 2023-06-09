import './style.css'
import * as Three from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const scene = new Three.Scene()
const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new Three.WebGL1Renderer({
  canvas: document.querySelector('#bg')
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(30)
renderer.render(scene, camera)

// const geometry = new Three.TorusGeometry(10, 3, 16 , 100)
// const material = new Three.MeshStandardMaterial({color: 0x000000})
// const torus = new Three.Mesh(geometry, material)

// scene.add(torus)

const pointLight = new Three.PointLight(0xffffff)
pointLight.position.set(-50, 50, 50)

const ambientLight = new Three.AmbientLight(0x999999)
scene.add(pointLight, ambientLight)

// const lightHelper = new Three.PointLightHelper(pointLight)
// const gridHelper = new Three.GridHelper(200, 50)
// scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(camera, renderer.domElement)

const addStar = () => {
  const geometry = new Three.SphereGeometry(0.25, 24, 24)
  const material = new Three.MeshStandardMaterial({color: 0xffffff})
  const star = new Three.Mesh(geometry, material)
  const position = Array(3).fill().map(() => Three.MathUtils.randFloatSpread(500))

  star.position.set(...position)
  scene.add(star)
}

Array(1000).fill().forEach(addStar)

const spaceTexture = new Three.TextureLoader().load('public/milkyway.jpg')
scene.background = spaceTexture

const moonTexture = new Three.TextureLoader().load('public/moon.png')
const moonNormal = new Three.TextureLoader().load('public/moonNormal.png')
const moonBump = new Three.TextureLoader().load('public/moonHeight.png')
const moon = new Three.Mesh(
  new Three.SphereGeometry(3, 32, 32),
  new Three.MeshStandardMaterial({
    map: moonTexture,
    normalMap: moonNormal,
    bumpMap: moonBump
  })
)
// moon.position.y = 15
scene.add(moon)

// const boxTexture = new Three.TextureLoader().load('moon.png')
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
