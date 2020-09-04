import React from 'react';

import '../../../Style/css/BaminMain/BaminRecommend/BaminRecommendListItem.scss';
import fastDelivery from '../../../Style/image/recommend/fastDelivery.jpeg';
import {AiOutlineClockCircle} from 'react-icons/ai';

const BaminRecommendListItem = ({item,children}) => {
    return (
        <div className="BaminRecommendListItem">
            <div className="recommend_content">
                {children}
            </div>
            <div className="recommend_footer">
                <div className="recommend_footer_sub">
                    <div className="storeInfo">
                        <div className="storeName">{item.name}</div>
                        <div className="time">
                            <AiOutlineClockCircle/>&nbsp;{item.time}
                        </div>
                    </div>
                    <div className="storeMenu">
                        {item.menu}
                    </div>
                    {item.fastDelivery?<div className="fastDelivery"><img src={fastDelivery}></img><i>번쩍배달</i></div>:null}
                </div>
            </div>
        </div>
    );
};

export default BaminRecommendListItem;