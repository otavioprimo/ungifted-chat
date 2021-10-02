export enum MessageStatus {
  PENDING = 'PENDING',
  SENT = 'SENT',
  RECEIVED = 'RECEIVED',
  READED = 'READED'
}

interface Message {
  _id: string;
  text: string;
  video?: string;
  image?: string;
  date: Date;
  status: MessageStatus,
  user: {
    _id: string;
    name?: string;
    avatar?: string;
  }
}

export default Message;
