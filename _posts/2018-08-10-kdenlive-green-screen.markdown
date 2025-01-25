---
layout: post
title: "Réaliser une incrustation fond vert avec KDEnLive"
date: 2018-04-17
description: Faire une incrustation fond vert sous photoshop c'est facile mais KDEnLive, comment ça se passe ? voyons-ça..
image: /assets/images/kdenlive-green-screen/main.jpg
author: Thibaut BAYER
tags: 
  - Photos & Video
  - Tutorial
---

Récemment j'ai pris la sage décision de quitter Windows 10 pour repasser sur Ubuntu sur mon pc fixe. J'étais dépendant de windows pour les jeux-vidéos mais comme je passe plus de temps à travailler/développer sur mon ordinateur, j'ai préféré migrer vers Ubuntu pour retrouver mes habitudes, mes softs préférés etc.

**Problème !** Linux c'est beau, c'est fluide mais il faut reconfigurer un max de chose avant que tout soit opérationnel. La plupart du temps sur des distributions comme Ubuntu ou Fedora, la majeure partie des pilotes est prise en charge, nos habitudes ne changent pas trop à ce niveau là par contre il va falloir s'habituer à un écosystème légèrement différent.
Le système d'exploitation change, les applications aussi ! (pour la plupart).

J'ai donc commencé à me renseigné sur le net afin de trouver des logiciels équivalents à ceux que j'utilise régulièrement sur Windows, par exemple Photoshop, Premiere pro, ShareX etc..

* Pour ShareX (logiciel de capture d'écran) , j'ai trouvé [Shutter](https://doc.ubuntu-fr.org/shutter) qui fait plutôt bien le job !
* Pour Photoshop, j'ai trouvé ... ? ... Photoshop ! Peut être que vous ne le savez pas mais Adobe à rendu sa suite CS2 entièrement gratuite ! [Pour en savoir plus, cliquez ici](https://helpx.adobe.com/fr/creative-suite/kb/cs2-product-downloads.html?promoid=19SCDRQK) 
* Et pour Premiere Pro, je me suis mis à tester [KDEnLive](https://kdenlive.org/fr/) 

## 🐥 Début avec KDEnLive
Globalement, j'ai trouvé l'interface très proche d'un première pro, la disposition des fenêtres et certains raccourcis clavier vous permettent de vous y retrouver très rapidement.

J'ai commencé mes premiers "montages" sans trop de problème, à savoir que je ne suis pas monteur pro, j'utilise ce type de logiciel à des fins personnelles, ponctuellement et surtout pour des cas assez simple. 
Quand tout à coup, j'ai eu l'idée de refaire mon écran de chargement twitch. C'est là que les choses se sont compliquées ... ?

## 🛠️ Incrustation du fond vert
J'utilise la version 17.12.3 de KDEnLive, je ne reviendrais pas sur l'installation car celle-ci dépend de votre système d'exploitation.

Dans un premier temps, ouvrez KDEnLive sur un nouveau projet:

![](/assets/images/kdenlive-green-screen/01.jpg)

Dans la fenêtre de gauche en dessous de "Nom", faite clic-droit puis `Ajouter un clip`. Sélectionnez vos vidéos,  dans ce tuto j'utilise [cette vidéo](https://youtu.be/Dq_3bzyccRs)  pour l'incrustation fond vert et [cette vidéo](https://www.youtube.com/watch?v=rbUqOPw7w0U) en guise de fond.

![](/assets/images/kdenlive-green-screen/02.jpg)

Une fois vos deux vidéos importées, placez les dans la timeline en bas (glisser-déposer) et vous devriez vous retrouver avec quelque chose du style :

![](/assets/images/kdenlive-green-screen/03.jpg)

Sur votre vidéo fond vert, ajoutez une `transition composite` et étendez là sur toute votre vidéo fond vert.

![](/assets/images/kdenlive-green-screen/04.jpg) ![](/assets/images/kdenlive-green-screen/05.jpg)

### 🐣 1ère technique
La première technique est assez simple et connue de tout le monde, il s'agit d'utiliser le `ChromaKey` ou `Couleur Clé` sur KDEnLive.

Cliquez sur votre vidéo fond vert dans la timeline et ajoutez lui un effet `Couleur clé`

![](/assets/images/kdenlive-green-screen/06.jpg)

Cliquez sur l'icone `Goutte d'eau` afin de pouvoir sélectionner la couleur à extraire

![](/assets/images/kdenlive-green-screen/07.jpg) ![](/assets/images/kdenlive-green-screen/08.jpg)

Vous devriez obtenir ce résultat

![](/assets/images/kdenlive-green-screen/09.jpg)

À mon sens, cette technique est facile mais pas du tout satisfaisante, tout simplement parce que si l'on regarde de plus près. On aperçoit une bordure verte, ce rendu dépend énormément de la qualité de votre vidéo fond vert mais ce type de cas est très fréquent.

![](/assets/images/kdenlive-green-screen/10.jpg)

Heureusement il existe une solution pour atténuer cette bordure, ajouter l'effet `SpillSupress` sur votre vidéo fond vert. Cet effet n'enlèvera pas les pixels vert mais va les "convertir" en gris, comme si la bordure étaient désaturée . Le rendu est déjà beaucoup plus correct.

![](/assets/images/kdenlive-green-screen/11.jpg) ![](/assets/images/kdenlive-green-screen/12.jpg) ![](/assets/images/kdenlive-green-screen/13.jpg)

Oui mais voilà, si vous regardez encore de plus près, vous pourrez remarquer que quand bien même la bordure verte a été atténuée, elle reste présente et le contour n'est pas lisse.

### 🐓 2ème technique
Il existe une autre technique pour effectuer une incrustation de fond vert qui selon moi est plus efficace que la première (du moins avec les échantillons de vidéos que j'ai pu tester).

Supprimez l'effet `Couleur Clé` ou `ChromaKey` et ajoutez les effets `Sélection de couleur` et `Teinte` puis jouez avec les différentes valeurs (écart, gain, valeur de nuance etc.) et précisez la couleur à supprimer (toujours notre vert, même principe que la 1ère technique).

![](/assets/images/kdenlive-green-screen/15.jpg)

Votre incrustation devrait paraître plus fine, plus propre. A noter que j'ai utilisé une teinte en fonction de mon fond assez sombre (noir vers blanc) et c'est d'ailleurs là où nous rencontrons un nouveau problème. Quand notre vidéo de fond va changer et passer à une scène plus claire, la teinte ne vas pas du tout correspondre.

![](/assets/images/kdenlive-green-screen/16.jpg)

Pour régler ce type de soucis, j'ai coupé ma vidéo fond-vert en deux afin d'appliquer des paramètres différents sur l'effet "Teinte"

![](/assets/images/kdenlive-green-screen/17.jpg) ![](/assets/images/kdenlive-green-screen/18.jpg) ![](/assets/images/kdenlive-green-screen/19.jpg)

Je vous laisse voir le rendu finale de ce tutorial et n'hésitez pas à me laisser un commentaire si vous avez des questions.
[Cliquez ici pour voir la vidéo youtube](https://youtu.be/JetxE3jZupA)

Peace !
