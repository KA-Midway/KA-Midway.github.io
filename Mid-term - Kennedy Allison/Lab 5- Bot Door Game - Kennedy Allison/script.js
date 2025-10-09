let door1=document.getElementById("door1");
let door2=document.getElementById("door2");
let door3=document.getElementById("door3");
let startBtn=document.getElementById("start");

const list=document.getElementById("infolist");

let currentlyPlaying=true;
let numCloseDoors=3;
let currentStreak=document.getElementById("score-number");
let bestStreak=document.getElementById("high-score-number");
let score=0;
let highscore=0;

let botDoorPath="./images/robot.svg";
let beachDoorPath="./images/beach.svg";
let spaceDoorPath="./images/space.svg";
let closedDoorPath="./images/closed_door.svg";

let openDoor1;
let openDoor2;
let openDoor3;



const doorOpenSound=new Audio("./audio/open.mp3");

function openList(){
	if(list.style.display=="none"){
		list.style.display="block";
	} else{
		list.style.display="none";
	}
};

const playDoor=(door)=>{
	numCloseDoors--;
	
	if(numCloseDoors===0){
		gameOver("Win");
	} else if(isBot(door)){
		gameOver("Lose");
	}
};

const gameOver=(str)=>{
	if(str==="Win"){
		startBtn.innerHTML="You Win!";
		getScore();
	} else{
		startBtn.innerHTML="Game Over! You Lose!";
		score=0;
		currentStreak.innerHTML=score;
	}
	currentlyPlaying=false;
};

const getScore=()=>{
	score++;
	currentStreak.innerHTML=score;
	
	if(score>highscore){
		highscore=score;
		bestStreak.innerHTML=highscore;
	}
};

const startRound=()=>{ // arrow function
	door1.src=closedDoorPath;
	door2.src=closedDoorPath;
	door3.src=closedDoorPath;
	numCloseDoors=3;
	currentlyPlaying=true;
	startBtn.innerHTML="Good Luck!";
	
	randomChoreDoorGenerator();
};

const isClicked=(door)=>{
	if (door.getAttribute('src')==closedDoorPath) {
		return false;
	}else{
		return true;
	}
};

const isBot=(door)=>{
if (door.getAttribute('src')==botDoorPath) {
		return true;
	}else{
		return false;
	}
	
};

door1.onclick=()=>{
	console.log("Hello, I am door 1");
	console.log(door1.getAttribute('src'));
	//door1.src?=file:///C:/Users/xinxing.wu/Downloads/BotDoor/images/closed_door.svg
	
	if (currentlyPlaying && !isClicked(door1)) {
		doorOpenSound.play();
		door1.src=openDoor1;
		playDoor(door1);
	}/*else{
		door1.src=closedDoorPath;
	}*/
	
	if (isBot(door1)){
		console.log("You failed!");
	}else{
		console.log("Congratulation!");
	}
	
};

door2.onclick=()=>{
	console.log("Hello, I am door 2");
	console.log(door2.getAttribute('src'));
	
	if (currentlyPlaying && !isClicked(door2)) {
		doorOpenSound.play();
		door2.src=openDoor2;
		playDoor(door2);
	}/*else{
		door1.src=closedDoorPath;
	}*/
	
	if (isBot(door2)){
		console.log("You failed!");
	}else{
		console.log("Congratulation!");
	}
	
};

door3.onclick=()=>{
	console.log("Hello, I am door 3");
	console.log(door3.getAttribute('src'));
	
	if (currentlyPlaying && !isClicked(door3)) {
		doorOpenSound.play();
		door3.src=openDoor3;
		playDoor(door3);
	}/*else{
		door1.src=closedDoorPath;
	}*/
	
	if (isBot(door3)){
		console.log("You failed!");
	}else{
		console.log("Congratulation!");
	}
	
};

const randomChoreDoorGenerator=()=>{
	choreDoor=Math.floor(Math.random()*6);
	switch(choreDoor){
		case 0:
			openDoor1=botDoorPath;
			openDoor2=beachDoorPath;
			openDoor3=spaceDoorPath;
				break;
		case 1:
			openDoor1=botDoorPath;
			openDoor2=spaceDoorPath;
			openDoor3=beachDoorPath;
				break;
		case 2:
			openDoor1=beachDoorPath;
			openDoor2=botDoorPath;
			openDoor3=spaceDoorPath;
				break;
		case 3:
			openDoor1=spaceDoorPath;
			openDoor2=botDoorPath;
			openDoor3=beachDoorPath;
				break;
		case 4:
			openDoor1=beachDoorPath;
			openDoor2=spaceDoorPath;
			openDoor3=botDoorPath;
				break;
		case 5:
			openDoor1=spaceDoorPath;
			openDoor2=beachDoorPath;
			openDoor3=botDoorPath;
	}
};

startBtn.onclick=()=>{
	startRound();
}

startRound();