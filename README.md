# FizzBuzz API

API REST construite avec Express et TypeScript qui génère des séquences FizzBuzz.

## Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Créer le fichier .env
npm run setup

# 3. Lancer l'API
npm start
```

L'API est disponible sur **http://localhost:3001**.

## Description

Cette API implémente le célèbre problème FizzBuzz : pour chaque nombre de 1 à N :

- Les multiples de 3 sont remplacés par « Fizz »
- Les multiples de 5 sont remplacés par « Buzz »
- Les multiples de 3 et 5 sont remplacés par « FizzBuzz »

## Prérequis

- Node.js (v18 ou supérieur recommandé)
- npm

## Configuration

Créez un fichier `.env` à la racine du projet (voir `.env.example`) :

```env
PORT=3001
API_KEY=votre-clé-api-secrète
```

## Docker

```bash
# Construire l'image
docker build -t fizzbuzz-api .

# Lancer le conteneur
docker run -p 3001:3001 --env-file .env fizzbuzz-api
```

L'API sera accessible sur `http://localhost:3001`.

## Endpoints

### GET /api/fizzbuzz

**Authentification :** requise via le header `api_key`.

**Paramètres :** `limit` (optionnel) — nombre d'éléments à générer.

## Scripts

| Commande        | Description                                      |
| --------------- | ------------------------------------------------ |
| `npm run setup` | Crée `.env` à partir de `.env.example` si absent |
| `npm start`     | Compile et lance le serveur (port 3001)          |
| `npm test`      | Exécute les tests (Jest + supertest)             |
