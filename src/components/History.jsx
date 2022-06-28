import React, { useContext } from "react";
import {
	Heading,
	Flex,
	Box,
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
} from "@chakra-ui/react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(GlobalContext);

	const sign = transaction.amount < 0 ? "-" : "+";

	return (
		<Alert status="error" m="10px">
			<AlertIcon />
			<AlertTitle>Warning!</AlertTitle>
			<AlertDescription>
				<Box className={transaction.amount < 0 ? "minus" : "plus"}>
					{transaction.text}{" "}
					<span>
						{sign}Rp.{Math.abs(transaction.amount)}
					</span>
				</Box>
			</AlertDescription>
		</Alert>
	);
};

export default function History() {
	const { transactions } = useContext(GlobalContext);

	return (
		<Flex flexDirection="column">
			<Heading>History</Heading>
			<ul>
				{transactions.map((transaction) => (
					<Transaction key={transaction.id} transaction={transaction} />
				))}
			</ul>
		</Flex>
	);
}
