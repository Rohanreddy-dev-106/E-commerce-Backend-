import fs from "fs";
import path from "path";
import winston from "winston";
const fspromices = fs.promises;
// async function Logger(logData, method, url) {
//     logData = new Date().toString() + " " + ":" + method + "[" + url + "]" + "\n";

//     try {
//         await fspromices.appendFile("logg_data.txt", logData)
//     } catch (error) {
//         console.log(error);

//     }
// }
const logger=winston.createLogger({
    level:"info",
    format :winston.format.json(),
    transports:[
        new winston.transports.File({filename:"logg_data.txt"})//new is for  File  class 
    ]
})
function Loggermiddleware(req, res, next) {
    if (!req.url.includes("/signin")) {
        // await Logger(req.body, req.url, req.method)
        logger.info(req.url);
    }
    next()
}
export default Loggermiddleware;



// fs.appendFile("logg_data.txt", logData, (err) => { if (err) { console.log(err) } })