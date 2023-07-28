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
	Icon,
} from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { FiCalendar, FiCreditCard } from "react-icons/fi";

export default function Content() {
	const { saldo } = useContext(UserContext);
	const { data } = useContext(UserContext);

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
					Gerald Imanuel
				</Flex>
			</Heading>
			<Text color="gray" fontSize="sm">
				My Balance
			</Text>
			<Text fontSize="2xl" fontWeight="bold">
				Rp{saldo}
			</Text>
			<Flex justifyContent="space-between" mt={5}>
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
								<Th>Name of transaction</Th>
								<Th>Category</Th>
								<Th isNumeric>Amount</Th>
							</Tr>
						</Thead>
						<Tbody>
							{data.Income.map((history) => (
								<Tr>
									<Td>
										<Flex align="center">
											<Text>Debit</Text>
											<Icon ml={2} as={FiCreditCard} alignItems="center" />
										</Flex>
									</Td>
									<Td>
										<Flex align="center">
											<Text color="#519D6B" fontWeight="bold">
												In
											</Text>
										</Flex>
									</Td>
									<Td>
										<Flex align="center">
											<Text fontWeight="bold">Rp{history}</Text>
										</Flex>
									</Td>
								</Tr>
							))}
							{data.Expanse.map((history) => (
								<Tr>
									<Td>
										<Flex align="center">
											<Text>Debit</Text>
											<Icon ml={2} as={FiCreditCard} alignItems="center" />
										</Flex>
									</Td>
									<Td>
										<Flex align="center">
											<Text color="#C25050" fontWeight="bold">
												Out
											</Text>
										</Flex>
									</Td>
									<Td>
										<Flex align="center">
											<Text fontWeight="bold">Rp{history}</Text>
										</Flex>
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</Flex>
			</Flex>
		</Flex>
	);
}
