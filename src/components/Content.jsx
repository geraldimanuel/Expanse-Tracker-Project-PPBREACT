import {
	Flex,
	Heading,
	Text,
	IconButton,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
} from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import { FiCalendar } from "react-icons/fi";

export default function Content() {
	const { saldo } = useContext(UserContext);
	const { history } = useContext(UserContext);
	const addHistory = useContext(UserContext);

	return (
		<Flex
			w={["100%", "100%", "60%", "60%", "55%"]}
			p="3%"
			flexDir="column"
			overflow="auto"
			minH="100vh"
		>
			<Heading fontWeight="normal" mb={4} letterSpacing="tight">
				Welcome back,{" "}
				<Flex fontWeight="bold" display="inline-flex">
					Kesya Febriana
				</Flex>
			</Heading>
			<Text color="gray" fontSize="sm">
				My Balance
			</Text>
			<Text fontSize="2xl" fontWeight="bold">
				Rp{saldo}
			</Text>
			<Flex justifyContent="space-between" mt={8}>
				<Flex align="flex-end">
					<Heading as="h2" size="lg" letterSpacing="tight">
						Transactions
					</Heading>
					<Text fontSize="small" color="gray" ml={4}>
						June 2022
					</Text>
				</Flex>
				<IconButton icon={<FiCalendar />} />
			</Flex>
			<Flex flexDir="column">
				<Flex overflow="auto">
					<Table variant="unstyled" mt={4}>
						<Thead>
							<Tr color="gray">
								<Th>Category</Th>
								<Th isNumeric>Amount</Th>
							</Tr>
						</Thead>
						<Tbody></Tbody>
					</Table>
				</Flex>
			</Flex>
		</Flex>
	);
}
