import React from 'react';
import styled from "styled-components";

export default function BaminNoticeItem2({ img }) {
    return (
        <IMG src={img} />
    );
  }

const IMG = styled.img`
    min-width: 100%;
    height: 100px;
`;