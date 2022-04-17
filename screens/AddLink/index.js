import Link from "next/link";
import MainLayout from "../../components/Layouts/mainLayout";
import { GoBack, GoBackButton } from "./style";
import LeftIcon from "../../assets/svg/left-arrow.svg";
import { HOME } from "../../core/routes";
import { BoxWrapper } from "../../components/Layouts/style";
import AddNewLinkForm from "../../components/Forms/AddNewLinkForm";

const AddLinkScreen = () => (
	<MainLayout>
		<BoxWrapper>
			<Link href={HOME} passHref>
				<GoBackButton>
					<GoBack>
						<LeftIcon />
					</GoBack>{" "}
					Return to List
				</GoBackButton>
			</Link>
			<AddNewLinkForm />
		</BoxWrapper>
	</MainLayout>
);

export default AddLinkScreen;
