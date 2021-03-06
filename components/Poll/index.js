import { useSelector } from "react-redux";
import { PollBody, PollHeader, Wrapper } from "./style";
import AddPollButton from "./AddPollButton";
import PollList from "./PollList";
import EmptyData from "../EmptyData";

const Poll = () => {
	const { polls } = useSelector((state) => state?.polls);

	return (
		<Wrapper>
			<PollHeader>
				<AddPollButton />
			</PollHeader>
			<PollBody>{polls?.length > 0 ? <PollList polls={polls} /> : <EmptyData />}</PollBody>
		</Wrapper>
	);
};

export default Poll;
