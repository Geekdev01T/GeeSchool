# Gestion des Notes — École Primaire

Application de gestion des notes destinée à une école primaire : saisie des notes par les enseignants, calcul automatique des moyennes et rangs, génération des bulletins, et gestion administrative des élèves. Conçue pour un déploiement **local**, sur le réseau interne de l'établissement (pas d'hébergement en ligne requis).

## Fonctionnalités (V1)

- Gestion de l'année scolaire et des trimestres (ouverture/clôture)
- Gestion des classes et des matières (avec coefficients)
- Gestion des comptes enseignants et de leurs affectations (classe + matière)
- Création d'évaluations et saisie des notes
- Calcul automatique des moyennes par matière, moyenne générale pondérée et rang
- Génération des bulletins en PDF
- Gestion administrative des élèves par la secrétaire (inscription, affectation de classe, coordonnées du parent/tuteur)

## Feuille de route (Phase 2)

- Microservice Python (FastAPI) pour l'analyse des résultats : détection des élèves en difficulté, tendances par matière. Fonctionnera entièrement en local (pas d'appel à une API externe).

## Stack technique

| Composant | Technologie |
|---|---|
| Backend | Laravel (PHP) |
| Frontend | React + TypeScript |
| Pont backend/frontend | Inertia.js |
| Base de données | PostgreSQL |
| UI | Tailwind CSS, shadcn/ui |
| Build assets | Vite |

## Prérequis

- PHP (version exigée par le starter kit — voir `composer.json`)
- Composer
- Node.js + npm
- PostgreSQL

## Installation

```bash
git clone https://github.com/Geekdev01T/GeeSchool
cd gestion-notes
composer install
cp .env.example .env
php artisan key:generate
```

Configurer la base de données dans `.env` :

```
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=geeschool_db
DB_USERNAME=geeschool_user
DB_PASSWORD=votre_mot_de_passe
```

Puis :

```bash
php artisan migrate
npm install
```

## Lancer le projet en développement

Dans un terminal :

```bash
npm run dev
```

Dans un second terminal :

```bash
php artisan serve
```

## Déploiement local (réseau de l'établissement)

Pour un usage réel à l'école (accès depuis plusieurs postes du réseau interne) :

1. `npm run build` pour compiler les assets en production.
2. Configurer `APP_ENV=production` et `APP_URL` avec l'adresse locale de la machine-serveur.
3. Servir l'application via Nginx/Apache + PHP-FPM plutôt que `php artisan serve` (prévu pour le développement uniquement).
4. Mettre en place une sauvegarde régulière de la base PostgreSQL (export automatique vers un support externe).

## Rôles applicatifs

- **Directeur/Directrice** : configuration de l'année scolaire, des classes, des matières, gestion des comptes enseignants, validation et génération des bulletins.
- **Enseignant** : saisie des évaluations et des notes de sa/ses classe(s).
- **Secrétaire** : gestion administrative des élèves (inscription, coordonnées, affectation de classe), impression des bulletins.

## Licence

Ce projet est sous licence MIT.

Projet à usage interne — non destiné à une distribution publique.