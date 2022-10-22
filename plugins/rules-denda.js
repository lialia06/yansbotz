let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} RULES ${htka}

 > BANNED + DENDA 5K :
┃• Spam Chat
┃• Spam Call
┃• Spam SMS
┃• Menghina Bot

┃> Note : Jika Tidak Membayar Denda
┃> Maka Bot Akan Banned User Permanen dan Teror virus
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Video', url: 'https://l.top4top.io/m_2479na4o71.mp4'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.tags = ['info']
handler.command = /^bandenda$/i

export default handler


//BISA KALIAN GANTI BEBAS AJA, HAPUS? GPP