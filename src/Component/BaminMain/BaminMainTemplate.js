import React from 'react';
import BaminTop from './BaminTop';
import BaminContent from './BaminContent';
import '../../Style/css/BaminMain/BaminMainTemplate.scss';

const BaminMainTemplate = () => {
    return (
        <div className="BaminMainTemplate">
            <BaminTop/>
            <BaminContent/>
        </div>
    );
};

export default BaminMainTemplate;