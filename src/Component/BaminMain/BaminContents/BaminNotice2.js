import React,{useReducer, useEffect, useRef} from 'react';
import styled from "styled-components";

import BaminNoticeItem2 from './BaminNoticeItem2';

import notice1 from "../../../Style/image/notice2_1.png"; 
import notice2 from "../../../Style/image/notice2_2.png"; 
import notice3 from "../../../Style/image/notice2_3.png"; 

import '../../../Style/css/BaminMain/BaminContent/BaminNotice2.scss';

const Container = styled.div`
  width: 100%;
  position: relative;
  top: 3.7rem;
  overflow: hidden;
`;

const BaminNotice = () => {
    const [currentSlide, setCurrentSlide] = useReducer((state = 0, action) => {
        if (action.type === 'add'){
            return state + 1===3?0:state+1;
        } 
        return state;
      },0);
    const slideRef = useRef(null);

    const renderNoticeSlide = () => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
    }
    
    useEffect(() => {
        const timer = window.setInterval(() => {
            setCurrentSlide({ type: 'add' });
          }, 4000);
        return () => {
        window.clearInterval(timer);
        };
    }, []);

    useEffect(()=>{
        renderNoticeSlide();
    },[currentSlide]);

    return (
        <Container>
            <div className="BaminNotice2" ref={slideRef}>
                <BaminNoticeItem2 img={notice1} />
                <BaminNoticeItem2 img={notice2} />
                <BaminNoticeItem2 img={notice3} />
            </div>
            <div className="noticePage2">
                <div className="noticeIndex">{currentSlide+1}/3</div>
            </div>
        </Container>
    );
};

export default BaminNotice;