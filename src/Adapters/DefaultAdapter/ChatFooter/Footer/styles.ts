import styled from 'styled-components/native'
import {FontAwesome5} from '@expo/vector-icons'

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 8px;
  background-color: #F3F4F7;
`;

export const ContainerLeftAction = styled.View``;

export const ButtonAction = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: green;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

export const PlusIcon = styled(FontAwesome5).attrs({
  name: 'plus',
  size: 25,
  color: 'white'
})``;

export const InputMessage = styled.TextInput`
  margin: 8px;
  border-color: blue;
  border-width: 1px;
  flex: 1;
  border-radius: 8px;
  background-color: #f2f2f2;
  padding: 2px;
`;

export const ContainerRightAction = styled.View``;

export const ButtonSend = styled.TouchableOpacity`
 width: 50px;
  height: 50px;
  background-color: ${({disabled}) => disabled ? '#c9c9c9' : 'green'};
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  `;

export const IconSend = styled(FontAwesome5).attrs({
  name: 'paper-plane',
  size: 25,
  color: 'white'
})``;

export const ButtonAudio = styled.TouchableOpacity`
 width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  `;

export const IconAudio = styled(FontAwesome5).attrs({
  name: 'microphone',
  size: 25,
  color: 'white'
})``;
