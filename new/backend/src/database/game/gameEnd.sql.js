// mysql
import pool from "../../config/mysql.js";

/**
 * 
 * @param roomId - room SQL id
 */
export default async function gameEnd(roomId) {
  // change room status to finished
  // set board to null (for memory optimize)
  // if game is with unregistered users - hide it. (in feature - delete)

  try {
    const [rows] = await pool.execute("SELECT * FROM room WHERE ID = ?", [roomId]);

    if (rows.length > 0) {
      const [rows_2] = await pool.execute("UPDATE room SET board = null, isGameFinished = 1 WHERE ID = ?", [roomId]);
      if (rows_2.affectedRows > 0) {
        return 1;
      } else {
        return 2;
      }
    } else {
      return 0;
    }
  } catch (error) {
    return null;
  }
}