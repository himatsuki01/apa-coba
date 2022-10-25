import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { text }) => {
let name = m.pushName || conn.getName(m.sender)

let user = global.db.data.users[m.sender]
let wibu = `${global.hwaifu}`

let thumb = await(await fetch(wibu)).buffer()
user.afk = + new Date
user.afkReason = text
 conn.sendButtonDoc(m.chat, `${conn.getName(m.sender)} Sᴇᴅᴀɴɢ Aғᴋ Dᴇɴɢᴀɴ Aʟᴀsᴀɴ ⬋`, `⬕ ${text ? ': ' + text : ''}` , 'Jangan Ganggu Ya', 'huuuuu', m,  { contextInfo: { externalAdReply: { showAdAttribution: true,
        mediaUrl: "https://www.facebook.com/profile.php?id=100086539160286",
        mediaType: "VIDEO",
        description: "https://www.facebook.com/profile.php?id=100086539160286",
        title: 'кคguм¡ Ъσт мd',
        body: wm,
        thumbnail: thumb,
        sourceUrl: sgc
    }
    } })
            }
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler