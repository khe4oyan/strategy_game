class IPerson {
  name;
  modules;
  img;
  hp;
  isDead;
  map_ref;
  specialData;
  i;
  j;

  constructor(name, modules, img, hp, map_ref, i, j) {
    this.name = name;
    this.modules = modules;
    this.img = img;
    this.hp = hp;
    this.isDead = false;
    this.map_ref = map_ref;
    this.specialData = new Map();
    this.i = i;
    this.j = j;
  }

  // basic reactions
  afterMove() {
    for (let i = 0; i < this.modules.length; ++i) {
      this.modules[i].afterMove(this.map_ref);
    }
  }
  afterAttack() {}
  afterTakeDamage() {}

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