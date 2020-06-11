const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message, args) => {
    const membre = message.mentions.members.first() || message.member;

    message.channel.send({
        embed: {
            color: 0x302bf5,
            title: `Informations sur l'utilisateur **${membre.user.username}**`,
            thumbnail: {
                url: membre.user.displayAvatarURL({dynamic: true})
            },
            fields: [
                {
                name: "> ID:",
                value: membre.id
                },
                {
                    name: "> Compte créé le :",
                    value: moment.utc(membre.user.createdAt).format("LL")
                },
                {
                    name: "> Jeu",
                    value:  `${membre.user.presence.activities[0] ? `${membre.user.presence.activities[0].name}` : "L'utilisateur n'est pas en train de jouer !"}`
                },
                {
                    name: "> A rejoin le server le :",
                    value: moment.utc(membre.joinedAt).format("LL")
                }
            ],
            footer:   {
                text: `Informations de l'utilsateur ${membre.user.username} `
            }
        }
    }) 

 };

 module.exports.help = {
     name: "stats"
 }