# emma.thewebanswer.com

Deux application (MERN Stack)

## Première application

Créer une application permettant l'édition et la création d'un article.

> nous allons créer un CRUD (create, read, update, delete)

MERN Stack : MongoDB (Mongoose), Express, React, Node.js

### Création du frontend

```bash
cd [project_folder]
mkdir frontend
cd frontend
npx create-react-app .
```

> Ici le "." permet de créer les fichiers directement dans le dossier on nous nous trouvons (frontend)

### Création du backend

```bash
cd ..
mkdir backend
cd backend
sudo npm install -g nodemon
npm install express cors mongoose dotenv
```

> On install les differents dependence qui vont nous servir

#### Création du server.js

> Parfois nommé "app.js"
