import styled from "styled-components/native";

export const Container = styled.View`
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
