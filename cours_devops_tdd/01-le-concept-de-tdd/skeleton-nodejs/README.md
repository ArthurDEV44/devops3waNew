## Prérequis

Avant de pouvoir exécuter les tests, assurez-vous d'avoir Node.js et npm (gestionnaire de packages Node.js) installés sur votre système. Vous pouvez les télécharger et les installer depuis [nodejs.org](https://nodejs.org/).

## Chemin

1. ```bash
    cd cours_devops_tdd
    ```

2. ```bash
    cd 01-le-concept-de-tdd
    ```

3. ```bash 
    cd skeleton-nodejs
    ```

## Installation

1. ```bash
    npm install
    ```

## Exécution des tests

Pour exécuter les tests automatisés inclus dans ce projet, vous pouvez utiliser Jest, un framework de test JavaScript.

1. Utilisez la commande suivante pour lancer les tests :

   ```bash
   npm test
   ```

   Cela exécutera tous les tests définis dans le répertoire `tests` et affichera les résultats à l'écran.

2. Si vous souhaitez afficher le tableau de couverture de code, vous pouvez exécuter la commande suivante :

   ```bash
   npm test --coverage
   ```

   Cela générera un rapport de couverture de code dans le répertoire `coverage` à la racine de votre projet.