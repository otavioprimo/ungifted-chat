
import React, { useState, useImperativeHandle, useCallback, useRef, useMemo } from 'react';
import { FlatList, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import addOrUpdateMessage from '../../helpers/addOrUpdateMessage';
import { ChatProps } from '../../@types/ChatProps';
import Message from '../../@types/Message';
import { Container, ScrollButton, IconScrollToBotton } from './styles';
export interface Props {
  chatProps: ChatProps
}
export interface ChatListRef {
  addMessages: (messages: Message[]) => void;
  addMessage: (message: Message) => void;
}

const ChatList = React.forwardRef<ChatListRef, Props>((props, ref) => {
  console.log('renderizou chat list');

  const listRef = useRef<FlatList>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [showScrollButton, setShowScrollButton] = useState<Boolean>(false);

  useImperativeHandle(ref, () => ({
    addMessages: (messages: Message[]) => {
      setMessages(messages);
    },
    addMessage: (message: Message) => {
      setMessages(previousMessages => addOrUpdateMessage(previousMessages, message));
    },
  }));

  const renderScrollToBottom = useMemo(() => {
    if (!showScrollButton) {
      return null;
    }

    return (
      <ScrollButton style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
      }} onPress={() => listRef.current?.scrollToIndex({ animated: true, index: 0 })}>
        <IconScrollToBotton />
      </ScrollButton>
    )
  }, [showScrollButton])

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (event.nativeEvent.contentOffset.y > 10) {
      setShowScrollButton(true);
    } else if (showScrollButton) {
      setShowScrollButton(false);
    }
  }

  const renderItem = useCallback((data: any) => {
    return props.chatProps.adapter.renderContainer({
      chatProps: props.chatProps,
      index: data.index,
      previousMessage: messages[data.index + 1],
      message: data.item,
      nextMessage: messages[data.index - 1],
    })
  }, [messages])

  const keyExtractor = useCallback((item) => item._id, [])

  return <Container>
    <FlatList
      ref={listRef}
      data={messages}
      inverted
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onScroll={onScroll}
      scrollEventThrottle={160}
    />
    {renderScrollToBottom}
  </Container>;
})

export default ChatList;
