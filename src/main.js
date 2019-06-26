import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';



let monster = {
  maxhp: 80,
  hp: 80,
  name: "monstah",
  attack: 2,
  defense: 4
}

let skeleton = {
  maxhp: 200,
  hp: 200,
  name: "Sir Skelington",
  attack: 10,
  defense: 1
}

let slime = {
  maxhp: 5,
  hp: 5,
  name: "weak slime",
  attack: 1,
  defense: 3
}

let eyeball = {
  maxhp: 60,
  hp: 60,
  name: "Looker",
  attack: 20,
  defense: 2
}

let goblin = {
  maxhp: 20,
  hp: 20,
  name: "goblin",
  attack: 5,
  defense: 5
}

let char1 = {
  maxhp: 80,
  hp: 80,
  name: "Ness",
  attack: 20,
  defense: 100
}
let char2 = {
  maxhp: 50,
  hp: 50,
  name: "Paula",
  attack: 7,
  defense: 100
}
let char3 = {
  maxhp: 70,
  hp: 70,
  name: "Jeff",
  attack: 15,
  defense: 100
}

let party = [char1,char2,char3];
let monsterList = [monster,skeleton,slime,eyeball,goblin];

function attackHealCheck(att,def){
  if ((att - def) < 0) {
    return 0;
  } else {
    return att - def;
  }
}

function attack(attacker, reciever) {
  reciever.hp = reciever.hp - (attackHealCheck(attacker.attack,reciever.defense));
  $(".topbar").append("<li>" + attacker.name + " deals " + (attackHealCheck(attacker.attack,reciever.defense)) + " Damage! to " + reciever.name + "</li>");
}

function targetMonster(you, monst) {
  attack(you,monst);
  if (monst.hp <= 0) {
    $(".topbar").append(you.name + " defeated a " + monst.name);
  }
}

function monsterAttack(you, monst) {
  attack(monst,you);
  if (you.hp <= 0) {
    $(".topbar").append(you.name + " is super dead!");
  }
}

function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}

function monsterSwap(monsterCur) {
  if (monsterCur.hp <= 0) {
  let monsterNum = Math.floor((Math.random() * 5));
  $("#enemy").html(monsterList[monsterNum].name);
  monsterList[monsterNum].hp = monsterList[monsterNum].maxhp
  return monsterList[monsterNum];
} else {
  $("#enemy").html(monsterCur.name);
  return monsterCur;
}
}

$(function(){
  let currentMonster = monsterList[Math.floor((Math.random() * 5))];
  $("#enemy").html(currentMonster.name);
  $("#char1").html(char1.name + "<br>HP: " + char1.hp);
  $("#char2").html(char2.name + "<br>HP: " + char2.hp);
  $("#char3").html(char3.name + "<br>HP: " + char3.hp);

let turn = 0;
let wipe = 0;
  $(".card").click(function() {
    $(".topbar").html("");
    $(".topbar").removeClass("redtext");
    if (char1.hp > 0 && (turn % 4) === 0) {
      targetMonster(char1, currentMonster);
      currentMonster = monsterSwap(currentMonster);
    }
    if (char2.hp > 0 && (turn % 4) === 1) {
      targetMonster(char2, currentMonster);
      currentMonster = monsterSwap(currentMonster);
    }
    if (char3.hp > 0 && (turn % 4) === 2) {
      targetMonster(char3, currentMonster);
      currentMonster = monsterSwap(currentMonster);
    }

    if (currentMonster.hp > 0 && (turn % 4) === 3) {                  //Monster behavior and lose checks
      $(".topbar").addClass("redtext");
      let pTarget = Math.floor((Math.random() * 3));
      while (party[pTarget].hp <= 0) {
       pTarget = Math.floor((Math.random() * 3));
       if(party[0].hp <= 0 && party[1].hp <= 0 && party[2].hp <= 0) {
         $(".topbar").append("Everyone is super dead!");
         wipe = 1;
         break;
       }
      }
      if (wipe === 0) {
      monsterAttack(party[pTarget], currentMonster);
    } else {
      $(".topbar").append("<br>YOU DIED");
    }
    }
    $("#char1").html(char1.name + "<br>HP: " + char1.hp);
    $("#char2").html(char2.name + "<br>HP: " + char2.hp);
    $("#char3").html(char3.name + "<br>HP: " + char3.hp);


    turn += 1;








  });
});
