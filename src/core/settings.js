const prefix = process.env.prefix || '.'
const status = `${prefix}help`;


module.exports = {
  bot: {
    info: {
      prefix: process.env.prefix || '.',
      token: process.env.token,
      invLink: 'https://discord.com/api/oauth2/authorize?client_id=1053036527296454718&permissions=8&scope=bot',
    },
    options: {
      founders: ['891214041391988757'],
      privateMode: false,
    },
    presence: {
      name: process.env.statusText || status,
      type: 'STREAMING',
      url: 'https://twitch.tv/TeeGrizzley'
    },
    credits: {
      developerId: '891214041391988757',
      developer: 'Kronclz',
      sourceCode: 'https://discord.com/api/oauth2/authorize?client_id=1053036527296454718&permissions=8&scope=bot',
      supportServer: 'https://discord.gg/Unstable'
    }
  }
}
