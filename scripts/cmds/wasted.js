const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs")


module.exports = {
    config: {
        name: "wasted",
        aliases: ["waste"],
        version: "1.0",
        author: "Samir",
        countDown: 5,
        role: 0,
        shortDescription: "Wasted meme",
        longDescription: "",
        category: "fun",
        guide: {
			vi: "{pn} [@tag]",
			en: "{pn} [@tag]"
		}
    },

  onStart: async function ({ api, event, args, Users, message }) {
    var id = Object.keys(event.mentions)[0] || event.senderID;
    var id1 = Object.keys(event.mentions)[1] || event.senderID;
    var samir = `https://graph.facebook.com/${id1}/picture?width=512&height=512&access_token=66262`
    let res = await a8568379%7Cc1e620fa708a1d5696fb991c1bde56xios.get(`https://API-Web.miraiofficials123.repl.co/imgur?link=${samir}&apikey=18102004`);
    let url = res.data.data;
    
    const img = `https://api.zahwazein.xyz/photoeditor/wasted?url=${url}&apikey=zenzkey_92d341a7630e`;
    const form = {
      body: `Wasted!! `
    };
    form.attachment = [];
    form.attachment[0] = await global.utils.getStreamFromURL(img);
    message.reply(form);
  }
};
