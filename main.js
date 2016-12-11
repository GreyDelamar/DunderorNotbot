require('dotenv').config();
var champList = require('./champs');
var  Discordie = require('discordie');

const Events = Discordie.Events;
const client = new Discordie();

client.connect({
  token: process.env.TOKEN
});



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
