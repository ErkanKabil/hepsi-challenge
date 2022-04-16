import React from 'react';
import LeftIcon from "../../assets/svg/left-arrow.svg";
import RightIcon from "../../assets/svg/right-arrow.svg";
import {Wrapper, PageButton, PageNumber, Pages, PaginationWrapper} from "./style";

const Pagination = ({currentPage, itemPerPage, totalItems, paginate}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <Wrapper>
            {currentPage !== pageNumbers[0] && <PageButton
                onClick={() => paginate(currentPage, -1)}
            >
                <LeftIcon/>
            </PageButton>}
                <Pages>
                    {
                        pageNumbers?.map(number => <PageNumber onClick={() => paginate(number)}>{number}</PageNumber>)
                    }
                </Pages>
            {currentPage !== pageNumbers[pageNumbers.length - 1] && <PageButton
                onClick={() => paginate(currentPage, 1)}
            >
                <RightIcon/>
            </PageButton>}
        </Wrapper>
    );
};

export default Pagination;
