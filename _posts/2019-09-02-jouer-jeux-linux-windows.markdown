---
layout: post
title: "Comment jouer à des jeux windows sous linux directement sur Steam"
date: 2018-09-02
description: 
image: /assets/images/jeux-windows-steam/main.png
author: Thibaut BAYER
tags: 
  - Tutorial
  - Jeux
---
Suite à une discussion avec [Lenny](https://twitter.com/L_nny_) concernant le fait de jouer sous linux via Steam. Il m'a partagé un lien d'une vidéo qui parle du développement d'un logiciel de "portabilité" des jeux windows sous linux directement intégré à Steam ([voir l'article en français](https://www.clubic.com/jeu-video/actualite-844949-valve-solution-jouer-jeux-steam-linux.html))

Il s'agit en réalité d'un Wine modifié et intégré à steam ([Proton](https://github.com/ValveSoftware/Proton)).

N'ayant pas trouvé cette fonctionnalité sur steam, j'ai un peu cherché et voici les étapes à effectuer pour pouvoir installer des jeux windows sous linux sans se charger de faire la configuration de Wine (qui pour le coup peut être très fastidieuse)

## 🏁 Prérequis 
- Steam doit être installé
- Vos drivers vidéos doivent être fonctionnels et à jours

## ❓Comment faire
- Lancez steam
- Dans "Settings => Account" ou "Paramètres => Compte" : Vérifiez que votre compte steam est sur le mode "Béta", si ce n'est pas le cas, cliquez sur le bouton "Changer"
- Validez puis relancer steam si nécessaire
- Dans "Settings => Steam Play" ou "Paramètres => Steam Play" : 
  - Cochez la case "Enable steam play for all titles"
  - Cochez la case "Use this tool instead of game-specific selections from Steam"
  - Dans "Compatibility Tool" sélectionnez la dernière version de Proton (3.7-3 au moment où j'écris cet article).
- Validez et redémarrez steam

![](/assets/images/jeux-windows-steam/01.png)
![](/assets/images/jeux-windows-steam/02.png)


Une fois Steam redémarré, l'icône d'installation de vos jeux windows devrait être visible. Il ne vous reste plus qu'à installer votre jeu et à le lancer.

![](/assets/images/jeux-windows-steam/03.png)

J'ai pu testé avec GTA 5 sur steam, le launcher de rockstar ne s'affiche pas correctement donc il m'était impossible de m'authentifier.
J'ai également testé avec PUBG, sans succès le jeu se lance mais rien ne s'affiche.

Cette solution peut dépanner si le jeu est supporté et si vous disposez d'un bon matériel, néanmoins, elle ne permet pas de jouer à tous les jeux windows.
