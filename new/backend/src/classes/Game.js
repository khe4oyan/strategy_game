// classes
import Room from "./Room.js";

// db
import popQueueSQL from '../database/queue/popQueue.sql.js';
import addQueueSQL from '../database/queue/addQueue.sql.js';
import removeQueueSQL from '../database/queue/removeQueue.sql.js';
import endGameSQL from '../database/game/gameEnd.sql.js';
import getUnfinishedRoomSQL from '../database/game/getUnfinishedRoom.sql.js'

class Game {
  /**
   * 
   * @param {string} playerId - socket.id
   * @param {Array} playerPersons - array with persons indexes
  */
  static async searchGame(socket, playerPersons) {
    const playerId = socket.id;
    const isOtherPlayerWaitingMatch = await popQueueSQL();

    if (isOtherPlayerWaitingMatch) {
      const [opponentId, opponentPersons] = isOtherPlayerWaitingMatch;
      new Room(socket, playerId, opponentId, playerPersons, opponentPersons, isOtherPlayerWaitingMatch[2]);
    } else {
      const result = await addQueueSQL(playerId, playerPersons);
      socket.emit("message", result);
    }
  }

  static async removeFromQueue(socket) {
    const playerId = socket.id;

    if (await removeQueueSQL(playerId)) {
      socket.emit("canceledPlay");
    } else {
      socket.emit("message", "Cant canceled - Something went wrong");
    }
  }

  static async gameEndByPlayerId(socket, message) {
    const playerId = socket.id;
    
    try {
      const room = await getUnfinishedRoomSQL(playerId);
      const result = await endGameSQL(room.id);
      
      if (result) {
        io.to(playerId === room.p1 ? room.p2 : room.p1).emit("gameEndResult", message);
        socket.emit("gameEndResult", message);
      } else {
        socket.emit("message", "Cant end game");
      }
    } catch (error) {
      console.log("[1] del session error");
    }
  }
};

export default Game;
