import React, { useRef } from 'react';
import styled from 'styled-components';
import Youtube from 'react-youtube';
import { useDispatch, useSelector } from 'react-redux';
import { FaWindowClose } from 'react-icons/fa';
import { closeModal } from '../../features/component/componentSlice';

const Modal = () => {
    const {ModalIsOpen} = useSelector(store => store.component);
    const dispatch = useDispatch();
    const youtubeRef = useRef();

   const  closeModalAndPauseVideo =() => {
        dispatch(closeModal());
        console.log(youtubeRef.current)
        youtubeRef.current.internalPlayer.pauseVideo();
    }

  return (
    <Wrapper show={ModalIsOpen}>
        <div className='overlay'>

        </div>
        <button className='close_btn' onClick={closeModalAndPauseVideo}><FaWindowClose/></button>
        <div className='content'>
            <Youtube ref={youtubeRef}
             videoId='tKpHdhFxICg'
             onEnd={() => dispatch(closeModal())}
            />
        </div>
    </Wrapper>
  )
}

export default Modal

const Wrapper = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 11;
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
transition: var(--transition);
transform: scale(${props => props.show ? '1' : '0'});
.overlay{
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgb(0 0 0 / 0.9);
    z-index: 0;
}

.content{
   z-index: 1;
}

.close_btn{
    position: absolute;
    color: tomato;
    top: 20px;
    right: 40px;
    background-color:transparent;
    border: none;
    font-size: 25px;
}
`
