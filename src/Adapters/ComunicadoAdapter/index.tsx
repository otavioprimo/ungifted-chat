import React from 'react';
import ChatTypes from "../../@types/ChatTypes";
import ChatAdapter from "../../@types/ChatAdapter";
import MessageText from './Text';

const comunicadoAdapter: ChatAdapter = {
  chatType: ChatTypes.comunicados,
  renderText: (props) => <MessageText {...props} />,
  hideFooter: (props) =>
    !props.userRoles.some(role => ['room.admin', 'company.admin'].includes(role)),
  onLongPressMessage: (message) => console.log('Longpress message', message)
};

export default comunicadoAdapter;
