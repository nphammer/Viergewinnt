"use strict;"


var player1 = [];
var player2 = [];
var count = 0;
var winner = 0;
var wincoins = [];

const usedPerCol = [0, 0, 0, 0, 0, 0, 0]

for (let i=0; i<7; i++) {
    let columnDivElement = document.createElement("div");
    columnDivElement.classList.add("column");
    spielfeld.appendChild(columnDivElement);

    for (let o=0; o<6; o++) {
        let coinDivElement = document.createElement("div");
        coinDivElement.classList.add("coin");
        coinDivElement.classList.add("blue");
        coinDivElement.innerHTML = i.toString() + "." + o.toString();
    
        coinDivElement.id = i.toString() + o.toString();
        columnDivElement.appendChild(coinDivElement);
    }

}

function win(x, y, z) {
    var borderx1 = x - 3
    var borderx2 = x + 4
    var bordery1 = y - 3
    var bordery2 = y + 4

    count = 0
    if (z==1) {
        console.log("1")
        do {

            if (player1.includes(borderx1.toString() + y.toString())) {
                wincoins[count] = borderx1.toString() + y.toString();
                count++;
                borderx1++;
            }
    
            else {
                wincoins = [];
                count = 0;
                borderx1++;
            }
            
            if (count == 4) {
                console.log("Gelb gewinnt!");
                winner = 1;
                break;
            }

        } while (borderx1 != borderx2);

        borderx1 = x - 3
        borderx2 = x + 4
        bordery1 = y - 3
        bordery2 = y + 4
    
        count = 0;
        do {if (winner == 1) {break}

            if (player1.includes(x.toString() + bordery1.toString())) {
                wincoins[count] = x.toString() + bordery1.toString();
                count++;
                bordery1++;
            }
    
            else {
                wincoins = [];
                count = 0;
                bordery1++;
            }

            if (count == 4) {
                console.log("Gelb gewinnt!")
                winner = 1;
                break;
            }

        } while (bordery1 != bordery2);

        borderx1 = x - 3
        borderx2 = x + 4
        bordery1 = y - 3
        bordery2 = y + 4
    
        count = 0
        do {if (winner == 1) {break}

            if (player1.includes(borderx1.toString() + bordery1.toString())) {
                wincoins[count] = borderx1.toString() + bordery1.toString();
                count++;
                borderx1++;
                bordery1++;
            }
    
            else {
                wincoins = [];
                count = 0;
                borderx1++;
                bordery1++;
            }

            if (count == 4) {
                console.log("Gelb gewinnt!");
                winner = 1;
                break;
            }

        } while (borderx1 != borderx2);

        borderx1 = x - 3
        borderx2 = x + 4
        bordery1 = y + 3
        bordery2 = y - 4
    
        count = 0
        do {if (winner == 1) {break}

            if (player1.includes(borderx1.toString() + bordery1.toString())) {
                wincoins[count] = borderx1.toString() + bordery1.toString();
                count++;
                borderx1++;
                bordery1--;
            }
    
            else {
                wincoins = [];
                count = 0;
                borderx1++;
                bordery1--;
            }
            
            if (count == 4) {
                console.log("Gelb gewinnt!");
                winner = 1;
                break;
            }
            
        } while (borderx1 != borderx2);
    
        console.log("11");
    }

    else if (z==2) {
        console.log("2")
        do {
            
            if (player2.includes(borderx1.toString() + y.toString())) {
                wincoins[count] = borderx1.toString() + y.toString();
                count++;
                borderx1++;
            }
    
            else {
                wincoins = [];
                count = 0;
                borderx1++;
            }

            if (count == 4) {
                console.log("Rot gewinnt!");
                winner = 1;
                break;
            }

        } while (borderx1 != borderx2);

        borderx1 = x - 3
        borderx2 = x + 4
        bordery1 = y - 3
        bordery2 = y + 4
    
        count = 0;
        do {if (winner == 1) {break}

            if (player2.includes(x.toString() + bordery1.toString())) {
                wincoins[count] = x.toString() + bordery1.toString();
                count++;
                bordery1++;
            }
    
            else {
                wincoins = [];
                count = 0;
                bordery1++;
            }

            if (count == 4) {
                console.log("Rot gewinnt!")
                winner = 1;
                break;
            }

        } while (bordery1 != bordery2);

        borderx1 = x - 3
        borderx2 = x + 4
        bordery1 = y - 3
        bordery2 = y + 4
    
        count = 0
        do {if (winner == 1) {break}

            if (player2.includes(borderx1.toString() + bordery1.toString())) {
                wincoins[count] = borderx1.toString() + bordery1.toString();
                count++;
                borderx1++;
                bordery1++;
            }
    
            else {
                wincoins = [];
                count = 0;
                borderx1++;
                bordery1++;
            }

            if (count == 4) {
                console.log("Rot gewinnt!");
                winner = 1;
                break;
            }

        } while (borderx1 != borderx2);

        borderx1 = x - 3
        borderx2 = x + 4
        bordery1 = y + 3
        bordery2 = y - 4
    
        count = 0
        do {if (winner == 1) {break}

            if (player2.includes(borderx1.toString() + bordery1.toString())) {
                wincoins[count] = borderx1.toString() + bordery1.toString();
                count++;
                borderx1++;
                bordery1--;
            }
    
            else {
                wincoins = [];
                count = 0;
                borderx1++;
                bordery1--;
            }

            if (count == 4) {
                console.log("Rot gewinnt!");
                winner = 1
                break;
            }

        } while (borderx1 != borderx2);

        console.log("22");
    }

    console.log(player1, player2);
    console.log(wincoins)
}

