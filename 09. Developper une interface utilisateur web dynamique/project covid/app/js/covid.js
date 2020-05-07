const questions = [ ,
  "Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ?",
  "Quelle est votre température corporelle ?",
  "Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?",
  "Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?",
  "Ces derniers jours, avez-vous un mal de gorge ?",
  "Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.",
  "Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?",
  "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?",
  "Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?",
  "Actuellement, comment vous vous sentez ?",
  "Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.",
  "Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
  "Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
  "Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?",
  "Êtes-vous diabétique ?",
  "Avez-vous ou avez-vous eu un cancer ?",
  "Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?",
  "Avez-vous une insuffisance rénale chronique dialysée ?",
  "Avez-vous une maladie chronique du foie ?",
  "Êtes-vous enceinte ?",
  "Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?",
  "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive)."  
];

const diagnostics = [
  "Nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes.",
  "Téléconsultation ou médecin généraliste ou visite à domicile.",
  "Appelez le 141.",
  "Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute.",
  "Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141.",
  "Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation. Pour toute information concernant le Covid-19 allez vers la page d’accueil.",
  "Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène."
];

var answers = [];

function decision(tab){
    console.log('Decision!');
}