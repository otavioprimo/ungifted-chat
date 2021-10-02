import React, { useMemo } from 'react';
import ChatItemProps from '../../../../@types/ChatItemProps';

import { Container } from './styles';

const ContainerAttachment: React.FC<ChatItemProps> = (props) => {
  const { message, chatProps: { adapter } } = props;

  const renderAttachment = () => {
    if (message.image) return adapter.renderImage(props);
    if (message.video) return adapter.renderVideo(props);
  }

  const renderContainer = useMemo(() => {
    console.log('render chat - container attachment', props.message._id);
    return (
      <Container >
        {renderAttachment()}
      </Container>
    )
  }, [])

  return renderContainer;
}

export default ContainerAttachment;
