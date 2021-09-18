---
layout: post
title: "Afficher le titre Spotify en cours de lecture dans OBS (linux)"
date: 2020-05-24
description: Comment afficher le titre en cours de lecture depuis Spotify dans OBS ? et tout ça sous linux ? Facile !
image: /assets/images/spotify-obs-titre-chanson/main.jpg
author: Thibaut BAYER
tags: 
  - Spotify
  - OBS
  - Streaming
  - Tutorial
---

Rares sont les applications de streaming musical qui s'intègrent simplement à OBS ([Foobar](https://www.foobar2000.org/) for the win) ![](/assets/images/emote/PROUD.png){: .emote}
Et pourtant, c'est toujours pratique de pouvoir récupérer la musique que notre streamer préféré (ou pas) est en train de passer.

Nous allons voir comment intégrer le titre de la chanson en cours de lecture depuis l'application Spotify, directement dans OBS.

L'astuce réside intégralement sur le fait que spotify affiche le titre de la musique dans son titre de fenêtre.

![](/assets/images/spotify-obs-titre-chanson/titre.png)

Nous allons donc procéder ainsi : 
* Récupérer le titre de la musique via le titre de la fenêtre de Spotify
* Écrire ce titre dans un fichier.
* Dire à OBS d'afficher le contenu de ce fichier. C'est tout ! ![](/assets/images/emote/WINK.png){: .emote}

# Installation
La première étape consiste à installer `wmctrl` et `xdotool`, c'est grâce à ces deux commandes qu'on pourra récupérer le titre depuis la CLI.
```
sudo apt install wmctrl xdotool
```

En fonction de votre distribution vous devriez déjà disposer de `pgrep`, `head`, `grep` et `awk` vous n'avez donc rien d'autres à installer.

# Création du script
Je vous mâche le boulot, j'ai déjà fait le script ![](/assets/images/emote/RS.png){: .emote}
```bash
#!/bin/bash
snap run spotify& # On lance spotify
getSong() { 
  pid=$(pgrep -f "/snap/spotify/.+/usr/share/spotify/spotify$") # On récupère le PID (processus ID) de spotify
  if [ -z "$pid" ] # Pas de PID ? Pas de musiké !
  then
    echo "No song playing" 
    echo "" > $1 # On vide le fichier de destination pour éviter d'afficher une information erronée
  else
    windowId=$(wmctrl -lp | grep $pid | awk '{print $1}') # On récupère l'ID de la fenêtre
    songName=$(xdotool getwindowname $windowId) # Puis on récupère le titre de la fenêtre grâce à son ID
  fi
}

while (true)
do
  getSong
  echo $songName > $1 # On écrit le résultat dans le fichier de destination, toutes les 10 secondes.
  sleep 10 # Le script réactualisera le titre en cours toutes les 10 secondes
done
```
Vous noterez plusieurs informations importantes :
* On utilise la commande `snap run spotify&` dès le début, ce qui veut dire qu'on lance Spotify (via [snap](https://doc.ubuntu-fr.org/snap)) et qu'ensuite le script fait son boulot. 
Je l'ai intégré au script car si vous lancez votre spotify "normalement" vous oublierez la plupart du temps de lancer le script.
En utilisant ce script, vous n'avez qu'a changé votre raccourci Spotify et le faire pointer vers celui-ci.
* Le script s'actualise toutes les 10 secondes `sleep 10`, à vous de modifier cette valeur à votre guise.
* `$1` est utilisé dans le script, ce qui veut dire qu'il y a un argument à passer au script : **Le chemin de destination du fichier !**, il vous faudra exécuter le script de cette façon `sh nom_script.sh /home/btor/songname.txt`

# Intégration à OBS
Rendez-vous ensuite sur OBS et dans votre scène, ajouter une source texte et sélectionner votre fichier généré par le script :

![](/assets/images/spotify-obs-titre-chanson/obs-ajout-texte.png)

Et voilà ![](/assets/images/emote/KJ.png){: .emote} 

![](/assets/images/spotify-obs-titre-chanson/obs-apercu.png)
