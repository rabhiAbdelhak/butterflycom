import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const HeroImagesContainer = () => {
  const images = ['assets/images/adel.png', 'assets/images/abdelhak.png'];
  const [selectedId, setSelectedId] = useState(0);
  useEffect(() => {
  const interval = setInterval(() => {
     setSelectedId(prevId => {
      return (prevId + 1) % images.length
     });
  }, 2000);
  return () => clearInterval(interval);
  // eslint-disable-next-line
  }, [])
  return (
    <Wrapper>
        <img src={images[selectedId]} alt='adel'/>
    </Wrapper>
  )
}

export default HeroImagesContainer

const Wrapper = styled.div`
width: 100vh;
height: 100vh;
overflow: hidden;
background-color: rgb(0 0 0 / 0.3);
position: absolute;
top: 0;
right: -50vh;
transform: rotate(45deg);
border-radius: 20px;
display: flex;
align-items: center;

img{
    transform: rotate(-45deg) translate(-50px, 50px);
    width: 70%;
}
`