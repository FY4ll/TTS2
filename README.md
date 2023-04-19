# INSTALL

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
Application de visualisation de salle en 3D utilisant Microsoft Graph et Vue.js
===============================================================================

Cette application permet aux utilisateurs de visualiser une salle en 3D en utilisant Microsoft Graph et Vue.js. Elle inclut une page de connexion utilisant l'authentification Microsoft avec Azure Active Directory (AAD) et une page de profil utilisateur qui contient toutes les informations utilisateur. La page de profil inclut également des boutons pour accéder à Outlook et Microsoft Profile.

Azure Active Directory (AAD) est un service d'annuaire basé sur le cloud fourni par Microsoft pour la gestion des identités et des accès. L'utilisation de Microsoft Graph pour l'authentification permet aux utilisateurs de se connecter à l'application à l'aide de leurs informations d'identification Azure Active Directory, ce qui offre une couche de sécurité supplémentaire pour les données stockées dans l'application.

La page de visualisation de la salle contient toutes les salles qui sont chargées par Babylon.js, une bibliothèque JavaScript open-source pour la création d'applications et de jeux 3D en temps réel.

Technologies utilisées
----------------------

- **Microsoft Graph**: une API pour accéder à des données Microsoft, telles que les événements du calendrier, les contacts, les e-mails et les fichiers.
- **Vue.js**: un framework JavaScript progressif pour la construction d'interfaces utilisateur.
- **Azure Active Directory**: un service d'annuaire basé sur le cloud fourni par Microsoft pour la gestion des identités et des accès.
- **Babylon.js**: une bibliothèque JavaScript open-source pour la création d'applications et de jeux 3D en temps réel.

Fonctionnalités
---------------

- Authentification Microsoft avec Azure Active Directory pour la connexion
- Visualisation de salle en 3D avec Babylon.js
- Page de profil utilisateur contenant toutes les informations utilisateur
- Boutons d'accès à Outlook et Microsoft Profile sur la page de profil

Prérequis
---------

Pour utiliser cette application, vous aurez besoin de :

- Un compte Azure Active Directory
- Vue.js installé sur votre ordinateur
- Une connaissance de base de Babylon.js pour la visualisation de la salle en 3D.


