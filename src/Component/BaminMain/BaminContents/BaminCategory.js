import React from 'react';
import BaminCategoryItem from './BaminCategoryItem';
import category1 from '../../../Style/image/category/category1.png';
import category2 from '../../../Style/image/category/category2.png'; 
import category3 from '../../../Style/image/category/category3.png'; 
import category4 from '../../../Style/image/category/category4.png';
import category5 from '../../../Style/image/category/category5.png'; 
import category6 from '../../../Style/image/category/category6.png'; 
import category7 from '../../../Style/image/category/category7.png'; 
import category8 from '../../../Style/image/category/category8.png'; 
import category9 from '../../../Style/image/category/category9.png'; 
import category10 from '../../../Style/image/category/category10.png'; 
import category11 from '../../../Style/image/category/category11.png'; 
import category12 from '../../../Style/image/category/category12.png'; 
import category13 from '../../../Style/image/category/category13.png'; 
import category14 from '../../../Style/image/category/category14.png'; 
import category15 from '../../../Style/image/category/category15.png'; 
import category16 from '../../../Style/image/category/category16.png';
import category17 from '../../../Style/image/category/category17.png'; 
import category18 from '../../../Style/image/category/category18.png';
import category19 from '../../../Style/image/category/category19.png';
import category20 from '../../../Style/image/category/category20.png';

import '../../../Style/css/BaminMain/BaminContent/BaminCategory.scss';

const BaminCategory = () => {
    return (
        <div className="BaminCategory">
            <BaminCategoryItem img={category1} categoruName='B마트'/>
            <BaminCategoryItem img={category2} categoruName='번쩍배달'/>
            <BaminCategoryItem img={category3} categoruName='배민라이더스'/>
            <BaminCategoryItem img={category4} categoruName='포장주문'/>
            <BaminCategoryItem img={category5} categoruName='1인분'/>
            <BaminCategoryItem img={category6} categoruName='한식'/>
            <BaminCategoryItem img={category7} categoruName='분식'/>
            <BaminCategoryItem img={category8} categoruName='카페 ﹒ 디저트'/>
            <BaminCategoryItem img={category9} categoruName='돈까스 ﹒ 회 ﹒ 일식'/>
            <BaminCategoryItem img={category10} categoruName='치킨'/>
            <BaminCategoryItem img={category11} categoruName='피자'/>
            <BaminCategoryItem img={category12} categoruName='아시안 ﹒ 양식'/>
            <BaminCategoryItem img={category13} categoruName='중국집'/>
            <BaminCategoryItem img={category14} categoruName='족발 ﹒ 보쌈'/>
            <BaminCategoryItem img={category15} categoruName='야식'/>
            <BaminCategoryItem img={category16} categoruName='찜 ﹒ 탕'/>
            <BaminCategoryItem img={category17} categoruName='도시락'/>
            <BaminCategoryItem img={category18} categoruName='패스트푸드'/>
            <BaminCategoryItem img={category19} categoruName='프랜차이즈'/>
            <BaminCategoryItem img={category20} categoruName='맛집랭킹'/>
        </div>
    );
};

export default BaminCategory;