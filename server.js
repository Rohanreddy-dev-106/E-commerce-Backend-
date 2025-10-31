import { server } from "./index.js";
import { ConnectTOmongoDb } from "./src/config/mongodb.js";

const PORT =8080;

server.listen(PORT,()=>{
    console.log(`Server is started at POTE ${PORT}......`)
      ConnectTOmongoDb()
});