import React, { useMemo } from 'react';
import ChatItemProps from '../../../@types/ChatItemProps';

import { Container } from './styles';

const Footer: React.FC<ChatItemProps> = (props) => {
  const { chatProps: { adapter } } = props;
  const renderFooter = useMemo(() => {
    console.log('render chat - footer', props.message._id);

    return (
      <Container isCurrentUser={props.chatProps.userId === props.message.user._id}>
        {adapter.renderTime(props)}
        {adapter.renderStatus(props)}
      </Container>
    )
  }, [])

  return renderFooter;
}

export default Footer;
