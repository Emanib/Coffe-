
import './App.css'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import RouterWrapper from './Routes/RouterWrapper'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from './Layout/Layout'
function App()
{
console.log(process.env.REACT_APP_API_URL)
  
  return (
    <Router>
      <Switch>
        <RouterWrapper path="/"  exact component={Home} layout = {Layout} />
        <RouterWrapper path = "/shop" exact component = {Shop} layout = {Layout} />

     </Switch>

     </Router>
  )
}

export default App
