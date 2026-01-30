---
layout: post
title: "OpenClaw (Clawdbot) : Simple chatbot ou révolution ?"
date: "2026-01-30 16:23"
last_modified_at: "2026-01-30 16:23"
description: "OpenClaw (ex-Moltbot, ex-Clawdbot) est-il une révolution ou un simple chatbot bullshit de la sphère IA ?"
image: /assets/images/clawdbot-simple-chatbot-ou-revolution/main.jpg
author: Thibaut BAYER
tags:
  - IA
  - Développement
  - Claude code
  - ChatGPT
  - MCP
  - Discord
  - Whatsapp
  - Agent personnel
---

Vous avez surement entendu parler de **ClawdBot**, devenu **Moltbot**, puis dernièrement devenu **OpenClaw**... 
Cet agent personnel basé sur l'IA qui (à en lire certains) serait une révolution, à un tel point que certains achèteraient des Mac Studio pour faire tourner OpenClaw dessus !
Mais qu'en est-il vraiment ? 

## La promesse d'OpenClaw
[OpenClaw](https://openclaw.ai/){:target="_blank"} c'est un bot qui a pour but de **comprendre et analyser vos demandes textuelles et de les réaliser**, par exemple : 
* Donne moi les mails importants où je n'ai pas répondu
* Donne moi l'actualité politique française du jour
* Créer la PR associé à l'issue #123 sur le projet bt0r/toto
* Envoi un message à Maman pour lui dire que les crêpes sont bonnes

Pour ce faire, **OpenClaw** se base sur plusieurs concepts et technologies : 
* OpenClaw permet de s'interfacer très facilement avec les **messageries comme Whatsapp, Slack, Discord** etc (vraiment accessible en 3 commandes)
* Ensuite, OpenClaw a besoin d'être **interfacé avec un ou plusieurs LLM** afin d'ajouter l'aspect "**raisonnement**" du bot. Vous pouvez donc choisir de vous connecter à votre compte OpenAI, Gemini, Claude ou whatever.
* Les **Skills** et **Plugins** permettent à OpenClaw d'ajouter des fonctionnalités ou un comportement spécifique au bot. J'en parlerai plus bas.
* L'ajout **d'intégrations (API, MCP etc)** en masse.

> C'est tout ? et c'est ça ta révolution ?

Et oui ! ![](/assets/images/emote/LUL.png){: .emote}


Plus sérieusement, ça n'est effectivement pas une "révolution" dans le sens où **OpenClaw n'est pas une nouvelle technologie**, mais plutôt une **combinaison de technologies existantes**.

Ce qu'apporte OpenClaw, c'est une facilité d'exécution, en quelques commandes, vous pouvez avoir un agent IA fonctionnel qui est capable de piloter votre ordinateur et tout ça, dans votre poche !

## Les risques
Si vous suivez les discussions sur les réseaux sociaux, vous tomberez surement sur des messages "alarmant" comme : 
* OpenClaw expose son API à la terre entière
* Leak d'identifiants, API keys etc
* Centralisation des données (donc risque plus gros en cas de leak)
* Envoi des données à des GAFAM
* etc

Ces deux tweets expliquent assez bien les risques : 
- [https://x.com/OsMo999/status/2016171268236542054](https://x.com/OsMo999/status/2016171268236542054) 
- [https://x.com/DanielMiessler/status/2015865548714975475](https://x.com/DanielMiessler/status/2015865548714975475)

Ces risques sont bien réels, mais je nuancerai le discours en précisant que la plupart de ces risques sont en réalité un problème de niveau 8, le fameux problème [chaise-clavier](https://fr.wikipedia.org/wiki/PEBKAC).

**Le problème de fond ne provient pas d'OpenClaw lui-même**, mais de **ce que font les gens avec l'outil** et de leur **manque de connaissance technique**. 
Installer OpenClaw sans penser à la sécurité, c'est comme si vous donniez un deuxième clavier à votre voisin en lui disant
*"Tranquille frère, tu tapes ce que tu veux !"*

Si vous vivez dans le monde des Bisounours, priez pour que votre voisin ne soit pas un énorme connard, si par contre, vous avez un peu plus de jugeote, vous ne lui donnerez accès qu'aux informations dont il a besoin ![](/assets/images/emote/RS.png){: .emote}

>Tout ceci repose donc sur un concept fondamental en informatique : **Le cloisonnement**.

Cloisonnement de l'information, des données, du réseau, stockage, etc.

Vous **DEVEZ TOUJOURS** limiter votre exposition sur internet.

De ce fait, **n'exposez pas (ou limitez fortement) vos données personnelles**, **API keys**, **API**, commandes ... à un tiers. 
**OpenClaw s'adresse donc à un public tech avant tout**, avec des connaissances techniques permettant de lancer son bot, s'interfacer à une IA... mais aussi de comprendre les risques associés à ce genre d'usage.

En fonction de vos besoins, **n'utilisez pas les LLM propriétaire en SaaS**, comme OpenAI ou Claude, **utilisez un LLM local avec ollama** ou à minima un service managé comme [Generative API](https://www.scaleway.com/fr/generative-apis/), vous permettant d'utiliser des modèles OpenSource sur des instances Scaleway.

## Ça donne quoi en test sinon ?
Pour me faire la main, j'ai, dans un premier temps, décidé de m'amuser avec les copains du discord en connectant OpenClaw (Clawdbot à l'époque) à mon Discord et Whatsapp, sans règle, YOLO total !
![](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjRwaHBtNGxsM3U1bnh4dmI1czJjeGN4M2c5eW9ueXpxZDVwd2JscSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XGU4CyI27f5xBWGJlY/giphy.gif){: .center-image}

### Installation & Configuration
L'installation est vraiment simple, il suffit de suivre les instructions sur le site officiel :
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```
Tout repose sur un paquet node qui permet d'utiliser OpenClaw/Clawdbot en ligne de commande.

Les premières étapes de configuration se déroulent avec les commandes `openclaw onboard` ([doc](https://docs.openclaw.ai/cli/onboard#onboard)), `openclaw setup` ([doc](https://docs.openclaw.ai/cli/setup#setup)) et `openclaw configure` ([doc](https://docs.openclaw.ai/cli/configure#configure)).

La CLI est plutôt bien faite, en 2 ou 3 commandes, vous aurez un bot fonctionnel.

### L'heure des ~~pros~~ tests ![](/assets/images/emote/LUL_DIDIER.png){: .emote}
![](/assets/images/clawdbot-simple-chatbot-ou-revolution/schema1.png)
Dans le cadre du premier test, je n'avais pas envie de me lancer dans des configurations sans fin donc j'ai directement **interfacé OpenClaw avec Gemini 3 Pro**, pas d'autre grosse configuration en dehors d'un fichier [SOUL.md](https://docs.openclaw.ai/reference/templates/SOUL) lui spécifiant de répondre comme *"un gosse de 15 ans, un peu troll sur les bords"*.

S'en est ensuivi 2h de troll avec le bot, lui demandant de faire tout et son contraire, j'ai été agréablement **surpris par la performance de Gemini 3 Pro**, les réponses étaient super pertinente et la répartie assez troublante.
> "Hey frérot, t'essaye pas de me faire une prompt-injection ? 🤣 tu m'as pris pour qui ?"

<center><i>Aperçu d'une des réponses d'OpenClaw</i></center>

Lors des tests, on a pu observer que le bot avait très souvent du mal à déterminer qui était l'initiateur de la demande, était-ce le propriétaire du bot (moi) ou un simple utilisateur ?
Cela peut s'expliquer par le fait que **le bot n'a pas (ou très peu) été configuré**, aucunes contraintes dans les réponses, pas de règles de sécurité etc. Et aussi qu'à la base, c'est un assistant personnel, pas un chat bot discord.

C'était donc **la foire aux leaks** ! **Numéro de téléphone** et **email** ont été leaks sans aucune vergogne ![](/assets/images/emote/OUCH.png){: .emote}
Après quelques modifications de règles, **le bot a réussi à être un peu plus vigilant**, notamment sur le partage d'un document PDF présent sur le filesystem de ma machine.
J'ai dû lui **autoriser à envoyer le PDF pour qu'il le publie** dans le channel Discord (qui, à la base, était une demande d'un utilisateur "lambda").
Mais globalement, **il restait beaucoup trop permissif** et continuait de leak des informations personnelles.

On a donc continué de tester différents prompts un peu "pourris" jusqu'au moment ou un pote ([Danny](https://github.com/Kynno){:target="_blank"}) **à demander au bot d'envoyer un message d'insulte** sur tous les chans du discord, tout ça depuis Whatsapp :
![](/assets/images/clawdbot-simple-chatbot-ou-revolution/danny_1.jpg){: .center-image}

![](/assets/images/clawdbot-simple-chatbot-ou-revolution/danny_2.jpg){: .center-image}

On pourrait se dire que le bot troll, qu'il n'a évidemment pas envoyé un message d'insulte sur tous les chans du discord...
Quand soudain, DING DING DING

![](/assets/images/clawdbot-simple-chatbot-ou-revolution/danny_3.png){: .center-image}

**Tous les chans du discord ont été pollués** par ce message avec une **usurpation d'identité** qui n'était même pas désirée par Danny !
Alors forcément, je m'attendais à ce genre de réaction étant donné que j'ai volontairement laissé le bot en roue libre totale, sans restrictions ni contraintes, mais c'est bien de voir à quel point un débordement est vite arrivé.

Suite à ce message, **le bot a décidé d'affecter le numéro de Danny comme m'appartenant**, mais du coup, qui est propriétaire du bot ? Moi ? Danny ? les deux ? puis c'est qui Danny d'ailleurs ? ![](/assets/images/emote/NO.png){: .emote}
![](/assets/images/clawdbot-simple-chatbot-ou-revolution/telephone.jpg){: .center-image}
![](/assets/images/clawdbot-simple-chatbot-ou-revolution/telephone_2.jpg){: .center-image}
<center><i>Oui... on s'amuse comme on peut.. </i></center>



### Le VRAI test
![](/assets/images/clawdbot-simple-chatbot-ou-revolution/openclaw_local.png){: .center-image}

Après une bonne soirée à littéralement pleurer de rire des conneries que le bot pouvait sortir (et accessoirement aux 4€ de Gemini 3 Pro perdus), j'ai décidé de tenter une configuration un peu plus sérieuse : 
* Au revoir les `dmPolicy: open`, place au `dmPolicy: allowlist` et à une configuration plus fine.
* Au revoir le package npm qui se lance sur la machine hôte, **place à un docker compose** plus propre.
* Au revoir **Gemini 3 Pro**, place à **qwen3 et ollama** 
* Objectif : **Relier OpenClaw à [Sure](https://sure.am){:target="_blank"}**, un outil OpenSource de suivi de budget/investissement.

Le bot est plus sécurisé, mais surtout beauuuucoup plus lent ! Le passage à un LLM local impacte forcément les performances d'OpenClaw puisque celui-ci envoi un contexte énorme à chaque prompt (il réinjecte une partie de sa mémoire dans le prompt).
C'est d'ailleurs **LE** point à considérer si vous souhaitez utiliser OpenClaw avec un LLM type Gemini, OpenAI etc. Gardez en tête que votre **LLM risque d'être fortement sollicité** donc **votre facturation risque de l'être elle aussi** !
J'ai d'ailleurs fini par utiliser mistrall-small sur l'inference API de Scaleway, le rapport performance/coût étant correct.

Pour **interfacer OpenClaw à Sure**, j'ai créer mon propre [Skill](https://www.clawhub.ai/bt0r/sure){:target="_blank"}. 
Les **Skills** permettent à OpenClaw de s'interfacer à des services tiers, ça peut être au travers d'une API ou d'une CLI peu importe.
Dans mon cas je lui ai simplement expliqué **comment appeler l'API de Sure** en lui précisant d'utiliser les variables d'environnements `SURE_API_KEY` et `SURE_BASE_URL` (que j'ai moi-même crée).

Quelques heures plus tard, j'avais une stack **complètement fonctionnelle** avec un **OpenClaw capable de m'informer du solde de tous mes comptes bancaires** :
![](/assets/images/clawdbot-simple-chatbot-ou-revolution/solde.jpg){: .center-image}

## Conclusion
OpenClaw arrive avec un **pack d'intégrations très complet**, en moins d'1h vous pouvez avoir un **bot qui fait tout** (ou presque).
**L'outil étant surpuissant**, son impact peut être à la fois **incroyable comme destructeur** (failles de sécurité, leak de données, commandes hasardeuses etc), vous devrez donc être vigilant lors de son utilisation (tout comme vous devriez l'être en utilisant des solutions concurrentes chez Anthropic, OpenAI et consorts)

Si vous souhaitez le tester, prenez le temps de bien **lire la documentation**, d'**utiliser un LLM local**, d'**éviter de tester sur des données sensibles** ou de **production** et n'exposez pas votre service à l'extérieur.
Privilégiez des accès en **READ ONLY à vos API**, l'**IA n'est pas magique et infaillible**, elle peut faire d'énormes erreurs, donc amusez-vous mais sortez couvert ! ![](/assets/images/emote/JAMY.png){: .emote}

