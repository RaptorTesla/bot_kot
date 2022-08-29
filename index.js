const { 
    Telegraf,
    Markup
      } = require('telegraf');
require("dotenv").config()
const text = require('./const')
const number = require('./gen')
//const bool = require('./gen')

const bot = new Telegraf(process.env.TOKEN)
bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name ? ctx.message.from.first_name: 'Неизвестная человек'}!`))
bot.help((ctx) => ctx.reply(text.commands))
bot.command('course', async function (ctx) {
        try {
            await ctx.replyWithHTML('<b>Котиков</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('В солнце', 'btn_1'), 
                Markup.button.callback('В землю', 'btn_2'),
                Markup.button.callback('В небо', 'btn_3')]
            ]
        ))
        } catch(e) {
            console.error(e)

        }
    }) 
    
bot.command('/cock', (ctx) => ctx.replyWithHTML
    (`<strong>Сегодня в тебя помещается ${number.getRandomItnegralNumber(1,10)} сочных колбасок!</strong>`))
/*if(bool > 0.5)
    bot.command('/mama', (ctx) => ctx.reply('боги погли ему найти её'))
    else
    bot.command('/mama', (ctx) => ctx.reply('все как обычно'))
*/

   




    

   


bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))