import styled from "styled-components";

export const CardWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px 32px;
	width: 300px;
	border-radius: 10px;
	box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
	box-sizing: border-box;
`;

export const CardAvatar = styled.div`
	overflow: hidden;
	width: 50px;
	height: 50px;
	border-radius: 50%;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const CardName = styled.div`
	font-size: 2em;
	font-weight: 500;
`;
