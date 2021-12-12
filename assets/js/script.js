 //Déclarer mes variables.
let tarif;
let message = document.getElementById('message');
let button = document.getElementById('button');

function affichertarif(){
    // récupération de l'accident proposé avec la fonction .value.

    let accident = document.getElementById('accident').value;

    // Notre condition pour choisir le bon tarif.

    if(accident >= 3) {
        message.innerHTML = '<div class="alert alert-dark" role="alert">Refusé</div>'
    }
    else{
        tarif = 0;
        let age = document.getElementById('age').value;
        let permis = document.getElementById('permis').value;
        let fidelite = document.getElementById('fidelite').value;
    
    if(age > 25){
        tarif = tarif + 1;
    }
    
    if(permis > 2){
        tarif = tarif + 1;
    }

    if(fidelite > 1){
       tarif = tarif + 1;
    }
    tarif = tarif - accident;
    console.log(tarif);    

    switch (tarif) {
        case 3: message.innerHTML = '<div class="alert alert-primary" role="alert">Vous bénéficiez du tarif bleu</div>';
        break;
        case 2: message.innerHTML = '<div class="alert alert-success" role="alert">Vous bénéficiez du tarif vert</div>';
        break;
        case 1: message.innerHTML = '<div class="alert alert-warning" role="alert">Vous bénéficiez du tarif orange</div>';
        break;
        case 0: message.innerHTML = '<div class="alert alert-danger" role="alert">Vous bénéficiez du tarif rouge</div>';
        break;
        case -1: message.innerHTML = '<div class="alert alert-dark" role="alert">"Vous êtes refusé"</div>';
        break;
        default:
    }
  }
}        

    // Ajout d'un écouteur d'événement pour vérifier le tarif.();
    
    document.getElementById('button').addEventListener('click', affichertarif, false);