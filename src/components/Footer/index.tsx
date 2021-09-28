import React, { useState, useMemo } from 'react';
import { ChatProps } from '../../types/ChatProps';

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

interface Props {
  chatProps: ChatProps
}

const Footer: React.FC<Props> = ({ chatProps }) => {
  console.log('renderizou footer')
  const {adapter} = chatProps;
  const [message, setMessage] = useState('');

  const _onSendMessage = () => {
    adapter.onSendMessage && adapter.onSendMessage(message);
  }

  if (adapter.hideFooter(chatProps)) {
    return null;
  }

  const renderLeftAction = () => {
    if (message.length > 0) {
      return (
        <ButtonSend disabled={message.length === 0} onPress={_onSendMessage}>
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
      <ButtonAction>
        <PlusIcon />
      </ButtonAction>
    </ContainerLeftAction>

    <InputMessage onChangeText={setMessage} placeholder="Digite uma mensagem..."></InputMessage>

    <ContainerRightAction>
      {renderLeftAction()}
    </ContainerRightAction>
  </Container>;
}

export default React.memo(Footer);
