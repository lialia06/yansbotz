let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `📮 *SC ADA DI LINK BAWAH INI*

Atau Bisa Lewat Link Dibawah Ini :
https://lynk.id/ytta
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*YANS BOTZ GITHUB*', 'status@broadcast') 
}
handler.help = ['github']
handler.tags = ['info']
handler.command = /^(github)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 25

export default handler 