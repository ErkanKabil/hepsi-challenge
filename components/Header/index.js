import Logo from "../../assets/svg/logo.svg";
import {
	LogoWrapper, Strong, Title, Wrapper,
} from "./style";

const Header = () => (
	<Wrapper>
		<LogoWrapper>
			<Logo />
		</LogoWrapper>
		<Title>
			<Strong>Link</Strong>VOTE Challenge
		</Title>
	</Wrapper>
);

export default Header;
