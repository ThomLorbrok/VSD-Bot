const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*");


bot.login(process.env.TOKEN);

bot.on('ready', () => {
    console.log("EN LIGNE");
});

bot.on('ready', () => {
    bot.user.setActivity(" *help | VSD'Bot")
    });

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Les commandes : *help , *infodiscord");
        console.log('help demandé');
    }

    if(message.content === prefix + "infodiscord")
    var embed = new Discord.RichEmbed()
    .setDescription("Information du Discord")
    .addField("Nom du discord", message.guild.name)
    .addField("Utilisateur sur le discord", message.guild.memberCount)
    .setColor("0x0000FF")
 message.channel.sendEmbed(embed);
})
