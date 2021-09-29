import React, { useMemo } from 'react';
import ChatItemProps from '../../../types/ChatItemProps';

import { Container, TextTime } from './styles';

const Time: React.FC<ChatItemProps> = ({ message }) => {
  const renderTime = useMemo(() => {
    console.log('render chat - Time', message._id)
    return (
      <Container>
        <TextTime>12:00</TextTime>
      </Container>
    )
  }, [])

  return renderTime;
}

export default Time;
