import React, { useState } from 'react';
import BaminRecommendList from './BaminRecommendList';

import '../../../Style/css/BaminMain/BaminRecommend/BaminRecommend.scss';

const BaminRecommend = () => {
    const [recommendListInfo,setRecommendListInfo] = useState([
        {
            code:"fastDelivery",
            displayType:"recommend_flex",
            text:"우리동네 ⚡️ <span class=\"recommendTag\">#가장빠른 배달</span>"
        },
        {
            code:"HomeFood",
            displayType:"recommend_flex",
            text:"지금쯤 <span class=\"recommendTag\">#브런치</span> 땡길시간⏰"
        },
        {
            code:"Carbohydrate",
            displayType:"recommend_block",
            text:"점심엔 <span class=\"recommendTag\">#탄수화물</span> 플렉스💰"
        },
    ]);

    return (
        <div className="BaminRecommend">
            <h1>오늘은<br/>이거 어때요?</h1>
            <div className="BaminRecommend_sub">
            {
                recommendListInfo.map(info=>(
                    <BaminRecommendList recommendListInfo={info} key={info.code}>
                        <p className="recommendText" dangerouslySetInnerHTML={ {__html: info.text} }>
                        </p>
                    </BaminRecommendList>
                ))
            }
            </div>
        </div>
    );
};

export default BaminRecommend;