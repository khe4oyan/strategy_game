// classes
import BoardCell from "./BoardCell.js";
import Person from "./Person.js";

// db
import gameInitSQL from "../database/game/gameInit.sql.js";

// config 
import characters from "../config/characters.js";

class Room {
  constructor(socket, p1, p2, p1Persons, p2Persons, removeQueueId) {
    console.log("====== [Room constructor]:", p1, p2);

    this.p1 = p1;
    this.p2 = p2;
    this.turn = p1;
    this.isGameFinished = false;
    this.board = this.#initBoard();
    this.#initPersons(p1Persons, p2Persons);
    this.#afterCreateRoom(socket, removeQueueId);
  }

  getCell(i, j) {
    try {
      return this.board[i][j];
    } catch (error) {
      return null;
    }
  }

  async #afterCreateRoom(socket, removeQueueId) {
    const result = await gameInitSQL(this);
    
    await pool.execute("DELETE FROM queue WHERE id = ?", [removeQueueId]);

    if (result) {
      const gameDataJSON = JSON.stringify({
        id: result.roomId,
        board: this.board,
        players: {
          p1: this.p1,
          p2: this.p2,
        },
        turn: this.turn,
      });

      const opponentId = ((socket.id === this.p1) ? this.p2 : this.p1);

      // socket.emit("gameFoundAndStart", gameDataJSON);
      // io.to(opponentId).emit("gameFoundAndStart", gameDataJSON);

      io.to(this.p1).emit("gameFoundAndStart", gameDataJSON);
      io.to(this.p2).emit("gameFoundAndStart", gameDataJSON);
    } else {
      socket.emit("message", "Cant created room");
    }
  }

  #initBoard() {
    const boardSize = 8;
    const board = [];

    for (let i = 0; i < boardSize; ++i) {
      const line = [];

      for (let j = 0; j < boardSize; ++j) {
        line.push(new BoardCell());
      }

      board.push(line);
    }

    return board;
  }

  #initPersons(p1Persons, p2Persons) {
    // initializing players persons

    // player 1 init
    for (let i = 0; i < p1Persons.length; ++i) {
      const ind = i + 2;
      this.board[0][ind].person = new Person(this.p1, ...characters[p1Persons[i]]);
    }

    // player 2 init
    for (let i = 0; i < p2Persons.length; ++i) {
      const ind = i + 2;
      this.board[7][ind].person = new Person(this.p2, ...characters[p2Persons[i]]);
    }
  }
}

export default Room;