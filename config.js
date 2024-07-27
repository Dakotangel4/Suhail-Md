const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349020561787";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349020561787";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349020561787,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_45_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4NSxcbiAgICAgICAgODcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDU2LFxuICAgICAgICA4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDQsXG4gICAgICAgIDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDYsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzLFxuICAgICAgICA1NixcbiAgICAgICAgMTg3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMzcsXG4gICAgICAgIDU0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkwLFxuICAgICAgICA1NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTEzLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDUxLFxuICAgICAgICAxOSxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgODUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDEyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTExLFxuICAgICAgICA0LFxuICAgICAgICA4NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgODgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDUyLFxuICAgICAgICAzOSxcbiAgICAgICAgMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk1LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDMxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE0LFxuICAgICAgICAzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDc5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMSxcbiAgICAgICAgNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDk4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlZYNGtZY3daSXJGcVU3MlpKOHg3N1lIa3BGaXoyZ3NtV1ltUTlMa3orOUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImxmYkx4ZDBnUWRpejE4OWV0Y3M4aFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDU5MzdhMTgtMTAwNi00NzA3LWE2NTQtYjMxODFmNzQ5OWIzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUwLFxuICAgICAgMjMxLFxuICAgICAgNzQsXG4gICAgICAxNjQsXG4gICAgICAyMTEsXG4gICAgICAxMSxcbiAgICAgIDE4MyxcbiAgICAgIDIwNyxcbiAgICAgIDEwOCxcbiAgICAgIDIwMixcbiAgICAgIDYsXG4gICAgICAyMTUsXG4gICAgICAxMzcsXG4gICAgICAyNDAsXG4gICAgICA1OCxcbiAgICAgIDEyLFxuICAgICAgNjgsXG4gICAgICAxNTIsXG4gICAgICA4OSxcbiAgICAgIDg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2LFxuICAgICAgNzEsXG4gICAgICAxMDUsXG4gICAgICAxNDcsXG4gICAgICAyMTEsXG4gICAgICAxOSxcbiAgICAgIDIxNCxcbiAgICAgIDE3MyxcbiAgICAgIDE3OCxcbiAgICAgIDEwMSxcbiAgICAgIDI1MCxcbiAgICAgIDI1MCxcbiAgICAgIDQzLFxuICAgICAgMjMwLFxuICAgICAgMTQyLFxuICAgICAgMjE3LFxuICAgICAgNjgsXG4gICAgICAyMjcsXG4gICAgICA1MCxcbiAgICAgIDIyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01HZ2s1b0VFSW5xa0xVR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVXFaazZZWStiemZzYXo0STYycG1LUVpqMGdPZXZnNG1KZzRzTFRlbHpEOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKYlN4V0R4c1ljTkFEOXBMN2MvNUVpa2o1WVpydmgvNlc1akhNSVFaV2QyMUZlSHJXVm9GQkVnMEdTdWlhUitjTEtQazFPelgySlBqNE5jYzNXbG9DQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4U2VNdXo2TWw4d0NFRmNuV3hmMHljUmhGTlBKK0xkR0hhUmY2dk9HMFRiZkR3dkRMUVhuQXlnVmprRmJZUFlDSmZyKy91SkFsNWFEbGtlR01rTjFpUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMjA1NjE3ODc6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkJsYXplRlhcIixcbiAgICBcImxpZFwiOiBcIjI0MDc1OTEzOTc0MTgxOTo2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAyMDU2MTc4Nzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjAzNzUxNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZxV1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnFXLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaDU4T1I1K2YvNlZiU2hpU0NubUNWS2xtUlU2am8rVmUrdmFsc0VUOVlRWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTI4NTgzMjMzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGcVguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYamNpTVVkZUVuam5WT0QwL1B5c3RxRjkzZ2JtSXlqNmtQaDgvR251SEdRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMjg1ODMyMzMsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMyw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGcVkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqaHIzTkNzUGwvK2dockhBZ2gxRmd3dUNNeUFCMkRlanUxYTNUM2ljUm1nPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMjg1ODMyMzMsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnFaLmpzb24iOiAie1wia2V5RGF0YVwiOlwiN1oyVlExZUN4MEdUNnROeEZVUlA2aFVTSGtUaXVaV1BjR1VWZEVZd1JYND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTI4NTgzMjMzLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCw0LDVdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjAzNzUwMzkzMVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
