import React, { useMemo } from 'react';
import ChatItemProps from '../../../../@types/ChatItemProps';

import { ContainerMessage } from './styles';

const Container: React.FC<ChatItemProps> = (props) => {

  const { adapter } = props.chatProps;

  const renderContainer = useMemo(() => {
    console.log('render chat - Container', props.message._id)

    return (
      <ContainerMessage>
        {adapter.renderBubble(props)}
      </ContainerMessage>
    )
  }, [])

  return renderContainer;
}

export default Container;
