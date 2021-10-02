import React from 'react';
import ChatTypes from "../../@types/ChatTypes";

import ChatFooter from './ChatFooter/Footer';

import MessageText from './Message/Text';
import ChatAdapterDefault from '../../@types/ChatAdapterDefault';
import Bubble from './Message/Bubble';
import Container from './Message/Container';
import Footer from './Message/Footer';
import Time from './Message/Time';
import Status from './Message/Status';
import ChatEvent from '../../Events/ChatEvent';
import ContainerAttachment from './Message/ContainerAttachment';
import Image from './Message/Image';
import Video from './Message/Video';

const defaultAdapter: ChatAdapterDefault = {
  chatType: ChatTypes.default,
  hideFooter: () => false,
  renderChatFooter: (props) => <ChatFooter {...props} />,

  renderContainer: (props) => <Container {...props} />,
  renderText: (props) => <MessageText {...props} />,
  renderBubble: (props) => <Bubble {...props} />,
  renderFooter: (props) => <Footer {...props} />,
  renderTime: (props) => <Time {...props} />,
  renderStatus: (props) => <Status {...props} />,

  renderContainerAttachment: (props) => <ContainerAttachment {...props} />,
  renderImage: (props) => <Image {...props} />,
  renderVideo: (props) => <Video {...props} />,

  onSendMessage: (message) => ChatEvent.sendMessage(message),
  onLongPressMessage: (message) => console.log('Longpress message', message),
};

export default defaultAdapter;


