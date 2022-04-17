import styled, { css } from "styled-components";

export const Wrapper = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	margin: 30px 0;
`;

export const PageButton = styled.button`
	width: 20px;

	svg {
		height: auto;
		width: 100%;
	}
`;
export const Pages = styled.div`
	align-items: center;
	display: flex;
`;
export const PageNumber = styled.button`
	align-items: center;
	display: flex;
	font-size: 18px;
	font-weight: bold;
	justify-content: center;
	margin: 0 5px;
	padding: 2px 5px;

	&:hover {
		outline: 1px solid ${({ theme }) => theme.colors.primary};
	}

	${({ isActive }) =>
		isActive &&
		css`
			outline: 1px solid ${({ theme }) => theme.colors.primary};
		`};
`;
