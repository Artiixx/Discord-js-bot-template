const Discord = require('discord.js');


module.exports.run = async(client, message, args) => {
    const membre = message.mentions.members.first() || message.member;

    message.channel.send({
        embed: {
            color: 0x302bf5,
            title: `Avatar de **${membre.user.username}**`,
            thumbnail: {
                url: membre.user.displayAvatarURL({dynamic: true})
            },
            footer:   {
                text: `Voici l'avatar de ${membre.user.username}`
            }
        }
    }) 

 };

 module.exports.help = {
     name: "avatar"
 }