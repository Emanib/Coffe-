import NavLink from './NavLink'
import Log from '../Logo/index'
import styled from 'styled-components'
import NavLinkMob from './NavLinkMob'
import { sizes } from './Sizes'
import { useMediaQuery } from 'react-responsive'

import {Link} from 'react-router-dom'
const Box = styled.div`
  width: 100%;
  height: 60px;
  display:flex;
align-items: center;
    box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
    justify-content:space-between; 

`
const Left = styled.div``
const Right = styled.div``
const NavBar = () =>
{

  const isMobile = useMediaQuery({ maxWidth: sizes.mobile })
  return (
    <Box>
      <Left>   <Link to = "/">  <Log />  </Link>  </Left>
      <Right>
        {isMobile  && <NavLinkMob />}
        {!isMobile && <NavLink />}
      </Right>

    </Box>

  )
}

export default NavBar
