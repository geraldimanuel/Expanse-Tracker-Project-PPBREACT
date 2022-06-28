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
} from "@chakra-ui/react";

import { FiCalendar } from "react-icons/fi";

export default function Content() {
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
					Monic
				</Flex>
			</Heading>
			<Text color="gray" fontSize="sm">
				My Balance
			</Text>
			<Text fontSize="2xl" fontWeight="bold">
				Rp.1,500,000
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
