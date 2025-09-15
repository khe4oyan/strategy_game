// libs
import { useEffect, useState } from 'react';

// components
import Cell from '../Cell/Cell';

// config
import Socket from '../../config/socket';

// styles
import classes from './styles.module.css';

export default function Board() {
  const [boardData, setBoardData] = useState(initBoard);
  const [isShowPersonsMenu, setIsShowPersonsMenu] = useState(false);
  const [personsMenu, setPersonsMenu] = useState([]);
  const [selectedPersons, setSelectedPersons] = useState([0, 0, 1, 2]);
  const [showedModules, setShowedModules] = useState([]);
  const [turn, setTurn] = useState(null);
  const [roomId, setRoomId] = useState(null);
  // const [moves, setMoves] = useState([]);

  useEffect(() => {
    Socket.emit("play");

    Socket.on("showPersons", (data) => {
      setIsShowPersonsMenu(true);
      setPersonsMenu(JSON.parse(data));
    });

    Socket.on("gameFoundAndStart", (dataJSON) => {
      const data = JSON.parse(dataJSON);
      console.log(data);
      setBoardData(data.board)
      setTurn(data.turn);
      setRoomId(data.roomId);
    });

    Socket.on("showModules", (data) => {
      setShowedModules(JSON.parse(data));
    });

    Socket.on("gameEndResult", (data) => {
      console.log(data);
      setBoardData(initBoard());
      setTurn(null);
      setRoomId(null);
    });

    Socket.on("turnChange", (data) => {
      setTurn(data);
    });

    Socket.on("canceledPlay", () => {
      // TODO: canceled game localy
      console.log("Game was canceled");
    });

    Socket.on("selectModule", (data) => {
      // TODO: set where can use module positions on board
    });

    Socket.on("setBoard", (data) => {
      setBoardData(JSON.parse(data));
    });

    Socket.on("message", (data) => {
      console.log(data);
    });
  }, []);

  const hideModal = () => {
    setIsShowPersonsMenu(false);
  }

  const playButton = () => {
    Socket.emit("play", JSON.stringify(selectedPersons));
    hideModal();
  };

  return (
    <>
      <div className={classes.root}>
        {boardData.map((line, i) =>
          line.map((cellData, j) =>
            <Cell
              key={`${i} ${j}`}
              data={cellData}
              i={i}
              j={j}
            />
          )
        )}
      </div>
      <p>Turn: {turn}</p>
      <p>Room ID: {roomId}</p>

      {
        showedModules.map((module, ind) =>
          <button key={ind}>
            {module?.title}
          </button>
        )
      }

      {
        isShowPersonsMenu &&
        <div className={classes.personsMenu}>
          {personsMenu.map((person, ind) =>
            <button className={classes.person} key={person.name} onClick={() => setSelectedPersons(prev => [...prev, ind])}>
              {person.name} (HP: {person.hp})
            </button>
          )}

          <div>
            <button onClick={hideModal}>cancel</button>
            <button onClick={playButton}>play</button>
          </div>
        </div>
      }
    </>
  )
}

const initBoard = () => {
  const board = [];

  for (let i = 0; i < 8; ++i) {
    const line = [];
    for (let j = 0; j < 8; ++j) {
      line.push(null);
    }
    board.push(line);
  }

  return board;
};