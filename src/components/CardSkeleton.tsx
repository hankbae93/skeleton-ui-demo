import React from "react";
import styled, { keyframes } from "styled-components";
import { CardAvatar, CardName, CardWrapper } from "./Card.style";

const CardSkeleton = () => {
	return (
		<SkeltonWrapper>
			<SkeltonAvatar>
				<div />
				{/* <img src={avatar} alt='프로필' /> */}
			</SkeltonAvatar>
			<SkeltonName />
		</SkeltonWrapper>
	);
};

export default CardSkeleton;

const SkeltonAnimation = keyframes`
  0% {
			transform: translateX(0);
		}
		50%,
		100% {
			transform: translateX(460px);
		}

`;

const SkeltonWrapper = styled(CardWrapper)`
	overflow: hidden;
	position: relative;
`;

const SkeltonAvatar = styled(CardAvatar)`
	position: relative;
	width: 50px;
	height: 50px;
	background: #f2f2f2;

	&::before {
		content: "";
		position: absolute;
		z-index: 10;
		top: 0;
		left: 0;
		width: 30px;
		height: 100%;
		background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
		animation: ${SkeltonAnimation} 2s infinite linear;
	}
`;

const SkeltonName = styled(CardName)`
	overflow: hidden;
	position: relative;
	width: 100px;
	height: 38px;
	background: #f2f2f2;

	&::before {
		content: "";
		position: absolute;
		z-index: 10;
		top: 0;
		left: 0;
		width: 30px;
		height: 100%;
		background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
		animation: ${SkeltonAnimation} 2s infinite linear;
	}
`;
