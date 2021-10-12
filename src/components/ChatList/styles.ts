import styled from 'styled-components/native'
import {FontAwesome5} from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;
  background-color: #edf1f7;
`;

export const ScrollButton = styled.TouchableOpacity`
  position: absolute;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  right: 10px;
  bottom: 50px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`; 

export const IconScrollToBotton = styled(FontAwesome5).attrs({
  name: 'chevron-down',
  size: 20,
  color: '#FF2D7A'
})``;
