import MainLayout from "../../components/Layouts/mainLayout";
import Poll from "../../components/Poll";
import { BoxWrapper } from "../../components/Layouts/style";

const HomeScreen = () => (
	<MainLayout>
		<BoxWrapper>
			<Poll />
		</BoxWrapper>
	</MainLayout>
);

export default HomeScreen;
