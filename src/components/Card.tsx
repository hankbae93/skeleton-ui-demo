import React from "react";
import { CardAvatar, CardName, CardWrapper } from "./Card.style";

export interface CardProps {
	albumId: number;
	id: number;
	title: string;
	url: string;
	thumbnailUrl: string;
}

const Card = ({ title, url, thumbnailUrl }: CardProps) => {
	return (
		<CardWrapper>
			<CardAvatar>
				<img src={thumbnailUrl} alt='프로필' />
			</CardAvatar>
			<CardName>{title}</CardName>
		</CardWrapper>
	);
};

export default Card;
