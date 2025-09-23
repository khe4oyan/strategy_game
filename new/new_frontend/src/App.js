// libs
import { useDispatch } from "react-redux";
import { useState } from "react";

// config
import Socket from './config/socket';

// components
import EnterGame from "./components/EnterGame/EnterGame";

// slices
import { setUserId } from './store/slices/user.slice.js'


// styles
import './app.css';

function App() {
	const [isSocketConnected, setIsSocketConnected] = useState(-1);

	const dispatch = useDispatch();

	const onEnterGame = () => {
		setIsSocketConnected(0);

		Socket.connect(
			() => { setIsSocketConnected(1); },
			() => { setIsSocketConnected(2); }
		);

		Socket.on("getUserId", (data) => {
			dispatch(setUserId(data));
		});
	}

	return (
		<div>
			{
				isSocketConnected === -1 ?
				<div>
					<button onClick={onEnterGame}>Enter game</button>
				</div> :
				isSocketConnected === 0 ? <p>Connecting to server..</p> :
				isSocketConnected === 1 ? <EnterGame /> :
				isSocketConnected === 2 && <p>Connection failed</p>
			}
		</div>
	);
}

export default App;