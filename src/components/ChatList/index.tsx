import React from 'react';
import { FlatList } from 'react-native';
import { ChatProps } from '../../types/ChatProps';
import Message from '../../types/Message';
import { Container } from './styles';

const MESSAGES: Message[] = [
  {
    _id: Math.random().toString(),
    text: 'Biruleibe 1',
    user: {
      _id: '1234-1234-1234',
      name: 'Timotim'
    }
  },
  {
    _id: Math.random().toString(),
    text: 'Biruleibe 2',
    user: {
      _id: '4321-4321-4321',
      name: 'Timotim as 7:00'
    }
  },
  {
    _id: Math.random().toString(),
    text: 'Biruleibe 3',
    user: {
      _id: '9876-9876-9876',
      name: 'Timotim as 18:00'
    }
  }
];

interface Props {
  chatProps: ChatProps
}

const ChatList: React.FC<Props> = (props) => {
  console.log('renderizou chat list')

  const renderItem = (data: any) => {
    return props.chatProps.adapter.renderContainer({
      chatProps: props.chatProps,
      index: data.index,
      previousMessage: MESSAGES[data.index - 1],
      message: data.item,
      nextMessage: MESSAGES[data.index + 1],
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
