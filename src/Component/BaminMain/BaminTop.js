import React from 'react';
import {MdNotificationsNone} from 'react-icons/md';
import {AiOutlineQrcode, AiFillDownCircle} from 'react-icons/ai';
import '../../Style/css/BaminMain/BaminTop.scss';

const BaminTop = () => {
    return (
        <div className="BaminTop">
            <MdNotificationsNone/>
            <span className="addressText">서울 동작구 사당로 16다길 101 <AiFillDownCircle/></span>
            <AiOutlineQrcode/>
        </div>
    );
};

export default BaminTop;