---
layout: post
title: "Docker avancé"
date: 2019-12-01
description: 
image: /assets/images/docker-pratique-outils/main.png
author: Thibaut BAYER
tags: 
  - Infrastructure
published: true 
---
Je vous ai récemment parlé de Docker
Nous partons donc du principe que vous avez ces bases (docker push/pull/exec/ps/kill...) et que vous désirez aller un peu plus loin avec Docker. Il vous manque surement énormément d'informations pour vraiment utiliser Docker.
Dans cet article j'y répondrais et vous aurez de quoi avoir votre première stack docker fonctionnelle (promis ca ne sera pas long, seulement 223 pages éhéh).

Commençons par nous poser la bonne question, pourquoi utiliser Docker ? *Il parait que c'est cool*

Dans quel contexte ? *Ma stack de dev ? en production ?*

Répond t-il a tout nos besoins ? *Surement pas* @@LUL

La conteneurisation va nous permettre de lancer des processus dans un environnement cloisonné (oui je sais, je me répète). Autrement dit, si vous avez l'habitude d'installer votre stack local à la main, à base de `apt install apache2 ... ` ou autre, vous ne voyez surement pas l’intérêt de passer sur docker et pourtant ! dans énormément de cas docker peut vous aider. J'ai eu récemment le cas au travail où un développeur mobile ne connaissait pas Docker (ou juste de nom) et ne l'utilisait pas parcequ'il en voyait pas forcément l'utilité. En ayant pris connaissance des fonctionnalités apportées par Docker ainsi qu'une petite présentation bien ficelée ( #JaiUnMelonHorsNorme ), il a fini par trouvé Docker indispensable.

Voici quelques exemples d'utilisations de docker : 

- En tant que développeur web, vous avez votre bon vieux LAMP (Linux, Apache, Mysql, Php) classique, c'est cool mais comment font les nouveaux dévs quand ils arrivent dans votre team ? Ils réinstallent la stack complète à la main ? Quid du développeur qui utilise mac alors que toi tu utilises Windows ? C'est à ce moment là que Docker est utile, un fichier de configuration pour tout le monde et en 2 clicks, la stack est montée.
- En tant que devsOps, tu es souvent amené à alterner entre Python et Go, puis parfois, tu as besoin de gérer plusieurs versions de python, de go, au sein de la même machine. Pourquoi s'embêter avec une installation manuelle quand tu peux juste faire un `docker run golang:1.11.11`  `docker run golang:1.12.6`  `docker run python:2.7-stretch`  `docker run python:3.7.3-stretch` ?
- En tant que pentester vous utilisez différents outils d'intrusion et vous travaillez sur une faille PhpMyAdmin, comment tester facilement votre exploit sur différentes versions ? DOCKERRRRRRR 

Des exemples comme ceux-là il en existe un paquet, le plus important n'est pas d'utiliser docker parce que c'est sexy mais d'arriver à comprendre ce qu'il va vous apporter.

# ⚙️ Docker en stack de développement
Maintenant que nous avons les différents cas d'utilisation, prenons un des cas qui m'a concerné et qui est surement LE cas par excellence de docker : La stack de développement

Historiquement, on téléchargeait notre petit LAMP, MAMP, WAMP et on développait dans notre coin pépouze.
Ca marche mais c'est vite chiant, on peut souvent avoir un soucis isolé d'un autre dév parcequ'il n'est pas sur le même système d'exploitation, n'a pas mis la même configuration etc.. Grâce à Docker, on va avoir la même configuration, cross-platform et surtout on aura tous les mêmes erreurs de merde quand ça plantera ET CA C'EST COOL ! @@LUL

