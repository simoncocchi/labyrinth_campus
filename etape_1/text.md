#Etape 1

De quoi avez vous besoin à chaque étape pour vous arrêter ? pour continuer ?

J'ai besoin de voir si la case ou je veux aller est un mur, n'existe pas, est une case ou je suis déja passer.

Pour continuer j'ai besoin de savoir qu'elle sont les direction qui sont a ma dispositions

Pseudo code

```
array
let start = array[0][0]
let positionActuel = start
let carrefour = [];

// Tant que je ne suis pas a l'arrivée je continue 
while(positionActuel !== 'G') {

let nbDeDirectionPosible = 0
// Je test si il y a plusieur possibilité de déplacement 
 if(array[caseBas] = 0) {
     nbDeDirectionPosible++;
 } else if (positionActuel[x+1][y] = 0) {
     nbDeDirectionPosible++;
 } else if (positionActuel[x][y-1] = 0) {
     nbDeDirectionPosible++;
 } else if (positionActuel[x-1][y] = 0) {
     nbDeDirectionPosible++;
 }

// S'il y a plusieur posibilité de déplacement je sauvegarde ma position pour y revenir plus tart
 if(nbDeDirectionPosible > 1 ) {
     carrefour.push(positionActuel)
 }

// Je test si je peux aller en bas a droite en haut et a gauche
 if(positionActuel[x][y+1] = 0) {
      positionActuel = 1
    positionActuel[x][y+1]
 } else {
     if(positionActuel[x+1][y] = 0) {
        positionActuel = 1
        positionActuel[x+1][y]
    } else {
        if(positionActuel[x][y-1] = 0) {
            positionActuel = 1
            positionActuel[x][y-1]
        } else {
            if(positionActuel[x-1][y] = 0) {
                 positionActuel = 1
                positionActuel[x-1][y]
            } else {
                // si je peux pas me deplacer je reviens a ma dernière posotion sauvegarder et je la supprime 
                positionActuel = carefour[lastpush]
                carrefour.pop // Suppression de la sauvegarde position
            }
        }
    }
}
```
