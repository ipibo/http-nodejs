// //import { WebSocketServer } from 'ws';
// import WebSocket, { WebSocketServer } from 'ws';

// const wss = new WebSocketServer({ port: PORT });

// console.log('server started')

// wss.on('connection', function connection(ws) {
//     ws.on('message', function message(data) {
//       console.log('received: %s', data);
//       ws.send(`I received the data ${data} from you`)
//   //    wss.broadcoast(`hahaha lol ${data}`)
//       console.log(wss.clients)
//     });
  
//     ws.send('something');
//   });






import WebSocket, { WebSocketServer } from 'ws';
const PORT = process.env.PORT || 1122
const wss = new WebSocketServer({ port: PORT });

wss.on('connection', function connection(ws) {
    ws.on('message', function message(data, isBinary) {
        wss.clients.forEach(function each(client) { 
        if (client.readyState === WebSocket.OPEN) {
            client.send(data, { binary: isBinary });
        }
        });
    });
});

/*



wss.on('connection', function connection(ws) {
  ws.on('message', function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });
});





wss.broadcast = function broadcast(msg) {
    console.log(msg);
    wss.clients.forEach(function each(client) {
        client.send(msg);
    });
};
*/

