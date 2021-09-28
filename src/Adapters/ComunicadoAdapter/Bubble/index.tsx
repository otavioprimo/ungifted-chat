import React, { useCallback } from 'react';
import ChatItemProps from '../../../types/ChatItemProps';

import { Container } from './styles';

const Bubble: React.FC<ChatItemProps> = (props) => {
  const { adapter } = props.chatProps;

  const _onLongPress = useCallback(() => {
    console.log(adapter.onLongPressMessage)
    adapter.onLongPressMessage && adapter.onLongPressMessage(props);
  }, [])

  return <Container onLongPress={_onLongPress}>
    {adapter.renderText(props)}
  </Container>;
}

export default Bubble;
