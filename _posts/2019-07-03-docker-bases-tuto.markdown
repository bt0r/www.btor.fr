---
layout: post
title: "Docker, les bases"
date: 2019-07-03
description: Tu as entendu parler de Docker sans jamais l'essayer ou tu n'as rien compris ? Voyons un peu comment ça fonctionne.
image: /assets/images/docker-bases-tuto/main.jpg
author: Thibaut BAYER
tags: 
  - Infrastructure
  - Système
---
Régulièrement je me rends compte que certains développeurs ne sont pas à l'aise avec Docker. C'était aussi mon cas au début, Docker peut paraître complexe et flou au premier abord puis rapidement il devient **indispensable**, mais pourquoi ?

Dans cet article, je tâcherai de revenir sur les principaux concepts en essayant de faire le plus simple possible.
Si vous avez déjà un niveau avancé avec Docker, cet article n'est pas fait pour vous.

# ❓ C'est quoi Docker ?
>Docker est un logiciel libre permettant facilement de lancer des applications dans des conteneurs logiciels.

_Source wikipédia_

Cool, mais du coup, qu'est-ce qu'un conteneur ? Avant d'expliquer le concept de conteneurisation, commençons par comprendre la base: **la virtualisation**. 

### 🐳 Virtualisation VS Conteneurisation
Ça devrait parler à beaucoup d'entre vous, c'est le fait **d'émuler** un système d'exploitation dans un autre, par exemple, au sein d'un système d'exploitation Windows 10, j'émule un Linux, un MacOS ou même un Windows 3.1. Le logiciel permettant d'émuler nos systèmes d'exploitation est appelé un **Hyperviseur**. 

Il existe deux types d'hyperviseur :

- **L'hyperviseur de type 2** : 

![](/assets/images/docker-bases-tuto/hyperviseur_type_2.png)
_Source wikipédia_

Vous les connaissez certainement sans savoir qu'ils sont de type 2 :  VirtualBox et VMWare workstation. Le type 2 veut dire que l'hyperviseur a besoin d'un système d'exploitation "hôte" (maitre) pour fonctionner. Par exemple, vous ne pouvez pas lancer Virtualbox seul sans Windows ou Ubuntu.

- **L'hyperviseur de type 1** : 

![](/assets/images/docker-bases-tuto/hyperviseur_type_1.png)
_Source wikipédia_

A la différence du type 2, le type 1 fonctionne directement comme un "système hôte" et se charge de communiquer directement avec le matériel.
L'avantage du type 1 est qu'il permet d'avoir de meilleur performance étant donné qu'on dispose d'une couche applicative en moins contrairement au type 2 où le système d'exploitation hôte, sera consommateur de ressources. Hyper-V (Microsoft) est un hyperviseur de type 1.

Et la conteneurisation dans tout ça ?

Un conteneur, c'est grossièrement la même chose qu'une machine virtuelle, notre conteneur va avoir son propre système **SAUF** que celui-ci communiquera directement avec le système d'exploitation hôte et pas nécessairement avec un hyperviseur. L’intérêt ? Un gain de performance pardi !

### 🖥️ Platformes (win, linux, mac)
Maintenant que l'on sait ce qu'est un hyperviseur, qu'on comprend la différence entre un conteneur et une machine virtuelle, est-ce qu'il y a une différence entre les différentes plateformes ? 


