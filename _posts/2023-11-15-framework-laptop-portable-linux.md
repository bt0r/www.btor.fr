---
layout: post
title: "Test: Framework 13\", un pc portable modulaire sous Linux "
date: 2023-11-15 15:30:00
description: Test du Framework 13" sous ArchLinux, la modularité en vaut-elle la chandelle ?
image: /assets/images/framework-laptop-portable-linux/main.jpg
author: Thibaut BAYER
tags: 
  - Materiel
  - Test
  - Linux
  - ArchLinux
---
Mercredi 15 février, une météo clémente rayonne dans mon salon après deux semaines de froid et de pluie diluvienne.
Ces deux dernières semaines ont été aussi longue et désagréable que les **MOIS D'ATTENTES** pour recevoir mon nouveau laptop: Un [Framework 13" sous AMD Ryzen 7040](https://frame.work/fr/fr/products/laptop-diy-13-gen-intel).

## Framework, c'est quoi ?
Non, cette fois-ci, nous ne parlerons pas de Framework tel que Symfony ou NextJS. 
Framework c'est une marque d'ordinateur portable qui se veut le plus écoresponsable possible en proposant des ordinateurs modulaire et facilement réparable.
C'est un peu le [Fairphone](https://www.fairphone.com/en/) de l'ordinateur portable, avec quelques différences tout de même (notamment le prix).

## T'es devenu bobo-écolo-vegan ou quoi ?
Bien que l'idée de lécher des cailloux me vende du rêve ![](/assets/images/emote/LUL_DIDIER.png){: .emote}, j'ai choisi de passer sur Framework pour plusieurs raisons : 
* Je suis loin d'être irréprochable, mais l'écologie est un sujet important. Si j'ai l'occasion d'avoir un ordinateur performant, réparable et écoresponsable, pourquoi devrai-je m'en priver ?
* Nos ordinateurs, téléphones et autre support multimédia ont un design très souvent similaire (ex: les Macbook Pro pratiquement tous identiques, à quelques détails près)
* Depuis toujours, je suis un grand utilisateur de linux (Debian/Ubuntu, Fedora principalement), j'ai récemment beaucoup utilisé MacOS mais bien que la finition des Mac soit irréprochable, développer sous MacOS devient de plus en plus pénible.
L'OS est assez "fluide" dans son utilisation globale, on a l'impression que tout fonctionne bien etc, mais dès que l'on commence à le pousser un peu dans ses retranchements, ça devient compliqué (wink wink les power user de docker)
* L'envie d'avoir un ordinateur puissant, avec 32GO de RAM qui ne me coutera pas un bras (wink wink les Macbook Pro)

Avec tous ces critères, Framework semblait être un bon compromis, mais qu'en est-il vraiment ? ![](/assets/images/emote/TUBAIZ.png){: .emote}

## Déballage et montage
J'ai donc commandé mon Framework 13" au moins de juin, pour une livraison mi-novembre. 
Je suis parti sur une configuration assez basique : 
* Processeur AMD Ryzen 7 7040
* 32go de RAM
* 500G SSD NVM
* 2 ports USB-C 
* Un port DisplayPort

Pour un total avoisinant les **1700€**, ce qui est assez raisonnable pour un ordinateur portable de cette gamme.
L'équivalent chez Apple est d'environ 2500€ pour un Macbook Pro M3 et un peu moins en M2.

