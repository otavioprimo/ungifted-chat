import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import ChatItemProps from './ChatItemProps';
import { ChatProps } from './ChatProps';
import ChatTypes from "./ChatTypes";

interface ChatAdapter {
  chatType: ChatTypes;
  hideFooter?: (props: ChatProps) => boolean;
  
  renderBubble?: (props: ChatItemProps) => React.ReactElement;
  renderText?: (props: ChatItemProps) => React.ReactElement;

  onReplyMessage?: (props: ChatItemProps) => void;
  onLongPressMessage?: (props: ChatItemProps) => void;
  onSendMessage?: (text: string) => void;
}

export default ChatAdapter;
