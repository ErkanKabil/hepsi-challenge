import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
	ListItem,
	Point,
	PointsWrapper,
	PollInfos,
	PollLink,
	PollName,
	PollVoteWrapper,
	RemoveButton,
	VoteItem,
	Wrapper,
	SortDropdownWrapper,
} from "./style";
import UpIcon from "../../../assets/svg/up-arrow.svg";
import DownIcon from "../../../assets/svg/down-arrow.svg";
import Dialog from "../../Dialog";
import { decreasePoint, increasePoint, removePoll } from "../../../core/redux/actions/pollActions";
import Dropdown from "../../Dropdown";
import sortDropdownData from "../../../core/constants";
import Toast from "../../Toast";
import Pagination from "../../Pagination";

const PollList = ({ polls }) => {
	const dispatch = useDispatch();
	const [data, setData] = useState(polls);
	const [sortedData, setSortedData] = useState(polls);
	const [sortType, setSortType] = useState(null);
	const [itemPerPage] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedItem, setSelectedItem] = useState();
	const [toastMessage, setToastMessage] = useState("");

	const paginate = (number, index = 0) => {
		setCurrentPage(number + index);
	};

	const handleSortData = (item) => {
		setSortType(item);
		const temp = data?.sort((a, b) => {
			if (item?.value === 0) {
				return b?.point - a?.point || b?.lastUpdate - a?.lastUpdate;
			}
			if (item?.value === 1) {
				return a?.point - b?.point;
			}
			return b?.createdDate - a?.createdDate;
		});
		setSortedData([...temp]);
	};

	const removeItem = () => {
		dispatch(removePoll(selectedItem?.id));
		setToastMessage(`${selectedItem?.name} removed`);
		setSelectedItem(null);

		// eslint-disable-next-line no-use-before-define
		if (currentData.length <= 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handleUpVote = (id) => {
		dispatch(increasePoint(id));
	};

	const handleDownVote = (id) => {
		dispatch(decreasePoint(id));
	};

	useEffect(() => {
		setData(polls);
	}, [polls]);

	useEffect(() => {
		handleSortData(sortType);
	}, [data]);

	const indexOfLastItem = currentPage * itemPerPage;
	const indexOfFirstItem = indexOfLastItem - itemPerPage;

	const currentData = sortedData?.slice(indexOfFirstItem, indexOfLastItem);

	return (
		<>
			<Wrapper>
				<SortDropdownWrapper>
					<Dropdown
						onChange={(item) => handleSortData(item)}
						dropdownData={sortDropdownData}
						placeHolder="Order by"
					/>
				</SortDropdownWrapper>
				{currentData?.map((item) => (
					<ListItem key={item?.id}>
						<RemoveButton onClick={() => setSelectedItem(item)} />
						<PointsWrapper>
							<Point>{item?.point}</Point> POINTS
						</PointsWrapper>
						<PollInfos>
							<PollName>{item?.name}</PollName>
							<PollLink href="https://www.reddit.com/" target="_blank">
								({item?.link})
							</PollLink>
							<PollVoteWrapper>
								<VoteItem onClick={() => handleUpVote(item?.id)}>
									<UpIcon /> Up Vote
								</VoteItem>
								<VoteItem onClick={() => handleDownVote(item?.id)}>
									<DownIcon /> Down Vote
								</VoteItem>
							</PollVoteWrapper>
						</PollInfos>
					</ListItem>
				))}
			</Wrapper>
			<Pagination paginate={paginate} itemPerPage={5} totalItems={data?.length} currentPage={currentPage} />
			{selectedItem && (
				<Dialog
					selectedItem={selectedItem?.name}
					handleCancel={() => setSelectedItem(null)}
					handleConfirm={() => removeItem()}
				/>
			)}
			{toastMessage && <Toast message={toastMessage} handleDismiss={() => setToastMessage("")} />}
		</>
	);
};

PollList.propTypes = {
	polls: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PollList;
