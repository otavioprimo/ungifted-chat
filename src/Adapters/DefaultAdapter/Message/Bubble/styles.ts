import styled from "styled-components/native";

interface ContainerProps {
  isCurrentUser: boolean;
}

export const Container = styled.TouchableWithoutFeedback``;

export const ContainerFeedback = styled.View<ContainerProps>`
  margin-left: ${({ isCurrentUser }) => (isCurrentUser ? 0 : 4)}px;
  margin-right: ${({ isCurrentUser }) => (isCurrentUser ? 4 : 0)}px;
  margin-top: 4px;
  width: 70%;
  border: 1px solid #dbdfe5;
  border-radius: 8px;
  align-self: ${({ isCurrentUser }) =>
    isCurrentUser ? "flex-end" : "flex-start"};
  background-color: ${({ isCurrentUser }) =>
    isCurrentUser ? "#F3F4F7" : "#FFFFFF"};
  border-top-right-radius: ${({ isCurrentUser }) => (isCurrentUser ? 0 : 8)}px;
  border-top-left-radius: ${({ isCurrentUser }) => (isCurrentUser ? 8 : 0)}px;
  padding: 6px 6px 2px 6px;
`;
