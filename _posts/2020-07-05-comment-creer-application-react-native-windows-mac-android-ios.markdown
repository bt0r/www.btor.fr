---
layout: post
title: "Comment créer une application ReactNative sur Windows, MacOS, Android et iOS"
date: 2020-05-24
<<<<<<< HEAD
description: Est-il possible de créer une application ReactNative cross-platform sur Windows, MacOS, Android et iOS ? Voyons ce que ReactNative a dans le ventre.
=======
description: Est-il possible de créer une application ReactNative  cross-platform sur Windows, MacOS, Android et iOS ? Voyons ce que ReactNative a dans le ventre.
>>>>>>> edede4fde73d8da45b2489d608f1e4b1d06888c1
image: /assets/images/spotify-obs-titre-chanson/main.jpg
author: Thibaut BAYER
tags: 
  - React Native
  - Developpement
  - Tutorial
---
<<<<<<< HEAD
J'ai récemment fait un article de retour d'expérience concernant ReactNative.
Ce retour d'expérience est uniquement basé sur le développement d'application mobile Android et iOS, ce qui correspond à la majorité des cas d'utilisations.
Mais saviez-vous que ReactNative permet aussi de [développer des applications sur MacOS et Windows](https://microsoft.github.io/react-native-windows/) ?

Ca parait dingue mais c'est bien Microsoft qui a forké ReactNative pour y intégrer l'interopérabilité avec MacOS et Windows @@WUT.

Dans cet article nous allons essayer de développer une application qui fonctionnera à la fois sur **M**acOs, **i**OS, **W**indows et **A**ndroid.
On appellera notre application MiWa (je ne me suis pas fait chier, on est d'accord @@LUL)...
Elle ne contiendra que quelques écrans d'exemples avec divers composants ReactNative afin de voir les différences d'implémentations/compatibilités entre les plateformes.

*Note: Nous partirons du principe que vous avez déjà les dépendances nécessaire à ReactNative (node, npm, cacaoPod etc.)*

# Les restrictions
Comme énoncé plus tôt, c'est un fork, qui dit fork dit "retard" !
À chaque nouvelle release de ReactNative, Microsoft devra tester et implémenter les nouvelles updates de ReactNative dans ReactNative MacOS et Windows.

**ReactNative**
![](/assets/images/comment-creer-application-react-native-windows-mac-android-ios/release-react-native.png)

**ReactNative Windows**
![](/assets/images/comment-creer-application-react-native-windows-mac-android-ios/release-react-native-windows.png)

**ReactNative MacOS**
![](/assets/images/comment-creer-application-react-native-windows-mac-android-ios/release-react-native-macos.png)

Les releases de chaque repository nous montre bien qu'il y a un petit delta.
L'écart n'est pas énorme mais c'est à prendre en compte, `macos` est compatible avec ReactNative 0.61 et `windows` avec 0.62 donc on devra se limiter à la version la plus basse.
Notre API de référence sera donc la 0.61 afin que notre code soit compatible partout (pas spécialement un problème dans cet exemple)

Autre point de vigilance , la compatibilité des librairies !
Comme on peut le voir dans [la documentation officielle](https://microsoft.github.io/react-native-windows/docs/parity-status#supported-community-modules), tout n'est pas compatible @@NO

# Bootstrap du projet
Commençons par créer notre projet ReactNative (avec Typescript tant qu'a faire @@RS) :
```BASH
npx react-native@0.61.0 init miwa --template react-native-template-typescript@6.3.16
```

Continuons en installant ReactNative pour Windows et MacOS

```BASH
npx react-native-windows-init --overwrite
npx react-native-macos-init --overwrite
```

On remarque qu'on dispose désormais de 2 nouveaux répertoires `macos` et `windows` qui sont ni plus ni moins que les homologues d'`android` et `ios` .

![](/assets/images/comment-creer-application-react-native-windows-mac-android-ios/install-tree.png)

# Lancement de l'application
Pour le moment nous allons garder l'écran d'exemple et on se chargera de la modifier plus tard.
Normalement, vous pouvez lancer l'application d'exemple directement sur android en utilisant `npx react-native run-android`.
Pour MacOS et iOS il suffit de se rendre dans le répertoire `ios` ou `macos` et d'y faire un `pod install`.
// Ajouter windows

# Aller plus loin
* Saviez-vous qu'il est aussi possible de faire des applications ReactNative pour [tvOS ou pour du Web](https://reactnative.dev/docs/out-of-tree-platforms#__docusaurus) ? @@NO
* [Voir le board d'avancement des compatibilités des modules pour Windows](https://github.com/microsoft/react-native-windows/projects/23)
=======
J'ai récemment fait un article de retour d'expérience concernant ReactNative. 
Ce retour d'expérience est uniquement basé sur le développement d'application mobile Android et iOS,
 ce qui correspond à la majorité des cas d'utilisations. 
 Mais savez-vous que ReactNative permet aussi de développer des applications sur MacOS et Windows ?
Dans cet article nous allons voir comment développer une application qui fonctionnera à la fois sur **M**acOs, **i**OS, **W**indows et **A**ndroid.
On appellera notre application MiWa (je ne me suis pas fait chié, on est d'accord @@LUL) et on développera une application de prise de notes (projet simple pour se focaliser sur le coté cross-platform)


# Bootstrap du projet
```BASH
npx react-native init MyApp --template react-native-template-typescript
``` 
>>>>>>> edede4fde73d8da45b2489d608f1e4b1d06888c1
