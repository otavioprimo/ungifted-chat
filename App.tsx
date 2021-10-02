import { StatusBar } from 'expo-status-bar';
import React, { createRef, useEffect } from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import comunicadoAdapter from './src/Adapters/ComunicadoAdapter';
import ChatTypes from './src/types/ChatTypes';

import Chat, { ChatRef } from './src/components/Chat';
import Message, { MessageStatus } from './src/types/Message';

const chatType = ChatTypes.default;
const roles = ['room.admin', 'company.admin', 'company.member']
const userId = '1234-1234-1234-1234';


const MESSAGES: Message[] = [];

for (let i = 1; i <= 10; i++) {
  MESSAGES.push({
    _id: i.toString(),
    text: 'Biruleibe ' + i,
    date: new Date(),
    status: MessageStatus.PENDING,
    user: {
      _id: i % 2 === 0 ? '9876-9876-9876' : '1234-1234-1234-1234',
      name: 'Timotim as 18:00'
    }
  })
}

export default function App() {
  const chatRef = createRef<ChatRef>();

  useEffect(() => {
    addMessage();
  }, [])

  const addMessage = () => {
    chatRef.current?.addMessages(MESSAGES);
  }

  const onPressAdd = () => {
    for (let i = 15; i <= 20; i++) {
      const messageToUpdate = {
        _id: i.toString(),
        text: 'Biruleibe ' + i,
        date: new Date(),
        status: MessageStatus.SENT,
        user: {
          _id: '1234-1234-1234-1234',
          name: 'Timotim'
        }
      };

      chatRef.current?.addMessage(messageToUpdate);
    }
  }

  const onPressUpdate = () => {
    for (let i = 0; i <= 10; i++) {
      const messageToUpdate = {
        _id: i.toString(),
        text: 'Biruleibe ' + i,
        date: new Date(),
        status: MessageStatus.SENT,
        user: {
          _id: '1234-1234-1234-1234',
          name: 'Timotim'
        }
      };

      chatRef.current?.addMessage(messageToUpdate);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <View style={{
        width: '100%',
        height: 80,
        backgroundColor: '#c9c9c9'
      }} >
        <Button onPress={onPressAdd} title="ADICIONAR ITEMS"></Button>
        <Button onPress={onPressUpdate} title="ATUALIZAR ITEMS"></Button>
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
