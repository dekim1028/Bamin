import React,{useReducer, useEffect, useRef} from 'react';
import styled from "styled-components";

import BaminNoticeItem from './BaminNoticeItem';

import notice1 from "../../../Style/image/notice1.png"; 
import notice2 from "../../../Style/image/notice2.png"; 
import notice3 from "../../../Style/image/notice3.png"; 

import '../../../Style/css/BaminMain/BaminContent/BaminNotice.scss';

const Container = styled.div`
  width: 100%;
  position: absolute;
  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
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
            <div className="BaminNotice" ref={slideRef}>
                <BaminNoticeItem img={notice1} />
                <BaminNoticeItem img={notice2} />
                <BaminNoticeItem img={notice3} />
            </div>
            <div className="noticePage">
                <div className="noticeIndex">{currentSlide+1}/3</div>
                <div className="noticeNextPage">모두 보기 ></div>
            </div>
        </Container>
    );
};

export default BaminNotice;