import React from 'react';
import ChatItemProps from '../../types/ChatItemProps';
import ChatTypes from "../../types/ChatTypes";
import ChatAdapter from "../../types/ChatAdapter";
import MessageText from './MessageText';
import Bubble from './Bubble';
import { ChatProps } from '../../types/ChatProps';

const comunicadoAdapter: ChatAdapter = {
  chatType: ChatTypes.comunicados,
  renderMessage: (props: ChatItemProps) => <MessageText {...props} />,
  renderBubble: (props: ChatItemProps) => <Bubble {...props} />,
  hideFooter: (props: ChatProps) =>
    !props.userRoles.some(role => ['room.admin', 'company.admin'].includes(role))
};

export default comunicadoAdapter;
