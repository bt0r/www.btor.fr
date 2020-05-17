---
layout: post
title: "React Native: Retour d'expérience"
date: 2020-05-15
description: 
image: /assets/images/react-native-retour-experience/main.png
author: Thibaut BAYER
tags: 
  - React
  - React native
  - Javascript
  - Développement
  - Mobile
---
Vous vous demandez surement pourquoi un développeur back-end parlerait d'une techno front-end ? @@LUL 

Tout simplement parce que nous aussi "les backs" on a le droit de s'amuser avec ~~vos technos de merde~~, euh javascript.
C'est bon je rigole @@SAD

Depuis un peu plus d'un an je travaille dans une équipe mobile qui se compose de :
- Deux développeurs iOS natif (Swift)
- Deux développeurs Android natif (Kotlin)
- Un développeur front-end (Javascript/Typescript React)
- Et un développeur back-end (PHP Symfony, mon binôme)

J'ai la chance d'avoir une équipe assez hétérogène qui touche un peu à tout, design, infrastructure (K8S, docker), GO, Flutter...
Tout le monde étend ses connaissances et le partage à l'équipe.

A force de discuter des projets des uns et des autres (majoritairement axés sur du mobile, ça va de soit), je me suis dis qu'il serait temps que je me mette un peu à jour et que moi aussi je retente "l'expérience mobile".
Je dis "Retente" parce que oui, j'ai déjà réalisé une ou deux applications mobiles Android il y a quelques années mais n'en parlons pas ... @@LUL
# Mais pourquoi ReactNative ?
La question qui vient *normalement* tout de suite à l'esprit c'est : **MAIS POURQUOI REACT NATIVE ?** @@NO

Dans un premier temps il est important de comprendre le besoin avant de choisir la techno que l'on utilisera (n'en déplaise aux haters de PHP @@WINK )

