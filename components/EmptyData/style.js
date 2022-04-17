import styled from "styled-components";

import EmptyDataImage from "../../assets/svg/empty-data.svg";

export const Wrapper = styled.div`
	display: grid;
	place-items: center;
	position: relative;
`;

export const EmptyIcon = styled(EmptyDataImage)`
	filter: grayscale(1);
	object-fit: contain;
	opacity: 0.2;
	width: 100%;
	z-index: 1;
`;

export const EmptyText = styled.h2`
	color: ${({ theme }) => theme.colors.tertiary2};
	font-size: 26px;
	left: 50%;
	line-height: 1.2;
	position: absolute;
	text-align: center;
	top: 50%;
	transform: translate(-50%, -50%);
	z-index: 5;
`;
