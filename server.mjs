import { WebSocketServer } from 'ws';


console.log(process.env.PORT )

const wss = new WebSocketServer({ port: 1122 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});

