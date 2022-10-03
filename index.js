/** @format */

require("dotenv").config();

const { GatewayIntentBits } = require("discord.js");
const { createClient } = require("./util/client");
const { readyHandler } = require("./util/ready");
const { interactionHandler } = require("./util/interaction");

const client = createClient({ intents: [GatewayIntentBits.Guilds] });

client.on("ready", () => readyHandler(client));

client.on("interactionCreate", async (interaction) => await interactionHandler(interaction));

client.login(process.env.DISCORD_BOT_TOKEN);
