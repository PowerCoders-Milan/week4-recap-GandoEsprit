// Rewrite the instructions in your own words
/*
    Creare un programma che produce l'acronimo di una frase in maiuscula
*/ 
// Write the objectives and the tests
/*
    Chiedere all'utilizatore di dare una frase
    Il programma da l'acronimo della frase in maiuscula
 */
// Write the pseudocode
/*
    Creare una variabile frase che contiene la frase dell'utilizatore
    Creare una variabile listParole che contiene le diverse parole della frase
    Creare una variabile che contiene le prime lettere delle diverse parole della frase

 */
// paste your JS generated by blockly below here

var frase, listParole, acronim, i;


frase = window.prompt('Scrive la tua frase');
listParole = frase.split(' ');
acronim = '';
var i_end = listParole.length;
var i_inc = 1;
if (1 > i_end) {
  i_inc = -i_inc;
}
for (i = 1; i_inc >= 0 ? i <= i_end : i >= i_end; i += i_inc) {
  acronim += String(listParole[(i - 1)].charAt(0).toUpperCase());
}
window.alert(acronim);
