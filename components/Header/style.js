import styled from "styled-components";

export const Wrapper = styled.div`
	align-items: center;
	border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary3};
	display: flex;
	gap: 10px;
	justify-content: space-between;
	padding: 24px 0 12px;
`;

export const LogoWrapper = styled.div`
	max-width: 50%;

	svg {
		width: 100%;
	}
`;

export const Title = styled.h1`
	font-size: clamp(20px, 3vw, 32px);
	font-weight: 100;
	text-align: right;
`;

export const Strong = styled.strong``;
