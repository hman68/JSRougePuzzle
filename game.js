var section56 =[
[5,5,0,1,0,2,2],
[5,0,4,1,5,0,2],
[0,0,0,1,0,0,0],
[1,3,1,1,1,3,1],
[0,0,0,1,0,0,0],
[4,0,5,1,4,0,3],
[4,4,0,1,0,3,3]
],section55=[
[5,5,0,1,0,2,2],
[5,0,0,5,0,0,2],
[0,0,0,1,0,0,0],
[1,4,1,1,1,4,1],
[0,0,0,1,0,0,0],
[4,0,2,1,3,0,3],
[4,4,0,1,0,3,3]
],section54 = [
  [5,5,0,1,0,2,2],
  [5,0,0,1,0,0,2],
  [0,0,3,1,4,0,0],
  [1,1,1,1,1,1,1],
  [0,0,2,1,5,0,0],
  [4,0,0,1,0,0,3],
  [4,4,0,1,0,3,3]
], section53=[
  [5,5,0,1,0,2,2],
  [5,0,0,1,0,0,2],
  [0,0,0,5,0,0,0],
  [1,1,1,1,1,1,1],
  [0,0,2,1,3,0,0],
  [4,0,0,1,0,0,3],
  [4,4,0,1,0,3,3]
], section52=[
[5,5,0,1,0,2,2],
[5,0,0,1,0,0,2],
[0,0,0,1,0,0,0],
[1,1,2,1,3,1,1],
[0,0,0,1,0,0,0],
[4,0,0,1,0,0,3],
[4,4,0,1,0,3,3]
], section51=[
[5,5,0,1,0,2,2],
[5,0,0,1,0,0,2],
[0,0,0,1,4,0,0],
[1,1,1,1,1,1,1],
[0,0,0,1,0,0,0],
[4,0,0,1,0,0,3],
[4,4,0,1,0,3,3]
];
var section63 = [
  [2,2,1,0,1,5,5],
  [2,1,1,0,1,1,5],
  [1,1,1,3,1,1,5],
  [0,0,0,0,0,0,5],
  [1,1,4,0,5,1,4],
  [3,1,1,0,1,1,4],
  [3,3,1,0,1,4,4]
],section64 = [
  [2,2,1,0,1,5,5],
  [2,1,1,0,1,1,5],
  [1,1,3,0,2,1,5],
  [0,0,0,0,0,0,5],
  [1,1,4,0,5,1,4],
  [3,1,1,0,1,1,4],
  [3,3,1,0,1,4,4]
];

var sectionCol5 = randomNumber(1,6), sectionCol6=4;
const colors = ["blue","maroon","green","red","orange","yellow"];
const cvs = document.getElementById("window");
const ctx = cvs.getContext("2d");
const width = 7;
const height = 7;
window.addEventListener("keydown", eventHandler, false);
var playerX = 3;
var playerY = 3;
var sectionNum = 5;
var currentMapCol = eval("sectionCol"+sectionNum);
var currentMap = "section"+sectionNum+currentMapCol;
function defineMap(){currentMapCol = eval("sectionCol"+sectionNum);currentMap = "section"+sectionNum+currentMapCol;Draw();}
function Draw(){
  ctx.beginPath();
  ctx.fillStyle="maroon";
  for(x=0;x<width;x++){
    for(y=0;y<height;y++){
        var color = eval(currentMap)[y][x];
        ctx.fillStyle = colors[color];
        ctx.fillRect(x*20,y*20,20,20);
        ctx.stroke();
      }
    }
  ctx.fillStyle = "black";
  ctx.fillRect(playerX*20,playerY*20,20,20)
}
Draw();
function eventHandler(){
  if(event.key == "ArrowRight"){if(playerX<=width-2 && eval(currentMap)[playerY][playerX+1]<2){
    playerX++; console.log(playerX);Draw();}else if(playerX==width-1){sectionNum=sectionNum+1;playerX=0;defineMap();}}
  if(event.key == "ArrowLeft"){if(playerX>0 && eval(currentMap)[playerY][playerX-1]< 2){playerX--; console.log(playerX);Draw();}else if(playerX==0){sectionNum=sectionNum-1;playerX=width-1;defineMap();}}
  if(event.key == "ArrowUp"){if(playerY>0 && eval(currentMap)[playerY-1][playerX]< 2){playerY--; Draw();}}
  if(event.key == "ArrowDown"){if(playerY<=height-2 && eval(currentMap)[playerY+1][playerX]< 2){playerY++; Draw();}}
}
function randomNumber(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
