import styled from 'styled-components/native';

interface ContainerProps {
  isFromUser: boolean
}

export const ContainerMessage = styled.View<ContainerProps>`
  width: 100%;
  flex-direction: row;
  justify-content: ${(props) => props.isFromUser ? 'flex-end' : 'flex-start'};
`;
