// dotenv
require('dotenv').config();
// initialize discord.js
const Discord = require('discord.js');
const client = new Discord.Client();

//login change in dotenv file for safety
client.login(process.env.BOTTOKEN);

// callback
client.on('ready', readyDiscord);
function readyDiscord(){
	console.log('connected')
}

// messages
client.on('message', gotMessage);
function gotMessage(msg){
	let x = msg.content;
	x = x.toLowerCase();

	if (x === 'rekha ?' || x === 'rekha?') {
		msg.reply('Tu veux quoi frr ?');
	}
	
}

/*let breakMsg = [
	'Pauuuuuuuse !!!',
	'Break !',
	'Pause !'];
let current = new Date();
let currentTime = (current.getHours()*60) + current.getMinutes();
console.log(currentTime);
let channel = '809472047398256710'
if (currentTime == 1239){
	client.channel.send(breakMsg[1]);
	client.channel.send("n'oubliez pas les tech-talks");
	client.channel.send("et myBecode");
}*/