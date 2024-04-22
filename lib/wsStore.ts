import {createStore} from 'zustand'


export const initialState = {
  peerId: string,
  stream?: MediaStream,
  roomId: string,
}
// type PeerState = Record<string, {stream: MediaStream}>
//
// type peerAction = {type: typeof ADD_PEER;
// payload: {peerId: string; stream: MediaStream};}||
// {type: typeof REMOVE_PEER;
// payload: {peerId: string};}
//


export const wsStore = (initState = initialState,)=>{
  return createStore<wsStoreType>()((set))=>({
    ...initState,
    addPeer: (peerId:string,stream: MidiaStream)=> set((state))=>({...state,[state.peerId]: {
      stream: state.stream,
    }}),
    removePeer: (peerId:string)=> set((state))=>({})
  })
}






