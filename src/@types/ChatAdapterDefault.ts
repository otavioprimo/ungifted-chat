import React from "react";
import ChatItemProps from "./ChatItemProps";
import { ChatProps } from "./ChatProps";
import ChatTypes from "./ChatTypes";
import { SendMessage } from "./SendMessage";

interface ChatAdapterDefault {
  chatType: ChatTypes;
  hideFooter: (props: ChatProps) => boolean;
  renderChatFooter: (props: ChatProps) => React.ReactElement;

  renderContainer: (props: ChatItemProps) => React.ReactElement;
  renderBubble: (props: ChatItemProps) => React.ReactElement;
  renderText: (props: ChatItemProps) => React.ReactElement;
  renderFooter: (props: ChatItemProps) => React.ReactElement;
  renderTime: (props: ChatItemProps) => React.ReactElement;
  renderStatus: (props: ChatItemProps) => React.ReactElement;
  renderContainerAttachment: (props: ChatItemProps) => React.ReactElement;
  renderImage: (props: ChatItemProps) => React.ReactElement;
  renderVideo: (props: ChatItemProps) => React.ReactElement;
  renderAvatar: (props: ChatItemProps) => React.ReactElement;

  onReplyMessage?: (props: ChatItemProps) => void;
  onLongPressMessage?: (props: ChatItemProps) => void;

  onSendMessage?: (params: SendMessage) => void;
}

export default ChatAdapterDefault;
