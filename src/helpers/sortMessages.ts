import Message from "../@types/Message";

const sortMessages = (messages: Message[]) => {
  return messages.sort((messageA, messageB) =>
    messageA.date > messageB.date ? -1 : 1
  );
};

export default sortMessages;
