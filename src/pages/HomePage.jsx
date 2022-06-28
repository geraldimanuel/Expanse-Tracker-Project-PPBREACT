import React from "react";
import { Flex } from "@chakra-ui/react";

import NavBar from "../components/NavBar";
import Content from "../components/Content";
import Balance from "../components/Balance";

export default function HomePage() {
	return (
		<Flex
			h={[null, null, "100vh"]}
			maxW="2000px"
			flexDir={["column", "column", "row"]}
			overflow="hidden"
		>
			<NavBar />
			<Content />
			<Balance />
		</Flex>
	);
}
