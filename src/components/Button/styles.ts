import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
	background: #ff9000;
	height: 56px;
	border-radius: 10px;
	border: none;
	padding: 0 16px;
	color: #312e38;
	width: 100%;
	font-weight: 500;
	margin-top: 1rem;
	transition: background-color 0.3s ease-out;

	&:hover {
		background: ${shade(0.2, '#ff9000')};
	}
`;
