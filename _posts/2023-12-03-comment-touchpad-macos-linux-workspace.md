---
layout: post
title: "Fusuma: Quand la gestuelle de MacOS débarque sur Linux"
date: "2023-12-03 10:00"
last_modified_at: "2025-03-09 13:05"
description: "Fusuma permet de créer ses propre mapping entre des gestes sur le touchpad et des commandes à exécuter."
image: /assets/images/comment-touchpad-macos-linux-workspace/main.jpg
author: Thibaut BAYER
tags: 
  - MacOS
  - Touchpad
  - Linux
  - ArchLinux
  - Framework
  - Fusuma
---
Avec l'arrivée de mon nouveau Framework et le fait que je l'utilise principalement pour le développement, j'ai décidé de passer sur ArchLinux (cf: [cet article](/2023/11/15/framework-laptop-portable-linux/)). 
J'ai donc profité du passage à EndeavourOS pour commencer à setup mon laptop afin qu'il soit le plus ISO possible avec mon MacBook Pro (du moins en terme d'utilisation).
Et on va pas se mentir... c'est pas chose aisée ! ![](/assets/images/emote/OUCH.png){: .emote}

Un de mes problèmes majeurs concerne le touchpad, par défaut sur XFCE, rien n'est prévu pour basculer facilement entre les bureaux virtuels avec le touchpad.
J'ai donc cherché un peu sur le net et le premier résultat qui sortait était [touchegg](https://github.com/JoseExposito/touchegg), 
après 2/3 essais infructueux, j'ai décidé de m'orienter vers [Fusuma](https://github.com/iberianpig/fusuma), 
une librairie Ruby qui permet de mapper les gestes du touchpad avec des commandes/actions (globalement la même chose que ToucheGG).

{% include pub.html %}

## Installation
Pour installer Fusuma, rien de plus simple, il suffit d'installer les paquets suivants :
```bash
sudo pacman -Syu libinput ruby xdotool
sudo gem install fusuma
```
*[Voir les autres méthodes d'installation](https://github.com/iberianpig/fusuma#installation)*

Une fois les paquets installés, il faut créer le fichier de configuration de Fusuma :
```bash
mkdir -p ~/.config/fusuma
vim ~/.config/fusuma/config.yml
```
Puis y ajouter votre configuration, pour ma part, j'ai choisi de mapper uniquement les swipes de changement de bureau virtuel :
```yaml
swipe: # Détermine le type de gestuelle que l'ont veut déclencher
  3: # Nombre de doigts utilisés
    right: # Direction du swipe
      command: "xdotool set_desktop --relative +1" # Commande à exécuter
    left:
      command: "xdotool set_desktop --relative -- -1"
```
*[Plus d'exemple sur la doc officielle](https://github.com/iberianpig/fusuma#more-example-of-configyml)* - *[Liste des différentes gestuelles disponibles](https://github.com/iberianpig/fusuma#available-gestures)*

Et voilà ! Rien de plus simple ! ![](/assets/images/emote/LUL_DIDIER.png){: .emote}
{% include pub.html %}
