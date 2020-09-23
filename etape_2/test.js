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

// function testAllCase(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       if (array[i][j] === "G") {
//         console.log(
//           "La matrice de la case " + array[i][j] + " est [" + i + "][" + j + "]"
//         );
//         return array[i][j];
//       }
//     }
//   }
// }
// let test = testAllCase(labyrinth);
// console.log("test", test);

function monAlgoNul(array) {
  console.log("monAlgoNul -> array", array);
  let i = 0;
  let j = 0;
  let carrefour = [];

  let tour = 0;

  while (array[i][j] !== "G") {
    tour++;
    let nbDeDirectionPosible = 0;

    console.log(
      "La matrice de la case " + array[i][j] + " est [i = " + i + "][j = " + j + "]"
    );

    console.log(typeof i ," i = ", i )

    if (i < array.length - 1 && (array[i + 1][j] === 0 || array[i + 1][j] === "G")) {
      nbDeDirectionPosible++;
    }
    console.log("monAlgoNul -> nbDeDirectionPosible", nbDeDirectionPosible);
    if (j < array[i].length - 1 && (array[i][j + 1] === 0|| array[i][j + 1] === "G")) {
      nbDeDirectionPosible++;
    }
    if (i > 0 && (array[i - 1][j] === 0 || array[i - 1][j] === "G")) {
      nbDeDirectionPosible++;
    }
    if (j > 0 && (array[i][j - 1] === 0 || array[i][j - 1] === "G")) {
      nbDeDirectionPosible++;
    }

    console.log("monAlgoNul -> nbDeDirectionPosible", nbDeDirectionPosible);

    if (nbDeDirectionPosible > 1) {
      carrefour.push(i, j);
      console.log("monAlgoNul -> carrefour", carrefour);
    }
    if (i < array.length - 1 && (array[i + 1][j] === 0 || array[i + 1][j] === "G")) {
      array[i][j] = "x";
      i++;
    } else {
      if (j < array[i].length - 1 && (array[i][j + 1] === 0 || array[i][j + 1] === "G")) {
        array[i][j] = "x";
        j++;
      } else {
        if (i > 0 && (array[i - 1][j] === 0 || array[i - 1][j] === "G")) {
          array[i][j] = "x";
          i--;
        } else {
          if (j > 0 && (array[i][j - 1] === 0 || array[i][j - 1] === "G")) {
            array[i][j] = "x";
            j--;
          } else {
            array[i][j] = "x";
            // si je peux pas me deplacer je reviens a ma dernière posotion sauvegarder et je la supprime
            let lastValue = carrefour.length - 1;
            i = carrefour[lastValue - 1];
            j = carrefour[lastValue];
            carrefour.pop(); // Suppression de la sauvegarde position
            carrefour.pop()
            console.table("carrefour",carrefour)
          }
        }
      }
    }

    console.table(array);

    if (tour === 40) {
      return;
    }
  }
  console.log("Touvé, la sortie etait en ", i , j )
}

monAlgoNul(labyrinth);
