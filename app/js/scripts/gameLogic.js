let gameState = {
    roodZwart : 0,
    hogerLager : 1,
    binnenBuiten : 2,
    welOfNiet : 3,
    piramide : 4,
};

let decisions = {
    rood: "rood",
    zwart: "zwart",
    hoger: "hoger",
    lager: "lager",
    binnen: "binnen",
    buiten: "buiten",
    wel : "wel",
    niet : "niet",
    ofak : "ofak",
    disco : "disco",
    empty : null
};



function getGameState(){
    if (currentGameState !== gameState.piramide ){
        let lowestCards = getLowestCardAmountFromPlayers();

        if(lowestCards === 0) return gameState.roodZwart;
        if (lowestCards === 1) return gameState.hogerLager;
        if (lowestCards === 2) return gameState.binnenBuiten;
        if (lowestCards === 3) return gameState.welOfNiet;
    }
}

function didAllPlayersMakeADesicion() {
    for (let i = 0; i < allPlayers.length; i++) {
        alert(allPlayers.length);
        if (allPlayers[i].cards.getCardAmount() < lowest){
            lowest = allPlayers[i].cards.getCardAmount();
        }
    }
}

function getLowestCardAmountFromPlayers() {
    let lowest = 100;

    for (let i = 0; i < allPlayers.length; i++) {
        alert(allPlayers.length);
        if (allPlayers[i].cards.getCardAmount() < lowest){
            lowest = allPlayers[i].cards.getCardAmount();
        }
    }
    return lowest;
}

let currentGameState = gameState.roodZwart;