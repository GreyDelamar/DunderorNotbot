require('dotenv').config();
var  Discordie = require('discordie');

const Events = Discordie.Events;
const client = new Discordie();

client.connect({
  token: process.env.TOKEN
});

var champList = ['Atrox',
'Ahri',
'Akali',
'Alistar',
'Amumu',
'Anivia',
'Annie',
'Ashe',
'Aurlion sol',
'Azir',
'Bard',
'Blitzcrank',
'Brand',
'Braum',
'Caitlyn',
'Camille',
'Cassiopeia',
'Cho gath',
'Corki',
'Darius',
'Diana',
'Dr mundo',
'Draven',
'Ekko',
'Elise',
'Evelynn',
'Ezreal',
'Fiddlesticks',
'Fiora',
'Fizz',
'Galio',
'Gangplank',
'Garen',
'Gnar',
'Gragas',
'Graves',
'Hecarim',
'Heimerdinger',
'Illaoi',
'Irelia',
'Ivern',
'Janna',
'Jarvan IV',
'Jax',
'Jayce',
'Jhin',
'Jinx',
'Kalista',
'Karma',
'Karthus',
'Kassadin',
'Katarina',
'Kayle',
'Kennen',
"Kha'zix",
'Kindred',
'Kled',
"Kog'Maw",
'Leblanc',
'Lee Sin',
'Leona',
'Lissandra',
'Lucian',
'Lulu',
'Lux',
'Malphite',
'Malzahar',
'Maokai',
'Master Yi',
'Miss Fortune',
'Mordekasier',
'Morgana',
'Nami',
'Nasus',
'Nautilus',
'Nidalee',
'Nocturne',
'Nunu',
'Olaf',
'Orianna',
'Pantheon',
'Poppy',
'Quinn',
'Rammus',
"Rek'sai",
'Renekton',
'Rengar',
'Riven',
'Rumble',
'Ryze',
'Sejuani',
'Shaco',
'Shen',
'Shvyana',
'Singed',
'Sion',
'Sivir',
'Skarner',
'Sona',
'Soraka',
'Swain',
'Syndra',
'Tahm Kench',
'Taliyah',
'Talon',
'Taric',
'Teemo',
'Thresh',
'Tristana',
'Trundle',
'Tryndamere',
'Twisted Fate',
'Twitch',
'Udyr',
'Varus',
'Vayne',
'veigar',
"Vel'koz",
'Vi',
'Viktor',
'Vladimir',
'Volibear',
'Warwick',
'Wukong',
'Xerath',
'Xin Zhao',
'Yasuo',
'Yorick',
'Zac',
'Zed',
'Ziggs',
'Zilean',
'Zyra'];

function champpick (){
    var i = number();
    return champList[i]
};
function number () {
  return Math.floor(Math.random()*100);
};
function  dunderornot (){
  if(number()>=50){
    // console.log(champpick());
    // console.log(champpick());
    return "DUNDER ====== "+ champpick()+ " + " + champpick()
  }else{
    return "DON'T DUNDER ====== be normal"
  }
};


client.Dispatcher.on(Events.GATEWAY_READY, e => {
  console.log('sup dog');
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e =>{
  if (e.message.content == 'DO WE DUNDER?'){
    e.message.channel.sendMessage(dunderornot());
  }else if (e.message.content == 'do we dunder?'){
    e.message.channel.sendMessage(dunderornot());
  }
});
