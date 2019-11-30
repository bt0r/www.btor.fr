---
layout: post
title: "Comment s'abonner à une chaine twitch sans dépenser 1€ ?"
date: 2018-01-12
description: 
image: /assets/images/bitcoin-twitch/main.png
author: Thibaut BAYER
tags: 
  - Twitch
  - Cryptomonnaie
  - Bon plans
---
Comme vous le savez, je stream de temps en temps sur [twitch.tv](http://twitch.tv/bt0r) , j'y propose majoritairement du développement web ou applicatif (développement d'un bot twitch en Java ou du site btor.fr en Php Symfony 3) mais aussi parfois du jeux-vidéo. A coté de mes streams je regarde beaucoup d'autres lives. Je suis donc d'assez près l'actualité de twitch pour rester informé des mises à jour de l'[API Twitch](https://dev.twitch.tv/) notamment.

**Edit:** [Twitch à récemment arrété d'accepter les paiements par cryptomonnaie, cet article est désormais obsolète.](https://www.clubic.com/twitch/actualite-852874-twitch-accepte-paiements-bitcoin.html)

## 💸 Twitch + Gamer = Sub gratuit
Récemment, twitch a étendu ses modes de paiement pour y intégrer ... Le Bitcoin ! ( voir [ce tweet](https://twitter.com/biiitor/status/951732767775215616) ). L'arrivée du bitcoin en tant que moyen de paiement permet à ceux qui n'ont pas trop d'argent et un pc dit "Gamer" de pouvoir générer du bitcoin et ainsi s'abonner aux chaines qu'ils décident, tout ça, sans rien faire ! ou presque ...
**Vous n'y connaissez rien en cryptomonnaies mais vous avez un ordinateur de gamer et pas un euro en poche ? lisez la suite...**

## ₿ Le bitcoin, c'est quoi ?
Je ne vais pas vous faire une description complète de ce qu'est le bitcoin et l'environnement des cryptomonnaies car c'est long, complexe et j'envisage de faire un article dessus. Par contre, nous allons revoir les bases rapidement.
Le bitcoin est une cryptomonnaie, on peut acheter, vendre, échanger du bitcoin sur internet via des plateformes d'échange ou des "Wallet" (portefeuille) en ligne comme [Coinbase](https://www.coinbase.com/join/5a20090d65d98a026abb3fd2) , [Blockchain.info](https://blockchain.info), [Cryptonator](https://www.cryptonator.com/), [Kraken](https://www.kraken.com/) et bien d'autres.
Il faut assimiler ces portefeuilles à un compte bancaire, ils vont vous permettre de recevoir/envoyer de l'argent à un proche, une société... Et c'est justement là que ça nous intéresse ! Si vous avez bien lu le tweet de twitch,  Twitch annonce gérer les paiements par bitcoin (via bitpay ) mais aussi via **Coinbase**. 

## ⚙️ Comment fonctionne le bitcoin ? 
Le bitcoin est une cryptomonnaie décentralisée qui fonctionne avec le principe de "Blockchain" (une sorte de base de données), il n'y a pas de banque centrale, pas d'organisme ou autre pour gérer les transactions du bitcoin. Ce sont les utilisateurs qui vérifient les transactions, c'est ce qu'on appelle le **mining** (minage en français). N'ayez crainte, il n'y a pas besoin de connaitre tout le principe de blockchain et du mining pour profiter de ce "bon plan", je vais simplifier au maximum.

### ⛏️ Le minage
Comme expliqué au dessus, le mining permet de vérifier les transactions d'une cryptomonnaie (bitcoin, ethereum ou autre) dans le but de les certifier afin qu'elles soient ajoutées à la blockchain. Une fois la transaction vérifiée et certifiée les mineurs (vous, moi,jean-paul, robert ... ) sont rémunérés, en bitcoin ou dans la monnaie qu'ils ont minés. 

Pourquoi sont-ils rémunérés ? Tout simplement parce que pour miner des **crypto**-monnaies  il faut faire des calculs très complexe (hash cryptographique) qui demandent énormément de puissance de calcul, on "transforme" donc la puissance de calcul en cryptomonnaie, comprenez par là que plus vous allez avoir une puissance de calcul élevé, plus vous allez gagner de l'argent (il n'y a rien sans rien). Autrement dis, si vous comptiez miner avec le CPU de votre téléphone portable, vous pouvez d'ores et déjà passer à autre chose.

### ❓ C'est cool mais comment on mine ? j'y connais rien
Très bonne question ! Il suffit d'avoir une feuille et un crayon et de faire vous même les calculs de hash SHA-256 à la main ... **NAN J'DECONNE !**

![](https://media.giphy.com/media/amxLHEPgGDCKs/giphy.gif)

Pour miner il faut posséder un portefeuille de cryptomonnaie, faire parti d'un pool de minage ( j'ai volontairement évité ce sujet pour faire en sorte que ça reste simple à comprendre) et un logiciel de minage qui utilisera votre CPU ou votre(vos) GPU(s).

### ⛓ La complexité
Passons aux choses sérieuses, nous savons maintenant ce qu'est approximativement le bitcoin, nous savons que pour gagner des bitcoin il faut miner ! Oui mais voilà ... il y a un autre problème : **La complexité** 

Comme annoncé, le bitcoin est basé sur le principe de blockchain, c'est une sorte de base de données qui contient l'historique de toutes les transactions vérifiées du bitcoin. Plus il y a de transaction, plus la blockchain est grosse, plus c'est long à calculer ! 
Aujourd'hui, il n'est plus possible de miner du bitcoin avec un simple ordinateur car la puissance de calcul nécessaire est beaucoup trop élevé. Mais alors, comment faire ? Comment récupérer du bitcoin sans miner du bitcoin !? 
Certains logiciels de minage vous permettent de miner et d'être rémunéré avec du bitcoin, peu importe la monnaie que vous minez ! C'est le cas de [NiceHash](https://www.nicehash.com) 

## 🛠️ La pratique
A ce stade de l'article, vous devriez comprendre ce que nous allons faire pour s'abonner à nos streamers préférés sans dépenser 1€.
Nous allons utiliser notre ordinateur pour miner différentes monnaies et avoir en retour du bitcoin dans notre portefeuille de cryptomonnaie, bitcoin que nous réutiliserons pour nous abonnés à des chaines twitch.

### 👤 Création du compte Coinbase
Avant de miner, il est important d'avoir un compte Coinbase ([Créer un compte](https://www.coinbase.com/join/5a20090d65d98a026abb3fd2)). Nous pourrions utiliser la méthode de paiement "BitPay" sur twitch mais le soucis c'est que les frais de transactions bitcoin sont très élevés (vous allez payer plus cher de frais que d'abonnement twitch).

Coinbase permet d'avoir un compte "non vérifié" c'est à dire que vous pourrez recevoir de l'argent ou payer via votre portefeuille **sans déclarer votre identité réelle** (carte bancaire, passport, permis de conduire etc..) , dans le cas ou vous voudriez récupérer votre argent sur votre compte bancaire, il faudra forcément passer par l'étape de vérification de votre compte.

### 👤 Création du compte NiceHash
NiceHash est une société qui propose divers services autour du mining (wallet, achat de puissance de calcul, logiciel de mining). C'est bien évidemment le logiciel de mining open source ([Github](https://github.com/nicehash))  qui nous intéresse.
Le logiciel de mining de NiceHash est plutôt bien fait, il permet d'optimiser nos gains en minant les cryptomonnaies les plus rentables avec le matériel dont on dispose.
A titre d'exemple, avec ma Nvidia GeForce 970 GTX, NiceHash va majoritairement miner de l'equihash, ce qui sera différent sur un ordinateur qui possède une 1080 ou une RX580 etc.. étant donné que sa puissance de calcul sera supérieure.

Commencer par [créer votre compte nicehash](https://www.nicehash.com/register).

Une fois le compte NiceHash crée, vous devrez avoir accès à votre porte feuille, profitez en pour récupérer l'adresse de votre portefeuille disponible ici :

![Photos portefeuille](https://btor.fr/img/upload/bitcoin-twitch/wallet.png)  

Copier cette adresse dans votre presse-papier ou gardez là de coté, elle vous servira pour la prochaine étape.

 [? Télécharger](https://miner.nicehash.com/) le logiciel de mining sur le site officiel de nicehash , faites bien attention à prendre la version correspondant à votre carte graphique Nvidia ou AMD.

![NiceHash application](https://btor.fr/img/upload/bitcoin-twitch/wallet2.png)  

Lancer l'application NiceHash, cliquez sur l'icone "Wallet" et coller votre adresse NiceHash que vous avez précédemment copier.
NiceHash vous demandera certainement de lancer un benchmark afin de connaitre approximativement votre ratio (hashrate) sur les différentes monnaies, si c'est le cas, laissez le tourner et aller boire un café, ça peut prendre quelques minutes...

Une fois votre wallet renseigné dans l'application et le benchmark d'effectué,vous devriez avoir un bouton vert "Start" qui s'affiche, si c'est le cas, c'est que vous êtes désormais prêt à miner ! 
#### ⛏️ Miner !
Pour miner, c'est très simple, il vous suffit de cliquer sur le bouton vert "Start". Vous devriez voir l'icone "Start" de transformer en "Stop" et voir vos revenus quotidien dans "Daily estimated earning". Si vous le désirez, vous pouvez avoir plus de détail sur ce qui est en cours de minage par l'application en cliquant sur "Mining details", c'est ici qu'on verra le hashrate / seconde, le type d'algorithme ( et donc de monnaie ) qui est miner, le profit par jour par carte graphique ou processeur etc.
A noté que ce bouton "Mining details" n'est disponible qu'en cours de minage, si le mineur est arrêté le bouton affichera "Hardware details", ce qui vous permettra de désactiver/activer vos GPU ou vos CPU ( dans mon cas je mine avec CPU + GPU ).

![NiceHash application](https://btor.fr/img/upload/bitcoin-twitch/mining1.png)  ![NiceHash application](https://btor.fr/img/upload/bitcoin-twitch/mining2.png)  ![NiceHash application](https://btor.fr/img/upload/bitcoin-twitch/mining3.png)   

### 🧾 Transfert vers Coinbase
Votre mineur tourne, vous commencez à récoltez vos premiers euros et tout va pour le mieux... Cependant il y a plusieurs choses à prendre en compte (encore, oui je sais ...).
- **L'argent que vous avez dans votre wallet n'est pas en EUROS, ce sont des Bitcoins**, ce qui veut dire que si le cours du bitcoin chute ... vous aurez moins d'argent, si le cours augmente vous aurez plus. C'est un détail que je préfère bien appuyer car il est vraiment important.
- Autre point, **l'argent dont vous disposez** sur votre wallet nicehash **doit être transféré vers coinbase** afin de pouvoir payer vos abonnements twitch.

Passons donc au virement Nicehash vers Coinbase (vous pouvez suivre les étapes via les captures d'écrans) : 
- Rendez-vous sur le [site de nicehash](https://www.nicehash.com/login) et connectez-vous.
- Sur votre Dashboard, cliquez sur "[Wallet](https://www.nicehash.com/wallet)" 
- Dans votre wallet, cliquez sur "Withdraw", une fenêtre s'affiche vous proposant de faire soit un virement vers un wallet externe, soit vers coinbase
- Sélectionner "Withdraw to my Coinbase account"
- Remplissez les divers informations demandées (email de votre compte Coinbase, double authentification etc.) puis valider
- Vous devrez recevoir un mail de coinbase vous indiquant que vous avez reçu de l'argent de NiceHash

![NiceHash application](https://btor.fr/img/upload/bitcoin-twitch/wallet3.png) ![NiceHash application](https://btor.fr/img/upload/bitcoin-twitch/withdrawal.png) ![NiceHash application](https://btor.fr/img/upload/bitcoin-twitch/withdrawal2.png) ![NiceHash application](https://btor.fr/img/upload/bitcoin-twitch/coinbase-email.png)

### 💳 Paiement via twitch
Maintenant que nous avons miner et transférer l'argent sur coinbase, il ne nous manque plus qu'a l'utiliser !
- Rendez-vous sur la page twitch de votre choix
- Cliquez sur "S'abonner"  puis choisissez l'offre de votre choix par exemple 4,99$
- Cliquez sur "Choisir un autre moyen de paiement"
- Si "Coinbase" s'affiche, cliquez dessus, sinon cliquez sur "Afficher plus de modes"  et vous devrez le voir apparaitre 

![NiceHash application](https://btor.fr/img/upload/bitcoin-twitch/twitch-subscribe.png) ![NiceHash application](https://btor.fr/img/upload/bitcoin-twitch/twitch-paiement.png) ![NiceHash application](https://btor.fr/img/upload/bitcoin-twitch/twitch-paiement2.png)

Et voilà, vous vous êtes abonné sans même avoir dépensé 1€ (mais quelques minutes à lire et comprendre cet article ... ? )

## 💭 A retenir
- **Miner demande d'avoir un GPU assez performant**, oublier le mining si vous avez une GeForce 2 ca ne sera pas rentable.
- Ne miner que quand vous ne vous servez pas de votre ordinateur, par exemple la nuit ou quand vous n'êtes pas devant l'ordi
- Prenez en compte que **plus votre GPU est sollicité, plus il va consommer de l'electricité**. Si vous miner pour vous payer un sub ou deux, votre facture d'electricité ne devrait pas énormément bouger (de l'ordre d'un ou deux euros) , par contre, si vous décidez de miner de grosse sommes d'argent, pensez à bien faire vos calculs entre vos gains et votre consommation électrique sinon vous pourriez rapidement faire des bêtises. Les sites comme CryptoCompare proposent des simulateurs, par exemple avec [celui-ci](https://www.cryptocompare.com/mining/calculator/zec?HashingPower=200&HashingUnit=H%2Fs&PowerConsumption=200&CostPerkWh=0.12&MiningPoolFee=1) qui vous permet de voir ce que vous allez réellement gagner après déduction des frais électriques en minant du ZCash (Algorithme Equihash).
- **N'utilisez pas les virements BTC<>BTC** , les frais de transactions sont bien trop couteux, privilégier les transferts par coinbase qui eux ne comportent pas ou peu de taxes ?



Si vous avez la moindre question, n'hésitez pas à en parler dans les commentaires, j'y répondrai volontiers.
