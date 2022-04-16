import MainLayout from "../../components/Layouts/mainLayout";
import Poll from "../../components/Poll";
import {BoxWrapper} from "../../components/Layouts/style";

const HomeScreen = () => {
    return (
        <MainLayout>
            <BoxWrapper>
                <Poll />
            </BoxWrapper>
        </MainLayout>
    );
};

export default HomeScreen;
