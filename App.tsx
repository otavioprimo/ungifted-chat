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

const USER_AVATAR = `https://i.pravatar.cc/100?u=fake@pravatar.com}`;
const OTHER_AVATAR =  `https://i.pravatar.cc/100?u=fake_two@pravatar.com`;

for (let i = 1; i <= 20000; i++) {
  const messageDate = new Date(new Date().setMinutes(new Date().getMinutes() - i))
  const isOtherUser = i % 2 === 0;

  MESSAGES.push({
    _id: i.toString(),
    text: 'Biruleibe ' + i,
    date: messageDate,
    status: MessageStatus.PENDING,
    user: {
      _id: isOtherUser ? '9876-9876-9876' : userId,
      name: 'Timotim as 18:00',
      avatar: isOtherUser ? OTHER_AVATAR : USER_AVATAR,
    }
  })
}

export default function App() {
  const chatRef = createRef<ChatRef>();

  useEffect(() => {
    addInitialMessages();

    ChatEvent.onMessage(message => {
      const newMessage = {
        _id: Math.random().toString(),
        date: new Date(),
        status: MessageStatus.PENDING,
        text: message.text || '',
        user: { _id: userId, name: 'Timotim da meia noite', avatar: USER_AVATAR },
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <View style={{
        width: '100%',
        height: 80,
        backgroundColor: '#c9c9c9'
      }} >
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
