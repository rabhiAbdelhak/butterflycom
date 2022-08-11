import React from 'react';
import styled from 'styled-components';

const NewsLetter = () => {
  return (
    <Wrapper>
        <div className='line'></div>
         <h1 className='section-title'>Recevez les nouvels, articles et infos</h1>
         <form>
            <input type='email' name='email' placeholder='Your Email...'/>
            <button type='submit' className='flex_center'>Submit</button>
         </form>
    </Wrapper>
  )
}

export default NewsLetter

const Wrapper = styled.section`
/* background-image: linear-gradient(to right, var(--color-blue), var(--color-light)); */


min-height: 20px;
padding: 40px 0;

form{
    border: 1px solid var(--color-purple);
    width: 70%;
    margin: 40px auto;
    display: flex;
    height: 40px;
    gap: 5px;
    input{
        flex: 1;
        padding: 10px 8px;
        border: none;
        transition: var(--transition);
        font-size: 18px;
        color: var(--color-purple);
        font-family: 'agency';
        font-weight: 400;

        ::placeholder{
            color: var(--color-light);
            opacity: 0.3;
            font-size: 15px;
        }
        :focus{
            outline: none;
            background-color: white;
            border-left: 5px solid var(--color-light);
        }
        background-color: rgb(255 255 255/0.7);
    }

    button{
        background-color: var(--color-light);
        padding: 8px 15px;
        color: white;
        border: none;
        font-size: 18px;
        text-transform: uppercase;
        font-family: 'agency';

    }
}

.line{
    background-image: linear-gradient(to right, var(--color-light), var(--color-blue));
    width: 40%;
    height: 4px;
    margin: 40px auto;
}
`