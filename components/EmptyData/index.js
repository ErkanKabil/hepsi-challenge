import React from 'react';
import {EmptyIcon, EmptyText, Wrapper,} from "./style";

const EmptyData = () => {
    return (
        <Wrapper>
            <EmptyIcon />
            <EmptyText>EMPTY DATA</EmptyText>
        </Wrapper>
    );
};

export default EmptyData;
