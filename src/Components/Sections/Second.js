
import styled from 'styled-components'
import cup from '../../images/cup.svg'
const data = {
    title: "Coffee Shop Samwayle",
    content: "Only one moment - when the barista reaches out over the bar to transfer the cup to the outstretched hand of the buyer.But this is exactly the moment when a connection arises between us and our guests.And we strive to do our best to maintain this connection - starting with our commitment to selecting the highest quality coffee in the world and ending with how we interact with guests and organizations to fulfill our obligations."
    
}
const Box = styled.div`
margin-top:10rem;
display:grid;
grid-template-columns: .8fr 1fr ;
grid-template-rows:50px;
@media (max-width: 768px){
    display:flex;
    flex-direction:column;
    align-items:center; 
    
}
`
const Box1 = styled.div`
background-color:#FAE9E0;
height:287px;
width:380px;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-left:100px;
@media (max-width: 768px)
{
    margin:0;
}
`
const Title = styled.h2`

font-family:'Josefin Sans';
font-size:38px; 
font-weight:700;
color:#000;

`
const Content = styled.h5`
font-family:'Alegreya Sans';
color:#444A4A;
font-size:15px;
font-weight:400;
line-height:30px;
@media (max-width: 800px)
{
   
    width:270px; 
}
   width: 500px;
    white-space:wrap;

`


const Box2 = styled.div`

  margin-left:100px;

`
const Img = styled.img`
position:relative;
top:15%;

@media (max-width: 768px){
    width:70%;
 
}
`
const Second = () =>
{
    return (
        
        <Box>
            <Box1>
                <Img src={ cup} alt="cup" />
            </Box1>
            <Box2>
                <Title>{data.title} </Title>
                <Content> {data.content} </Content>
            </Box2>


        </Box>
     );
}
 
export default Second;