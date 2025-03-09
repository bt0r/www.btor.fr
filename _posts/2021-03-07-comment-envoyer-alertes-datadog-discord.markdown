---
layout: post
title: Comment envoyer des alertes Datadog dans Discord ?
date: 2021-03-07
last_modified_at: "2025-03-09 13:05"
description: Dans cet article j'explique comment envoyer des alertes Datadog directement dans Discord en utilisant les webhooks.
image: /assets/images/comment-envoyer-alertes-datadog-discord/main.jpg
author: Thibaut BAYER
tags: 
  - Monitoring
  - Datadog
  - Discord
---
J'en parlais dans un article précédent mais je suis assez fan de Datadog !
Logs, métriques, moniteurs, tableaux de bords et j'en passe, Datadog est plutôt bien fourni et permet vraiment de gérer intégralement son monitoring.
Qui dit monitoring, dit monitorer ! *(ou "surveiller" si toi pas comprendre la langue de Mary Poppins ![](/assets/images/emote/LUL.png){: .emote})*
Un des outils important de Datadog est sa fonction "Monitor" qui permet de créer des alertes en fonction de seuils, variations ou autres critères de déclenchement.
Ces alertes peuvent être envoyées par mail, sur slack [ou d'autres applications](https://docs.datadoghq.com/fr/integrations/).

![](/assets/images/comment-envoyer-alertes-datadog-discord/jusquici.jpg){: .center-image}

Depuis le COVID, quelques sociétés se sont mises au télétravail avec plus ou moins de succès (on vous voit ![](/assets/images/emote/KJ.png){: .emote}).
Parmi les gros changements qu'a apportés le télétravail, il y a eu l'arrivée massive de la visio : Meet, Zoom, Livestorm ou même Discord.

{% include pub.html %}

Pour beaucoup de travailleurs ~~du sexe~~ de la tech ![](/assets/images/emote/OUCH.png){: .emote}, ces outils sont devenus monnaie courante.
Certaines sociétés en ont d'ailleurs profité pour (parfois) changer leurs outils de communication pour privilégier un Discord plutôt qu'un Slack, notamment pour des raisons de tarification 💸.
Et c'est là que tu vois le loup arriver ! Discord c'est bien, c'est pratique mais c'est pas aussi bien interconnecté qu'un slack ![](/assets/images/emote/SAD.png){: .emote} notamment quand il s'agit d'envoyer des notifications Datadog sur Discord
(c'est le sujet de l'article ![](/assets/images/emote/RS.png){: .emote}, ça va j'accouche ! Pas besoin de t'énerver ! ![](/assets/images/emote/OOPS.png){: .emote}) 

Voyons-donc comment envoyer les alertes de nos moniteurs Datadog, directement dans Discord !

![](https://media1.tenor.com/images/b13a03a18eb819855cd99f22e2cf4433/tenor.gif?itemid=16135073){: .center-image}

**Spoiler** : Si tu connais déjà les webhooks, que t'es une diva du dév' ou tout autre Apollon de la tech, tu peux directement voir la solution [au dernier chapitre](#format-du-webhook)

{% include pub.html %}
# Les webhooks
Si tu es développeur, tu as forcément entendu parler des webhooks. 
Un webhook c'est un système qui permet d'envoyer (ou recevoir) des évènements à/depuis une application tierce, en général au travers d'un appel HTTP.
L'idée derrière le webhook c'est de pouvoir avertir facilement un service tier d'un nouvel évènement sans avoir à se soucier de la pile technique distante.
En gros, le webhook va effectuer un call HTTP avec le contenu de la notification dans le corps de la requête HTTP.

Dans notre cas, Datadog doit notifier Discord d'une nouvelle alerte.
Ca se présente ainsi :
![](/assets/images/comment-envoyer-alertes-datadog-discord/explication.jpg){: .center-image}

Pour se faire, il va nous falloir : 
* Un webhook Datadog qui envoie la notification
* Un webhook Discord qui reçoit la notification

## Créer le webhook coté Discord
Pour créer un webhook sur discord, il faut :
* Se rendre sur les paramètres d'un salon textuel
* Puis aller dans Intégrations > Webhooks > Nouveau Webhook
* Copier l'URL du webhook
![](/assets/images/comment-envoyer-alertes-datadog-discord/webhook-discord.png){: .center-image}

En créant ce webhook, Discord nous donne la possibilité de poster des messages dans notre salon **#test** en appelant l'URL du webhook.

## Créer le webhook Datadog
Maintenant que notre webhook Discord est opérationnel, occupons-nous de créer le webhook coté Datadog.
* Rendez-vous sur la page [d'intégration des webhook](https://app.datadoghq.com/account/settings#integrations/webhooks)
* Créer un webhook
![](/assets/images/comment-envoyer-alertes-datadog-discord/webhook-datadog.png){: .center-image}

Le champ **Payload** est ce qui sera envoyé à chaque fois qu'une nouvelle alerte sera déclenchée.
Comme je l'expliquais plus haut, l'intérêt du webhook est de faire en sorte de pouvoir communiquer facilement de service-à-service mais en aucun cas avec un format d'échange unique !
Chaque site/service à sa logique donc les payloads diffèrent en fonction du service qu'on souhaite atteindre.

> Mé komen kon fé pou ke Discord komprene Datadog ?

![](/assets/images/comment-envoyer-alertes-datadog-discord/rtfm.gif){: .center-image}
{% include pub.html %}
## Format du webhook
En temps normal quand un service intègre des webhooks, il est souvent proposé de choisir le service distant afin d'auto-formater le payload en conséquence (ou de mieux interpréter le payload qui sera reçu).
C'est par exemple le cas avec Discord qui intègre très bien les notifications Github, comment ? Tout simplement en ajoutant `/github` à la fin de l'URL du webhook discord.
Ca marche aussi pour Slack en ajoutant `/slack`.
Malheureusement Discord n'intègre pas ce type de "tips" pour Datadog. 
Il faut donc formater notre payload Datadog pour qu'il soit conforme aux spécifications Discord et avec les bonnes valeurs.

Deux références sont nécessaires : 
* [Les valeurs disponibles pour les webhooks Datadog](https://docs.datadoghq.com/fr/integrations/webhooks/)
* [Les spécifications Discord pour l'envoi de webhook](https://discord.com/developers/docs/resources/webhook#execute-webhook)

Avec ces informations on peut désormais ajouter un payload qui ressemble à quelque chose du style : 
```json
{
  "username": "Datadog",
  "avatar_url": "https://i.postimg.cc/q7gJ7MKm/datadog.png",
  "embeds": [
    {
      "author": {
        "name": "$ALERT_TITLE"
      },
      "title": "$EVENT_TITLE",
      "url": "$LINK",
      "description": "$EVENT_MSG",
      "color": 14036294
    }
  ]
}
```
Vous pouvez paramétrer votre payload en fonction du style de rendu que vous voulez, par exemple ajouter des catégories dans l'embed, n'envoyer que le texte de l'alerte, ou que le lien etc

Valider votre webhook Datadog avec le payload modifié, puis rendez-vous sur votre Monitor et ajouter `@webhook-<nom du webhook>` dans "Notify your team" ou dans "Say what's happening", that's it !

<center>Aperçu d'un test de notification</center>
![](/assets/images/comment-envoyer-alertes-datadog-discord/notification-discord.jpg){: .center-image}

J'espère que ce petit tips vous aura aidé ![](/assets/images/emote/KJ.png){: .emote} ![](/assets/images/emote/BEER.png){: .emote}
{% include pub.html %}
