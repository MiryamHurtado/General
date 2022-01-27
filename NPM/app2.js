const express = require('express');
const app = express();

const port = 3002;

app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) =>{
  res.send('Mi respuesta express')
})

app.get('/mantenimiento', (req, res) =>{
res.send('Esta página se encuentra en mantenimiento')
})

app.use((req, res, next) =>{
res.status(404).sendFile(__dirname + "/public/404.html")
})

app.listen(port, () => {
  console.log('Servidor en el puerto', port)
})

