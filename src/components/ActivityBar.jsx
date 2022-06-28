import React, { useEffect, useState, useContext } from "react";
import { Flex, Heading, Box, Button, Input } from "@chakra-ui/react";
import { GlobalContext } from "../context/GlobalState";

export default function ActivityBar() {
	const [amount, setAmount] = useState(1000);

	const { addTransaction } = useContext(GlobalContext);
	const { transactions } = useContext(GlobalContext);

	// BUAT SAYA COBA2 HEHEHE
	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		console.log(total);
	// 	}, 1000);
	// 	return () => clearInterval(interval);
	// });

	const onSubmit = (e) => {
		e.preventDefault();

		const newTransaction = {
			id: Math.floor(Math.random() * 100000000),
			amount: +amount, // disini bisa PR buat kasi tombol mau kasi duit atau keluarin duit +/-
		};

		addTransaction(newTransaction);
	};

	const amounts = transactions.map((transaction) => transaction.amount);

	const total = amounts.reduce((acc, item) => (acc += item), 0);

	return (
		<Flex
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			gap="10px"
		>
			<Box>
				<Heading>Saldo anda: Rp.{total}</Heading>
			</Box>
			<form onSubmit={onSubmit}>
				<Flex
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					gap="10px"
				>
					<Input
						placeholder="Input here..."
						textAlign="center"
						type="number"
						value={amount}
						onChange={(e) => setAmount(e.target.value)} // sempet dikira error pdhl kurg type submit
					/>
					<Button type="submit">Hitung</Button>
				</Flex>
			</form>
		</Flex>
	);
}
