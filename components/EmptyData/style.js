import styled, { css } from "styled-components";

import EmptyDataImage from "../../assets/svg/empty-data.svg"

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  position: relative;
`;

export const EmptyIcon = styled(EmptyDataImage)`
    opacity: .2;
    filter: grayscale(1);
    z-index: 1;
    width: 100%;
    object-fit: contain;
`;

export const EmptyText = styled.h2`
  font-size: 26px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.tertiary2};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 5;
  text-align: center;
`;
