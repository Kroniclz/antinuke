function _0x2716(_0xf3c710,_0x2b20d8){const _0x5428fd=_0x5428();return _0x2716=function(_0x271605,_0x2613c2){_0x271605=_0x271605-0xf7;let _0x59d8d3=_0x5428fd[_0x271605];return _0x59d8d3;},_0x2716(_0xf3c710,_0x2b20d8);}const _0x3dfceb=_0x2716;function _0x5428(){const _0x1f811a=['DANGER','286020OTMoha','split','20TCvMuK','length','whitelisted','8370703LMQnFo','9wWtjwS','45294hXIcjS','1153224amUqgB','clear','413dcUJkC','discord.js','setColor','747879yPMezR',':grey_question:\x20you\x20need\x20to\x20enable\x20antinuke\x20to\x20run\x20this\x20command.','send','setStyle','**__Whitelisted\x20admins\x20for\x20this\x20server__**\x0a\x0a','trusted','there\x20are\x20no\x20whitelisted\x20users\x20in\x20this\x20server.','../../index','guild','author','channel','reply','Clear\x20List','then','list','3657104gVqkAN','setCustomId',':warning:\x20this\x20command\x20is\x20only\x20for\x20the\x20server\x20owner.','10dfdDfE','push','448844tETGut','setLabel'];_0x5428=function(){return _0x1f811a;};return _0x5428();}(function(_0x58d0b7,_0x2f5f0b){const _0x524875=_0x2716,_0x2197a2=_0x58d0b7();while(!![]){try{const _0x2a63e4=parseInt(_0x524875(0x115))/0x1+parseInt(_0x524875(0xf9))/0x2+-parseInt(_0x524875(0xfe))/0x3+parseInt(_0x524875(0x112))/0x4*(parseInt(_0x524875(0x117))/0x5)+parseInt(_0x524875(0xf8))/0x6*(parseInt(_0x524875(0xfb))/0x7)+parseInt(_0x524875(0x10d))/0x8*(-parseInt(_0x524875(0xf7))/0x9)+parseInt(_0x524875(0x110))/0xa*(-parseInt(_0x524875(0x11a))/0xb);if(_0x2a63e4===_0x2f5f0b)break;else _0x2197a2['push'](_0x2197a2['shift']());}catch(_0x263b2d){_0x2197a2['push'](_0x2197a2['shift']());}}}(_0x5428,0x46ab7));const {MessageEmbed,MessageActionRow,MessageButton}=require(_0x3dfceb(0xfc)),client=require(_0x3dfceb(0x105)),db=require('../../core/db');module['exports']={'name':_0x3dfceb(0x10c),'aliases':['l',_0x3dfceb(0x103),_0x3dfceb(0x119)],'run':async(_0x422a56,_0x50fe0d,_0x2105ce)=>{const _0x12c983=_0x3dfceb;if(_0x50fe0d[_0x12c983(0x107)]['id']!==_0x50fe0d[_0x12c983(0x106)]['ownerId'])_0x50fe0d[_0x12c983(0x109)]({'content':_0x12c983(0x10f)});else{var _0x5e1dbb=await db['get'](_0x50fe0d[_0x12c983(0x106)]['id']+'_antinuke');if(_0x5e1dbb===!![]){const _0x4e22d5=[],_0xeae83e=_0x50fe0d[_0x12c983(0x106)]['id'];await db[_0x12c983(0x10c)](_0x50fe0d['guild']['id']+'_wl_')[_0x12c983(0x10b)](async _0x26a4b5=>{const _0x24aa6d=_0x12c983;if(_0x26a4b5[_0x24aa6d(0x118)]>0x0){for(x in _0x26a4b5){const _0x4ade34=_0x26a4b5[x],_0x59dabd=_0x4ade34[_0x24aa6d(0x116)]('_')[0x2],_0x20ef9d='<@'+_0x59dabd+'>\x20('+_0x59dabd+')';_0x4e22d5[_0x24aa6d(0x111)](_0x20ef9d);}const _0x84b508=new MessageEmbed()['setDescription'](_0x24aa6d(0x102)+_0x4e22d5['join']('\x0a'))[_0x24aa6d(0xfd)]('PURPLE'),_0x4f2d1d=new MessageActionRow()['addComponents'](new MessageButton()[_0x24aa6d(0x113)](_0x24aa6d(0x10a))[_0x24aa6d(0x101)](_0x24aa6d(0x114))[_0x24aa6d(0x10e)](_0x24aa6d(0xfa)));_0x50fe0d[_0x24aa6d(0x108)][_0x24aa6d(0x100)]({'embeds':[_0x84b508]});}else _0x50fe0d[_0x24aa6d(0x109)]({'content':_0x24aa6d(0x104)});});}else _0x50fe0d[_0x12c983(0x109)]({'content':_0x12c983(0xff)});}}};