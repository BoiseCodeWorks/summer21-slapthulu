import { ProxyState } from "../AppState.js";
import { enemyService } from "../Services/EnemyService.js";

function _drawAttacks(){
    let template = ''

    // for(let key in ProxyState.attacks){
    //     let attack = ProxyState.attacks[key]
    //     attack.
    // }

    Object.values(ProxyState.attacks)
        .forEach(attack =>{
            template += /*html*/`
                <div>
                    <button onclick="app.attacksController.attack('${attack.name}')">
                        ${attack.name}
                    </button>
                </div>
            `
        })

        document.getElementById('attacks').innerHTML = template

}

export class AttacksController{
    constructor(){
        ProxyState.on('attacks', _drawAttacks)
        _drawAttacks()
    }

    attack(attackName){
        enemyService.runAttack(attackName)    
    }
}