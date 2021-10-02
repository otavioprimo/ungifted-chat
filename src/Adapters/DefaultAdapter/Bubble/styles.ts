import styled from "styled-components/native";

interface ContainerProps {
  isCurrentUser: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 4px;
  width: 70%;
  border-width: 1px;
  border-color: #c9c9c9;
  border-radius: 8px;
  align-self: ${({ isCurrentUser }) =>
    isCurrentUser ? "flex-end" : "flex-start"};
`;
