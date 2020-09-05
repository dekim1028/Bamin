import React from 'react';
import BaminTop from './BaminTop';
import BaminContent from './BaminContent';
import BaminNotice2 from './BaminContents/BaminNotice2';
import BaminBrand from './BaminBrand/BaminBrand';
import BaminRecommend from './BaminRecommend/BaminRecommend';

import '../../Style/css/BaminMain/BaminMainTemplate.scss';
import BaminFooter from './BaminFooter';

const BaminMainTemplate = () => {
    return (
        <div className="BaminMainTemplate">
            <BaminTop/>
            <BaminContent/>
            <BaminBrand/>
            <BaminNotice2/>
            <BaminRecommend/>
            <BaminFooter/>
        </div>
    );
};

export default BaminMainTemplate;