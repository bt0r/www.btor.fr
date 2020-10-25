---
layout: post
title: "Rétro-ingénierie: Capturer le traffic HTTPS d'une application Android"
date: 2020-10-24
description: Capturer le traffic HTTPS d'une application Android en utilisant PCAPRemote ou Burp
image: /assets/images/retro-ingenierie-capturer-application-android/main.jpg
author: Thibaut BAYER
tags: 
  - Securite
  - Mobile
---

@@KJ Salut à toi jeune ~~entrepreneur~~, ~~caucasoïde~~...
Oula ! je glisse sur l'actu @@OOPS

Dans l'article sur [Noteflix](/2020/04/07/noteflix-allocine-netflix/) je vous parlais d'une technique pour récupérer le traffic IP à travers une application mobile.
L'astuce résidait dans l'utilisation de l'application [PCAPRemote](https://play.google.com/store/apps/details?id=com.egorovandreyrm.pcapremote) avec SSHDump et Wireshark pour l'analyse des paquets IP. 

Rappel:
```markdown
PCAPRemote est une application qui se charge de capturer les paquets IP du téléphone.
PCAPRemote peut vous fournir un fichier .pcap mais aussi faire office de serveur et fournir les paquets au travers de SSH (méthode SSHDump), dans ce cas, Wireshark se connectera à PCAPRemote afin de récupérer les paquets IP. 
```

> Et si on testait avec une application qui contient du HTTPS ?

Ça tombe bien, j'ai du temps avec le couvre-feu actuel @@SAD. 
J'enfile donc mon plus beau couvre-chef et je me lance dans le sniffing de [ma propre application](https://play.google.com/store/apps/details?id=com.btorfr) @@WINK

