import React from 'react';
import BaminNotice from './BaminContents/BaminNotice';
import BaminCategory from './BaminContents/BaminCategory';
import BaminSearchInput from './BaminContents/BaminSearchInput';

import '../../Style/css/BaminMain/BaminContent.scss';

const BaminContent = () => {
    return (
        <div className="BaminContent">
            <BaminNotice/>
            <BaminCategory/>
            <BaminSearchInput/>
        </div>
    );
};

export default BaminContent;