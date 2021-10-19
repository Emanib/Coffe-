import { Map } from '../Map'
import styled from 'styled-components'
const Container = styled.div`
display :flex;
flex-wrap:wrap; 
justify-content:space-evenly;
align-items:center; 
padding: 1.5rem 0; 
`
const Title = styled.div`
font-size:1em; 
display:flex;
align-items:center;

&:before{
    content:"";
    width:45px;
    height:2px;
    background-color:#444A4A;
position:absolute;
right:26%
}
`
const generateStyle = (parameters) => ({
    
    container: {
    // backgroundColor: parameters.bgColor, 
    //background-color -> backgroundColor (padding-left -> paddingLeft)
    color:parameters.color,
    margin: "5px",
    fontFamily:"Alegreya Sans",
    },
    h1 :{  
        fontFamily: "Josefin Sans",
        color: "#000000",
        spaceLetter: "2%",
        fontSize: "32px"
    },

   
})
const Content = styled.div`
margin-top:1rem 0; 
`
const data = { title :"Our address ",p1:"  110 St-Cathedral Pkwy Station ",p2:"4310 94th St, Flushing" ,p3:"94-54 Corona Ave., Elmhurst",p4:"5627 Van Doren St, Queens"}
const H5 = (prop) =>
{
    const style = generateStyle({color:"#444A4A"})
    return (
        <h5 style = {style.container} > {prop.text} </h5>
    )
}
const Footer = () =>
{
    return (    
 <Container>
 <Map />
<Content>
 <Title> {data.title} </Title>   
 < H5 text={data.p1} />
 <H5 text={data.p2} />
 <H5 text={data.p3} />
 <H5 text = {data.p4} /> 
     </Content>
        
        </Container>

     
       

     );
}
 
export default Footer;