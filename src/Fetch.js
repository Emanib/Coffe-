import styled from 'styled-components'
import Header from './Components/Shop/Header'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ProductSlider from './Components/Shop/Product'
import Arroww from './images/Arroww.svg'
import Arrow from './images/Arrow.svg'
import { useDispatchCart } from "./Components/Shop/Context";
const Arrow1 = styled.img`
/* width:100%;  */
z-index:10;
display:flex;
 position:absolute; 
top:50%;
left:50px;

`
const Arrow2 = styled.img`
/* width:100%;  */
z-index:10;
display:flex;
 position:absolute; 
top:50%;
right:100px; 
justify-content:space-between;

`
const Fetch = () =>
{
   
    const url = process.env.REACT_APP_API_URL
  const [products, setProducts] = useState({ loading: false, data: null, error: false });
  const [current, setCurrent] = useState(0)

  useEffect(() =>
  {
    setProducts({
      loading: true, data: null, error: false
    });
   axios.get(url).then(res => { setProducts({ loading: false, data: res.data, error: false });  }).catch(() =>
    {
      setProducts({loading:false,data:null,error:true})
    })


  }, [url])
  let content = null;
   const dispatch = useDispatchCart()
  const addToCart = (item) => {
dispatch({type:'ADD',item})
  };
  if (products.error)
  {
    content = <p> error</p>
    }
 
  if (products.loading)
  {
    
    content =  <div> loading </div>
  
  }
  if (products.data)
  {
    var length = products.data.length
    content = products.data.map((product, index) => (
        
        current === index && (
        <div key = {index}>
           <button onClick = {()=>addToCart(product)}  > Hello  </button> 
               <ProductSlider product={product} key={product.id} />
             
          </div>
     

        )
         
    )) 

  }
   const nextSlide = () =>
    {
     setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () =>
  {
    setCurrent(current === 0 ? length - 1 : current - 1)
    }
    
  return (
      <div> 
<Header />
         <div style = {{display:"flex"}}>
          <Arrow1 src={Arrow} alt='arrow' onClick = {prevSlide}  />
       <div style={{ display: "flex" }}>  {content}  </div>
        <Arrow2 src={Arroww} alt='arrow' onClick={nextSlide} />
</div>
      </div>
   

      );
}
 
export default Fetch;