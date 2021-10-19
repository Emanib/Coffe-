import { slides } from './data'
import React, { useState } from 'react'

import Arroww from '../../images/Arroww.svg'
import Arrow from '../../images/Arrow.svg'
import styled from 'styled-components'
const Box = styled.div`
display:flex;
padding: 1em 2em;
background-color:#F4F7F7;
margin-top:5em;
align-items:center;
justify-content:space-around;
@media (max-width: 768px){
    display:flex;
    flex-direction:column;
    align-items:center;
   
    
}

`
const Ca = styled.div`
/* background-color:blue ; */
display:flex;
  justify-content: center;
  /* align-items: center; */
  /* opacity: ${({ active }) => (active ? '0' : '1')}; */
  width:339px;
  height:458px;
   border-radius :26px;
box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
text-align:center;
background-color:#fff;
@media (max-width: 768px){
  margin-top:2em; 
}

`
const Title = styled.h3`
font-family: 'Josefin Sans';
font-size: 28px;
font-weight:700;
line-height:28px;

`
const Topic = styled.h5`
font-family:'Alegreya Sans'; 
font-size:19px;
line-height:39px;
font-weight:400;
letter-spacing:.1%; 


`

const Btn = styled.div`

background-color: #2D635E;
width:253px;
height:54px;
border-radius:6px;
border:none;
color:#fff;
font-size:20px;
font-family:'George Round';
display:flex;
justify-content:center;
align-items:center; 

`
const Elements = styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:20px;
`
const Arow = styled.img`
@media (max-width: 768px){
  display:none; 
}
/* width:100%;  */
`
export function Card () {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  const Next = () => {
 
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  // console.log(current)
  const Prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  return (
    <Box>
      <Arow src={Arrow} alt='arrow' onClick={Next} />

      {[...slides].map((slide, i) => {
        return (
          <Ca key={i}>
            {/* {i === current && ( */}
            <Elements>
              <Title> {slide.title} </Title>
              <Topic> {slide.description}  </Topic>
              <Btn> order Now </Btn>
            </Elements>

          </Ca>

        )
      })}
      <Arow src={Arroww} alt='arrow' onClick={Prev} />

    </Box>
  )
}
