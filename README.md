# FizzBuzz API

API REST construite avec Express et TypeScript qui génère des séquences FizzBuzz.

## Démarrage rapide

### Option 1 : Docker (le plus simple)

```bash
npm run setup
docker compose up --build
```

Interface sur **http://localhost:5173**, API sur **http://localhost:3001**.

### Option 2 : En local

```bash
# 1. Installer les dépendances
npm install
cd frontend && npm install && cd ..

# 2. Créer le fichier .env
npm run setup

# 3. Lancer l'API (terminal 1)
npm start

# 4. Lancer l'interface (terminal 2)
npm run frontend
```

Interface sur **http://localhost:5173**, API sur **http://localhost:3001**.

---

## Description

Cette API implémente le célèbre problème FizzBuzz : pour chaque nombre de 1 à N :
- Les multiples de 3 sont remplacés par « Fizz »
- Les multiples de 5 sont remplacés par « Buzz »
- Les multiples de 3 et 5 sont remplacés par « FizzBuzz »

## Prérequis

- Node.js (v18 ou supérieur recommandé)
- npm

## Installation

```bash
npm install
```

## Configuration

Créez un fichier `.env` à la racine du projet (voir `.env.example`) :

```env
PORT=3001
API_KEY=votre-clé-api-secrète
```

| Variable | Description | Obligatoire |
|----------|-------------|-------------|
| `PORT` | Port du serveur (défaut : 3001) | Non |
| `API_KEY` | Clé d'authentification pour l'API | Oui |

## Lancement

```bash
# Compiler et lancer le serveur
npm start

# Ou en production (après compilation)
npm run start:prod
```

Le serveur démarre par défaut sur le port 3001.

## Docker

### Lancer tout le projet (API + interface React)

```bash
# 1. Créer le fichier .env
npm run setup

# 2. Lancer avec docker-compose
docker compose up --build
```

- **Interface** : http://localhost:5173
- **API** : http://localhost:3001

### API uniquement

```bash
# Construire l'image
docker build -t fizzbuzz-api .

# Lancer le conteneur (avec variables d'environnement)
docker run -p 3001:3001 -e API_KEY=votre-clé-api-secrète fizzbuzz-api

# Ou avec un fichier .env
docker run -p 3001:3001 --env-file .env fizzbuzz-api
```

L'API sera accessible sur `http://localhost:3001`.

## Endpoints

### GET /api/fizzbuzz

Génère une séquence FizzBuzz.

**Authentification :** requise via le header `api_key`.

**Paramètres de requête :**

| Paramètre | Type | Obligatoire | Description |
|-----------|------|-------------|-------------|
| `limit` | nombre | Non | Nombre d'éléments à générer (1 à N). Si absent, retourne un message d'accueil. |

**Exemples de requêtes :**

```bash
# Sans paramètre (message d'accueil)
curl -H "api_key: votre-clé-api-secrète" http://localhost:3001/api/fizzbuzz

# Avec une limite de 15
curl -H "api_key: votre-clé-api-secrète" "http://localhost:3001/api/fizzbuzz?limit=15"
```

**Exemple de réponse (limit=15) :**

```json
[1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
```

**Codes de réponse :**

- `200` : Succès
- `400` : Paramètre `limit` invalide (non numérique ou inférieur à 1)
- `401` : Clé API manquante ou invalide

## Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run setup` | Crée `.env` à partir de `.env.example` si absent |
| `npm start` | Compile le projet et lance le serveur API (port 3001) |
| `npm run build` | Compile le TypeScript en JavaScript |
| `npm run start:prod` | Lance le serveur (nécessite une compilation préalable) |
| `npm run frontend` | Lance l'interface React (port 5173) |
| `npm run frontend:build` | Compile l'interface pour la production |
| `npm test` | Exécute les tests (Jest + supertest) |
| `npm run test:watch` | Exécute les tests en mode watch |

## Tests

Les tests utilisent **Jest** et **supertest** :

```bash
npm test
```

Ils couvrent :
- Le service FizzBuzz (tests unitaires)
- Le middleware d'authentification (tests unitaires)
- L'endpoint `/api/fizzbuzz` (tests d'intégration)

## Structure du projet

```
fizzbuzz-api/
├── src/
│   ├── index.ts          # Point d'entrée de l'application
│   ├── app.ts            # Configuration Express (exportée pour les tests)
│   ├── api.test.ts       # Tests d'intégration
│   ├── middleware/
│   │   ├── apiKeyAuth.ts
│   │   └── apiKeyAuth.test.ts
│   ├── routes/
│   │   └── fizzbuzz.ts
│   └── services/
│       ├── fizzBuzz.ts
│       └── fizzBuzz.test.ts
├── frontend/              # Interface React (bonus)
│   └── src/
│       ├── api/          # Couche API (appels fetch)
│       ├── hooks/         # useFizzBuzz
│       ├── components/   # Composants réutilisables
│       └── pages/
├── dist/                  # Sortie de compilation (générée)
├── Dockerfile
├── .dockerignore
├── .env.example
└── package.json
```
