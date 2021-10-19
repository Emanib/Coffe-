
import { useCart } from "./Context";
import { Link } from "react-router-dom";
import styled from 'styled-components'
const Header1 = styled.div`
position:absolute;
z-index:10;
top:7px; 
width:40px;
height:40px;
left:54%;
display:flex;
justify-content:center;
align-items:center;
background-color:#2D635E;
border-radius:50px;

i
{
    color:#fff;
    font-size:1em;
 
}

`

const Header = () =>
{
    const items = useCart()
    return (
        <Header1>      
            <Link to="/cart">
                <i className="fas fa-shopping-cart">{items.length}</i>           
            </Link>
        </Header1>

     );
}
 
export default Header;