import styled, { css } from "styled-components";
import ArrowIconSvg from "../../assets/svg/solid-chevron-down.svg";

export const DropdownWrapper = styled.div`
	border-radius: 4px;
	height: 32px;
	position: relative;
	width: 100%;
`;

export const DropdownItem = styled.div`
	cursor: pointer;
	font-size: 14px;
	font-weight: 600;
	line-height: normal;
	padding: 10px 13px;
	width: 100%;

	&:hover {
		background: ${({ theme }) => theme.colors.tertiary3};
	}

	${({ isSelected }) =>
		isSelected &&
		css`
			background: ${({ theme }) => theme.colors.tertiary};
		`};
`;

export const DropdownContent = styled.div`
	background: ${({ theme }) => theme.colors.white};
	border: 1px solid ${({ theme }) => theme.colors.tertiary3};
	border-radius: 4px;
	box-shadow: 2px 1px 6px rgba(0, 0, 0, 0.2);
	margin-top: 3px;
	position: absolute;
	width: 100%;
	z-index: 9999;
`;

export const SelectedDropdownWrapper = styled.div`
	align-items: center;
	border: 1px solid ${({ theme }) => theme.colors.tertiary3};
	border-radius: 4px;
	cursor: pointer;
	display: flex;
	height: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 100%;
`;

export const SelectedDropdown = styled.div`
	align-items: center;
	border-right: 1px solid ${({ theme }) => theme.colors.tertiary3};
	color: ${({ theme }) => theme.colors.primary};
	display: flex;
	flex: 1;
	font-size: 14px;
	font-weight: 600;
	height: 100%;
	padding: 0 14px;
`;

export const DropdownArrowIcon = styled(ArrowIconSvg)`
	height: 20px;
	margin: 0 5px;
	transition: transform 0.1s ease-in-out;
	width: 20px;
	${({ isactive }) =>
		isactive === "true" &&
		css`
			transform: rotate(180deg);
		`};
`;
