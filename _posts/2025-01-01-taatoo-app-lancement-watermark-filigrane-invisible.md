---
layout: post
title: "taatoo, un SaaS pour protéger vos images"
date: "2024-02-01 10:00"
description: "Comment protéger vos photos sans dénaturer vos images ? Découvrez taatoo, un service qui protège vos images des leaks."
image: /assets/images/taatoo-app-lancement-watermark-filigrane-invisible/main.jpg
author: Thibaut BAYER
tags:
  - taatoo
  - SaaS
  - Filigrane
  - Protection des données
  - IA
  - Machine learning
---
Ceux qui me suivent sur les réseaux ou qui me connaissent personnellement savent que je passe beaucoup de temps à développer des side projects ([Noteflix](https://btor.fr/2020/04/07/noteflix-allocine-netflix/){:target="_blank"} par exemple).

J'ai toujours eu plein d'idées en tête et toujours eu envie de faire les choses qui me passionnent : développement, sports, musique, photographie, sports extrêmes... bref.

Et c'est justement dans ces vieux hobbies que j'ai puisé l'envie et l'énergie de lancer [taatoo](https://taatoo.app/){:target="_blank"}, un SaaS qui propose de protéger vos images en y ajoutant un filigrane invisible !

## Pourquoi taatoo ?
On vit dans un monde où on partage tout très vite, très facilement, parfois au détriment de la protection de nos données.
Avec taatoo, je veux proposer une solution simple pour protéger ses photos, son travail, son art.. et freiner les "leakeurs".

## Comment ça marche ?
![](/assets/images/taatoo-app-lancement-watermark-filigrane-invisible/schema.png){:.center-image}
Le fonctionnement est assez simple : l'utilisateur souhaitant protéger ses photos doit se rendre sur [taatoo.app](https://taatoo.app),
s'inscrire, puis une fois inscrit, se rendre sur "Create".

![](/assets/images/taatoo-app-lancement-watermark-filigrane-invisible/create.png){:.center-image}

Une fois sur la page de création de "taatoo" (tatouage), il suffit de glisser-déposer l'image que l'on souhaite sécuriser,
lui donner un nom, et ajouter un ou plusieurs destinataires.
Il est aussi possible de choisir l'encodage que l'on souhaite utiliser, l'encodage "strong" étant le plus résistant aux modifications
mais aussi le plus coûteux en temps de génération de l'image (donc le plus cher).

Mais pour que taatoo soit efficace, une image tatouée ne doit être envoyée qu'à un seul destinataire. Pour garantir cela, taatoo met à disposition une URL unique pour pouvoir voir et télécharger l'image tatouée.
En allant sur l'image tatouée dans le dashboard, on peut voir deux icônes :

![](/assets/images/taatoo-app-lancement-watermark-filigrane-invisible/recipient-links.png){:.center-image}
* L'œil : Permet de voir si une image a déjà été vue ou non
* Copie : Permet de copier l'URL de consultation de l'image

Le destinataire désirant consulter l'image arrivera sur une page publique avec ce message :
![](/assets/images/taatoo-app-lancement-watermark-filigrane-invisible/view.png){:.center-image}

Après consultation de l'image, qu'elle soit téléchargée ou non, l'image ne peut plus être consultée de nouveau.
![](/assets/images/taatoo-app-lancement-watermark-filigrane-invisible/already-viewed.png){:.center-image}

Côté technique pur, taatoo utilise diverses techniques pour ajouter le filigrane, mais la techno principale est la stéganographie en utilisant du machine learning.

## Qui sont les cibles de taatoo ?
Tout le monde ! Photographe amateur ou professionnel, artiste, graphiste, ou simple particulier qui veut partager des photos.
Pour le moment, le service est uniquement disponible en web donc la cible est plus orienté professionnel mais à terme étendre l'utilisation en étant présent sur plusieurs supports (app/extension de navigateur etc)

## Comment fonctionne la tarification de taatoo ?
C'est un SaaS donc c'est une tarification à la consommation. Le tarif va dépendre de l'encodage utilisé et de la taille de l'image,
mais le prix moyen d'un tatouage est autour des **15 centimes d'euros**.

Pour ceux qui sont arrivés jusqu'au bout de cet article (bravo déjà ! ) et qui souhaitent tester le service, **voici un code de réduction de 10% `E4NJCXMQ` !**
À ajouter dans votre prochaine commande sur le site taatoo.app

🌎 [taatoo](https://taatoo.app/){:target="_blank"}
