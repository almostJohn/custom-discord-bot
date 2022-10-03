/** @format */

const { Client } = require("discord.js");

/** @param {Client} client */
function readyHandler(client) {
	console.log(`Logged in as ${client.user.tag} (${client.user.id})`);
}

module.exports = { readyHandler };
