import { ProxyState } from "../AppState.js";

class EnemyService{
    runAttack(attackName){
        let attack = ProxyState.attacks[attackName]
        if(!attack){
            throw new Error('Bad attack name: ' + attackName)
        }
        ProxyState.enemy.health -= attack.damage
        ProxyState.enemy = ProxyState.enemy
        console.log(ProxyState.enemy)

        // if(attackName === 'slap'){
        //     ProxyState.enemy.health -= ProxyState.attacks.slap.damage
        // }
        // if(attackName === 'kick'){
        //     ProxyState.enemy.health -= ProxyState.attacks.kick.damage
        // }
        // if(attackName === 'punch'){
        //     ProxyState.enemy.health -= ProxyState.attacks.punch.damage
        // }

    }
}

// SINGLETON
export const enemyService = new EnemyService()
