
import { useCart, useDispatchCart } from "../Components/Shop/Context";
import { Link } from "react-router-dom";

const CartItem = ({ ...prop }) =>
{
  return (
    <article>
      <div className="dt w-100 bb b--black-10 pb2 mt2 dim blue" href="#0">
        <div className="dtc w3">
          <img src={prop.product.imageUrl} alt="product" />
        </div>
        <div >
          <h1 >{prop.product.title}</h1>
          <dl>
            <dd >
              {prop.product.price.toLocaleString("en", {
                style: "currency",
                currency: "USD"
              })}
            </dd>
            <h1> Color {prop.product.cl} </h1>
            <h1> Size { prop.product.size}</h1>
          </dl>
          <button onClick={() => prop.handleRemove(prop.index)}>Remove from cart</button>
        </div>
      </div>
    </article>
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
        return (<main>
             <Link to = "/shop">  shop </Link>
            <p>
        Total price:{" "}
        {totalPrice.toLocaleString("en", {
          style: "currency",
          currency: "USD"
        })}
            </p>
          {items.map((item, index) => (
        <CartItem
          handleRemove={handleRemove}
          key={index}
          product={item}
          index={index}       
        />
      ))}
        </main>)
   
        }
    
}