---
layout: post
title: "Est-ce que l'IA va remplacer tous les développeurs ?"
date: "2025-07-02 11:41"
last_modified_at: "2025-07-02 11:41"
description: "Avec l'arrivée de ChatGPT, Cursor, Claude Code ... L'IA bouleverse notre quotidien de développeur, mais est-ce la fin d'une ère ou juste le début d'une nouvelle ?"
image: /assets/images/est-ce-que-ia-va-remplacer-tous-les-developpeurs/main.jpg
author: Thibaut BAYER
tags:
  - IA
  - Développement
  - Claude code
  - Cursor
  - ChatGPT
---

Avec l'arrivée de l'IA (**ChatGPT**, **Gemini**, **Perplexity**...) le quotidien d'énormément de personnes a évolué et depuis l'arrivée de **GitHub Copilot**, c'est au tour des développeurs de voir leur quotidien modifié

Il y a 3 ans, GitHub Copilot sortait et devenait **LA** référence de l'IA pour développeur, au programme : Un assistant IA qui permet d'**autocompléter le code ou de générer du code** en lui demandant directement quoi faire 
```js
// Generate a function that detect if the number is a binary one
function isBinaryNumber(num) {
    const numStr = num.toString();
    
    return /^[01]+$/.test(numStr);
}
```
*<small>Exemple de code généré par IA</small>*

Aujourd'hui, il existe de multiples agents IA spécialisés dans l'aide au développement : [Copilot](https://github.com/features/copilot), [Cursor](https://cursor.com/), [Claude Code](https://www.anthropic.com/claude-code), [Codex](https://openai.com/codex/), [Junie](https://www.jetbrains.com/fr-fr/junie/) et bien d'autres.
Pourtant ils ont tous leurs particularités, certains sont directement **intégrés dans l'IDE**, d'autres fonctionnent en **CLI** ou **uniquement dans le navigateur**.

À titre personnel j'ai **utilisé Copilot dès les premiers jours**, je le trouvais très pertinent. Puis je me suis mis à **Cursor**, pourquoi ? Tout simplement parce qu'**il était mieux intégré à l'IDE** (normal, c'est une base VS Code) et il comprenait mieux le contexte de mon application, par exemple, avec un simple raccourci je pouvais lui dire de corriger l'erreur qu'il y avait dans ma console, tout en prenant en compte le contexte du fichier que je suis en train d'éditer.

Puis récemment, **Claude Code est sorti**...

## L'IA agentique
**Claude Code** est une "**IA Agentique**", en gros, c'est une IA, qui se base sur des modèles qu'on connait déjà **MAIS qui va faire en sorte de faire le plus de tâches possibles pour l'utilisateur**

> T'es rigolo mais c'était pas déjà suffisant de générer les prochaines lignes de code ?

Pourquoi se limiter à générer une simple ligne de code quand on peut créer un programme qui est capable de : 
* **Lire/Ecrire ton code source**
* **Lire/Ecrire ta stack locale** (terminal, docker, docker compose etc)
* **Contacter des API** à ta place
* **Faire des recherches web** à ta place
* etc.

C'est ça l'agentique, une IA qui est capable **d'itérer sur elle-même** ou **d'appeler des services tiers** dans l'objectif de **répondre à une demande initiale (le prompt)**

### Alors, comment ça se passe concrètement ?
Voilà comment une IA agentique va traiter une demande :

```
Utilisateur : Génère moi une stack NextJS à jour, sous docker et docker compose uniquement (aucune dépendance avec la machine hôte), puis commit les changements

IA : Ok, avant de continuer je vais découper mes tâches en plusieurs points 
☐ Création de la stack locale sous docker et docker compose
☐ Test de la stack locale 
☐ Installation des dépendances
☐ Création d'une page hello world
☐ Test que tout fonctionne en web

IA : ✅ Création de la stack locale sous docker et docker compose
IA : ✅ Test de la stack locale 
IA : ✅ Installation des dépendances
IA : ✅ Création d'une page hello world
IA : ✅ Test que tout fonctionne en web
IA: Création du commit ... feat: Initial commit
IA : ✅ Tout est bon !
```