var player = 0

var warnung = document.getElementById("lolol");
/*var colorbutton1 = document.getElementById("colorbutton1")
var colorbutton2 = document.getElementById("colorbutton2")*/

function farbe(f) {
    player = f;
    if (player == 1) {warnung.innerHTML = "Gelb beginnt"}
    if (player == 2) {warnung.innerHTML = "Rot beginnt"}
}

function einwerfen(col) {
    console.log("Einwerfen...")

    if (player==0) {warnung.innerHTML = "Wer beginnt? Wähle eine Farbe aus!"}
    else if (winner==1) {warnung.innerHTML = "Das Spiel ist vorbei! Starte das Spiel neu!"}
    else if (player1.length == 21 && player2.length == 21) {warnung.innerHTML = "Unentschieden! Starte das Spiel neu!"}
    else if (usedPerCol[col]>5) {}

    else {
        row = usedPerCol[col];

        let coin = document.getElementById(col.toString() + row.toString());

        coin.classList.remove("blue");

        if (player==1) {
            warnung.innerHTML = "Rot ist am Zug"
            coin.classList.add("yellow");
            player1[player1.length] = col.toString() + row.toString();
            win(col, row, player);
            if (winner == 1) {warnung.innerHTML = "Gelb gewinnt!"}
            player = 2;
        }

        else if(player==2) {
            warnung.innerHTML = "Gelb ist am Zug"
            coin.classList.add("red");
            player2[player2.length] = col.toString() + row.toString();
            win(col, row, player);
            if (winner == 1) {warnung.innerHTML = "Rot gewinnt!"}
            player = 1;
        }

        if (winner == 1) {
            for (w=0; w<4; w++) {
                let wincoin = document.getElementById(wincoins[w]);
                wincoin.classList.add("win");
            }
        }

        usedPerCol[col] = usedPerCol[col] + 1;

        console.log(usedPerCol)
        
    }
}

function resetGame() {
    console.log("Spiel neustarten...");

    for (x=0; x<7; x++) {

        usedPerCol[x] = 0;

        for (y=0; y<6; y++) {
            let coins = document.getElementById(x.toString() + y.toString());
            coins.classList.remove("red");
            coins.classList.remove("yellow");
            coins.classList.remove("win");
            coins.classList.add("blue")
        }
    }

    player = 0;
    player1 = []
    player2 = []
    winner = 0
    wincoins = []

    warnung.innerHTML = "Wer beginnt?";

    console.log(usedPerCol)
}