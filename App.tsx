import { StatusBar } from 'expo-status-bar';
import React, { createRef, useEffect } from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import comunicadoAdapter from './src/Adapters/ComunicadoAdapter';
import ChatTypes from './src/@types/ChatTypes';

import Chat, { ChatRef } from './src/components/Chat';
import Message, { MessageStatus } from './src/@types/Message';
import ChatEvent from './src/Events/ChatEvent';
import delay from './src/helpers/delay';

const chatType = ChatTypes.default;
const roles = ['room.admin', 'company.admin', 'company.member']
const userId = '1234-1234-1234-1234';


const MESSAGES: Message[] = [];

for (let i = 1; i <= 10; i++) {
  const messageDate = new Date(new Date().setMinutes(new Date().getMinutes() - i))
  MESSAGES.push({
    _id: i.toString(),
    text: 'Biruleibe ' + i,
    date: messageDate,
    status: MessageStatus.PENDING,
    user: {
      _id: i % 2 === 0 ? '9876-9876-9876' : userId,
      name: 'Timotim as 18:00'
    }
  })
}

export default function App() {
  const chatRef = createRef<ChatRef>();

  useEffect(() => {
    addInitialMessages();

    ChatEvent.onMessage(message => {
      const newMessage = {
        _id: (Math.floor(Math.random() * (500 - 11)) + 11).toString(),
        date: new Date(),
        status: MessageStatus.PENDING,
        text: message.text || '',
        user: { _id: userId, name: 'Timotim da meia noite' },
        image: message?.attachment?.type === 'image' ? message?.attachment?.uri : undefined,
        video: message?.attachment?.type === 'video' ? message?.attachment?.uri : undefined,
      }
      onSendMessage(newMessage);
    })

    return () => {
      ChatEvent.destroyAll();
    }
  }, [])

  const onSendMessage = async (message: Message) => {
    // Send message with pending status
    addMessage(message);
    // // send message with sent status
    await delay(1000);
    message.status = MessageStatus.SENT;
    addMessage(message);
    // send message with received status
    await delay(1200);
    message.status = MessageStatus.RECEIVED;
    addMessage(message);
    // send message with received status
    await delay(2000);
    message.status = MessageStatus.READED;
    addMessage(message);
  }

  const addInitialMessages = () => {
    chatRef.current?.addMessages(MESSAGES);
  }

  const addMessage = (message: Message) => {
    chatRef.current?.addMessage(message);
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
