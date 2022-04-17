import styled, { css } from "styled-components";

export const Wrapper = styled.div`
	background-color: rgba(0, 0, 0, 0.3);
	display: grid;
	height: 100vh;
	left: 0;
	place-items: center;
	position: fixed;
	top: 0;
	width: 100vw;
	z-index: 99;
`;

export const DialogWrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
	border: 1px solid rgba(228, 228, 228, 0.6);
	border-radius: 4px;
	box-shadow: 0 6px 12px rgba(50, 50, 71, 0.07);
	display: flex;
	flex-direction: column;
	margin: 15px;
	max-width: 400px;
	overflow: hidden;
	width: calc(100% - 30px);
`;

export const CloseDialogButton = styled.button`
	margin: 10px 10px 0 auto;
	width: 20px;
`;

export const DialogBody = styled.div`
	font-size: 18px;
	line-height: 1.4;
	padding: 16px 20px;
	text-align: center;
`;

export const SelectedItem = styled.div`
	display: block;
	font-size: 22px;
	font-weight: bold;
	margin-top: 4px;
	text-align: center;
`;

export const DialogFooter = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 10px 20px;
`;

export const Button = styled.button`
	align-items: center;
	background-color: ${({ theme }) => theme.colors.success};
	border-radius: 4px;
	color: ${({ theme }) => theme.colors.white};
	display: inline-flex;
	flex: 1;
	font-size: 18px;
	height: 32px;
	justify-content: center;
	&:not(:first-child) {
		margin-left: 10px;
	}

	${({ variant }) =>
		variant === "danger" &&
		css`
			background-color: ${({ theme }) => theme.colors.danger};
		`}
`;
