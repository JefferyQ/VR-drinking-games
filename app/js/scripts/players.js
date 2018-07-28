function Player(displayName){

    this.displayName = displayName;
    this.cards = new CarDeck();
    this.desicions = [
        null,
        null,
        null,
        null,
    ]

    this.makeDesicion = function (gameState , decision) {
        if (gameState === gameState.roodZwart){
            console.log("roodzwart");
        }
        if (gameState === gameState.hogerLager){
            console.log("hogerlager");
        }
        if (gameState === gameState.binnenBuiten){
            console.log("binneBuiten");
        }
        if (gameState === gameState.welOfNiet){
            console.log("welofniet");
        }
    }

}

let player = new Player("Dagnel");

allPlayers = [
    player,
];

