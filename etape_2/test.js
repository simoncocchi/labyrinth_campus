/* 
Test de chaque cote si cote possible X+1 du coup si X superieur a 1 cela veut dire plusieur route sont possible donc j'enregistre ma postion. 
Pour revenir quand on est bloqué. on revient a notre marqueur. 

Pour faire sortir du labinrinth une soluation seration de toujours essayer d'aller a droite(x-1 par rapport a la position actuel)
S'il n'y a pas de case a droite j'esseye d'aller devant (y + 1) 
Si pas possible droite et devant j'essaye sur la gauche (x + 1)
Sinon je vais en haut (y - 1)
*/

let labyrinth = [
  ["S", 1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 0, 1],
  [0, 1, 0, 1, "G", 0, 0],
  [0, 0, 0, 0, 1, 1, 0],
  [0, 1, 0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 1, 0],
];

function monAlgoNul(array) {
  console.log("monAlgoNul -> array", array);
  let start = array[0][0];
  let positionActuel = start;
  console.log("monAlgoNul -> positionActuel", positionActuel);
  console.log("indexof ", array.indexOf(positionActuel))
  while (positionActuel !== "G") {
    let nbDeDirectionPosible = 0;

    if (array[0][+ 1] === 0) {
      nbDeDirectionPosible++;
    }
    if (positionActuel[x + 1][y] === 0) {
      nbDeDirectionPosible++;
    }
    if (positionActuel[x][y - 1] === 0) {
      nbDeDirectionPosible++;
    }
    if (positionActuel[x - 1][y] === 0) {
      nbDeDirectionPosible++;
    }

    console.log("monAlgoNul -> nbDeDirectionPosible", nbDeDirectionPosible);

    return;
  }
}

monAlgoNul(labyrinth);
