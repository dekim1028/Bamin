import React from 'react';

import cn from 'classnames';
import '../../../Style/css/BaminMain/BaminBrand/BaminBrandItem.scss';

import coupon_icon from '../../../Style/image/brand/coupon_icon.png';
import new_icon from '../../../Style/image/brand/new_icon.png';
import {GiPresent} from 'react-icons/gi';

const BaminBrandItem = ({logo,content}) => {
    return (
        <div>
            <div className="brand_logo">
                <img src={logo} alt="content.title"/>
            </div>
            <div className={cn("BaminBrandItem",content.type)}>
                <div className="brand_content">
                    <div className="brand_title">{content.title}</div>
                    <div className="brand_explain">{content.explain}</div>
                    <div className="btn_box">
                        <div className="button">
                            <img src={coupon_icon} alt="쿠폰"/>
                            쿠폰
                        </div>
                        <div className="button">
                            <img src={new_icon} alt="신메뉴"/>
                            신메뉴
                        </div>
                    </div>
                </div>
                <div className="brand_footer">
                    <div className="present"><GiPresent/></div>
                    <div className="comment">{content.comment}</div>
                </div>
            </div>
        </div>
        
    );
};

export default BaminBrandItem;