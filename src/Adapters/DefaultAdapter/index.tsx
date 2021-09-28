import React from 'react';
import ChatTypes from "../../types/ChatTypes";

import MessageText from './Text';
import ChatAdapterDefault from '../../types/ChatAdapterDefault';
import Bubble from './Bubble';
import Container from './Container';

const defaultAdapter: ChatAdapterDefault = {
  chatType: ChatTypes.default,
  hideFooter: () => false,
  renderContainer: (props) => <Container {...props} />,
  renderText: (props) => <MessageText {...props} />,
  renderBubble: (props) => <Bubble {...props} />,
  onSendMessage: () => null,
  onLongPressMessage: () => null
};

export default defaultAdapter;


