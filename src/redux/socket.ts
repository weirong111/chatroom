import { io } from "socket.io-client";

const BASE_URL = "https://localhost:5001";

const socket = io(BASE_URL);
export default socket;
