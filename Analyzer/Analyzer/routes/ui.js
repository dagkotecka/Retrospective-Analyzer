//
// Dagmara Kotecka 2016
// 
var crypto = require('crypto');

var maxIndexes = [];
var arr = [];
var tmpArr = [];

var returnGames = [];
var theGame;

var max;

var theFactors = ["creativity",
    "teammood",
    "collaboration",
    "communication",
    "involvement",
    "honesty",
    "perspective",
    "improvement",
    "entertainment"
];

var games = ['Speedboat', 'Starfish', 'Glad, Mad, Sad', '5L', '360 degrees of appreciation', 'Candy-Love', 'Mood & Improvements'];

var creativity = [{ "gameName" : "Speedboat", "value" : "8" } , 
    { "gameName" : "Glad, Mad, Sad", "value" : "3" }, 
    { "gameName" : "Starfish", "value" : "10" }, 
    { "gameName" : "Candy-Love", "value" : "5" }, 
    { "gameName" : "360 degrees of appreciation", "value" : "8" }, 
    { "gameName" : "Mood & Improvements", "value" : "8" }, 
    { "gameName" : "5L", "value" : "10" }];

var teammood = [{ "gameName" : "Speedboat", "value" : "1" } ,
    { "gameName" : "Glad, Mad, Sad", "value" : "10" }, 
    { "gameName" : "Starfish", "value" : "1" },
    { "gameName" : "Candy-Love", "value" : "5" }, 
    { "gameName" : "360 degrees of appreciation", "value" : "5" }, 
    { "gameName" : "Mood & Improvements", "value" : "10" }, 
    { "gameName" : "5L", "value" : "10" }];

var collaboration = [{ "gameName" : "Speedboat", "value" : "1" } , 
    { "gameName" : "Glad, Mad, Sad", "value" : "1" },
    { "gameName" : "Starfish", "value" : "1" }, 
    { "gameName" : "Candy-Love", "value" : "1" }, 
    { "gameName" : "360 degrees of appreciation", "value" : "8" }, 
    { "gameName" : "Mood & Improvements", "value" : "1" }, 
    { "gameName" : "5L", "value" : "1" }];

var communication = [{ "gameName" : "Speedboat", "value" : "5" } ,
    { "gameName" : "Glad, Mad, Sad", "value" : "4" }, 
    { "gameName" : "Starfish", "value" : "5" }, 
    { "gameName" : "Candy-Love", "value" : "8" }, 
    { "gameName" : "360 degrees of appreciation", "value" : "10" }, 
    { "gameName" : "Mood & Improvements", "value" : "4" }, 
    { "gameName" : "5L", "value" : "5" }];


var involvement = [{ "gameName" : "Speedboat", "value" : "5" } ,
    { "gameName" : "Glad, Mad, Sad", "value" : "2" },
    { "gameName" : "Starfish", "value" : "4" }, 
    { "gameName" : "Candy-Love", "value" : "6" },
    { "gameName" : "360 degrees of appreciation", "value" : "10" }, 
    { "gameName" : "Mood & Improvements", "value" : "5" },
    { "gameName" : "5L", "value" : "5" }];


var perspective = [{ "gameName" : "Speedboat", "value" : "10" } ,
    { "gameName" : "Glad, Mad, Sad", "value" : "1" },
    { "gameName" : "Starfish", "value" : "10" }, 
    { "gameName" : "Candy-Love", "value" : "8" }, 
    { "gameName" : "360 degrees of appreciation", "value" : "7" }, 
    { "gameName" : "Mood & Improvements", "value" : "5" }, 
    { "gameName" : "5L", "value" : "6" }];


var honesty = [{ "gameName" : "Speedboat", "value" : "1" } ,
    { "gameName" : "Glad, Mad, Sad", "value" : "1" },
    { "gameName" : "Starfish", "value" : "1" }, 
    { "gameName" : "Candy-Love", "value" : "7" }, 
    { "gameName" : "360 degrees of appreciation", "value" : "8" }, 
    { "gameName" : "Mood & Improvements", "value" : "1" }, 
    { "gameName" : "5L", "value" : "1" }];


var entertainment = [{ "gameName" : "Speedboat", "value" : "10" } ,
    { "gameName" : "Glad, Mad, Sad", "value" : "5" },
    { "gameName" : "Starfish", "value" : "5" }, 
    { "gameName" : "Candy-Love", "value" : "10" }, 
    { "gameName" : "360 degrees of appreciation", "value" : "7" }, 
    { "gameName" : "Mood & Improvements", "value" : "5" },
    { "gameName" : "5L", "value" : "10" }];

