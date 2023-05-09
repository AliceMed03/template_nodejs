const express = require('express')
const app = express()
const port = 3000
//aplicação pelo metodo get vai buscar a rota localhost:3000/

//Arquivo com rotas para o cadastro de livros
const livros = require('./routes/livros');
//identificação da rota e da const (require) associada
app.use('/livros',livros);
//a rota /livros retorna a lista dos livros cadastrados em formato json

app.get('/', (req, res) => {
  res.send('Olá Alice!!!')
})

//exemplo relacionado a filmes localhost:3000/filmes
app.use(express.json()); // começa a receber json
app.post('/livros', (req,res)=> {

//const titulo = req.body.titulo;
//const genero = req.body.genero;
const {autor,nome,editora} = req.body;
res.send( `Autor: ${autor} - Nome: ${nome} - Editora: ${editora}, recebido` );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

