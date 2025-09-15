// classes
import Room from '../../classes/Room.js';

// mysql
import pool from "../../config/mysql.js"

export default async function getUnfinishedRoom(playerId) {
  try {
    // get room by playerId and not finished, parse with prototype and return
    const [rows] = await pool.execute("SELECT * FROM room WHERE (player_1 = ? OR player_2 = ?) AND isGameFinished = 0", [playerId, playerId]);

    if (rows.length > 0) {
      const room = JSON.parse(rows[0]);
      room.__proto__ = Room.prototype;
      return room;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}