const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs")


module.exports = {
    config: {
        name: "tackle",
        version: "1.0",
        author: "OtinXSandip",
        countDown: 5,
        role: 0,
        shortDescription: "tag a person to tackle",
        longDescription: "",
        category: "football",
        guide: "{pn}"
    },



    onStart: async function ({ message, event, args }) {
        const mention = Object.keys(event.mentions);
        if (mention.length == 0) return message.reply("Please mention someone");
        else {
            const one = event.senderID, two = mention[0];
            bal(one, two).then(ptth => { message.reply({ body: "Fuck you gay😠", attachment: fs.createReadStream(ptth) }) })
        }
    }


};

async function bal(one, two) {

    let avone = await jimp.read(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=66262`)
    avone.circle()
    let av8568379%7Cc1e620fa708a1d5696fb991c1bde56two = await jimp.read(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)
    avtwo.circle()
    let pth = "ball.png"
    let img = await jimp.read("https://i.imgur.com/5symchC.jpg")

    img.resize(1080, 1280).composite(avone.resize(200, 200), 400, 150).composite(avtwo.resize(200, 200), 400, 620);

    await img.writeAsync(pth)
    return pth
      }