Le besoin est simple, je cherche à développer une application mobile de rencontre @@RS.
Les critères pour développer cette application sont :
- Une application cross-platform iOS / Android
- Un temps de développement réduit (c'est un side-project ne l'oublions pas, je ne vais pas passer toutes mes journées dessus)
- Un faible coût de mise en place/maintenance (je pars avec un budget de 0€ donc aucun service SaaS payant et aucun prestataire n'est envisageable).

En prenant en compte ces critères, on peut commencer par lister quelques langages qui pourraient correspondre au besoin :
- Tous les langages natifs : iOS/Swift, Android/Kotlin, WindowsPhone/C# @@LUL
- Tous les langages web portés sur mobile (Ionic, NativeScript, PhoneGap, React Native)
- Flutter
- Et sûrement d'autres que je ne connais pas.

Première grosse différence, le **natif** et le reste. Développer en natif permet d'être au plus proche du système que l'on vise, on s'assure d'avoir de meilleurs performances ainsi qu'un design system cohérent.
À côté de ça, le natif implique d'apprendre un nouveau langage pour chaque plateforme ciblée. Si je désire une application cross-platform iOS/Android je devrais apprendre Swift ET Kotlin.
Ce qui rompt un des besoins : `coût réduit en développement`.
Développer une application native me prendrait trop de temps d'apprentissage (apprendre les langages, comprendre les stacks, tools chains etc) en plus de devoir développer deux applications vu que le code ne peut pas être partagé.

Il reste donc Flutter et les langages web "portés" sur mobile.
Flutter c'est quoi ? [Flutter](https://flutter.dev/) c'est un framework mobile pour développer des applications cross platform en utilisant le langage [Dart](https://dart.dev/).
C'est développé par Google, c'est beau et ça marche bien.
Problème, je ne connais pas Dart.
En soit ce n'est pas *vraiment* un problème vu que je pourrais utiliser le même langage pour les deux plateformes iOS/Android mais ca m'ajoute une contrainte comparée aux autres solutions encore disponibles.
J'évince donc Flutter.

#### Qu'apporte donc les langages web "portés" sur mobile ?
- Contrairement aux langages natifs, on utilise qu'un seul langage (souvent javascript) pour réaliser une seule et même application iOS/Android.
- Pour un développeur web (back ou front), le gap d'apprentissage est plus court vu qu'on ne se concentre pas sur le langage (qu'on connait déjà plus ou moins bien).

#### Lequel choisir entre Ionic, PhoneGap, NativeScript et ReactNative ?
Mon choix s'est porté sur ReactNative pour plusieurs raisons :
- L'envie d'utiliser React.
- ReactNative a une grosse communauté.
- NativeScript semble beaucoup trop récent pour le moment (mais prometteur).
- ReactNative est très prisé sur le marché du développement (React aussi, ça tombe bien).
- J'exclus PhoneGap et Ionic pour [leurs différences d'implémentations](https://blog.logrocket.com/react-native-vs-ionic/) face à ReactNative et NativeScript.

# C'est quoi ReactNative ?
ReactNative est un framework de développement mobile qui se base sur [React](https://fr.reactjs.org/) (bibliothèque web Javascript), l'idée c'est d'avoir la même API que React mais pour des composants mobiles.

Les composants ReactNative sont transformés en composant natif de la plateforme mobile cible.
Par exemple, un composant ReactNative [Text](https://reactnative.dev/docs/text) sera transformé en composant [TextView](https://developer.android.com/reference/kotlin/android/widget/TextView) sur Android :

ReactNative
```html
<Text>Coucou</Text>
```
donnera sur Android
```xml
<TextView
 android:id="@+id/text_view_id"
 android:text="Coucou" />

```
> ReactNative propose aussi une API pour les composants qui ne sont disponibles que sur une seule plateforme, c'est le cas pour [ToastAndroid](https://reactnative.dev/docs/toastandroid#__docusaurus) ou les [SettingsIOS](https://reactnative.dev/docs/settings)

[Plus d'infos sur le fonctionnement même de ReactNative ici](https://www.reactnative.guide/3-react-native-internals/3.1-react-native-internals.html)

# La stack
Pour commencer un projet ReactNative vous avez le choix entre ReactNative CLI et Expo. 
[Expo](https://expo.io/) est un kit d'outils pour développer des applications ReactNative plus rapidement, il propose des fonctionnalités en plus de ReactNative.

ReactNative CLI est tout simplement... ReactNative...@@RS

## Expo, expo, on rentre du boulot...
J'ai commencé le développement de l'application en utilisant Expo, l'objectif de celui-ci étant de me simplifier la vie, j'avais tout intérêt à l'utiliser.

Expo s'impose grâce à deux grosses fonctionnalités :
* Vous ne gérez plus vos builds, c'est Expo qui s'en charge ! Pas besoin d'xCode ou d'Android studio.
* Vous disposez d'une plus large API contrairement à ReactNative CLI.

Avec Expo, on ne crée pas les builds en local, on demande à Expo de construire notre application pour nous et ça marche de la même façon pour créer les builds de production.
Malgré la promesse d'Expo, le début a été un peu chaotique pour moi, je trouvais les builds lents et surtout je suis dépendant d'un logiciel tiers pour pouvoir construire et déployer mon application.
La documentation est assez claire avec ça d'ailleurs :
> When one of our building machines will be free, it'll start building your app

Un autre point frustrant avec Expo est qu'on ne peut pas utiliser de modules natif autre que ceux déjà proposés par Expo.
Par exemple, si vous désirez utiliser le bluetooth, vous ne pourrez pas @@SAD !
Vous devrez vous *éjecter* d'Expo ([en savoir plus sur le procédé d'éjection](https://docs.expo.io/expokit/eject/)) et donc perdre le principal intérêt d'Expo.

Expo parle d'ailleurs assez bien de ses limitations dans sa documentation, je vous invite à y jeter un oeil [ici](https://docs.expo.io/introduction/why-not-expo/).

J'ai donc rapidement pris la décision de ne pas utiliser Expo et de m'orienter vers une stack "classique" ReactNative CLI, ce qui allait forcément venir avec son lot d'avantages mais aussi d'inconvénients... nous y reviendrons plus tard.
# (?:Type|Java)script ?
Une autre question à se poser en utilisant ReactNative est sur le choix du langage. Javascript ou Typescript ?

J'ai déjà eu l'occasion d'utiliser Typescript pour [un projet perso](https://github.com/bt0r/shellbot) et cette fois-ci j'ai choisi de ne pas l'utiliser @@WUT.
La raison va paraitre surement farfelue mais étant donné que je me lance dans un nouveau projet, il va y avoir beaucoup de nouvelles notions à apprendre et je ne veux pas m'imposer une complexité en plus.
Si l'envie me vient de passer l'application sur Typescript je pourrais toujours y venir plus tard, ça sera du boulot en plus mais c'est un "contrat" que je passe au début du projet.

# Bien débuter avec ReactNative
Ne connaissant pas du tout React (et donc ReactNative par la même occasion), j'avais un peu peur de mettre 6 mois à apprendre un nouveau framework sans rien produire de concret.
Fort heureusement, ReactNative est très accessible.
La logique globale autour des **Composants** est très vite acquise et on arrive vite à créer nos premiers écrans @@SLT.

[La documentation](https://reactnative.dev/docs/getting-started) est assez bien écrite, on trouve rapidement des bibliothèques qui répondent à nos besoins en fouillant sur google/github/npm...
Oui mais voilà, tout n'est pas rose @@JEANNE

Parfois j'ai pu ressentir quelques frustrations, que ce soit par rapport à ReactNative ou par rapport à mes choix personnels.
Je vais vous faire un petit récapitulatif de ce que j'ai retenu en 4 mois de développement sur ReactNative.

# Les moins
#### La stack sans Expo
Bien que ce soit un choix de ne pas l'utiliser, Expo simplifie vraiment la vie pour la création des builds ou le déploiement.
Ne pas avoir Expo ca veut dire devoir configurer Android Studio et xCode. Comprendre pourquoi votre projet ne build pas sur xCode et surtout...**COMPRENDRE** xCode @@JEANNE.
Avec Android studio je n'ai pas eu de problème vu que la base de l'IDE (IntelliJ) est la même pour tous les langages (PHP, JS, C++, Ruby ...) et que globalement il n'y a pas grand-chose à faire, ça marche du premier coup.
Par contre sur xCode j'ai vraiment du mal.
Les différences entre projet et workspace, l'interface pas vraiment intuitive, je ne m'attendais pas à ça et malheureusement, il m'est impossible de passer outre @@SAD

Une fois le projet bien paramétré avec vos premiers builds de lancés, vous rencontrerez un autre problème : **L'ajout de bibliothèques**.
Étant livré à vous-même sans Expo, vous devrez installer vous-même les bibliothèques, ça veut dire devoir modifier des fichiers natifs dont vous n'avez aucune idée de comment ils fonctionnent et c'est parfois pénible.

[React Native Firebase](https://rnfirebase.io/) fait partie des bibliothèques qui m'ont bien fait dresser les poils lors de la phase d'installation.

#### Redux
Pour ceux qui ne sont pas familier avec l'univers React, Redux est une bibliothèque fortement utilisée qui permet de gérer les états (les states) de notre application.
Redux est populaire en partie à cause des "limitations" de React.
En effet, les **props** (propriétés de notre composant React) ne sont disponibles qu'en lecture, les **states** eux, ne sont accessibles qu'au sein même du composant.
Vous voyez le problème ? Si j'ai un composant qui doit partager son état à un autre composant, comment fais-je ? 

**REDUX** bien sûr !

Suite à cette problématique j'aurais dû naturellement me diriger vers Redux mais finalement j'ai décidé de ne pas l'utiliser.
Grâce au [Context](https://fr.reactjs.org/docs/context.html) React, j'ai pu éviter d'utiliser Redux afin d'obtenir un état "global" à mon application.
Ca fonctionne très bien mais je n'arrive pas à être entièrement satisfait de l'implémentation.
Je me retrouve avec un composant "global" qui contient les différents états que je partage aux composants enfants (principalement l'utilisateur actuellement connecté) et je pense qu'il y a mieux à faire.
Je n'ai pas encore eu le temps de vraiment tester une implémentation concrète avec Redux mais j'aime bien le cadre qu'il impose avec les actions/reducers/store.
C'est dans ma todo-list de chose à tester et pourquoi pas à implémenter dans le projet.

#### Architecture du projet
À titre personnel, j'aime être "guidé" quand je commence un nouveau projet sur une stack que je ne connais pas.
ReactNative n'arrive pas avec un cadre de développement mais juste avec une API et des commandes système pour créer/construire son projet.
On se retrouve avec juste un répertoire *src* à remplir sans aucunes lignes directrices, c'est dommage.

#### La documentation officielle et ses redirections
J'en ai parlé dans un de mes tweet [ici](https://twitter.com/biiitor/status/1252688090503819264) mais s’il y a bien un truc qui me rend dingue c'est qu'une bonne partie de l'API n'est plus supporté par facebook directement mais par la communauté.
Jusque-là pourquoi pas, ça prouve que la communauté est active.
Le souci vient du fait qu'on se retrouve souvent à devoir naviguer entre les différentes documentations, officielles ou communautaires et à être constamment redirigé. Pénible x2 @@TUBAIZ

#### Functional VS Class component
En React il est possible d'écrire ses composants de deux manières :
* En fonction
```jsx
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
```
* En classe
```jsx
class Welcome extends React.Component {
    render() {
       return <h1>Hello, {this.props.name}</h1>;
    }
}
```
Historiquement les composants sous forme de fonction n'avaient pas accès au [cycle de vie du composant](https://fr.reactjs.org/docs/state-and-lifecycle.html).
Ce qui veut dire que dès qu'on voulait utiliser des méthodes du cycle de vie comme **componentDidMount**, on devait obligatoirement passer par des classes.
Mais depuis l'arrivée des [Hooks](https://fr.reactjs.org/docs/hooks-intro.html) avec React 16.8 ce n'est plus vrai, on peut désormais utiliser [useState](https://fr.reactjs.org/docs/hooks-state.html) et [useEffect](https://fr.reactjs.org/docs/hooks-effect.html) au sein d'un composant fonctionnel.
Personnellement je trouve les classes plus digestes que les fonctions avec hooks mais c'est dû au fait que j'ai plus souvent travaillé avec des langages fortement typés et parce que je n'aime pas la *magie* qu'offre les hooks.
React semble mettre en avant les fonctions avec hooks, ce qui me fait réfléchir quant à l'utilisation des classes au sein de mon projet.

#### Les animations
Bien qu'une bonne partie des feuilles de style CSS soit portées sous ReactNative, il n'y a pas tout !
Les animations en font parties.
ReactNative propose une [API animation](https://reactnative.dev/docs/animations) assez complète mais un peu dure à prendre en main quand on cherche à faire des animations un peu complexe.
J'ai tout de même réussi à réaliser deux ou trois petites animations (bounce, rotation, etc) mais ça risque de prendre un peu de temps avant de bien maitriser l'API.

# Les plus
#### La stack sans Expo (bis)
Ce choix a été difficile au départ mais je ne regrette pas, certes il est plus difficile de devoir tout configurer soit-même en mettant les mains dans xCode mais le fait de ne pas dépendre d'Expo me permet de pouvoir créer mes builds quand je le souhaite sans attendre qu'Expo s'en charge.
Je peux aussi ajouter les modules que je désire sans me soucier de savoir si ce que je veux faire est supporté par Expo ou non et ça, c'est quand même très plaisant.

#### Le hot reload
Rien d'extra-ordinaire de ce côté là (disponible dans pratiquement toutes les technos modernes) mais c'est toujours bien de le noter.
C'est une fonctionnalité qu'on apprécie vraiment quand on fait du front : Le **hot-reload** ou "rechargement à chaud" pour les puristes.
La modification de notre code source modifie directement notre application sur le téléphone.
Pas besoin de recréer un build ou de recharger l'application.
Très pratique quand on travaille sur les vues de notre application @@SLT.

#### CSS
Un des gros avantages de ReactNative est le fait qu'une bonne partie des feuilles de style CSS soient disponibles.
On peut donc profiter des flexbox pour gérer le positionnement de nos blocs et ça c'est **VRAIMENT** cool @@BEER !
Pas de GridBagLayout, ConstraintLayout, etc @@SLT
L'écriture du CSS passe par une abstraction sous forme d'objet Javascript mais correspond globalement à du CSS en camelCase.

![](/assets/images/react-native-retour-experience/css-react-native.png){: .center-image}

#### Rendu iOS/Android identique
Ca peut paraitre bête comme argument mais c'est pourtant décisif quand on utilise un framework comme ReactNative.
Après avoir travaillé intégralement sur un émulateur Android, j'ai voulu exécuter mon application sur iOS pour vérifier si le rendu/comportement était différent sur iOS.
J'ai été agréablement surpris de voir qu'il n'y avait pas tellement de différences, en dehors de quelques petits bogues sur des ombres en utilisant les [shadow props](https://reactnative.dev/docs/shadow-props), le rendu est identique sur les deux plateformes.
Il faut néanmoins comprendre comment fonctionnent les plateformes de destination et notamment iOS avec l'arrivée du ~~motch~~ notch @@LUL
Vous devrez forcément utiliser les [SafeAreaView](https://reactnative.dev/docs/safeareaview) afin que votre vue ne se retrouve pas sous le notch (ou alors ajuster celle-ci).

#### Utilisation des bonnes bibliothèques
Bien que Redux manque à la liste, j'ai tout de même réussi à trouver mon bonheur dans plusieurs bibliothèques qui correspondent entièrement à mes besoins :
- [React Navigation](https://reactnavigation.org/) pour gérer la navigation dans l'application.
- [React Native Elements](https://react-native-elements.github.io/react-native-elements) pour la gestion du design system.
- [React Native Firebase](https://rnfirebase.io/) pour l'interaction avec Firestore, Firebase Storage et Firebase Auth.
- [React Native Splash Screen](https://github.com/crazycodeboy/react-native-splash-screen) pour l'intégration d'un splash screen.
- [i18n.js](https://github.com/fnando/i18n-js) pour l'internationalisation.
- [Geolib](https://github.com/manuelbieh/geolib) pour les calculs et conversion de coordonnées GPS.
- [nGeoHash](https://github.com/sunng87/node-geohash) pour la création de hash de coordonnées GPS.

#### Maquettes
Au tout début du projet j'ai commencé par réaliser mes premiers écrans sans aucune maquette.
Ca fonctionnait pas mal sauf que parfois je "bloquais" sur la création de l'interface.
En discutant avec un collègue, je me suis rendu compte que ça serait pas mal de réaliser des maquettes dès le début afin que ca m'aide à la réalisation de l'application.
J'ai commencé à utiliser [Figma](https://www.figma.com) et ça m'a clairement simplifier la vie !
Je vous le recommande vivement si vous cherchez un outil pour créer vos maquettes web ou mobile.

# Conclusion
En conclusion c'est très positif ! ReactNative se veut facile à prendre en main, d'autant plus si vous utiliser Expo.
ReactNative est une solution pérenne pour réaliser vos applications mobiles cross-platform, la communauté est grande et vous trouverez toujours la bibliothèque dont vous avez besoin. 

Si vous hésitez à utiliser ReactNative, posez-vous les mêmes questions que j'ai pu me poser :
- Quelle techno correspond le mieux à mon besoin ?
- Quel langage m'intéresse le plus ou me permettrait d'aller plus vite dans la réalisation de mon application ?
- Est-ce que je disposerai des bonnes bibliothèques ?
- Quel est mon budget et quel est le temps que je veux allouer au développement ?

En fonction des réponses à celles-ci, vous pourrez vous diriger vers du ReactNative, du Flutter ou du natif @@KJ
