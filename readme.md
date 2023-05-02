## Installation du projet

- git clone the project
- npm install
- npm run dev

# Découverte de l'API
L'intégralité de la data se trouve dans le ficheir *data.json*. NE pas y toucher.
Un json-server est mis en place et vous pouvez récupérer vos datas aux urls suivantes :
-  GET /actors http://localhost:4000/actors => tous nos acteurs
-  GET /actors/:id http://localhost:4000/actors/4 => l'acteur avec l'id 4
-  GET /status http://localhost:4000/status => tous les status
-  GET /species http://localhost:4000/species => toutes les espèces


# Objectif, cahier des charges
- L'utilisateur doit pouvoir consulter tous les acteurs afin de prendre connaissance du catalogue
- L'utilisateur doit pouvoir filtrer les acteurs par statut, afin de faciliter sa recherche
- L'utilisateur doit pouvoir filtrer les acteurs par espèce, afin de faciliter sa recherche
- L'utilisateur doit pouvoir accéder aux détails d'un acteur à partir de son url afin de pouvoir partager sa trouvaille
- Bonus: L'utilisateur doit pouvoir envoyer un message aux administrateurs afin de faire remonter ses impressions

