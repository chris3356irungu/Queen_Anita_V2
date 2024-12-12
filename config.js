//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "25404024549";
global.owner = process.env.OWNER_NUMBER || "254711246642";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0ZRblYxYThJUWpTRys5Q0lDa2w0Y3lSRTAzUE5CL3hGVGdyN05URU9FMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0FZOHNjNmlUOEhNdHRWczU5RVl3dUhiaW92cGptV0pjQzdwT1hHVkNubz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRWZaMGo4RnlvSThVQ0NpUXQxdTAxa0ZwZ1ZQeUNrQ3ZuZzA4ZTBDbm5nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5UWJ3M1R1RU5JMmwzd0llRTM2UXRjQ3V5cVFkdWZleWJ4RWIrMlJTVkRJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlIU2hxQjdNOTdMaUNZK3FDdVFydUtoNy9YVlpnOVpxS3R6K05LdU03Vlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFXRkxEV0lDbnZhRE9YemZJWGx0QlVPQ3FWNXo4SjRvS2creXRZRHp1MUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUNXTk02QnRlTi9lRkZ5ZTJNUDM4NjBocllTaSszdHEvZzlFUkw2ZjBIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXdUT1FYM3BadFhQdmlleTVDZ1lNV0dKa2IxL0hVOElTd2RPTTY3NzlsMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQ1Sk9xWitxUTU0Mys3a0w5V0ZvNHpjdXlGVHk2cS9sT3NFWWthdURKSzRjSGMyZmVpMDV6QndvcXFLa3FvRzZnbGppb2ZxUGQ5eDIyZjZqaWRZY2lRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6ImNNZlROK1dERHdnZjVkYWFJSmRLMnZHQU11ckIxVzBZQ3RYNDFjU2luRU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ijl1eVZvMDd0U0RtSXNLd1dVVWZzeEEiLCJwaG9uZUlkIjoiYjRiNDNlMzktZDc4MC00YzA5LWJhMGUtNDY3NjU2NGE0NWVkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndhSm8rRmh0QzVlU2pqYllSVCtCT05kOEVhaz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQjgxYjZidW1GcVpKeE04dE5nYzhvRHZnYmY4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXZwaU0wRkVMQ1k3TG9HR0FzZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZUIvK3J3MTB3UFRkbHVDbFFrUm96OFhlNXFEMXhhL0gzMGNDV1dDZkVWTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiT0JPcllzem8wWFhvVEo0UXF5QUNKUjFWaUxpWlZXbHFwTzhCY3Y2S2ZVS1Bpcm9RUUJJY080eERVVHM5enl1REpRdUVCQUx3dmx1T0JJcTY1RG80Q3c9PSIsImRldmljZVNpZ25hdHVyZSI6ImZNc0h2YWVtODFrclhFMVJZcittMUw5eE56VmhsSXVQY1BXc1VWakZMQzB6a3dnOE1TV0kxdnFBNzdBcVZuNFdSMVIvRDM3cjhNK1RHNWlXK1RoMmd3PT0ifSwibWUiOnsiaWQiOiIyNTQ3MTEyNDY2NDI6ODJAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzExMjQ2NjQyOjgyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhnZi9xOE5kTUQwM1piZ3BVSkVhTS9GM3VhZzljV3Z4OTlIQWxsZ254RlQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQwMjAxNTgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTTFGIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`CHRIS™`",
  author: process.env.PACK_AUTHER || "V2",
  packname: process.env.PACK_NAME || "CHRIS",
  botname: process.env.BOT_NAME || "CHRISKE-V2",
  ownername: process.env.OWNER_NAME || "CHRIS Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
