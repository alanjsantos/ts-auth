import { createConnection } from "typeorm";

createConnection().then(() => console.log('Successfully coonected whit database'));