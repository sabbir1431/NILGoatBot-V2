const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: ""

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});
const openai = new OpenAIApi(configuration);


module.exports = {
	config: {
		name: "ai",
		version: "1.1",
		author: "xerom",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "",
			en: "open ai"
		},
		longDescription: {
			vi: "",
			en: "open ai like chatgpt"
		},
		category: "ai",
		guide: "",
		
	},

onStart: async function ({ event, message, getLang, usersData, api, args}) {

let completion = await
 openai.createCompletion({
  model: "text-davinci-003",
  prompt: args.join(" "),
  temperature: 0.7,
  max_tokens: 974,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
   })
  //console.log(completion.data)
message.reply(completion.data.choices[0].text);
  
}
}