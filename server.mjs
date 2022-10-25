import { createServer } from 'http';

createServer((req, res) => {
  res.write('Goedemiddag Ibo');
  res.end();
}).listen(process.env.PORT);
