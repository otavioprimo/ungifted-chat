import styled from "styled-components/native";

export const Container = styled.View`
  background-color: blue;
  border-top-right-radius: ${({ isCurrentUser }) =>
    isCurrentUser ? 0 : 8}px;
    border-top-left-radius: ${({ isCurrentUser }) =>
    isCurrentUser ? 8 : 0}px;
`;

export const TextMessage = styled.Text`
  color: white;
  font-size: 22px;
`;
