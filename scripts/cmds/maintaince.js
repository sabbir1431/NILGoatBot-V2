const fs = require("fs");

module.exports = {
  config: {
    name: "maintenancecmd",
    aliases: [`m`],
    version: "1.0",
    author: "Your Name",
    role: "tsfree",
    shortDescription: {
      en: "Enables or disables maintenance mode for specific commands",
      tl: "Paganahin o patayin ang maintenance mode para sa mga tiyak na command"
    },
    longDescription: {
      en: "Enables or disables maintenance mode for specific commands",
      tl: "Paganahin o patayin ang maintenance mode para sa mga tiyak na command"
    },
    category: "Admin",
    guide: {
      en: "{p}maintenancecmd <on/off> <command_name>",
      tl: "{p}maintenancecmd <on/off> <command_name>"
    }
  },

  onStart: async function({ event, message, args }) {
    const [mode, commandName] = args;

    if (!mode || !commandName) {
      message.reply("Please provide both the mode (on/off) and command name");
      return;
    }

    // Load the maintenance data from file
    let maintenanceData = {};
    try {
      const data = fs.readFileSync("maintenance.json", "utf8");
      maintenanceData = JSON.parse(data);
    } catch (err) {
      console.error("Failed to load maintenance data:", err);
      message.reply("Failed to load maintenance data");
      return;
    }

    // Check if the command is already in maintenance mode
    if (maintenanceData[commandName] && maintenanceData[commandName] === true) {
      if (mode === "on") {
        message.reply(`Command ${commandName} is already in maintenance mode`);
        return;
      }
    } else {
      if (mode === "off") {
        message.reply(`Command ${commandName} is not in maintenance mode`);
        return;
      }
    }

    // Update the maintenance data based on the mode
    maintenanceData[commandName] = (mode === "on");

    // Save the updated maintenance data to file
    try {
      fs.writeFileSync("maintenance.json", JSON.stringify(maintenanceData));
    } catch (err) { 
      console.error("Failed to save maintenance data:", err);
      message.reply("Failed to save maintenance data");
      return;
    }

    if (mode === "on") {
      message.reply(`Maintenance mode for command ${commandName} is now enabled`);
    } else if (mode === "off") {
      message.reply(`Maintenance mode for command ${commandName} is now disabled`);
    } else {
      message.reply("Invalid mode. Please choose either 'on' or 'off'.");
    }

    // Send message to users if command is under maintenance
    if (maintenanceData[commandName] === true) {
      message.channel.send("The command is currently under maintenance. Please wait for it to be available again.");
    }
  }
};