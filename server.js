import { server } from "./index.js";
// import { ConnectTOmongoDb } from "./src/config/mongodb.js";
import mongooseConnection from "./src/config/mongoos.config.js";

const PORT =8080;

server.listen(PORT,()=>{
    console.log(`Server is started at POTE ${PORT}......`)
      mongooseConnection()
});