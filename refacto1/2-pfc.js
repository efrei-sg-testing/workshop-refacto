// Détermine qui gagne au pierre feuille ciseaux
// exemple : node 2-pfc.js P F

/* 
if(process.argv[2] === "P") {
    if(process.argv[3] === "P") console.log("ex aequo")
    else if(process.argv[3] === "F") console.log("J2")
    else if(process.argv[3] === "C") console.log("J1")
    else console.log("?")
}
else if(process.argv[2] === "F") {
    if(process.argv[3] === "P") console.log("J1")
    else if(process.argv[3] === "F") console.log("ex aequo")
    else if(process.argv[3] === "C") console.log("J2")
    else console.log("?")
}
else if(process.argv[2] === "C") {
    if(process.argv[3] === "P") console.log("J2")
    else if(process.argv[3] === "F") console.log("J1")
    else if(process.argv[3] === "C") console.log("ex aequo")
    else console.log("?")
}
else console.log("?")
 */

// Vérifier que les arguments nécessaires sont présents
if (process.argv.length < 4) {
    console.log("Usage: node script.js [choix_joueur1] [choix_joueur2]");
    process.exit(1);
  }
  
  // Récupérer les choix des joueurs depuis les arguments de la ligne de commande
  const choixJoueur1 = process.argv[2];
  const choixJoueur2 = process.argv[3];
  
  // Vérifier les choix des joueurs et afficher le résultat
  if (choixJoueur1 === "P") {
    // Si Joueur 1 choisit Papier
    if (choixJoueur2 === "P") {
      // Si Joueur 2 choisit également Papier
      console.log("Le jeu est ex aequo !");
    } else if (choixJoueur2 === "F") {
      // Si Joueur 2 choisit Feuille
      console.log("Joueur 2 gagne avec Feuille !");
    } else if (choixJoueur2 === "C") {
      // Si Joueur 2 choisit Ciseaux
      console.log("Joueur 1 gagne avec Papier !");
    } else {
      // Choix invalide pour Joueur 2
      console.log("Choix invalide pour Joueur 2 !");
    }
  } else if (choixJoueur1 === "F") {
    // Si Joueur 1 choisit Feuille
    if (choixJoueur2 === "P") {
      // Si Joueur 2 choisit Papier
      console.log("Joueur 1 gagne avec Feuille !");
    } else if (choixJoueur2 === "F") {
      // Si Joueur 2 choisit également Feuille
      console.log("Le jeu est ex aequo !");
    } else if (choixJoueur2 === "C") {
      // Si Joueur 2 choisit Ciseaux
      console.log("Joueur 2 gagne avec Ciseaux !");
    } else {
      // Choix invalide pour Joueur 2
      console.log("Choix invalide pour Joueur 2 !");
    }
  } else if (choixJoueur1 === "C") {
    // Si Joueur 1 choisit Ciseaux
    if (choixJoueur2 === "P") {
      // Si Joueur 2 choisit Papier
      console.log("Joueur 2 gagne avec Papier !");
    } else if (choixJoueur2 === "F") {
      // Si Joueur 2 choisit Feuille
      console.log("Joueur 1 gagne avec Ciseaux !");
    } else if (choixJoueur2 === "C") {
      // Si Joueur 2 choisit également Ciseaux
      console.log("Le jeu est ex aequo !");
    } else {
      // Choix invalide pour Joueur 2
      console.log("Choix invalide pour Joueur 2 !");
    }
  } else {
    // Choix invalide pour Joueur 1
    console.log("Choix invalide pour Joueur 1 !");
  }
  