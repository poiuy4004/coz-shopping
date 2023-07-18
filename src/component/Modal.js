import { useState } from 'react';
import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.4);
  display: grid;
  place-items: center;
`;

export const ModalContainer = styled.div`
  height: 15rem;
  text-align: center;
  margin: 120px auto;
`;

export const ModalBtn = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.h
  role: 'dialog'
}))`
position: relative;
    border-radius: 10px;
    background-color: #ffffff;
    width: 744px;
    height: 480px;

    > span.close-btn {
      font-size: 2rem;
      color: grey;
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
    }

    > div.desc {
      color: #4000c7;
    }

    > div.desc > img {
      height: auto;
      width: 100%;
    } 
`;

export const Modal = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}>
          {isOpen === false ? 'Open Modal' : 'Opened!'}
        </ModalBtn>
        {isOpen === true ? <ModalBackdrop onClick={openModalHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <span onClick={openModalHandler} className='close-btn'>&times;</span>
            <div className='desc'>
              <img src={item.image_url || item.brand_image_url} alt="modal view" />
            </div>
          </ModalView>
        </ModalBackdrop> : null}
      </ModalContainer>
    </>
  );
};