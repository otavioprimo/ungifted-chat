type AttachmentType = 'video' | 'image';

export interface Attachment {
  duration?: number;
  type: AttachmentType,
  uri: string;
  width: number;
  height: number;
}
