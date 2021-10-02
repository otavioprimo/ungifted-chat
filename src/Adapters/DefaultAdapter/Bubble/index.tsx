import React, { useMemo, useCallback } from 'react';
import ChatItemProps from '../../../types/ChatItemProps';

import { Container } from './styles';

const Bubble: React.FC<ChatItemProps> = (props) => {
  const { adapter } = props.chatProps;
  const renderBubble = useMemo(() => {
    console.log('render chat - bubble', props.message._id);

    const _onLongPress = () => {
      adapter.onLongPressMessage && adapter.onLongPressMessage(props);
    }

    return (
      <Container
        onLongPress={_onLongPress}
        isCurrentUser={props.chatProps.userId === props.message.user._id}>
        {adapter.renderText(props)}
        {adapter.renderFooter(props)}
      </Container>
    )
  }, [])

  return renderBubble;
}

export default Bubble;
