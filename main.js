// let bowling = {
// "giocatori":[
// {"name": "Fabrizio ", "tiri": []},
// {"name": "Margherita", "tiri": []},
// {"name": "Christian", "tiri": []},
// ],
// "setTiri": function() {
//     this.giocatori.forEach((giocatore)=> {
//         for (let i = 0; i <10; i++) {
//             giocatore.tiri.push(Math.floor(Math.random() * (10 - 0 + 1) + 0))
            
//         }
//     })
    
// },
// "punteggioFinale": function () {
//     this.giocatori.forEach((giocatore)=>{
//         giocatore.punteggioFinale = giocatore.tiri.reduce((acc,tiro)=> acc + tiro, 0)


//     })
// },
// "setWinner": function() {
    
//     }
// }
// bowling.setTiri();
// bowling.punteggioFinale();

// console.log(bowling.giocatori);
// ret

// -----------------------------------------------------------------------------------------

// Dato un array di numeri interi, creare una funzione che restituisca un nuovo array con ogni valore raddoppiato.

// let numeri = [1, 2, 3]

// function moltiplica(array) {
//     let risultato = []
//     for (let i = 0; i < array.length; i++) {
//         risultato.push(array [i] * 2)

//     }
//     return risultato ;
    
// }

// let risultato = moltiplica (numeri)
// console.log(risultato);
// console.log(`Moltiplica per 2 questi numeri ${numeri}, otterrai : ${risultato}`);

// ------------------------------------------------------------------------------------------
//  ESERCIZIO 2 Realizzare un oggetto che rappresenti un garage, dovrà contenere una lista di automobili. Ciascuna automobile dovra’ avere una marca (es. Fiat) ed una lista di modelli (es. Pandino tattico rosso).
// Scrivere un metodo che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.
// let garage = {
// ParcoAutomobili : [
//     {"marca": "Fiat", "modello": "Jeep, panda, 500X"},
//     {"marca": "Mercedes", "modello": "a180, a200, a220, cla200 "},
//     {"marca": "Alfaromeo", "modello": "156, 159, giulia, giulietta, tonale, stelvio"},
//     {"marca": "BMW", "modello": "118d, 120d, 130d"},
// ],
// auto: function() {
//     this.ParcoAutomobili.forEach((auto)=> console.log(auto.marca ) );
        
// },
// modello : function(){
//     this.ParcoAutomobili.forEach((auto)=> console.log(auto.modello));
// }
// }

// garage.auto();
// garage.modello();


// ESERCIZIO 3
// let garage = {
//     ParcoAutomobili : [
//         {"marca": "Fiat", "modello": "Jeep, panda, 500X"},
//         {"marca": "Mercedes", "modello": "a180, a200, a220, cla200 "},
//         {"marca": "Alfaromeo", "modello": "156, 159, giulia, giulietta, tonale, stelvio"},
//         {"marca": "BMW", "modello": "118d, 120d, 130d"},

//     ],
//     "marca": function automobile (marca){
//         switch (marca) {
//             case "fiat":
//                 console.log(this.ParcoAutomobili[0].modello);
//                 break;
//                 case this.ParcoAutomobili[1].marca:
//                 console.log(this.ParcoAutomobili[1].modello);
//                 break;
//                 case this.ParcoAutomobili[2].marca:
//                 console.log(this.ParcoAutomobili[2].modello);
//                 break;
                
//         }
//     }


// }
// garage.marca("fiat")