import styled from 'styled-components/native'
import {FontAwesome5} from '@expo/vector-icons'

export const Container = styled.View`
  margin-left: 4px;
  justify-content: center;
`;

export const SentIcon = styled(FontAwesome5).attrs({
  name: 'check',
  size: 12,
  color: '#424F60'
})``;

export const WaitingIcon = styled(FontAwesome5).attrs({
  name: 'clock',
  size: 12,
  color: '#424F60'
})``;

export const ReadedIcon = styled(FontAwesome5).attrs({
  name: 'check-double',
  size: 12,
  color: '#FF2D7A'
})``;

export const ReceivedIcon = styled(FontAwesome5).attrs({
  name: 'check-double',
  size: 12,
  color: '#424F60'
})``;
