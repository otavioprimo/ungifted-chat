import Message, { MessageStatus } from "../types/Message";

const changeMessageIfNeeded = (
  currentMessage: Message,
  newMessage: Message
): Message => {
  changeValue(currentMessage, newMessage, "status");
  changeValue(currentMessage, newMessage, "image");
  return currentMessage;
};

function changeValue(oldValue: Message, newValue: Message, key: keyof Message) {
  // @ts-ignore
  if (oldValue[key] !== newValue[key]) oldValue[key] = newValue[key];
}

export default changeMessageIfNeeded;
