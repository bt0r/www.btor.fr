---
layout: post
title: "Comment créer une application ReactNative sur Windows, MacOS, Android et iOS"
date: 2020-05-24
description: Est-il possible de créer une application ReactNative  cross-platform sur Windows, MacOS, Android et iOS ? Voyons ce que ReactNative a dans le ventre.
image: /assets/images/spotify-obs-titre-chanson/main.jpg
author: Thibaut BAYER
tags: 
  - React Native
  - Developpement
  - Tutorial
---
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
