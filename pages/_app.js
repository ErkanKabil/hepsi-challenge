import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { Provider, useStore } from "react-redux";
import PropTypes from "prop-types";
import GlobalStyles from "../core/styles";
import theme from "../core/styles/theme";
import wrapper from "../core/redux/store";

const WrappedApp = ({ Component, pageProps }) => {
	const store = useStore();

	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
					rel="stylesheet"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="theme-color" content="#1C75BC" />
				<title>Hepsiburada</title>
			</Head>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<Component {...pageProps} />
				</ThemeProvider>
			</Provider>
		</>
	);
};

WrappedApp.propTypes = {
	Component: PropTypes.func.isRequired,
	pageProps: PropTypes.shape({}).isRequired,
};

export default wrapper.withRedux(WrappedApp);
