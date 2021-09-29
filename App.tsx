import { StatusBar } from 'expo-status-bar';
import React, { useRef, useEffect } from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import comunicadoAdapter from './src/Adapters/ComunicadoAdapter';
import ChatTypes from './src/types/ChatTypes';

import Chat from './src/components/Chat';
import Message, { MessageStatus } from './src/types/Message';

const chatType = ChatTypes.default;
const roles = ['room.admin', 'company.admin', 'company.member']
const userId = '1234-1234-1234-1234';


const MESSAGES: Message[] = [
  {
    _id: '1',
    text: 'Biruleibe 1',
    date: new Date(),
    status: MessageStatus.SENT,
    user: {
      _id: '1234-1234-1234-1234',
      name: 'Timotim'
    }
  },
  {
    _id: '2',
    text: 'Biruleibe 2',
    date: new Date(),
    status: MessageStatus.SENT,
    user: {
      _id: '4321-4321-4321',
      name: 'Timotim as 7:00'
    }
  },
  {
    _id: '3',
    text: 'Biruleibe 3',
    date: new Date(),
    status: MessageStatus.SENT,
    user: {
      _id: '9876-9876-9876',
      name: 'Timotim as 18:00'
    }
  },
  {
    _id: '4',
    text: 'Biruleibe 4',
    date: new Date(),
    status: MessageStatus.SENT,
    user: {
      _id: '9876-9876-9876',
      name: 'Timotim as 18:00'
    }
  }
];

export default function App() {
  const chatRef = useRef();

  useEffect(() => {
    addMessage();
  }, [])

  const addMessage = () => {
    chatRef.current.addMessages(MESSAGES);
  }

  const onPressTeste = () => {
    const messageToUpdate = {
      ...MESSAGES[0],
      status: MessageStatus.READED,
    };
    chatRef.current.updateMessage(messageToUpdate);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <View style={{
        width: '100%',
        height: 60,
        backgroundColor: '#c9c9c9'
      }} >
        <Button onPress={onPressTeste} title="MUDA ALGO"></Button>
        <Text>{chatType.valueOf().toLocaleUpperCase()}</Text></View>

      <Chat
        chatRef={chatRef}
        userId={userId}
        userRoles={roles}
        chatType={chatType}
        adapters={[
          comunicadoAdapter
        ]}
      />
    </SafeAreaView>
  );
}
