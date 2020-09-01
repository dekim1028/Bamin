import React from 'react';
import styled from "styled-components";

export default function BaminNoticeItem({ img }) {
    return (
        <IMG src={img} />
    );
  }

const IMG = styled.img`
    min-width: 100%;
    height: auto;
    max-height: 180px;
`;