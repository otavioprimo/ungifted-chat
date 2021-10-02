import React, { useMemo, useCallback } from 'react';
import ChatItemProps from '../../../../@types/ChatItemProps';

import { Container, ContainerFeedback } from './styles';

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
      >
        <ContainerFeedback isCurrentUser={props.chatProps.userId === props.message.user._id}>
        {(props.message.image || props.message.video) && adapter.renderContainerAttachment(props)}
        {props.message.text ? adapter.renderText(props) : null}
        {adapter.renderFooter(props)}
      </ContainerFeedback>
      </Container >
    )
  }, [])

return renderBubble;
}

export default Bubble;
