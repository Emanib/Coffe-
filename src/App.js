
import './App.css'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import RouterWrapper from './Routes/RouterWrapper'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from './Layout/Layout'
import Store from './Pages/Cart'
import NavBar from './Components/NavBar/index'

function App()
{
  return (
    <div>
      
      <div className = "parent">
       <Router>
           <NavBar />
        <Switch>
         
        <RouterWrapper path="/"  exact component={Home} layout = {Layout} />
        <RouterWrapper path="/shop" exact component={Shop} layout={Layout} />
        <RouterWrapper path = "/cart" exact component = {Store}  layout = {Layout} />

     </Switch>

     </Router>
</div>
     

    </div>
   
  )
}

export default App
