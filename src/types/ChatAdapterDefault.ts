import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import ChatItemProps from './ChatItemProps';
import { ChatProps } from './ChatProps';
import ChatTypes from "./ChatTypes";

interface ChatAdapterDefault {
  chatType: ChatTypes;
  hideFooter: (props: ChatProps) => boolean;
  
  renderBubble: (props: ChatItemProps) => React.ReactElement;
  renderMessage: (props: ChatItemProps) => React.ReactElement;
}

export default ChatAdapterDefault;
