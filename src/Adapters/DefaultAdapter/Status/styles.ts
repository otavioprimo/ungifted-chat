import styled from 'styled-components/native'
import {FontAwesome5} from '@expo/vector-icons'

export const Container = styled.View`
  margin-left: 4px;
`;

export const SentIcon = styled(FontAwesome5).attrs({
  name: 'check',
  size: 15,
  color: '#aaa'
})``;

export const WaitingIcon = styled(FontAwesome5).attrs({
  name: 'clock',
  size: 15,
  color: '#aaa'
})``;

export const ReadedIcon = styled(FontAwesome5).attrs({
  name: 'check-double',
  size: 15,
  color: 'blue'
})``;

export const ReceivedIcon = styled(FontAwesome5).attrs({
  name: 'check-double',
  size: 15,
  color: '#aaa'
})``;
