import { useContext } from "react";
import {
	Flex,
	Heading,
	Text,
	Icon,
	IconButton,
	Box,
	Button,
	Input,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react";
import { FiCreditCard, FiSearch, FiBell } from "react-icons/fi";
import { UserContext } from "../context/UserContext";

export default function Balance() {
	const { saldo, setSaldo } = useContext(UserContext);
	const { updateSaldo, setUpdateSaldo } = useContext(UserContext);
	const { plusmin, setPlusmin } = useContext(UserContext);
	const { data, setData } = useContext(UserContext);

	function plusHandler() {
		setPlusmin("+");
	}

	function minHandler() {
		setPlusmin("-");
	}

	function handleChange(e) {
		const temp = e.target.value;

		setUpdateSaldo(temp);
		console.log(updateSaldo);
	}

	function handleSubmit() {
		if (plusmin === "+") {
			setData({
				Expanse: [...data.Expanse],
				Income: [...data.Income, parseInt(updateSaldo)],
			});
			setSaldo((prevValue) => prevValue + parseInt(Math.abs(updateSaldo)));
		} else if (plusmin === "-") {
			setData({
				Expanse: [...data.Expanse, parseInt(updateSaldo)],
				Income: [...data.Income],
			});
			setSaldo((prevValue) => prevValue - parseInt(updateSaldo));
		}
	}

	function errorHandling(e) {
		e.preventDefault();

		if (!parseInt(updateSaldo)) {
		} else {
			handleSubmit();
		}
	}

	return (
		<Flex
			w={["100%", "100%", "30%"]}
			bgColor="#F5F5F5"
			p="3%"
			flexDir="column"
			overflow="auto"
			minW={[null, null, "300px", "300px", "400px"]}
		>
			<Flex alignContent="center">
				<InputGroup
					bgColor="#fff"
					mb={4}
					border="none"
					borderColor="#fff"
					borderRadius="15px"
					mr={2}
				>
					<InputLeftElement
						pointerEvents="none"
						children={<FiSearch color="gray" />}
					/>
					<Input type="number" placeholder="Search" borderRadius="10px" />
				</InputGroup>
				<IconButton
					icon={<FiBell />}
					fontSize="sm"
					bgColor="#fff"
					borderRadius="50%"
					p="10px"
				/>
				<Flex
					w={30}
					h={25}
					bgColor="#B57295"
					borderRadius="50%"
					color="#fff"
					align="center"
					justify="center"
					ml="-3"
					mt="-2"
					zIndex="100"
					fontSize="xs"
				>
					99+
				</Flex>
			</Flex>
			<Heading letterSpacing="tight">My Cards</Heading>
			<Box
				borderRadius="25px"
				mt={4}
				w="100%"
				h="200px"
				bgGradient="linear(to-t, #B57295, #29259A)"
			>
				<Flex
					p="1em"
					color="#fff"
					flexDir="column"
					h="100%"
					justify="space-between"
				>
					<Flex justify="space-between" w="100%" align="flex-start">
						<Flex flexDir="column">
							<Text color="gray.400">Current Balance</Text>
							<Text fontWeight="bold" fontSize="xl">
								Rp{saldo}
							</Text>
						</Flex>
						<Flex align="center">
							<Icon mr={2} as={FiCreditCard} />
							<Text>GBNK.</Text>
						</Flex>
					</Flex>
					<Text mb={4}>**** **** **** 1289</Text>
					<Flex align="flex-end" justify="space-between">
						<Flex>
							<Flex flexDir="column" mr={4}>
								<Text textTransform="uppercase" fontSize="xs">
									Valid
								</Text>
								<Text fontSize="lg">11/23</Text>
							</Flex>
							<Flex flexDir="column">
								<Text textTransform="uppercase" fontSize="xs">
									CVV
								</Text>
								<Text fontSize="lg">***</Text>
							</Flex>
						</Flex>
						<Icon as={FiCreditCard} />
					</Flex>
				</Flex>
			</Box>
			<Flex flexDir="column" my={4}>
				<Flex justify="space-between" mb={2}>
					<Text>Card Holder</Text>
					<Text fontWeight="bold">Kesya Febriana</Text>
				</Flex>
				<Flex justify="space-between" mb={2}>
					<Text>Balance</Text>
					<Text fontWeight="bold">Rp.{saldo}</Text>
				</Flex>
			</Flex>
			<Heading letterSpacing="tight" size="md" my={4}>
				Transaction
			</Heading>
			<Text color="gray" mb={2}>
				Category
			</Text>
			<Flex alignItems="center" justifyContent="center" gap="20px">
				<Button
					bgColor="#B4EBC7"
					color="#519D6B"
					borderRadius="15px"
					width="170px"
					onClick={plusHandler}
				>
					In
				</Button>
				<Button
					bgColor="#DD9A9A"
					color="#C25050"
					borderRadius="15px"
					width="170px"
					onClick={minHandler}
				>
					Out
				</Button>
			</Flex>
			<Text color="gray" mt={4} mb={2}>
				Amount ({plusmin})
			</Text>
			<Flex as="form" flexDirection="column" onSubmit={errorHandling}>
				<InputGroup>
					<InputLeftElement pointerEvents="none" children={"Rp"} />
					<Input type="number" placeholder="130.00" onChange={handleChange} />
				</InputGroup>
				<Button
					mt={4}
					bgColor="blackAlpha.900"
					color="#fff"
					p={7}
					borderRadius={15}
					type="submit"
				>
					Accept
				</Button>
			</Flex>
		</Flex>
	);
}
