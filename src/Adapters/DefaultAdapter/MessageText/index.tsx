import React from 'react';
import ChatItemProps from '../../../types/ChatItemProps';

import { Container, TextMessage } from './styles';

const MessageText: React.FC<ChatItemProps> = ({ item }) => {
  return (
    <Container>
      <TextMessage>
        {item.text} Default
      </TextMessage>
    </Container>
  );
}

export default MessageText;