import styled from 'styled-components'

const Wrapper = styled.div`
width:100%;
height:100%;
/* display:grid;
grid-template-columns:repeat(3,1fr); */
justify-content:center;
/* position:relative; */
overflow:hidden;
align-items:center; 

`;
const Btn = styled.button`
border:none;
background-color:#444444;
color:#fff;
display:flex; 
align-items:center;
justify-content:center;
cursor:pointer; 
width:100px;
height:50px;
border-radius:6px; 
/* flex-direction:column;  */
`
const Slide = styled.div`
z-index:1;
height:100%;
width:100; 
`;
const Slider = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
&::before
{
    content:'';
    position:absolute;
    z-index:2;
    width:100%;
    height:100vh;
    bottom:0vh;
    left:0;
    overflow:hidden;
    opacity:.4;
    background:linear-gradient(0deg, rgba(0,0,0,.2) 0%,rgba(0,0,0,.2) 50%,rgba(0,0,0,.6) 100% )


}
`;
const Img = styled.img`
position: absolute;
top:0;
left:0;
width:100vw;
height:100vh;
object-fit:cover;
`;
const Content = styled.div`
position:relative;
z-index:10;
color: red;
max-width:1600px;
width:calc(100%-100px);
display:flex;
flex-direction:column;
h1
{
    color:#fff; 
    font-size:clamp(1rem,8vw,2rem);
    font-weight:400;
    text-transform:uppercase;
    box-shadow: 0px 0px 20px rgba(0,0,0,.4);
    text-align:left;
    


}
`;

const ProductSlider = ({product}) =>
{
    return ( 
        <Wrapper>
            <Slider>
                <Slide>
                    
                    <Img src={product.imageUrl} alt="product" />
                    <Content>
                        <h1> {product.title} </h1>
                        <h2> color  </h2>
                        <div style = {{display:"flex"}}  >
                            
                            {product.color.map((cl, index) =>
                                
                                <div key={index} >
                                    <input type="radio" />
                                    {cl}
                                </div>
                           )}
                        </div>
                        <h2> Sizes   </h2>
                               <div style = {{display:"flex"}}  >
                            
                            {product.size.map((cl, index) =>
                                
                                <div key={index} >
                                    <input type="radio" />
                                    {cl}
                                </div>
                           )}
                        </div>
            <p> {product.price} </p>
            <Btn> order now </Btn>
                    </Content>
        
                </Slide>
          
            </Slider>
           
      
      
</Wrapper>

     );
}
 
export default ProductSlider ;
























// import { Router, Link,Route } from 'react-router-dom'
//  const About = () => {
//   return (
//     <div>
//       <p>About</p>
//     </div>
//   );
// };
// export default function Product(props)
// {

//      return (
//     <Router> 
//          <Link to={`/coffe/${props.product.id}`}>
//              <div style={{ backgroundImage: `url(props.product.imageUrl)` }}>  hello Eman  </div>
//              <div> {props.product.price} </div>
//              </Link>
//             </Router> 
// )
// }




























