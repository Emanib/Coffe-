import styled from 'styled-components'
const NavContainer = styled.div`
 display:flex;
 height:100%;
 /* background-color:pink;  */
 align-items:center; 
`
const LinkWrapper = styled.ul`
margin:0;
padding:0;
list-style:none; 
display:flex;
justify-content:space-between;

`
const LinkItem = styled.li`
color:#000;
height:100%;
font-weight:700;
font-family:'Josefin Sans';
font-size:16px;
display:flex; 
align-items: center;
 padding: .5em 1.1em;
justify-content:space-between;
background-color:pink;
gap:1em;


`

const Link = styled.a`
    color: inherit;
    text-decoration: none;
    font-weight: inherit; 
`
const Btn = styled.button`
background-color:#2D635E;
color:#fff;
border:none;
padding: .7em 1.3em;
border-radius: 7px;
font-weight: inherit;`
const NavLink = (props) =>
{
    return (
        <NavContainer>
    <LinkWrapper>
 <LinkItem>
    <Link href="#"> Home </Link>
     <Link href="#" >  About us </Link>
     <Link href="#">  Promotion </Link>
     <Link href="#">  Shop   </Link>
    <Link href="#">  Contacts  </Link>
                    <Btn> Contact Us</Btn>    
                </LinkItem>
                  
  
        </LinkWrapper>
        </NavContainer>
   
     );
}
 
export default NavLink;