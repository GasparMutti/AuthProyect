import server from "./server.js";
import "./database.js";

server.listen(4000, () => console.log("Server listen on port", 4000));
