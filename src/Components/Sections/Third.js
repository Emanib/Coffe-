import styled from 'styled-components'
import juice from '../../images/juice.svg'
const data = {
    title: "Coffee of the day",
    content:"Americano coffee (Italian: Caffè Americano) is an espresso diluted with hot water. The presence of foam (cream) depends on how coffee and water are mixed.Attention! The concepts of “American” and “American coffee” should not be confused. n the second case, this refers not to diluted espresso, but to a drink prepared through a filter system."
}
const Box = styled.div`
margin-top:20em;
display:grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 50vh;
@media (max-width: 768px){
    display:flex;
    flex-direction:column-reverse;
    align-items:center; 
    margin:0; 
}

`
const Box1 = styled.div`
padding:0 3em; 
  
`
const Box2 = styled.div`
background-color:#D3D3D3;
width:410px;
height:276px;
position:relative;
top:30px;
left:50px;
display:flex;
flex-direction:column;
align-items:center;
@media (max-width: 768px){

    top:-3px;
}
`
const Title = styled.h2`

font-family:'Josefin Sans';
font-size:38px; 
font-weight:700;
color:#000;
display:flex;

`
const Content = styled.h5`
font-family:'Alegreya Sans';
color:#444A4A;
font-size:15px;
font-weight:400;
line-height:30px;
@media (max-width: 768px)
{
   
    width:270px; 
}
   width: 500px;
 white-space:wrap;
   
`
const Img = styled.img`
position:absolute;
top:-20px;
 
`
const Btn = styled.button`
border:none;
background-color:#2D635E;
border-radius:6px;
font-family:'George Round';
font-size:20px;
display:flex;
align-items:center;
padding:.5em 1.3em;
color:#fff;

`

const Third = () =>
{

    return ( 
        <Box>
            <Box1 >  
                <Title>  { data.title}</Title>
                <Content> {data.content} </Content>
                <Btn> order Now</Btn>
            </Box1>
        <Box2 >
                <Img src={juice } alt="juice"/>
            </Box2>
</Box>

     );
}
 
export default Third;