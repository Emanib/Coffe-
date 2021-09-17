
import axios from 'axios'
import { useState, useEffect } from 'react'
// import Product from './Components/Product'
const Fetch = () =>
{
   
    const url = process.env.REACT_APP_API_URL
  const [products, setProducts] = useState({ loading: false, data: null, error: false });
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
      content = products.data.map((product,key) => (
        <div key = {product.id}> {product.price} </div>
         
    ))
    }
    return (
   <div>
    <div>  {content}  </div>    
</div>

      );
}
 
export default Fetch;