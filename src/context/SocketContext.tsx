import React, { useEffect, useState, createContext } from "react";

const ws = new WebSocket("ws://localhost:3005");

export const SocketContext = createContext(ws);

interface ISocketProvider {
  children: React.ReactNode;
}

export const SocketProvider = (props: ISocketProvider) => (
  <SocketContext.Provider value={ws}>{props.children}</SocketContext.Provider>
);
