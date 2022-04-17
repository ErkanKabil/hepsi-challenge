import styled from "styled-components";

export const Wrapper = styled.div`
	align-items: center;
	background-color: ${({ theme }) => theme.colors.tertiary};
	border: 1px solid ${({ theme }) => theme.colors.tertiary2};
	border-radius: 4px;
	cursor: pointer;
	display: flex;
	padding: 10px;
`;

export const IconWrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.tertiary4};
	border: 1px solid ${({ theme }) => theme.colors.tertiary2};
	border-radius: 4px;
	flex: 0 0 62px;
	height: 62px;
	width: 62px;
`;

export const Text = styled.p`
	flex: 1;
	font-size: clamp(22px, 3vw, 32px);
	letter-spacing: 2px;
	padding: 0 20px;
	text-align: center;
`;
