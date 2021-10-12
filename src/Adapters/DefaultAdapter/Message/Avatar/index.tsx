import React, { useMemo } from 'react';
import ChatItemProps from '../../../../@types/ChatItemProps';

import { Container, Image } from './styles';

const Avatar: React.FC<ChatItemProps> = (props) => {
  const isFromUser = props.message.user._id === props.chatProps.userId;

  const renderAvatar = useMemo(() => {
    if (!props.message.user.avatar) return null

    return (
      <Container isFromUser={isFromUser} >
        <Image source={{ uri: props.message.user?.avatar }} />
      </Container>
    );
  }, [])

  return renderAvatar
}

export default Avatar;
