import ChatAdapterDefault from "./ChatAdapterDefault";
import ChatTypes from "./ChatTypes";

export interface ChatProps {
  userRoles: string[],
  chatType: ChatTypes,
  adapter: ChatAdapterDefault;
  userId: string;
}
