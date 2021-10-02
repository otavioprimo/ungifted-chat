import Message from "../types/Message";

const isPreviousMessageSameUSer = (
  currentMessage: Message,
  previousMessage?: Message
): boolean => {
  return currentMessage.user._id === previousMessage?.user._id;
};

export default isPreviousMessageSameUSer;
