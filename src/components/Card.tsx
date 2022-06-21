import React from "react";
import { CardAvatar, CardName, CardWrapper } from "./Card.style";

export interface CardProps {
	avatar: string;
	email: string;
	first_name: string;
	id: number;
	last_name: string;
}

const Card = ({ avatar, email, id, first_name, last_name }: CardProps) => {
	return (
		<CardWrapper>
			<CardAvatar>
				<img src={avatar} alt='프로필' />
			</CardAvatar>
			<CardName>{first_name}</CardName>
		</CardWrapper>
	);
};

export default Card;
