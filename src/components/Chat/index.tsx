import React, { useCallback, useMemo, Ref } from 'react';

import getCurrentAdapter from '../../helpers/getCurrentAdapter';

import ChatList, { ChatListRef } from '../ChatList';

import { Container } from './styles';
import { ChatProps } from '../../@types/ChatProps';
import ChatAdapter from '../../@types/ChatAdapter';
import ChatTypes from '../../@types/ChatTypes';
import { SendMessage } from '../../@types/SendMessage';

interface Props {
  userId: string;
  userRoles: string[],
  chatType: ChatTypes,
  adapters?: ChatAdapter[];
  chatRef: Ref<ChatListRef>;
}

export type ChatRef = ChatListRef;

const Chat: React.FC<Props> = (props) => {
  const buildProps = useCallback((): ChatProps => {
    const adapter = getCurrentAdapter(props.chatType, props.adapters || []);

    return {
      userRoles: props.userRoles,
      chatType: props.chatType,
      userId: props.userId,
      adapter,
    }

  }, [props.chatType])

  const renderChatList = useMemo(() => {
    return <ChatList ref={props.chatRef} chatProps={buildProps()} />
  }, [])

  const renderFooter = useMemo(() => {
    const props = buildProps();
    return props.adapter.renderChatFooter(props);
  }, [])

  return <Container>
    {renderChatList}
    {renderFooter}
  </Container>;
}

export default Chat;