![Framework 13" déballage](/assets/images/framework-laptop-portable-linux/déballage.jpg)
![Framework 13" montage](/assets/images/framework-laptop-portable-linux/montage.jpg)
Le carton est assez lourd, le packaging très bien fait, on se retrouve rapidement avec un ordinateur pré-monté (écran, cpu, carte mère) et les autres composants à monter soit même (clavier, contour d'écran, ram, SSD)
C'est assez perturbant de recevoir un ordinateur portable en kit, d'autant plus qu'il n'y a aucun "mode d'emploi" comme on pourrait s'attendre à en avoir avec ce type de produit.
![Framework 13" QR codes](/assets/images/framework-laptop-portable-linux/montage-qrcode.jpg)
Pas de notice papier **MAIS** un QR code sur chaque composant qui nous redirige vers des tutos sur le site de Framework.
J'ai regardé par curiosité comment étaient fait les tutos et c'est globalement bien foutu, mais ça ne servira pas aux gros barbus bricoleurs fan de Metallica tellement le montage est simple. ![](/assets/images/emote/LUL.png){: .emote}


Pour le montage :
* On branche le SSD et la RAM sur la carte mère (une vis pour le SSD, et des clips pour la RAM)
* On pose le contour de l'écran (clipsé)
* On branche le clavier à la CM (nappe)
* On clips tout ça dans le châssis et on visse le tout (5 vis à l'arrière, tournevis fournis)
* Reste plus qu'à brancher les cartes d'extensions et le tour est joué !

## Installation de l'OS
Place à l'installation de l'OS, il n'y a rien de bien compliqué, la documentation en ligne est assez bien faite, pour Linux il faut d'abord mettre à jour le bios en version 3.03 et ensuite faire l'installation de l'OS.
Depuis peu, j'utilise [EndeavourOS](https://endeavouros.com/), une distribution basée sur ArchLinux, que j'apprécie beaucoup pour sa simplicité et sa légèreté (XFCE for the win).
J'ai donc directement tenté une installation d'EndeavourOS et que fût ma surprise… ça a fonctionné du **PREMIER COUP**, en 10min top chrono l'OS était installé et fonctionnel.
Bluetooth, wifi, touchpad, caméra, TOUT fonctionne ! 
Ça peut paraitre anodin, mais c'est assez rare pour être souligné.


## Comparaison avec un MacBook Pro
![Framework 13" - Comparaison MacBook Pro et Framework - Dessus](/assets/images/framework-laptop-portable-linux/comparaison-macbook-pro-dessus.jpg)
![Framework 13" Comparaison MacBook Pro et Framework - Epaisseur](/assets/images/framework-laptop-portable-linux/comparaison-macbook-pro.jpg)
![Framework 13" Comparaison MacBook Pro et Framework - Ouvert](/assets/images/framework-laptop-portable-linux/comparaison-macbook-pro-ouvert.jpg)
Le framework est légèrement plus **épais** que le MacBook Pro et **l'écran un peu plus grand** notamment dû à son format 3:2.
Le point fort des MacBook Pro étant la finition, on ne peut pas dire que le Framework soit aussi bien fini, mais ça reste très correct pour un ordinateur que l'on monte entièrement soit même.
Côté poids, le framework est un peu plus léger qu'un Macbook Pro (1,3kg vs ~1,4kg), concernant la **batterie** je n'ai pas encore eu l'occasion de faire des tests mais d'après [les numériques](https://www.lesnumeriques.com/ordinateur-portable/framework-laptop-13-ryzen-7-7840hs-p73244/test.html#anchor-review-chap-mobilite-autonomie) le framework tient ~9h là où le Macbook pro tient ~13h, avantage au Macbook pro donc.

Côté **performance** (linux oblige) **le MacBook Pro se fait littéralement écraser.**
Que ce soit en termes de temps de boot ou d'utilisation générale (navigation, docker etc).


## Conclusion
**Les +**
* **Le montage** ![](/assets/images/emote/SLT.png){: .emote} - C'est là qu'on voit qu'ils ont réussi à faire un truc assez dingue : **C'EST FUCKING SIMPLE !** Un enfant de 10 ans pourrait monter son propre ordinateur.
* **La modularité interne** ![](/assets/images/emote/SLT.png){: .emote} (CM/RAM/SSD) est vraiment bien foutue, j'avais peur que les 4 blocs d'extensions soient un peu trop épais et finalement, c'est très clean !
* **Le clavier** est vraiment bien, ça ressemble fortement à une copie des claviers Mac et pour le coup, c'était une bonne idée !
* **Les performances** sont au rendez-vous, l'ordi boot en quelques secondes et ne fait pas d'écart quand on le sollicite un peu ardûment.

**Les -**
* **Ça chauffe !** ![](/assets/images/emote/WUT_KARINE.png){: .emote} - A vous les mains qui collent au clavier, je n'ai pas encore eu droit aux bruits de décolage d'avion de chasse mais ça ne saurait tarder. Vivement une version fanless.
* **L'écran en 60hz 3:2** ![](/assets/images/emote/WUT_KARINE.png){: .emote} -  j'aurais préféré un écran 16:9 en 120hz 1440p plutôt qu'un 60hz 3:2 bizarre comme choix, autant un 60hz je peux comprendre, par contre le 3:2 c'est incompréhensible. Ca doit encore être l'idée d'un Sales... ![](/assets/images/emote/LUL_DIDIER.png){: .emote}
* **Le son est CATASTROPHIQUE** ![](/assets/images/emote/NO.png){: .emote} - Quand je dis CATASTROPHIQUE, c'est CATASTROPHIQUE, je ne sais pas si ça va s'entendre sur cette vidéo mais le son manque de basse, est étouffé etc :
  <iframe width="560" height="315" src="https://www.youtube.com/embed/dT4v9Z12q60?si=Zttkk6m7wL3z4ag_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
* Linux (Arch): Le touchpad est ultra sensible, j'ai réussi à le configurer pour que ce ne soit pas trop dérangeant mais c'est plus du tweak que du natif, c'est peut-être mieux sur d'autres distributions.
* On est sur un ordinateur entièrement monté "à la main" donc sans finition "d'usine", c'est un mix d'alu et de plastique avec certaines zones totalement "ouvertes" sur la carte mère.
  Pour l'étanchéité, il faudra repasser.
* J'ai commandé 3 blocs d'extensions en pensant qu'ils fournissaient des caches d'extensions (pour éviter d'avoir un trou dans l'ordi), plot twist : ce n'est pas le cas. Pensez donc à bien acheter 4 blocs d'extensions.

**En résumé,** c'est un bon ordinateur de geekos, de mecs qui va aimer bidouiller, qui cherche les performances etc.
Les **3 gros points noirs** à corriger sont, selon moi, la **taille/résolution d'écran**, la **qualité audio** et le **manque de fanless** côté CPU.
Avec ces 3 points améliorés, le Framework pourrait rapidement devenir un incontournable pour les développeurs, peut-être même pour le grand public.
