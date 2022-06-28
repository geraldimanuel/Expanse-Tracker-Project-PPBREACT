import { Flex, Heading, Avatar, Text, Icon, Link } from "@chakra-ui/react";
import { FiHome, FiPieChart, FiDollarSign, FiBox } from "react-icons/fi";
import kesya from "../assets/kesya.png";

export default function NavBar() {
	return (
		<Flex
			w={["100%", "100%", "10%", "15%", "15%"]}
			flexDir="column"
			alignItems="center"
			backgroundColor="#020202"
			color="#fff"
		>
			<Flex flexDir="column" justifyContent="space-between" height="100vh">
				<Flex flexDir="column" as="nav">
					<Heading
						mt={50}
						mb={100}
						size="3xl"
						alignSelf="center"
						letterSpacing="tight"
					>
						GBNK.
					</Heading>
					<Flex
						flexDir="column"
						align="flex-start"
						justifyContent="center"
						className="sidebar-menu"
					>
						<Flex className="sidebar-items">
							<Link>
								<Icon as={FiHome} fontSize="2xl" className="active-icon"></Icon>
							</Link>
							<Link _hover={{ textDecor: "none" }}>
								<Text className="active">Home</Text>
							</Link>
						</Flex>
						<Flex className="sidebar-items">
							<Link>
								<Icon as={FiPieChart} fontSize="2xl"></Icon>
							</Link>
							<Link _hover={{ textDecor: "none" }}>
								<Text>Invest</Text>
							</Link>
						</Flex>
						<Flex className="sidebar-items">
							<Link>
								<Icon as={FiDollarSign} fontSize="2xl"></Icon>
							</Link>
							<Link _hover={{ textDecor: "none" }}>
								<Text>Wallet</Text>
							</Link>
						</Flex>
						<Flex className="sidebar-items">
							<Link>
								<Icon as={FiBox} fontSize="2xl"></Icon>
							</Link>
							<Link _hover={{ textDecor: "none" }}>
								<Text>About Us</Text>
							</Link>
						</Flex>
					</Flex>
				</Flex>
				<Flex flexDir="column" alignItems="center" mb={10} mt={5}>
					<Avatar my={2} src={kesya} />
					<Text>Kesya Febriana</Text>
				</Flex>
			</Flex>
		</Flex>
	);
}
