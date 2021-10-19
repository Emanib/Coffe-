import styled from 'styled-components'
import { useState} from 'react'
import { useDispatchCart } from "./Context";
const Wrapper = styled.div`

display:grid;
grid-template-columns:repeat(2,1fr);
justify-content:space-around; 
align-items:center; 
gap:2px;



`;
const Btn = styled.button`
border:none;
background-color:#2D635E;
color:#fff;
display:flex; 
align-items:center;
justify-content:center;
cursor:pointer; 
width:120px;
height:50px;
border-radius:6px;
margin-top:10px; 

`


const Img = styled.img`
top:40%;
right:20%; 
width:30vw;
height:30vh;
object-fit:cover;
`;
const Content = styled.div``;
const Box = styled.div`
display:flex;
flex-direction:column;
margin-left:100px;   
`
const Input = styled.div`
display:flex; 
`
const H2 = styled.h2`
font-family:"Cedarville Cursive";
color:#2D635E;
font-size:36px;
font-weight:400; 
`
const H1 = styled.h1`
color:#2D635E;

`
const P = styled.p`
font-family:"Alegreya Sans";
font-size:19px;
letter-spacing:.1%; 
max-width:400px; 

`
const Type = styled.h3`
font-family:"Poppins";
color:#2D635E;
font-size:20px; 
font-weight: 700;
`
const Typo = (props) =>
{
    return (
        <Content>
            <H2> {props.h2} </H2> 
            <H1> {props.h1} </H1>
            <P> {props.p} </P>
        </Content>
     

    )
}

const ProductSlider = ({product}) =>
{
    const [state, setState] = useState(product)
    const dispatch = useDispatchCart()
    const addToCart = (item) => {
        dispatch({type:'ADD',item})
    };

    if (!state) return;
    return (
        <Wrapper>   
            <Box> 
  <Typo h1="Coffee name" h2="the most wanted"  p=" H5 And we strive to do our best to maintain this connection - starting with our commitment starting with our commitment  to selecting " />
         <Type> Colors </Type>
                <Input>
    {state.color.map((cl, index) =>
    <div key={index}>
    <label htmlFor = {cl.index}> {cl}
     <input type="radio"  name="color" id={cl.index}
     onChange={() => {  setState((prev)=>({...prev, cl})) }} />
         </label>
         </div>
     )}
    </Input>
 <Type> Sizes  </Type>
<Input> 
{["large","small"].map((size, index) =>
  <div key={index} >
  <input type="radio" name="size" checked= {size ===state.size}
 onChange={() => {  setState((prev) => ({ ...prev, size })) }} />
         {size}
         </div>
    )}
    </Input>
    <Btn onClick={() => addToCart(state)}> Order Now  </Btn>  
            </Box>
     <Img src={state.imageUrl} alt="product" />

     </Wrapper>
       
      )
   
}
 
export default ProductSlider ;





























