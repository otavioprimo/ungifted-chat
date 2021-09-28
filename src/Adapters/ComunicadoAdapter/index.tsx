import React from 'react';
import ChatTypes from "../../types/ChatTypes";
import ChatAdapter from "../../types/ChatAdapter";
import MessageText from './Text';
import Bubble from './Bubble';

const comunicadoAdapter: ChatAdapter = {
  chatType: ChatTypes.comunicados,
  renderText: (props) => <MessageText {...props} />,
  renderBubble: (props) => <Bubble {...props} />,
  hideFooter: (props) =>
    !props.userRoles.some(role => ['room.admin', 'company.admin'].includes(role)),
  onSendMessage: (text) => console.log(text),
  onLongPressMessage: (message) => console.log('Longpress message', message)
};

export default comunicadoAdapter;
