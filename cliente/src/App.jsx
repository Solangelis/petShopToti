import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Card from './components/layout/Card'
import './App.css'



function App() {

  return (
    <div className="App">
      <Navbar />
      <h1>Seja Benvido a Nossa App</h1>
      <h2>A nossa página se encontra em Construcao</h2>
      <button>prueba</button>
      <div>
        <Card className="Main_Card" >
        </Card>
      </div>
      <Footer />
    </div>
    
    
  )
}
export default App


