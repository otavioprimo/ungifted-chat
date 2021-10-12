import React, { useMemo } from 'react';
import ChatItemProps from '../../../../@types/ChatItemProps';
import { MessageStatus } from '../../../../@types/Message';

import { Container, ReadedIcon, ReceivedIcon, SentIcon, WaitingIcon } from './styles';

const Status: React.FC<ChatItemProps> = ({ message, chatProps }) => {

  const renderIcon = () => {
    switch (message.status) {
      case MessageStatus.SENT:
        return <SentIcon />
      case MessageStatus.PENDING:
        return <WaitingIcon />;
      case MessageStatus.READED:
        return <ReadedIcon />;
      case MessageStatus.RECEIVED:
        return <ReceivedIcon />

      default:
        return <WaitingIcon />;
    }
  }

  const renderStatus = useMemo(() => {
    console.log('render chat - Status', message._id);

    const isFromUser = message.user._id === chatProps.userId;
    if (!isFromUser) return null;

    return (
      <Container >
        {renderIcon()}
      </Container>
    )
  }, [message.status])

  return renderStatus;
}

export default Status;
