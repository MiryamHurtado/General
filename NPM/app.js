var z = "Miryam";
console.log("Hola "+z);

const http = require("http");
const server = http.createServer((req,res) => {
    res.end("Respuesta a tu solicitud v2 Miryam")
})

const puerto = 3000;
server.listen(puerto, () =>{
    console.log("Escuchando Solicitud")
})