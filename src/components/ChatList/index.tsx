import React from 'react';
import { FlatList } from 'react-native';
import { ChatProps } from '../../types/ChatProps';
import Message from '../../types/Message';
import { Container } from './styles';

const MESSAGES: Message[] = [
  {
    _id: Math.random().toString(),
    text: 'Biruleibe 1'
  },
  {
    _id: Math.random().toString(),
    text: 'Biruleibe 2'
  },
  {
    _id: Math.random().toString(),
    text: 'Biruleibe 3'
  }
];

interface Props {
  chatProps: ChatProps
}

const ChatList: React.FC<Props> = (props) => {
  console.log('renderizou chat list')

  const renderItem = (data: any) => {
    return props.chatProps.adapter.renderBubble({
      chatProps: props.chatProps,
      index: data.index,
      item: data.item,
    })
  }

  return <Container>
    <FlatList
      data={MESSAGES}
      inverted
      renderItem={renderItem}
      keyExtractor={item => item._id}
    />

  </Container>;
}

export default React.memo(ChatList);
