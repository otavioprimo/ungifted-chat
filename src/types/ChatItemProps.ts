import { ChatProps } from "./ChatProps";
import Message from "./Message";

interface ChatItemProps {
  chatProps: ChatProps;
  index: number;
  item: Message;
}

export default ChatItemProps;
