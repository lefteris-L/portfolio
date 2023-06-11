import './style.css'
import * as THREE from 'three'
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000)
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
})


const loader = new THREE.TextureLoader()

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.set(0, 0, 1)
renderer.render(scene, camera)

const directionalLight = new THREE.DirectionalLight(0xffffff)
directionalLight.position.set(-50, 50, 50)

const ambientLight = new THREE.AmbientLight(0x999999)
scene.add(directionalLight, ambientLight)

const lightHelper = new THREE.DirectionalLightHelper(directionalLight)
// const gridHelper = new Three.GridHelper(200, 50)
// scene.add(lightHelper)

// const controls = new OrbitControls(camera, renderer.domElement)

const starGeo = new THREE.BufferGeometry()
const vertices = []//new Float32Array(18000)
const n = 2000, n2 = n / 2
for (let i = 0; i < 6000; i++) {
  const star = new THREE.Vector3(
    Math.random() * n -n2,
    Math.random() * n -n2,
    Math.random() * n -n2
  )
  vertices.push(star)
}
starGeo.setFromPoints(vertices)

const stars = new THREE.Points(
  starGeo,
  new THREE.PointsMaterial({size: 0.07})
)
stars.position.z = -1000
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
moon.position.z = -1000
scene.add(moon)

const createText = () => {
  const h1 = document.createElement('h1')
  h1.innerText = 'My name is Lefteris Loizides'
  h1.classList.add('name')

  const p = document.createElement('p')
  p.innerText = 'I create stuff on the Web. This is my portfolio'
  p.classList.add('text')
  
  const h2 = document.createElement('h2')
  h2.innerText = 'Enjoy :)'
  h2.classList.add('enjoy')

  document.querySelector('.box').append(h1, p, h2)
}
let velocity = 0
let shouldMove = true
const acc = 0.02
const distance = -5

const animate = () => {
  requestAnimationFrame(animate)
  
  moon.rotation.x += 0.0005
  moon.rotation.y += 0.00025
  moon.rotation.z += 0.0005

  velocity += acc
  
  if (shouldMove) {
    if (moon.position.z < distance) {
      moon.position.z += velocity
      stars.position.z += velocity
      camera.rotation.y -= 0.001
    } 
    if (moon.position.z > distance) {
      moon.position.z = distance
      moon.position.x = 0
      stars.position.z = distance
      shouldMove = false
      createText()
    }
  }
  if(!shouldMove && camera.rotation.y < 0) {
    camera.rotateY(0.001)
  }
  // controls.update()
  renderer.render(scene, camera)
}
animate()