![](https://media.giphy.com/media/3oxRmGXbquXKz6DNPq/giphy.gif)

## ✍️ Le besoin
On va prendre en compte une stack de développement web classique, un bon vieux LAMP ! On a donc besoin :
- D'un serveur web, apache ou nginx
- D'un process PHP-FPM
- D'une base MySQL, PostgreSQL ou autre

La première chose à faire dans ce cas là est de rechercher si les technos sont disponibles sur Docker (via le docker hub). 

Après recherche, on trouve donc : 
- [PHP](https://hub.docker.com/_/php)
- [MySQL](https://hub.docker.com/_/mysql)
- [NginX](https://hub.docker.com/_/nginx)

Bingo, on a déjà de quoi faire pour créer notre stack. @@HEY

## 🛠️ La pratique
Je vous l'avais expliqué dans l'article précédent, pour lancer un conteneur on utilise `docker run` oui mais voilà, c'est vrai mais je vous ai légèrement menti... 

![](https://media.giphy.com/media/2emoe1XUg23rW/giphy.gif)

`docker run` récupère et lance une image docker, c'est vrai... mais imaginez si on devait faire ça pour tous les processus que vous utilisez ? Ça serait vite chiant  ! `docker run php && docker run mysql && docker run nginx` etc... Puis comme je vous l'ai dit, les conteneurs ont une durée de vie limité, on les lance, ils s'arrêtent et la donnée à l'intérieur de celui-ci est effacée. Comment faire pour utiliser une base de donnée ? ou même juste votre code source pour qu'il soit interprété par PHP ?

En réalité, Docker ne se limite pas à 4 commandes push/run/pull/exec, vous pouvez gérer bien plus de choses comme le réseau entre vos conteneurs, monter des volumes de fichiers, gérer vos entrées /etc/hosts etc..

C'est exactement la même chose que la configuration d'une machine virtuelle sauf qu'on enlève l'aspect \"matériel\", on ne gère pas la mémoire qu'on attribue à notre conteneur, ni même son espace disque. Par contre, on peut gérer l'espace disque ou la mémoire qu'on alloue à la machine virtuelle docker (dans le cas d'un DockerForMac par exemple)

![](/assets/images/docker-pratique-outils/settings.png)

Commençons par la création du conteneur nginx, notre process nginx va avoir besoin d'une configuration de base pour fonctionner (bah ouai, il faut bien qu'il sache où est notre code source et comment il doit l'interpréter) 

*Pour faciliter la relecture et la compréhension, tous les extraits de code ou de configuration sont disponibles sur [ce repo github](https://github.com/bt0r/docker-article)*

Revenons sur l'image docker que j'ai crée:

```dockerfile
FROM nginx:1.17.1-alpine

RUN mkdir -p /var/www/btor.fr

COPY ./config/btor.fr /etc/nginx/sites-available/

WORKDIR /var/www/btor.fr
```
*Je ne reviens pas sur le détail du fichier de configuration nginx, c'est un fichier basique*

Avec cette image, on voit bien qu'il n'y a rien dedans, on récupère juste nginx, on copie un fichier de configuration, on crée le répertoire `/var/www/btor.fr` et on le définit comme répertoire par défaut. 
Parfait, mais comment dire à nginx d'afficher notre page web ? 

La solution est de monter un volume pour que ces fichiers soient non pas copiés mon montés à la volée.
- Rendez vous dans votre répertoire `docker/nginx`
- Taper `docker build . -t btor/nginx`
- Puis `docker run -d -v ~/www/docker-article/web:/var/www/btor.fr btor/nginx` (attention au chemin du répertoire web)

Votre conteneur devrait se lancer et afficher un hash (qui correspond à l'ID du conteneur). Vérifions avec un `docker ps` : 

```
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
e4c925076a14        btor/nginx          \"nginx -g 'daemon of…\"   4 seconds ago       Up 3 seconds        80/tcp                   relaxed_wescoff
```

Notre conteneur nginx fonctionne bien, le volume à l'air d'avoir été pris en compte. On va donc le vérifier : 

```bash
btor@dev$ docker exec <containerID> ls
index.php
```

Bingo, le volume a bien été monté et les fichiers disponibles dans `/web` sont bien dans le répertoire `/var/www/btor.fr` du conteneur.

Maintenant que notre conteneur a bien les bons fichiers, essayons d'y accéder en HTTP. 
Première étape: 

```bash
btor@deb$ docker exec <container_id>  wget localhost -O-
...
<h1>Welcome to nginx!</h1>
<p>If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.</p>
...
```


Notre conteneur nous répond bien avec la page par défaut de NGINX mais pas de php, logique ! nous avons monté un volume de fichier mais aucun conteneur PHP n'existe.

Relions maintenant le conteneur nginx et PHP.

```Dockerfile
FROM php:7.3.6-fpm-alpine

WORKDIR /var/www/btor.fr
```



Ports 

Docker-compose
