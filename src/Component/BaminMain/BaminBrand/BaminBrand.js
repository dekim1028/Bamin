import React,{useState} from 'react';
import BaminBrandItem from './BaminBrandItem';

import logo1 from '../../../Style/image/brand/brand_logo1.jpeg';
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
            explain:"배달 4천원 할인 [9/1~13_13일간]",
            comment:"던킨도 이제 배달로!",
            type:"bbq"
        },
        {
            title:"BHC",
            explain:"배달 4천원 할인 [9/1~13_13일간]",
            comment:"던킨도 이제 배달로!",
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
                <BaminBrandItem logo={logo1} content={brandItem[0]}/>
               
            </div>
        </div>
    );
};

export default BaminBrand;