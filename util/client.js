/** @format */

const { Client, ClientOptions } = require("discord.js");

/** @param {ClientOptions} options */
function createClient(options) {
	const client = new Client(options);

	return client;
}

module.exports = { createClient };
