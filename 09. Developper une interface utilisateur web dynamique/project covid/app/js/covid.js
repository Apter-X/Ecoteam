var questions = [ ,
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

var diagnostics = [ ,
  "Nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes.",
  "Téléconsultation ou médecin généraliste ou visite à domicile.",
  "Appelez le 141.",
  "Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute.",
  "Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141.",
  "Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation. Pour toute information concernant le Covid-19 allez vers la page d’accueil.",
  "Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène."
];

var form = function (key){
  switch (key) {
    case 1:
      switchRadio(2, 'Oui', 'Non');
      break;
    case 2:
      switchNbr('34 - 42', '34', '42', 'degré');
      break;
    case 3:
      switchRadio(2, 'Oui', 'Non');
      break;
    case 9:
      switchRadio(2, 'Oui', 'Non');
      break;
    case 10:
      switchRadio(4, 'Bien', 'Assez bien', 'Fatigué(e)', 'Trés fatigué(e)');
      break;
    case 11:
      switchNbr('15 - 110', '15', '110', 'age');
      break;
    case 12:
      switchNbr('20 - 250', '20', '250', 'kg');
      break;
    case 13:
      switchNbr('80 - 250', '80', '250', 'cm');
      break;
    case 14:
      switchRadio(2, 'Oui', 'Non');
      break;
    case 19:
      switchRadio(2, 'Oui', 'Non');
      break;
    case 20:
      switchRadio(3, 'Oui', 'Non', 'Homme');
      break;
    case 21:
      switchRadio(2, 'Oui', 'Non');
      break;
    default:
      break;
  }
}

var fever = Boolean(false);
var cough = Boolean(false);
var stiffness = Boolean(false);
var throat = Boolean(false); 
var diarrhea = Boolean(false);
var minor = 0;
var major = 0;
var pron = 0;
var diagnostic;

var getFactors = function (tab){
  if(tab[1] === 1){
    fever = true;
  }
  if(tab[2] >= 39){
    minor++;
  }
  if(tab[2] <= 35){
    major++;
  }
  if(tab[3] === 1){
    cough = true;
  }
  if(tab[4] === 1){
    stiffness = true;
  }
  if(tab[5] === 1){
    throat = true;
  }
  if(tab[6] === 1){
    diarrhea = true;
  }
  if(tab[7] === 1){
    minor++;
  }
  if(tab[8] === 1){
    major++;
  }
  if(tab[9] === 1){
    major++;
  }
  if(tab[10] >= 3 ){
    minor++;
  }
  if(tab[11] >= 70){
    pron++;
  }
  for (let i = 14; i < tab.length; i++) {
    if(tab[i] === 1){
      pron++;
    }
  }
}

function decision(){
  if( fever || cough && cough || throat && stiffness || fever && diarrhea ){
    if ( minor === 0 && major === 0 && tab[11] < 50){
      return(diagnostic = diagnostics[1]);
    }
    if ( minor <= 1 && major === 0 && tab[11] >= 50 ){
      return(diagnostic = diagnostics[2]);
    }
  }

  if( pron > 0 ){
    if( minor === 0 && major === 0 ){
      return(diagnostic = diagnostics[2]);
    }
    if( minor === 1 && major === 0){
      return(diagnostic = diagnostics[2]);
    }
    if( minor >= 2 && major === 0){
      return(diagnostic = diagnostics[3]);
    }
  }

  if ( major >= 1){
    return(diagnostic = diagnostics[3]);
  }

  if ( fever && cough ){
    if ( minor <= 1 && major === 0 ){
      return(diagnostic = diagnostics[2]);
    }
    if( pron >= 1 && minor === 0 && major === 0 ){
      return(diagnostic = diagnostics[2]);
    }
    if( pron >= 1 && minor === 1 && major === 0 ){
      return(diagnostic = diagnostics[2]);
    }
    if( pron >= 1 && minor >= 2 && major === 0 ){
      return(diagnostic = diagnostics[3]);
    }
  }

  if( fever || cough || throat || stiffness ){
    if ( minor === 0 && major === 0 ){
      return(diagnostic = diagnostics[4]);
    }
    if( minor >= 1 && major === 0 && pron >= 1 ){
      return(diagnostic = diagnostics[5]);
    }
  }

  if ( !fever && !cough && !throat && !stiffness && !diarrhea ){
    return(diagnostic = diagnostics[6]);
  }

  return(diagnostic = diagnostics[7]);
}