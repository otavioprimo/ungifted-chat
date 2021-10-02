import { ChatProps } from "./ChatProps";
import Message from "./Message";

interface ChatItemProps {
  chatProps: ChatProps;
  index: number;
  message: Message;
  previousMessage?: Message;
  nextMessage?: Message;
}

export default ChatItemProps;
