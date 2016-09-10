function playerSave(){
    this.wins = 0;
    this.draws = 0;
    this.losses = 0;
    this.totalGames = 0;
    this.rank = "Silver 1";
    this.points = 0;
    this.pointsNeeded = 5;
    this.dropChance = 5;
    this.money = 0;
    this.delay = 2000;
    this.delayReduces = 0;
}

var Player = new playerSave();
var p = Player;

function updateHTML(elmId, value) {
    document.getElementById(elmId).innerHTML = value;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function sleep(ms) {
    var unixtime_ms = new Date().getTime();
    while(new Date().getTime() < unixtime_ms + ms) {}
}

function reduceDelay(){
    var reducePrice = Math.floor(10 * Math.pow(1.1,p.delayReduces));
    if(p.money >= reducePrice && p.delayReduces < 10){
        p.money = p.money - reducePrice;
        p.delayReduces = p.delayReduces + 1;
        p.delay = p.delay - 100;
        updateHTML("delay", p.delay);
        updateHTML("money", p.money);
        updateHTML("delayReduces", p.delayReduces);
    }
}

function drop(){
    var getDrop = getRandomInt(1, 10);
    if(getDrop <= 2){
        var whichDrop = getRandomInt(1, 20);
        if(whichDrop <= 10){
            p.money = p.money + 0.1;
            updateHTML("money", Math.round(p.money * 10) / 10);
        }
            else if(whichDrop > 10 && p.money <= 15){
                p.money = p.money + 0.5;
                updateHTML("money", Math.round(p.money * 10) / 10);
            }
            else if(whichDrop > 15 && p.money <= 19){
                p.money = p.money + 1;
                updateHTML("money", Math.round(p.money * 10) / 10);
            }
            else if(whichDrop === 20){
                p.money = p.money + 5;
                updateHTML("money", Math.round(p.money * 10) / 10);
            }
    }
}

function playMatchmaking(){
    var int = getRandomInt(1, 19);
    if(int <= 13){
        sleep(p.delay);
        p.wins++;
        p.totalGames++;
        p.points++;
        drop();
        updateHTML("points", p.points);
        updateHTML("totalGames", p.totalGames);
        updateHTML("wins", p.wins);
    }
    else if(int >= 15){
        sleep(p.delay);
        p.losses++;
        p.totalGames++;
        p.points--;
        drop();
        updateHTML("points", p.points);
        updateHTML("totalGames", p.totalGames);
        updateHTML("losses", p.losses);
    }
    else if(int === 14){
        sleep(p.delay);
        p.draws++;
        p.totalGames++;
        drop();
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
  p.money = s.money;
  p.delay = s.delay;
  p.delayReduces = s.delayReduces;
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
    p.money = s.money;
    p.delay = s.delay;
    p.delayReduces = s.delayReduces;
    updateHTML("delayReduces", p.delayReduces);
    updateHTML("delay", p.delay);
    updateHTML("money", p.money);
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
    p.dropChance = 5;
    p.money = 0;
    p.delay = 2000;
    p.delayReduces = 0;
    s.delayReduces = p.delayReduces;
    s.delay = p.delay;
    s.money = p.money;
    s.dropChance = p.dropChance;
    s.pointsNeeeded = p.pointsNeeded;
    s.points = p.points;
    s.wins = p.wins;
    s.draws = p.draws;
    s.losses = p.losses;
    s.totalGames = p.totalGames;
    s.rank = p.rank;
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
}, 100);
