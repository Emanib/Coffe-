
import { useCart, useDispatchCart } from "../Components/Shop/Context";
import styled from 'styled-components'
const Main = styled.div`
/* background-color:#2D635E; */
display:flex;
flex-direction: column;
gap:15px;

p {
  text-align:center;
  font-weight: 700;
}
`
const Article = styled.div`
display:flex;
align-items:center;
justify-content:space-evenly;
border: 1px solid ;

button
{
  color:red;
  background-color: none;
  border:none;
  cursor:pointer
}
`
const Title = styled.div`
display:flex;
align-items:center;
justify-content:space-evenly;
margin-right:100px; 
`
const H2 = styled.h2`
font-family: "Mulish";
font-weight: 700;
line-height: 40px ;
text-transform:uppercase; 
`
const Img = styled.img`
width:150px; 
`
const data = ["product","price","color","size"]
const CartItem = ({ ...prop }) =>
{
  return (
    <Article >
   
          <Img src={prop.product.imageUrl} alt="product" />
             <div>  {prop.product.price.toLocaleString("en", {
                style: "currency",
                currency: "USD"
              })}   </div>  
            <p>  {prop.product.cl} </p>
            <p>  { prop.product.size}</p>
          <button onClick={() => prop.handleRemove(prop.index)}><i class="fas fa-trash"></i></button>
       
    </Article>
  );
};
export default function Store()
{
   const items = useCart();

    const dispatch = useDispatchCart()
  const totalPrice = items.reduce((total, b) => total + b.price, 0);
 
    const handleRemove = (index) =>
    {
        dispatch({type:"REMOVE",index})
  }
 
    if (items.length === 0)
    {
        return (
            <main>
            <p> Cart is empty </p>
        </main>)
    }
  else  if(items.length !==0)
    {
      return (
        <Main>
            <p>
        Total price:{" "}
        {totalPrice.toLocaleString("en", {
          style: "currency",
          currency: "USD"
        })}
          </p>
             <Title >
          {data.map((item)=>( <H2> {item} </H2>))}
      </Title>
          {items.map((item, index) => (
        <CartItem
          handleRemove={handleRemove}
          key={index}
          product={item}
          index={index}       
        />
          ))}
          
        </Main>)
   
        }
    
}