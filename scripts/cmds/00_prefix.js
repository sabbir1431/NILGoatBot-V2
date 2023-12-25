module.exports = {
 config: {
	 name: "prefix",
	 version: "1.0",
	 author: "Cliff",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `


██╗░░░██╗░█████╗░███████╗
╚██╗░██╔╝██╔══██╗╚════██║
░╚████╔╝░███████║░░███╔═╝
░░╚██╔╝░░██╔══██║██╔══╝░░
░░░██║░░░██║░░██║███████╗
░░░╚═╝░░░╚═╝░░╚═╝╚══════╝

━━━━━━━━━━━━━━━

Hello! It look's like you're not familiar with my prefix!, here's a guide, use this :➡

👑 SYSTEM PREFIX:➡【 & 】
🐰 BOX CHAT PREFIX:➡ 【 & 】

📌 𝗛𝗢𝗪 𝗧𝗢 𝗨𝗦𝗘
hiro ʜᴏᴡ ᴛᴏ ᴍᴀᴋᴇ ᴄᴀᴋᴇ
hiro ᴡʜᴀᴛ ᴜs ᴄᴀᴘɪᴛᴀʟ ᴏғ ғʀᴀɴᴄ

⚙ 𝗠𝗢𝗥𝗘 𝗢𝗣𝗧𝗜𝗢𝗡𝗦
➖ ✅ [ -quiz ] 
➖ 🎰 [ -slot ]
➖ 🎯 [ -spin ]
➖ 🏦 [- bank ]
➖ 📝 [ -bal ]

OWNER:https://www.facebook.com/swordigo.swordslush?mibextid=rS40aB7S9Ucbxw6v`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/voEHfHB.gif")
 });
 }
 }
}