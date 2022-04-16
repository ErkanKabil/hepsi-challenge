import Logo from '../../assets/svg/logo.svg';
import {InsideWrapper, LogoWrapper, Strong, Title, Wrapper} from "./style"
const Header = () => {
    return (
        <Wrapper>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>
            <Title>
                <Strong>Link</Strong>VOTE Challenge
            </Title>
        </Wrapper>
    )
};

export default Header;
