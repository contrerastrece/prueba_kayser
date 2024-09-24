/*
Crea un backend usando Node.js y Express que permita consumir una API externa
(como MockAPI) para manejar una lista de usuarios. El backend debe tener dos
endpoints principales:
1. GET /users: Realiza una petición a la API externa para obtener una lista de
usuarios y devuelve el resultado.
2. POST /users: Recibe un objeto de usuario desde el cliente, lo envía a la API
externa para crear un nuevo usuario, y devuelve la respuesta de la API.
Requisitos:
• Debes usar Node.js con el framework Express.
• Usa axios o node-fetch para interactuar con la API externa.
• Los datos de los usuarios deben ser obtenidos desde una API pública como
MockAPI.
• El backend debe estar bien estructurado, manejando rutas y controladores.
Response:
{
"id": "1",
"name": "Luis Ramirez",
"email": "luis.ramirez@gmail.com",
"createdAt": "2023-09-20T12:00:00.000Z"
}
*/

import express from "express";
import userRouter from './routes/index.js'

const app = express();
const port = 8000;
app.use(express.json());
app.use(userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
