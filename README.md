# Beer

L’application affiche la liste de bière de la marque Brewdog. Au clic sur une bière, nous arrivons sur une page de détail de la bière. Actuellement, il n’y a pas grand chose de plus à y voir.

## À faire:

### Retour à la liste

Depuis le détail d’une bière, afficher un bouton permettant de revenir sur la page de la liste des bières

### Fonctionnalité "Favori"

Actuellement, la mise en favori d’une bière n’est enregistrée nulle part. Faire en sorte qu’une bière en favori soit enregistré (cache ou autre). La gestion de la mise en favori d’une bière doit être gérée dans le composant « beers.component.ts » et non dans l’enfant.

### Plus d’informations sur le détail de la bière

Sur la page de détail de la bière, affichez plus d’informations sur celle-ci: y mettre une image, afficher si la bière est en favori ou non et ajouter quelques point clés sur la bière.

### Ajout d’idées de recettes

Chaque bière a une liste de plats qui iraient bien avec (food_pairing).
Sur le détail de chaque bière, pour chaque plat des food_pairing, afficher une recette y correspondant avec une image, un titre et un lien vers cette recette.
Si une recette n’existe pas, ou que le résultat de la recherche de recette ne correspond pas tout à fait au texte de la recherche, c’est pas grave.
Attention, le nombre d’appel pour récupérer les recettes est bloqué à 10 par minutes. Si tu as une erreur 429, c’est que tu as atteint la limite. Il faut donc patienter un peu pour pouvoir tester à nouveau.

### Récupération des informations en amont de l’affichage de la page

Dans l’idéal, il faudrait que les informations à afficher soient déjà récupérées avant l’affichage des pages, afin de ne pas devoir attendre le chargement des recettes pour qu’elles s'affichent par exemple. Sinon, afficher un loader ou un skeleton.

### Testing

Ajouter un test - par exemple, vérifier qu’en cliquant sur le bouton « Favoris », la bière s’ajoute bien en favori en localStorage

### Mise en cache

Mettre en cache les bières et recettes pour éviter de les appeler plusieurs fois

## Projet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
