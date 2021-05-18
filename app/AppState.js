import { Attack } from "./Models/Attack.js"
import { Enemy } from "./Models/Enemy.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  // assign data here
  enemy = new Enemy("Karl", 100, 'https://zeldawiki.info/w/images/5/50/LANS_Octorok_art.png')
  attacks = {
    slap: new Attack("slap", 1),
    punch: new Attack("punch", 5),
    kick: new Attack("kick", 15),
    haduoken: new Attack("haduoken", 50)
  }
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
