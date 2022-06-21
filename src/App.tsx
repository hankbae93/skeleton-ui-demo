import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { CardList, Wrapper } from "./App.style";
import Card, { CardProps } from "./components/Card";
import CardSkeleton from "./components/CardSkeleton";

const getUsers = async ({ page = 1 }: { page: number }) => {
	return axios
		.get("https://reqres.in/api/users?page=2")
		.then((res) => res.data);
};

function App() {
	const [page, setPage] = useState(1);
	const [start, setStart] = useState(false);
	const { data, isLoading } = useQuery(
		["GET_USER", page],
		() => getUsers({ page }),
		{
			enabled: start,
		}
	);

	useEffect(() => {
		setTimeout(() => setStart(true), 3000);
	}, []);

	return (
		<Wrapper>
			<CardList>
				{!start
					? Array(6)
							.fill(null)
							.map((v, i) => <CardSkeleton key={i} />)
					: data?.data.map((person: CardProps) => {
							return <Card key={person.id} {...person} />;
					  })}
			</CardList>
		</Wrapper>
	);
}

export default App;
