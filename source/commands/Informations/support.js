const { EmbedBuilder } = require('discord.js')
const Snoway = require('../../structures/client/index')

module.exports = {
    name: "support",
    aliases: ["snoway"],
    description: "Invite sur le support du bot !",
    /**
     * 
     * @param {Snoway} client 
     * @param {Snoway} message 
     * @param {Snoway} args 
     * @returns 
     */
    run: async (client, message, args) => {

        await message.channel.send({
            embeds: [new EmbedBuilder().setColor(client.color).setDescription(`[Clique ici pour rejoindre le support Snoway Bots](${client.support})`)]
        })
    }
}