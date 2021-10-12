import React, { useMemo } from 'react';
import ChatItemProps from '../../../../@types/ChatItemProps';

import { ContainerMessage } from './styles';

const Container: React.FC<ChatItemProps> = (props) => {

  const { adapter } = props.chatProps;

  const renderContainer = useMemo(() => {
    console.log('render chat - Container', props.message._id)

    const isFromUser = props.message.user._id === props.chatProps.userId;

    return (
      <ContainerMessage isFromUser={isFromUser}>
        {!isFromUser && adapter.renderAvatar(props)}
        {adapter.renderBubble(props)}
        {isFromUser && adapter.renderAvatar(props)}
      </ContainerMessage>
    )
  }, [])

  return renderContainer;
}

export default Container;
