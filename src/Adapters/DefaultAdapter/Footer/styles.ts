import styled from "styled-components/native";

interface ContainerProps {
  isCurrentUser: boolean;
}

export const Container = styled.View<ContainerProps>`
  justify-content: ${({ isCurrentUser }) =>
    isCurrentUser ? "flex-end" : "flex-start"};
  flex-direction: row;
  padding: 2px;
`;