Et ce cas-là est évidemment le cas le plus "facile" que l'on peut faire, mais on peut aller beaucoup plus loin ! On pourrait lui dire d'**aller lire les pull requests sur GitHub**, de **créer un ticket dans Notion**, d'**envoyer un SMS** quand le code est terminé d'être généré... bref on peut vraiment TOUT faire tant que l'IA est en mesure d'accéder au service distant (au travers d'une API/[MCP](https://fr.wikipedia.org/wiki/Model_Context_Protocol) ou en faisant une recherche sur le web)

## Le test grandeur nature
J'ai donc voulu en avoir le cœur net, **est-ce que l'IA agentique est si magique que ça ?**
**Est-ce que Claude Code ou Cursor Agent vont réellement nous remplacer ?**

Pour effectuer mon test, j'ai décidé de **faire un de mes side projects**, **from-scratch en "vibe coding"** en utilisant [Claude Code](https://www.anthropic.com/claude-code)
![](/assets/images/est-ce-que-ia-va-remplacer-tous-les-developpeurs/brice.webp)

Le "**Vibe coding**" c'est le fait de travailler sur un projet uniquement en utilisant l'IA, **on ne code plus, on dit à l'IA de coder**, un peu comme Brice de Nice quoi, tu te dis surfer mais tu sais pas surfer ![](/assets/images/emote/LUL.png){: .emote}

J'ai commencé avec un prompt volontairement un peu balaise en me disant "hop je vais la sécher avec mes trucs tordus", voici le prompt : 

> **Prompt** : En te basant sur le fichier context.txt, génère-moi une application web sous NextJS/TailwindCSS/NextAuth/TypeScript, tout ça dans une architecture hexagonale sous Docker et Docker Compose

Le fichier **context.txt** contenait tout le **détail business** de mon projet, comment mon projet fonctionne, quelle est la cible, quelle est la charte graphique etc.

**2h plus tard** (et après 2/3 prompts de correction), j'avais une **stack de dev complètement fonctionnelle** avec un début d'architecture hexagonale plutôt "ok" (les puristes crieraient au scandale mais la séparation domain/infra était plutôt bien faite, il manquait juste des use cases et interfaces), une base de données avec **Prisma** etc
**En 2h, l'IA m'avait généré des jours de travail**, donc j'ai continué, je me suis dit qu'au final c'était pas si compliqué de faire un bootstrap d'app pour une IA, il suffisait de tout copier d'un projet déjà existant ! 
**Alors je l'ai challengée**, je lui ai demandé : 
* de me **créer toutes les pages de mon projet** (création/connexion de compte, page de description, page de pricing, dashboard etc.)
* d'**intégrer l'internationalisation (I18N)**
* de **bien respecter les principes SOLID**
* de **commiter chaque modification** sous un format standard
* de **créer une page /support, avec un client mail et un captcha Cloudflare Turnstile**

**Après 4h, j'avais un site web complètement fonctionnel**, près de 3 semaines de boulot réalisé en 4h, j'étais sur le cul !
Alors oui, le design est moche, mais c'est normal je ne lui ai rien demandé concernant le design (en dehors de 4 couleurs).

![](/assets/images/est-ce-que-ia-va-remplacer-tous-les-developpeurs/cocopass.png)
![](/assets/images/est-ce-que-ia-va-remplacer-tous-les-developpeurs/cocopass-qrcode.png)
![](/assets/images/est-ce-que-ia-va-remplacer-tous-les-developpeurs/cocopass-commits.png)

Par la suite j'ai pu itérer sur le code, lui dire de vérifier s'**il respectait mes contraintes d'architecture hexagonale**

**spoiler : non**

Il a fallu lui **demander de vérifier si l'architecture correspondait aux attentes**, lui dire de **vérifier le code mort** ou encore les **clés d'I18N non présentes ou non traduites**.
![](/assets/images/est-ce-que-ia-va-remplacer-tous-les-developpeurs/cocopass-architecture.webp)

Puis je lui ai dit d'**intégrer un système de paiement (Stripe)**, cette fois-ci il m'a tout créé (webhook, listener Stripe, page de création de QR Code premium etc.) sans trop de problème.

## Conclusion
Ces **IA agentique sont encore plus bluffantes** que ce qu'on a pu connaitre avec **Github Copilot** ou **Cursor** avec leurs systèmes d'autocomplétion (**Cursor** propose aussi un Agent). Ca va beaucoup **plus loin**, **plus vite**, pour une **somme qui est dérisoire** (20€/mois dans le cas de Claude). 
Elles **posent néanmoins des questions d'usage**: comment on les utilise ? plus on va vite, plus on doit review, **si en 4h je réalise 3 semaines de boulot** je vais me retrouver avec **une montagne de PR à valider**, le code créer par l'IA risque de passer plus facilement sous les radars, **on risque de moins vérifier le code et donc d'être moins vigilant sur certains aspects comme la sécurité.**
Je vais tenter de **rester objectif** et de ne pas trop succomber à la hype de l'IA pour répondre aux grosses questions qu'on se pose tous :

#### Est-ce que c'est vraiment fiable ? 
**Globalement oui**, après quelques jours d'utilisation je me rends compte que **je n'ai pas eu de cas totalement hors champ**. L'IA propose du code qui correspond aux attentes **néanmoins il faut la CONDITIONNER**, lui **donner un maximum de contexte** et de **contraintes** afin qu'elle puisse travailler le plus finement possible.

Pour illustrer mon propos, si je vous dis que j'ai faim, vous allez me donner une pomme, alors que j'aimerais peut-être manger un vrai plat (une tartiflette par exemple), l'IA c'est pareil, **ne lui demandez pas de générer du code, dites lui comment, pourquoi etc.**

De plus, les **IA agentiques** proposent en général des **"mémoires"**, sur **Cursor on appelle ça des "rules"** et sur **Claude des "memory"**. Ces fichiers **permettent de dire à l'IA de garder en mémoire certains éléments**, comme par exemple vos contraintes métiers : Écris du code SOLID, vérifie toujours que le domain ne dépend pas de l'infrastructure etc.
C'est super important de les utiliser parce que ça changera considérablement la qualité de réponse de l'IA et ça vous évitera beaucoup d'allers/retours.

#### Est-ce que l'IA va nous remplacer ?
**Non, l'IA ne va pas nous remplacer en tant que développeur**. Néanmoins, ça pose de sérieuses questions sur l'évolution du métier. 
Bien avant l'IA il existait déjà des services de création de site web, que ce soit des **Wix**, **Google Sites** ou des services plus "complets" comme les outils de **no-code**.

**Est-ce que ces outils ont supprimé le job de développeur ? Non**

La raison est selon moi très simple, ce sont de **très bons services pour développer des sites vitrines**, **landing pages**, **ou des sites avec peu de complexité technique** mais dès que le produit grossit, ces outils-là ne peuvent plus répondre aux besoins parce qu'**un site web ne se résume pas qu'à une interface et une base de données** avec 40 000 utilisateurs stockés, un site web c'est : du front, du back, des workers/daemons, de l'infrastructure cloud/bare metal, des brokers, des systèmes de cache etc. Ce qu'une simple interface web no-code ne peut pas gérer de bout en bout.

L'**IA c'est un peu pareil sauf que ça va légèrement plus loin**, l'IA ne transpose pas des "briques graphiques" en briques techniques comme le ferait le no-code. L'**IA étudie un contexte**, **recherche**, **crée**, **modifie** et **teste**, et c'est là où ça interroge sur l'évolution de notre métier puisque techniquement, **elle fait le même job qu'un développeur**. 

**La seule (et grosse) valeur ajoutée du dev, c'est d'apporter une analyse**, **une compréhension**, et de **prendre une décision**. L'IA est capable de prendre une décision mais celle-ci sera d'ordre "statistique", cela ne veut pas forcément dire que le choix sera judicieux dans le cas de votre projet.

Donc selon moi, **nous allons tendre vers un métier de "décideur technique"**, **on codera toujours**, parce qu'il faudra bien **alimenter les IA**, mais on codera peut-être moins et surtout, on se **concentrera uniquement sur les problématiques complexes**, là où l'IA bottera en touche, du moins, pour le moment...

#### Est-ce que les profils juniors sont en danger ?
**Dur à dire**, aujourd'hui le **marché est plus tendu** que ce qu'on a pu connaître lors des 5 dernières années : **Économie post-covid en berne**, **moins de financement des VC** (changement de priorité suite au covid + l'IA qui tire les financements), **situation politique complexe** etc.

Avec l'arrivée de l'IA, **les tâches les plus faciles sont déléguées à l'IA, ce qui augmente la productivité des développeurs** mais pourrait limiter l'embauche de profils plus juniors.
Je dis bien "pourrait" parce que ça va fortement dépendre de la stratégie des sociétés, **une société qui paie 4 développeurs aujourd'hui, pourrait se retrouver avec une productivité équivalente à 5 ou 6 développeurs avec l'IA** (à la louche).

La question est donc : 

Est-ce que les entreprises feront le choix de **recruter plus de développeurs parce qu'elles produisent plus de valeur** (+ de features = + de business) ? 

ou 

Est-ce qu'elles choisiront de simplement **profiter des nouvelles marges que l'IA permet** ? 

Pour le moment la tendance est plutôt sur la réduction de masse salariale (le cas de Salesforce, Duolingo etc.) 

### Quelles sont tes recommandations pour appréhender l'IA en tant que développeur ?
* **Testez-les** ! **Cursor**, **Claude**, **Gemini**, **ChatGPT**, peu importe ! restez à l'écoute de ce qui se fait pour trouver celles qui correspondent à vos besoins.
* **Utilisez au maximum les "mémoires"** (memory, rules etc.) pour conditionner votre IA et la restreindre à vos contraintes techniques
* **Utilisez les MCP !** Les MCP peuvent vous permettre d'aller encore plus loin avec l'IA (gérer vos cartes, appeler des API métier etc)
* **Commitez régulièrement** ! L'IA va ajouter beaucoup de code d'un coup et vous aurez rapidement la mauvaise habitude de refaire des gros commits, vous devez garder vos bonnes pratiques et essayer un maximum de faire des commits atomiques et concis.
* **Ne croyez pas l'IA !** Gardez votre esprit critique, continuez de review vos PR, ce n'est pas parce que l'IA vous mâche le travail que vous devez omettre les bonnes pratiques de développement et votre bon sens. Et ne commitez pas du code que vous ne comprenez pas !
