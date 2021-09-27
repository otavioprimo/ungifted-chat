import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import comunicadoAdapter from './src/Adapters/ComunicadoAdapter';
import ChatTypes from './src/types/ChatTypes';

import Chat from './src/components/Chat';

const chatType = ChatTypes.default;
const roles = ['room.admin', 'company.admin', 'company.member']

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <View style={{
        width: '100%',
        height: 60,
        backgroundColor: '#c9c9c9'
      }} ><Text>{chatType.valueOf().toLocaleUpperCase()}</Text></View>

      <Chat
        userRoles={roles}
        chatType={chatType}
        adapters={[
          comunicadoAdapter
        ]}        
      />
    </SafeAreaView>
  );
}
