import Message from "../types/Message";
import changeMessageIfNeeded from "./changeMessageIfNeeded";

const addOrUpdateMessage = (
  currentMessages: Message[],
  newMessage: Message
): Message[] => {
  let foundItem = false;
  const copiedMessages = [...currentMessages];
  for (const [index, el] of copiedMessages.entries()) {
    if (el._id === newMessage._id) {
      foundItem = true;
      copiedMessages[index] = changeMessageIfNeeded(el, newMessage);
      break;
    }
  }

  if (!foundItem) copiedMessages.push(newMessage);
  return copiedMessages;
};

export default addOrUpdateMessage;
