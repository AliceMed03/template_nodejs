const express = require('express')
const app = express()
const port = 3000
//aplicação pelo metodo get vai buscar a rota localhost:3000/
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