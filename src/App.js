
import './App.css';
// import NavLinkMob from './Components/NavBar/NavLinkMob'
import NavBar from './Components/NavBar'
//  import {Card} from './Components/Card/Slider'
// import {Map} from './Components/Map'
import First from './Components/Sections/First'
import Second from './Components/Sections/Second'

import './App.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <NavBar />
        <First />
      <Second/>
    {/* <Map className ="map"/> */}
        
  
     
      </header>
    </div>
  );
}

export default App;
