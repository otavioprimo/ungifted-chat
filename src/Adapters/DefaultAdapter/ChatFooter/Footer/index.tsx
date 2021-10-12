import React, { useState } from 'react';
import { Attachment } from '../../../../@types/Attachment';

import { ChatProps } from '../../../../@types/ChatProps';
import { SendMessage } from '../../../../@types/SendMessage';
import FilePicker from '../../../../libs/FilePicker';

import {
  Container,
  ButtonAction,
  ContainerLeftAction,
  PlusIcon,
  InputMessage,
  ButtonSend,
  ContainerRightAction,
  IconSend,
  ButtonAudio,
  IconAudio,
} from './styles';

const ChatFooter: React.FC<ChatProps> = (props) => {
  const { adapter } = props;
  console.log('renderizou ChatFooter')
  const [message, setMessage] = useState('');
  const [attachment, setAttachment] = useState<Attachment | undefined>();

  const _onSendMessage = () => {
    const messageToSend: SendMessage = {
      attachment: attachment,
      text: message,
    }

    adapter.onSendMessage && adapter.onSendMessage(messageToSend);
    setMessage('');
    setAttachment(undefined);
  }

  const pickFile = async () => {
    const file = await FilePicker.pickFile();
    setAttachment(file);
  }

  if (adapter.hideFooter(props)) {
    return null;
  }

  const renderRightAction = () => {
    if (message.length > 0 || attachment) {
      return (
        <ButtonSend onPress={_onSendMessage}>
          <IconSend />
        </ButtonSend>
      )
    }

    return (
      <ButtonAudio>
        <IconAudio />
      </ButtonAudio>
    )

  }

  return <Container >
    <ContainerLeftAction>
      <ButtonAction onPress={pickFile}>
        <PlusIcon />
      </ButtonAction>
    </ContainerLeftAction>

    <InputMessage value={message} onChangeText={setMessage} placeholder="Digite uma mensagem..."></InputMessage>

    <ContainerRightAction>
      {renderRightAction()}
    </ContainerRightAction>
  </Container>;
}

export default ChatFooter;
