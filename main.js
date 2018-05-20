const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("*");

bot.on('ready', () => {
    console.log("Prêt à travailler chef ");
});

bot.on('ready', () => {
    bot.user.setActivity(" *help | VSD'Bot")
    });

bot.login(process.env.TOKEN);

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

});

   
// Commande de modération //
if(message.content === prefix + "clear"){
    if (message.member.hasPermission("MANAGE_MESSAGES")){
        message.channel.fetchMessages()
            .then(function(list){
                message.channel.bulkDelete(list);
            }, function(err){message.channel.send("Erreur")})
    message.channel.send('vous avez réussie à vider le salon.')}
            console.log("La commande clear viens d'être effectué par un membre de l'équipe.")
        }
})
