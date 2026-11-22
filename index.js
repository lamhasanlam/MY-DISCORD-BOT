const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
    console.log(`Bot is online: ${client.user.tag}`);
});

client.login(process.env.MTU3Mzg2NzgyMjM1Njg5Nzg3Mg.GW34sU.7jOKyeqJOPt7hmg2YE7FLVhFGidysl2PEK0YH4);
