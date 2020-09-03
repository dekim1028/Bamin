import React from 'react';
import BaminTop from './BaminTop';
import BaminContent from './BaminContent';
import BaminNotice2 from './BaminContents/BaminNotice2';
import '../../Style/css/BaminMain/BaminMainTemplate.scss';
import BaminBrand from './BaminBrand/BaminBrand';

const BaminMainTemplate = () => {
    return (
        <div className="BaminMainTemplate">
            <BaminTop/>
            <BaminContent/>
            <BaminBrand/>
            <BaminNotice2/>
        </div>
    );
};

export default BaminMainTemplate;