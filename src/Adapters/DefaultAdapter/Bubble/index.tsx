import React from 'react';
import ChatItemProps from '../../../types/ChatItemProps';

import { Container } from './styles';

const Bubble: React.FC<ChatItemProps> = (props) => {
  const {adapter} = props.chatProps;

  return <Container>
    {adapter.renderText(props)}
  </Container>;
}

export default Bubble;
