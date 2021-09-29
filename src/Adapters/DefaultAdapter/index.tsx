import React from 'react';
import ChatTypes from "../../types/ChatTypes";

import MessageText from './Text';
import ChatAdapterDefault from '../../types/ChatAdapterDefault';
import Bubble from './Bubble';
import Container from './Container';
import Footer from './Footer';
import Time from './Time';
import Status from './Status'

const defaultAdapter: ChatAdapterDefault = {
  chatType: ChatTypes.default,
  hideFooter: () => false,
  renderContainer: (props) => <Container {...props} />,
  renderText: (props) => <MessageText {...props} />,
  renderBubble: (props) => <Bubble {...props} />,
  renderFooter: (props) => <Footer {...props} />,
  renderTime: (props) => <Time {...props} />,
  renderStatus: (props) => <Status {...props} />,
  onSendMessage: () => null,
  onLongPressMessage: () => null
};

export default defaultAdapter;


