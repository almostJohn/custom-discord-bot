/** @format */

const { Snowflake } = require("discord.js");

/** @param {Snowflake} roleId */
function roleFormatter(roleId) {
	return `<@&${roleId}>`;
}

/**
 * @param {string} emojiName
 * @param {Snowflake} emojiId
 */
function emojiFormatter(emojiName, emojiId) {
	return `<:${emojiName}:${emojiId}>`;
}

module.exports = { roleFormatter, emojiFormatter };
