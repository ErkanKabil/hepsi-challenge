import styled, { css } from "styled-components";
import ArrowIconSvg from "../../assets/svg/solid-chevron-down.svg";

export const DropdownWrapper = styled.div`
	border-radius: 4px;
	height: 32px;
	position: relative;
	width: 100%
`;

export const DropdownItem = styled.div`
	cursor: pointer;
	font-size: 14px;
	font-weight: 600;
	line-height: normal;
	width: 100%;
	padding: 10px 13px;

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
	color: ${({ theme }) => theme.colors.primary};
	flex: 1;
	font-size: 14px;
	font-weight: 600;
	padding: 0 14px;
	height: 100%;
	display: flex;
	align-items: center;
	border-right: 1px solid ${({ theme }) => theme.colors.tertiary3};
`;

export const DropdownArrowIcon = styled(ArrowIconSvg)`
	height: 20px;
	transition: transform .1s ease-in-out;
	width: 20px;
	margin: 0 5px;
	${({ isActive }) =>
		isActive &&
		css`
			transform: rotate(180deg);
		`};
`;

