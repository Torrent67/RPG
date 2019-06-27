import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

let battle = {
  monster: [],
  fightNum: 0,
  floorNum: 0,
  bossCheck: 0
}

//Floor 1 list
let wolf = {
  name: " Lv 1 Wolf",
  maxhp: 20,
  hp: 20,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 5,
  attackMod: 0,
  defequip: 2,
  deftemp: 0,
  giveExp: 50,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let skeleton = {
  name: "Lv 1 Skelington",
  maxhp: 30,
  hp: 30,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 8,
  attackMod: 0,
  defequip: 4,
  deftemp: 0,
  giveExp: 70,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let slime = {
  name: "Lv 1 slime",
  maxhp: 15,
  hp: 15,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 3,
  attackMod: 0,
  defequip: 3,
  deftemp: 0,
  giveExp: 30,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let eyeball = {
  name: "Lv 5 Looker",
  maxhp: 60,
  hp: 60,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 15,
  attackMod: 0,
  defequip: 5,
  deftemp: 0,
  giveExp: 90,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let goblin = {
  name: "Lv 1 Goblin",
  maxhp: 25,
  hp: 25,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 6,
  attackMod: 0,
  defequip: 4,
  deftemp: 0,
  giveExp: 50,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}
//Floor 2 list

let kobold = {
  name: " Lv 9 Kobold",
  maxhp: 65,
  hp: 65,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 20,
  attackMod: 0,
  defequip: 5,
  deftemp: 0,
  giveExp: 70,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let ghost = {
  name: "Lv 11 Ghost",
  maxhp: 40,
  hp: 40,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 15,
  attackMod: 0,
  defequip: 15,
  deftemp: 0,
  giveExp: 100,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let mimic = {
  name: "Lv 15 mimic",
  maxhp: 70,
  hp: 70,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 20,
  attackMod: 0,
  defequip: 15,
  deftemp: 0,
  giveExp: 200,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let bat = {
  name: "Lv 10 Bat Storm",
  maxhp: 40,
  hp: 40,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 10,
  attackMod: 0,
  defequip: 15,
  deftemp: 0,
  giveExp: 200,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let zombie = {
  name: "Lv 14 Zombie",
  maxhp: 50,
  hp: 50,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 15,
  attackMod: 0,
  defequip: 15,
  deftemp: 0,
  giveExp: 100,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}


//Floor 3 list

let rat = {
  name: " Lv 25 Rat",
  maxhp: 100,
  hp: 100,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 30,
  attackMod: 0,
  defequip: 15,
  deftemp: 0,
  giveExp: 140,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let roper = {
  name: "Lv 24 Roper",
  maxhp: 150,
  hp: 150,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 28,
  attackMod: 0,
  defequip: 10,
  deftemp: 0,
  giveExp: 160,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let golem = {
  name: "Lv 30 Golem",
  maxhp: 300,
  hp: 300,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 48,
  attackMod: 0,
  defequip: 30,
  deftemp: 0,
  giveExp: 600,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let crab = {
  name: "Lv 27 Menacing Crab",
  maxhp: 140,
  hp: 140,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 30,
  attackMod: 0,
  defequip: 15,
  deftemp: 0,
  giveExp: 300,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let vampire = {
  name: "Lv 26 Vampire",
  maxhp: 300,
  hp: 300,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 35,
  attackMod: 0,
  defequip: 15,
  deftemp: 0,
  giveExp: 250,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

//Floor 4 list

let snake = {
  name: " Lv 35 Big Snake",
  maxhp: 300,
  hp: 300,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 30,
  attackMod: 0,
  defequip: 15,
  deftemp: 0,
  giveExp: 300,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let groper = {
  name: "Lv 40 Groper",
  maxhp: 400,
  hp: 400,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 28,
  attackMod: 0,
  defequip: 10,
  deftemp: 0,
  giveExp: 350,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let folem = {
  name: "Lv 45 Folem",
  maxhp: 600,
  hp: 600,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 48,
  attackMod: 0,
  defequip: 30,
  deftemp: 0,
  giveExp: 900,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let crabgang = {
  name: "Lv 2 Menacing Crab Gang",
  maxhp: 10000,
  hp: 10000,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 20,
  attackMod: 0,
  defequip: 0,
  deftemp: 0,
  giveExp: 1000,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let bcaptain = {
  name: "Lv 45 Bone Captain",
  maxhp: 400,
  hp: 400,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 35,
  attackMod: 0,
  defequip: 15,
  deftemp: 0,
  giveExp: 400,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

//Floor 5 list

let snake2 = {
  name: " Lv 55 Bigger Snake",
  maxhp: 500,
  hp: 500,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 50,
  attackMod: 0,
  defequip: 15,
  deftemp: 0,
  giveExp: 500,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let nopers = {
  name: "Lv 99 Nopers",
  maxhp: 5,
  hp: 5,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 80,
  attackMod: 0,
  defequip: 90,
  deftemp: 0,
  giveExp: 9999,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let wyvern = {
  name: "Lv 57 Wyvern",
  maxhp: 600,
  hp: 600,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 48,
  attackMod: 0,
  defequip: 30,
  deftemp: 0,
  giveExp: 1050,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let gryphon = {
  name: "Lv 60 Gryphon",
  maxhp: 500,
  hp: 500,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 46,
  attackMod: 0,
  defequip: 25,
  deftemp: 0,
  giveExp: 2000,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let koolbold = {
  name: "Lv 55 Koolbold Aid",
  maxhp: 600,
  hp: 600,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 50,
  attackMod: 0,
  defequip: 15,
  deftemp: 0,
  giveExp: 1500,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

//Floor 5 list

let demon = {
  name: " Lv 80 Lesser Demon",
  maxhp: 1000,
  hp: 1000,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 50,
  attackMod: 0,
  defequip: 30,
  deftemp: 0,
  giveExp: 2000,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let dvines = {
  name: "Lv 78 Demon Vines",
  maxhp: 2000,
  hp: 2000,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 40,
  attackMod: 0,
  defequip: 35,
  deftemp: 0,
  giveExp: 2500,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let drake = {
  name: "Lv 80 Drake",
  maxhp: 3000,
  hp: 3000,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 55,
  attackMod: 0,
  defequip: 30,
  deftemp: 0,
  giveExp: 3000,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let cerberus = {
  name: "Lv 89 Cerberus",
  maxhp: 5000,
  hp: 5000,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 70,
  attackMod: 0,
  defequip: 25,
  deftemp: 0,
  giveExp: 8000,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let warmachine = {
  name: "Lv 90 War Machine",
  maxhp: 9000,
  hp: 9000,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 80,
  attackMod: 0,
  defequip: 30,
  deftemp: 0,
  giveExp: 100000,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

// boss list
let boss1 = {
  name: "Lv 12 Lord Skelington",
  maxhp: 200,
  hp: 200,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 17,
  attackMod: 0,
  defequip: 10,
  deftemp: 0,
  giveExp: 500,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}
let boss2 = {
  name: "Lv 25 Master Looker",
  maxhp: 250,
  hp: 250,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 30,
  attackMod: 0,
  defequip: 20,
  deftemp: 0,
  giveExp: 2000,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}
let boss3 = {
  name: "Lv 38 Necromancer",
  maxhp: 400,
  hp: 400,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 40,
  attackMod: 0,
  defequip: 10,
  deftemp: 0,
  giveExp: 4000,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}
let boss4 = {
  name: "Lv 50 Black Knight Skelington",
  maxhp: 900,
  hp: 900,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 70,
  attackMod: 0,
  defequip: 30,
  deftemp: 0,
  giveExp: 10000,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}
let boss5 = {
  name: "Lv 70 Good boy dragon",
  maxhp: 2000,
  hp: 2000,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 100,
  attackMod: 0,
  defequip: 50,
  deftemp: 0,
  giveExp: 30000,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}
let boss6 = {
  name: "Lv 99 Mega Demon Lord of DEATH.",
  maxhp: 20000,
  hp: 20000,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 300,
  attackMod: 0,
  defequip: 100,
  deftemp: 0,
  giveExp: 800000,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let char1 = {
  name: "Ness",
  lv: 1,
  exp: 0,
  maxhp: 20,
  hp: 20,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 9,
  attackMod: 0,
  defequip: 2,
  deftemp: 0,
  heal: 15,
  tur: 0,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}
let char2 = {
  name: "Paula",
  lv: 1,
  exp: 0,
  maxhp: 15,
  hp: 15,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 6,
  attackMod: 0,
  defequip: 4,
  deftemp: 0,
  heal: 15,
  tur: 1,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}
let char3 = {
  name: "Jeff",
  lv: 1,
  exp: 0,
  maxhp: 25,
  hp: 25,
  attackPlus: function() {
    return this.attack + this.attackMod;
  },
  attack: 7,
  attackMod: 0,
  defequip: 3,
  deftemp: 0,
  heal: 15,
  tur: 2,
  defense: function() {
    return this.defequip + this.deftemp;
  }
}

let party = [char1,char2,char3];
let monsterList0 = [wolf,skeleton,slime,eyeball,goblin];
let monsterList1 = [kobold,ghost,mimic,bat,zombie];
let monsterList2 = [rat,roper,golem,crab,vampire];
let monsterList3 = [snake,groper,folem,crabgang,bcaptain];
let monsterList4 = [snake2,nopers,wyvern,gryphon,koolbold];
let monsterList5 = [demon,dvines,drake,cerberus,warmachine];
let floor = [monsterList0,monsterList1,monsterList2,monsterList3,monsterList4,monsterList5];
let bosslist = [boss1,boss2,boss3,boss4,boss5,boss6];

//player Combat
function playerattacking(you,turn,currentMonster) {
  if (you.hp > 0 && (turn % 4) === you.tur) {
    targetMonster(you, currentMonster);
    monsterSwap();
    chargeClear(you);
  } else if (you.hp <= 0) {
    $(".topbar").append(you.name + " is super dead!<br>");
  }
}

function attacking(char1,char2,char3,turn,currentMonster) {

  playerattacking(char1,turn,currentMonster);
  playerattacking(char2,turn,currentMonster);
  playerattacking(char3,turn,currentMonster);
}

function chargeClear(you) {
  you.attackMod = 0;
  $("#char" + (you.tur + 1)).removeClass("yellowborder");
}

function playerCharging(you,turn) {
  if (you.hp > 0 && (turn % 4) === you.tur) {
    you.attackMod += you.attack;
      if ((turn % 4) === 0) {
        $(".topbar").html(you.name + " is Powering up!");
        $("#char1").addClass("yellowborder");
      }
      if ((turn % 4) === 1) {
        $(".topbar").html(you.name + " is Powering up!");
        $("#char2").addClass("yellowborder");
      }
      if ((turn % 4) === 2) {
        $(".topbar").html(you.name + " is Powering up!");
        $("#char3").addClass("yellowborder");
      }

  } else if (you.hp <= 0) {
    $(".topbar").append(you.name + " is super dead!<br>");
  }
}

function charging(char1,char2,char3,turn) {

  playerCharging(char1,turn);
  playerCharging(char2,turn);
  playerCharging(char3,turn);
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

function clearDefense(){
  for (var i = 0; i <= 2; i++) {
    party[i].deftemp = 0;
    $("#char" + (i + 1)).removeClass("greenborder");
  }
}

function playerHealing(you,turn) {
  if (you.hp > 0 && (turn % 4) === you.tur) {
    you.hp += you.heal;
    if (you.hp > you.maxhp) {
      you.hp = you.maxhp;
    }
      if ((turn % 4) === 0) {
        $(".topbar").html(you.name + " is recovering!");
      }
      if ((turn % 4) === 1) {
        $(".topbar").html(you.name + " is recovering!");
      }
      if ((turn % 4) === 2) {
        $(".topbar").html(you.name + " is recovering!");
      }

  } else if (you.hp <= 0) {
    $(".topbar").append(you.name + " is super dead!<br>");
  }
}

function healing(char1,char2,char3,turn) {

  playerHealing(char1,turn);
  playerHealing(char2,turn);
  playerHealing(char3,turn);
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
  reciever.hp = reciever.hp - (attackHealCheck(attacker.attackPlus(), reciever.defense()));
  $(".topbar").append("<li>" + attacker.name + " deals " + (attackHealCheck(attacker.attackPlus(),reciever.defense())) + " Damage! to " + reciever.name + "</li>");
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
    char.attack += 4;
    char.maxhp += 10;
    char.hp = char.maxhp;
    char.heal += 2;
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
  clearDefense();
  }
}
//Monster behavior and lose checks
function monsterSwap() {
  if (battle.monster[0].hp <= 0) {
    for (let i = 0; i <= 2; i++) {
      party[i].exp += battle.monster[0].giveExp;
      levelupCheck(party[i]);
    }
    if (battle.bossCheck === 1) {
      battle.floorNum += 1;
      battle.bossCheck = 0;
    }
    let monsterNum = Math.floor((Math.random() * 5));
    $("#enemy").html(floor[battle.floorNum][monsterNum].name);
    floor[battle.floorNum][monsterNum].hp = floor[battle.floorNum][monsterNum].maxhp;
    battle.monster[0] = floor[battle.floorNum][monsterNum];
    battle.fightNum += 1;
    if (battle.fightNum >= 12) {
      battle.monster[0] = bosslist[battle.floorNum];
      $("#enemy").html(battle.monster[0].name);
      battle.monster[0].hp = battle.monster[0].maxhp;
      battle.bossCheck = 1;
      battle.fightNum = 0;
    }

  } else {
    $("#enemy").html(battle.monster[0].name);
  }
}
function printButtons(turn) {

    $("#playercon0").html("<a href='#' class='playeratt'>Attack</a>");
    $("#playercon1").html("<a href='#' class='playeratt'>Charge</a>");
    $("#playercon2").html("<a href='#' class='playeratt'>Defend</a>");
    $("#playercon3").html("<a href='#' class='playeratt'>Heal</a>");
    $("#playercon4").html("<a href='#' class='playeratt'>Cry</a>");
    $("#playercon5").html("<a href='#' class='playeratt'>Run</a>");


}
function turnHidden(turn) {
  $("#playercon0").html("");
  $("#playercon1").html("");
  $("#playercon2").html("");
  $("#playercon3").html("");
  $("#playercon4").html("");
  $("#playercon5").html("");
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
  battle.monster[0] = floor[battle.floorNum][Math.floor((Math.random() * 5))];
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
    turnHidden(turn);
    setTimeout(function(){ turnUI(turn); printButtons(turn); }, 250);
  });
  $("#playercon1").click(function() {
    $(".topbar").html("");
    $(".topbar").removeClass("redtext");
    charging(char1,char2,char3,turn);
    monsterTurn(turn);
    printStatus(char1,char2,char3);
    turn += 1;
    turnHidden(turn);
    setTimeout(function(){ turnUI(turn); printButtons(turn); }, 250);
  });

  $("#playercon2").click(function() {
    $(".topbar").html("");
    $(".topbar").removeClass("redtext");
    defending(char1,char2,char3,turn);
    monsterTurn(turn);
    printStatus(char1,char2,char3);
    turn += 1;
    turnHidden(turn);
    setTimeout(function(){ turnUI(turn); printButtons(turn); }, 250);
  });

  $("#playercon3").click(function() {
    $(".topbar").html("");
    $(".topbar").removeClass("redtext");
    healing(char1,char2,char3,turn);
    monsterTurn(turn);
    printStatus(char1,char2,char3);
    turn += 1;
    turnHidden(turn);
    setTimeout(function(){ turnUI(turn); printButtons(turn); }, 250);
  });


  $("#playercon5").click(function() {
    $(".topbar").html("");
    $(".topbar").removeClass("redtext");
    if (Math.floor((Math.random() * 4)) <= 2) {
      let monsterNum = Math.floor((Math.random() * 5));
      $("#enemy").html(floor[battle.floorNum][monsterNum].name);
      floor[battle.floorNum][monsterNum].hp = floor[battle.floorNum][monsterNum].maxhp;
      battle.monster[0] = floor[battle.floorNum][monsterNum];
      $(".topbar").html("Ran from Monster!");
  } else {
      $(".topbar").html("FAILED");
      monsterTurn(3);
  }
    printStatus(char1,char2,char3);
  });

});
