---
layout: post
title: "Chiffrer ses données avec GPG en CLI"
date: 2018-04-17
description: 
image: /assets/images/gpg/main.jpg
author: Thibaut BAYER
tags: 
  - Sécurité
---
[GPG (GNU Privacy Guard)](https://fr.wikipedia.org/wiki/GNU_Privacy_Guard) est une implémentation de [OpenPGP](https://fr.wikipedia.org/wiki/OpenPGP).
GPG permet de chiffrer/signer des fichiers dans le but d'échanger de l'information en toute sécurité. 
Dans cet article nous allons voir comment procéder sans utiliser d'interface graphique afin de bien comprendre le mécanisme.

# ⚙️ Fonctionnement
Le fonctionnement est assez simple, voici l'exemple typique d'échange de données chiffrées via GPG entre 2 personnes (Marlène et Arthur).

* Marlène **créer ses clefs de chiffrement** (une clef publique et une clef privée)

* Marlène **envoie sa clef publique** aux personnes avec qui elle souhaite discuter (ici Arthur)

* Arthur utilise **la clef publique de Marlène** pour chiffrer ses propres fichiers et lui renvoie la version chiffrée de son document.

* Marlène utilise alors **sa clef privée pour déchiffrer** le message/fichier d'Arthur. 


![](/assets/images/gpg/GPG.jpg)

> Cliquez sur l'image pour l'afficher en grand

**Ce qui est important :**

* Ne partager que votre clef publique

* Votre clef privée ne sert qu'au déchiffrement

* Gardez en lieu sûr votre clef privée

# 🛠️ La pratique
Dans cet exemple j'utilise GPG sur ubuntu 16.04 libre à vous d'utiliser GPG sur linux/windows ou mac.

### 🔑 Création des clefs
La première étape consiste à générer des clefs. Pour se faire, rien de plus simple :
```shell
marlene@pc:~$ gpg2 --full-gen-key
```
Il existe 2 commandes pour générer des clefs, celle présente ci-dessus ainsi que `gpg2 --gen-key`, cette dernière permet de lancer l'étape de génération de clef par défaut, elle vous demandera simplement un nom, un email et vous générera un couple de clefs RSA en 2048 bits. Pratique, rapide mais ne vous permet pas choisir le type de clef désiré ni même sa robustesse.
J'opte donc pour `--full-gen-key` afin de générer une clef 4096 bits en RSA.

Vous devriez avoir donc ceci :
```shell
gpg (GnuPG) 2.1.11; Copyright (C) 2016 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Sélectionnez le type de clef désiré :
   (1) RSA et RSA (par défaut)
   (2) DSA et Elgamal
   (3) DSA (signature seule)
   (4) RSA (signature seule)
Quel est votre choix ?
```
A cette question, choisissez la valeur par défaut : RSA et RSA
```shell
Quel est votre choix ? 1
les clefs RSA peuvent faire une taille comprise entre 1024 et 4096 bits.
Quelle taille de clef désirez-vous ? (2048) 4096
```
Plus votre taille de clef est grande, plus celle-ci est robuste, optez donc pour une clef de 4096 bits.

```shell
La taille demandée est 4096 bits
Veuillez indiquer le temps pendant lequel cette clef devrait être valable.
         0 = la clef n'expire pas
      <n>  = la clef expire dans n jours
      <n>w = la clef expire dans n semaines
      <n>m = la clef expire dans n mois
      <n>y = la clef expire dans n ans
Pendant combien de temps la clef est-elle valable ? (0)
```
Gros dilemme, **par défaut la clef n'expire pas** c'est à dire que vous pourrez l'utiliser ad vitam æternam. Dans un monde idéal il serait judicieux d'avoir une vraie politique de sécurité et de renouveler ses clefs tous les X mois/années. 
En fonction de l'utilisation de GPG (chiffrement personnel de vos photos de vacances ou chiffrement de données professionnelles) vous aurez tout intérêt à faire en sorte que votre clef expire dans 6 mois, 1 an ou plus. 

Libre à vous de choisir la durée de validité, dans mon cas je reste sur une clef qui n'expire jamais.
```shell
Pendant combien de temps la clef est-elle valable ? (0) 
La clef n'expire pas du tout
Est-ce correct ? (o/N) o
```
Validez en tapant `o` puis entrer

```shell
GnuPG doit construire une identité pour identifier la clef.

Nom réel : Marlène DURAND
Adresse électronique : marlene.durand@gmail.com
Commentaire : 
Vous utilisez le jeu de caractères « utf-8 ».
Vous avez sélectionné cette identité :
    « Marlène DURAND <marlene.durand@gmail.com> »

Changer le (N)om, le (C)ommentaire, l'(A)dresse électronique
ou (O)ui/(Q)uitter ? O
```
GPG va ensuite vous demander quelques informations vous concernant comme votre nom, email et un commentaire sur la clef.  Remplissez les et validez en tapant `O` puis entrer

```shell
De nombreux octets aléatoires doivent être générés. Vous devriez faire
autre chose (taper au clavier, déplacer la souris, utiliser les disques)
pendant la génération de nombres premiers ; cela donne au générateur de
nombres aléatoires une meilleure chance d'obtenir suffisamment d'entropie.
```
GPG vous demandera de définir une passphrase (un mot de passe quoi) afin de générer les clefs. Faites en sorte de mettre un mot de passe complexe afin de garantir sa robustesse, et accessoirement souvenez-vous du mot de passe ... ça pourrait être utile pour la suite ?

La génération peut prendre quelques minutes, faites couler un café, raconter votre weekend à vos collègues et revenez après ?
```shell
gpg: clef AC907F30 marquée de confiance ultime.
gpg: revocation certificate stored as '/home/btor/.gnupg/openpgp-revocs.d/C826A880D01D7EE90D7785A28B728B0DAC907F30.rev'
les clefs publique et secrète ont été créées et signées.

gpg: vérification de la base de confiance
gpg: marginals needed: 3  completes needed: 1  trust model: PGP
gpg: profondeur : 0  valables :   2  signées :   0
     confiance : 0 i., 0 n.d., 0 j., 0 m., 0 t., 2 u.
pub   rsa4096/AC907F30 2018-04-16 [S]
      Empreinte de la clef = C826 A880 D01D 7EE9 0D77  85A2 8B72 8B0D AC90 7F30
uid        [  ultime ] Marlène DURAND <marlene.durand@gmail.com>
sub   rsa4096/6969D94F 2018-04-16 []
```
La génération terminée, vous devriez avoir un récapitulatif des clefs qui ont été générées.

Pour vérifier les clefs disponibles dans votre trousseau GPG, tapez `gpg2 --list-keys`
```shell
marlene@pc:~$ gpg2 --list-keys
gpg: vérification de la base de confiance
gpg: marginals needed: 3  completes needed: 1  trust model: PGP
gpg: profondeur : 0  valables :   1  signées :   0
     confiance : 0 i., 0 n.d., 0 j., 0 m., 0 t., 1 u.
/home/btor/.gnupg/pubring.kbx
-----------------------------
pub   rsa4096/AC907F30 2018-04-16 [SC]
uid        [  ultime ] Marlène DURAND <marlene.durand@gmail.com>
sub   rsa4096/6969D94F 2018-04-16 [E]
```

### ✉️ Envoie de la clef publique
Maintenant que nos clefs sont générées, nous allons **envoyer notre clef publique à tout nos correspondants**.

Pour extraire votre clef publique, tapez : 
```shell
marlene@pc:~$ gpg2 --armor --export marlene.durand@gmail.com > marlene.asc
```
Pensez à remplacer marlene.durand@gmail.com par l'email de votre clef

Par défaut, GPG vous exporte la clef publique, si vous désirez exporter la clef privée pour la mettre sur un autre serveur par exemple, vous devrez utiliser : 
```shell
marlene@pc:~$ gpg2 --armor --export-secret-keys marlene.durand@gmail.com > marlene_private.asc
```
Notez que l'option --armor permet de convertir la sortie (par défaut binaire) en ASCII.

### 🔒 Chiffrer un fichier
Commençons par créer un fichier d'exemple sur le pc d'Arthur :
```shell
arthur@pc:~$ echo "Ce message est à destination de marlène" > message
arthur@pc:~$ cat message
Ce message est à destination de marlène
```
Arthur dispose de la clef publique de Marlène, ils peuvent désormais l'utiliser pour chiffrer tout type de fichier.
Importons la clef de Marlène dans le trousseau GPG d'Arthur :

```shell
arthur@pc:~$ gpg2 --import marlene.asc 
gpg: clef AC907F30 : clef publique « Marlène DURAND <marlene.durand@gmail.com> » importée
gpg:       Quantité totale traitée : 1
gpg:                     importées : 1  (RSA: 1)
```
Pour chiffrer le fichier "message", il suffit d'utiliser cette commande : 

```shell
arthur@pc:~$ gpg2 --output message.gpg --encrypt --armor --recipient marlene.durand@gmail.com message
gpg: 6969D94F : aucune assurance que la clef appartienne vraiment à l'utilisateur nommé.

pub  4096R/6969D94F 2018-04-16 Marlène DURAND <marlene.durand@gmail.com>
Empreinte clef princip. : C826 A880 D01D 7EE9 0D77  85A2 8B72 8B0D AC90 7F30
 Empreinte de sous-clef : E601 A72E D893 CBED D548  F6DF C8A4 316C 6969 D94F

La clef n'appartient PAS forcément à la personne nommée
dans l'identité. Si vous savez *vraiment* ce que vous
faites, vous pouvez répondre oui à la prochaine question.


Faut-il quand même utiliser cette clef ? (o/N) o
```
Un fichier message.gpg a été généré, c'est ce fichier qui sera mis à disposition de Marlène.

### 🔓 Déchiffrement
Marlène reçoit le fichier "message.gpg" et doit le déchiffrer, rien de plus simple ! Il suffit de taper : 
```shell
marlene@pc:~$ gpg2 --decrypt arthur.gpg 
gpg: chiffré avec une clef RSA de 4096 bits, identifiant 6969D94F, créée le 2018-04-16
      « Marlène DURAND <marlene.durand@gmail.com> »
Ce message est à destination de marlène
```
Notez que nous aurions pu rediriger la sortie vers un fichier afin de sauvegarder le résultat `gpg2 --decrypt arthur.gpg  > arthur`

# 📝 A noter
* Votre **clef privée doit rester PRIVEE** vous ne devez partager que votre clef publique

* La procédure ci-dessus **ne prends pas en compte la signature des fichiers** (vérification des émetteurs) **vous pouvez** bien évidemment (et c'est recommandé) **signer vos fichiers avec l'option `--sign`**. J'ai voulu faire simple pour que ce soit plus facilement abordable.

* Il est **possible de chiffrer vos fichiers symétriquement** en utilisant l'option `--symetric` , très peu recommandé mais bon à savoir
