import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer/Footer'
const Layout = ({children}) => {
    return (
        <div> 
            <NavBar />
            {children}
          <Footer />

        </div>
       
     );
}
 
export default Layout;