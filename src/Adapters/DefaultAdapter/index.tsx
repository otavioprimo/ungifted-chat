import React from 'react';
import ChatItemProps from '../../types/ChatItemProps';
import ChatTypes from "../../types/ChatTypes";

import MessageText from './MessageText';
import ChatAdapterDefault from '../../types/ChatAdapterDefault';
import Bubble from './Bubble';

const defaultAdapter: ChatAdapterDefault = {
  chatType: ChatTypes.default,
  hideFooter: () => false,
  renderMessage: (props: ChatItemProps) => <MessageText {...props} />,
  renderBubble: (props: ChatItemProps) => <Bubble {...props} />
};

export default defaultAdapter;


