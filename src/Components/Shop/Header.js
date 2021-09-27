import { useCart } from "./Context";
import { Link } from "react-router-dom";
import styled from 'styled-components'
const Header1 = styled.div`
position:relative;
z-index:10;
top:-30px; 
display:flex;
justify-content:flex-end;  
`

const Header = () =>
{
    const items = useCart()
    return (
        <Header1>
           
            <Link to = "/cart">  Cart  ({items.length})</Link>
        </Header1>

     );
}
 
export default Header;