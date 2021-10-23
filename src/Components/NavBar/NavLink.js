import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Header from '../Shop/Header'
const NavContainer = styled.div`
 display:flex;
 height:100%;
 width:100%; 
 /* background-color:pink;  */
 align-items:center;
 margin-right:40px;
`
const LinkWrapper = styled.ul`
margin:0;
padding:0;
list-style:none; 
display:flex;

`

const LinkItem = styled.li`
color:#000;
height:100%;
width:100%;
font-weight:700;
font-family:'Josefin Sans';
font-size:16px;
display:flex; 
align-items: center;
 padding: .5em 1.2em;
/* background-color:pink; */
gap:2.1em;


`

const Link1 = styled.a`
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
const NavLink = () =>
{
  return (
    <NavContainer>
      <LinkWrapper>
        <LinkItem>
       <Header/>
     <Link to = "/" style = {{ textDecoration :"none", color: "inherit"}}>  Home </Link>   
          <Link1 href='#'>  Promotion </Link1>
             <Link to = "/shop" style = {{ textDecoration :"none", color: "inherit"}}>  shop </Link>
            <Link1 href='#'>  Contacts  </Link1>
             <Btn> Contact Us</Btn>
       
         
         

        </LinkItem>

      </LinkWrapper>
    </NavContainer>

  )
}

export default NavLink
