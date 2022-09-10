
let noOfbuttons = document.querySelectorAll(".inner").length;
count = 1;
for(i=0; i< noOfbuttons; i++){
  document.querySelectorAll(".inner")[i].addEventListener("click", function(){
    count++;
    let randomNumber = Math.random() * 6;
  randomNumber = Math.floor(randomNumber) + 1;
  let color = this.getAttribute("id");
  let myVideo1 = document.querySelector(".video1");
  let myVideo2 = document.querySelector(".video2");
  let myVideo3 = document.querySelector(".video3");
  let myVideo4 = document.querySelector(".video4");
  let myVideo5 = document.querySelector(".video5");
  let myVideo6 = document.querySelector(".video6");

if(randomNumber === 1){
  document.querySelector("#yellow").style.zIndex = count;
  // myVideo1.loop = true;
  myVideo1.play();

  myVideo2.pause();
  myVideo3.pause();
  myVideo4.pause();
  myVideo5.pause();
  myVideo6.pause();
}else if(randomNumber === 2){
  document.querySelector("#green").style.zIndex = count;

  myVideo2.loop = true;
  myVideo2.play();

  myVideo1.pause();
  myVideo3.pause();
  myVideo4.pause();
  myVideo5.pause();
  myVideo6.pause();
}else if(randomNumber === 3){
  document.querySelector("#red").style.zIndex = count;

  myVideo3.loop = true;
  myVideo3.play();

  myVideo1.pause();
  myVideo2.pause();
  myVideo4.pause();
  myVideo5.pause();
  myVideo6.pause();
}else if(randomNumber === 4){
  document.querySelector("#pink").style.zIndex = count;

  // myVideo4.loop = true;
  myVideo4.play();

  myVideo1.pause();
  myVideo2.pause();
  myVideo3.pause();
  myVideo5.pause();
  myVideo6.pause();
}else if(randomNumber === 5){
  document.querySelector("#purple").style.zIndex = count;

  myVideo5.loop = true;
  myVideo5.play();

  myVideo1.pause();
  myVideo2.pause();
  myVideo3.pause();
  myVideo4.pause();
  myVideo6.pause();
}else if(randomNumber === 6){
  document.querySelector("#blue").style.zIndex = count;

  myVideo6.loop = true;
  myVideo6.play();

  myVideo1.pause();
  myVideo2.pause();
  myVideo3.pause();
  myVideo4.pause();
  myVideo5.pause();
}else {
console.log("error");
}

  });
}
// window.onload = function(){
// smallScreenF();
// }
// function smallScreenF(){
//   let body = document.getElementsByTagName('body')[0];
//   let length = body.clientWidth;
//   if(length < 601){
//     let newDiv = document.createElement("div");
//     newDiv.innerHTML = "<em class ='smallScreen'>'Please help<br> us<br> by<br> clicking <br>the video!'</em>";
//     document.querySelector(".fRow").appendChild(newDiv);
//   }else{
//     console.log("error");
//   }
//
// }

let date = new Date();
let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
}
let currentDate = date.toLocaleDateString("en",options);
let today = document.querySelector(".date");
today.innerHTML = currentDate;
