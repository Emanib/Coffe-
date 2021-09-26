import { useCart } from "./Context";
import { Link } from "react-router-dom";

const Header = () =>
{
    const items = useCart()
    return (
        <header>
           
            <Link to = "/cart">  Cart  ({items.length})</Link>
        </header>

     );
}
 
export default Header;