# Contexte
L'application **btor.fr** est un très bon cas d'utilisation car elle ne fait rien de complexe.
Elle se charge de récupérer un flux RSS sur [https://btor.fr/feed.xml](http://btor.fr/feed.xml) et affiche les articles de ce flux. C'est tout ! 

Nous allons partir du principe que nous ne connaissons pas du tout l'application et qu'on aimerait voir où elle récupère ses articles, une API ? un flux RSS ? 

# Sniffing SSL
Le sniffing consiste à lire ce qu'il se passe sur une liaison. 
Par exemple, lire les communications entre votre machine et les serveurs de Facebook.
Ça peut être tout type de flux HTTP, HTTPS, FTP, TELNET (ouais bon ... @@SAD)

Prenons l'exemple d'une liaison HTTP classique, pour intercepter ce qu'il se passe sur la liaison nous devons nous trouver au milieu de la liaison.
Une fois au milieu de la liaison, nous pouvons intercepter le traffic et le lire directement étant donné que HTTP n'est pas chiffré.

Pour HTTPS c'est pareil, on se place au milieu de la liaison mais cette fois-ci nous allons jouer le rôle de [proxy](https://fr.wikipedia.org/wiki/Proxy).
La "victime" (ici notre application) utilisera un certificat auto-signé, ce qui nous permettra de déchiffrer les paquets que l'on reçoit pour ensuite les renvoyer au destinataire (le serveur).

![](/assets/images/retro-ingenierie-capturer-application-android/schema.png){:.center-image}

# Première tentative
Nous avions déjà réussi à capturer du traffic HTTP grâce à PCAPRemote, nous pourrions tout simplement faire de même et voir ce qu'il se passe ? 

Deal @@SLT !

* Lancer PCAPRemote et configurer-le en fonction de vos préférences (récupération dans un fichier ou via SSHDump)
<center><img src="/assets/images/retro-ingenierie-capturer-application-android/pcap_remote.png" alt="PCAPRemote" width="200"/></center>

* Cliquer sur le logo "Play" pour lancer la capture puis analyser votre fichier .pcap

Vous ne voyez aucune trame HTTP ? alors que vous avez bien pris le soin de cocher la case `Make HTTPS/TLS connections decryptable` ? et vous avez bien installé les certificats ?
 
 C'est normal @@LUL

# Les restrictions
Depuis Android 7 Nougat (2016), Google a [ajouté une sécurité](https://android-developers.googleblog.com/2016/07/changes-to-trusted-certificate.html) afin de limiter les authorités de certifications (CA) approuvées par défaut par l'application.
Autrement dit, si l'application ne précise pas elle-même qu'elle autorise des CAs tierce, l'application n'utilisera jamais notre certificat auto-signé. 
Pas très pratique pour sniffer le traffic... @@NO

<iframe width="560" height="315" src="https://www.youtube.com/embed/ooWd8vV2dCs?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>

Dans mon cas, je pourrais très bien reconstruire mon application avec les nouvelles recommendations de Google mais ça ne serait pas très fun @@LUL !
Nous allons donc faire comme si je n'étais pas le développeur de l'application.

> Comment dire à l'application d'autoriser les certificats auto-signés si nous n'avons pas les sources de l'application ?

![](https://media.giphy.com/media/26FfieBFKHaHCivte/giphy.gif){:.center-image}

C'est exactement la question que je me suis posé et après quelques recherches je me suis rendu compte qu'il était possible d'injecter une configuration à un APK @@HEY !

**Première étape**, nous devons trouver le fichier APK de l'application :
* Récupérer l'ID de l'application dans l'URL du [PlayStore](https://play.google.com/store/apps/details?id=com.btorfr), ici `com.btorfr`
* Puis télécharger l'APK via un site type [Evozi](https://apps.evozi.com/apk-downloader/?id=com.btorfr
)

**Seconde étape**, nous allons lui injecter la configuration `network-security-config` en utilisant [ce script](https://github.com/levyitay/AddSecurityExceptionAndroid).

Rien de plus simple, il suffit de cloner le repository et de lancer : 
```shell
./addSecurityExceptions.sh com.btorfr.apk
```
<center><sup>(où com.btorfr.apk est le nom de l'APK téléchargé)</sup></center>

*Il se peut que le script ne fonctionne pas en fonction de l'application.
Dans ce cas, il faudra directement utiliser [APKTool](https://github.com/iBotPeaches/Apktool/).*

Vous devriez avoir une nouvelle version de l'APK disponible dans le répertoire courant.

**Troisième étape**, installer l'APK sur le téléphone. 
Soit vous l'installez vous-même sur votre téléphone, soit, si vous passez comme moi par un émulateur vous pouvez taper `adb install com.btorfr.apk` pour l'installer directement dans l'émulateur.

**Quatrième étape**, Tester ! 
Notre application est normalement opérationnelle, nous pouvons tester avec PCAPRemote ! 
Les étapes sont exactement les mêmes qu'en sniffant de l'HTTP à la petite différence que vous devrez importer le certificat SSL de PCAPRemote pour que cela fonctionne.

![](/assets/images/retro-ingenierie-capturer-application-android/wireshark_summary.png){:.center-image}

![](/assets/images/retro-ingenierie-capturer-application-android/wireshark_detail.png){:.center-image}

Tada @@PROUD ! Nous avons bien notre appel au flux RSS de visible. 
On peut apercevoir la couche TLS au-dessus d'HTTP, garantie que la liaison est bien chiffrée.

# Aller plus loin
J'ai volontairement réutilisé PCAPRemote parce que son utilisation est simple mais il est à noter que **ce n'est pas un proxy**.
PCAPRemote utilise une fonctionnalité spécifique à Android qui s'appelle [VPNService](https://developer.android.com/reference/android/net/VpnService).

> VpnService is a base class for applications to extend and build their own VPN solutions
> 
> It creates a virtual network interface, configures addresses and routing rules, and returns a file descriptor to the application

Si vous souhaitez aller un peu plus loin avec le sniffing, je vous recommande de vous orienter vers des outils dédiés comme [Burp Suite](https://portswigger.net/burp/communitydownload) ou [Fiddler](https://www.telerik.com/fiddler).

Burp est un outil dédié à l'audit de sécurité. 
Il permet notamment de créer un proxy, capturer le traffic HTTP/HTTPS, pouvoir intercepter/modifier les requêtes, faire des scans de vulnérabilités etc

En vous basant sur [le tuto officiel](https://portswigger.net/support/configuring-an-android-device-to-work-with-burp) vous pourrez obtenir exactement le même résultat qu'avec PCAPRemote :

![](/assets/images/retro-ingenierie-capturer-application-android/burp.png){:.center-image}
<center><i>Exemple avec l'application btor.fr</i></center>

# Conclusion
L'interception peut s'avérer très simple comme très complexe, tout dépendra de l'application que vous cherchez à rétro-ingéniérer et du type d'échange entre l'application et son/ses serveurs.

Dans les cas les plus complexes, vous devrez surement utiliser APKTool directement, faire quelques modifications propres à votre application voire vous amusez à déchiffrer la liaison client/serveur si celle-ci utilise un système d'échange moins intelligible que du JSON ou XML.

# Liens

[PCAPRemote Tutorial](https://egorovandreyrm.com/pcap-remote-tutorial)

[PCAPRemote sur Playstore](https://play.google.com/store/apps/details?id=com.egorovandreyrm.pcapremote)

[PCAPRemote sur Github](https://github.com/egorovandreyrm/pcap-remote)

[Burp Suite](https://portswigger.net/burp/communitydownload)

[APKTool](https://github.com/iBotPeaches/Apktool/)
