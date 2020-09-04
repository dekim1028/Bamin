import React,{useState} from 'react';
import BaminRecommendListItem from './BaminRecommendListItem';

import '../../../Style/css/BaminMain/BaminRecommend/BaminRecommendList.scss';

import food_1 from '../../../Style/image/recommend/food_1.jpeg';
import food_2 from '../../../Style/image/recommend/food_2.jpeg';
import food_3 from '../../../Style/image/recommend/food_3.jpeg';
import food_4 from '../../../Style/image/recommend/food_4.jpeg';

import {AiFillPlayCircle} from 'react-icons/ai';

const BaminRecommendList = ({recommendListInfo, children}) => {
    const [items, setItems] = useState([
        {
            id:1,
            code:"fastDelivery",
            image:food_1,
            name:"백제231 갈비",
            time:"15~25분",
            menu:"한식, 산삼, 삼계탕, 전복 삼계탕",
            fastDelivery:true
        },
        {
            id:2,
            code:"fastDelivery",
            image:food_2,
            name:"백채김치찌개 남성역점",
            time:"16~26분",
            menu:"한식, 백채찌개, 달걀말이",
            fastDelivery:true
        },
        {
            id:3,
            code:"HomeFood",
            image:food_3,
            name:"알촌봉천(직영점)",
            time:"18~28분",
            menu:"한식, 마늘듬뿍매콥제육, 불고기알밥",
            fastDelivery:true
        },
        {
            id:4,
            code:"HomeFood",
            image:food_4,
            name:"두부공작소",
            time:"19~29분",
            menu:"한식, 제육볶음요리, 순두부 새싹비빔밥",
            fastDelivery:true
        },
    ]);
    return (
        <div className="BaminRecommendList">
            {children}
            <div className="BaminRecommendList_sub">
                {
                    items.filter(val=>val.code===recommendListInfo.code).map(item=>(
                        <BaminRecommendListItem item={item} key={`${item.code}_${item.id}`}>
                            <img src={item.image} alt=""/>
                        </BaminRecommendListItem>
                    ))
                }
                <div className="plusBtn">
                    <AiFillPlayCircle/>
                    <div>더보기</div>
                </div>
            </div>
        </div>
    );
};

export default BaminRecommendList;