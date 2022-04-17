import { useEffect } from "react";
import PropTypes from "prop-types";
import { ToastMessage, Wrapper } from "./style";

const Toast = ({ message, handleDismiss, dismissTime }) => {
	useEffect(() => {
		setTimeout(() => {
			handleDismiss();
		}, dismissTime);
	}, [message]);

	return (
		<Wrapper>
			<ToastMessage>{message}</ToastMessage>
		</Wrapper>
	);
};

Toast.propTypes = {
	message: PropTypes.string.isRequired,
	handleDismiss: PropTypes.func,
	dismissTime: PropTypes.number,
};

Toast.defaultProps = {
	handleDismiss: null,
	dismissTime: 3000,
};

export default Toast;
