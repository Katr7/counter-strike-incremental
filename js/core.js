function playerSave(){
    this.wins = 0;
    this.draws = 0;
    this.losses = 0;
    this.totalGames = 0;
    this.faceItWins = 0;
    this.faceItDraws = 0;
    this.faceItLosses = 0;
    this.faceItTotalGames = 0;
    this.cevoWins = 0;
    this.cevoDraws = 0;
    this.cevoLosses = 0;
    this.cevoTotalGames = 0;
    this.eseaWins = 0;
    this.eseaDraws = 0;
    this.eseaLosses = 0;
    this.eseaTotalGames = 0;
    this.rank = "Silver 1";
    this.points = 0;
    this.pointsNeeded = 5;
    this.dropChance = 5;
    this.money = 0;
    this.role = "No Role";
    this.hasRole = false;
    this.winLose = 0;
    this.inGameName = "null";
    this.hasName = false;
}

var Player = new playerSave();
var p = Player;

function updateHTML(elmId, value) {
  var elem = document.getElementById(elmId);
  if(typeof elem !== 'undefined' && elem !== null) {
    document.getElementById(elmId).innerHTML = value;
  }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function sleep(ms) {
    var unixtime_ms = new Date().getTime();
    while(new Date().getTime() < unixtime_ms + ms) {
    }
}

function askName(){
    if(p.hasName === false) {
        name = prompt('What is you username? (Case Sensitive)');
        p.inGameName = name;
        updateHTML("inGameName", p.inGameName);
        p.hasName = true;
    }
}

function askRole(){
  if(p.hasRole === false){
    askRole = prompt('What role do you want to play? (IGL, Lurker, Support, Entry Fragger or Awper)').toLowerCase();
    if(askRole === 'igl') {
      p.role = "IGL";
      p.hasRole = true;
      updateHTML("role", p.role);
    }
    else if(askRole === 'lurker'){
      p.role = "Lurker";
      p.hasRole = true;
      updateHTML("role", p.role);
    }
    else if(askRole === 'support'){
      p.role = "Support";
      p.hasRole = true;
      updateHTML("role", p.role);
    }
    else if(askRole === 'entry fragger'){
      p.role = "Entry Fragger";
      p.hasRole = true;
      updateHTML("role", p.role);
    }
    else if(askRole === 'awper'){
      p.role = "Awper";
      p.hasRole = true;
      updateHTML("role", p.role);
        }
    }
}

function changeRole(){
    p.hasRole = false;
    askRole();
    location.reload();
}

function fixMoney(){
    p.money = Math.round(p.money * 10) / 10;
}

function drop(){
    var getDrop = getRandomInt(1, 10);
    if(getDrop <= 2){
        var whichDrop = getRandomInt(1, 20);
        if(whichDrop <= 10){
            p.money = p.money + 0.1;
            updateHTML("money", Math.round(p.money * 100) / 100);
        }
            else if(whichDrop > 10 && p.money <= 15){
                p.money = p.money + 0.5;
                updateHTML("money", Math.round(p.money * 100) / 100);
            }
            else if(whichDrop > 15 && p.money <= 19){
                p.money = p.money + 1;
                updateHTML("money", Math.round(p.money * 100) / 100);
            }
            else if(whichDrop === 20){
                p.money = p.money + 5;
                updateHTML("money", Math.round(p.money * 100) / 100);
            }
    }
}

function playMatchmaking(){
    var int = getRandomInt(1, 19);
    if(int <= 13){
        p.wins++;
        p.totalGames++;
        p.points++;
        drop();
        updateHTML("points", p.points);
        updateHTML("totalGames", p.totalGames);
        updateHTML("wins", p.wins);
    }
    else if(int >= 15){
        p.losses++;
        p.totalGames++;
        p.points--;
        drop();
        updateHTML("points", p.points);
        updateHTML("totalGames", p.totalGames);
        updateHTML("losses", p.losses);
    }
    else if(int === 14){
        p.draws++;
        p.totalGames++;
        drop();
        updateHTML("totalGames", p.totalGames);
        updateHTML("draws", p.draws);
    }
}

function playCevo(){
    var cevoInt = getRandomInt(1, 19);
    if(cevoInt <= 13){
        p.cevoWins++;
        p.cevoTotalGames++;
        drop();
        updateHTML("cevoTotalGames", p.cevoTotalGames);
        updateHTML("cevoWins", p.cevoWins);
    }
    else if(cevoInt >= 15){
        p.cevoLosses++;
        p.cevoTotalGames++
        drop();
        updateHTML("cevoTotalGames", p.cevoTotalGames);
        updateHTML("cevoLosses", p.cevoLosses);
    }
    else if(cevoInt === 14){
        p.cevoDraws++;
        p.cevoTotalGames++;
        drop();
        updateHTML("cevoTotalGames", p.cevoTotalGames);
        updateHTML("cevoDraws", p.cevoDraws);
    }
}

function playEsea(){
    var cevoInt = getRandomInt(1, 19);
    if(cevoInt <= 13){
        p.eseaWins++;
        p.eseaTotalGames++;
        drop();
        updateHTML("eseaTotalGames", p.eseaTotalGames);
        updateHTML("eseaWins", p.eseaWins);
    }
    else if(cevoInt >= 15){
        p.eseaLosses++;
        p.eseaTotalGames++
        drop();
        updateHTML("eseaTotalGames", p.eseaTotalGames);
        updateHTML("eseaLosses", p.eseaLosses);
    }
    else if(cevoInt === 14){
        p.eseaDraws++;
        p.eseaTotalGames++;
        drop();
        updateHTML("eseaTotalGames", p.eseaTotalGames);
        updateHTML("eseaDraws", p.eseaDraws);
    }
}

function playFaceIt(){
    var cevoInt = getRandomInt(1, 19);
    if(cevoInt <= 13){
        p.faceItWins++;
        p.faceItTotalGames++;
        drop();
        updateHTML("faceItTotalGames", p.faceItTotalGames);
        updateHTML("faceItWins", p.faceItWins);
    }
    else if(cevoInt >= 15){
        p.faceItLosses++;
        p.faceItTotalGames++;
        drop();
        updateHTML("faceItTotalGames", p.faceItTotalGames);
        updateHTML("faceItLosses", p.faceItLosses);
    }
    else if(cevoInt === 14){
        p.faceItDraws++;
        p.faceItTotalGames++;
        drop();
        updateHTML("faceItTotalGames", p.faceItTotalGames);
        updateHTML("faceItDraws", p.faceItDraws);
    }
}

function testRank(){
  if(p.points === 5 || p.points === 6 || p.points === 7 || p.points === 8 || p.points === 9){
    p.rank = "Silver 2";
    p.pointsNeeded = 10;
    updateHTML("rank", p.rank);
    updateHTML("pointsNeeded", p.pointsNeeded);
  }
  else if(p.points >= 10 && p.points < 15){
    p.rank = "Silver 3";
    p.pointsNeeded = 15;
    updateHTML("rank", p.rank);
    updateHTML("pointsNeeded", p.pointsNeeded);
  }
  else if(p.points >= 15 && p.points < 20){
    p.rank = "Silver 4";
    p.pointsNeeded = 20;
    updateHTML("rank", p.rank);
    updateHTML("pointsNeeded", p.pointsNeeded);
  }
  else if(p.points >= 20 && p.points < 25){
    p.rank = "Silver Elite";
    p.pointsNeeded = 25;
    updateHTML("rank", p.rank);
    updateHTML("pointsNeeded", p.pointsNeeded);
  }
  else if(p.points >= 25 && p.points < 30){
    p.rank = "Silver Elite Master";
    p.pointsNeeded = 30;
    updateHTML("rank", p.rank);
    updateHTML("pointsNeeded", p.pointsNeeded);
  }
  else if(p.points >= 30 && p.points < 35){
    p.rank = "Gold Nova I";
    p.pointsNeeded = 35;
    updateHTML("rank", p.rank);
    updateHTML("pointsNeeded", p.pointsNeeded);
  }
  else if(p.points >= 35 && p.points < 40){
    p.rank = "Gold Nova II";
    p.pointsNeeded = 40;
    updateHTML("rank", p.rank);
    updateHTML("pointsNeeded", p.pointsNeeded);
  }
  else if(p.points >= 40 && p.points < 45){
    p.rank = "Gold Nova III";
    p.pointsNeeded = 45;
    updateHTML("rank", p.rank);
    updateHTML("pointsNeeded", p.pointsNeeded);
  }
  else if(p.points >= 45 && p.points < 50){
    p.rank = "Gold Nova Master";
    p.pointsNeeded = 50;
    updateHTML("rank", p.rank);
    updateHTML("pointsNeeded", p.pointsNeeded);
  }
  else if(p.points >= 50 && p.points < 55){
    p.rank = "Master Guardian I";
    p.pointsNeeded = 55;
    updateHTML("rank", p.rank);
    updateHTML("pointsNeeded", p.pointsNeeded);
  }
  else if(p.points >= 55 && p.points < 60){
    p.rank = "Master Guardian II";
    p.pointsNeeded = 60;
    updateHTML("rank", p.rank);
    updateHTML("pointsNeeded", p.pointsNeeded);
  }
  else if(p.points >= 60 && p.points < 65){
    p.rank = "Master Guardian Elite";
    p.pointsNeeded = 65;
    updateHTML("rank", p.rank);
    updateHTML("pointsNeeded", p.pointsNeeded);
  }
  else if(p.points >= 65 && p.points < 70){
    p.rank = "Distinguished Master Guardian";
    p.pointsNeeded = 70;
    updateHTML("rank", p.rank);
    updateHTML("pointsNeeded", p.pointsNeeded);
  }
  else if(p.points >= 70 && p.points < 75){
    p.rank = "Legendary Eagle";
    p.pointsNeeded = 75;
    updateHTML("rank", p.rank);
    updateHTML("pointsNeeded", p.pointsNeeded);
  }
  else if(p.points >= 75 && p.points < 80){
    p.rank = "Legendary Eagle Master";
    p.pointsNeeded = 80;
    updateHTML("rank", p.rank);
    updateHTML("pointsNeeded", p.pointsNeeded);
  }
  else if(p.points >= 80 && p.points < 85){
    p.rank = "Supreme Master First Class";
    p.pointsNeeded = 85;
    updateHTML("rank", p.rank);
    updateHTML("pointsNeeded", p.pointsNeeded);
  }
  else if(p.points >= 85){
    p.rank = "The Global Elite";
    p.pointsNeeded = "Max Rank Reached";
    updateHTML("rank", p.rank);
    updateHTML("pointsNeeded", p.pointsNeeded);
  }
};

function winLose(){
    if(p.wins / p.losses != "null" && p.wins / p.losses != "undefined"){
    p.winLose = (p.wins / p.losses);
    p.winLose = Math.round(p.winLose * 100) / 100;
    updateHTML("winLose", p.winLose);
    }
    else{
        p.winLose = 0;
        updateHTML("winLose", p.winLose);
    }
};

function save(){
    window.localStorage['Player'] = JSON.stringify(Player);
    window.s = JSON.parse(window.localStorage['Player']);
}

function load(){
    window.s = JSON.parse(window.localStorage['Player']);
    p.hasName = s.hasName;
    p.inGameName = s.inGameName;
    p.hasRole = s.hasRole;
    p.winLose = s.winLose;
    p.role = s.role;
    p.pointsNeeded = s.pointsNeeded;
    p.wins = s.wins;
    p.points = s.points;
    p.draws = s.draws;
    p.losses = s.losses;
    p.totalGames = s.totalGames;
    p.rank = s.rank;
    p.dropChance = s.dropChance;
    p.money = s.money;
    p.faceItWins = s.faceItWins;
    p.faceItDraws = s.faceItDraws;
    p.faceItLosses = s.faceItLosses;
    p.faceItTotalGames = s.faceItTotalGames;
    p.cevoWins = s.cevoWins;
    p.cevoDraws = s.cevoDraws;
    p.cevoLosses = s.cevoLosses;
    p.cevoTotalGames = s.cevoTotalGames;
    p.eseaWins = s.eseaWins;
    p.eseaDraws = s.eseaDraws;
    p.eseaLosses = s.eseaLosses;
    p.eseaTotalGames = s.eseaTotalGames;
    updateHTML("inGameName", p.inGameName);
    updateHTML("role", p.role);
    updateHTML("money", Math.round(p.money * 100) / 100);
    updateHTML("points", p.points);
    updateHTML("wins", p.wins);
    updateHTML("draws", p.draws);
    updateHTML("losses", p.losses);
    updateHTML("totalGames", p.totalGames);
    updateHTML("rank", p.rank);
    updateHTML("pointsNeeded", p.pointsNeeded);
    updateHTML("faceItTotalGames", p.faceItTotalGames);
    updateHTML("faceItWins", p.faceItWins);
    updateHTML("faceItDraws", p.faceItDraws);
    updateHTML("faceItLosses", p.faceItLosses);
    updateHTML("cevoWins", p.cevoWins);
    updateHTML("cevoDraws", p.cevoDraws);
    updateHTML("cevoLosses", p.cevoLosses);
    updateHTML("cevoTotalGames", p.cevoTotalGames);
    updateHTML("eseaWins", p.eseaWins);
    updateHTML("eseaDraws", p.eseaDraws);
    updateHTML("eseaLosses", p.eseaLosses);
    updateHTML("eseaTotalGames", p.eseaTotalGames);
  }

window.onload = function(){
    window.s = JSON.parse(window.localStorage['Player']);
    p.hasName = s.hasName;
    p.inGameName = s.inGameName;
    p.hasRole = s.hasRole;
    p.winLose = s.winLose;
    p.role = s.role;
    p.pointsNeeded = s.pointsNeeded;
    p.wins = s.wins;
    p.points = s.points;
    p.draws = s.draws;
    p.losses = s.losses;
    p.totalGames = s.totalGames;
    p.rank = s.rank;
    p.dropChance = s.dropChance;
    p.money = s.money;
    p.faceItWins = s.faceItWins;
    p.faceItDraws = s.faceItDraws;
    p.faceItLosses = s.faceItLosses;
    p.faceItTotalGames = s.faceItTotalGames;
    p.cevoWins = s.cevoWins;
    p.cevoDraws = s.cevoDraws;
    p.cevoLosses = s.cevoLosses;
    p.cevoTotalGames = s.cevoTotalGames;
    p.eseaWins = s.eseaWins;
    p.eseaDraws = s.eseaDraws;
    p.eseaLosses = s.eseaLosses;
    p.eseaTotalGames = s.eseaTotalGames;
    updateHTML("inGameName", p.inGameName);
    updateHTML("role", p.role);
    updateHTML("money", Math.round(p.money * 100) / 100);
    updateHTML("points", p.points);
    updateHTML("wins", p.wins);
    updateHTML("draws", p.draws);
    updateHTML("losses", p.losses);
    updateHTML("totalGames", p.totalGames);
    updateHTML("rank", p.rank);
    updateHTML("pointsNeeded", p.pointsNeeded);
    updateHTML("faceItTotalGames", p.faceItTotalGames);
    updateHTML("faceItWins", p.faceItWins);
    updateHTML("faceItDraws", p.faceItDraws);
    updateHTML("faceItLosses", p.faceItLosses);
    updateHTML("cevoWins", p.cevoWins);
    updateHTML("cevoDraws", p.cevoDraws);
    updateHTML("cevoLosses", p.cevoLosses);
    updateHTML("cevoTotalGames", p.cevoTotalGames);
    updateHTML("eseaWins", p.eseaWins);
    updateHTML("eseaDraws", p.eseaDraws);
    updateHTML("eseaLosses", p.eseaLosses);
    updateHTML("eseaTotalGames", p.eseaTotalGames);
  }

function deleteSave(){
    window.s = JSON.parse(window.localStorage['Player']);
    p.hasName = false;
    p.inGameName = "null";
    p.hasRole = false;
    p.winLose = 0;
    p.role = "No Role";
    p.wins = 0;
    p.draws = 0;
    p.losses = 0;
    p.totalGames = 0;
    p.rank = "Silver 1";
    p.points = 0;
    p.pointsNeeded = 5;
    p.dropChance = 5;
    p.money = 0;
    p.faceItWins = 0;
    p.faceItDraws = 0;
    p.faceItLosses = 0;
    p.faceItTotalGames = 0;
    p.cevoWins = 0;
    p.cevoDraws = 0;
    p.cevoLosses = 0;
    p.cevoTotalGames = 0;
    p.eseaWins = 0;
    p.eseaDraws = 0;
    p.eseaLosses = 0;
    p.eseaTotalGames = 0;
    s.money = p.money;
    s.hasName = p.hasName;
    s.winLose = p.winLose;
    s.inGameName = p.inGameName;
    s.dropChance = p.dropChance;
    s.pointsNeeeded = p.pointsNeeded;
    s.points = p.points;
    s.hasRole = p.hasRole;
    s.role = p.role;
    s.wins = p.wins;
    s.draws = p.draws;
    s.losses = p.losses;
    s.totalGames = p.totalGames;
    s.rank = p.rank;
    s.faceItWins = p.faceItWins;
    s.faceItDraws = p.faceItDraws;
    s.faceItLosses = p.faceItLosses;
    s.faceItTotalGames = p.faceItTotalGames;
    s.cevoWins = p.cevoWins;
    s.cevoDraws = p.cevoDraws;
    s.cevoLosses = p.cevoLosses;
    s.cevoTotalGames = p.cevoTotalGames;
    s.eseaWins = p.eseaWins;
    s.eseaDraws = p.eseaDraws;
    s.eseaLosses = p.eseaLosses;
    s.eseaTotalGames = p.eseaTotalGames;
    updateHTML("inGameName", p.inGameName);
    updateHTML("role", p.role);
    updateHTML("winLose", p.winLose);
    updateHTML("faceItWins", p.faceItWins);
    updateHTML("faceItDraws", p.faceItDraws);
    updateHTML("faceItLosses", p.faceItLosses);
    updateHTML("faceItTotalGames", p.faceItTotalGames);
    updateHTML("cevoWins", p.cevoWins);
    updateHTML("cevoDraws", p.cevoDraws);
    updateHTML("cevoLosses", p.cevoLosses);
    updateHTML("cevoTotalGames", p.cevoTotalGames);
    updateHTML("eseaWins", p.eseaWins);
    updateHTML("eseaDraws", p.eseaDraws);
    updateHTML("eseaLosses", p.eseaLosses);
    updateHTML("eseaTotalGames", p.eseaTotalGames);
    updateHTML("delay", p.delay);
    updateHTML("delayReduces", p.delayReduces);
    updateHTML("money", p.money);
    updateHTML("points", p.points);
    updateHTML("wins", p.wins);
    updateHTML("draws", p.draws);
    updateHTML("losses", p.losses);
    updateHTML("totalGames", p.totalGames);
    updateHTML("rank", p.rank);
    updateHTML("pointsNeeded", p.pointsNeeded);
}

window.setInterval(function(){
testRank();
winLose();
}, 100);



window.setInterval(function(){
save();
askRole();
fixMoney();
askName();
updateHTML("winLose", p.winLose);
}, 1000);