![](https://media.giphy.com/media/S3Ot3hZ5bcy8o/giphy.gif)

Oh que oui !

Docker ne se comporte pas réellement de la même façon en fonction des environnements. Docker se base sur les conteneurs LXC linux et propose une API plus accessible.

Vous voyez le problème ? 

Qui dit Linux, dit : On va avoir un problème avec Windows et Mac.
Effectivement, si vous utilisez Linux sur votre machine hôte vous n'aurez aucun problème, Docker est supporté nativement, par contre sous Windows et Mac vous aurez une couche supplémentaire pour faire fonctionner Docker... **Une machine virtuelle !**

![](https://media.giphy.com/media/LyJ6KPlrFdKnK/giphy.gif)

Comme je vous l'ai dit, Docker a besoin de Linux (LXC) pour fonctionner et quand vous n'êtes pas sous Linux, votre version de Docker (`DockerForMac` ou `DockerForWindows`) utilisera une machine virtuelle pour exécuter Docker. C'est pour cela que vous remarquerez assez rapidement que vos applications conteneurisées sont plus lentes sur Windows et Mac (les temps de latences dépendent de votre utilisation/application, des inputs/outputs nécessaires etc)
Rassurez-vous, c'est totalement transparent pour vous ! DockerForMac (ou DockerForWindows) s'occupera lui même de gérer la machine virtuelle, vous n'avez pas d'hyperviseur à installer.
A noter aussi que Docker n'est pas réservé à la conteneurisation d'image Linux, sous Windows vous aurez le choix entre des conteneurs Windows ou Linux mais vous ne pouvez pas exécuter les deux en même temps, tout comme vous ne pourrez pas exécuter un conteneur Windows sous Linux.

**Debriefing**

- Docker est plus lent sous MacOs et Windows
- Les conteneurs partagent le noyau hôte (virtualisé ou non)
- On peut lancer des conteneurs de différents systèmes d'exploitation tant que la système d'exploitation qui gère les conteneurs est le même que ceux-ci. Exemple : Un ordinateur sous windows 10 qui lance une machine virtuelle Ubuntu et qui dans celle ci aura des conteneurs sous debian.

# 🗒️ Dockerfile, instructions et Registry
> Si vous désirez continuer à lire cet article tout en lançant les commandes, vous devez bien évidemment avoir Docker d'installé et de fonctionnel)

Maintenant que nous avons vu le principe même de Docker et de la conteneurisation, passons à la pratique.
Comme nous l'avons vu, l'objectif de Docker est de simplifier la création et la manipulation de conteneurs.
Pour se faire, Docker met à disposition une API simple qui attend des **instructions** pour fonctionner. Ces instructions sont déclarés au sein d'un fichier nommé **Dockerfile**.

Ce même fichier est utilisé pour construire (build) l'image, l'image construite sera ensuite envoyée vers un "serveur Docker" qu'on appelle **Registry**. Le **Docker Hub** est un **Registry** gratuit mis à disposition de tout le monde (des plans payant existent aussi) mais il existe aussi d'autres Registry payant (plus performant, possibilité de gérer plusieurs repository privés etc). Vous pouvez aussi gérer vous même votre propre registry.
Pour simplifier, Docker Hub est un peu le **Github** de git, vous avez le droit à un repository privé et à autant de repository public que vous le désirez et si vous désirez avoir plus de repository privé, bah vous payez ... :)

Les images sont stockées avec des `Tag`, ces tags permettent de versionner les images sur le repository, par exemple si on regarde [les images disponibles pour Debian](https://hub.docker.com/_/debian) On s'aperçoit qu'il existe des images pour plusieurs versions de Debian (Jessie, Buster, Stretch etc..) qui sont en stable mais aussi des versions expérimentales, testing, Release candidate etc.

### ⚙️ Lancer son premier conteneur
Récupérons une image de Debian et regardons ce qu'il se passe :

- Taper `docker run -it debian:jessie sh`
- Vous devriez normalement tomber sur un shell avec juste `#` d'afficher.
- Taper `cat /etc/debian_version`
- Vous devriez voir `8.11` s'afficher
- Nous sommes bien sur une version 8 de Debian, good !

Sans presque rien faire, vous avez exécuter votre premier conteneur et vous avez exécuté une commande dans celui-ci ! Congrats !
Revenons maintenant sur ce que nous avons tapé:

- `docker run` : Permet de récupérer une image du Registry et de l'exécuter, si vous désirez uniquement récupérer une image docker sans même l’exécuter, vous pouvez utiliser la commande `docker pull`.
- `-it` : Permet de lancer le conteneur en mode interactif
- `debian:jessie`: C'est l'image qu'on veut récupérer et exécuter, notons que `debian` est le nom du repository et `jessie` le tag de la version à utiliser 
- `sh` : La commande qu'on cherche à lancer après avoir lancer le conteneur

En d'autres termes, on a demandé à docker de récupérer une image, la lancer et d'exécuter une commande qu'on lui donne (`sh`) ! C'est tout !

Les conteneurs sont censés avoir une fonction unique, par exemple on pourrait utiliser un conteneur pour lancer un processus nginx, php-fpm, go etc..
Le conteneur peut lancer cette fonction et se terminer à la fin du processus ou ne jamais s’arrêter (le cas d'un serveur web, d'un worker etc.). Si vous désirez arrêter l'exécution d'un conteneur qui tourne en rond, qui est un worker ou autre vous pouvez utiliser la commande `docker kill <hash>` ou `docker kill <nom-conteneur>`.

Reprenons la même image `debian:jessie` mais cette fois-ci nous lui demanderons de lancer le conteneur puis d’exécuter la commande `cat /etc/debian_version` sans être en mode interactif. 
- Taper `docker run debian:jessie cat /etc/debian_version`
- La commande renvoie directement `8.11`

**Conclusion :** ` Docker run` va récupérer une image docker puis l'exécuter, on peut exécuter l'image en mode interactif pour interagir dans le conteneur ou tout simplement lancer l’exécution d'une commande/fonction afin d'avoir la réponse directement.

### ➡️ Exec
`run` nous permettant de récupérer et lancer une image, comment fait-on quand on a un conteneur déjà lancé et qu'on veut exécuter une commande à l'intérieur de celui ci sans forcément passer à chaque fois par le shell ? c'est là qu'`exec` intervient.
Lançons `docker run nginx` dans une fenêtre, puis dans une autre :
- `docker ps` pour afficher la liste des conteneurs en cours d'exécution
- On aperçoit bien notre conteneur 
```
fdf20b921646  nginx "nginx -g 'daemon of…"   6 seconds ago   Up 4 seconds    80/tcp   happy_jepsen
```
- Essayons de récupérer la version de debian en tapant `docker exec happy_jepsen cat /etc/debian_version` (`happy_jepsen` doit être remplacé par le nom de votre conteneur ou son hash, ici `fdf20b921646`)
- Le conteneur répond `9.9`, ce qui correspond bien à la version `stretch-slim` disponible dans le [Dockerfile](https://github.com/nginxinc/docker-nginx/blob/b749353968a57ebd9da17e12d23f1a5fb62f9de9/mainline/stretch/Dockerfile) de nginx

**Conclusion :** Il faut faire attention à bien utiliser `docker run` et `docker exec`, on confond souvent les deux au début. 
`run` => Je récupère et je lance l'image (avec ou sans commande à exécuter) 
`exec` => Je lance une commande dans un conteneur **déjà** lancé.

### 🐥 Votre premier conteneur Docker
Nous avons connaissance de quatre commandes docker : `run`, `exec`, `pull` et `ps`. 
Jusqu’à présent nous avons récupéré des images docker déjà crée, mais qu'en est-il d'une image qu'on souhaiterait créer ?

Commençons par faire notre premier fichier **Dockerfile** :
- Créer un fichier nommé  `Dockerfile` et y ajouter : 

```dockerfile
FROM debian:jessie

RUN echo "toto"
```

On y voit deux instructions :

- `FROM` : Demande à Docker de récupérer une image (en l'occurence `debian:jessie`)
- `RUN` : Exécute une commande système, ça pourrait être `ls`, `cp`, `cat` ...

Les images Docker ont besoin d'être build pour ensuite pouvoir être lancée. 
Pour lancer le build d'une image, il suffit d'utiliser la commande `docker build .`. On dit juste à Docker de build l'image courante, docker se chargera de prendre le fichier `Dockerfile` dans votre répertoire courant. Vous pouvez aussi spécifier un chemin vers un Dockerfile en utilisant `docker build -f repertoire/Dockerfile .`

Voici le retour de la commande: 

```bash
 btor@dev$  docker build -f test/Dockerfile .
Sending build context to Docker daemon  3.928MB
Step 1/2 : FROM debian:jessie
 ---> 7cd9fb1ee74f
Step 2/2 : RUN echo "toto"
 ---> Using cache
 ---> 8831306e5a73
Successfully built 8831306e5a73
``` 

Trois choses importantes sont à noter :

- On voit très clairement les deux étapes que docker exécute : FROM et RUN
- Chaque étape à son propre hash `7cd9fb1ee74f` pour le FROM et `8831306e5a73` pour le RUN, chaque étape/instruction va créer un nouveau layer (une couche).
- Le build résulte d'un message `Successfully build 8831306e5a73`

## 📚 Les couches/layers
Pour chaque étape ou instruction que l'ont écris dans notre Dockerfile, Docker va créer un layer avec un `hash` propre à celui ci. Chaque layer est utilisable tel quel ! Oui oui ! Vous pouvez lancer un conteneur en vous basant sur le `hash` de votre layer
(vous pouvez tester en tapant`docker run 8831306e5a73 cat /etc/debian_version`)

![](https://media.giphy.com/media/2YntTHAxuJLZcKpOy9/giphy.gif)

Vulgarisons la chose, voilà ce que vous demandez à Docker:

- **Vous:** Créer moi une image qui hérite de `debian:jessie`
- **Docker:** C'est fait, l'image est écrite dans le cache avec le hash `7cd9fb1ee74f`
- **Vous:** En utilisant cette image, lance la commande `echo "toto"`
- **Docker:** C'est fait, j'ai réutiliser l'image `debian:jessie` puis y ai lancé la commande `echo "toto"` et j'ai sauvegardé le résultat dans une nouvelle image avec le hash `8831306e5a73`

Pour chaque étape, docker créer une couche, c'est génial parce que ça nous permet à la fois de tester ces étapes une à une mais c'est aussi une bonne chose puisque Docker va être capable de comprendre vos modifications sur le Dockerfile et de ne relancer que ce qui a été modifié, exemple : 

Vous avez un dockerfile avec différentes étapes: 

- Etape 1 / hash 111
- Etape 2 / hash 222
- Etape 3 / hash 333

Vous lancez votre `docker build .` et vous vous rendez compte que votre étape 2 n'est pas bonne. Vous l'éditez et relancé le build... et la **PAF !** vous vous rendez compte que Docker ne relance pas l'étape 1 mais passe directement à l'étape 2 et 3, pourquoi ? parce qu’il a déjà en mémoire l'étape 1 et sait qu'elle n'a pas été touché donc il peut repartir de là et exécuter les étapes filles. A noter que les étapes sont séquentielles, elles dépendent toutes de leur "mère", Etape 3 dépend de Etape 2 qui elle même dépend d'Etape 1. Docker ne peut donc pas relancer uniquement L'étape 2, elle est la mère de l'étape 3 et donc Docker n'a aucun moyen de savoir si elle a été modifié ou pas.
 
## 📝 Les instructions
On l'a vu plus haut, un Dockerfile est composé d'instructions, dans les instructions courantes, on retrouve: 

- `FROM`: C'est notre héritage de base de l'image
- `RUN`: On lance une commande dans le filesystem du conteneur
- `COPY`: Permet de copier des fichiers depuis la machine hôte vers le conteneur
- `LABEL`:  Notion "d'étiquettes" qu'on donne au conteneur, utile pour mettre qui est l'auteur, le mainteneur, ou un mail de contact
- `ENV`: Affectation de variables d'environnements
- `EXPOSE`: Permet d'exposer des ports, par exemple dans le cas d'un conteneur de serveur web, on exposera le port 80 et 443 afin de pouvoir accéder au processus Nginx/Apache
- `WORKDIR`: Change le répertoire de travail 
- `ENTRYPOINT`: Lance un script d'initialisation du conteneur
- `CMD`: Une fois le conteneur lancé, CMD sera utilisé comme commande par défaut pour lancer le conteneur (typiquement sur un conteneur `node` on pourrait avoir un `node start`) 

Ces instructions peuvent être utilisées dans l'ordre que vous voulez, à l'exception de certaines... (bah oui, il y a toujours un truc bizarre qui se cache...).
Dans vos premiers Dockerfile vous utiliserez **toujours** l'instruction `FROM` en première. Tout simplement parce que votre image commence toujours à partir d'une autre image,  vous avez la possibilité de créer votre propre image de "départ". C'est ce qu'on appelle les `base image`. Il n'est pas du tout nécessaire de savoir créer des `base image` pour utiliser Docker mais pour les intéressés [voici le lien](https://docs.docker.com/develop/develop-images/baseimages/).

Mention spéciale aussi pour `CMD` et `ENTRYPOINT` qui sont souvent utilisées à la fin du Dockerfile pour des soucis de lisibilité/compréhension et parce qu'elles définissent le script/command à lancé une fois le conteneur "prêt".

## 🕊️ Push it to the limit

![](https://media.giphy.com/media/owiooI9tn2hjy/giphy.gif)

On a arrive à construire nos images en locale, à les lancer, lancer des commandes à l'intérieur de nos conteneurs etc.. cool ! mais comment fait-on pour les sauvegarder sur le hub ?

Première étape, votre `Dockerfile` doit être versionné avec github (ou autre) afin de garder une trace de votre image.
La deuxième étape est toute simple, pour chaque version de votre image, vous allez lui appliquer un `tag` et l'envoyer sur le hub docker.

Faisons un essai avec ce Dockerfile: 
```bash
FROM debian:jessie
LABEL maintainer="Thibaut BAYER<bt0r>"
RUN echo "Bienvenue sur votre première image docker"
COPY ./script.sh /root/script.sh
RUN chmod 777 /root/script.sh
ENTRYPOINT ["/root/script.sh"]
```
Au même endroit que le Dockerfile, créez un fichier nommé `script.sh` avec ceci à l'intérieur

```bash
#!/bin/bash
echo "WOW ca marche"
```
Lancons le build de l'image : 
```
docker build .
```
Ce qui nous donne 
```bash
Sending build context to Docker daemon  3.072kB
Step 1/6 : FROM debian:jessie
 ---> d69ffb5f6cbf
Step 2/6 : LABEL maintainer="Thibaut BAYER<bt0r>"
 ---> Using cache
 ---> 2ffcffa9a5a8
Step 3/6 : RUN echo "Bienvenue sur votre première image docker"
 ---> Using cache
 ---> cb64dcad7887
Step 4/6 : COPY ./script.sh /root/script.sh
 ---> 70d8badd9532
Step 5/6 : RUN chmod 777 /root/script.sh
 ---> Running in a7f7f63d4490
Removing intermediate container a7f7f63d4490
 ---> 8df44389144c
Step 6/6 : ENTRYPOINT ["/root/script.sh"]
 ---> Running in 0d4194fc0f3e
Removing intermediate container 0d4194fc0f3e
 ---> 1faa94d56d33
Successfully built 1faa94d56d33

```

Vous noterez qu'une seule étape de mon Dockerfile crée quelque chose dans le conteneur, c'est l'étape "COPY" qui copie un fichier depuis le système hôte jusqu'au conteneur. L'instructions `RUN echo "Bienvenue ..."` ne s'affiche que lors de l’exécution du build, pas une fois l'image crée/lancée.

Notre image est crée en local, on peut l’exécuter en faisant `docker run 1faa94d56d33` (où `1faa94d56d33` correspond au dernier layer construit).

`WOW ca marche` s'affiche, génial, sauf que voilà, notre image n'a pas de version/nom du coup c'est un peu chiant d'utiliser à chaque fois le hash de celle-ci. 

Et si on la tagguait ? Pour tagguer, il suffit d'utiliser l'option `-t` :

```bash
$ docker build . -t btor/wow

Sending build context to Docker daemon  3.072kB
Step 1/6 : FROM debian:jessie
 ---> d69ffb5f6cbf
Step 2/6 : LABEL maintainer="Thibaut BAYER<bt0r>"
 ---> Using cache
 ---> 2ffcffa9a5a8
Step 3/6 : RUN echo "Bienvenue sur votre première image docker"
 ---> Using cache
 ---> cb64dcad7887
Step 4/6 : COPY ./script.sh /root/script.sh
 ---> Using cache
 ---> 70d8badd9532
Step 5/6 : RUN chmod 777 /root/script.sh
 ---> Using cache
 ---> 8df44389144c
Step 6/6 : ENTRYPOINT ["/root/script.sh"]
 ---> Using cache
 ---> 1faa94d56d33
Successfully built 1faa94d56d33
Successfully tagged btor/wow:latest
```

On note ici que j'ai utilisé : `btor` comme nom de compte docker hub, `wow` comme repository et c'est tout, docker m'a automatiquement attribué la version `latest`, ce qui veut dire que si je refait un build de cette même image ou d'une image modifié avec le même tag, elle surchargera ma précédente. Et oui jamy !

![](https://media1.tenor.com/images/43d1951bb99d9223dbdc3146ef8b4f60/tenor.gif?itemid=11967093)

Pour spécifier une version, on peut tout simplement ajouter `:v1` par exemple, ce qui donnerait 

```bash
docker build . -t <vous>/wow:v1
```
La version peut s'appeller de n'importe quelle facon `10.1`, `v1`, `v1-alpha` ...

Notre image en v1 crée en local, il serait temps de l'envoyer sur le docker hub en tapant `docker push <vous>/wow:v1` (pensez à remplacer `<vous>` par votre nom de compte docker hub que ce soit pour vos builds ou vos push sinon vous n'aurez pas les droits d'envoyer sur un repository dont vous n'êtes pas le propriétaire)

```bash
docker push <vous>/wow:v1
The push refers to repository [docker.io/<vous>/wow]
abd25ccbce1b: Pushed 
c70e7bc63ac2: Pushed 
790002cce4fd: Mounted from library/debian 
v1: digest: sha256:90717eefe2dedddfd65d818f88f1c75aa29b7f5c3aafc43dba2b0fca8656cf9b size: 943
```
Notre image est désormais disponible sur le docker hub, elle est réutilisable par n'importe qui (repository public) ! Top ! 
Maintenant éditons notre `script.sh` et remplaçons le `WOW ca marche` par `WOW c'est la v2 !` et taggons tout ca en v2
- `vim script.sh` -> Wow c'est la v2 !
- ` docker build . -t <vous>/wow:v2`
- `docker push <vous>/wow:v2`

Une fois le push effectué, rendez vous sur votre compte docker hub. Vous devriez avoir 2 versions (`v1` et `v2`) dans votre repository `wow`.

Les deux versions peuvent être récupérées par n'importe qui en faisant `docker pull <vous>/wow:v1` ou `docker run <vous>/wow:v2`, si l'image n'existe pas en local, docker va rechercher sur docker hub et va automatiquement télécharger l'image.

Et si on testait ce fonctionnement en local ? :D 

- Listez vos images locales en tapant `docker images <vous>/wow`
- Supprimez vos 2 versions locale `v1` et `v2` en faisant ` docker rmi --force 1faa94d56d33 1faa94d56d33` (avec vos hash d'images)

**docker images** permet de lister les images disponibles en local, tandis que **docker rmi** supprime les images (`rmi` pour remove images).

Les images étant supprimées, testons de récupérer les images que vous avez publiez :

- `docker run <vous>/wow:v1` => WOW ca marche
- `docker run <vous>/wow:v2` => WOW c'est la v2 !

Dans les deux cas, docker nous informe bien que l'image n'est pas disponible en local `Unable to find image '<vous>/wow:v1' locally`. Vous pouvez d'ailleurs essayer avec les images que j'ai moi même posté sur le hub sans remplacer par votre nom d'utilisateur : `docker run btor/wow:v1` vous devriez avoir le même résultat mais docker retéléchargera l'image (vu que pour lui elle est différente de la votre).

# Conclusion
Vous avez désormais les notions de bases de docker, vous savez comment docker fonctionne, comment récupérer/stoper/lancer/créer/pousser une image. 
Si vous avez aimé cet article ou que vous désirez avoir plus d'informations (voir même d'autres articles dans la même veine, `docker-compose`, docker avancé, `kubernetes` etc..) faites le moi savoir :D
