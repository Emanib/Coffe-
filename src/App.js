
import './App.css'
// import NavLinkMob from './Components/NavBar/NavLinkMob'
import NavBar from './Components/NavBar'
 import {Card} from './Components/Card/Slider'
// import {Map} from './Components/Map'
import First from './Components/Sections/First'
import Second from './Components/Sections/Second'
import Third from './Components/Sections/Third'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar />
        {/* <Map className ="map"/> */}
      </header>
      <First />
      <Second />
      <Third />
      <Card />
    </div>
  )
}

export default App
