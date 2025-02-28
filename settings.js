const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'VAJIRA-MD=xD9XzaoB#pjbZ1W_9sOyxoZhzXYOXXthMccw1gFSdq8Co9qaocHg' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '22395064497' : process.env.OWNER_NUMBER,
N_JID: process.env.N_JID=== undefined ? '‌': process.env.N_JID,    
PREFIX: process.env.PREFIX || '~' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgresql://moudy_ggs4_user:1Tx91xlTiQ7jL2EMPUjVLa9xN4BfhafW@dpg-cusc0ca3esus73fltvs0-a.oregon-postgres.render.com/moudy_ggs4' : process.env.POSTGRESQL_URL,   
MAX_SIZE: 500,
MODE: process.env.MODE === undefined ? 'unbutton' : process.env.MODE,
STATUS_REPLY_MESSAGE: '𝐘𝐎𝐔𝐑 𝐒𝐓𝐀𝐓𝐔𝐒 𝐒𝐄𝐄𝐍 𝐉𝐔𝐒𝐓 𝐍𝐎𝐖 𝐁𝐘 𝐕𝐀𝐉𝐈𝐑𝐀 𝐌𝐃 ✅',    
ALIVE:  process.env.ALIVE  || '> VAJIRA MD'  ,    
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO        
};
