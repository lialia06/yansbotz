import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix }) => {

    let img = fs.readFileSync('./thumbnail.jpg');
    let img2 = 'https://telegra.ph/file/3a9e9f082f9b2c7463551.jpg'
    return conn.sendButton(m.chat, 'Scan QR Di atas\n❏ Donasi minimal 1K:v', donate, img2, [["MENU", usedPrefix + "menu"], ["OWNER", usedPrefix + "owner"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://g.top4top.io/m_2479d4dk71.mp4",
                mediaType: "VIDEO",
                title: 'Donasi To Yans Botz',
                body: bottime,
                previewType: 0,
                thumbnail: img
            }
        }
    })
}
handler.help = ['donasi']

handler.tags = ['info']

handler.command = /^(donasi|donate)$/i


export default handler