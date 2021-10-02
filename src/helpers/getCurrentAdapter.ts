import ChatAdapter from "../@types/ChatAdapter";
import defaultAdapter from "../Adapters/DefaultAdapter";
import ChatTypes from "../@types/ChatTypes";
import ChatAdapterDefault from "../@types/ChatAdapterDefault";

const getCurrentAdapter = (chatType: ChatTypes, adapters: ChatAdapter[]):ChatAdapterDefault => {
  let adapter = defaultAdapter;
  if (adapters.length > 0) {
    const currentAdapter = adapters.filter(adapter => adapter.chatType === chatType);
    if (currentAdapter.length > 0) adapter = currentAdapter[0] as ChatAdapterDefault;
  }

  return setUndefinedAdapterPropsWithDefault(adapter);
}

const setUndefinedAdapterPropsWithDefault = (adapter: ChatAdapter): ChatAdapterDefault => {
  for(const defaultKey of Object.keys(defaultAdapter)) {  
    const adapterHasKey = Object.keys(adapter).some(key => key === defaultKey)
    // @ts-ignore
    if (!adapterHasKey) adapter[defaultKey] = defaultAdapter[defaultKey];
  }

  return adapter as ChatAdapterDefault;
}

export default getCurrentAdapter;
