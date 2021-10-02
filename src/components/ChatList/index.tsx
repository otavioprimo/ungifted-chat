
import React, { useState, useImperativeHandle, useCallback } from 'react';
import { FlatList } from 'react-native';
import addOrUpdateMessage from '../../helpers/addOrUpdateMessage';
import sortMessages from '../../helpers/sortMessages'
import { ChatProps } from '../../@types/ChatProps';
import Message from '../../@types/Message';
import { Container } from './styles';
export interface Props {
  chatProps: ChatProps
}
export interface ChatListRef {
  addMessages: (messages: Message[]) => void;
  addMessage: (message: Message) => void;
}

const ChatList = React.forwardRef<ChatListRef, Props>((props, ref) => {
  console.log('renderizou chat list')
  const [messages, setMessages] = useState<Message[]>([]);

  useImperativeHandle(ref, () => ({
    addMessages: (messages: Message[]) => {
      setMessages(messages);
    },
    addMessage: (message: Message) => {
      setMessages(previousMessages => addOrUpdateMessage(previousMessages, message));
    }
  }));

  const renderItem = useCallback((data: any) => {
    return props.chatProps.adapter.renderContainer({
      chatProps: props.chatProps,
      index: data.index,
      previousMessage: messages[data.index + 1],
      message: data.item,
      nextMessage: messages[data.index - 1],
    })
  }, [messages])

  const keyExtractor = useCallback((item) => item._id, [])

  return <Container>
    <FlatList
      data={messages}
      inverted
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  </Container>;
})

export default ChatList;
