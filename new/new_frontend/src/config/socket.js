import { io } from "socket.io-client";

class Socket {
  static socket = null;

  static connect(onConnect) {
    if (Socket.socket !== null) { return }
    Socket.socket = io("http://192.168.0.104:5000");

    Socket.socket.on("connect_error", (error) => {
      console.error("Connection failed:", error.message);
      Socket.disconnect();
    });

    Socket.socket.on("connect", () => {
      onConnect();
    });
  }

  static disconnect() {
    if (Socket.socket === null) { return }
    Socket.socket.removeAllListeners();
    Socket.socket.disconnect();
    Socket.socket = null;
  }

  static on(event, listener) {
    if (Socket.socket === null) {
      console.warn("[1] Cant add event", event);
      return
    }
    Socket.socket.on(event, listener);
  }

  static emit(event, message) {
    if (Socket.socket === null) {
      console.warn("[2] Cant emit", event, message);
      return
    }
    Socket.socket.emit(event, message);
  }

  static to(userId, data) {
    if (Socket.socket === null) {
      console.warn("[3] Cant emit", userId, data);
      return
    }
    io.to(userId).emit(data);
  }
}

export default Socket;
