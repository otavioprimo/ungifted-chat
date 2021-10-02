import React, { useMemo, useCallback } from 'react';
import ChatItemProps from '../../../../@types/ChatItemProps';

import { Container, AttachmentPreview } from './styles';

const Image: React.FC<ChatItemProps> = (props) => {
  const { message, chatProps: { adapter } } = props;

  const renderImage = useMemo(() => {
    console.log('render chat - image', props.message._id);

    const _onLongPress = () => {
      adapter.onLongPressMessage && adapter.onLongPressMessage(props);
    }

    return (
      <Container onLongPress={_onLongPress}>
        <AttachmentPreview source={{ uri: props.message.image }} />
      </Container>
    )
  }, [message.image])

  return renderImage;
}

export default Image;
