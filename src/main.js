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
  defequip: 2,
  deftemp: 0,
  giveExp: 10,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let skeleton = {
  maxhp: 30,
  hp: 30,
  name: "Lv 1 Skelington",
  attack: 7,
  defequip: 1,
  deftemp: 0,
  giveExp: 40,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let slime = {
  maxhp: 5,
  hp: 5,
  name: "Lv 1 slime",
  attack: 1,
  defequip: 1,
  deftemp: 0,
  giveExp: 100,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let eyeball = {
  maxhp: 60,
  hp: 60,
  name: "Lv 5 Looker",
  attack: 10,
  defequip: 2,
  deftemp: 0,
  giveExp: 25,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let goblin = {
  maxhp: 20,
  hp: 20,
  name: "Lv 1 Goblin",
  attack: 5,
  defequip: 3,
  deftemp: 0,
  giveExp: 100,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let char1 = {
  lv: 1,
  exp: 0,
  maxhp: 20,
  hp: 20,
  name: "Ness",
  attack: 5,
  defequip: 0,
  deftemp: 0,
  tur: 0,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}
let char2 = {
  lv: 1,
  exp: 0,
  maxhp: 15,
  hp: 15,
  name: "Paula",
  attack: 3,
  defequip: 0,
  deftemp: 0,
  tur: 1,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}
let char3 = {
  lv: 1,
  exp: 0,
  maxhp: 25,
  hp: 25,
  name: "Jeff",
  attack: 4,
  defequip: 0,
  deftemp: 0,
  tur: 2,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let party = [char1,char2,char3];
let monsterList = [wolf,skeleton,slime,eyeball,goblin];

//player Combat
function playerattacking(you,turn,currentMonster) {
  if (you.hp > 0 && (turn % 4) === you.tur) {
    targetMonster(you, currentMonster);
    monsterSwap();
  } else if (you.hp <= 0) {
    $(".topbar").append(you.name + " is super dead!<br>");
  }
}

function attacking(char1,char2,char3,turn,currentMonster) {

  playerattacking(char1,turn,currentMonster);
  playerattacking(char2,turn,currentMonster);
  playerattacking(char3,turn,currentMonster);
}

function playerDefending(you,turn) {
  if (you.hp > 0 && (turn % 4) === you.tur) {
    you.deftemp += 5;
      if ((turn % 4) === 0) {
        $(".topbar").html(you.name + " is defending!");
        $("#char1").addClass("greenborder");
      }
      if ((turn % 4) === 1) {
        $(".topbar").html(you.name + " is defending!");
        $("#char2").addClass("greenborder");
      }
      if ((turn % 4) === 2) {
        $(".topbar").html(you.name + " is defending!");
        $("#char3").addClass("greenborder");
      }

  } else if (you.hp <= 0) {
    $(".topbar").append(you.name + " is super dead!<br>");
  }
}

function defending(char1,char2,char3,turn) {

  playerDefending(char1,turn);
  playerDefending(char2,turn);
  playerDefending(char3,turn);
}


function attackHealCheck(att,def){
  if ((att - def) < 0) {
    return 0;
  } else {
    return att - def;
  }
}

//Player Combat
function attack(attacker, reciever) {
  reciever.hp = reciever.hp - (attackHealCheck(attacker.attack, reciever.defense()));
  $(".topbar").append("<li>" + attacker.name + " deals " + (attackHealCheck(attacker.attack,reciever.defense())) + " Damage! to " + reciever.name + "</li>");
}

//Player
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


//Level up
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


 //Monster behavior and lose checks
function monsterTurn(turn) {
  let wipe = 0;
  if (battle.monster[0].hp > 0 && (turn % 4) === 3) {
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
//Monster behavior and lose checks
function monsterSwap() {
  if (battle.monster[0].hp <= 0) {
    for (let i = 0; i <= 2; i++) {
      party[i].exp += battle.monster[0].giveExp;
      levelupCheck(party[i]);
    }
    let monsterNum = Math.floor((Math.random() * 5));
    $("#enemy").html(monsterList[monsterNum].name);
    monsterList[monsterNum].hp = monsterList[monsterNum].maxhp;
    battle.monster[0] = monsterList[monsterNum];
  } else {
    $("#enemy").html(battle.monster[0].name);
  }
}
function printButtons(turn) {

    $("#playercon0").html("<a href='#' class='playeratt'>Attack</a>");
    $("#playercon1").html("<a href='#' class='playeratt'>Skills</a>");
    $("#playercon2").html("<a href='#' class='playeratt'>Defend</a>");
    $("#playercon3").html("<a href='#' class='playeratt'>Item</a>");
    $("#playercon4").html("<a href='#' class='playeratt'>Cry</a>");
    $("#playercon5").html("<a href='#' class='playeratt'>Run</a>");


}

function turnUI(turn) {
  if ((turn % 4) === 0) {
    $("#enemy").removeClass("redborder");
    $(".player").removeClass("redborder");
    $("#char1").addClass("redborder");
  }
  if ((turn % 4) === 1) {
    $("#enemy").removeClass("redborder");
    $(".player").removeClass("redborder");
    $("#char2").addClass("redborder");
  }
  if ((turn % 4) === 2) {
    $("#enemy").removeClass("redborder");
    $(".player").removeClass("redborder");
    $("#char3").addClass("redborder");
  }
  if ((turn % 4) === 3) {
    $(".player").removeClass("redborder");
    $("#enemy").addClass("redborder");
  }
}

$(function(){
  let turn = 0;
  battle.monster[0] = monsterList[Math.floor((Math.random() * 5))];
  $("#enemy").html(battle.monster[0].name);
  printStatus(char1,char2,char3);
  printButtons(turn);
  turnUI(turn);

  $("#playercon0").click(function() {
    $(".topbar").html("");
    $(".topbar").removeClass("redtext");
    attacking(char1,char2,char3,turn,battle.monster[0]);
    monsterTurn(turn);
    printStatus(char1,char2,char3);
    turn += 1;
    turnUI(turn);
  });

  $("#playercon2").click(function() {
    $(".topbar").html("");
    $(".topbar").removeClass("redtext");
    defending(char1,char2,char3,turn);
    monsterTurn(turn);
    printStatus(char1,char2,char3);
    turn += 1;
    turnUI(turn);
  });

  $("#playercon5").click(function() {
    $(".topbar").html("");
    $(".topbar").removeClass("redtext");
    if (Math.floor((Math.random() * 4)) <= 2) {
      let monsterNum = Math.floor((Math.random() * 5));
      $("#enemy").html(monsterList[monsterNum].name);
      monsterList[monsterNum].hp = monsterList[monsterNum].maxhp;
      battle.monster[0] = monsterList[monsterNum];
      $(".topbar").html("Ran from Monster!");
  } else {
      $(".topbar").html("FAILED");
      monsterTurn(3);
  }
    printStatus(char1,char2,char3);
  });

});
