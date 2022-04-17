import styled from "styled-components";

export const Wrapper = styled.div`
	align-items: center;
	background-color: ${({ theme }) => theme.colors.success};
	border-radius: 10px;
	display: flex;
	justify-content: center;
	left: 50%;
	max-width: 400px;
	padding: 15px;
	position: absolute;
	top: 5%;
	transform: translateX(-50%);
	width: 100%;
`;

export const ToastMessage = styled.p`
	color: ${({ theme }) => theme.colors.white};
	font-size: clamp(20px, 2.5vw, 26px);
`;
