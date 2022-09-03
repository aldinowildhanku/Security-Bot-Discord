const { error } = require("console");
const Discord = require("discord.js");
const Client = new Discord.Client();
var prefix = "sb/"
const {badwords} = require("./databadword.json")
Client.login("Your token");
# security policy 
# google policy 
# microsoft security 
Client.on('ready',()=>{
    console.log("Bot T-Rex Security  is online");
    Client.user.setActivity('Menjaga DINOTROSTORE', {type: 'WATCHING'});
})

//badwords
Client.on("message", async message =>{

       let confirm = false

        var i
        for(i = 0;i<badwords.length;i++){
            if(message.content.toLowerCase().includes(badwords[i].toLocaleLowerCase()))
            confirm = true
        }
    
        if(confirm){
           
            const embed = new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL({format: "gif",format : "png", dynamic : "true"}))
                .setColor("RANDOM")
                .setFooter('©!Mas Din#6666 • Version BETA')
                .setTimestamp()
                .setDescription("Kamu Baru Saja Menggunakan Kata-Kata Kasar")
                message.delete()
            return message.channel.send(embed)
        }
})


Client.on('message', message =>{
    let args = message.content.substring(prefix.length).split(" ")
    
    switch (args[0]){
    case 'kick':
        const user = message.mentions.users.first()

        if(user){
            const member = message.guild.member(user);
            message.delete();
            if(member){
                member.kick('Kamu dikeluarkan dari server discord DINOTROSTORE').then(()=>{
                    message.reply(`Berhasil mengeluarkan ${user.tag}`)
                }).catch(error =>{
                    message.reply('i was unable to kick the member')
                    console.log(error)
                })
            }else{
                message.reply("That user isnt in the this guild")
            }
        }else{
            message.reply('kamu harus mention orang yang mau di kick')
        }
    break
    }
    
    switch (args[0]){
        case 'ban':
            const userban = message.mentions.users.first()
            message.delete();
            if(userban){
                const memberban = message.guild.member(userban);

                if(memberban){
                    memberban.ban({ression: 'Kamu sudah di BAN di server ini karena melanggar Rules'}).then(()=>{
                        message.reply(`Kami banned pengguna ${userban.tag}`)
                    }).catch(error =>{
                        message.reply('i was unable to kick the member')
                        console.log(error)
                    })
               }else{
                message.reply("That user isnt in the this guild")
            }
            }else{
                message.reply('kamu harus mention orang yang mau di ban')
            }
        break
        }
})
