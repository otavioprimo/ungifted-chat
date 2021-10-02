import styled from "styled-components/native";
interface ContainerProps {
  isCurrentUser: boolean;
}

export const Container = styled.View<ContainerProps>`
  padding-top: 8px;
  padding-bottom: 2px;
`;

export const TextMessage = styled.Text`
  color: #424F60;
  font-size: 14px;
`;
