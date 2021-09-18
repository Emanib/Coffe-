import styled from 'styled-components'

import axios from 'axios'
import { useState, useEffect ,useRef} from 'react'
import ProductSlider from './Components/Shop/Product'
import Arroww from './images/Arroww.svg'
import Arrow from './images/Arrow.svg'
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

  const time = useRef(null)
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
      content = products.data.map((product,index) => (
  current === index &&( <ProductSlider product = {product} key= {index} />)
         
    )) 

  }
   const nextSlide = () =>
    {
     setCurrent(current === length - 1 ? 0 : current + 1)
     console.log(current)
  }
  const prevSlide = () =>
  {
    setCurrent(current === 0 ? length - 1 : current - 1)
    console.log(current)
    }
    
    return (
      <div style = {{display:"flex"}}>
          <Arrow1 src={Arrow} alt='arrow' onClick = {prevSlide}  />
       <div style={{ display: "flex" }}>  {content}  </div>
           <Arrow2 src={Arroww} alt='arrow' onClick = { nextSlide}  />
</div>

      );
}
 
export default Fetch;