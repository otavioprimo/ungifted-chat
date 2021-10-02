import React from 'react';
import ChatItemProps from '../../../@types/ChatItemProps';

import { Container, TextMessage } from './styles';

const MessageText: React.FC<ChatItemProps> = ({ message }) => {
  return <Container>
    <TextMessage>
      {message.text}
    </TextMessage>
  </Container>;
}

export default MessageText;
