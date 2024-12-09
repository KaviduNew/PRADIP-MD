const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "", //put your session id
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/JCByNJ4/adb435400eafa402.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*🤫 Hello I am kavidu rasanga*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",  //true or false
MODE: process.env.MODE || "private", //private or public
AUTO_VOICE:"false" //true or false
};
