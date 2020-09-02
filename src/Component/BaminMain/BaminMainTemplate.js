import React from 'react';
import BaminTop from './BaminTop';
import BaminContent from './BaminContent';
import '../../Style/css/BaminMain/BaminMainTemplate.scss';
import BaminBrand from './BaminBrand/BaminBrand';

const BaminMainTemplate = () => {
    return (
        <div className="BaminMainTemplate">
            <BaminTop/>
            <BaminContent/>
            <BaminBrand/>
        </div>
    );
};

export default BaminMainTemplate;