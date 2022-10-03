/** @format */

const { Interaction } = require("discord.js");
const { ROLE } = require("../constants");

/** @param {Interaction} interaction */
async function interactionHandler(interaction) {
	if (interaction.isButton()) {
		const role = interaction.guild.roles.cache.get(ROLE[interaction.customId.toUpperCase()]);

		if (!role) {
			return interaction.reply({ content: "Role doesn't exist in cache", ephemeral: true });
		}

		console.log("adding role...");
		await interaction.member.roles
			.add(role.id)
			.then((member) => {
				interaction.reply({
					content: `The ${role} was added to you ${member}`,
					ephemeral: true,
				});
			})
			.catch((err) => {
				interaction.reply({
					content: `Failed to add the ${role}. Error: ${err}`,
					ephemeral: true,
				});
			});
	}
}

module.exports = { interactionHandler };
