import styled from 'styled-components'
import coffee from '../../images/coffee.svg'
import face from '../../images/face.svg'
import inst from '../../images/inst.svg'
import twitter from '../../images/twitter.svg'
const data = { content: 'Drink coffee, enjoy with Samwyle', title: 'Coffee Shop' }
const Box = styled.div`
width:100%;
height:100%;
display:grid;
grid-template-columns: 1fr 1.5fr;
grid-template-rows:50vh;
 /* place-items: center; */
@media (max-width: 768px) {
grid-template-columns:1fr;

}
`
const Small = styled.div`
background-color:#F4F7F5;
width:159px;
height:157px;
 position:relative;
top:193px;
left:164px;
`
const Background = styled.div`
background-color:#E3EBE7;

  position:absolute;
  top:90px;
  width:350px;
  height:320px;
  left:838px; 
`
const Layer = styled.img`
width:300px;
height:250px;
position:absolute;
top:100px;

`
const Content = styled.h4`
font-family:'Cedarville Cursive';
font-size:26px;
line-height:53px;
font-weight:400;
color:#444A4A;
`
const Title = styled.h1`
font-family:'Josefin Sans';
font-size:63px;
font-weight:700;
color:#000;`
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
const Follow = styled.h3`
font-family:'Josefin Sans';
color:#444A4A;
  transform: rotate(-90deg);
font-style:normal; 
`
const Box1 = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
width:100%; 

@media (max-width: 768px) {

  text-align:center;
  display:flex;
  flex-direction:column;
  align-items:center;

}
;

`
const Box2 = styled.div`

  @media (max-width: 768px) {
display:none;
  }

`
const Img = styled.img`
width:20px;
height:20px;

margin:10px;

`
const Social = styled.div`
display:flex;
flex-direction:column;
position:relative;
align-items:center; 
left:85%;
width:100px;

`
const First = () => {
  return (
    <Box>
      <Box1>
        <Content> {data.content} </Content>
        <Title> {data.title} </Title>
        <Btn> Order here </Btn>
      </Box1>
      <Box2>

        <Background> <Layer src={coffee} alt='coffee' /></Background>
        <Small />
        <Social>
          <Img src={face} alt='face' />
          <Img src={inst} alt='instagram ' />
          <Img src={twitter} alt='twitter' />
          <Follow> Follow us </Follow>
        </Social>
      </Box2>
    </Box>

  )
}

export default First
