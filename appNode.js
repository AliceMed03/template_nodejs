//cria uma constante e recebe a biblioteca http
const http = require('http');
//cria uma constante que recebe o endereço local da minha maquina e a porta
const hostname = '127.0.0.1'; //loacalhost
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Bem vinda Alice');
});
//servidor executando na porta....
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});