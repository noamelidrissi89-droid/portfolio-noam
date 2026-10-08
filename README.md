# Portfolio de Noam

Portfolio en français réalisé avec Next.js, TypeScript et Tailwind CSS.

## Démarrer

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000.

## Personnaliser

- `data/portfolio.ts` : nom, adresse e-mail, réseaux sociaux, projets et liens.
- `app/page.tsx` : textes de présentation et sections.
- `app/globals.css` : couleurs, typographie et mise en page.
- `app/layout.tsx` : titre et description pour les moteurs de recherche.
- `app/icon.svg` : icône du site.

Orbit, Forma et Pulse sont des concepts de démonstration, pas des réalisations attribuées à Noam. Leurs aperçus sont statiques. Les boutons ouvrent les détails ; ajouter `github` et `demo` dans les données active les liens correspondants. L’e-mail, GitHub et LinkedIn sont vides volontairement : aucun formulaire n’envoie de message et aucun lien personnel n’est inventé.

Les biographies et les technologies proposées sont à ajuster à ton parcours avant publication.

## Vérifier

```bash
npm run build
npm run typecheck
```

## Publier sur Vercel

Le projet est compatible avec le déploiement Next.js standard sur Vercel. Depuis le dossier du projet, avec un compte Vercel connecté :

```bash
vercel
```

Cela crée un aperçu en ligne. Après vérification du contenu et des coordonnées :

```bash
vercel --prod
```

Aucune clé API n’est nécessaire. Si une intégration en demande plus tard, utiliser `.env.local` (ignoré par Git) et les variables d’environnement Vercel.

## Références

- [Installation Next.js](https://nextjs.org/docs/app/getting-started/installation)
- [Tailwind CSS avec Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
