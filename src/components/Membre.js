import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import styled from 'styled-components';
import { largeScreen, mobileScreen } from '../utils/Responsiveness';


const Membre = ({nom, image, bio, titre}) => {
  return (
    <Wrapper>
        <div className='membre_image-holder'>
            <img src={image} alt={titre}/>
        </div>
        <div className='membre_introduction'>
            <h4>{nom.fr}</h4>
            <span>{titre.fr}</span>
            <p>{bio}</p>
            <button className='more'>Learn More <FaArrowRight className='icon'/></button>
        </div>
    </Wrapper>
  )
}

export default Membre

const Wrapper = styled.article`
display: flex;
position: relative;
.membre_image-holder{
  width: 400px;
  height: 400px;
  border: 2px solid var(--color-light);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  left: -20px;
  top: 50%;
  transform: translateY(-50%);
  background: radial-gradient(#eee, #282828);
  ${largeScreen({left: '50%', top:0, transform: 'translateX(-50%)', width: '350px', height: '350px'})}
  ${mobileScreen({width: '240px' , height: '240px'})}
  ::before{
    content: '';
    position: absolute;
    width: calc(100% + 30px);
    height: calc(100% + 30px);
    border: 2px solid var(--color-light);
    border-radius: 50%;

  }
}
img{
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
}

.membre_introduction{
    margin-left: 350px;
    ${largeScreen({marginLeft:0,marginTop: '250px', textAlign: 'center'})}
    ${mobileScreen({marginTop: '150px', padding: '0 20px'})}
    position: relative;
    h4{
        text-transform: uppercase;
        font-size: 50px;
        font-weight: 700;
        color: var(--color-light);
    }
    span{
        color: white;
        font-size: 15px;
        font-weight: 600;
    }
    p{
        font-size: 16px;
        line-height: 1.7;
        font-weight: 300;
        margin: 20px 0;
        color: var(--color-white);
        text-align: justify;
    }

    button{
      padding: 10px 15px;
      background-color: var(--color-light);
      border: none;
      color: var(--color-white);
      display: flex;
      gap: 5px;
      align-items: center;
      font-size: 16px;

      .icon{
        font-size: 13px;
      }
    }
}
`