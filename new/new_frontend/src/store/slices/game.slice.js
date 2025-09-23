// libs
import { createSlice } from "@reduxjs/toolkit";

const boardInit = () => {
  const board = [];

  for (let i = 0; i < 8; ++i) {
    const line = [];
    for (let j = 0; j < 8; ++j) {
      line.push(null);
    }
    board.push(line);
  }

  return board;
}

const initState = () => {
  return {
    board: boardInit,
    opponentId: null,
    isGameOver: false,
    turn: null,
    roomId: null,
  }
}

const gameSlice = createSlice({
  name: "gameSlice",

  initialState: initState(),

  reducers: {
    setBoard(state, { payload }) {
      state.board = payload;
    },

    setTurn(state, { payload }) {
      state.turn = payload;
    },

    setIsGameOver(state, { payload }) {
      state.isGameOver = payload;
    },

    setOpponentId(state, { payload }) {
      state.opponentId = payload;
    },

    setRoomId(state, { payload }) {
      state.roomId = payload;
    },

    resetAll(state) {
      const initStates = initState();

      state.board = initStates.board;
      state.opponentId = initState.opponentId;
      state.isGameOver = initStates.isGameOver;
      state.turn = initStates.turn;
      state.roomId = initStates.roomId;
    }
  },
});


export default gameSlice.reducer;
export const {
  setBoard,
  setTurn,
  setIsGameOver,
  setOpponentId,
  setRoomId,
  resetAll,
} = gameSlice.actions;