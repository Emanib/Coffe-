// import NavBar from '../Components/NavBar'
 import {Card} from '../Components/Card/Slider'
import Footer from '../Components/Sections/Footer'
import First from '../Components/Sections/First'
import Second from '../Components/Sections/Second'
import Third from '../Components/Sections/Third'

const Home = () =>
{
    return ( 
<div>
      {/* <NavBar /> */}
        {/* <Map className ="map"/> */}
      <First />
      <Second />
      <Third />
        <Card />
      <Footer/>  
</div>
       
     );
}
 
export default Home;
