import * as express from 'express';
const db = require('./client/db');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Exercicio de CRUD
// Utilizando as 5 funções encontradas em db, crie 5 endpoints para o recurso "usuario".
// (Leia em README para saber mais sobre as funções)
/* 
    O recurso usuario deve ter as seguintes propriedades com seus respectivos tipos:
    { 
        name: String, 
        email: String, 
        password: String 
    }
*/

/*const user = {
  name: "Joana",
  email: "j.ana@gmail.com",
  password: "abc.123#"
}
const createdItem = db.create(user)
console.log(createdItem)

const id = 1
const item = db.findById(id)
console.log(item)
*/

const id = 1
const user = {
    name: "Joana Maria",
    email: "jmaria@gmail.com",
    password: "123#abc"
}
const updatedItem = db.updateById(id, user)
console.log(updatedItem)

/*const idd = 1
const removedItem = db.removeById(idd)
console.log(removedItem)

const items = db.findAll()
console.log(items)*/


app.listen(port, () => {
  console.log(`Esse servidor está rodando em ${port}`);
});
