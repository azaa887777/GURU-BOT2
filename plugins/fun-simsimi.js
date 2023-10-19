import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `اكتب نصا للتحدث معي\nمثال: ${usedPrefix + command} Hola bot*`
await displayLoadingScreen(conn, m.chat, text)
}
handler.help = ['simsimi']
handler.tags = ['General']
handler.command = ['bot', 'simi', 'simsimi'] 
export default handler

async function displayLoadingScreen(conn, from, text) {
    const loadingStages = [];
    let currentStage = "";
  
    for (let i = 0; i < text.length; i++) {
        currentStage += text.charAt(i);
        loadingStages.push(currentStage);
    }
  
    try {
        const { key } = await conn.sendMessage(from, { text: loadingStages[0] });
  
        for (let i = 1; i < loadingStages.length; i++) {
            await conn.relayMessage(from, {
                protocolMessage: {
                    key: key,
                    type: 14,
                    editedMessage: {
                        conversation: loadingStages[i]
                    }
                }
            }, {});
        }
    } catch (error) {
        console.error('Error displaying loading screen:', error);
    }
}
