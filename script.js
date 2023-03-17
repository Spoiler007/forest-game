   let container = document.querySelector(".container");
 var game = document.querySelector(".game");
  var player=document.querySelector(".player");
   let animal = document.querySelector(".animal");

     function jump(){
            if(player.classList != "animate"){
                player.classList.add("animate");
                animal.style.animation = "move is infinite linear";
            }
            setTimeout(function() {
                player.classList.remove("animate");
            }, 300);
     }

     document.addEventListener("keydown", function(){
         jump();
          })

     let isAlive = setInterval(function(){
            let playerTop = parseInterval(window.getComputedStyle(player).getPropertyValue("top"));

            let animalleft = parseInterval(window.getComputedStyle(animal).getPropertyValue("left"));

            // console.log(playerTop);
            if(animalleft<40 && animalleft>20 && playerTop<=130){
                animal.style.animaion = "none";
                alert("Game Over.Press spacebar to restart");
            }
     }, 10);

// another code
//   const player = document.getElementById("player"); 
//   function jump(){
//     if(player.classList != "jump"){
//     animal.classList.add("jump");
//     setTimeout(function(){
//       animal.classList.remove("jump");
//     }, 300);
//   }
// }
//   document.addEventListener("keydown", function(event){
//     jump(); 
//   });
// var animal=document.getElementById("animal");
// var player=document.getElementById("player");
// function jump(){
//   if(player.classList!="animate"){
//     player.classList.add("animate");
//   }
  
//   setTimeout(function(){
//  player.classList.remove("animate");
// }, 500);
// }
// var cheakDead=setInterval(function(){
//   var playerTop=parseInt(window.getComputedStyle(player).getPropertyValue("top"));
//   var animalLeft=parseInt(window.getComputedStyle(animal).getPropertyValue("left"));
//   if(animalLeft<40 && animalLeft>0 && playerTop>=130){
//     block.style.animation="none";
//     block.style.display="none";
//     alert("Game Over");
//   }
// },10);