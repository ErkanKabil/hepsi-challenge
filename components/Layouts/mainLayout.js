import PropTypes from "prop-types";
import Header from "../Header";
import {Container, Wrapper} from "./style"
const MainLayout = ({children}) => (
    <Wrapper>
        <Container>
            <Header />
            {children}
        </Container>
    </Wrapper>
);
MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default MainLayout;
