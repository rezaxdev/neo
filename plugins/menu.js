exports.run = {
   usage: ['menu', 'help', 'allmenu', 'listmenu', 'bot'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: '🚩 DOWNLOADER',
         rowId: `${isPrefix}menutype 1`,
         description: ``
      }, {
         title: '🚩 GROUP',
         rowId: `${isPrefix}menutype 2`,
         description: ``
      }, {
         title: '🚩 TOOLS',
         rowId: `${isPrefix}menutype 3`,
         description: ``
      }, {
         title: '🚩 OWNER',
         rowId: `${isPrefix}menutype 4`,
         description: ``
      }]
      let text = 'An autonomous program on the internet or another network that can interact with systems or users.\n\n'
      text += '◦ *Database* : PostgreSQL\n'
      text += '◦ *Library* : Baileys v4.2.0\n'
      text += '◦ *Platform* : win32\n'
      text += '◦ *Instagram* : https://Instagram.com/reteam.id\n'
      text += '◦ *Script bot* : https://youtu.be/hl6N1wtzenc\n\n'
      text += 'If you find an error or want to upgrade premium plan contact the owner.'
      await client.sendList(m.chat, '', text, '', 'Tap!', [{
         rows
      }], m)
   },
   error: false
}
