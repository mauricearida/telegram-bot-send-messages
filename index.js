const axios = require("axios");
const cron = require("node-cron");

const text = "asdasd as da da sa";
const minutesInterval = 1;
const chatId = "-4096110316";
const cronExpression = `*/${minutesInterval} * * * *`;
const botToken = "6509304925:AAEgSnK1VtAqJWLV3YA38ccDNrzZxY2Q9zs"; // Replace with your bot token

const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
const postData = {
  chat_id: chatId,
  text: text,
};

const sendMessage = () => {
  axios
    .post(apiUrl, postData)
    .then(function (response) {
      console.log("Telegram API Response:", response.data);
    })
    .catch(function (error) {
      console.error("Telegram API Error:", error);
    });
};

// Schedule the job
const job = cron.schedule(cronExpression, () => {
  sendMessage();
});
// Start the cron job
job.start();
