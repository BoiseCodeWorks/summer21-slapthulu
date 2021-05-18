import { ProxyState } from "./AppState.js";
import { AttacksController } from "./Controllers/AttacksController.js";
import { EnemyController } from "./Controllers/EnemyController.js";

class App {
  enemyController = new EnemyController()
  attacksController = new AttacksController()
}

console.log(ProxyState)


window["app"] = new App();
