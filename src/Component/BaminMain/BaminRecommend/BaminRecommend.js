import React, { useState } from 'react';
import BaminRecommendList from './BaminRecommendList';

import delivery from '../../../Style/image/recommend/delivery.png';
import '../../../Style/css/BaminMain/BaminRecommend/BaminRecommend.scss';

const BaminRecommend = () => {
    const [recommendListInfo,setRecommendListInfo] = useState([
        {
            code:"fastDelivery",
            displayType:"recommend_flex"
        },
        {
            code:"HomeFood",
            displayType:"recommend_flex"
        },
        {
            code:"Carbohydrate",
            displayType:"recommend_block"
        },
    ]);

    return (
        <div className="BaminRecommend">
            <h1>오늘은<br/>이거 어때요?</h1>
            <img className="deliveryImg" src={delivery} alt="배달이"/>
            <div className="BaminRecommend_sub">
            {
                recommendListInfo.map(info=>(
                    <BaminRecommendList recommendListInfo={info} key={info.code}>
                        <p className="recommendText">
                            우리동네 ⚡️ <span className="recommendTag">#가장빠른 배달</span>
                        </p>
                    </BaminRecommendList>
                ))
            }
            </div>
        </div>
    );
};

export default BaminRecommend;