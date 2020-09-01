import React from 'react';
import styled from "styled-components";

import '../../../Style/css/BaminMain/BaminContent/BaminCategoryItem.scss';

export default function BaminCategoryItem({img, categoruName}) {
    return (
        <div className="BaminCategoryItem">
            <IMG src={img} alt={`${categoruName}_이미지`}/>
            <div className="category_name">{categoruName}</div>
        </div>
    );
};

const IMG = styled.img`
    width: 50px;
    height: 50px;
`;