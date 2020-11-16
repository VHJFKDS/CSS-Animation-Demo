
//时长
var duration = 30



function writeCode(prefix,code,fn){
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
  let n = 0
  let id
  id = setTimeout(function run(){
      n +=1
      container.innerHTML = code.substring(0,n)
      styleTag.innerHTML = code.substring(0,n)
      container.scrollTop = container.scrollHeight
      if(n < code.length){
          id = setTimeout(run,duration)
      }else{
          setTimeout(function(){container.style = "overflow-y:scroll;"},1000)
          fn && fn.call()
      }
  },duration)
}

$('.actions').on('click','button',function(e){
    let $button = $(e.currentTarget)
    let speed = $button.attr('data-speed')
    $button.addClass('active').siblings('.active').removeClass('active')
    switch(speed){
        case 'slow':
            duration = 90
            break
        case 'normal':
            duration = 40
            break
        case 'fast':
            duration = 10
            break
    }
    
})

let code = `
/* 
* 给大家画一只小黑猫吧！嘻嘻(๑╹ヮ╹๑)ﾉ 
* 首先画个背景~
*/

body {
    background-color: #fcf2c1;
    margin: 0;
    
  }
.code-wrapper{
    background-color: rgba(0,0,0,0.3);
    display: flex;
  }

  /* 
  * 开始画猫~
  */

.catColor {
    background-color: #242424;
  }
  .catHead {
    width: 170px;
    height: 130px;
    border-radius: 50%;
    -webkit-border-radius: 55% 55% 50% 50%;
    margin-top: 200px;
    position: absolute;
    z-index: 2;
      box-shadow: 0px 4px 8px -6px #111;
  }
  .catEar {
    width: 80px;
    height: 100px;
    border: none;
    -webkit-border-radius: 80% 0 55% 50% / 55% 0 80% 50%;
    border-radius: 80% 0 55% 50% / 55% 0 80% 50%;
    position: absolute;
    z-index: 1;
  }
  
  .catLeftEar {
    -webkit-transform: rotateZ(-45deg);
    transform: rotateZ(-45deg);
    /* margin-left: 717px; */
    margin-top: 173px;
  }
  
  .catRightEar {
    -webkit-transform: rotateZ(-20deg);
    transform: rotateZ(20deg);
    margin-left: 101px;
    margin-top: 175px;
  }
  
  .catInsideEar {
    width: 60px;
    height: 100px;
    border: 1px;
    -webkit-border-radius: 80% 0 55% 50% / 55% 0 80% 50%;
    border-radius: 80% 0 55% 50% / 55% 0 80% 50%;
    background: #CC8888;
    z-index: 1;
  }
  
  .catLeftInsideEar {
    margin-left: 12px;
    margin-top: 6px;
  }
  
  .catRightInsideEar {
    margin-left: 10px;
    margin-top: 6px;
  }

  .catHair {
    position: absolute;
    width: 70px;
    height: 70px;
    border: none;
    margin-top: 208px;
    margin-left: 58px;
  }
  
  .catHair::before {
    position: absolute;
    width: 80px;
    height: 70px;
    content: "";
    top: 0;
    left: 0;
    border: none;
    background: inherit;
    -webkit-transform: rotateZ(26deg)   ;
    transform: rotateZ(26deg)   ;
  }
  
  .catHair::after {
    width: 72px;
    height: 70px;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    border: none;
    background: inherit;
    -webkit-transform: rotateZ(60deg)   ;
    transform: rotateZ(60deg)   ;
  }
  .catEye {
    width: 62px;
    height: 50px;
    -webkit-border-radius: 50%;
    border-radius: 60% 60% 60% 60%;
    background-color: #E6E6E6;
    z-index: 3;
    position: absolute;
    margin-top: 32px;
}

.catLeftEye {
    margin-left: 17px;
}

.catRightEye {
    margin-left: 93px;
}

.eyelid {
    height: 60%;
    width: 100%;
    position: absolute;
    z-index: 10;
    margin-top: -5%;
    border-radius: 100% 100% 10% 10%;
    animation: blink 6s infinite ease-in-out;
    animation-delay: 7s;
}

.pupil {
    width: 20px;
    height: 35px;
    background-color: #222;
    -webkit-border-raidus: 50%;
    border-radius: 50%;
    margin-left: 20px;
    z-index: 5;
    margin-top: 3px;
}

/* 
* 眨眨眼~
*/

@keyframes blink {
    1% {height: 60%;}
    2% {height: 80%;}
    3% {height: 100%;}
    4% {height: 80%;}
    5% {height: 60%;}
    100% {height: 60%;}
    
}


.catBody {
    width: 185px;
    height: 110px;
    position: absolute;
    border: none;
    -webkit-border-radius: 50% / 60% 60% 35% 35%;
    border-radius: 50% / 80% 80% 50% 50%;
    margin-left: -8px;
    margin-top: 276px;
    z-index: 1;
  }

/* 
* 画上双脚~
*/
  
  .catFoot {
      height: 28%;
      width: 30%;
      position: absolute;
      z-index: 10;
      margin-top: 43%;
      border-radius: 100% 100% 70% 70%;
      -webkit-box-shadow: -1px 2px 20px -5px rgba(0,0,0,0.75);
      -moz-box-shadow: -1px 2px 20px -5px rgba(0,0,0,0.75);
      box-shadow: -2px -4px 10px -6px rgba(0,0,0,1);
  }
  
  .leftFoot {
      margin-left: 8%;
      animation: step 9s infinite ease-in-out;
      animation-delay: 7.4s;
  }
  
  .rightFoot {
      margin-left: 60%;
      animation: step 9s infinite ease-in-out;
      animation-delay: 8s;
  }
  
  @keyframes step {
      1% {transform: translateY(-1px);}
      2% {transform: translateY(-2px);}
      3% {transform: translateY(-3px);}
      4% {transform: translateY(-2px);}
      5% {transform: translateY(-1px);}
      6% {transform: translateY(0px);}
      100% {transform: translateY(0px);}
  }
  

/* 
* 最后加上尾巴~
*/

  .catTail {
    position: absolute;
    margin-left: 152px;
      margin-top: 352px;
      translate: rotate(-10deg);
  }
  
  span {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    animation: tailWave 3s infinite ease-in-out;
    
  }
  
  span:nth-child(2){
    left: 5px;
    animation-delay: 0.2s;
  }
  
  span:nth-child(3){
    left: 10px;
    animation-delay: 0.4s;
  }
  
  span:nth-child(4){
    left: 15px;
    animation-delay: 0.6s;
  }
  
  span:nth-child(5){
    left: 20px;
    animation-delay: 0.8s;
  }
  
  span:nth-child(6){
    left: 25px;
    animation-delay: 1s;
  }
  
  span:nth-child(7){
    left: 30px;
    animation-delay: 1.2s;
  }
  
  span:nth-child(8){
    left: 35px;
    animation-delay: 1.4s;
  }
  
  span:nth-child(9){
    left: 40px;
    animation-delay: 1.6s;
  }
  
  span:nth-child(10){
    left: 45px;
    animation-delay: 1.8s;
  }
  
  span:nth-child(11){
    left: 50px;
    animation-delay: 2s;
  }
  
  span:nth-child(12){
    left: 55px;
    animation-delay: 2.2s;
  }
  
  span:nth-child(13){
    left: 60px;
    animation-delay: 2.4s;
  }
  
  span:nth-child(14){
    left: 65px;
    animation-delay: 2.6s;
  }
  
  span:nth-child(15){
    left: 70px;
    animation-delay: 2.8s;
  }
  
  @keyframes tailWave {
      0% {transform:translateY(0px);}
      50% {transform: translateY(-6px);}
      100% {transform:translateY(0px);}
  }

/* 
* 完成~
*/
`

writeCode('',code)