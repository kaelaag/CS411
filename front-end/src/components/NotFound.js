import React from 'react'
import styled from 'styled-components'
import uhoh from '../uhoh.gif'
function NotFound() {
    return (
        <NfContainer div class="container">
        <img src ={uhoh} alt = "uhoh" style = {{height: '50'}}></img>
        <TextContainer div class= "container">
        <h2>Uh oh! Page not found! &nbsp;<i class="far fa-sad-tear"></i> </h2>
        <h5>The page you are looking for is not here. It might have been deleted, or you went into the wrong link.</h5>
        </TextContainer>
        </NfContainer>
    )
}
export default NotFound; 


const NfContainer = styled.section`
    padding-top: 50px;
    padding-right: 30px;
    padding-bottom: 50px;
    padding-left: 80px;
    margin: auto;
    width: 60%;
  }`
  const TextContainer = styled.section`
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
  margin: auto;
}`