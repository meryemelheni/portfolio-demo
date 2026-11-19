# Portfolio Next.js - Projet Platform Engineering

Ce projet a été généré automatiquement via un **Software Template Backstage**. Il illustre l'industrialisation complète du cycle de vie d'une application (CI/CD) depuis un portail développeur unique.

## 🚀 Architecture du projet

- **Application** : Next.js 14 (React 18)
- **Conteneurisation** : Docker (multi-stage build)
- **CI/CD** : GitHub Actions
- **Registry** : Docker Hub (`maryemelheni/portfolio-nextjs`)
- **Orchestration locale** : Docker Compose

## 📦 Fonctionnement du pipeline CI/CD

Le pipeline est défini dans `.github/workflows/cicd.yml`. Il se déclenche automatiquement à chaque `push` sur la branche `main` (ou manuellement).

1. **Job `build-and-push`** :
   - Se déclenche sur un runner GitHub hébergé (ubuntu-latest).
   - Construit l'image Docker de l'application.
   - Se connecte à Docker Hub (via les secrets `DOCKERHUB_USERNAME` et `DOCKERHUB_TOKEN`).
   - Pousse l'image avec un tag de version dynamique (`v${{ github.run_number }}`) et le tag `latest`.

2. **Job `deploy`** :
   - Se déclenche sur un runner **self-hosted** (installé sur la machine locale Windows).
   - Utilise `docker compose pull` pour récupérer la nouvelle image depuis Docker Hub.
   - Utilise `docker compose up -d` pour redémarrer le conteneur local.
   - Effectue un **Health Check** sur `http://localhost:3000/api/health`.

## 🐳 Exécution locale

L'application est accessible sur `http://localhost:3000`.
Le fichier `docker-compose.yml` gère le cycle de vie du conteneur :

```yaml
services:
  portfolio:
    image: ${IMAGE:-portfolio-nextjs:latest}
    ports:
      - "${HOST_PORT:-3000}:3000"
    healthcheck:
      test: ["CMD", "wget", "--spider", "http://localhost:3000/api/health"]
      interval: 10s
      timeout: 5s
      retries: 3
