// mysql
import gameEndSQL from "../database/game/gameEnd.sql.js";
import getUnfinishedRoom from '../database/game/getUnfinishedRoom.sql.js';

export default async function resignListener(socket) {
  console.log('-------[resign]');
  console.log("id", socket.id);

  const room = await getUnfinishedRoom(socket.id);

  if (!room) {
    socket.emit("message", "Cant resign");
    return;
  }

  const result = await gameEndSQL(room.id);

  switch (result) {
    case 0: {
      socket.emit("message", "Room not found");
      break;
    }
    case 1: {
      socket.emit("gameEndResult", "Opponent Won! You resign");
      if (room.p1 === socket.id) {
        io.to(room.p2).emit("gameEndResult", "You Won! Opponent resign");
      } else {
        io.to(room.p1).emit("gameEndResult", "You Won! Opponent resign");
      }
      break;
    }
    case 2: {
      socket.emit("message", "Game not ended");
      break;
    }

    default: {
      socket.emit("message", "Game not ended: Something went wrong");
    }
  }
}