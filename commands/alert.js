import { SlashCommandBuilder } from 'discord.js';
import alertStore from '../util/alertStore.js';

export default {
    data: new SlashCommandBuilder()
    .setName('alert')
    .setDescription('Pings you for the next update.'),
    execute(interaction) {
        if (interaction.channel.parentId != '1303121691442020382') {
            return interaction.reply('This command can only be used in higher up tickets.');
        }
        // Register the user's alert in the channel by storing the channel ID and user ID
        alertStore.addAlert(interaction.channel.id, interaction.user.id);
    
        // Reply to the user with a confirmation message, which only they can see (ephemeral)
        interaction.reply({ content: 'I will ping you when the next new message arrives in this channel.', ephemeral: true });
    }    
}