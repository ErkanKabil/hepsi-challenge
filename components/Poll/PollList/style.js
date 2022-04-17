import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px 0;
`;

export const SortDropdownWrapper = styled.div`
	margin-bottom: 10px;
	max-width: 225px;
`;

export const RemoveButton = styled.button`
	background-color: ${({ theme }) => theme.colors.secondary};
	border-radius: 50%;
	height: 20px;
	opacity: 0;
	pointer-events: none;
	position: absolute;
	right: -10px;
	top: -10px;
	transition: opacity 0.1s ease-in-out;
	width: 20px;
	&:after {
		background-color: ${({ theme }) => theme.colors.white};
		content: "";
		height: 2px;
		left: 50%;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		width: calc(100% - 4px);
	}
`;

export const ListItem = styled.div`
	border-radius: 4px;
	display: flex;
	padding: 10px;
	position: relative;
	transition: background-color 0.1s ease-in-out;

	&:not(:first-child) {
		margin-top: 30px;
	}

	&:hover {
		background-color: ${({ theme }) => theme.colors.tertiary};

		${RemoveButton} {
			opacity: 1;
			pointer-events: all;
		}
	}
`;

export const PointsWrapper = styled.div`
	align-items: center;
	background-color: ${({ theme }) => theme.colors.tertiary4};
	border: 1px solid ${({ theme }) => theme.colors.tertiary2};
	border-radius: 4px;
	display: flex;
	flex: 0 0 82px;
	flex-direction: column;
	font-size: 14px;
	height: 82px;
	justify-content: center;
	width: 82px;
`;
export const Point = styled.span`
	font-size: clamp(20px, 3vw, 26px);
	font-weight: bold;
`;
export const PollInfos = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	padding-left: 15px;
`;
export const PollName = styled.p`
	font-size: 18px;
	font-weight: bold;
	word-break: break-word;
`;
export const PollLink = styled.a`
	font-size: 14px;
	font-weight: 100;
	width: fit-content;
	word-break: break-word;
	&:hover {
		text-decoration: underline;
	}
`;
export const PollVoteWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: auto;
`;
export const VoteItem = styled.div`
	align-items: center;
	color: ${({ theme }) => theme.colors.tertiary4};
	cursor: pointer;
	display: flex;
	font-size: 14px;
	width: fit-content;
	svg {
		fill: ${({ theme }) => theme.colors.tertiary4};
		height: auto;
		margin-right: 5px;
		width: 20px;
	}
`;
