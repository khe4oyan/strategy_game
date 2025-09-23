// libs
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// components
import Cell from '../Cell/Cell';

// config
import Socket from '../../config/socket';

// styles
import classes from './styles.module.css';

export default function Board() {
  const [showedModules, setShowedModules] = useState([]);
  const {
    board,
    // roomId,
    turn,
    opponentId,
  } = useSelector(s => s.gameSlice);

  const { userId } = useSelector(s => s.userSlice);

  useEffect(() => {
    // TODO - add socket event listneres such as showModules, etc.
  }, []);


  const onResign = () => {
    Socket.emit("resign");
  }

  const onCellClick = (i, j) => {
    // is available use cell - useModule
    // check persons's owner - if is player then call selectPerson
    // selected cell is empty - clear selected modules and person

    const cellData = board[i][j];

    if (cellData?.isCanUseModule) {
      const usingData = {
        from: { i, j },
        to: { i: 10, j: 10 }
      };
      Socket.emit("useModule", JSON.stringify(usingData));
    } else if (board[i][j].person !== null) {
      console.log(board[i][j].person?.playerId, userId);
      
      if (board[i][j].person?.playerId === userId) {
        const usingData = {
          from: { i, j }
        };
        Socket.emit("selectPerson", JSON.stringify(usingData));
      } else {
        console.warn("Person's owner is not you");
      }
    } else {
      // TODO: clear all selected datas
      console.log("Clear all selected datas");
    }
  };

  return (
    <>
      <p>{opponentId}</p>
      <div className={classes.root}>
        {board.map((line, i) =>
          line.map((cellData, j) =>
            <Cell
              key={`${i} ${j}`}
              data={cellData}
              i={i}
              j={j}
              onCellClick={onCellClick}
            />
          )
        )}
      </div>
      <p>Turn: {turn}</p>
      <button onClick={onResign}>resign</button>
      {
        showedModules.map((module, ind) =>
          <button key={ind}>
            {module?.title}
          </button>
        )
      }
    </>
  )
}
