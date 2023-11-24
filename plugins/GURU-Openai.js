import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, match, args }) => {
    if(!args[0]) throw 'ارسل الامر متبوع بالسؤال الذي تريدني ان اجيب عليه'
    await m.reply('جاري الاجابة...')
    let res = await fetch(`https://vihangayt.me/tools/chatgpt?q=${text}`)
    let open = await res.json()
    let ai = await open.data
    await m.reply(ai)
  }
handler.command = ["gpt", "ai"]
export default handler
