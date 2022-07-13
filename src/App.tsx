import axios from "axios";
import React, { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import { useQuery } from "react-query";
import { CardList, Wrapper } from "./App.style";
import Card, { CardProps } from "./components/Card";
import CardSkeleton from "./components/CardSkeleton";
import useApi from "./useApi";

function App() {
	const { data, hasNextPage, fetchNextPage, isFetching } = useApi();

	return (
		<Wrapper>
			<h1>SKELTON DEMO</h1>

			<CardList>
				{data?.pages.map((page) =>
					page.data.map((card) => {
						return <Card key={card.id} {...card} />;
					})
				)}
				{isFetching &&
					Array(6)
						.fill(1)
						.map((v, i) => {
							return <CardSkeleton key={i} />;
						})}
			</CardList>

			{hasNextPage && (
				<InView
					onChange={(inView, entry) => {
						if (entry.boundingClientRect.y > 300 && inView) fetchNextPage();
					}}
				/>
			)}
		</Wrapper>
	);
}

export default App;
