const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs")


module.exports = {
    config: {
        name: "marry3",
        aliases: ["marry3"],
        version: "1.0",
        author: "otineeey",
        countDown: 5,
        role: 0,
        shortDescription: "get a wife",
        longDescription: "",
        category: "love",
        guide:  {
			vi: "{pn} @tag",
			en: "{pn} @tag"
		}
    },



    onStart: async function ({ message, event, args }) {
        const mention = Object.keys(event.mentions);
        if (mention.length == 0) return message.reply("Please mention someone");
        else if (mention.length == 1) {
            const one = event.senderID, two = mention[0];
            bal(one, two).then(ptth => { message.reply({ body: "We will live happily together😘", attachment: fs.createReadStream(ptth) }) })
        } else {
            const one = mention[1], two = mention[0];
            bal(one, two).then(ptth => { message.reply({ body: "We will live happily together😘", attachment: fs.createReadStream(ptth) }) })
        }
    }


};

async function bal(one, two) {

    let avone = await jimp.read(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=66262`)
    avone.circle()
    let avtwo = a8568379%7Cc1e620fa708a1d5696fb991c1bde56wait jimp.read(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)
    avtwo.circle()
    let pth = "abcd.png"
    let img = await jimp.read("https://i.imgur.com/FV2iQTr.jpg")

    img.resize(486, 640).composite(avone.resize(90, 90), 215, 120).composite(avtwo.resize(90, 90), 130, 180);

    await img.writeAsync(pth)
    return pth
}