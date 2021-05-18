import { ProxyState } from "../AppState.js";

// private
function _drawEnemy(){
  let enemy = ProxyState.enemy
  let enemyTemplate = /*html*/`
  <div class="card">
  <div class="card-body text-center">
      <img src="${enemy.img}" height="200">
      <p>${enemy.name} - ${enemy.health}</p>
    </div>
  </div>
  `
  document.getElementById('enemy').innerHTML = enemyTemplate
}

export class EnemyController{
    // public
    constructor(){
      ProxyState.on('enemy', _drawEnemy)
      _drawEnemy()
    }
    
    
  }