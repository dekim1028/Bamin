import React, { useState } from 'react';

import '../../Style/css/BaminMain/BaminTabBar.scss';
import {RiHome4Line, RiPlayCircleLine, RiHeart2Line} from 'react-icons/ri';
import {CgFileDocument, CgSmile} from 'react-icons/cg';
import { GiTurret } from 'react-icons/gi';

const BaminTabBar = () => {
    return (
        <div className="BaminTabBar">
            <div className="tab click"><RiHome4Line/><div>홈</div></div>
            <div className="tab"><RiPlayCircleLine/><div>뭐먹지</div></div>
            <div className="tab"><RiHeart2Line/><div>찜한가계</div></div>
            <div className="tab"><CgFileDocument/><div>주문내역</div></div>
            <div className="tab"><CgSmile/><div>My배민</div></div>
        </div>
    );
};

export default BaminTabBar;