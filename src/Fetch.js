import styled from 'styled-components'
import Header from './Components/Shop/Header'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ProductSlider from './Components/Shop/Product'
import Arroww from './images/Arroww.svg'
import Arrow from './images/Arrow.svg'
import { useDispatchCart } from "./Components/Shop/Context";
import { CartStateContext } from './Components/Shop/Context'
import {useContext } from 'react'
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
export default function Fetch() {
  // const value  = useContext(CartStateContext)
  // console.log(`"value":${JSON.stringify(value)}`)
  const url = process.env.REACT_APP_API_URL;
      // const [state,setState] = useState("hot")

  const [products, setProducts] = useState();
  const [current, setCurrent] = useState(0);
  const [error, setError] = useState(false); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let kkrp = true;
    if (!kkrp) return;

    axios.get(url).then(res => {
      setProducts(res.data);
      setLoading(false);
      setError(false)
    }).catch((error) => {
      setError(true);
    });
    
    return () => {
      kkrp = false; 
    }
  }, [url]);

  let content;

  if (error) {
    content = <p> error</p>
  }

  if (loading) {
    content =  <div> loading... </div>
  }

  content = products?.map((product, index) => (
   current ===index &&( <div key={index}>
      <ProductSlider product={product} />
    </div>)
  ));
  const nextSlide = () => setCurrent(current === content.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? content.length - 1 : current - 1);

  return (
    <div> 
      <Header />
      <div style = {{display:"flex"}}>
        <Arrow1 src={Arrow} alt='arrow' onClick = {prevSlide}  />
        <div style={{ display: "flex" }}>
          {content}
        </div>
        <Arrow2 src={Arroww} alt='arrow' onClick={nextSlide} />
      </div>
    </div>
  );
}
