import { Attachment } from "./Attachment";

export interface SendMessage {
  attachment?: Attachment;
  text?: string;
}
