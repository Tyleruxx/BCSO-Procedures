document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("dark-mode");
});
function esc(s) {
  const d = document.createElement("div");
  d.textContent = String(s || "");
  return d.innerHTML;
}
function customAlert(title, msg) {
  alert(title + "\n\n" + msg);
}
const USM_OFFENSES = [
  {
    nom: "Usage abusif du klaxon",
    amount: 10000,
    temps: 0,
    mode: "fixed",
    federale: false,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Stationnement gênant",
    amount: 10000,
    temps: 0,
    mode: "fixed",
    federale: false,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Stationnement interdit",
    amount: 25000,
    temps: 0,
    mode: "fixed",
    federale: false,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Téléphone au volant",
    amount: 25000,
    temps: 0,
    mode: "fixed",
    federale: false,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Véhicule en mauvais état",
    amount: 25000,
    temps: 0,
    mode: "fixed",
    federale: false,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Présence pietonne / véhicule inadapté sur route",
    amount: 25000,
    temps: 0,
    mode: "fixed",
    federale: false,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Graffitis / Tag (dégradation de biens publics ou privés)",
    amount: 25000,
    temps: 0,
    mode: "fixed",
    federale: false,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Conduite hors route / hors piste avec véhicule inadapté",
    amount: 25000,
    temps: 0,
    mode: "fixed",
    federale: false,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Conduite sans casque",
    amount: 25000,
    temps: 0,
    mode: "fixed",
    federale: false,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Conduite à contre-sens",
    amount: 25000,
    temps: 0,
    mode: "fixed",
    federale: false,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Conduite dangereuse",
    amount: 50000,
    temps: 0,
    mode: "fixed",
    federale: false,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Non respect d'un feu rouge",
    amount: 25000,
    temps: 0,
    mode: "fixed",
    federale: false,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Non respect d'un véhicule prioritaire",
    amount: 25000,
    temps: 0,
    mode: "fixed",
    federale: false,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Excès de vitesse de +10 à -50km/h",
    amount: 50000,
    temps: 0,
    mode: "fixed",
    federale: false,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Excès de vitesse de +50 à -100km/h",
    amount: 75000,
    temps: 0,
    mode: "fixed",
    federale: false,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Pollution sonore (échappement trop bruyant)",
    amount: 50000,
    temps: 0,
    mode: "fixed",
    federale: false,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Dissimulation du visage sur l'espace public",
    amount: 75000,
    temps: 0,
    mode: "fixed",
    federale: false,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Port d'un casque (hors moto)",
    amount: 75000,
    temps: 0,
    mode: "fixed",
    federale: false,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Port d'un gilet pare-balles",
    amount: 75000,
    temps: 0,
    mode: "fixed",
    federale: false,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Insultes envers un civil",
    amount: 25000,
    temps: 0,
    mode: "fixed",
    federale: false,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Non présentation d'une pièce d'identité",
    amount: 50000,
    temps: 0,
    mode: "fixed",
    federale: false,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Conduite sans permis",
    amount: 75000,
    temps: 700,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Vol de véhicule",
    amount: 75000,
    temps: 500,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Vol de véhicule de fonction",
    amount: 75000,
    temps: 700,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Excès de très grande vitesse (+100km/h)",
    amount: 100000,
    temps: 700,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Délit de fuite",
    amount: 75000,
    temps: 500,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Refus d'obtempérer",
    amount: 75000,
    temps: 900,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Possession d'un dispositif anti radars (brouilleur)",
    amount: 100000,
    temps: 700,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Entrave / Occupation illégale du circuit aérien",
    amount: 100000,
    temps: 500,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Occupation illégale de l'espace public",
    amount: 50000,
    temps: 300,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Arme blanche sortie en public",
    amount: 50000,
    temps: 500,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Arme létale sortie en public",
    amount: 100000,
    temps: 500,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Coups et blessures sur citoyen",
    amount: 50000,
    temps: 500,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Coups et blessures sur représentant de la Fonction Publique",
    amount: 100000,
    temps: 600,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Braquage d'ATM",
    amount: 50000,
    temps: 700,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Braquage sur civil",
    amount: 200000,
    temps: 1000,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Braquage de supérette",
    amount: 200000,
    temps: 1000,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Vol à l'arraché",
    amount: 150000,
    temps: 1000,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Cambriolage",
    amount: 150000,
    temps: 1000,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Braconnage",
    amount: 50000,
    temps: 900,
    mode: "qty",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "Quantités d'animaux",
  },
  {
    nom: "Intrusion dans un lieu privé / violation de propriété privée",
    amount: 100000,
    temps: 1000,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Dégradation de bien Publics (véhicules LSPD/BCSO, EMS, etc...) / Privés",
    amount: 75000,
    temps: 300,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Entrave au bon fonctionnement d'une entreprise",
    amount: 50000,
    temps: 600,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Entrave aux services publics en fonction",
    amount: 75000,
    temps: 600,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Mise en danger de la vie d'autrui",
    amount: 25000,
    temps: 500,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Organisation d'une manifestation illégale",
    amount: 50000,
    temps: 600,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Participation à une manifestation illégale",
    amount: 50000,
    temps: 700,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Possession de biens servant à des actes illégaux",
    amount: 25000,
    temps: 600,
    mode: "qty",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "Quantités de bien",
  },
  {
    nom: "Possession d'arme blanche illégale",
    amount: 50000,
    temps: 600,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Utilisation d'une arme létale à mauvais escient",
    amount: 100000,
    temps: 700,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Possession d'arme illégale de catégorie 1",
    amount: 100000,
    temps: 700,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Possession d'arme illégale de catégorie 2",
    amount: 200000,
    temps: 1000,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Possession de produits servant à la fabrication de drogues",
    amount: 4000,
    temps: 700,
    mode: "qty",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "Quantités de produit",
  },
  {
    nom: "Possession de Weed",
    amount: 14000,
    temps: 900,
    mode: "qty",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "Quantités de drogue",
  },
  {
    nom: "Possession de Coke",
    amount: 16000,
    temps: 1400,
    mode: "qty",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "Quantité",
  },
  {
    nom: "Possession d'Opium",
    amount: 18000,
    temps: 1000,
    mode: "qty",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "Quantité",
  },
  {
    nom: "Possession de Meth",
    amount: 20000,
    temps: 1200,
    mode: "qty",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "Quantité",
  },
  {
    nom: "Possession de Kétamine",
    amount: 22000,
    temps: 1200,
    mode: "qty",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "Quantité",
  },
  {
    nom: "Possession de Fentanyl",
    amount: 24000,
    temps: 1200,
    mode: "qty",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "Quantité",
  },
  {
    nom: "Possession de silure",
    amount: 10000,
    temps: 600,
    mode: "qty",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "Quantité",
  },
  {
    nom: "Possession de brochet",
    amount: 12000,
    temps: 700,
    mode: "qty",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "Quantité",
  },
  {
    nom: "Possession de tortue verte",
    amount: 14000,
    temps: 800,
    mode: "qty",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "Quantité",
  },
  {
    nom: "Possession de carpe koï",
    amount: 16000,
    temps: 900,
    mode: "qty",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "Quantité",
  },
  {
    nom: "Possession de Hansk le gros thon rouge",
    amount: 18000,
    temps: 1200,
    mode: "qty",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "Quantité",
  },
  {
    nom: "Possession de métaux illégaux",
    amount: 5000,
    temps: 900,
    mode: "qty",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "Quantité",
  },
  {
    nom: "Usurpation d'identité / profession",
    amount: 150000,
    temps: 600,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Harcèlement",
    amount: 100000,
    temps: 300,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Racisme / Homophobie / Sexisme",
    amount: 100000,
    temps: 500,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Attentat à la pudeur / Nudité",
    amount: 100000,
    temps: 300,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Arnaque de moins de 500 000",
    amount: 100000,
    temps: 700,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Tentative de corruption",
    amount: 100000,
    temps: 700,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Outrage à un représentant de l'État",
    amount: 100000,
    temps: 700,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Non respect d'une décision de justice",
    amount: 100000,
    temps: 600,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Violence conjugale",
    amount: 100000,
    temps: 900,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Falsification / Non établissement / non archivage de Contrat de Travail",
    amount: 100000,
    temps: 300,
    mode: "qty",
    federale: false,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "Nombre de contrats",
  },
  {
    nom: "Abus publicitaire",
    amount: 10000,
    temps: 0,
    mode: "qty",
    federale: false,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "Nombre de pubs",
  },
  {
    nom: "Refus de transmission de comptabilité / liste des employés au bureau du Gouverneur",
    amount: 1000000,
    temps: 0,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Licenciement abusif",
    amount: 1000000,
    temps: 0,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Abus de pouvoir",
    amount: 100000,
    temps: 900,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Menaces à un représentant de l'État",
    amount: 100000,
    temps: 900,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Blanchiment d'argent",
    amount: 350000,
    temps: 1600,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Attaque d'un convoi Bobcat",
    amount: 400000,
    temps: 1400,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Braquage de conteneur",
    amount: 300000,
    temps: 1500,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Braquage Galerie d'art",
    amount: 400000,
    temps: 1800,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Braquage Bijouterie",
    amount: 500000,
    temps: 1800,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Entrave ou obstruction à la justice",
    amount: 200000,
    temps: 900,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Possession d'argent sale",
    amount: 0.75,
    temps: 1600,
    mode: "percent",
    federale: false,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "Montant argent sale (> 100 000)",
  },
  {
    nom: "Vente de drogue",
    amount: 200000,
    temps: 1800,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Participation à une fusillade",
    amount: 150000,
    temps: 1200,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Possession d'arme légale sans PPA",
    amount: 200000,
    temps: 2100,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Possession d'arme illégale de catégorie 3",
    amount: 300000,
    temps: 2700,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Non présentation à une convocation de justice",
    amount: 50000,
    temps: 2300,
    mode: "qty",
    federale: false,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "Nb jours de non présentation",
  },
  {
    nom: "Trafic de stupéfiants",
    amount: 200000,
    temps: 2500,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Association de malfaiteurs",
    amount: 200000,
    temps: 2500,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Corruption",
    amount: 200000,
    temps: 2500,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Homicide involontaire",
    amount: 200000,
    temps: 1000,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Arnaque d'une valeur de plus de 500 000",
    amount: 500000,
    temps: 2000,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Port illégal d'un uniforme des services publics (EMS, LSPD/BCSO, etc...)",
    amount: 450000,
    temps: 1800,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Intrusion dans un complexe gouvernemental",
    amount: 300000,
    temps: 2500,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Non assistance à personne à danger",
    amount: 200000,
    temps: 1800,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Tentative d'évasion",
    amount: 300000,
    temps: 2100,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Attouchement sexuel non consenti",
    amount: 300000,
    temps: 2800,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Destruction / Dissimulation de preuve(s)",
    amount: 300000,
    temps: 2700,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Cavale",
    amount: 30000,
    temps: 2000,
    mode: "qty",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "Nb de jour(s)",
  },
  {
    nom: "Séquestration",
    amount: 50000,
    temps: 2500,
    mode: "qty",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "Nb de personne(s)",
  },
  {
    nom: "Évasion / organisation d'évasion",
    amount: 300000,
    temps: 3200,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Braquage de Fleeca",
    amount: 500000,
    temps: 1800,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Braquage de Pacific",
    amount: 1000000,
    temps: 2100,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Attaque d'un convoi LSPD/BCSO",
    amount: 800000,
    temps: 1900,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Tentative de prise d'otage sur civil",
    amount: 200000,
    temps: 1200,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Tentative de prise d'otage sur représentant de l'État",
    amount: 250000,
    temps: 1800,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Prise d'otage sur civil",
    amount: 300000,
    temps: 2500,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Prise d'otage sur représentant de l'État",
    amount: 350000,
    temps: 2800,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Tentative d'homicide sur civil",
    amount: 300000,
    temps: 2700,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Tentative d'homicide sur représentant de l'État",
    amount: 350000,
    temps: 2800,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Homicide sur civil",
    amount: 400000,
    temps: 3400,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Homicide sur représentant de l'État",
    amount: 450000,
    temps: 3600,
    mode: "fixed",
    federale: false,
    hasRec: true,
    hasCmp: true,
    qtyLbl: "",
  },
  {
    nom: "Attentat / Tentative d'attentat",
    amount: 1000000,
    temps: 0,
    mode: "fixed",
    federale: true,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Prise d'otage sur le/la Gouverneur(e) et son Adjoint",
    amount: 750000,
    temps: 0,
    mode: "fixed",
    federale: true,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Tentative d'homicide sur le/la Gouverneur(e) et son Adjoint",
    amount: 1500000,
    temps: 0,
    mode: "fixed",
    federale: true,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "",
  },
  {
    nom: "Homicide sur le/la Gouverneur(e) et son Adjoint",
    amount: 3000000,
    temps: 0,
    mode: "fixed",
    federale: true,
    hasRec: false,
    hasCmp: false,
    qtyLbl: "",
  },
];
const USM_AMENDE_CAP = 8000000;
const USM_MIRANDA = `Monsieur "X", il est actuellement "XX". Vous êtes en état d'arrestation.
Vous avez le droit de garder le silence. Si vous renoncez à ce droit, tout ce que vous direz pourra être et sera utilisé contre vous devant une cour de justice.
Vous avez le droit à un avocat et d’avoir un avocat présent lors de l’interrogatoire. Si vous n’en avez pas les moyens, un avocat vous sera fourni gratuitement.
Durant chaque interrogatoire, vous pourrez décider à n’importe quel moment d’exercer ces droits, de ne répondre à aucune question ou de ne faire aucune déposition.
Vous avez également droit à des soins médicaux, à boire et à manger.
Avez-vous bien compris vos droits ?`;

