import React from 'react'
import styled from 'styled-components'
import { middleScreen } from '../utils/Responsiveness'

const Logo = () => {
  return (
    <Wrapper>
        <img src='/assets/images/identity/LetterLogo.png' alt='logo'/>
    </Wrapper>
  )
}

export default Logo

const Wrapper = styled.div`

img {
    max-width: 100%;
    height: 70px;

    ${middleScreen({width: '180px', height: '50px'})}
}
`