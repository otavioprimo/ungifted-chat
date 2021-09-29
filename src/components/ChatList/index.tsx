import React, { useState, useImperativeHandle } from 'react';
import { FlatList } from 'react-native';
import { ChatProps } from '../../types/ChatProps';
import Message, { MessageStatus } from '../../types/Message';
import { Container } from './styles';


interface Props {
  chatProps: ChatProps
}

const ChatList: React.FC<any> = (props, ref) => {
  console.log('renderizou chat list')
  const [messages, setMessages] = useState<Message[]>([]);

  useImperativeHandle(ref, () => ({
    addMessages: (messages: Message[]) => {
      setMessages(messages);
    },
    updateMessage: (message: Message) => {
      setMessages(previousMessages => {
        return previousMessages.map(el => {
          if (el._id === message._id) el.status = message.status
          return el;
        })
      })
    }
  }));

  const renderItem = (data: any) => {
    return props.chatProps.adapter.renderContainer({
      chatProps: props.chatProps,
      index: data.index,
      previousMessage: messages[data.index - 1],
      message: data.item,
      nextMessage: messages[data.index + 1],
    })
  }

  return <Container>
    <FlatList
      data={messages}
      inverted
      renderItem={renderItem}
      keyExtractor={item => item._id}
    />
  </Container>;
}

export default React.forwardRef(ChatList);
