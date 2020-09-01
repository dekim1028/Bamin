import React from 'react';

import {BiSearch} from 'react-icons/bi';

import '../../../Style/css/BaminMain/BaminContent/BaminSearchInput.scss';

const BaminSearchInput = () => {
    return (
        <div className="BaminSearchInput">
            <BiSearch/>
            <input type="text" placeholder="먹고 싶은 메뉴, 가게 검색" className="search_input"/>
        </div>
    );
};

export default BaminSearchInput;