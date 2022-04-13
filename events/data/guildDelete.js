const client = require('../../index');
const chalk = require("chalk");
const Database = require("@replit/database");
const db = new Database();

client.on("guildDelete", async guild => {
  console.log(`${chalk.cyanBright(`{!} :: Left Guild : ${guild.name}`)}\n${chalk.yellowBright(`{!} :: The Guild MemberCount was ${guild.members.cache.size}.\n`)}`)
  await db.list(`${guild.id}`).then(async (keys) => {
    for (x in keys) {
      let key = keys[x]
      await db.delete(`${key}`)
    }
  });
});