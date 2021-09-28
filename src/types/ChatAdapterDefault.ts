import React from 'react';
import ChatItemProps from './ChatItemProps';
import { ChatProps } from './ChatProps';
import ChatTypes from "./ChatTypes";

interface ChatAdapterDefault {
  chatType: ChatTypes;
  hideFooter: (props: ChatProps) => boolean;
  
  renderContainer: (props: ChatItemProps) => React.ReactElement;
  renderBubble: (props: ChatItemProps) => React.ReactElement;
  renderText: (props: ChatItemProps) => React.ReactElement;

  onReplyMessage?: (props: ChatItemProps) => void;
  onLongPressMessage?: (props: ChatItemProps) => void;
  
  
  onSendMessage?: (text: string) => void;
}

export default ChatAdapterDefault;
