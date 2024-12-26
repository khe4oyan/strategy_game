// interface
import IGameObject from './IGameObject';

class IPerson extends IGameObject{
  name;
  modules;
  _maxhp;
  hp;
  isDead;
  specialData;

  constructor(name, modules, img, hp, map_ref, i, j) {
    super(img, i, j, map_ref);
    this.name = name;
    this.modules = modules;
    this._maxhp = hp;
    this.hp = hp;
    this.isDead = false;
    this.specialData = new Map();
  }

  // basic reactions
  afterMove() {
    for (let i = 0; i < this.modules.length; ++i) {
      this.modules[i].afterMove(this.map_ref);
    }
  }
  afterAttack() {}
  afterTakeDamage() {}
  damage(damage) {
    this.hp -= damage;
    if (this.hp < 1) {
      this.isDead = true;
    }
  }

  // special data
  setSpecialData(key, value) {
    this.specialData.set(key, value);
  }
  getSpecialData(key) {
    return this.specialData.get(key);
  }
  getSpecialAllDatas() {
    // TODO: [{key, value}]
  }
};

export default IPerson;