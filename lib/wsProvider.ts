
"use client"

import {creatStore} from 'zustand/vanilla'
import {io,Socket} from 'socket.io-client'
import Peer from 'peerjs'
import {v4 as uuidV4} from 'uuid'
import{createContext,useEffect,useRef} from 'react'
import Peer from 'peerjs'
//
//
// interface WS{
//   ws: <Peer>;
//   peers: <Peer> ;
//   stream: <MediaStream>;
// }
//
// export type wsState: WS;
//
export const URL = process.env.URL || "http://localhost:4000"

const ws: Socket<ServerToClientEvents, ClientToServerEvents> = io(URL,{
  reconnectionDelayMax: 10000,
})

//initial state we want me, peers, stream/
//
// export const initialState = wsState
//
const WsStoreContext = createContext(null,)

export const wsProvider = ({
  {children}: {

}
})=>{
const storeRef = useRef()
  if(!storeRef.current){
    storeRef.current = createWsStore()
  }
  return (
  <WsStoreContext.Provider value={storeRef.current}>
      {children}
  </WsStoreContext.Provider>
  )
}

export const useWsStore = <T,>(
selector: (store: WsStore) => T,
): T =>{
    const WsStoreContext = useContext(WsStoreContext)

    if(!WsStoreContext){
      throw new Error(`useWsStore must be use within WsStoreProvider`)
    }
    return useStore(WsStoreContext,selector)
  }






