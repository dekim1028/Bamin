import React,{useState} from 'react';
import BaminRecommendListItem from './BaminRecommendListItem';

import cn from 'classnames';
import '../../../Style/css/BaminMain/BaminRecommend/BaminRecommendList.scss';

import food_1 from '../../../Style/image/recommend/food_1.jpeg';
import food_2 from '../../../Style/image/recommend/food_2.jpeg';
import food_3 from '../../../Style/image/recommend/food_3.jpeg';
import food_4 from '../../../Style/image/recommend/food_4.jpeg';
import food_5 from '../../../Style/image/recommend/food_5.jpeg';
import food_6 from '../../../Style/image/recommend/food_6.jpeg';
import food_7 from '../../../Style/image/recommend/food_7.jpeg';
import food_8 from '../../../Style/image/recommend/food_8.jpeg';

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
        {
            id:5,
            code:"Carbohydrate",
            image:food_5,
            name:"육쌈냉면 이수 총신대점",
            time:"20~30분",
            menu:"한식, 물냉면+숯불고기(1인 70g), 비냉+숯불고기(1인 70g)",
            fastDelivery:false
        },
        {
            id:6,
            code:"Carbohydrate",
            image:food_6,
            name:"미스사이공 낙성대점",
            time:"19~29분",
            menu:"아시안, 얼큰(짬뽕) 쌀국수, 소고기 쌀국수",
            fastDelivery:false
        },
        {
            id:7,
            code:"Carbohydrate",
            image:food_7,
            name:"밀겨울",
            time:"22~32분",
            menu:"한식, 칼칼 칼국수, 사골 칼국수",
            fastDelivery:false
        },
        {
            id:8,
            code:"Carbohydrate",
            image:food_8,
            name:"북촌손만두 서울대입구역점",
            time:"21~31분",
            menu:"한식, 북촌피냉면, 북촌칼국수",
            fastDelivery:true
        },
    ]);
    return (
        <div className="BaminRecommendList">
            {children}
            <div className={cn("BaminRecommendList_sub",recommendListInfo.displayType)}>
                {
                    items.filter(val=>val.code===recommendListInfo.code).map(item=>(
                        <BaminRecommendListItem item={item} displayType={recommendListInfo.displayType} key={`${item.code}_${item.id}`}>
                            <img src={item.image} alt=""/>
                        </BaminRecommendListItem>
                    ))
                }
                {
                    recommendListInfo.displayType==='recommend_flex'?
                    <div className="plusBtn_flex">
                        <AiFillPlayCircle/>
                        <div>더보기</div>
                    </div>
                    :
                    <div className="plusBtn_block">더보기</div>
                }
            </div>
        </div>
    );
};

export default BaminRecommendList;