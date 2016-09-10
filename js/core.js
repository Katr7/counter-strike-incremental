function playerSave(){
    this.wins = 0;
    this.draws = 0;
    this.losses = 0;
    this.totalGames = 0;
    this.rank = "Silver 1";
    this.points = 0;
    this.pointsNeeded = 5;
    this.dropChance = 5;
}

var Player = new playerSave();
var p = Player;

function updateHTML(elmId, value) {
    document.getElementById(elmId).innerHTML = value;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function playMatchmaking(){
    var int = getRandomInt(1, 19);
    if(int <= 13){
        p.wins++;
        p.totalGames++;
        p.points++;
        updateHTML("points", p.points);
        updateHTML("totalGames", p.totalGames);
        updateHTML("wins", p.wins);
    }
    else if(int >= 15){
        p.losses++;
        p.totalGames++;
        p.points--;
        updateHTML("points", p.points);
        updateHTML("totalGames", p.totalGames);
        updateHTML("losses", p.losses);
    }
    else if(int === 14){
        p.draws++;
        p.totalGames++;
        updateHTML("totalGames", p.totalGames);
        updateHTML("draws", p.draws);
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

function save(){
    window.localStorage['Player'] = JSON.stringify(Player);
    window.s = JSON.parse(window.localStorage['Player']);
}

function load(){
  window.s = JSON.parse(window.localStorage['Player']);
  p.pointsNeeded = s.pointsNeeded;
  p.wins = s.wins;
  p.points = s.points;
  p.draws = s.draws;
  p.losses = s.losses;
  p.totalGames = s.totalGames;
  p.rank = s.rank;
  p.dropChance = s.dropChance;
  updateHTML("points", p.points);
  updateHTML("wins", p.wins);
  updateHTML("draws", p.draws);
  updateHTML("losses", p.losses);
  updateHTML("totalGames", p.totalGames);
  updateHTML("rank", p.rank);
  updateHTML("pointsNeeded", p.pointsNeeded);
}

window.onload = function(){
  window.s = JSON.parse(window.localStorage['Player']);
  p.pointsNeeded = s.pointsNeeded;
  p.wins = s.wins;
  p.points = s.points;
  p.draws = s.draws;
  p.losses = s.losses;
  p.totalGames = s.totalGames;
  p.rank = s.rank;
  p.dropChance = s.dropChance;
  updateHTML("points", p.points);
  updateHTML("wins", p.wins);
  updateHTML("draws", p.draws);
  updateHTML("losses", p.losses);
  updateHTML("totalGames", p.totalGames);
  updateHTML("rank", p.rank);
  updateHTML("pointsNeeded", p.pointsNeeded);
}

function deleteSave(){
    window.s = JSON.parse(window.localStorage['Player']);
    p.wins = 0;
    p.draws = 0;
    p.losses = 0;
    p.totalGames = 0;
    p.rank = "Silver 1";
    p.points = 0;
    p.pointsNeeded = 5;
    p.maxDropChance = 100;
    p.dropChance = 5;
    s.dropChance = p.dropChance;
    s.pointsNeeeded = p.pointsNeeded;
    s.points = p.points;
    s.wins = p.wins;
    s.draws = p.draws;
    s.losses = p.losses;
    s.totalGames = p.totalGames;
    s.rank = p.rank;
    updateHTML("points", p.points);
    updateHTML("wins", p.wins);
    updateHTML("draws", p.draws);
    updateHTML("losses", p.losses);
    updateHTML("totalGames", p.totalGames);
    updateHTML("rank", p.rank);
    updateHTML("pointsNeeded", p.pointsNeeded);
}

window.setInterval(function(){
save();
testRank();
}, 100);
