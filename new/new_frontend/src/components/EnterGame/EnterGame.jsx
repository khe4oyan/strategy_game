// libs
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// components
import Board from '../Board/Board';
import SelectPersons from '../SelectPersons/SelectPersons';

// slices
import {
  setBoard,
  setOpponentId,
  setTurn,
  setRoomId
} from '../../store/slices/game.slice.js'

// config
import Socket from '../../config/socket';

// styles
import classes from './styles.module.css';

export default function Gameplay() {
  const [gameplayStatus, setGameplayStatus] = useState("personSelect");
  const [isShowPersons, setIsShowPersons] = useState(false);
  const [persons, setPersons] = useState([]);
  const [gameEndMsg, setGameEndMsg] = useState(null);
  const selectedPersonsState = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    Socket.on("message", (data) => {
      console.log(data);
    });

    Socket.on("disconnect", () => {
      setGameEndMsg("Disconnect from server");
      setGameplayStatus("gameEndResult");
    });

    Socket.on("showPersons", (data) => {
      setPersons(JSON.parse(data));
      setIsShowPersons(true);
    });

    Socket.on("gameFoundAndStart", (dataJSON) => {
      const data = JSON.parse(dataJSON);
      dispatch(setBoard(data.board));
      dispatch(setRoomId(data.id));
      dispatch(setTurn(data.turn));
      dispatch(setOpponentId(data.opponentId));
      setGameplayStatus("game started");
    });

    Socket.on("gameEndResult", (data) => {
      setGameEndMsg(data);
      setGameplayStatus("gameEndResult");
    });

    Socket.on("canceledPlay", () => {
      setGameplayStatus("cenceled");
    });

    Socket.on("setBoard", (data) => {
      dispatch(setBoard(JSON.parse(data)));
    });

    Socket.on("turnChange", (data) => {
      dispatch(setTurn(data));
    });
  }, []);

  // handlers
  const onSelectPerson = () => {
    Socket.emit("play");
  }

  const closePersonsMenu = () => {
    setIsShowPersons(false);
    setGameplayStatus("searching game");
  }

  const onCancel = () => {
    Socket.emit("cancelPlay");
  }

  return (
    <div className={classes.root}>
      {
        isShowPersons &&
        <SelectPersons
          closePersonsMenu={closePersonsMenu}
          persons={persons}
          selectedPersonsState={selectedPersonsState}
        />
      }

      {
        (
          gameplayStatus === "personSelect" ||
          gameplayStatus === "cenceled" ||
          gameplayStatus === "gameEndResult"
        ) &&
        <>
          <button onClick={onSelectPerson}>select persons</button>
          {
            gameplayStatus === "gameEndResult" && <p>{gameEndMsg}</p>
          }
        </>
      }

      {
        gameplayStatus === "searching game" &&
        <>
          <p>Searching game, please wait</p>
          <button onClick={onCancel}>cancel</button>
        </>
      }

      {
        gameplayStatus === "game started" &&
        <Board />
      }
    </div>
  )
}