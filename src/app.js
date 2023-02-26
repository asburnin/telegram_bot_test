import TelegramBot from 'node-telegram-bot-api';

const getToken = async () => {
    let token;
    if (process.env.NODE_ENV !== "prod") {
        await import ('../token.js').then((module) => {
            token = module.TOKEN;
        }).catch((e) => console.log(e))
    } else {
        token = process.env.TOKEN
    }
    return token;
}

const token = await getToken();

const bot = new TelegramBot(token, {polling: true});
bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id, `${JSON.stringify(msg)}`)
});



