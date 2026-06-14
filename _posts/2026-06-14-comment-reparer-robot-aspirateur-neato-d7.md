---
layout: post
title: "Comment réparer son robot aspirateur Neato (D3, D4, D5, D6, D7) ?"
date: "2026-01-30 16:23"
last_modified_at: "2026-01-30 16:23"
description: "Que faire de son aspirateur Neato suite à la fermeture de la marque ?"
image: /assets/images/comment-reparer-robot-aspirateur-neato-d7/main.jpg 
author: Thibaut BAYER
tags:
  - robot aspirateur
  - neato
  - electronique
---

Aujourd'hui je ne parlerai pas d'IA/LLM ou de Fable 5 (dernier modèle d'anthropic) que l'on vient sauvagement de nous retirer du marché, mais plutôt
d'un des "petits projets" que j'ai pu faire sur mon temps libre.

**En Mai 2023**, la société Vorwerk annonçait la **fermeture définitive de Neato**, la marque "star" des robots aspirateurs (enfin, star quand elle était à son apogée ... ![](/assets/images/emote/LUL.png){: .emote})
Vorwerk se voulait rassurant "nous garderons les serveurs cloud actifs pendant 5 ans" mais que tchi ! En 2025 elle décide de couper l'intégralité des serveurs.

Pour les clients Neato c'est la douche froide, on se retrouve avec des **robots aspirateurs fonctionnels mécaniquement parlant mais utilisables uniquement en mode manuel** (ce qui perd vachement de son intérêt) ![](/assets/images/emote/SAD.png){: .emote}

Après quelques tentatives de réanimation du robot (promis je n'ai pas fait de bouche à bouche), je me suis demandé si, tout comme moi, quelqu'un s'était déjà penché sur le sujet de faire revivre ces aspirateurs.
Rapidement je suis tombé sur **le projet [OpenNeato](https://github.com/renjfk/OpenNeato)** créé par le Finlandais Soner Köksal.

Je ne vous cache pas ma joie quand j'ai vu ce projet, ni une, ni deux, j'ai commandé toutes les pièces nécessaires et je me suis lancé !

## Comment ça marche ?
*Pour ceux qui sont bilingues et déjà à l'aise avec tout ce qui est embarqué (Arduino/ESP etc), ce blog post ne vous servira pas à grand-chose, référez-vous directement à la documentation du projet sur Github.*

*A noter: cette solution fonctionne pour les robots Neato D3 à D7 seulement*

Le principe est assez simple, nous allons devoir **installer un programme dans une carte ESP32** (carte électronique qui possède une petite mémoire, du wifi et du bluetooth).
Ce programme va nous permettre de disposer d'une interface de contrôle du robot ET de pouvoir profiter à nouveau des fonctionnalités du robot comme le fait de pouvoir se déclencher tout seul.
Pour ce faire, **la carte** devra être **directement reliée au port "DEBUG" du robot**. Pas d'inquiétude, tout est expliqué plus bas.

## Pièces à acheter
Pour pouvoir réparer votre robot-aspirateur vous aurez besoin : 
* D'**[une carte ESP32](https://amzn.to/4eG3m7U)**{:target="_blank"} ~10€ sur amazon / 2€ sur [AliExpress](https://fr.aliexpress.com/item/1005007468497664.html?spm=a2g0o.productlist.main.4.56040ebA0ebAB4&aem_p4p_detail=202606140755163329077381155600001386229&algo_pvid=e20fec76-3756-4d73-9dfa-73990cd91d01&algo_exp_id=e20fec76-3756-4d73-9dfa-73990cd91d01-3&pdp_ext_f=%7B%22order%22%3A%22165%22%2C%22eval%22%3A%221%22%2C%22fromPage%22%3A%22search%22%7D&pdp_npi=6%40dis%21EUR%211.64%211.64%21%21%2112.52%2112.52%21%40211b61ae17814489166796179e4163%2112000040880478704%21sea%21FR%214713785735%21X%211%210%21n_tag%3A-29919%3Bd%3A7e9446e3%3Bm03_new_user%3A-29895&curPageLogUid=jLXP6QLiRTDK&utparam-url=scene%3Asearch%7Cquery_from%3A%7Cx_object_id%3A1005007468497664%7C_p_origin_prod%3A&search_p4p_id=202606140755163329077381155600001386229_1){:target="_blank"}
*Note: Vous pouvez utiliser plusieurs types de carte ESP : ESP32, ESP32-C3, ESP32-S3*
* De **[connecteurs 4 pins de 2.54mm](https://amzn.to/4fFo5K1)**{:target="_blank"} ~10€ sur amazon ou 3€ sur [AliExpress](https://fr.aliexpress.com/item/1005009565578064.html?spm=a2g0o.order_list.order_list_main.17.73735e5biZGFX6&gatewayAdapt=glo2fra){:target="_blank"} (attention à bien sélectionner 4 pins)
* D'**[un fer à souder](https://amzn.to/4fFo5K1)**{:target="_blank"} ~20€ sur amazon/leroy merlin etc
* Un **[embout-rallonge torx T10 ](https://amzn.to/4uwrGxT)**{:target="_blank"} ~15€ sur Amazon / 1€ sur [AliExpress](https://fr.aliexpress.com/item/1005007476988062.html?spm=a2g0o.productlist.main.2.1256E4erE4er2a&algo_pvid=89a32a8f-9989-4151-9c15-e54722048ab4&algo_exp_id=89a32a8f-9989-4151-9c15-e54722048ab4-1&pdp_ext_f=%7B%22order%22%3A%225614%22%2C%22eval%22%3A%221%22%2C%22orig_sl_item_id%22%3A%221005007476988062%22%2C%22orig_item_id%22%3A%221005006034948251%22%2C%22fromPage%22%3A%22search%22%7D&pdp_npi=6%40dis%21EUR%211.14%211.14%21%21%218.71%218.71%21%40211b813b17814493894618042e98a1%2112000040909513990%21sea%21FR%214713785735%21X%211%210%21n_tag%3A-29919%3Bd%3A7e9446e3%3Bm03_new_user%3A-29895&curPageLogUid=GeI8cywScTXU&utparam-url=scene%3Asearch%7Cquery_from%3A%7Cx_object_id%3A1005007476988062%7C_p_origin_prod%3A1005006034948251){:target="_blank"}
* D'étain si non fourni avec votre fer à souder

et globalement c'est tout ! En fonction de l'endroit où vous commandez, vous pouvez facilement vous en tirer pour moins de 20€, l'écart de prix étant assez flagrant, j'ai fait mes achats sur AliExpress.

## Flashage
Avant de démonter votre robot, commencez par installer OpenNeato sur votre carte ESP32 : 
* Téléchargez la dernière version disponible d'OpenNeato [ici](https://github.com/renjfk/OpenNeato/releases) (normalement vous devriez cliquer sur `openneato-flash_Darwin_x86_64`)
* Connectez votre carte ESP32 en USB-C avec votre ordinateur
* Ouvrez un terminal, puis exécutez le fichier téléchargé, exemple :

```bash
btor@btor-desktop ~                                                                                                                                                                                                                              
> $ cd Téléchargements                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                             
btor@btor-desktop ~/Téléchargements                                                                                                                                                                                                           
> $ chmod +x openneato-flash_Linux_x86_64 && ./openneato-flash_Linux_x86_64
```

Vous devriez voir quelque chose du style : 
```bash
btor@btor-desktop ~/Téléchargements                                                                                                                                                                                                             
> $ chmod +x openneato-flash_Linux_x86_64 && ./openneato-flash_Linux_x86_64                                                                                                                                                                     
Using port: /dev/ttyACM0
Detecting chip type...
Detected chip: esp32-c3
Downloading firmware 0.13 for esp32-c3...
  (0.8 MB)
  [##################################################] 100%
Verifying SHA-256 checksum of openneato-esp32-c3-full.tar.gz...
Checksum OK.
  bootloader.bin: 13248 bytes at 0x0000
  partitions.bin: 3072 bytes at 0x8000
  boot_app0.bin: 8192 bytes at 0xe000
  firmware.bin: 1342768 bytes at 0x10000
Flashing via /home/btor/.cache/openneato/v5.2.0/esptool...
esptool v5.2.0
Connected to ESP32-C3 on /dev/ttyACM0:
Chip type:          ESP32-C3 (QFN32) (revision v0.4)
Features:           Wi-Fi, BT 5 (LE), Single Core, 160MHz, Embedded Flash 4MB (XMC)
Crystal frequency:  40MHz
USB mode:           USB-Serial/JTAG
MAC:                ac:a7:04:d1:9f:cc

Stub flasher running.
Changing baud rate to 921600...
Changed.

Configuring flash size...
Flash will be erased from 0x00000000 to 0x00003fff...
Wrote 13248 bytes (9562 compressed) at 0x00000000 in 0.1 seconds (830.2 kbit/s).
Hash of data verified.
Flash will be erased from 0x00008000 to 0x00008fff...
Wrote 3072 bytes (146 compressed) at 0x00008000 in 0.0 seconds (1048.6 kbit/s).
Hash of data verified.
Flash will be erased from 0x0000e000 to 0x0000ffff...
Wrote 8192 bytes (47 compressed) at 0x0000e000 in 0.0 seconds (1390.7 kbit/s).
Hash of data verified.
Flash will be erased from 0x00010000 to 0x00157fff...
Wrote 1342768 bytes (822175 compressed) at 0x00010000 in 4.7 seconds (2267.0 kbit/s).
Hash of data verified.

Hard resetting via RTS pin...
Flash complete!
```
Suivez les instructions dans votre terminal et connectez votre carte ESP32 à votre réseau wifi (obligatoire)

``` 
--- Monitor on /dev/ttyACM0 at 115200 baud ---
--- Ctrl-C to exit ---
========================================
  OpenNeato 0.13
========================================
  WiFi: btor.fr (192.168.1.30)
  Press 'm' for menu, 's' for status
========================================


WiFi Status
----------------------------------------
Connected: Yes
SSID: btor.fr
IP: 192.168.1.30
MAC: XX:XX:XX:XX:XX:XX
RSSI: -53 dBm
Saved SSID: btor.fr
----------------------------------------

Quick commands: [m]enu, [s]tatus
```
Pour être sûr que la carte est bien fonctionnelle, connectez-vous à l'adresse IP affichée http://192.168.1.30 (remplacez par votre IP)

Vous devriez voir l'interface d'OpenNeato mais sans la connexion avec le robot (normal, on ne l'a pas encore branché.. ![](/assets/images/emote/RS.png){: .emote})


Votre carte est désormais fonctionnelle, vous pouvez la débrancher/rebrancher pour être sûr qu'elle se reconnecte bien au wifi mais normalement tout est bon pour cette partie !
## Démontage
Commencez par retirer la batterie :
<img src="/assets/images/comment-reparer-robot-aspirateur-neato-d7/neato-d7-vis-batterie.jpg" width="300"/>
*La batterie s'enlève en retirant les deux vis cruciformes, vous pourrez ensuite la déconnecter*

Puis continuez en enlevant TOUTES les vis torx visibles sur le carénage, vous n'aurez normalement pas besoin de dévisser les roues.
<img src="/assets/images/comment-reparer-robot-aspirateur-neato-d7/neato-d7-vis-arriere.jpg" width="300"/>

N'essayez pas de forcer, le carénage est parfois clipsé (comme ici sur la face avant)
<iframe width="420" height="315" src="https://youtube.com/embed/PMFSPFnZjgk"></iframe>

## Installation
Votre robot désossé, c'est le moment de passer aux choses sérieuses ![](/assets/images/emote/OOPS.png){: .emote}

Prenez un connecteur 4-pins mâle, puis branchez-le sur le port debug
<img src="/assets/images/comment-reparer-robot-aspirateur-neato-d7/4-pin.jpg" width="500"/>
<img src="/assets/images/comment-reparer-robot-aspirateur-neato-d7/debug.jpg" width="500"/>
<img src="/assets/images/comment-reparer-robot-aspirateur-neato-d7/debug2.jpg" width="500"/>

Maintenant, vous allez devoir souder votre carte ESP32 en respectant les instructions ci-dessous :
``` 
 [ Port Robot Botvac ] [ Module ESP32 ]
+------------------------+ +-----------------------------------------+
| RX (réception données) | ---------------> | TX (envoi données)     |
| 3.3V(Alim)             | ---------------> | 3V3 (Alim)             |
| TX (envoi données)     | ---------------> | RX (réception données) |
| GND (Masse)            | ---------------> | GND (Masse)            |
+------------------------+ +-----------------------------------------+
```
<img src="/assets/images/comment-reparer-robot-aspirateur-neato-d7/pinout.jpg" width="500"/>
*Attention : chaque carte ESP32 a son propre schéma de brochage, si vous avez une autre carte (ESP32 C3 / S3 etc), référez-vous au schéma de brochage de votre carte ("pinout" sur internet)*

Pour que l'ESP32 ne gêne pas lors de la fermeture du carénage, je l'ai placée à cet endroit, sous la nappe noire
<img src="/assets/images/comment-reparer-robot-aspirateur-neato-d7/fin.jpg" width="500"/>
*Pensez à bien la "bloquer" pour éviter qu'elle bouge*

Une fois le tout soudé, on remonte le tout (carénage, batterie etc) et vous devriez être en mesure de vous connecter à votre robot aspirateur !
<img src="/assets/images/comment-reparer-robot-aspirateur-neato-d7/app.jpg" width="500"/>


## Remerciement
Je voudrais juste **remercier Soner Köksal** pour ce projet, j'étais tellement enthousiaste à l'idée qu'un tel projet existe que j'ai donné un pourboire sur Ko-fi sans même avoir testé la solution...
Grâce à lui je me suis évité le rachat d'un nouveau robot à 700€ alors **MERCI MERCI MERCI**
Ses liens : 

Site : [renjfk.com](https://renjfk.com)

Linkedin : [https://fi.linkedin.com/in/renjfk](https://fi.linkedin.com/in/renjfk)

Ko-fi (tips) : [https://ko-fi.com/renjfk](https://ko-fi.com/renjfk)