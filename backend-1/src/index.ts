
import { WebSocketServer } from 'ws';
import { GameManager } from './GameManager';

const wss = new WebSocketServer({ port: 8080 });

const gameManager = new GameManager();

wss.on('connection', function connection(ws) {

  //  adding user
  gameManager.addUser(ws);

  //  removing user
  ws.on("desconnect", () => gameManager.removeUser(ws)); 

})
