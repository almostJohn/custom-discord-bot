/** @format */

const { APIEmbed, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const {
	COLOR,
	ROLE,
	TEAL_EMOJI_NAME,
	BLURPLE_EMOJI_NAME,
	PURPLE_EMOJI_NAME,
	ORANGE_EMOJI_NAME,
	FUCHSIA_EMOJI_NAME,
	GREEN_EMOJI_NAME,
	YELLOW_EMOJI_NAME,
	TEAL_EMOJI_ID,
	BLURPLE_EMOJI_ID,
	PURPLE_EMOJI_ID,
	ORANGE_EMOJI_ID,
	FUCHSIA_EMOJI_ID,
	GREEN_EMOJI_ID,
	YELLOW_EMOJI_ID,
} = require("../constants");
const { roleFormatter, emojiFormatter } = require("./formatter");

function createEmbed() {
	let msg = [
		`${emojiFormatter(FUCHSIA_EMOJI_NAME, FUCHSIA_EMOJI_ID)} ${roleFormatter(ROLE.FUCHSIA)}`,
		`${emojiFormatter(ORANGE_EMOJI_NAME, ORANGE_EMOJI_ID)} ${roleFormatter(ROLE.ORANGE)}`,
		`${emojiFormatter(YELLOW_EMOJI_NAME, YELLOW_EMOJI_ID)} ${roleFormatter(ROLE.YELLOW)}`,
		`${emojiFormatter(GREEN_EMOJI_NAME, GREEN_EMOJI_ID)} ${roleFormatter(ROLE.GREEN)}`,
		`${emojiFormatter(TEAL_EMOJI_NAME, TEAL_EMOJI_ID)} ${roleFormatter(ROLE.TEAL)}`,
		`${emojiFormatter(PURPLE_EMOJI_NAME, PURPLE_EMOJI_ID)} ${roleFormatter(ROLE.PURPLE)}`,
		`${emojiFormatter(BLURPLE_EMOJI_NAME, BLURPLE_EMOJI_ID)} ${roleFormatter(ROLE.BLURPLE)}`,
	];

	/** @type {APIEmbed} */
	const embed = {
		title: "Self-assignable roles",
		color: COLOR,
		description: "Use the buttons below to assign any of the roles below to yourself!",
		fields: [
			{
				name: "Colour Roles",
				value: msg.join("\n"),
			},
		],
	};

	return embed;
}

function createSelfAssignableRole() {
	const firstRow = new ActionRowBuilder().addComponents(
		new ButtonBuilder()
			.setCustomId("fuchsia")
			.setLabel("Fuchsia")
			.setStyle(ButtonStyle.Secondary)
			.setEmoji(FUCHSIA_EMOJI_ID),
		new ButtonBuilder()
			.setCustomId("orange")
			.setLabel("Orange")
			.setStyle(ButtonStyle.Secondary)
			.setEmoji(ORANGE_EMOJI_ID),
		new ButtonBuilder()
			.setCustomId("yellow")
			.setLabel("Yellow")
			.setStyle(ButtonStyle.Secondary)
			.setEmoji(YELLOW_EMOJI_ID),
		new ButtonBuilder().setCustomId("green").setLabel("Green").setStyle(ButtonStyle.Secondary).setEmoji(GREEN_EMOJI_ID),
	);

	const secondRow = new ActionRowBuilder().addComponents(
		new ButtonBuilder().setCustomId("teal").setLabel("Teal").setStyle(ButtonStyle.Secondary).setEmoji(TEAL_EMOJI_ID),
		new ButtonBuilder()
			.setCustomId("purple")
			.setLabel("Purple")
			.setStyle(ButtonStyle.Secondary)
			.setEmoji(PURPLE_EMOJI_ID),
		new ButtonBuilder()
			.setCustomId("blurple")
			.setLabel("Blurple")
			.setStyle(ButtonStyle.Secondary)
			.setEmoji(BLURPLE_EMOJI_ID),
	);

	return {
		components: [firstRow, secondRow],
	};
}

module.exports = { createSelfAssignableRole, createEmbed };
