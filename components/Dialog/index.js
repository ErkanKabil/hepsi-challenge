import { useRef } from "react";
import PropTypes from "prop-types";
import {
	Button, CloseDialogButton, DialogBody, DialogFooter, DialogWrapper, SelectedItem, Wrapper,
} from "./style";
import CloseIcon from "../../assets/svg/close.svg";
import useOnClickOutside from "../../core/hooks/useOnClickOutside";

const Dialog = ({ selectedItem, handleConfirm, handleCancel }) => {
	const dialogWrapperRef = useRef();
	useOnClickOutside(dialogWrapperRef, handleCancel);

	return (
		<Wrapper>
			<DialogWrapper ref={dialogWrapperRef}>
				<CloseDialogButton onClick={handleCancel}>
					<CloseIcon />
				</CloseDialogButton>
				<DialogBody>
					Do you want to remove:
					<SelectedItem>{selectedItem}</SelectedItem>
				</DialogBody>
				<DialogFooter>
					<Button type="button" variant="success" onClick={handleConfirm}>
						OK
					</Button>
					<Button type="button" variant="danger" onClick={handleCancel}>
						CANCEL
					</Button>
				</DialogFooter>
			</DialogWrapper>
		</Wrapper>
	);
};

Dialog.propTypes = {
	selectedItem: PropTypes.string.isRequired,
	handleConfirm: PropTypes.func.isRequired,
	handleCancel: PropTypes.number.isRequired,
};

export default Dialog;
