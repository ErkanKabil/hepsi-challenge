import Head from "next/head";
import AddLinkScreen from "../../screens/AddLink";

const AddLink = () => (
	<>
		<Head>
			<title>Add New Link - Hepsiburada</title>
			<meta name="description" content="Add New Link - Hepsiburada" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<AddLinkScreen />
	</>
);

export default AddLink;
