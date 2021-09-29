import React, { useMemo } from 'react';
import ChatItemProps from '../../../types/ChatItemProps';

import { Container } from './styles';

const Bubble: React.FC<ChatItemProps> = (props) => {
  const { adapter } = props.chatProps;
  const renderBubble = useMemo(() => {
    console.log('render chat - bubble', props.message._id);

    return (
      <Container isCurrentUser={props.chatProps.userId === props.message.user._id}>
        {adapter.renderText(props)}
        {adapter.renderFooter(props)}
      </Container>
    )
  }, [])

  return renderBubble;
}

export default Bubble;
