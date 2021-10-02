import React, { useMemo } from 'react';
import ChatItemProps from '../../../../@types/ChatItemProps';

import { Container } from './styles';

const Video: React.FC<ChatItemProps> = (props) => {
  const { message } = props;

  const renderVideo = useMemo(() => {
    console.log('render chat - container attachment', props.message._id);
    return (<Container />)
  }, [message.video])

  return renderVideo;
}

export default Video;
