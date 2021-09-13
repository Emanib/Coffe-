import styled from "styled-components";
import Logo from '../../images/Logo.svg'
import Samwayle from '../../images/Samwayle.svg';

const Logoo = styled.div`
  display: flex;
  align-items: center;
  margin-left:40px;
`

const Log = () =>
{
    return (
        <Logoo>
            <img src = {Logo} alt ="log" />
            <img src = {Samwayle}  alt = "log"/>

        </Logoo>

    );
}
 
export default Log;