var champList = require('./champs');


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

module.exports = dunderornot;
