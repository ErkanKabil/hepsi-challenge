import { useRef, useState } from "react";
import PropTypes from "prop-types";
import {
	DropdownArrowIcon,
	DropdownContent,
	DropdownItem,
	DropdownWrapper,
	SelectedDropdown,
	SelectedDropdownWrapper,
} from "./style";
import useOnClickOutside from "../../core/hooks/useOnClickOutside";

const Dropdown = ({
	dropdownData, placeHolder, onChange, ...props
}) => {
	const [selectedItem, setSelectedItem] = useState({ label: placeHolder });

	const [isActive, setIsActive] = useState(false);

	const dropdownContainerRef = useRef(null);

	const showDropdownHandler = () => {
		setIsActive(!isActive);
	};

	const clickOutsideHandler = () => setIsActive(false);

	useOnClickOutside(dropdownContainerRef, clickOutsideHandler);

	const handleSelectDropdownItem = (item) => {
		setSelectedItem(item);
		onChange(item);
		setIsActive(false);
	};

	const { value, label } = selectedItem;

	return (
		<DropdownWrapper ref={dropdownContainerRef} {...props}>
			<SelectedDropdownWrapper onClick={showDropdownHandler}>
				<SelectedDropdown>{label}</SelectedDropdown>
				<DropdownArrowIcon isactive={isActive.toString()} />{" "}
				{/* .toString kullanma sebebim; isActive şeklinde isimlendirince console hatası veriyordu. Bu şekilde değiştirmem gerektiğini söylüyordu */}
			</SelectedDropdownWrapper>
			{isActive && (
				<DropdownContent>
					{dropdownData?.map((item) => (
						<DropdownItem
							key={item?.value}
							value={item?.value}
							onClick={() => handleSelectDropdownItem(item)}
							isSelected={value === item?.value}
						>
							{item?.label}
						</DropdownItem>
					))}
				</DropdownContent>
			)}
		</DropdownWrapper>
	);
};

Dropdown.propTypes = {
	onChange: PropTypes.func.isRequired,
	dropdownData: PropTypes.oneOfType([PropTypes.array, PropTypes.shape({})]).isRequired,
	placeHolder: PropTypes.string,
};

Dropdown.defaultProps = {
	placeHolder: "Make a Choice",
};

export default Dropdown;
