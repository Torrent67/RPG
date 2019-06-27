import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

let battle = {
  monster: []
}

let wolf = {
  maxhp: 10,
  hp: 10,
  name: " Lv 1 Wolf",
  attack: 2,
  defense: 3,
  giveExp: 10
}

let skeleton = {
  maxhp: 30,
  hp: 30,
  name: "Lv 1 Skelington",
  attack: 7,
  defense: 1,
  giveExp: 40
}

let slime = {
  maxhp: 5,
  hp: 5,
  name: "Lv 1 slime",
  attack: 1,
  defense: 3,
  giveExp: 100
}

let eyeball = {
  maxhp: 60,
  hp: 60,
  name: "Lv 5 Looker",
  attack: 10,
  defense: 2,
  giveExp: 25
}

let goblin = {
  maxhp: 20,
  hp: 20,
  name: "Lv 1 Goblin",
  attack: 5,
  defense: 3,
  giveExp: 100
}

let char1 = {
  lv: 1,
  exp: 0,
  maxhp: 20,
  hp: 20,
  name: "Ness",
  attack: 5,
  defense: 0,
  tur: 0
}
let char2 = {
  lv: 1,
  exp: 0,
  maxhp: 15,
  hp: 15,
  name: "Paula",
  attack: 3,
  defense: 0,
  tur: 1
}
let char3 = {
  lv: 1,
  exp: 0,
  maxhp: 25,
  hp: 25,
  name: "Jeff",
  attack: 4,
  defense: 0,
  tur: 2
}

let party = [char1,char2,char3];
let monsterList = [wolf,skeleton,slime,eyeball,goblin];

function attackHealCheck(att,def){
  if ((att - def) < 0) {
    return 0;
  } else {
    return att - def;
  }
}

function attack(attacker, reciever) {
  reciever.hp = reciever.hp - (attackHealCheck(attacker.attack, reciever.defense));
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


function monsterSwap(monsterCur) {
  if (monsterCur.hp <= 0) {
    for (let i = 0; i <= 2; i++) {
      party[i].exp += monsterCur.giveExp;
      levelupCheck(party[i]);
    }
  let monsterNum = Math.floor((Math.random() * 5));
  $("#enemy").html(monsterList[monsterNum].name);
  monsterList[monsterNum].hp = monsterList[monsterNum].maxhp;
  battle.monster[0] = monsterList[monsterNum];
} else {
  $("#enemy").html(monsterCur.name);
}
}

function levelupCheck(char) {
  if (char.exp > 100 * char.lv) {
    char.exp -= 100 * char.lv;
    char.lv += 1;
    char.attack += 3;
    char.maxhp += 5;
    char.hp = char.maxhp;
  }
}

function printStatus(char1,char2,char3) {
  $("#char1").html(char1.name + "<br>Lv: " + char1.lv + "<br>HP: " + char1.hp);
  $("#char2").html(char2.name + "<br>Lv: " + char1.lv + "<br>HP: " + char2.hp);
  $("#char3").html(char3.name + "<br>Lv: " + char1.lv + "<br>HP: " + char3.hp);
}

function playerattacking(you,turn,currentMonster) {
  if (you.hp > 0 && (turn % 4) === you.tur) {
    targetMonster(you, currentMonster);
    monsterSwap(currentMonster);
  } else if (you.hp <= 0) {
    $(".topbar").append(you.name + " is super dead!<br>");
  }
}

function attacking(char1,char2,char3,turn,currentMonster) {

  playerattacking(char1,turn,currentMonster);
  playerattacking(char2,turn,currentMonster);
  playerattacking(char3,turn,currentMonster);
}

function monsterTurn(turn) {
  let wipe = 0;
  if (battle.monster[0].hp > 0 && (turn % 4) === 3) {                  //Monster behavior and lose checks
    $(".topbar").addClass("redtext");
    let pTarget = Math.floor((Math.random() * 3));
    while (party[pTarget].hp <= 0) {
     pTarget = Math.floor((Math.random() * 3));
     if(party[0].hp <= 0 && party[1].hp <= 0 && party[2].hp <= 0) {
       $(".topbar").html("");
       $(".topbar").append("Everyone is super dead!");
       wipe = 1;
       break;
     }
    }
    if (wipe === 0) {
    monsterAttack(party[pTarget], battle.monster[0]);
  } else {
    $(".topbar").append("<br>YOU DIED");
  }
  }
}



$(function(){
  battle.monster[0] = monsterList[Math.floor((Math.random() * 5))];
  $("#enemy").html(battle.monster[0].name);
  printStatus(char1,char2,char3);

let turn = 0;
  $(".card").click(function() {
    $(".topbar").html("");
    $(".topbar").removeClass("redtext");
    attacking(char1,char2,char3,turn,battle.monster[0]);
    monsterTurn(turn);

    printStatus(char1,char2,char3);

    turn += 1;








  });
});
