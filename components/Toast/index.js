import React, {useEffect} from 'react';
import {ToastMessage, Wrapper} from "./style";
import PropTypes from "prop-types";

const Toast = ({message, handleDismiss, dismissTime}) => {
    useEffect(() => {
        setTimeout(() => {
            handleDismiss()
        }, dismissTime)
    }, [message])

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
