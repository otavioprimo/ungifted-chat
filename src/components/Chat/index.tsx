import React, { useCallback, useMemo } from 'react';

import getCurrentAdapter from '../../helpers/getCurrentAdapter';

import Footer from '../Footer';
import ChatList from '../ChatList';

import { Container } from './styles';
import { ChatProps } from '../../types/ChatProps';
import ChatAdapter from '../../types/ChatAdapter';
import ChatTypes from '../../types/ChatTypes';

interface Props {
  userRoles: string[],
  chatType: ChatTypes,
  adapters?: ChatAdapter[];
}

const Chat: React.FC<Props> = (props) => {
  const buildProps = useCallback((): ChatProps => {
    const adapter = getCurrentAdapter(props.chatType, props.adapters || []);

    return {
      userRoles: props.userRoles,
      chatType: props.chatType,
      adapter,
    }

  }, [props.chatType])

  const renderChatList = useMemo(() => {
    return <ChatList chatProps={buildProps()} />
  }, [])

  const renderFooter = useMemo(() => {
    return <Footer chatProps={buildProps()} />
  }, [])

  return <Container>
    {renderChatList}
    {renderFooter}
  </Container>;
}

export default Chat;
