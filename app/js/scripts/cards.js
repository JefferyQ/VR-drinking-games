function CarDeck(){

    this.cards = [];

    this.fillDeck = function () {
        this.cards = [
            ["Harten aas","H",1], ["Harten 2","H",2], ["Harten 3","H",3], ["Harten 4","H",4], ["Harten 5","H",5], ["Harten 6","H",6], ["Harten 7","H",7], ["Harten 8","H",8], ["Harten 9","H",9], ["Harten 10","H",10], ["Harten boer","H",11], ["Harten vrouw","H",12] , ["Harten koning","H",13],
            ["Ruiten aas","R",1], ["Ruiten 2","R",2], ["Ruiten 3","R",3], ["Ruiten 4","R",4], ["Ruiten 5","R",5], ["Ruiten 6","R",6], ["Ruiten 7","R",7], ["Ruiten 8","R",8], ["Ruiten 9","R",9], ["Ruiten 10","R",10], ["Ruiten boer","R",11], ["Ruiten vrouw","R",12] , ["Ruiten koning","R",13],
            ["Schoppen aas","S",1], ["Schoppen 2","S",2], ["Schoppen 3","S",3], ["Schoppen 4","S",4], ["Schoppen 5","S",5], ["Schoppen 6","S",6], ["Schoppen 7","S",7], ["Schoppen 8","S",8], ["Schoppen 9","S",9], ["Schoppen 10","S",10], ["Schoppen boer","S",11], ["Schoppen vrouw","S",12] , ["Schoppen koning","S",13],
            ["Klaver aaK","K",1], ["Klaver 2","K",2], ["Klaver 3","K",3], ["Klaver 4","K",4], ["Klaver 5","K",5], ["Klaver 6","K",6], ["Klaver 7","K",7], ["Klaver 8","K",8], ["Klaver 9","K",9], ["Klaver 10","K",10], ["Klaver boer","K",11], ["Klaver vrouw","K",12] , ["Klaver koning","K",13]
        ]
    };

    this.getCardName = function(card){
        return card[0];
    };

    this.getCardValue = function(card){
        return card[1];
    };

    this.getCardSuite = function(card){
        return card[2];
    };

    this.takeRandomCard = function () {
        if (this.cards.length){
            for(let i = this.cards.length-1; i>=0; i--){

                let indexToSplice = Math.floor(Math.random()*this.cards.length);
                let splicedItem = this.cards[indexToSplice];
                this.cards.splice(indexToSplice, 1);

                console.log(splicedItem);
                return splicedItem;
            }
        }
        else{
            return null;
        }
    };

    this.getCardAmount = function(){
        if (this.cards){
            return this.cards.length;
        }
        return 0;
    };
}

let cardDeck = new CarDeck();
cardDeck.fillDeck();