import React, { useState } from 'react';

import {AiOutlineDown} from 'react-icons/ai';
import '../../Style/css/BaminMain/BaminFooter.scss';

const BaminFooter = () => {

    const [showCopyRight, setShowCopyRight] = useState(false);
    
    const onClick =()=>{
        setShowCopyRight(!showCopyRight);
    }


    return (
        <div className="BaminFooter">
            <div className="footer_notice">
                <div className="notice_category">공지</div>
                <div className="notice_content">일부 결제 서비스 점검 안내 (9월 4일 ~6일)</div>
            </div>
            <div className="footer_notice">
                <div className="notice_category">이벤트</div>
                <div className="notice_content">9월 요일별 할인! 49개 브랜드 최대 6천원 할인해요!</div>
            </div>
            <div className="footer_link">
                <a>사업자정보확인</a> | <a>이용약관</a> | <a>전자금융거래 이용약관</a> | <a>개인정보 처리방침</a>
            </div>
            <div className="copyright">
                <div className="copyright_subject" onClick={onClick}>(주)우아한형제들 <AiOutlineDown/></div>
                {
                    showCopyRight?
                        <div className="copyright_hidden_text">
                            대표이사 김범준 | 사업자등록번호 : 000-00-00000<br/>
                            통신판매업 서울 송파-0515 | 호스팅서비스제공자 (주)우아한형제들<br/>
                            CS@woowahan.com | 서울특별시 송파구 위례성대로 2 장은빌딩<br/>
                            전자금융분쟁처리 Tel 0000-0000 | Fax 000-0000-0000
                            <table className="info">
                                <tbody>
                                    <tr>
                                        <td>
                                            고객센터(대표)<br/>
                                            0000-0000<br/>
                                            24시간 운영, 연중무휴
                                        </td>
                                        <td>
                                            고객센터(B마트)<br/>
                                            0000-0000<br/>
                                            오전 09:00~익일 새벽 03:00
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        :
                        null
                }
                
                <div className="copyright_text">
                    배달의민족은 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서 배달의민족은 상품거래정보 및 거래에 대한 책임을 지지 않습니다.<br/><br/>
                    * 배달의 민족 클론 코딩 by. daeunKim *
                </div>
            </div>
        </div>
    );
};

export default BaminFooter;