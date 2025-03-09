---
layout: post
title: "Logger son front (web ou extension de navigateur) avec Datadog"
date: 2020-09-11
last_modified_at: "2025-03-09 13:05"
description: Dans cet article je vous explique comment logger votre application front (ou extension de navigateur) en utilisant Datadog
image: /assets/images/logger-front-datadog/main.jpg
author: Thibaut BAYER
tags: 
  - Front-end
  - Datadog
  - Javascript
  - Monitoring
---

En tant que développeur back-end, j'ai été amené à utiliser [Datadog](https://www.datadoghq.com/) pour monitorer mes applications web.
Logs, Metrics, Monitor, Synthetics tests, Events... 
J'ai pu tester à peu près tous les services proposés par Datadog, certains m'ont plus, d'autres un peu moins mais globalement je suis assez fan du service proposé par Datadog.

Un des points qui revient souvent quand on parle de Datadog c'est :
> Ca serait bien de pouvoir monitorer aussi le front !

Ca tombe bien, depuis fin 2019 Datadog travaille sur [Browser-SDK](https://github.com/DataDog/browser-sdk) dont [Browser-logs](https://www.npmjs.com/package/@datadog/browser-logs) ![](/assets/images/emote/SLT.png){: .emote} !
`Browser-Logs` est un package NPM à installer qui met à disposition un Logger qui se chargera automatiquement de push les logs à Datadog. 
C'est simple à mettre en place et en plus on y retrouve toutes les fonctionnalités "classiques" de Datadog comme le fait d'avoir les attributs de GeoIP, User-Agent, Session, HTTP... directement interprété dans Datadog.

Ca tombe doublement bien puisque j'ai actuellement besoin d'un outil pour logger mon extension [Noteflix](https://github.com/bt0r/NoteFlix) ![](/assets/images/emote/RS.png){: .emote} 

{% include pub.html %}

# Installation
* Pour l'installation c'est simple, il vous suffira d'installer le package `browser-logs`
```BASH
npm install --save @datadog/browser-logs
```
* Ensuite, vous devrez vous rendre sur Datadog, dans `Integrations` > `API` puis `Client Tokens` (ou directement via [ce lien](https://app.datadoghq.com/account/settings#api))
 et créer un nouveau token. Garder le dans un coin, il servira bientôt.
![](/assets/images/logger-front-datadog/1.png){:.center-image} 
* Intégrez ensuite l'initialisation du package comme suit : 

```javascript
datadogLogs.init({
      clientToken: '<votre token>', // Le token que vous avez crée juste avant
      datacenter: 'us', // Le datacenter de destination, "eu" ou "us" 
      forwardErrorsToLogs: true, // Si vous désirez envoyer les console.error() à datadog
      sampleRate: 100 // Le pourcentage de session que vous voulez surveiller, de 0 à 100 donc.
})
```
* Une fois l'initialisation effectuée, vous pourrez envoyer votre premier log :

```javascript
import { datadogLogs } from '@datadog/browser-logs';

datadogLogs.logger.info('TEST');
```

C'est aussi simple que ça ! L'API fournit par le logger est assez standard, elle vous permet de passer des contextes, créer différents logger etc.

# À savoir
Je n'ai pas eu l'occasion de tester ça coté front mais il semblerait que Browser-Logs soit mieux supporté coté front "standard" plutôt que sur les extensions.

## Spécificités aux extensions
J'ai effectivement rencontré quelques petits soucis avec l'intégration de Browser-Logs dans mon extension ([voir cette issue](https://github.com/DataDog/browser-sdk/issues/487))
* Les extensions ne disposant pas du même contexte d'exécution qu'une app front classique, Browser-Logs ne fonctionne pas avec l'option `forwardErrorsToLogs`, il vous faudra désactiver cette option.

## Spécificités globales
* Après investigation, je me suis rendu compte que le datacenter `eu` ne fonctionnait pas (renvoie une 403), c'était peut-être un problème lié à Datadog ou autre mais j'ai dû passer par le Datacenter `us`.
* Qui dit logger, dit "tracking". Bien que ce ne soit pas spécialement ce que vous espérez faire, c'est ce que les bloqueurs de pub risque d'interpréter.
J'ai fait quelques tests et il est à noter qu'AdBlock ne semble pas bloquer les appels HTTP issu de Browser-Logs, par contre uBlock est lui plus restrictif et bloque automatiquement tous les appels.
Vous devrez donc prendre en compte qu'une partie de vos utilisateurs ne seront pas monitorés.

# Conclusion
L'intégration de Datadog pour logger notre application front est assez simple ! 
Il est à noter qu'il est aussi possible de faire du [RUM](https://docs.datadoghq.com/fr/real_user_monitoring/) (Real User Monitoring) en utilisant [Browser-RUM](https://www.npmjs.com/package/@datadog/browser-rum).

Vous avez désormais toutes les cartes en main pour monitorer votre application ![](/assets/images/emote/BEER.png){: .emote}

# Liens
[Browser-Logs sur Github](https://github.com/DataDog/browser-sdk)

[Documentation Officielle](https://docs.datadoghq.com/fr/logs/log_collection/javascript/?tab=npm)

[Exemple d'intégration dans une extension](https://github.com/bt0r/NoteFlix/blob/db5cd5ca33ecf84687564bd64d840c55d73bab57/src/logging/Logger.js)

{% include pub.html %}
