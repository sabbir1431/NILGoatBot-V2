const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs")


module.exports = {
    config: {
        name: "hug2",
        aliases: ["hug2","hugv2" ,"hugtwo"],
        version: "1.0",
        author: "\x4c\x45\x41\x52\x4e\x20\x54\x4f\x20\x45\x41\x54\x20\x4c\x45\x41\x52\x4e\x20\x54\x4f\x20\x53\x50\x45\x41\x4b\x20\x42\x55\x54\x20\x44\x4f\x4e\'\x54\x20\x54\x52\x59\x20\x54\x4f\x20\x43\x48\x41\x4e\x47\x45\x20\x54\x48\x45\x20\x43\x52\x45\x44\x49\x54\x20\x41\x4b\x41\x53\x48",
        countDown: 5,
        role: 0,
        shortDescription: "mention someone",
        longDescription: "mention your love",
        category: "love",
        guide: "{pn}"
    },



    onStart: async function ({ message, event, args }) {
        const mention = Object.keys(event.mentions);
        if (mention.length == 0) return message.reply("Please mention someone❗");
        else {
            const one = event.senderID, two = mention[0];
            bal(one, two).then(ptth => { message.reply({ body: "You Are The Best🥰", attachment: fs.createReadStream(ptth) }) })
        }
    }


};

async function bal(one, two) {

    let avone = await jimp.read(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=66262`)
    avone.circle()
    let avt8568379%7Cc1e620fa708a1d5696fb991c1bde56wo = await jimp.read(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)
    avtwo.circle()
    let pth = "hugv2.png"
    let img = await jimp.read("https://i.ibb.co/YB2HGZP/FB-IMG-16843164044100469-removebg-preview.png")

    img.resize(720, 696).composite(avone.resize(120, 120), 240, 300).composite(avtwo.resize(120, 120), 280, 130);

    await img.writeAsync(pth)
    return pth
      }