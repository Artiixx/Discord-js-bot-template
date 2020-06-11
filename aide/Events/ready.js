module.exports = async(client) => {
    
    client.user.setActivity(` -help | ${client.guilds.cache.size} serveurs`,{ type: 'WATCHING' });

}