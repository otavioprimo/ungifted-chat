import styled from 'styled-components/native'

export const Container = styled.View`
  justify-content: ${({ isCurrentUser }) =>
    isCurrentUser ? "flex-end" : "flex-start"};;
  flex-direction: row;
  padding: 2px;
`;
