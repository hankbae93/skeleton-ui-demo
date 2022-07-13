import styled from "styled-components";

export const CardWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	gap: 10px;
	padding: 16px 32px;
	width: 300px;
	border-radius: 10px;
	background-color: #fff;
	box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
	box-sizing: border-box;
`;

export const CardAvatar = styled.div`
	overflow: hidden;
	width: 150px;
	height: 150px;
	border-radius: 20%;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const CardName = styled.div`
	font-size: 16px;
	font-weight: 500;
`;
