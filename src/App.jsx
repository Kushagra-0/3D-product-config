import { Canvas } from '@react-three/fiber'
import './App.css'
import Experiance from './components/Experiance'

function App() {
  return <div className='App'>
    <Canvas>
      <color attach="background" args={["#213547"]}/>
      <fog attach="fog" args={["#213547", 10, 20]} />
      <Experiance/>
    </Canvas>
  </div>
}

export default App
