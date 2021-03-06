/* global shared, say */

const map_actions = [];
for (let i = 0; i < 128; i++) {
  map_actions[i] = [];
}

map_actions[4][6] = "I'm a computer!";
map_actions[4][9] = () => say(5, 9, "I'm an empty table!");
map_actions[21][42] = () => (shared.lightsOn = !shared.lightsOn);

// kitchen
map_actions[44][11] = "not broken"; // vending machine 1
map_actions[45][11] = "jk"; // vending machine 2
map_actions[48][14] = "it's still hot"; // pizza in kitchen
map_actions[48][10] = "drip"; // sink 1
map_actions[49][10] = "drop"; // sink 2

// bathrooms
map_actions[41][13] = "occupied"; // bathroom stall 1
map_actions[34][9] = "locked"; // locker 1
map_actions[34][8] = "empty"; // locker 2
map_actions[34][7] = "empty"; // locker 3
map_actions[34][6] = "art supplies"; // locker 4
map_actions[34][5] = "empty"; // locker 5
map_actions[34][4] = "tools"; // locker 6
map_actions[34][3] = "a 3d model"; // locker 7
map_actions[40][7] = "locked"; // bathroom stall 2
map_actions[40][4] = "occupied"; // bathroom stall 3

// making center
map_actions[54][10] = "wrr"; // laser cutter 1
map_actions[63][7] = "bzz"; //  laser cutter 2
map_actions[52][10] = "prr"; // laser cutter 3
map_actions[62][10] = "wrr"; // 3d printer 1
map_actions[61][10] = "bzz"; // 3d printer 2
map_actions[65][10] = "LEDs"; // toolbox
map_actions[52][12] = "*buzzer beeps*"; // Arduino 1
map_actions[56][8] = "*shorted*"; // Arduino 2

// elevators -- need help
map_actions[7][20] = "busy"; // elevator 1
map_actions[7][23] = "*Distant beep*"; // elevator 2
map_actions[7][26] = "..."; // elevator 3
map_actions[7][32] = "just left"; // elevator 4
map_actions[13][23] = "orange juice"; // drink in classroom

// entrance to main area
map_actions[18][31] = "off"; // av in classroom
map_actions[24][36] = "*flipped board*"; // catan board
map_actions[20][35] = "pew pew"; // game console

// PET Lab
map_actions[22][31] = ""; // computer
map_actions[20][29] = "Works of Game: On the Aesthetics of Games and Arts"; // bookshelf 1 -- how to include book titles?
map_actions[26][29] = "Metagame!"; // Bookshelf 2
map_actions[27][29] = "Metagame!"; // Bookshelf 3

// open area
map_actions[32][27] = "#1 nap spot"; // couch -- needs help
map_actions[33][27] = "#1 nap spot"; // couch
map_actions[34][27] = "#1 nap spot"; // couch
map_actions[35][27] = "#1 nap spot"; // couch
map_actions[38][28] = "spare materials"; // Materials Closet
map_actions[39][28] = "spare materials"; // Materials Closet
map_actions[52][28] = "*eyes flicker*"; // samurai robot
map_actions[41][32] = "1000 bells!"; // Nintendo switch
map_actions[45][32] = "it's cold"; // pizza box
map_actions[44][31] = "*DC motor spins*"; // Arduino
map_actions[53][32] = "transistors"; // toolbox
map_actions[54][33] = "it's from Joe's"; // pizza box
map_actions[54][31] = "pressed juice"; // drink
map_actions[32][33] = "sewing tools";
map_actions[35][45] = "red built a city";
map_actions[36][44] = "beep";
map_actions[39][45] = "password?";
map_actions[43][44] = "smoothie";
map_actions[43][45] = "Mario wins";
map_actions[44][45] = "*tangled*";
map_actions[47][44] = "check";

// northwest halls and classroom
map_actions[37][16] = "dun dun dun"; // piano
map_actions[38][16] = "dun dun dun"; // piano pt 2
map_actions[23][22] = "bubble tea <3"; // drink in classroom
map_actions[24][21] = "google docs"; // laptop in classroom

// lockers
map_actions[26][15] = "soldering irons";
map_actions[24][15] = "locked";
map_actions[23][15] = "an old VCR";
map_actions[20][16] = "empty";
map_actions[20][15] = "Arduino kit";
map_actions[20][13] = "locked";
map_actions[20][12] = "empty";
map_actions[21][11] = "empty";
map_actions[23][11] = "tangled wires";
map_actions[25][11] = "loose pens";
map_actions[27][11] = "old cables";

// 1204 classrooms
map_actions[43][21] = "projector on/off"; // AV computer in 1204A
map_actions[35][22] = "water"; // drink in 1204A
map_actions[53][19] = "Arduino 101"; // writing on whitboard 1204B
map_actions[49][23] = "*LED blinks*"; // Arduino
map_actions[58][20] = "tools & laptops";
map_actions[59][20] = "tools & laptops";
map_actions[57][22] = "starter kit"; // toolbox

// gameclub classroom
map_actions[72][21] = "Rattata appeared!"; // Switch 2 in classroom
map_actions[71][16] = "beep boop"; // game boy thing
map_actions[71][25] = "blue built a road"; // catan
map_actions[71][23] = "17 oz coffee"; // drink
map_actions[71][22] = "checkmate"; //chess
map_actions[72][23] = "it's still hot"; // pizza
map_actions[72][24] = "it's still hot"; // pizza
map_actions[73][13] = "Kirby wins!"; // nintendo switch
map_actions[74][12] = "more games"; // closet
map_actions[75][12] = "more games"; // closet pt 2

// east classrooms
map_actions[74][31] = "*Permanent marker*"; // whiteboard drawing small room
map_actions[68][40] = "tangled wires"; // toolbox corner classroom
map_actions[52][37] = "a seirpinski triangle"; // drawing in old compform room
map_actions[64][43] = "locked"; // locker 1
map_actions[64][44] = "locked"; //locker 2
map_actions[64][45] = "empty"; // locker 3
map_actions[68][44] = "kombucha"; // drink
map_actions[71][42] = "kaboom"; // game console
map_actions[74][38] = "log in"; // av computer
map_actions[56][37] = "Compform"; // writing

// game center corner
map_actions[23][43] = "Pawn to D12"; // Chessboard

// northeast halls
map_actions[65][16] = "Games, Design and Play"; // Bookshelf -- not full title
map_actions[53][16] = "Minecraft"; // Computer near making center
map_actions[54][16] = "Agar.io"; // computer 2
map_actions[59][16] = "games & books"; // closet pt 1
map_actions[60][16] = "games & books"; // closet pt 2
map_actions[62][21] = "bzz"; // 3d printer

// offices
map_actions[65][8] = ""; // bookshelf -- more books/games/published work by DT faculty
map_actions[75][7] = "compform.net"; // computer 1
map_actions[75][4] = ""; // computer 2 -- idk whose it is
map_actions[72][1] = "it's cold"; // pizza 1
map_actions[70][4] = "it's warm"; // pizza 2

// potential npcs
// map_actions[73][28] = "Welcome to game club!"; // Game club member  (wrong classroom but can change)
// map_actions[55][13] = "D12 Making center rules!"; // Making center tech
// map_actions[47][40] = "Need help?"; // DT Study Tutor
map_actions[72][5] = "You found me!"; // Justin
