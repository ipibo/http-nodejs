import { WebSocketServer } from 'ws';
const PORT = process.env.PORT || 1122

const wss = new WebSocketServer({ port: PORT });

console.log('server started')

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
    ws.send(`I received the data ${data} from you`)
    wss.broadcoast(`hahaha lol ${data}`)
  });

  ws.send('something');
});