let procState = {
  tab: "mandat",
  search: "",
  entries: {},
  interpols: [""],
  priorAmounts: [""],
  priorTig: "",
  mirandaAck: false,
  collapsed: {
    contravention: true,
    mineur: true,
    majeur: true,
    crime: true,
    federal: true,
  },
};
function procCategory(o) {
  if (o.federale)
    return { key: "federal", label: "🚨 Fédéral", color: "var(--danger)" };
  if (o.temps === 0)
    return {
      key: "contravention",
      label: "🚗 Contraventions",
      color: "var(--blue)",
    };
  if (o.temps <= 900)
    return { key: "mineur", label: "⚠️ Délits mineurs", color: "var(--beige)" };
  if (o.temps <= 1800)
    return {
      key: "majeur",
      label: "🔥 Délits majeurs",
      color: "var(--orange)",
    };
  return { key: "crime", label: "☠️ Crimes", color: "var(--danger)" };
}
const PROC_CAT_ORDER = [
  "contravention",
  "mineur",
  "majeur",
  "crime",
  "federal",
];
function procFmtMoney(n) {
  return new Intl.NumberFormat("fr-FR").format(Math.round(n)) + " $";
}
function procFmtTime(s) {
  if (!s || s <= 0) return "0 seconde";
  return `${s} secondes`;
}
function procShowMiranda() {
  document.getElementById("miranda-text").textContent = USM_MIRANDA;
  document.getElementById("miranda-modal").style.display = "flex";
}
function closeMirandaModal() {
  document.getElementById("miranda-modal").style.display = "none";
}
function procSetTab(t) {
  procState.tab = t;
  procRenderList();
  procRenderPanel();
  updateTabButtons();
}
function procSearch(v) {
  procState.search = v.toLowerCase();
  procRenderList();
}
function procReset() {
  procState.entries = {};
  procState.interpols = [""];
  procState.priorAmounts = [""];
  procState.priorTig = "";
  procRenderList();
  procRenderPanel();
}
function procAddInterpol() {
  procState.interpols.push("");
  procRenderPanel();
}
function procRemInterpol(i) {
  if (procState.interpols.length > 1) {
    procState.interpols.splice(i, 1);
    procRenderPanel();
  }
}
function procAddPrior() {
  procState.priorAmounts.push("");
  procRenderPanel();
}
function procRemPrior(i) {
  if (procState.priorAmounts.length > 1) {
    procState.priorAmounts.splice(i, 1);
    procRenderPanel();
  }
}
function procSetPriorTig(v) {
  procState.priorTig = v;
  procRenderPanel();
}
function procSetInterpol(i, v) {
  procState.interpols[i] = v;
  procRenderPanel();
}
function procSetPriorAmount(i, v) {
  procState.priorAmounts[i] = v;
  procRenderPanel();
}
function procToggleCat(k) {
  procState.collapsed[k] = !procState.collapsed[k];
  procRenderList();
}
function procToggle(idx, on) {
  if (on)
    procState.entries[idx] = procState.entries[idx] || {
      on: true,
      mode: "normal",
      qty: "",
    };
  else delete procState.entries[idx];
  if (procState.entries[idx]) procState.entries[idx].on = on;
  procRenderList();
  procRenderPanel();
}
function procSetMode(idx, m) {
  if (procState.entries[idx]) {
    procState.entries[idx].mode = m;
    procRenderPanel();
  }
}
function procSetQty(idx, v) {
  if (procState.entries[idx]) {
    procState.entries[idx].qty = v;
    procRenderPanel();
  }
}
function procComputeEntry(o, e) {
  let qty = parseFloat(e.qty) || 0;
  let base = 0;
  if (o.mode === "fixed") base = o.amount;
  else if (o.mode === "qty") base = o.amount * qty;
  else if (o.mode === "percent") base = o.amount * qty;
  let temps = o.temps;
  let mult = 1;
  if (e.mode === "recidive") mult = 2;
  else if (e.mode === "complicite") mult = 0.5;
  return { amende: base * mult, temps: temps * mult, federale: o.federale };
}
function procRenderList() {
  const list = document.getElementById("proc-list");
  if (!list) return;
  const q = procState.search;
  const filtered = USM_OFFENSES.map((o, idx) => ({ o, idx })).filter(
    ({ o }) => !q || o.nom.toLowerCase().includes(q),
  );
  if (!filtered.length) {
    list.innerHTML =
      '<div style="padding:40px;text-align:center;color:var(--text-muted);">Aucune infraction trouvée</div>';
    return;
  }
  const groups = {};
  filtered.forEach(({ o, idx }) => {
    const c = procCategory(o);
    groups[c.key] = groups[c.key] || { cat: c, items: [] };
    groups[c.key].items.push({ o, idx });
  });
  const renderItem = ({ o, idx }) => {
    const e = procState.entries[idx] || {};
    const isOn = !!e.on;
    const mode = e.mode || "normal";
    const qty = e.qty || "";
    const amountDisplay = o.federale
      ? "FÉDÉRALE"
      : o.mode === "qty"
        ? procFmtMoney(o.amount) + " × qté"
        : o.mode === "percent"
          ? "75% montant saisi"
          : procFmtMoney(o.amount);
    const tempsDisplay = o.federale
      ? "🚨 FÉDÉRALE"
      : o.temps > 0
        ? procFmtTime(o.temps)
        : "—";
    const needQty = o.mode === "qty" || o.mode === "percent";
    const qtyLbl = o.qtyLbl || "Quantité";
    return `
        <div class="table-row" style="${isOn ? "background:rgba(245,200,66,0.06);" : ""}">
            <input type="checkbox" ${isOn ? "checked" : ""} onchange="procToggle(${idx},this.checked)">
            <label>
                <div style="font-weight:600;color:var(--text);">${esc(o.nom)}</div>
                <div class="meta">💰 ${amountDisplay} · ⏱️ ${tempsDisplay}</div>
            </label>
            ${
              isOn
                ? `<div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end;min-width:220px;">
                    ${needQty ? `<input type="number" min="0" value="${esc(qty)}" placeholder="${esc(qtyLbl)}" oninput="procSetQty(${idx},this.value)" style="width:100px;">` : ""}
                    <select onchange="procSetMode(${idx},this.value)" style="min-width:120px;"> 
                        <option value="normal" ${mode === "normal" ? "selected" : ""}>Normal</option>
                        ${o.hasRec ? `<option value="recidive" ${mode === "recidive" ? "selected" : ""}>Récidive ×2</option>` : ""}
                        ${o.hasCmp ? `<option value="complicite" ${mode === "complicite" ? "selected" : ""}>Complicité ×0,5</option>` : ""}
                    </select>
                </div>`
                : ""
            }
        </div>`;
  };
  const html = PROC_CAT_ORDER.map((k) => {
    const g = groups[k];
    if (!g) return "";
    const collapsed = !!procState.collapsed[k] && !q;
    const count = g.items.length;
    const selCount = g.items.filter(
      ({ idx }) => procState.entries[idx]?.on,
    ).length;
    return `
        <div style="margin-bottom:8px;">
            <div class="collapse-header" onclick="procToggleCat('${k}')" style="border-left:4px solid ${g.cat.color};">
                <div class="category-title" style="color:${g.cat.color};">${g.cat.label} · ${count}</div>
                <div style="display:flex;align-items:center;gap:8px;"><span class="badge badge-gold">${selCount} sél.</span><span>${collapsed ? "▸" : "▾"}</span></div>
            </div>
            ${collapsed ? "" : g.items.map(renderItem).join("")}
        </div>`;
  }).join("");
  list.innerHTML = html;
}
function procRenderPanel() {
  const panel = document.getElementById("proc-panel");
  if (!panel) return;
  const entries = Object.entries(procState.entries)
    .map(([idx, e]) => ({ o: USM_OFFENSES[idx], e, idx: +idx }))
    .filter((x) => x.o && x.e.on);
  let totalAmende = 0,
    maxTemps = 0,
    federale = false,
    worstOffense = "";
  const selectedLines = entries.map(({ o, e }) => {
    const c = procComputeEntry(o, e);
    totalAmende += c.amende;

    if (c.temps > maxTemps) {
      maxTemps = c.temps;
      const tag =
        e.mode === "recidive"
          ? " (Récidive)"
          : e.mode === "complicite"
            ? " (Complicité)"
            : "";
      const qtyTag =
        (o.mode === "qty" || o.mode === "percent") && e.qty ? ` ×${e.qty}` : "";
      worstOffense = `${o.nom}${qtyTag}${tag}`;
    }

    if (c.federale) federale = true;

    const tag =
      e.mode === "recidive"
        ? " (Récidive)"
        : e.mode === "complicite"
          ? " (Complicité)"
          : "";
    const qtyTag =
      (o.mode === "qty" || o.mode === "percent") && e.qty ? ` ×${e.qty}` : "";

    return `- ${o.nom}${qtyTag}${tag}`;
  });
  const isAffaire = procState.tab === "affaire";
  let priorSum = 0;
  if (isAffaire) {
    priorSum = procState.priorAmounts.reduce(
      (s, v) => s + (parseFloat(String(v).replace(/[^\d.]/g, "")) || 0),
      0,
    );
    totalAmende += priorSum;
    const priorTigVal = parseFloat(procState.priorTig) || 0;
    if (priorTigVal > maxTemps) maxTemps = priorTigVal;
  }
  const capped = Math.min(totalAmende, USM_AMENDE_CAP);
  const wasCapped = totalAmende > USM_AMENDE_CAP;
  const headerMotif =
    procState.tab === "mandat"
      ? "🗃️ Motifs du mandat :"
      : procState.tab === "casier"
        ? "🗃️ Motifs d'arrestation :"
        : "🗃️ Motifs d'arrestation :";
  const interpolLines = isAffaire
    ? procState.interpols
        .filter((x) => x.trim())
        .map((v, i) => `Interpol n°${i + 1} : ${v}`)
        .join("\n")
    : "";
  const motifsList = selectedLines.length
    ? selectedLines.join("\n")
    : "(aucune infraction sélectionnée)";
  const mandatDate =
    procState.interpols.find((x) => x.trim()) || "date du mandat";
  const affaireText = `🗄️ AFFAIRE CLASSÉE MANDAT DU ${mandatDate}\n\n🗃️ Motifs d'arrestation :\n${motifsList}`;
  const motifText = worstOffense || "(aucune infraction sélectionnée)";
  const tigLine = federale
    ? "🚨 STATUT : FÉDÉRALE"
    : `⏱️ TIG (le plus élevé) : ${procFmtTime(maxTemps)}`;
  const amendeLine = `💰 Amende totale : ${procFmtMoney(capped)}${wasCapped ? ` (plafonné à ${procFmtMoney(USM_AMENDE_CAP)})` : ""}`;
  const arrestText = `🗃️ Motifs d'arrestation :\n${motifsList}`;
  const tigText = federale ? "FÉDÉRALE" : String(Math.round(maxTemps));
  const amendeText = String(Math.round(capped));
  const clipboard = [
    headerMotif,
    "",
    motifsList,
    "",
    ...(interpolLines ? [interpolLines, ""] : []),
    amendeLine,
    tigLine,
  ].join("\n");
  const interpolsBlock = isAffaire
    ? `
        <div class="panel-group">
            <div class="panel-group-title">🔗 DATE DU MANDAT</div>
            ${procState.interpols.map((v, i) => `<div style="display:flex;gap:8px;align-items:center;margin-bottom:8px;"><input type="text" placeholder="Interpol n°${i + 1}" value="${esc(v)}" onchange="procSetInterpol(${i},this.value)"><button class="btn btn-outline btn-sm" onclick="procRemInterpol(${i})">✕</button></div>`).join("")}
            <button class="btn btn-outline btn-sm" onclick="procAddInterpol()">➕ Ajouter interpol</button>
        </div>
        <div class="panel-group">
            <div class="panel-group-title">💰 AMENDES PRÉCÉDENTES</div>
            ${procState.priorAmounts.map((v, i) => `<div style="display:flex;gap:8px;align-items:center;margin-bottom:8px;"><input type="number" min="0" placeholder="Montant interpol n°${i + 1}" value="${esc(v)}" onchange="procSetPriorAmount(${i},this.value)"><button class="btn btn-outline btn-sm" onclick="procRemPrior(${i})">✕</button></div>`).join("")}
            <button class="btn btn-outline btn-sm" onclick="procAddPrior()">➕ Ajouter amende</button>
        </div>
        <div class="panel-group">
            <div class="panel-group-title">⏱️ TIG LE PLUS ÉLEVÉ (interpols précédents)</div>
            <input type="number" min="0" placeholder="TIG en secondes" value="${esc(procState.priorTig)}" onchange="procSetPriorTig(this.value)">
        </div>`
    : "";
  panel.innerHTML = `
        ${interpolsBlock}
        <div class="panel-group">
            <div class="panel-group-title">📊 RÉSULTAT</div>
            <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border2);"><span style="color:var(--text-muted);font-size:12px;">Infractions</span><strong>${entries.length}</strong></div>
            <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border2);"><span style="color:var(--text-muted);font-size:12px;">Amende</span><strong style="color:${wasCapped ? "var(--orange)" : "var(--beige)"};">${procFmtMoney(capped)}${wasCapped ? " ⚠️" : ""}</strong></div>
            ${isAffaire && priorSum > 0 ? `<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border2);font-size:12px;"><span style="color:var(--text-muted);">↳ dont précédent</span><span>${procFmtMoney(priorSum)}</span></div>` : ""}
            <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;"><span style="color:var(--text-muted);font-size:12px;">TIG max</span><strong style="color:${federale ? "var(--danger)" : "var(--text)"};">${federale ? "🚨 FÉDÉRALE" : procFmtTime(maxTemps)}</strong></div>
        </div>
        ${
          procState.tab === "mandat"
            ? `
        <div class="panel-group">
            <div class="panel-group-title">🎯 MOTIF</div>
            <button class="btn btn-gold btn-sm" onclick="procCopyMotif()">📋 Copier</button>
            <textarea id="proc-motif-output" readonly style="min-height:70px;height:70px;resize:none;">${esc(motifText)}</textarea>
        </div>
        <div class="panel-group">
        <div class="panel-group-title">📋 COPIER LE TEXTE</div>
        <button class="btn btn-gold btn-sm" onclick="procCopy()">📋 Copier</button>
        <textarea id="proc-output" readonly>${esc(clipboard)}</textarea>
        </div>
        `
            : ""
        }
        ${
          procState.tab === "casier"
            ? `
        <div class="panel-group">
        <div class="panel-group-title">🗃️ MOTIFS D'ARRESTATION</div>
        <button class="btn btn-gold btn-sm" onclick="procCopyArrest()">📋 Copier</button>
        <textarea id="proc-arrest-output" readonly>${esc(arrestText)}</textarea>
        </div>

        <div class="panel-group">
        <div class="panel-group-title">⏱️ TIG</div>
        <button class="btn btn-gold btn-sm" onclick="procCopyTig()">📋 Copier</button>
        <textarea id="proc-tig-output" readonly style="min-height:70px;height:70px;resize:none;">${esc(tigText)}</textarea>
        </div>

        <div class="panel-group">
        <div class="panel-group-title">💰 AMENDES</div>
        <button class="btn btn-gold btn-sm" onclick="procCopyAmende()">📋 Copier</button>
        <textarea id="proc-amende-output" readonly style="min-height:70px;height:70px;resize:none;">${esc(amendeText)}</textarea>
        </div>
        `
            : `
        `
        }


        ${
          procState.tab === "affaire"
            ? `
        <div class="panel-group">
        <div class="panel-group-title">🗄️ AFFAIRE CLASSÉE</div>
        <button class="btn btn-gold btn-sm" onclick="procCopyAffaire()">📋 Copier</button>
        <textarea id="proc-affaire-output" readonly>${esc(affaireText)}</textarea>
        </div>

        <div class="panel-group">
        <div class="panel-group-title">⏱️ TIG</div>
        <button class="btn btn-gold btn-sm" onclick="procCopyTig()">📋 Copier</button>
        <textarea id="proc-tig-output" readonly style="min-height:70px;height:70px;resize:none;">${esc(tigText)}</textarea>
        </div>

        <div class="panel-group">
        <div class="panel-group-title">💰 AMENDES</div>
        <button class="btn btn-gold btn-sm" onclick="procCopyAmende()">📋 Copier</button>
        <textarea id="proc-amende-output" readonly style="min-height:70px;height:70px;resize:none;">${esc(amendeText)}</textarea>
        </div>
        `
            : ""
        }
        `;
}


function procCopyAffaire() {
  const ta = document.getElementById('proc-affaire-output');
  if (!ta) return;
  try {
    navigator.clipboard.writeText(ta.value);
  } catch (e) {
    ta.select();
    document.execCommand('copy');
  }
}
function procCopyMotif() {
  const ta = document.getElementById("proc-motif-output");
  if (!ta) return;
  try {
    navigator.clipboard.writeText(ta.value);
  } catch (e) {
    ta.select();
    document.execCommand("copy");
  }
}
function procCopy() {
  const ta = document.getElementById("proc-output");
  if (!ta) return;
  try {
    navigator.clipboard.writeText(ta.value);
  } catch (e) {
    ta.select();
    document.execCommand("copy");
  }
}
function procCopyArrest() {
  const ta = document.getElementById("proc-arrest-output");
  if (!ta) return;
  try {
    navigator.clipboard.writeText(ta.value);
  } catch (e) {
    ta.select();
    document.execCommand("copy");
  }
}

function procCopyTig() {
  const ta = document.getElementById("proc-tig-output");
  if (!ta) return;
  try {
    navigator.clipboard.writeText(ta.value);
  } catch (e) {
    ta.select();
    document.execCommand("copy");
  }
}

function procCopyAmende() {
  const ta = document.getElementById("proc-amende-output");
  if (!ta) return;
  try {
    navigator.clipboard.writeText(ta.value);
  } catch (e) {
    ta.select();
    document.execCommand("copy");
  }
}
function updateTabButtons() {
  const buttons = document.querySelectorAll(".header .btn, .card .btn");
  buttons.forEach((btn) => {
    if (btn.textContent.includes("Mandat")) {
      btn.className =
        procState.tab === "mandat"
          ? "btn btn-gold btn-sm"
          : "btn btn-outline btn-sm";
    } else if (btn.textContent.includes("Casier")) {
      btn.className =
        procState.tab === "casier"
          ? "btn btn-gold btn-sm"
          : "btn btn-outline btn-sm";
    } else if (btn.textContent.includes("Affaire")) {
      btn.className =
        procState.tab === "affaire"
          ? "btn btn-gold btn-sm"
          : "btn btn-outline btn-sm";
    }
  });
}
function procToggleTheme() {
  const body = document.body;
  const btn = document.getElementById("theme-toggle");
  const active = body.classList.toggle("dark-theme");
  if (btn) btn.textContent = active ? "☀️ Mode clair" : "🌙 Mode sombre";
}
function initProcedures() {
  document.body.classList.add("dark-theme");
  procRenderList();
  procRenderPanel();
  updateTabButtons();

  const btn = document.getElementById("theme-toggle");
  if (btn) btn.textContent = "☀️ Mode clair";
}
window.onload = initProcedures;

document.addEventListener("DOMContentLoaded", () => {
  const candidates = Array.from(
    document.querySelectorAll(
      '[class*="federal" i], [class*="federale" i], [id*="federal" i], [id*="federale" i], [data-category*="federal" i], [data-category*="federale" i]',
    ),
  );
  candidates.forEach((el) => {
    el.classList.remove("open", "opened", "active", "expanded");
    if (el.hasAttribute("open")) el.removeAttribute("open");
    if (el.getAttribute("aria-expanded") === "true")
      el.setAttribute("aria-expanded", "false");
  });
});
