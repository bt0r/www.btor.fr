---
layout: post
title: "OrbStack : Un Docker Desktop for Mac sous stéroïde ?"
date: "2024-06-22 6:30"
description: "OrbStack est un démon docker pour MacOS qui vise à régler les problèmes de performances de Docker Desktop for Mac. Mais est ce que ça marche vraiment ?"
image: /assets/images/orbstack-remplacant-docker-desktop-for-mac/main.jpg
author: Thibaut BAYER
tags: 
  - MacOS
  - Docker Desktop
  - OrbStack
  - Docker
---

> "J'en ai marre, ma stack docker est leeeeente sur Mac"

J'ai entendu cette phrase un nombre incalculable de fois, et j'ai moi-même été confronté à ce problème pendant mes années de développeur.

Il y a 5 ans, dans [cet article](http://btor.fr/2019/07/03/docker-bases-tuto/), j'expliquais le fonctionnement de base de docker et les contraintes liées à son utilisation sur MacOS.
> TLDR: Effectivement, si vous utilisez Linux sur votre machine hôte vous n’aurez aucun problème, Docker est supporté nativement, par contre sous Windows et Mac vous aurez une couche supplémentaire pour faire fonctionner Docker… Une machine virtuelle !

*D'ailleurs un article "Docker : Avancé" est en cours d'écriture depuis 3 ans..., ça va devenir mon [Vultech sur le différentiel](https://www.mesopinions.com/petition/politique/vultech-differentiel/89467) ![](/assets/images/emote/LUL.png){: .emote} en espérant que ça ne se termine pas de la même façon...*

Les **allers/retours** entre la machine hôte et les conteneurs peuvent être source de **latence, et ce**, même avec des machines puissantes (M1/M2/M3)

**BREF**. Vous êtes sous MacOS, c'est cool, vous flambez avec votre Macbook Pro *Ultra Max Plus Mauve Fushia M12* au lounge d'Orly, mais dès que vous lancez une stack docker, c'est la merde ![](/assets/images/emote/JEANNE.png){: .emote}.

## Qu'apporte OrbStack du coup ?
La **PERFORMANCE** ![](/assets/images/emote/JAMY.png){: .emote} !!

**OrbStack** va garder ce même principe de machine virtuelle mais en utilisant une **machine virtuelle ultra allégée/optimisée** et avec un kernel partagé, en plus d'utiliser d'autres technos déjà performantes sur Docker Desktop for Mac (comme **VirtioFS pour le partage de fichier**)

Un autre point fort d'**OrbStack** est qu'il n'y a **aucune configuration à faire**, il suffit de supprimer correctement l'ancien démon Docker Desktop (et penser à bien purger ses images/conteneurs etc) puis d'installer et lancer OrbStack.

Et le tour est joué ![](/assets/images/emote/BEER.png){: .emote} ! Rien de plus à faire, vous aurez une stack Docker un peu plus convenable sur votre Mac et si vous n'êtes toujours pas satisfait, il ne vous reste qu'une solution, celle des dieux : **Linux** ![](/assets/images/emote/SLT.png){: .emote}

*À noter : OrbStack est disponible gratuitement pour les utilisateurs individuels ou à but non lucratif, mais pour les entreprises, il faudra passer à la caisse (compter 8$ par mois par utilisateur)*

🌎 [OrbStack](https://orbstack.dev){:target="_blank"}

⚙️ Plus d’infos sur le fonctionnement interne d’OrbStack : [Architecture](https://docs.orbstack.dev/architecture){:target="_blank"}

