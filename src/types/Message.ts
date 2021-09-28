interface Message {
  _id: string;
  text: string;
  video?: string;
  image?: string;
  user: {
    _id: string;
    name?: string;
    avatar?: string;
  }
}

export default Message;
