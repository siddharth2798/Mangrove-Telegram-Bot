const TelegramBot = require('node-telegram-bot-api');
//const puppeteer = require('puppeteer');
 
// replace the value below with the Telegram token you receive from @BotFather
const token = '1284323337:AAGAvHA-PYD4dYijZeyDxBCoVhvXo3m4GUo';
 
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
 
// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, async (msg, match) => {
  
  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"
   
  
  
  bot.sendMessage(chatId, resp);
  
});
 
// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Received your message');


 });