var improvement = [{ "gameName" : "Speedboat", "value" : "8" } ,
    { "gameName" : "Glad, Mad, Sad", "value" : "7" },
    { "gameName" : "Starfish", "value" : "10" }, 
    { "gameName" : "Candy-Love", "value" : "1" },
    { "gameName" : "360 degrees of appreciation", "value" : "7" }, 
    { "gameName" : "Mood & Improvements", "value" : "10" }, 
    { "gameName" : "5L", "value" : "8" }];

function indexesOfMax(arr, beg, it, func) {
    if (arr.length === 0) {
        return -1;
    }
    max = -1;
    for (var i = beg; i < arr.length; i+=it) {
        if (arr[i] > max) {
            maxIndexes = [];
            max = arr[i];
            maxIndexes.push(i);
        }
        else if (arr[i] === max) {
            maxIndexes.push(i);
        }
    }
    func();
}

function changeMaxToZero(func) {
    for (var i = 0; i < maxIndexes.length; i++) {
        arr[maxIndexes[i]] = 0;
    }
    func();
}

function addGames(factorArray) {
    for (var j = 0; j < factorArray.length; j++) {
        if (factorArray[j].value >= (max * 2) - 1) {
            tmpArr.push(factorArray[j].gameName);
            tmpArr.push(max);
        }
    }
}

function getGames(func) {
    tmpArr = [];
    for (var i = 0; i < maxIndexes.length; i++) {
        switch (theFactors[maxIndexes[i]]) {
            case "creativity":
                addGames(creativity);
                break;
            case "teammod":
                addGames(teammood);
                break;
            case "collaboration":
                addGames(collaboration);
                break;
            case "communication":
                addGames(communication);
                break;
            case "involvement":
                addGames(involvement);
                break;
            case "honesty":
                addGames(honesty);
                break;
            case "perspective":
                addGames(perspective);
                break;
            case "improvement":
                addGames(improvement);
                break;
            case "entertainment":
                addGames(entertainment);
                break;
        }
    }
    func();
}

function reduce() {
    if (returnGames.length === 0) {
        var seen = {};
        for (var i = 0; i < tmpArr.length; i+=2) {
            var game = tmpArr[i];
            if (seen[game] !== 1) {
                seen[game] = 1;
                returnGames.push(game);
                returnGames.push(max);
            }
        }
    }
    else {
        for (var i = 0; i < tmpArr.length; i += 2) {
            if (tmpArr.indexOf(returnGames[i]) !== -1) {
                var val = returnGames[i + 1];
                returnGames[i + 1] = parseInt(max) + parseInt(val);
            }
            else {
                returnGames.push(tmpArr[i]);
                returnGames.push(tmpArr[i + 1]);
            }
        }
    }
}

var noop = function () { };

exports.getGame = function (req, res) {
    arr = [];
    arr.push(req.body['creativity']);
    arr.push(req.body['teammood']);
    arr.push(req.body['collaboration']);
    arr.push(req.body['communication']);
    arr.push(req.body['involvement']);
    arr.push(req.body['perspective']);
    arr.push(req.body['honesty']);
    arr.push(req.body['entertainment']);
    arr.push(req.body['improvement']);
   
    returnGames = [];

    while (arr.indexOf("1") !== -1 || arr.indexOf("2") !== -1 ||
        arr.indexOf("3") !== -1 || arr.indexOf("4") !== -1 || arr.indexOf("5") !== -1) {
        indexesOfMax(arr, 0, 1, function () {
            changeMaxToZero(function () {
                getGames(function () {
                    reduce();
                });
            });
        })
    }
    if (returnGames.length === 0) {
        theGame = games[Math.floor(Math.random() * (games.length - 1))];
    }
    else if (returnGames.length !== 1) {
        indexesOfMax(returnGames, 1, 2, noop);
        theGame = [];
        if (maxIndexes.length === 1)
            theGame = returnGames[maxIndexes[0] - 1];
        else {
            for (var i=0; i < maxIndexes.length; i++) {
                theGame.push(returnGames[maxIndexes[i] - 1]);
            }
        }
    }

    res.send(theGame);
    res.end();

};

exports.gms = function (req, res) {
    res.render('gms', { title: 'Analyzer' });
};
exports.mood = function (req, res) {
    res.render('mood', { title: 'Analyzer' });
};
exports.starfish = function (req, res) {
    res.render('starfish', { title: 'Analyzer' });
};
exports.speedboat = function (req, res) {
    res.render('speedboat', { title: 'Analyzer' });
};
exports.fiveL = function (req, res) {
    res.render('5L', { title: 'Analyzer' });
};
exports.appr = function (req, res) {
    res.render('360', { title: 'Analyzer' });
};
exports.candy = function (req, res) {
    res.render('candy', { title: 'Analyzer' });
};
exports.index = function (req, res) {
    res.render('index', { title: 'Analyzer' });
};
exports.gameStart = function (req, res) {
    res.render('retro', { title: 'Analyzer' });
};