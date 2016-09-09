function playerSave(){
    this.wins = 0;
    this.draws = 0;
    this.losses = 0;
    this.totalGames = 0;
    this.rank = "Silver 1";
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
    if(int <= 9){
        p.wins++;
        p.totalGames++;
        updateHTML("totalGames", p.totalGames);
        updateHTML("wins", p.wins);
    }
    else if(int >= 11){
        p.losses++;
        p.totalGames++;
        updateHTML("totalGames", p.totalGames);
        updateHTML("losses", p.losses);
    }
    else if(int === 10){
        p.draws++;
        p.totalGames++;
        updateHTML("totalGames", p.totalGames);
        updateHTML("draws", p.draws);
    }
}

function save(){
    window.localStorage['SaveName'] = JSON.stringify(Player);

    window.s = JSON.parse(window.localStorage['SaveName']);
}

function load(){
    window.s = JSON.parse(window.localStorage['SaveName']);
    p.wins = s.wins;
    p.draws = s.draws;
    p.losses = s.losses;
    p.totalGames = s.totalGames;
    p.rank = s.rank;
    updateHTML("wins", p.wins);
    updateHTML("draws", p.draws);
    updateHTML("losses", p.losses);
    updateHTML("totalGames", p.totalGames);
    updateHTML("rank", p.rank);
}

window.onload = function(){
    window.s = JSON.parse(window.localStorage['SaveName']);
    p.wins = s.wins;
    p.draws = s.draws;
    p.losses = s.losses;
    p.totalGames = s.totalGames;
    p.rank = s.rank;
    updateHTML("wins", p.wins);
    updateHTML("draws", p.draws);
    updateHTML("losses", p.losses);
    updateHTML("totalGames", p.totalGames);
    updateHTML("rank", p.rank);
}

function deleteSave(){
    window.s = JSON.parse(window.localStorage['SaveName']);
    p.wins = 0;
    p.draws = 0;
    p.losses = 0;
    p.totalGames = 0;
    p.rank = "Silver 1";
    s.wins = p.wins;
    s.draws = p.draws;
    s.losses = p.losses;
    s.totalGames = p.totalGames;
    s.rank = p.rank;
    updateHTML("wins", p.wins);
    updateHTML("draws", p.draws);
    updateHTML("losses", p.losses);
    updateHTML("totalGames", p.totalGames);
    updateHTML("rank", p.rank);
}

window.setInterval(function(){
	save();
}, 100);
