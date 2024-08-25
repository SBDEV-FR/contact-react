# Application de Gestion de Contacts

## Description

L'Application de Gestion de Contacts est une solution web moderne développée avec React.js. Elle offre une interface utilisateur intuitive et réactive pour gérer efficacement les informations de contact. Cette application permet aux utilisateurs d'ajouter, de modifier, de supprimer et de visualiser des contacts. Chaque contact comprend un nom, un numéro de téléphone et une adresse email.

L'interface est divisée en deux sections principales : 
- **Formulaire de saisie (gauche)** : Permet d'ajouter ou de modifier des contacts.
- **Tableau de contacts (droite)** : Affiche la liste des contacts existants.

### Fonctionnalités clés
- **Validation en temps réel** : Les entrées utilisateur sont validées avec des messages d'erreur en français pour les formats de numéro de téléphone et d'email.
- **Recherche de contacts** : Les utilisateurs peuvent rechercher des contacts à travers tous les champs (nom, téléphone, email).
- **Tri des contacts** : Les contacts peuvent être triés par nom, téléphone ou email, en ordre croissant ou décroissant.
- **Persistance des données** : Les données sont stockées dans le `localStorage`, permettant de conserver les contacts même après la fermeture du navigateur.
- **Interface responsive** : L'application s'adapte aux différentes tailles d'écran pour une utilisation optimale sur tous les dispositifs.

## Technologies Utilisées

### Frontend

- **React.js**
  - Utilisation des Hooks (`useState`, `useEffect`, `useCallback`) pour gérer l'état local et les effets de bord.
  - Rendu conditionnel pour l'affichage dynamique des composants.
  - Manipulation de listes avec la méthode `map()`.

- **JavaScript ES6+**
  - Fonctions fléchées et déstructuration pour un code plus concis et lisible.
  - Méthodes de tableau (`map`, `filter`, `sort`) pour la manipulation efficace des données.
  - Utilisation de l'opérateur de propagation (`spread`) pour la gestion des objets et des tableaux.

- **Gestion des Formulaires**
  - Contrôle des entrées utilisateur et validation des formulaires.
  - Utilisation d'expressions régulières (Regex) pour la validation d'email et de numéro de téléphone.
  - Affichage de messages d'erreur personnalisés en cas de saisie incorrecte.

- **Manipulation du DOM**
  - Gestion des événements pour une interaction utilisateur fluide.
  - Mise à jour dynamique de l'interface en réponse aux actions de l'utilisateur.

- **Stockage local**
  - Utilisation de `localStorage` pour la persistance des données entre les sessions de navigation.

### CSS

- **Mise en page responsive**
  - Utilisation de Flexbox pour une mise en page flexible et responsive.
  - Stylisation moderne de l'application pour une expérience utilisateur agréable sur tous les dispositifs.

## Fonctionnalités CRUD

L'application permet la gestion complète des contacts :
- **Créer** un nouveau contact
- **Lire** la liste des contacts existants
- **Mettre à jour** les informations d'un contact
- **Supprimer** un contact
- 
![image](https://github.com/user-attachments/assets/25db6c28-a948-4fdc-8798-3228477f6756)

Modification des contacts : 
![image](https://github.com/user-attachments/assets/dba7a1c8-4ad7-4380-a596-e38e40aeb312)

