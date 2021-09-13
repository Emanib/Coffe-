import styled from 'styled-components'
import Toggle from './Toggle'
import { useState } from 'react'
import Logo from '../../images/Logo.svg'
import Samwayle from '../../images/Samwayle.svg'
import face from '../../images/face.svg'
import inst from '../../images/inst.svg'
import twitter from '../../images/twitter.svg'
const Container = styled.div`
 /* background-color:pink; */
 display:flex;
 height:100%;
 align-items:center;
 padding:1em ;
 justify-content:flex-start;
 gap:5rem; 
 `
const Logoo = styled.img`
width:${({primary}) => primary ? "45px" : "106px"};
position:${({primary})=> primary ? "absolute" : "relative"};
/* right:${({primary}) => primary ? "62%" : ""}; */
 `
const Box = styled.div`
  display:flex;
  justify-content:center;
  gap:10px;
  margin-top:20px; 
 
 `
const Social = styled.img`
 /* background-color:pink;
 width:100%;  */
 width:30px;


 
 `
const LinkWrapper = styled.ul`
width:100%;
height:100%;
display:flex;
margin:0;
padding:0;
flex-direction:column;
position:fixed; 
left:0;
top:70px;
list-style:none;
background-color: pink;


 

`
const LinkItem = styled.li`
/* background-color:red; */
width:100%;
  /* padding: 0 1.1em; */
  color: #222;
  font-weight:700;
  font-family:'Josefin Sans';
  font-size:30px;
  line-height:36px;
display:flex;
margin-bottom: 10px;
justify-content:center;
margin-top:30px;
font-style:normal;
`
const Link = styled.a`
/* background-color:#fff; */
text-decoration:none;
color:inherit;
font-size:inherit; 
`
const NavLinkMob = (props) =>
{
    const [isOpen,setOpen] = useState(false)
    return ( 
        <Container >
            <Toggle isOpen={isOpen} toggle={ ()=> setOpen(!isOpen) }/>
            {isOpen && (<LinkWrapper>
                <LinkItem> <Link href="/"> Home </Link></LinkItem>
                <LinkItem>  <Link href="/"> About us  </Link></LinkItem>
                <LinkItem><Link href="/"> Promotion </Link>   </LinkItem>
                <LinkItem> <Link href="/"> Shop </Link> </LinkItem>
                <LinkItem> <Link href="/"> Contacts</Link></LinkItem>
                <Box >
                <Social src={inst} />
                 <Social src={face} />
                <Social src={twitter} />
                </Box>
               
          
            </LinkWrapper>)}
            {/* <div> 
                <Logoo  primary src={Logo} alt="logo" />
                <Logoo   src={ Samwayle} alt="text" />
            </div> */}
        
            
           
      </Container>


     );
}
 
export default NavLinkMob;