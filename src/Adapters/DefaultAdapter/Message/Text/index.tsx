import React, { useMemo } from 'react';
import ChatItemProps from '../../../../@types/ChatItemProps';

import { Container, TextMessage } from './styles';

const MessageText: React.FC<ChatItemProps> = ({ message, chatProps }) => {
  const renderText = useMemo(() => {
    console.log('render chat - Text', message._id)
    return (
      <Container isCurrentUser={chatProps.userId === message.user._id}>
        <TextMessage>
          {message.text}
        </TextMessage>
      </Container>
    )
  }, [message.text])

  return renderText;
}

export default MessageText;
