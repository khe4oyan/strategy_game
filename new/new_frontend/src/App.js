// libs
import { useState, useEffect } from "react";

// config
import Socket from './config/socket';

// components
import Board from "./components/Board/Board";

// styles
import './app.css';

function App() {
	const [isSocketConnected, setIsSocketConnected] = useState(-1);

	useEffect(() => {
		Socket.connect(() => {
			setIsSocketConnected(1);
		});
	}, []);
	
	return (
		<div>
			{isSocketConnected === -1 && <p>Connecting to server..</p>}
			{isSocketConnected === 1 && <Board />}
		</div>
	);
}

export default App;