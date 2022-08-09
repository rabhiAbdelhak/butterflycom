import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { socialLinks } from '../../data/constants'

const SocialMedia = () => {
  return (
    <Wrapper>
      <div className='links'>
        {socialLinks.map(item => {
          return <Link key={item.id} to={item.link}>{item.icon}</Link>
        })}
      </div>
    </Wrapper>
  )
}

export default SocialMedia

const Wrapper = styled.div`
display: flex;
gap: 20px;
justify-content: space-between;

color: var(--color-blue);
h4{

}

.links {
  display: flex;
  gap: 15px;

}

a {
  width: 25px;
  height: 25px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);

  :hover{
    color: var(--color-light);
  }
}
`