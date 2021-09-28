import React from 'react';
import ChatItemProps from '../../../types/ChatItemProps';

import { ContainerMessage } from './styles';

const Container: React.FC<ChatItemProps> = (props) => {
  const {adapter} = props.chatProps;

  return <ContainerMessage>
    {adapter.renderBubble(props)}
  </ContainerMessage>;
}

export default Container;
