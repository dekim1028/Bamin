import React,{useState} from 'react';
import BaminBrandItem from './BaminBrandItem';

import logo1 from '../../../Style/image/brand/brand_logo1.jpg';
import logo2 from '../../../Style/image/brand/brand_logo2.jpg';
import logo3 from '../../../Style/image/brand/brand_logo3.jpg';
import '../../../Style/css/BaminMain/BaminBrand/BaminBrand.scss';

const BaminBrand = () => {
    const [brandItem,setBrandItem] = useState([
        {
            title:"던킨",
            explain:"배달 4천원 할인 [9/1~13_13일간]",
            comment:"던킨도 이제 배달로!",
            type:"dunkin"
        },
        {
            title:"BBQ",
            explain:"엑스트라버진 올리브오일을 사용한 치킨",
            comment:"BBQ치킨 모둠볼 패키지 출시!",
            type:"bbq"
        },
        {
            title:"BHC",
            explain:"맴부심있는 얼리어닭터를 위한 신메뉴 맵소킹!",
            comment:"화끈한 맵소킹시리즈 2천원 할인",
            type:"bhc"
        },
    ]);

    return (
        <div className="BaminBrand">
            <div className="title">
                <div className="lbl_name">브랜드관</div>
                <div className="lbl_full">전체보기</div>
            </div>
            <div className="brandlist">
                <div className="brandlist_items">
                    <BaminBrandItem logo={logo1} content={brandItem[0]}/>
                    <BaminBrandItem logo={logo2} content={brandItem[1]}/>
                    <BaminBrandItem logo={logo3} content={brandItem[2]}/>
                </div>
            </div>
        </div>
    );
};

export default BaminBrand;