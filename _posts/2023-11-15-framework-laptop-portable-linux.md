---
layout: post
title: "Test: Framework 13\", un portable modulaire sous Linux "
date: 2023-11-15 23:30:00
description: Test du Framework 13" sous ArchLinux, la modularité en vaut-elle la chandelle ?
image: 
author: Thibaut BAYER
tags: 
  - Materiel
  - Test
  - Linux
  - ArchLinux
---
Mercredi 15 février, une météo clémente rayonne dans mon salon après deux semaines de froid et de pluie diluvienne.
Ces deux dernières semaines ont été aussi longue et désagréable que les MOIS D'ATTENTES pour recevoir mon nouveau laptop : Un Framework 13" sous AMD Ryzen 7040.

## Framework, c'est quoi ?
Non, cette fois-ci nous ne parlerons pas de Framework tel que Symfony ou NextJS. Framework c'est une marque d'ordinateur portable qui se veut le plus écoresponsable possible en proposant des ordinateurs modulaire et facilement réparable.
C'est un peu le Fairphone de l'ordinateur portable, avec quelques différences tout de même (le prix par exemple).

## T'es devenu bobo-écolo-vegan ou quoi ?
Bien que l'idée de lécher des cailloux me vende du rêve, j'ai choisi de passer sur Framework pour plusieurs raisons : 
* Bien que je sois très loin d'être irréprochable, l'écologie est un sujet important. Si j'ai l'occasion d'avoir un ordinateur performant, réparable et écoresponsable, pourquoi devrais-je m'en priver ?
* Nos ordinateurs, téléphones et autre support multimédia ont un design très souvent similaire (ex: les Macbook Pro pratiquement tous identique)
* Depuis toujours je suis un grand utilisateur de linux (Debian/Ubuntu, Fedora principalement), j'ai récemment beaucoup utiliser MacOS mais bien que la finition des Mac soit irréprochable, développer sous MacOS devient de plus en plus pénible.
L'OS est assez "fluide" dans son utilisation globale, on a l'impression que tout fonctionne bien etc mais dès que l'on commence à le pousser un peu dans ses retranchements, ça devient compliqué (wink wink les power user de docker)
* L'envie d'avoir un ordinateur puissant, avec 32go de RAM qui ne me coutera pas un bras (wink wink les Macbook Pro)

Avec tout ces critères, Framework semblait être un bon compromis, mais qu'en est-il vraiment ?

## Déballage et montage
J'ai donc commandé mon Framework 13" au moins de juin, pour une livraison mi novembre. Je suis parti sur une configuration assez basique : 
* Processeur AMD Ryzen 7 7040
* 32go de RAM
* 500G SSD NVM
* 2 ports USB-C 
* Un port DisplayPort

Pour un total de 1700€ environ, ce qui est assez raisonnable pour un ordinateur portable de cette gamme.
L'équivalent chez Apple est d'environ 2500€ pour un Macbook Pro M3 et un peu moins en M2.

Le carton est assez lourd, le packaging très bien fait, on se retrouve rapidement avec un ordinateur pré-monté (écran, cpu, carte mère) et les autres composants à monter soit même (clavier, contour d'écran, ram, SSD)
C'est assez perturbant de recevoir un ordinateur portable en kit, d'autant plus qu'il n'y a aucun "mode d'emploi" comme on pourrait s'attendre à en avoir avec ce type de produit.
Pas de notice papier MAIS un QR code sur chaque composant qui nous redirige vers des tutos sur le site de Framework.
J'ai regardé par curiosité comment était fait les tutos et c'est globalement bien foutu mais ça ne servira pas aux gros barbus bricoleurs, fan de Metallica et de CLI.
Pour le montage :
* On branche le SSD et la RAM sur la carte mère (une vis pour le SSD, et des clips pour la RAM)
* On pose le contour de l'écran (clipsé)
* On branche le clavier à la CM (nappe)
* On clips tout ca dans le chassis et on visse le tout (5 vis à l'arrière, tournevis fournis)
Et c'est tout ! l'ordinateur est pret à booter !

**Avantages**
* C'est là qu'on voit qu'ils ont réussi à faire un truc assez dingue : C'EST FUCKING SIMPLE ! Un enfant de 10 ans pourrait monter son propre ordinateur.
* Je suis très fan des tutos QR code sur les composants
* La modularité interne (CM/RAM/SSD) est vraiment bien foutue, j'avais peur que les 4 blocs d'extensions soient un peu trop épais et finalement c'est très clean !


**Inconvénients**
* On est sur un ordinateur entièrement monté "à la main" donc sans finition "d'usine", c'est un mix d'alu et de plastique avec certaines zones totalement "ouvertes" sur la carte mère.
Pour l'étanchéité il faudra repasser.
* Je ne sais pas si c'est lié à la version AMD Ryzen ou pas (je ne pense pas) mais c'est un ordinateur ventilé, vous pouvez tirer un trait sur le fanless ! A vous les mains qui collent au clavier, les bruits de réacteurs d'avions tout ca tout ca.

## Installation de l'OS
Place à l'installation de l'OS, il n'y a rien de bien compliqué, la documentation en ligne est assez bien faite, pour Linux il faut d'abord mettre à jour le bios en version 3.03 et ensuite faire l'installation de l'OS.
Depuis peu j'utilise EndeavourOS, une distribution basée sur ArchLinux, que j'apprécie beaucoup pour sa simplicité et sa légèreté (XFCE for the win).
J'ai donc directement tenté une installation d'EndeavourOS et que fût ma surprise ... ça a marché du PREMIER coup, en 10min top chrono l'OS était installé et fonctionnel.
Bluetooth, wifi, touchpad, caméra, TOUT fonctionne ! Ca peut paraitre anodin mais c'est assez rare pour être souligné.




