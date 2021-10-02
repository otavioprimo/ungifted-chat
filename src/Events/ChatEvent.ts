import { EventEmitter } from "events";
import { SendMessage } from "../@types/SendMessage";

class ChatEvent {
  private event: EventEmitter;
  private eventName = "onMessage";
  constructor() {
    this.event = new EventEmitter();
  }

  public sendMessage(message: SendMessage): void {
    this.event.emit(this.eventName, message);
  }

  public onMessage(listener: (message: SendMessage) => void) {
    this.event.addListener(this.eventName, (data) => {
      listener(data);
    });
  }

  public destroyAll() {
    this.event.removeAllListeners();
  }
}

export default new ChatEvent();
