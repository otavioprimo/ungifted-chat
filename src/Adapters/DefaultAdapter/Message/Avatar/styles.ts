import styled from 'styled-components/native';

interface ContainerProps {
  isFromUser: boolean
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  margin-top: 6px;
  margin-left: ${({ isFromUser }) => (isFromUser ? 0 : 4)}px;
  margin-right: ${({ isFromUser }) => (isFromUser ? 4 : 0)}px;
`;

export const Image = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;
