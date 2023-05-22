import React, { useEffect, useState, createContext } from "react";

const ws = new WebSocket("ws://103.186.65.172:3005");

export const SocketContext = createContext(ws);

interface ISocketProvider {
  children: React.ReactNode;
}

export const SocketProvider = (props: ISocketProvider) => (
  <SocketContext.Provider value={ws}>{props.children}</SocketContext.Provider>
);
